<?php
	
	namespace application\models;
	
	use application\core\Model;
	
	class Main extends Model {
	
//		public function __construct()
//		{
//			parent::__construct();
//			debug($this->db);
//		}
		
		public function getPosts() {
			$result = $this->db->row('SELECT posts.*, username FROM posts INNER JOIN users ON posts.author_id = users.id ORDER BY postdate DESC');
//			$result = $this->db->row('SELECT h1, description FROM news');
//			$result = "hello";
			return $result;
		}
	}