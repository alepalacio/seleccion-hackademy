const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');

//Routes
router.post('/pets', async (req, res) => {
    
    try {
        const petDB = new Pet(req.body);
        await petDB.save();
        //console.log(`New pet: ${petDB}`);
        res.json({
            status: true,
            response: petDB
        });

    } catch (error) {
        //console.log(error);
        res.json({
            status: false,
            response: "Error at saving new pet"
        });
    };
});

router.get('/pets', async (req, res) => {

    try {
        const petDB = await Pet.find();
        res.json({
            status: true,
            response: petDB
        });

    } catch (error) {
        //console.log(error);
        res.json({
            status: false,
            response: 'Cannot show pets list'
        });
    };
});

router.delete('/pets/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const petDB = await Pet.findByIdAndDelete({_id: id});

        if (petDB) {;
            res.json({
                status: true,
                response: 'Pet deleted',
                "Pet Deleted": petDB
                
            });
        } else {
            res.json({
                status: false,
                response: 'Failed deletion'
            });
        }
    } catch (error) {
        //console.log(error);
        res.json({
            status: false,
            response: 'Failed deletion'
        });
    };
});

module.exports = router;