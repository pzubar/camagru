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
	
	/**
	 * initialization of database connection
	 */
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

    public function query(string $sql, array $params)
    {
	    try {
	    	$statement = $this->db->prepare($sql);
	    	if (!empty($params)) {
			    foreach ($params as $key => $val) {
				    $statement->bindValue(':' . $key, $val);
			    }
		    }
	    	$statement->execute();
		    return $statement;
//		    $query = $this->db->query($sql);
	    }
	    catch (PDOException $exception) {
		    exit ('Query failed: ' . $exception->getMessage());
	    }
//    	return $query;
    }

    public function row(string $sql, array $params)
    {
	    $result = $this->query($sql, $params);
	    return $result->fetchAll(PDO::FETCH_ASSOC);
    }

	public function column(string $sql, array $params)
	{
		$result = $this->query($sql, $params);
		return $result->fetchColumn();
	}
}