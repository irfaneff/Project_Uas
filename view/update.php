<fieldset id="FormAction" style="width: 420px;">
	<legend><b>Edit Data</b></legend>
	<?php 
		include "../config/koneksi.php";
		$dbcon = new Database();
		$db = $dbcon->dbkoneksi();
		$id = @$_POST['id'];
		$tampilId = $db->query("SELECT * FROM tb_m WHERE nim = '$id'");
		$data = $tampilId->fetch(PDO::FETCH_OBJ);
	?>
	<table>
		<tr>
			<td><b>NIM</b></td>
			<td><b>:</b></td>
			<td>
				<input type="hidden" id="nimM" value="<?php echo $data->nim; ?>">
				<input type="number" id="nim" placeholder="Masukan NIM" value="<?php echo $data->nim; ?>">
			</td>
		</tr>

		<tr>
			<td><b>Nama</b></td>
			<td><b>:</b></td>
			<td>
				<input type="text" id="nama" placeholder="Masukan Nama" value="<?php echo $data->nama ?>">
			</td>
		</tr>

		<tr>
			<td><b>Jurusan</b></td>
			<td><b>:</b></td>
			<td>
				<input type="text" id="jrsn" value="<?php echo $data->jrsn; ?>">
			</td>
		</tr>

		<tr>
			<td><b>Alamat</b></td>
			<td><b>:</b></td>
			<td>
				<input type="text" id="almt" value="<?php echo $data->alamat; ?>">
			</td>
		</tr>

		<tr>
			<td></td>
			<td></td>
			<td>
				<button id="editT" class="btn-edit">Update Data</button>
				<button id="btl" class="btn-hps">Batal</button>
			</td>
		</tr>
	</table>
</fieldset>