window.$ = jQuery.noConflict();

function onPageLoad() {
  $('#form_submit').click(function(e) {
    e.preventDefault();

    // semua validasi sukses
    if(validasiNamaLengkap() && validasiJenisKelamin() && validasiHobi()) {
      alert("Data biodata tersimpan.");
    } else {
      // jika ada input yg belum diisi, memunculkan alert dari validasi masing-masing field.
    }
  });
}

function validasiNamaLengkap() {
  const field = $('#form_biodata').find('input[name=nama_lengkap]');

  if(field.val().trim().length == 0) {
    alert("Nama Lengkap tidak boleh kosong");
    return false;
  }

  return true;
}

function validasiJenisKelamin() {
  const selected = $('#form_biodata').find('input[name=jenis_kelamin]:checked');
  if(selected.length == 0) {
    alert("Pilih salah satu jenis kelamin");
    return false;
  }

  return true;
}

function validasiHobi() {
  const selected = $('#form_biodata').find('input[name=hobi]:checked');
  if(selected.length == 0) {
    alert("Pilih salah satu hobi");
    return false;
  }

  return true;
}

$(document).ready(onPageLoad);
