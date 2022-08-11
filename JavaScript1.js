function Enviar() { 
    var nome = document.getElementById("nomeid"); 
    var email = document.getElementById("emailid"); 
    if (nome.value != "") { 
    alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso'); 
    }
    if(email.value == "") {
        alert('Favor preencher o campo de e-mail');
    }
    }


    