const {Router, request} = require ('express');

const router = Router();
//OBTENER USUARIOS/ get 
router.get('/', (req = request, res = response)  => {
    res.status(200).json({
        msg: 'get usuarios'
    })
});

//CREAR USUARIOS / post 

router.post('/',(reg = request, res= response )=> {
    res.status(200).json ({
        msg: 'post usuarios'
    })

});

// OBTENER USUARIO POR ID / get 
router.get('/:id',(reg = request, res= response )=> {
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
