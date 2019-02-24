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
			$result = $this->db->row('SELECT posts.*, username FROM posts INNER JOIN users ON posts.author_id = users.id ORDER BY postdate DESC LIMIT ' . $limit . ' OFFSET ' . $offset);

			return $result;
		}
	}