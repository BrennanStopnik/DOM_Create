let item1 = document.querySelector("li");
item1.innerText = "This is item 1 in my list";

// create a new element using javascript
    // document.createElement('')
let item3 = document.createElement('li');
item3.innerText = "This is item 3!"

let myList = document.querySelector('ul');

// Adds item4 as child element to our unordered list
myList.appendChild(item3)


let myList2 = document.createElement('ol');
let myDiv = document.querySelector('div');

let olItem1 = document.createElement('li');
olItem1.innerText = "Apple";
let olItem2 = document.createElement('li');
olItem2.innerText = "Orange";
let olItem3 = document.createElement('li');
olItem3.innerText = "Banana";

myList2.appendChild(olItem1);
myList2.appendChild(olItem2);
myList2.appendChild(olItem3);

myDiv.appendChild(myList2);

addItemToList();


olItem3.remove();

function addItemToList(){
    // Here's a way to make a new element in a function.
    let newItem = document.createElement('li');
    newItem.innerText = '4';
    myList.appendChild(newItem);

    // Here's a way to make multiple elements in a function at the same time.
    for (let i = 5; i < 11; i++){
        let newItem = document.createElement('li');
        newItem.innerText = i;
        myList.appendChild(newItem);
    }
}





