//! Practice Questions

let addPara = document.createElement("p");
addPara.innerHTML = "Hey, i'm red!";
addPara.style.color = "red";

let body = document.querySelector("body");
body.append(addPara);

let head = document.createElement("h3");
head.innerHTML = "I'm a blue h3!";
head.style.color = "blue";
body.append(head);

let addDiv = document.createElement("div");
addDiv.style.border = "2px solid black";
addDiv.style.height = "200px";
addDiv.style.width = "400px";
addDiv.style.backgroundColor = "aqua";
body.append(addDiv);

let head1 = document.createElement("h1");
head1.innerHTML = "I'm in a div";

let para = document.createElement("p");
para.innerHTML = "Me Too!";

addDiv.append(head1, para);
