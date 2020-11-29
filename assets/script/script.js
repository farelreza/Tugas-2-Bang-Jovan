function getTanggal() {
    let tanggalLengkap = new String();
    let namaHari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namaHari = namaHari.split(" ");
    let namaBulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namaBulan = namaBulan.split(" ");
    let tgl = new Date();
    let hari = tgl.getDay();
    let tanggal = tgl.getDate();
    let bulan = tgl.getMonth();
    let tahun = tgl.getFullYear();
    tanggalLengkap = namaHari[hari] + ", " + tanggal + " " + namaBulan[bulan] + " " + tahun;

    return tanggalLengkap;
}

window.setTimeout("getJam()", 1000);
function getJam() {
    let tanggal = new Date();
    setTimeout("getJam()", 1000);
    document.getElementById("jam").innerHTML = tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds();
}

function getAge() {
    let tgl = new Date();
    let bulan = tgl.getMonth();
    let tahun = tgl.getFullYear();

    let umur = 0;
    let tahun_lahir = 2001;
    let bulan_lahir = 8;
    let tanggal_lahir = 30;

    if (bulan >= bulan_lahir) {
        if (tanggal_lahir >= 30) {
            umur = tahun - tahun_lahir;
        }
    } else {
        umur = tahun - tahun_lahir - 1;
    }

    return umur;
}

document.getElementById("hari").innerHTML = getTanggal();
document.getElementById("age").innerHTML = getAge() + " tahun";