import express from 'express';
import {getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from '../data/restaurants.js';
const router = express.Router();
// Add routes here
router.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();
    res.json(restaurants);

});

router.get('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const restaurant = getRestaurant(id);
    if (restaurant){
        res.render("restaurant-details", {restaurant});
    } else{
        res.status(404).json({ message: 'restaurant not found}' });
    }
});

router.post('/restaurants', (req, res) => {
    const {name,address,phone,photo} = req.body;
    const newRestaurant ={
        name,
        phone,
        address,
        photo
    };
    const createdRestaurant = createRestaurant(newRestaurant);
    res.status(201).json(createdRestaurant);
});
router.delete('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const deletedRestaurant = deleteRestaurant(id);
        res.json({message : 'deleted Restaurant:', deletedRestaurant});
    }catch(error){
        res.status(500).json({ "message": '${error}' });
    } 
});

export {router as backendRouter};