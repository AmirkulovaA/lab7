const body = document.querySelector("body");
const helloWorld = document.getElementsByTagName("h1")[0];
helloWorld.remove();

const h1 = document.createElement("h1");
h1.textContent = "Lab7 Assignment";
h1.style.color = "blue";
body.appendChild(h1);

const hr = document.createElement("hr");
body.appendChild(hr);

const h2Task = document.createElement("h2");
h2Task.textContent = "Task";
h2Task.style.color = "red";
body.appendChild(h2Task);

const p1 = document.createElement("p");
p1.innerHTML =
  "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
body.appendChild(p1);

const firstList = document.createElement("ul");

const element = document.createElement("li");
element.style.color = "green";
element.classList.add("even");
element.innerHTML =
  '<li class="even" style="color: green">find elements in the DOM (<b>5 points</b>);</li>';

firstList.innerHTML =
  '<li class="even" style="color: green">find elements in the DOM (<b>5 points</b>);</li><li class="odd" style="color: purple">create/add/remove elements (<b>5 points</b>);</li><li class="even" style="color: green">change content of the elements (<b>5 points</b>);</li><li class="odd" style="color: purple">change styles of the elements (<b>5 points</b>);</li><li class="even" style="color: green">change attributes of the elements (<b>5 points</b>);</li><li class="odd" style="color: purple">change classes of the elements (<b>5 points</b>).</li>';

body.appendChild(firstList);

body.appendChild(document.createElement("hr"));

const h2 = document.createElement("h2");
h2.textContent = "Submission";
h2.style.color = "red";
body.appendChild(h2);

const p2 = document.createElement("p");
p2.textContent = "To submit your work, follow these instructions:";
body.appendChild(p2);

const secondList = document.createElement("ul");

const element = document.createElement("li");
element.setAttribute("class", "even");
element.setAttribute("style", "color: green");

secondList.innerHTML =
  '<li class="even" style="color: green">Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).</li><li class="odd" style="color: purple">Clone this repository to your local machine and work inside it.</li><li class="even" style="color: green">Create a new HTML file, called <b>index.html</b>, which has only one&lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).</li><li class="odd" style="color: purple"Create a new JavaScript file, called <b>main.js</b>, which must containyour program (assignment) described above (<b>1 point</b>).</li><li class="even" style="color: green">Link this <b>main.js</b> file to your <b>index.html</b> file (Note:place your script at the end of the <b>body</b> section).</li><li class="odd" style="color: purple">Write a JavaScript program in <b>main.js</b> to make your<b>index.html</b> look identical to this HTML file (<b>5 points</b>).</li><li class="even" style="color: green">After you finish your work, submit it to the Github (<b>2 points</b>).</li>';
body.appendChild(secondList);

body.appendChild(document.createElement("hr"));
