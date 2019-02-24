<?php

namespace application\models;

use application\core\Model;

class Main extends Model
{
    public function getPostsNum()
    {
        $result = $this->db->column('SELECT COUNT(id)  FROM posts', []);
        return $result;
    }

    public function getPosts(string $page)
    {
        $limit = 10;
        $offset = (intval($page) - 1) * $limit;
        $posts = $this->db->row('SELECT posts.*, username FROM posts INNER JOIN users ON posts.author_id = users.id ORDER BY postdate DESC LIMIT ' . $limit . ' OFFSET ' . $offset);
        $comments = [];
        foreach ($posts as $value) {
            $comments[] = $this->db->row('SELECT * FROM comments WHERE post_id = :post_id', ['post_id' => $value['id']]);
        }

//            $comments =  $this->db->row('SELECT *,  FROM comments INNER JOIN  ON comments.post_id = users.id ORDER BY postdate DESC LIMIT ' . $limit . ' OFFSET ' . $offset);
        $result = [
            'posts' => $posts,
            'comments' => $comments
        ];
//			return $result;
        return $result;
    }
}