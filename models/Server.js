const express = require ('express');

class Server {

constructor(){

    this.app= express ();
    this.port= process.env.PORT||8000;
    this.paths ={
        usuarios: '/api/usuarios'
    }

    this.middlewares();
    this.routes();

}


middlewares(){
    //PARSEO Y LECTURA DEL BODY
    this.app.use (express.json() );

    //DIRECTORIO PUBLICO.

    this.app.use(express.static('public'));

}


routes (){

    this.app.use(this.paths.usuarios,require('../routes/usuarios'))
}

listen (){
    this.app.listen(this.port, ()=>{
        console.info(`Servidor corriendo en el puerto ${this.port}`); 

    })

}

}

module.exports = Server; 