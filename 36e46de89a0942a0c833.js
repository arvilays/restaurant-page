import "../css/reset.css";
import "../css/style.css";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { Contact } from "./contact.js";

const main = () => {
    const nav = new Navigate;
}

class Navigate {
    constructor () {
        const home = new Home;
        const menu = new Menu;
        const contact = new Contact;

        this.content = document.querySelector(".content");
        this.home = document.querySelector("#home-button");
        this.menu = document.querySelector("#menu-button");
        this.contact = document.querySelector("#contact-button");

        this.home.addEventListener("click", () => { this.changeTab(home.content); });
        this.menu.addEventListener("click", () => { this.changeTab(menu.content); });
        this.contact.addEventListener("click", () => { this.changeTab(contact.content); });

        this.changeTab(home.content);
    }

    changeTab (container) {
        this.content.textContent = "";
        this.content.appendChild(container);
    }
}

main();