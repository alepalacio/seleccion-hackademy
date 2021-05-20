const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');

//Routes
router.post('/pets', async (req, res) => {
    
    try {
        const petDB = new Pet(req.body);
        await petDB.save();
        console.log(`New pet: ${petDB}`);
        res.send('New pet saved');

    } catch (error) {
        console.log(error)
    };
});

router.get('/', async (req, res) => {
    
})
        

router.delete('/pets/:id', async (req, res) => {
    const id = req.params.id

    try {
        const petDB = await Pet.findByIdAndDelete({_id: id});

        if (petDB) {
            console.log('Pet deleted');
            res.json({
                status: true,
                message: 'Pet deleted'
            });
        } else {
            res.json({
                status: false,
                message: 'Failed deletion'
            });
        }
    } catch (error) {
        console.log(error);
    };
});

module.exports = router;

        
