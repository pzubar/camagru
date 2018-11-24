<?php
	/**
	 * Created by PhpStorm.
	 * User: Admin
	 * Date: 24.11.2018
	 * Time: 10:30
	 */
	
	namespace application\core;
	
	use application\lib\Db;
	
	abstract class Model
	{
		public $db;
		
		public function __construct()
		{
			$this->db = new Db;
		}
	}