// JavaScript Document
function logout() {
	var yakin = confirm("Yakin keluar?");
	if (yakin) {
		document.write("Berhasil Keluar");
		window.location = "syifa.html";
	} else {
		document.write("Baiklah, Tetap Disini :)");
		window.location = "home.html"
	}
}