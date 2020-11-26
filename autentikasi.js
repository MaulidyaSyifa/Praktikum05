//Javascript Doucment
function validasi() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if (user == "" && pass == "") {
		alert('Password Tidak Boleh Kosong');
		return false;
	}
	else if (pass.length < 4){
		alert('Password Kurang Dari 4');
		return false;
	}
	else if (user == "syifa" && pass == "syifa15"){
		alert('Anda Berhasil Login');
		window.location = "home.html";
		return false;
	}else{
		alert("Password Anda Salah, Coba Lagi");
	}
		
}