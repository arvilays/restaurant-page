import "../css/reset.css";
import "../css/style.css";
import { events } from "./pubsub.js";

const main = () => {
    const nav = new Navigate;
}

class Navigate {
    constructor () {
        this.home = document.querySelector("#home");
        this.menu = document.querySelector("#menu");
        this.about = document.querySelector("#about");

        this.home.addEventListener("click", () => { });
        this.menu.addEventListener("click", () => { });
        this.about.addEventListener("click", () => { });
    }



}

main();