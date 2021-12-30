function formlogin() {
    const nama_pengguna = "maaatca";
    const password_pengguna = "1234567";
    let nama = document.getElementById("nama").value;
    let password = document.getElementById("password").value;
    if(nama == nama_pengguna && password == password_pengguna) {
        document.body.innerHTML="<h1>Login Sukses</h1>"
    }else{
        alert("Masukan Data yang Valid!")
    }
    }