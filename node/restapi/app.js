let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 9870;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = process.env.MonogUrl;
let db;


app.get('/',(req,res) => {
    res.send('Express Server default')
})

app.get('/items/:collections',(req,res) => {
  db.collection(req.params.collections).find().toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

app.get('/location',(req,res) => {
    db.collection('location').find().toArray((err,result) => {
      if(err) throw err;
      res.send(result)
    })
})

app.get('/mealType',(req,res) => {
    db.collection('mealType').find().toArray((err,result) => {
      if(err) throw err;
      res.send(result)
    })
})

app.get('/restaurants',(req,res) => {
  let stateId = Number(req.query.stateId)
  let mealId = Number(req.query.mealId)
  let query = {}
  if(stateId && mealId){
    query = {state_id:stateId,'mealTypes.mealtype_id':mealId}
  }
  else if(stateId){
    query = {state_id:stateId}
  }else if(mealId){
    query = {'mealTypes.mealtype_id':mealId}
  }
  db.collection('restaurants').find(query).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})


//Connection with db
MongoClient.connect(mongoUrl,(err,client) => {
  if(err) console.log(`Error While Connecting`);
  db = client.db('internfeb');
  app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Express Server listening on port ${port}`)
  })
})


/*
app.get('/restaurants/:id',(req,res) => {
  let id = req.params.id;
  let state = req.query.state
  let country  = req.query.country
  console.log(`>>>>>state>>>`,state)
  console.log(`>>>>>country>>>`,country)
  res.send(id)

  // db.collection('restaurants').find().toArray((err,result) => {
  //   if(err) throw err;
  //   res.send(result)
  // })
})
*/