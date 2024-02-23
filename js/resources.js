import { organizations } from "../info/organizations.js";
import { contacts } from "../info/contacts.js";

document.addEventListener("DOMContentLoaded", function () {
    // Organizations Card
    let cardTemplate = document.getElementById("organization-template");
    let cardsContainer = document.getElementById("organizations");
    let fragment = document.createDocumentFragment();

    organizations.forEach((data) => {
        const newCard = cardTemplate.content.cloneNode(true);
        const templateTitle = newCard.getElementById("organization-title");
        const templateDescription = newCard.getElementById("organization-description");
        const templateImage = newCard.getElementById("organization-image");

        templateTitle.innerText = data.title;
        templateDescription.innerText = data.description;
        templateImage.src = "../images/organizations/" + data.imageFile;
        fragment.append(newCard);
    });

    cardsContainer.append(fragment);

    // Contacts Card
    cardTemplate = document.getElementById("contact-template");
    cardsContainer = document.getElementById("contacts");
    fragment = document.createDocumentFragment();

    contacts.forEach((data) => {
        const newCard = cardTemplate.content.cloneNode(true);
        const templateTitle = newCard.getElementById("contact-title");
        const templateDescription = newCard.getElementById("contact-description");
        const templateImage = newCard.getElementById("contact-image");
        const templateLink = newCard.getElementById("contact-link");

        templateTitle.innerText = data.title;
        templateDescription.innerText = data.description;
        templateImage.src = "../images/contacts/" + data.imageFile;
        if (data.link !== "") {
            templateLink.innerHTML = "<strong>Contact:</strong> " + data.link;
        }
        fragment.append(newCard);
    });

    cardsContainer.append(fragment);
});
