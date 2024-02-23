import { events } from "../info/eventsInfo.js";

const upcomingEvents = events.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime()).filter(x => new Date(x.date).getTime() >= new Date().getTime());
const pastEvents = events.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()).filter(x => new Date(x.date).getTime() < new Date().getTime());

function formatDate(input) {
    const date = new Date(input);
    const formattedDate = date.toLocaleDateString('en-US', {
        timeZone: 'UTC',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return formattedDate;
}

document.addEventListener("DOMContentLoaded", function () {
    const cardTemplate = document.getElementById("event-template");
    const upcomingEventsContainer = document.getElementById("upcoming-events");
    const pastEventsContainer = document.getElementById("past-events");
    const upcomingEventsFragment = document.createDocumentFragment();
    const pastEventsFragment = document.createDocumentFragment();

    upcomingEvents.forEach((data) => {
        const newCard = cardTemplate.content.cloneNode(true);
        const templateDate = newCard.getElementById("event-date");
        const templateTitle = newCard.getElementById("event-title");
        const templateDescription = newCard.getElementById("event-description");
        const templateImage = newCard.getElementById("event-image");

        templateDate.innerText = formatDate(data.date);
        templateTitle.innerText = data.title;
        templateDescription.innerText = data.description;
        templateImage.src = "../images/events/" + data.imageFile;
        upcomingEventsFragment.append(newCard);
    });

    upcomingEventsContainer.append(upcomingEventsFragment);

    pastEvents.forEach((data) => {
        const newCard = cardTemplate.content.cloneNode(true);
        const templateDate = newCard.getElementById("event-date");
        const templateTitle = newCard.getElementById("event-title");
        const templateDescription = newCard.getElementById("event-description");
        const templateImage = newCard.getElementById("event-image");

        templateDate.innerText = formatDate(data.date);
        templateTitle.innerText = data.title;
        templateDescription.innerText = data.description;
        templateImage.src = "../images/events/" + data.imageFile;
        pastEventsFragment.append(newCard);
    });

    pastEventsContainer.append(pastEventsFragment);
});
