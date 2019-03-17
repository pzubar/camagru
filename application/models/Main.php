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
		$limit = 5;
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
                 COUNT(l.id) AS likes_count
          FROM (
               SELECT
                      p.*,
                      username as author_name
               FROM posts p
                      INNER JOIN users ON p.author_id = users.id
               ORDER BY p.postdate DESC
               LIMIT ' . $limit . ' OFFSET ' . $offset . ') POSTS_WITH_AUTHORS
                 LEFT JOIN
                   likes l ON POSTS_WITH_AUTHORS.id = l.post_id
          GROUP BY
                   POSTS_WITH_AUTHORS.id) POSTS
            LEFT JOIN comments c ON POSTS.id = c.post_id
     ) POSTS_AND_COMMENTS
       LEFT JOIN users u ON cmt_author_id = u.id
       ORDER BY postdate DESC');

		$likes = $this->db->row('SELECT
                    posts.id,
                    likes.author_id
               FROM posts
                      INNER JOIN likes ON likes.post_id = posts.id
               ORDER BY posts.postdate DESC
               LIMIT ' . $limit . ' OFFSET ' . $offset);
		$length = count($posts);
		for ($key = 0; $key < $length; $key++) {
			if (!isset($posts[$key]['id']))
				continue;
			$posts[$key]['comments'] = [];

			for ($i = $key; isset($posts[$i]) && isset($posts[$i]['id']) && $posts[$i]['id'] === $posts[$key]['id']; $i++) {
				$elem = $posts[$i];
				if (!isset($elem['cmt_author_name']))
					break;
				array_push($posts[$key]['comments'], ['author' => $elem['cmt_author_name'], 'text' => $elem['comment_text']]);
				if ($i !== $key) {
					array_splice($posts, $i, 1);
					$length--;
					$i--;
				}
			}
		}
		foreach ($posts as $key => $value) {
			$posts[$key]['likes_authors'] = [];
			foreach ($likes as $like) {
				if ($like['id'] == $value['id']) {
					array_push($posts[$key]['likes_authors'], (int)$like['author_id']);
				}
			}
		}
		return $posts;
	}
}
