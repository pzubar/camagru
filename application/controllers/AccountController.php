<?php

namespace application\controllers;

use application\core\Controller;
use Exception;

class AccountController extends Controller
{
    public function loginAction($message = null)
    {
        if (isset($_SESSION['logged_user']))
            $this->view::redirect('/');
        if (!empty($_POST) && !empty($_POST['login']) && !empty($_POST['password'])) {
            try {
                $this->model->loginUser($_POST['login'], $_POST['password']);
            } catch (Exception $exception) {
                $this->view->message('error', $exception->getMessage());
            }
            $this->view::redirect('/');
        }
        if ($message) {
            if ($message === "check-email")
                $message = "Check your email, we sent an account confirmation letter!";
            else if ($message === "activation-success")
                $message = "Your account was successfully activated";
            else if ($message === "remind-success")
                $message = "Check your email, we sent an instructions letter!";
            else if ($message === "change-success")
                $message = "Your email changed successfully";
            else {
                $this->view->errorCode(404);
            }
        }
        $this->view->render('Sign in', ['message' => $message]);
    }

    public function registerAction()
    {
        if (isset($_SESSION['logged_user']))
            $this->view::redirect('/');
        if (!empty($_POST)) {
            if (!empty($_POST['email']) && !empty($_POST['login'])) {
                if ($this->model->checkRegisterData($_POST['email'], $_POST['login'])) {
                    $this->view->message('fail', 'User with such a login or email already exists');
                } else {
                    $this->model->createUser($_POST['email'], $_POST['login'], $_POST['password']);
                    $this->view->redirect('/account/login/check-email');
                }
            }
        }
        $this->view->render('Sign up');
    }

    public function authAction($hash = null)
    {
        if ($hash) {
            $this->model->activateUser($hash);
            $this->view->redirect('/account/login/activation-success');
        } else
            $this->view::redirect('/');
    }

    public function remindPasswordAction($hash = null)
    {
        if (isset($_SESSION['logged_user']))
            $this->view::redirect('/');
        if (isset($_POST['password']) && isset($_POST['hash'])) {
            try {
                $this->model->changePassword($_POST['hash'], $_POST['password']);
                $this->view::redirect('/account/login/change-success');
            } catch (Exception $exception) {
                $this->view->message('error', $exception->getMessage());
            }
        }
        if ($hash) {
            $this->view->render('Reset password', ['isset_hash' => true, 'hash' => $hash]);
        }
        if (!empty($_POST['email'])) {
            try {
                $this->model->remindPassword($_POST['email']);
            } catch (Exception $exception) {
                $this->view->message('error', $exception->getMessage());
            }
            $this->view::redirect('/account/login/remind-success');
        }
        $this->view->render('Reset password');
    }

    public function settingsAction()
    {
        if (!isset($_SESSION['logged_user']))
            $this->view::redirect('/account/login');

    }
}