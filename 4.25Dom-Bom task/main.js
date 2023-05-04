let header = document.createElement("header");
let nav = document.createElement("nav");
let ul = document.createElement("ul");
let home = document.createElement("li");
let about = document.createElement("li");
let blog = document.createElement("li");
let contact = document.createElement("li");
let section1 = document.createElement("section");
let section2 = document.createElement("section");
let section3 = document.createElement("section");
let section4 = document.createElement("section");

section1.setAttribute("id","sec1")
section2.setAttribute("id","sec2")
section3.setAttribute("id","sec3")
section4.setAttribute("id","sec4")

home.addEventListener("click",function(){
    location="#sec1"
})
about.addEventListener("click",function(){
    window.location="#sec2"
})
blog.addEventListener("click",function(){
    window.location="#sec3"
})
contact.addEventListener("click",function(){
    window.location="#sec4"
})
home.innerHTML = "<strong>Home</strong>";
about.innerHTML = "<strong>About</strong>";
blog.innerHTML = "<strong>Blog</strong>";
contact.innerHTML = "<strong>Contact</strong>";
section1.innerHTML = "<strong>Home</strong>";
section2.innerHTML = "<strong>About</strong>";
section3.innerHTML = "<strong>Blog</strong>";
section4.innerHTML = "<strong>Contact</strong>";

document.body.append(header);
header.append(nav);
nav.append(ul);
ul.append(home);
ul.append(about);
ul.append(blog);
ul.append(contact);
document.body.append(section1);
document.body.append(section2);
document.body.append(section3);
document.body.append(section4);

header.style.background = "black";


ul.style.display = "flex";
ul.style.justifyContent = "space-around";
ul.style.alignItems = "center";
ul.style.height = "50px";

home.style.color = "white";
home.style.cursor = "pointer";
about.style.color = "white";
about.style.cursor = "pointer";
blog.style.color = "white";
blog.style.cursor = "pointer";
contact.style.color = "white";
contact.style.cursor = "pointer";
home.style.listStyle = "none";
about.style.listStyle = "none";
blog.style.listStyle = "none";
contact.style.listStyle = "none";

section1.style.height="100vh"
section1.style.display="flex"
section1.style.justifyContent = "center";
section1.style.alignItems = "center";
section1.style.border="1px dashed #000"

section2.style.height="100vh"
section2.style.display="flex"
section2.style.justifyContent = "center";
section2.style.alignItems = "center";
section2.style.border="1px dashed #000"

section3.style.height="100vh"
section3.style.display="flex"
section3.style.justifyContent = "center";
section3.style.alignItems = "center";
section3.style.border="1px dashed #000"

section4.style.height="100vh"
section4.style.display="flex"
section4.style.justifyContent = "center";
section4.style.alignItems = "center";
section4.style.border="1px dashed #000"




