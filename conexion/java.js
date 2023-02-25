const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "jdbc:mysql://localhost:3306/xd",
  user: 'root',
  password: '',
  database: 'xd'
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectarse a la base de datos:', error);
    return;
  }
  
  console.log('Conexión exitosa a la base de datos!');
  
  connection.query('SELECT * FROM usuarios', (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      return;
    }
    
    console.log('Resultados de la consulta:', results);
  });
});

    var row="";
function ingresar(){
    const usuario = document.getElementById('usuario');
    const contrasena = document.getElementById('contrasena');
    const add = document.getElementById('add');
  
    add.innerHTML = row;
};