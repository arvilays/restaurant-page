import kawasakiImage from "../images/kawasaki.png";
import kirbyImage from "../images/kirby.png";
import waddleDeeImage from "../images/waddle_dee.png";

class Contact {
    constructor () {
        this.content = this.#generate();
    }

    #generate () {
        let contactContainer = document.createElement("div");
        contactContainer.className = "contact-container";

        contactContainer.appendChild(this.#generateContact(kawasakiImage,
            "Chef Kawasaki", "Head Chef", "555-555-5555"));
        contactContainer.appendChild(this.#generateContact(kirbyImage,
            "Kirby", "Taste Tester", "555-555-5555"));
        contactContainer.appendChild(this.#generateContact(waddleDeeImage,
            "Waddle Dee", "Manager", "555-555-5555"));

        return contactContainer;
    }

    #generateContact (image, name, role, number) {
        let contact = document.createElement("div");
        contact.className = "contact";

        let contactImage = document.createElement("img");
        contactImage.classList = "contact-image";
        contactImage.src = image;

        let contactName = document.createElement("div");
        contactName.classList = "contact-name";
        contactName.textContent = name;

        let contactRole = document.createElement("div");
        contactRole.classList = "contact-role";
        contactRole.textContent = role;

        let contactNumber = document.createElement("div");
        contactNumber.classList = "contact-number";
        contactNumber.textContent = number;

        contact.appendChild(contactImage);
        contact.appendChild(contactName);
        contact.appendChild(contactRole);
        contact.appendChild(contactNumber);

        return contact;
    }
}

export { Contact };