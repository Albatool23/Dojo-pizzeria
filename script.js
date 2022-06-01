function pizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza={}
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;
    
    return pizza;
}

function randomPizzaa(){
    var cheese=["Cheddar","Gorgonzola","Provolone","Goat Cheese","Mozzarella"]
    var crust=["Stuffed Crust" ,"Flat Bread Crust","Thin Crust","Cheese Crust Pizza.","Cracker Crust"]
    var sauce=["pesto","hummus","Buffalo Sauce","White Garlic Sauce","Marinara Sauce"]
    var topping=["Pepperoni","Mushrooms","Red Onion","Sausage","Veggie"]
    
    var pizza={}
    pizza.crustType=crust[Math.floor(Math.random() * 5)];
    pizza.sauceType=sauce[Math.floor(Math.random() * 5)];
    pizza.cheeses=cheese[Math.floor(Math.random() * 5)];
    pizza.toppings=topping[Math.floor(Math.random() * 5)];

    return pizza;

    
}

var p1=randomPizzaa();
var p2=randomPizzaa();
var p3=randomPizzaa();




console.log(p1)
console.log(p2)
console.log(p3)
// console.log(p4)