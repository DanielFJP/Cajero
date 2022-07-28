
function ir() {
    var c = 123456;
    var u = "daniel@djp.com";

    if (document.form.contra.value == c && document.form.usua.value == u) {
        //alert("Bienvenido");
        window.location = "cuenta.html";
    }


    else { alert("Verifique el Usuario y Contraseña") }
    
}

