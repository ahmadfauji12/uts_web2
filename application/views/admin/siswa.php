</div>
<section id="siswa" class="">
<div class="row stats block-1-3 block-m-1-2 block-mob-full" data-aos="fade-up">
        
   
    <div class="col-block stats__col">
        <div class="stats__count">108</div>
        <h5>Projects Completed</h5>
        <a class="smoothscroll" href="#user">kelas X (Sepuluh)</a>
    </div>
    <div class="col-block stats__col">
        <div class="stats__count">1507</div>
        <h5>Cups of Coffee</h5>
        <a class="smoothscroll" href="#kelas">kelas XI (Sebelas)</a>
    </div>
    <div class="col-block stats__col ">
        <div class="stats__count">129</div>
        <h5>Awards Received</h5>
        <a class="smoothscroll" href="#siswa">kelas XII (Dua Belas)</a>
    </div>

</div> <!-- end stats -->

</section> <!-- end s-stats -->
<div class="container">
<a href="<?= base_url('admin/insertsiswa'); ?>" class="btn btn-primary" style="margin-bottom: 10px"> + Tambah Data</a>
<table class="table table-striped table-dark">
  <thead >
    <tr>
          <th width="1%">No</th>
          <th width="15%">Nim</th>
          <th width="15%">Nama Lengkap</th>
          <th width="15%">Tanggal Lahir</th>
           <th width="15%">Agama</th>
           <th width="15%">Alamat</th>
          <th width="30%" colspan="" ><em class="fa fa-cog"></em></th>
        </tr>
  </thead>
  <tbody>
  <?php $i= 1; ?>
  <?php foreach($Siswa as $aa) : ?>
    <tr>
      <th style="vertical-align: middle;" scope="row" ><?= $i; ?></th>
      <td style="vertical-align: middle;"><?= $aa['nim']?></td>
      <td style="vertical-align: middle;"><?= $aa['nama']?></td>
      <td style="vertical-align: middle;"><?= $aa['tanggal_lahir']?></td>
      <td style="vertical-align: middle;"><?= $aa['agama']?></td>
      <td style="vertical-align: middle;"><?= $aa['alamat']?></td>
      <td style="vertical-align: middle;">
      <a href=""class="btn btn-small"><i class="fas fa-edit"></i></a>
						<a onclick="" href="<?= base_url('admin/deletesiswa/'.$aa['nim']); ?> " onclick="return confirm('apa anda yakin.....?');" class="btn btn-danger"><i class="fa fa-trash"></i></a>
      </td>
    </tr>
    <?php $i++; ?>
<?php endforeach; ?>
  </tbody>
</table>
</div>