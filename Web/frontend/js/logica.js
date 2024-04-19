
function getListUsers(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listUsers'));

    if(listaUsuarios == null){
        listaUsuarios = [
            ['123456','user@email.com', '1'],
            ['456789','user2@email.com','1'],
            ['1234567','admin@email.com','2']
        ];
    }
    console.log(listaUsuarios);
    return listaUsuarios
}

function validarCredenciales(email, password){
    var listaUsuarios = getListUsers();
    var autorizado = false;
    //console.log(listaUsuarios);
    for(var indice = 0; indice<listaUsuarios.length;indice++) {
        if(email == listaUsuarios[indice][1] && password == listaUsuarios[indice][0]){
            autorizado = true;
            sessionStorage.setItem('activeUser', listaUsuarios[indice][1])
            sessionStorage.setItem('activeUserRol', listaUsuarios[indice][2])
        }
        
    };
return autorizado

}

function loginUser(emailUser, passUser, rolUser){
    this.emailUser = emailUser;
    this.passUser = passUser;
    this.rolUser = rolUser;
}

