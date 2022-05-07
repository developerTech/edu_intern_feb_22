const cityUrl = "https://zomatoajulypi.herokuapp.com/location"
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

// function getCity(){
//     fetch(cityUrl)
//     .then((res) => res.json())
//     .then((data) => {
//         data.map((item) => {
//             let element = document.createElement('option') ///<option></option>
//             let text = document.createTextNode(item.state) // Delhi
//             element.appendChild(text) //<option>Delhi</option>
//             element.value = item.state_id //<option value="1">Delhi</option>
//             document.getElementById('city').appendChild(element)
//             /*
//                 <select>
//                     <option value="1">Delhi</option>
//                 </select>
//             */
//         })
//     })
// }

// async function getCity(){
//     let response = await fetch(cityUrl)
//     let data = await response.json()
//     data.map((item) => {
//         let element = document.createElement('option') ///<option></option>
//         let text = document.createTextNode(item.state) // Delhi
//         element.appendChild(text) //<option>Delhi</option>
//         element.value = item.state_id //<option value="1">Delhi</option>
//         document.getElementById('city').appendChild(element)
//     })
// }

const getCity = async() =>{
    let response = await fetch(cityUrl)
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option') ///<option></option>
        let text = document.createTextNode(item.state) // Delhi
        element.appendChild(text) //<option>Delhi</option>
        element.value = item.state_id //<option value="1">Delhi</option>
        document.getElementById('city').appendChild(element)
    })
}

const getRestaurants = async() => {
    let stateId = document.getElementById('city').value;
    let rest = document.getElementById('restaurant');
    while(rest.length>0){
        rest.remove(0)
    }
    let response = await fetch(`${restUrl}${stateId}`)
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option')
        let text = document.createTextNode(`${item.restaurant_name} | ${item.address}`)
        element.appendChild(text)
        rest.appendChild(element)
    })
}