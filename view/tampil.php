<table class="table">
	<thead>
		<tr>
			<th>No</th>
			<th>NIM</th>
			<th>Nama</th>
			<th>Jurusan</th>
			<th>Alamat</th>
			<th>Aksi</th>
		</tr>
	</thead>
	<tbody>
	<?php
		include_once '../config/koneksi.php';
		$dbcon = new Database();
		$db = $dbcon->dbkoneksi();
		try {
			$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$tampil = $db->query("SELECT * FROM tb_m");
			$no = 1;
			while($data = $tampil->fetch(PDO::FETCH_LAZY)) {
	?>
		<tr>
			<td><?php echo $no++; ?></td>
			<td><?php echo $data[0]; ?></td>
			<td><?php echo $data['nama']; ?></td>
			<td><?php echo $data->jrsn; ?></td>
			<td><?php echo $data->alamat; ?></td>
			<td>
				<button id="<?php echo $data[0]; ?>"  class="btn-edit">Edit</button>
				<button id="<?php echo $data[0]; ?>" class="btn-hps">Hapus</button>
			</td>
		</tr>
	<?php
			} 
		} catch (Exception $e) {
			echo $e->getMessage();
		}
	?>
	</tbody>
</table>