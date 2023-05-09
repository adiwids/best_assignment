window.$ = jQuery.noConflict();

function onPageLoad() {
  $('#form_submit').click(function(e) {
    e.preventDefault();

    // semua validasi sukses
    if(validasiNamaLengkap() && validasiJenisKelamin() && validasiHobi()) {
      const fnama = $('#form_biodata').find('input[name=nama_lengkap]');
      const fjk = $('#form_biodata').find('input[name=jenis_kelamin]:checked');
      const hobi = [];
      $.each($('#form_biodata').find('input[name=hobi]:checked'), function(idx, el) {
        hobi.push($(el).val());
      });
      var message = "Data biodata tersimpan.\nNama Lengkap: %nama%\nKelamin: %jk%\nHobi: %hb%";
      message = message.replace("%nama%", fnama.val());
      message = message.replace("%jk%", fjk.val());
      message = message.replace("%hb%", hobi.join(", "));
      alert(message);
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
