# DOM Manipulation 🪄✨🖼️
<br/>

## Intro

- This repo contains the demo webpage used in the <span style="background-color:#121212; color: goldenrod">Manchester Codes</span><span style="background-color:#121212; color: lightskyblue"> DOM Manipulation</span> lecture on 22/03/22.
- You can run this page locally by cloning the repo, opening it in VSCode, right-clicking on the `index.html` file and choosing *Open in Default Browser*.

<br/>

## Exercises
- The exercises we performed during the session are explained below.
- The first five exercises were performed using the console in Chrome Dev Tools.
- The sixth exercise was performed by updating the code in this repo. These changes have been kept and can be viewed in `index.html` & `index.js`.

<br/>

---

## 1. Selecting an Element by ID
- Only one element in a document can have a given ID
- Useful for selecting one specific element
 
```
const boxOne = document.getElementById("box-one");

boxOne.style.backgroundColor = "pink";
 
boxOne.style.backgroundImage="url(https://images.unsplash.com/photo-1616000315674-eefb77c56e58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)";
```

<br/>

---

## 2. Selecting Elements by Class
- Many elements can share the same class
- Useful for selecting multiple elements at once
- The selected elements are stored as a <span style="color:coral">HTML Collection</span>. This is similar to an array (for our purposes), but it doesn't have the same methods that an array has (Map, ForEach etc).
- To change all of the elements we've selected at once we can **iterate through them** using a **for loop**
 
```
const allBoxes = document.getElementsByClassName("box");
 
for (i = 0; i < boxes.length; i++) {
 boxes[i].style.backgroundColor = "lightskyblue";
};
 
for (i = 0; i < boxes.length; i++) {
 boxes[i].style.boxShadow = "8px 8px 16px #646464";
};
 
```
- You don't have to process all of the elements in the HTML collection together. You can target just one using its index.
- You can put any function you like in the for loop, so you could do different things to different elements within the HTML collection.
  - You could apply different styles to odd and even indexed elements, making an alternating colour pattern
  - You could even check the content of the elements, and do different things depending on what the content is

<br/>

---

## 3. Creating a Node + Inserting it in the DOM
 
- We can create a new node and assign it to a variable
- Remember, **elements are not the only type of node!** We can create text nodes and other things as well
- When we create an element node, we need to specify what type of element it is (eg. p, ul, div...)
- If we want it to contain text, we need to create a text node too.
- We can then insert the text node into the element, and insert them both into the DOM.
 
```
// Creating the text node
const littleBear = document.createTextNode("ʕ⊙ᴥ⊙ʔ");
 
// Creating the element node
const petBear = document.createElement("p")
 
// Placing the text in the element
petBear.appendChild(littleBear);
 
// Placing the new element in the DOM
const boxThree = document.getElementById("box-three");
 
boxThree.appendChild(petBear);
 
```

- *NB:* When you place an node like this, it doesn't create a *copy* of the node. It *moves* the existing node.
 
```
// Move the bear into the first box
boxOne.appendChild(petBear);
 
// Move the bear back to the third box
boxThree.appendChild(petBear);
```

<br/>

---


## 4. Removing Elements from the DOM
 
- Target the element you want to remove
- Use the method **remove()** to remove the element
 
```
const boxFour = document.getElementById("box-five");
 
boxFour.remove();
 
```
 
- The element isn't deleted, it's just removed from the DOM. If we've assigned it to a variable we can put it back after we've removed it.
 
```
const boxesContainer = document.getElementById("boxes-container)";
 
boxesContainer.appendChild(boxFour);
``

boxesContainer.lastChild.remove();
 
```

<br/>

---

## 5. Event Listeners

- Giving an event listener to a node makes it **execute a function** When that **event** occurs to the node.
- Events include clicking and hovering.
- The function can be anything you want.
- The function can include a DOM manipulation, so that the event causes a change in the webpage. This makes the webpage **interactive**.

- We add an eventl istener with **addEventListener**. This method takes two arguments:
  1. An **event type**, eg. 'click', 'hover'
  2. A **function** to execute when the event occurs. This **must** be given the argument `method` for it to be fired when the event occurs, as in the example below.
- If you want the event listener to do something complex, it may be sensible to write the function outside of the event listener then pass it in.


```
const boxFive = document.getElementById("box-five");
 
boxFive.addEventListener('click', function(event) {
  alert('Hello!);
});

```

Clicking on the fifth box will now generate an alert message.

<br/>

---

## 6. Including Event Listeners & DOM Manipulation in our Code

- In the examples above we manipulated the DOM using the console.
- In real life, we wouldn't do this. We want users to be able to manipulatre the webpage without using the console.
- Instead we'd create a webpage that already contains **event listeners** which induce **DOM changes**. We do this by including JavaScript code in our repo, and importing this into our HTML file/s.
- `index.html` contains a script that makes the 6th box responsive. Here's how it works.
  - Three elements of the webpage are targeted: 
    1. The *sixth box*, so that we can give it an event listener
    2. The *title text* and the *DIV* containing all of the page's content.
  - A boolean called **nightMode** is created: `let nightMode = false`
  - A **click event listener** is applied to the sixth box
  - Within the function of the event listener, we create a toggle that changes the styles of the title and background DIV using dom manipulation.
- This script is imported into index.html using a <script> element:
  ```
  <script src="index.js"></script>
  ````