<?php 
	class Database {
		private $dsn;

		public $default = array(
			'datasource' => 'Database/Mysql',
			'persistent' =>  false,
			'host'		 => 'localhost',
			'login'		 => 'root',
			'password'	 => '',
			'database'	 => 'db_4d',
			'prefix'	 => 'tbl_',
			'encoding'	 => 'UTF8',
			'port'		 => '',
		);

		public function dbkoneksi() {
			static $instance;
			if($instance === null) {
				$opt = array(
					PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
					PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC,
					PDO::ATTR_EMULATE_PREPARES=>FALSE
				);

				$dsn = 'mysql:host='.$this->default['host'].';dbname='.$this->default['database'].';charset='.$this->default['encoding'];
				$instance = new PDO($dsn,$this->default['login'],$this->default['password'],$opt);
			}

			return $instance;
		}
	}


	// Database Koneksi
	$dbcon = new Database();
	$dbs = $dbcon->dbkoneksi();

	//Controller Anggota
	include_once "../controller/controller_mhs.php";
	$anggota = new Anggota($dbs);
?>