const content = document.getElementById("content");

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");


home.style.color = "palevioletred";
home.style.borderBottom = "thin solid palevioletred";
menu.style.color = "";
menu.style.borderBottom = "";
contact.style.color = "";
contact.style.borderBottom = "";

const para = document.createElement('p');
para.textContent = "Indulge in the best flavors from Norweigien culture blended with American cuisine. The Odin Burger is a culinary experience like no other!";
content.appendChild(para);

const contentBtn = document.createElement('button');
contentBtn.classList.add("contentBtn");
contentBtn.textContent = "Reserve a table!"
content.appendChild(contentBtn);

const adContainer = document.createElement('div');
adContainer.classList.add("adContainer");
const adContent = document.createElement('div');
adContent.classList.add('adContent');
adContent.textContent = "For a limited time only, try our new deluxe bacon cheese burger... ONLY $6.99"
const imgContent = document.createElement('img');
imgContent.src = "burger.jpg";

adContainer.appendChild(adContent);
adContainer.appendChild(imgContent);
content.appendChild(adContainer);



home.addEventListener("click", homeGenerate);

function homeGenerate() {

  home.style.color = "palevioletred";
  home.style.borderBottom = "thin solid palevioletred";
  menu.style.color = "";
  menu.style.borderBottom = "";
  contact.style.color = "";
  contact.style.borderBottom = "";

  content.innerHTML = '';

  const para = document.createElement('p');
  para.textContent = "Indulge in the best flavors from Norweigien culture blended with American cuisine. The Odin Burger is a culinary experience like no other!";
  content.appendChild(para);

  const contentBtn = document.createElement('button');
  contentBtn.classList.add("contentBtn");
  contentBtn.textContent = "Reserve a table!"
  content.appendChild(contentBtn);

  const adContainer = document.createElement('div');
  adContainer.classList.add("adContainer");
  const adContent = document.createElement('div');
  adContent.classList.add('adContent');
  adContent.textContent = "For a limited time only, try our new deluxe bacon cheese burger... ONLY $6.99"
  const imgContent = document.createElement('img');
  imgContent.setAttribute("src", "burger.jpg");

  adContainer.appendChild(adContent);
  adContainer.appendChild(imgContent);
  content.appendChild(adContainer);

}


menu.addEventListener("click", menuGenerate);

function menuGenerate() {
  home.style.color = "";
  home.style.borderBottom = "";
  menu.style.color = "palevioletred";
  menu.style.borderBottom = "thin solid palevioletred";
  contact.style.color = "";
  contact.style.borderBottom = "";

  content.innerHTML = "";

  const menuText = document.createElement('div');
  menuText.classList.add("menuText");
  menuText.textContent = "Sweedish HandCrafted Burgers";
  content.appendChild(menuText);

  const gridContainer = document.createElement('div');
  gridContainer.classList.add("gridContainer");
  const cell1 = document.createElement('div');
  cell1.classList.add("cell");
  cell1.textContent = "Bacon Ranch Melt";
  const menuLine1 = document.createElement('hr');
  menuLine1.classList.add("menuLine");
  const price1 = document.createElement('div');
  price1.classList.add("cell");
  price1.textContent = "$7.99";

  const cell2 = document.createElement('div');
  cell2.classList.add("cell");
  cell2.textContent = "Philly Melt";
  const menuLine2 = document.createElement('hr');
  menuLine2.classList.add("menuLine");
  const price2 = document.createElement('div');
  price2.classList.add("cell");
  price2.textContent = "$8.99";

  const cell3 = document.createElement('div');
  cell3.classList.add("cell");
  cell3.textContent = "Cheese Burger";
  const menuLine3 = document.createElement('hr');
  menuLine3.classList.add("menuLine");
  const price3 = document.createElement('div');
  price3.classList.add("cell");
  price3.textContent = "$10.99";

  const cell4 = document.createElement('div');
  cell4.classList.add("cell");
  cell4.textContent = "Triple Stack Burger";
  const menuLine4 = document.createElement('hr');
  menuLine4.classList.add("menuLine");
  const price4 = document.createElement('div');
  price4.classList.add("cell");
  price4.textContent = "$10.99";

  const cell5 = document.createElement('div');
  cell5.classList.add("cell");
  cell5.textContent = "Loaded Fries";
  const menuLine5 = document.createElement('hr');
  menuLine5.classList.add("menuLine");
  const price5 = document.createElement('div');
  price5.classList.add("cell");
  price5.textContent = "$8.99";

  const cell6 = document.createElement('div');
  cell6.classList.add("cell");
  cell6.textContent = "Fish Burger";
  const menuLine6 = document.createElement('hr');
  menuLine6.classList.add("menuLine");
  const price6 = document.createElement('div');
  price6.classList.add("cell");
  price6.textContent = "$4.99";

  const cell7 = document.createElement('div');
  cell7.classList.add("cell");
  cell7.textContent = "Chocolate Chip Cookie";
  const menuLine7 = document.createElement('hr');
  menuLine7.classList.add("menuLine");
  const price7 = document.createElement('div');
  price7.classList.add("cell");
  price7.textContent = "$2.99";

  const cell8 = document.createElement('div');
  cell8.classList.add("cell");
  cell8.textContent = "Fountain Drink";
  const menuLine8 = document.createElement('hr');
  menuLine8.classList.add("menuLine");
  const price8 = document.createElement('div');
  price8.classList.add("cell");
  price8.textContent = "$2.99";


  cell1.appendChild(menuLine1);
  gridContainer.appendChild(cell1);
  gridContainer.appendChild(price1);

  cell2.appendChild(menuLine2);
  gridContainer.appendChild(cell2);
  gridContainer.appendChild(price2);

  cell3.appendChild(menuLine3);
  gridContainer.appendChild(cell3);
  gridContainer.appendChild(price3);

  cell4.appendChild(menuLine4);
  gridContainer.appendChild(cell4);
  gridContainer.appendChild(price4);

  cell5.appendChild(menuLine5);
  gridContainer.appendChild(cell5);
  gridContainer.appendChild(price5);

  cell6.appendChild(menuLine6);
  gridContainer.appendChild(cell6);
  gridContainer.appendChild(price6);

  cell7.appendChild(menuLine7);
  gridContainer.appendChild(cell7);
  gridContainer.appendChild(price7);

  cell8.appendChild(menuLine8);
  gridContainer.appendChild(cell8);
  gridContainer.appendChild(price8);





  content.appendChild(gridContainer);


}



