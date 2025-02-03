import "../css/reset.css";
import "../css/style.css";
import { events } from "./pubsub.js";
import { Home } from "./home.js";

const main = () => {
    const nav = new Navigate;
}

class Navigate {
    constructor () {
        this.content = document.querySelector(".content");
        this.home = document.querySelector("#home-button");
        this.menu = document.querySelector("#menu-button");
        this.contact = document.querySelector("#contact-button");

        this.home.addEventListener("click", () => { this.changeTab(Home.generate()); });
        this.menu.addEventListener("click", () => { });
        this.contact.addEventListener("click", () => { });
    }

    changeTab (container) {
        this.content.textContent = "";
        this.content.appendChild(container);
    }
}

main();

/*
HOME
What is Kirby Cafe?
Kirby Cafe is a character cafe themed on the popular game series "Kirby"!
Based on the concept of, "What if there was a cafe in the world of Kirby?", the hard-working Waddle Dee, Kirby (who is in charge of snacking), and Chef Kawasaki's hospitality will fill everyone's stomachs and give them the energy of the stars!

MENU
Foods
Great Adventure! Car-Filled Gourmet Plate 01-01
Waddle Dee's Nap Omelette Rice 05-01

Drinks
Orange Ocean 02-01
Kirby's Exciting Marshmallow O'Late 03-01

Desserts
Kirby's Fluffy Pancakes 04-01
Waddle Dee's Search 02-01


CONTACT
Chef Kawasaki
Chef

Kirby
Taste Tester

Waddle Dee
Manager







*/