let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config()

let port = process.env.PORT || 9870;

const location = [
    {
      "_id": "6187738a62a1816f8858634e",
      "location_id": 4,
      "location_name": "Bibvewadi, Pune",
      "state_id": 2,
      "state": "Maharashtra",
      "country_name": "India"
    },
    {
      "_id": "6187738a62a1816f8858634d",
      "location_id": 1,
      "location_name": "Ashok Vihar Phase 3, New Delhi",
      "state_id": 1,
      "state": "Delhi",
      "country_name": "India"
    },
    {
      "_id": "6187738a62a1816f8858634f",
      "location_id": 8,
      "location_name": "Jeevan Bhima Nagar, Bangalore",
      "state_id": 3,
      "state": "Karnataka",
      "country_name": "India"
    },
    {
      "_id": "6187738a62a1816f88586350",
      "location_id": 13,
      "location_name": "Sector 13, Chandigarh",
      "state_id": 4,
      "state": "Punjab",
      "country_name": "India"
    }
  ]

const quickSearch = [
    {
      "_id": "6187761a62a1816f88593a4a",
      "mealtype_id": 2,
      "mealtype": "Lunch",
      "content": "Start your day with exclusive breakfast options",
      "meal_image": "https://i.ibb.co/8rPxkWP/lunch.jpg"
    },
    {
      "_id": "6187761a62a1816f88593a4b",
      "mealtype_id": 3,
      "mealtype": "Dinner",
      "content": "Start your day with exclusive breakfast options",
      "meal_image": "https://i.ibb.co/XjzPqYv/dinner.jpg"
    },
    {
      "_id": "6187761a62a1816f88593a4e",
      "mealtype_id": 6,
      "mealtype": "NightLife",
      "content": "Start your day with exclusive breakfast options",
      "meal_image": "https://i.ibb.co/q1fC2jW/nightlife.jpg"
    },
    {
      "_id": "6187761a62a1816f88593a4c",
      "mealtype_id": 4,
      "mealtype": "Snacks",
      "content": "Start your day with exclusive breakfast options",
      "meal_image": "https://i.ibb.co/wchCHfb/snacks.jpg"
    },
    {
      "_id": "6187761a62a1816f88593a4d",
      "mealtype_id": 5,
      "mealtype": "Drinks",
      "content": "Start your day with exclusive breakfast options",
      "meal_image": "https://i.ibb.co/YR0S6fV/drinks.jpg"
    },
    {
      "_id": "6187761a62a1816f88593a49",
      "mealtype_id": 1,
      "mealtype": "Breakfast",
      "content": "Start your day with exclusive breakfast options",
      "meal_image": "https://i.ibb.co/FVhSTWK/breakfast.jpg"
    }
  ]

app.get('/',(req,res) => {
    res.send('Express Server default')
})

app.get('/location',(req,res) => {
    res.send(location)
})

app.get('/quickSearch',(req,res) => {
    res.send(quickSearch)
})


app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Express Server listening on port ${port}`)
})