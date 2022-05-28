// page 1
> List of city
>>(Get) http://localhost:9100/location
> List of restaurant
>>(Get) http://localhost:9100/restaurants
> Restaurant on the basis of city
>>(Get) http://localhost:9100/restaurants?stateId=3
> List of QuickSearch
>>(Get) http://localhost:9100/mealType

//Page2
> List of restaurant on basis of meal
>>(Get) http://localhost:9100/restaurants?mealId=5
> http://localhost:9100/restaurants?mealId=5&stateId=2
> Filter on basis of cuisine
>>(Get) http://localhost:9100/filter/1?cuisineId=2
> Filter on basis of cost
>>(>(Get) http://localhost:9100/filter/1?lcost=700&hcost=1200
> Sort on basis of cost
>>(Get) http://localhost:9100/filter/1?lcost=500&hcost=1200&sort=-1

//Page3
> Details of the restaurant
>>(Get) http://localhost:9100/details/5
> Menu of the restaurant
>>(Get) http://localhost:9100/menu/7

//page4
> Menu details (selected item)
>>(Post)
> Place order
>>(Post)

//page5
> List of order placed 
>>(Get) http://localhost:9100/orders
> List of order placed of particular user
>>(Get) http://localhost:9100/orders?email=amit@gmail.com
> Update order status
>>(Put)


////////////////////////////////
> Delete orders
>>(Delete)