FROM php:7.3.0-apache
MAINTAINER pzubar
RUN apt-get update && apt-get -y install ssmtp libjpeg-dev libpng-dev \
  && docker-php-ext-configure gd --with-png-dir=/usr --with-jpeg-dir=/usr \
  && docker-php-ext-install gd mysqli opcache \
  && apt-get clean \
# set recommended PHP.ini settings
# see https://secure.php.net/manual/en/opcache.installation.php
RUN { \
            echo 'opcache.memory_consumption=128'; \
            echo 'opcache.interned_strings_buffer=8'; \
            echo 'opcache.max_accelerated_files=4000'; \
            echo 'opcache.revalidate_freq=2'; \
            echo 'opcache.fast_shutdown=1'; \
            echo 'opcache.enable_cli=1'; \
    } > /usr/local/etc/php/conf.d/opcache-recommended.ini
# and adding a php.ini with the senmail path to ssmtp
RUN echo 'sendmail_path = /usr/sbin/ssmtp -t' >> /usr/local/etc/php/php.ini
# now copy the local ssmtp.conf file
COPY local-ssmtp.conf /etc/ssmtp/ssmtp.conf
RUN docker-php-ext-install pdo pdo_mysql mysqli
RUN a2enmod rewrite expires