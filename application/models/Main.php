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
        $posts = $this->db->row('SELECT
        POSTS_AND_COMMENTS.*,
        u.username AS cmt_author_name
        FROM (
             SELECT
                    POSTS.*,
                    c.author_id AS cmt_author_id,
                    c.comment_text,
                    c.postdate  AS cmt_postdate
             FROM (
                  SELECT
                         POSTS_WITH_AUTHORS.*,
                         COUNT(l.id) AS \'count\'
                  FROM (
                       SELECT
                              p.*,
                              username as author_name
                       FROM posts p
                              INNER JOIN users ON p.author_id = users.id
                       ORDER BY postdate DESC
                       LIMIT ' . $limit . ' OFFSET ' . $offset . ') POSTS_WITH_AUTHORS
                         LEFT JOIN
                           likes l ON POSTS_WITH_AUTHORS.id = l.post_id
                  GROUP BY
                           POSTS_WITH_AUTHORS.id) POSTS
                    LEFT JOIN comments c ON POSTS.id = c.post_id
             ) POSTS_AND_COMMENTS
               LEFT JOIN users u ON cmt_author_id = u.id');
        return $posts;
    }
}

/**
 * SELECT
 * POSTS_AND_COMMENTS.*,
 * u.username AS cmt_author_name
 * FROM (
 * SELECT
 * POSTS.*,
 * c.author_id AS cmt_author_id,
 * c.comment_text,
 * c.postdate  AS cmt_postdate
 * FROM (
 * SELECT
 * A.*,
 * COUNT(l.id) AS 'count'
 * FROM (
 * SELECT
 * p.*,
 * username as author_name
 * FROM posts p
 * INNER JOIN users ON p.author_id = users.id
 * ORDER BY postdate DESC
 * LIMIT 10 OFFSET 0) A
 * LEFT JOIN
 * likes l ON A.id = l.post_id
 * GROUP BY
 * A.id) POSTS
 * LEFT JOIN comments c ON POSTS.id = c.post_id
 * ) POSTS_AND_COMMENTS
 * LEFT JOIN users u ON cmt_author_id = u.id
 */

/*
 *
 * SELECT
  x.*,
  u.username AS autor_name

FROM (
       SELECT
         p.id,
         p.filename,
         p.postdate,
         p.author_id      AS uid,
         COUNT(c.post_id) AS comments_count

       FROM
         posts p
         LEFT JOIN
         comments c ON p.id = c.post_id
       GROUP BY
         p.id
     ) x
  LEFT JOIN
  users u ON u.id = uid
ORDER BY postdate DESC
 */