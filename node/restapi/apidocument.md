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
>>(Get)
> Filter on basis of cost
>>(>(Get)
> Sort on basis of cost
>>(Get)

//Page3
> Details of the restaurant
>>(Get)
> Menu of the restaurant
>>(Get)

//page4
> Menu details (selected item)
>>(Post)
> Place order
>>(Post)

//page5
> List of order placed 
>>(Get)
> List of order placed of particular user
>>(Get)
> Update order status
>>(Put)


////////////////////////////////
> Delete orders
>>(Delete)