// Create Team Cards

import { team } from "../info/team.js";

document.addEventListener("DOMContentLoaded", function () {
    const cardTemplate = document.getElementById("team-template");
    const cardsContainer = document.getElementById("team-container");
    const fragment = document.createDocumentFragment();

    team.forEach((data) => {
        const newCard = cardTemplate.content.cloneNode(true);
        const templateHeadshot = newCard.getElementById("template-headshot");
        const templatePosition = newCard.getElementById("template-position");
        const templateName = newCard.getElementById("template-name");
        const templateLinkedinLink = newCard.getElementById("template-linkedin-link");
        const templateDescription = newCard.getElementById("template-description");

        templatePosition.innerText = data.position;
        templateName.innerText = data.name;
        templateDescription.innerText = data.description;
        templateHeadshot.src = "./images/headshots/" + data.imageFile;
        templateLinkedinLink.href = data.linkedin;
        fragment.append(newCard);
    });

    cardsContainer.append(fragment);
});
