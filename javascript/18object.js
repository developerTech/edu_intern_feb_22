var a = {} //object
var b = [] //array

var movieName1 = "Avengers"
var movieRating1 = 4.5
var movieInd1 = "Hollywood"


var movieName2 = "Jab We Met"
var movieRating2 = 4.8
var movieInd2 = "Bollywood"

var movie = {
    name:'Jab We Met',
    rating:4.8,
    ind:'Bollywood'
}

movie.name
'Jab We Met'
movie.rating
4.8
movie['name']
'Jab We Met'
movie['ind']
'Bollywood'

var movie = {
    name:'Jab We Met',
    rating:4.8,
    ind:'Bollywood'
}

movie.rating = 4.7
4.7
movie
{name: 'Jab We Met', rating: 4.7, ind: 'Bollywood'}
movie.type = 'Action'
'Action'
movie
{name: 'Jab We Met', rating: 4.7, ind: 'Bollywood', type: 'Action'}
delete movie.ind
true
movie
{name: 'Jab We Met', rating: 4.7, type: 'Action'}