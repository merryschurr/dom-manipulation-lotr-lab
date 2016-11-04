
// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  var section = document.createElement("section");
  section.setAttribute("id", "middle-earth");
  document.body.appendChild(section);

  var article = document.createElement("article");
  section.appendChild(article);

  var h1 = document.createElement("h1");
  h1.textContent = "The Shire";
  article.appendChild(h1)

  var article = document.createElement("article");
  section.appendChild(article);

  var h2 = document.createElement("h1");
  h2.textContent = "Rivendell";
  article.appendChild(h2)

  var article = document.createElement("article");
  section.appendChild(article);

  var h3 = document.createElement("h1");
  h3.textContent = "Mordor";
  article.appendChild(h3)

  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {

 var hobbitList = document.createElement("ul");
 console.log(hobbitList);

 var theShire = document.querySelector("article");
 for(var i = 0; i < hobbits.length; i++)
 console.log(hobbits[i]);

 var hobbitItem = document.createElement ("li"); 
 hobbitItem.innerHTML = hobbitList.innerHTML + array[i];
}

  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit



// Part 3

function keepItSecretKeepItSafe() {

 var ring = document.create("div");
 ring.setAttribute("id", "the-ring");
 ring.setAttribute("class", "magic-imbued-jewelry");

 ring.addEventListener("click", nazgul_screech);
 var ringMaster = document.querySelector('li');
 ringMaster.appendChild(Frodo);

  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}


// Part 4


function makeBuddies() {

  var aside = document.createElement("aside");
  var buddiesList = document.createElement("ul");
  ring.setAttribute("id", "buddies")

  var ul = document.getElementById("buddies");
  var rivendell = document.querySelector ('li')
  rivendell.appendChild(buddiesList)

  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