contact.addEventListener("click", contactGenerate);

function contactGenerate() {
  home.style.color = "";
  home.style.borderBottom = "";
  menu.style.color = "";
  menu.style.borderBottom = "";
  contact.style.color = "palevioletred";
  contact.style.borderBottom = "thin solid palevioletred";

  content.innerHTML = "";

  const contactHeader = document.createElement('h2');
  contactHeader.textContent = "Contact Us!";

  const contactPara = document.createElement('p');
  contactPara.textContent = "Got a question? We'd love to hear from you. Fill out the form below to send us a message and we will get back to you soon.";
  content.appendChild(contactHeader);
  content.appendChild(contactPara);

  const contactForm = document.createElement('form');
  const formElements = document.createElement('div');
  formElements.setAttribute("id", "formElements");
  const elementContainer1 = document.createElement('div');
  elementContainer1.classList.add("elementContainer1");
  const topicLabel = document.createElement('label');
  topicLabel.setAttribute("for", 'topic');
  topicLabel.textContent = "Choose a topic:";
  const topicDiv = document.createElement('div');
  const topicSelect = document.createElement('select');
  topicSelect.setAttribute("name", 'topic');
  topicSelect.setAttribute("id","topic");
  const option1 = document.createElement('option');
  option1.setAttribute("value", 'thanks');
  option1.textContent = "Giving Thanks";
  const option2 = document.createElement('option');
  option2.setAttribute("value", 'issue');
  option2.textContent = "Report Bad Service";
  const option3 = document.createElement('option');
  option3.setAttribute("value", 'employement');
  option3.textContent = "Request Available Job Listing";
  const option4 = document.createElement('option');
  option4.setAttribute("value", 'general');
  option4.textContent = "General Questions and Comments";

  const elementContainer2 = document.createElement('div');
  elementContainer2.classList.add("elementContainer2");
  const nameLabel = document.createElement('label');
  nameLabel.setAttribute("for","name");
  nameLabel.textContent = "Name:";
  const nameDiv =document.createElement('div');
  const nameInput = document.createElement('input');
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("id", "name");

  const elementContainer3 = document.createElement('div');
  elementContainer3.classList.add("elementContainer3");
  const emailLabel = document.createElement('label');
  emailLabel.setAttribute("for","email");
  emailLabel.textContent = "Email:";
  const emailDiv =document.createElement('div');
  const emailInput = document.createElement('input');
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("id", "email");

  const elementContainer4 = document.createElement('div');
  elementContainer4.classList.add("elementContainer4");
  const msgLabel = document.createElement('label');
  msgLabel.setAttribute("for","msg");
  msgLabel.textContent = "Message:";
  const msgDiv =document.createElement('div');
  const msgInput = document.createElement('textarea');
  msgInput.setAttribute("name", "msg");
  msgInput.setAttribute("id", "msg");

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id','submitBtn');
  submitBtn.textContent = "Submit";

  topicSelect.appendChild(option1);
  topicSelect.appendChild(option2);
  topicSelect.appendChild(option3);
  topicSelect.appendChild(option4);

  topicDiv.appendChild(topicSelect);

  elementContainer1.appendChild(topicLabel);
  elementContainer1.appendChild(topicDiv);

  nameDiv.appendChild(nameInput);

  elementContainer2.appendChild(nameLabel);
  elementContainer2.appendChild(nameDiv);

  emailDiv.appendChild(emailInput);

  elementContainer3.appendChild(emailLabel);
  elementContainer3.appendChild(emailDiv);

  msgDiv.appendChild(msgInput);

  elementContainer4.appendChild(msgLabel);
  elementContainer4.appendChild(msgDiv);
  
  formElements.appendChild(elementContainer1);
  formElements.appendChild(elementContainer2);
  formElements.appendChild(elementContainer3);
  formElements.appendChild(elementContainer4);
  formElements.appendChild(submitBtn);

  contactForm.appendChild(formElements);

  content.appendChild(contactForm);

}



if (home.style.color === "palevioletred") {
  home.disable = true;
} else if (home.style.color === " ") {
  home.disable = false;
}

if (menu.style.color === "palevioletred") {
  menu.disable = true;
} else if (menu.style.color === " ") {
  menu.disable = false;
}

if (contact.style.color === "palevioletred") {
  contact.disable = true;
} else if (contact.style.color === " ") {
  contact.disable = false;
}