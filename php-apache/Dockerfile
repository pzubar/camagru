FROM php:7.2.1-apache
MAINTAINER pzubar
COPY php.ini /usr/local/etc/php
RUN docker-php-ext-install pdo pdo_mysql mysqli
RUN a2enmod rewrite