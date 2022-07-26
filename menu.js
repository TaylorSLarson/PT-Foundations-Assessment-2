///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties:
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

// const pizza = {
// 'name': str,
// 'price': Number,
// 'category': str,
// 'popularity': Number,
// 'rating': Number,
// 'tags': [str],
// }

const pizza1 = {
'name': 'cheese pizza',
'price': 7.99,
'category': '1 topping',
'rating': 3,
'tags': ['simple pie', 'vegetarian']
}

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE


console.log(pizza1.rating)

function pizzaRating(){
    return pizza1.rating
}

const printRating = pizzaRating()

console.log(printRating)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

const index = 1

console.log(pizza1.tags[index])

function print(){
    return pizza1.tags[index]
}

const printTag = print()

console.log(printTag)

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE



function printNew(param1){
param1 = pizza1.price.replace(7.99, 8.99)
pizza1.price = param1
return pizza1.price
}
printNew(pizza1)
console.log(pizza1.price)
/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

const {name: pizza1Name} = pizza1
const {category: pizza1Category} = pizza1
const {price: pizza1Price} = pizza1
const {rating: pizza1Rating} =pizza1
const {tags: pizza1Tags} = pizza1

console.log(pizza1Name)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

const foodArr = [
{'name': 'pepparoni pizza',
 'price': 8.99,
 'category': '1 topping',
 'rating': 1,
 'tags': ['yum', '1 topping', 'customer favorite'],
},

{'name': 'cheese pizza',
'price': 7.99,
'category': '1 topping',
'rating': 3,
'tags': ['yum', '1 topping',],

},
{'name': 'supreme pizza',
'price': 10.99,
'category': 'specialty',
'rating': 2,
'tags': ['yum', 'lots of toppings'],

},

{'name': 'veggie pizza',
'price': 8.99,
'category': 'specialty',
'rating': 5,
'tags': ['yum', 'vegetarian'],
},

{'name': ' hawaiian pizza',
'price': 10.99,
'category': 'specialty',
'rating': 4,
'tags': ['yum', 'lots of toppings'],
}
]

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

// const filteredFood = foodArr.filter(function(element){
//     return element['tags'] === '1 topping'
// }

const filteredFood2 = foodArr.filter(foodArr => foodArr.tags === '1 topping')

// console.log(filteredFood)
console.log(filteredFood2)



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for
    food that has above a certain rating,
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`,
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
const filteredFood3 = foodArr.filter(foodArr => foodArr.price < 9.99)

console.log(filteredFood3)

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE



