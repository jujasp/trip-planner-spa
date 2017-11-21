const express = require('express')
const router = express.Router();
const Sequelize = require('sequelize')
const db = require('../models')
const Hotel = db.Hotel;
const Restaurant = db.Restaurant;
const Activity = db.Activity;
const Place = db.Place;
module.exports = router;

router.get('/', function(req, res, next){
	var allAttractions = {};

	Hotel.findAll()
	.then(function(hotels) {
	  allAttractions.hotels = hotels;
	  return Restaurant.findAll();
	})
	.then(function(restaurants) {
	  allAttractions.restaurants = restaurants;
	  return Activity.findAll();
	})
	.then(function(activities) {
	  allAttractions.activities = activities;
	})
	.then(function() {
	  res.json(allAttractions);
	})
	.catch(next);

})