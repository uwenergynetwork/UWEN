import { events } from "../info/eventsInfo.js";

const upcomingEvents = events.sort((a,b) => newDate(a.date).getTime() - newDate(b.date).getTime()).filter(x => newDate(x.date).getTime() >= midnight().getTime());
const pastEvents = events.sort((a,b) => newDate(b.date).getTime() - newDate(a.date).getTime()).filter(x => newDate(x.date).getTime() < midnight().getTime());

console.log({upcomingEvents, pastEvents});

function midnight() {
    let date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
}

function newDate(input) {
    let date = new Date(input);
    date.setHours(25);
    return date;
}

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
