<?php

namespace application\lib;

use PDO;

class Db
{
	protected $db;
    public function __construct()
    {
		require ROOT.'/application/config/database.php';
		$this->db = new PDO($DB_DSN.';dbname='.$DB_NAME.'', $DB_USER, $DB_PASSWORD);
    }

    public function query($sql)
    {
    	$query = $this->db->query($sql);
    	return $query;
    }

    public function row($sql)
    {
	    $result = $this->query($sql);
	    return $result->fetchAll();
    }

	public function column($sql)
	{
		$result = $this->query($sql);
		return $result->fetchColumn();
	}
}