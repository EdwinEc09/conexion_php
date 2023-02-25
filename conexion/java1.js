


var row="";
var filas = [];
function ingresar(){
    const usuario = document.getElementById('usuario');
    const contrasena = document.getElementById('contrasena');
    const add = document.getElementById('add');
    row +=`<tr>
        <th scope="row">${usuario.value}</th>
        <td>${contrasena.value}</td>
    </tr>`;
   //filas.push(row);
    add.innerHTML = row;
};
