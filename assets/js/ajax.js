$('#refresh').click(function() {
	$('#tambah_data').fadeOut();
	$('#refresh').fadeOut();
	$('#tampil_data').fadeOut();
	$('#jdl').fadeOut();
	$('#teks').fadeIn().html('<p><b>Sedang MeRefresh Data....</b></p>');
	setInterval(function() {
		$('#teks').fadeOut();
		$('#tambah_data').fadeIn();
		$('#jdl').fadeIn();
		$('#refresh').fadeIn();
		$('#tampil_data').fadeIn().load('view/tampil.php');
	},3000);
});

$('#tampil_data').load('view/tampil.php');
	$('#tambah_data').click(function(){
		$('#crudT').hide(500).slideDown(1000).load('view/tambah.php');
	});

	$('#crudT').on("click", "#simpanT", function() {
		var nim = $('#nim').val();
		var nama = $('#nama').val();
		var jrsn = $('#jrsn').val();
		var alamat = $('#alamat').val();



		if(nim == '') 
		{
			$('#alert').fadeIn().html('<p class="alert-danger">NIM Tidak Boleh Kosong</p>');
			setInterval(function() {
				$('#alert').fadeOut();
			},3000);
		}else if(nama == '') {
			$('#alert').fadeIn().html('<p class="alert-danger">Nama Tidak Boleh Kosong</p>');
			setInterval(function() {
				$('#alert').fadeOut();
			},3000);
		}else if(jrsn == '') {
			$('#alert').fadeIn().html('<p class="alert-danger">Jurusan Tidak Boleh Kosong</p>');
			setInterval(function() {
				$('#alert').fadeOut();
			},3000);
		}else if(alamat == '') {
			$('#alert').fadeIn().html('<p class="alert-danger">Alamat Tidak Boleh Kosong</p>');
			setInterval(function() {
				$('#alert').fadeOut();
			},3000);
		}else
		{
			$.ajax({
				url:'model/model_mhs.php?page=tambah',
				type: 'post',
				data: 'nim='+nim+'&nama='+nama+'&jrsn='+jrsn+'&almt='+alamat,
				success: function(msg) {
					if(msg == 'sukses') {
						$('#alert').fadeIn().html('<p class="alert-success">Data Sukses Ditambahkan</p>');
						$('#tampil_data').load('view/tampil.php');
						$('#crudT').fadeOut(1000);
						setInterval(function() {
							$('#alert').fadeOut();
						},3000);
					} else {
						$('#alert').fadeIn().html('<p class="alert-danger">Data Gagal Ditambahkan</p>');
						setInterval(function() {
							$('#alert').fadeOut();
						},3000);
					}
				}
			});
		}
	});

	$('#crudT').on("click", "#btl", function(){
		$('#crudT').slideUp(1000);
	});

	$('#tampil_data').on("click", ".btn-edit", function() {
		var id = $(this).attr('id');
		$.ajax({
			url: 'view/update.php',
			type: 'post',
			data: 'id='+id,
			success: function(msg) {
				$('#crudT').hide(500).slideDown(1000).html(msg);
			}
		});
	});

	$('#crudT').on("click", "#editT", function() {
		var nim = $('#nim').val();
		var nim2 = $('#nimM').val();
		var nama = $('#nama').val();
		var jrsn = $('#jrsn').val();
		var alamat = $('#almt').val();


		if(nim == '') 
		{
			$('#alert').fadeIn().html('<p class="alert-danger">NIM Tidak Boleh Kosong</p>');
			setInterval(function() {
				$('#alert').fadeOut();
			},3000);
		}else if(nama == '') {
			$('#alert').fadeIn().html('<p class="alert-danger">Nama Tidak Boleh Kosong</p>');
			setInterval(function() {
				$('#alert').fadeOut();
			},3000);
		} else if(jrsn == '') {
			$('#alert').fadeIn().html('<p class="alert-danger">Jurusan Tidak Boleh Kosong</p>');
			setInterval(function() {
				$('#alert').fadeOut();
			},3000);
		} else if(alamat == '') {
			$('#alert').fadeIn().html('<p class="alert-danger">Alamat Tidak Boleh Kosong</p>');
			setInterval(function() {
				$('#alert').fadeOut();
			},3000);
		}else
		{
			$.ajax({
				url:'model/model_mhs.php?page=edit',
				type: 'post',
				data: 'nim='+nim+'&nama='+nama+'&jrsn='+jrsn+'&nim2='+nim2+'&almt='+alamat,
				success: function(msg) {
					if(msg == 'sukses') {
						$('#alert').fadeIn().html('<p class="alert-success">Data Sukses Di Update</p>');
						$('#tampil_data').load('view/tampil.php');
						$('#crudT').fadeOut(1000);
						setInterval(function() {
							$('#alert').fadeOut();
						},3000);
					} else {
						$('#alert').fadeIn().html('<p class="alert-danger">Data Gagal Di Update</p>');
						setInterval(function() {
							$('#alert').fadeOut();
						},3000);
					}
				}
			});
		}
	});

	$('#tampil_data').on("click", ".btn-hps", function() {
		var id = $(this).attr('id');
		var conf = confirm("Yakin Ingin Menghapus Data...?");
		if(conf == true) {
			$.ajax({
				url: 'model/model_mhs.php?page=hapus',
				type: 'post',
				data: 'id='+id,
				success: function(msg) {
					if(msg == 'sukses') {
						$('#alert').fadeIn().html('<p class="alert-success">Data Sukses Di Dihapus</p>');
						$('#tampil_data').load('view/tampil.php');
						$('#crudT').fadeOut(1000);
						setInterval(function() {
							$('#alert').fadeOut();
						},3000);
					} else {
						$('#alert').fadeIn().html('<p class="alert-danger">Data Gagal Di Dihapus</p>');
						setInterval(function() {
							$('#alert').fadeOut();
						},3000);
					}
				}
			});
		}
	});