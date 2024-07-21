let contactList = document.querySelector(".contactList");

document.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("contacts", JSON.stringify([]));
  renderContacts();
});

let savedContacts = JSON.parse(localStorage.getItem("contacts"));

const renderContacts = () => {
  savedContacts = JSON.parse(localStorage.getItem("contacts"));
  contactList.innerHTML = "";
  savedContacts.map((contact) => {
    contactList.insertAdjacentHTML(
      "beforeend",
      `<div id="contactjs">
              <div>
               <img src="img/icons8-contact-32.png" />
              </div>
              <div>
                <p class="name">${contact.name}</p>
                <p class="number">${contact.phone}</p>
              </div>
            </div>`
    );
  });
};

document.addEventListener("DOMContentLoaded", () => renderContacts());
//function mappingContact

const numberInput = document.getElementById("numberInput");
const nameInput = document.getElementById("nameInput");

function saveContact() {
  const phone = numberInput.value;
  const name = nameInput.value;

  let newContact = { name, phone };

  if (phone === "" || name === "") {
    let redZone = document.getElementById("redZone");
    redZone.innerHTML = "input Name or Phone Number";
    redZone.style.color = "red";
  } else {
    savedContacts = [...savedContacts, newContact];
    console.log(savedContacts);
    localStorage.setItem("contacts", JSON.stringify(savedContacts));
    renderContacts();
    return (numberInput.value = ""), (nameInput.value = "");
  }
}
