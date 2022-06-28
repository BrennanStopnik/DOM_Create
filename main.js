let item1 = document.querySelector("li");
item1.innerText = "This is item 1 in my list";

// create a new element using javascript
    // document.createElement('')
let item4 = document.createElement('li');
item4.innerText = "This is item 4!"

let myList = document.querySelector('ul');
myList.appendChild(item4)


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
