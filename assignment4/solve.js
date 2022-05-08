var ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
]

// find unique restaurant
// total number of occurance of particular restaurant
// find avg
// return object

let distinct = [];
for(i=0;i<ratingData.length;i++){
    if(distinct.indexOf(ratingData[i].restaurant) == -1){
        distinct.push(ratingData[i].restaurant)
    }
}

//console.log(distinct)

let unique = [ 'KFC', 'Burger King', 'Domino', 'Subway', 'Pizza Hut' ]
let avgRating = [];
let outRating = 0;
let count = 0

for(i=0;i<unique.length;i++){
    for(j=0;j<ratingData.length;j++){
        if(unique[i] == ratingData[j].restaurant){
            outRating += ratingData[j].rating;
            count = count+1
        }
    }

    //console.log("outRating>>>>>",outRating)
    //console.log("count>>>>>",count)
    let output = Number(outRating)/Number(count);
    let myObj = {};
    myObj.restaurant = unique[i];
    myObj.averageRating = output
    avgRating.push(myObj);
    outRating = 0;
    count = 0
}

//console.log(avgRating)

/*
[
  { restaurant: 'KFC', averageRating: 4 },
  { restaurant: 'Burger King', averageRating: 4 },
  { restaurant: 'Domino', averageRating: 1.5 },
  { restaurant: 'Subway', averageRating: 3.5 },
  { restaurant: 'Pizza Hut', averageRating: 5 }
]
*/

let out = [
    { restaurant: 'KFC', averageRating: 4 },
    { restaurant: 'Burger King', averageRating: 4 },
    { restaurant: 'Domino', averageRating: 1.5 },
    { restaurant: 'Subway', averageRating: 3.5 },
    { restaurant: 'Pizza Hut', averageRating: 5 }
]

out.filter((data) => {return data.averageRating>4})