const {Router, request, response} = require ('express');

const bcryptjs = require('bcryptjs');

const router = Router();


//OBTENER USUARIOS/ get 
router.get('/', (req = request, res = response)  => {
    res.status(200).json({
        msg: 'get usuarios'
    })
});

//CREAR USUARIOS / post 

router.post('/',(req = request, res= response )=> {
    
    const {password, ...data} = req.body;
    
    const salt= bcryptjs.genSaltSync();
    const newPassword = bcryptjs.hashSync(`${data.password}`,salt);

    const newUser ={

        message: 'Usuario creado satisfactoriamente',
        data: data, 
    }

    res.status(200).json(newUser)

});

// OBTENER USUARIO POR ID / get 
router.get('/:id',(req = request, res= response )=> {
    res.status(200).json ({
        msg: 'get usuarios por id '
    })

});

// OBTENER USUARIOS POR id /get
router.get('/:id', (req = request, res = response)  => {
    res.status(200).json({
        msg: 'get usuarios por id'
    })
});


//ACTUALIZAR USUARIO /put 
router.put('/:id', (req = request, res = response)  => {
    res.status(200).json({
        msg: 'put usuarios actualizados'
    })
});


// ELIMINAR USUAIRO /delate 
router.delete('/:id', (req = request, res = response)  => {
    res.status(200).json({
        msg: 'delete para eliminar usuarios'
    })
});

module.exports  = router; 
