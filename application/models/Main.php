<?php
	
	namespace application\models;
	
	use application\core\Model;
	
	class Main extends Model {
	
//		public function __construct()
//		{
//			parent::__construct();
//			debug($this->db);
//		}
		
		public function getNews() {
			$result = $this->db->row('SELECT h1, description FROM news');
//			$result = "hello";
			return $result;
		}
	}