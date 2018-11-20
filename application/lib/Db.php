<?php

namespace application\lib;

use PDO;
use PDOException;

class Db
{
	/**
	 * @var PDO
	 */
	protected $db;

    public function __construct()
    {
	    require ROOT.'/application/config/database.php';
	    try {
		    $this->db = new PDO($DB_DSN . ';dbname=' . $DB_NAME . '', $DB_USER, $DB_PASSWORD);
		    $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	    }
	    catch (PDOException $exception) {
		    exit ('Connection failed: ' . $exeption->getMessage());
	    }
    }

    public function query($sql)
    {
	    try {
		    $query = $this->db->query($sql);
	    }
	    catch (PDOException $exception) {
		    exit ('Query failed: ' . $exception->getMessage());
	    }
    	return $query;
    }

    public function row($sql)
    {
	    $result = $this->query($sql);
	    return $result->fetchAll(PDO::FETCH_ASSOC);
    }

	public function column($sql)
	{
		$result = $this->query($sql);
		return $result->fetchColumn();
	}
}