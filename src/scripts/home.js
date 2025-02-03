import logoImage from "../images/logo-cafe.png";
import guidanceImage from "../images/img-guidance-cafe.png";

class Home {
    constructor () {}

    static generate () {
        let homeContainer = document.createElement("div")
        homeContainer.className = "home-container";

        let homeLogoImage = document.createElement("img");
        homeLogoImage.className = "home-logo-img";
        homeLogoImage.src = logoImage;

        let homeGuidanceImage = document.createElement("img");
        homeGuidanceImage.className = "home-guidance-img";
        homeGuidanceImage.src = guidanceImage;

        let homeAbout = document.createElement("div");
        homeAbout.className = "home-about";
        let homeTitle = document.createElement("div");
        homeTitle.className = "home-title";
        homeTitle.textContent = "What is Kirby Cafe?";
        let homeDescription = document.createElement("div");
        homeDescription.className = "home-description";
        homeDescription.textContent = "Based on the concept of \"What if there was a cafe in the world of Kirby ?\", the hard-working Waddle Dee, Kirby (who is in charge of snacking), and Chef Kawasaki's hospitality will fill everyone's stomachs and give them the energy of the stars!";
        homeAbout.appendChild(homeTitle);
        homeAbout.appendChild(homeDescription);

        homeContainer.appendChild(homeLogoImage);
        homeContainer.appendChild(homeGuidanceImage);
        homeContainer.appendChild(homeAbout);

        return homeContainer;
    }
}

export { Home };
