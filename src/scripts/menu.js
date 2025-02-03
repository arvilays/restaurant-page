import foodImage1 from "../images/img-menu-food-01-01.png";
import foodImage2 from "../images/img-menu-food-05-01.png";
import drinkImage1 from "../images/img-menu-drinks-02-01.png";
import drinkImage2 from "../images/img-menu-drinks-03-01.png";
import dessertImage1 from "../images/img-menu-dessert-02-01.png";
import dessertImage2 from "../images/img-menu-dessert-04-01.png";

class Menu {
    constructor () {
        this.content = this.#generate();
    }

    #generate () {
        let menuContainer = document.createElement("div");
        menuContainer.className = "menu-container";

        // Foods
        let menuCategoryFoods = document.createElement("div");
        menuCategoryFoods.className = "menu-category";

        let menuCategoryFoodsTitle = document.createElement("div");
        menuCategoryFoodsTitle.className = "menu-category-title";
        menuCategoryFoodsTitle.textContent = "FOODS";

        let menuListFoods = document.createElement("div");
        menuListFoods.className = "menu-list";
        menuListFoods.appendChild(this.#generateMenuItem(foodImage1, 
            "The Great Car-Filled Gourmet Adventure Plate!",
            "Kirby's car-munching has become a gourmet one-plate menu! A sandwich shaped like a Warp Star, with roast beef and garlic shrimp. With Waddle Dee and Elfilin on board, he's ready for a big adventure! Fill up your stomach and race through the New World!"
        ));
        menuListFoods.appendChild(this.#generateMenuItem(foodImage2,
            "Waddle Dee's Nap Omelette Rice",
            "This omelet rice features a Waddle Dee napping peacefully on a bed of runny eggs and plenty of homemade sauce. Please eat it gently so as to not wake him up!"
        ));

        menuCategoryFoods.appendChild(menuCategoryFoodsTitle);
        menuCategoryFoods.appendChild(menuListFoods);

        // Drinks
        let menuCategoryDrinks = document.createElement("div");
        menuCategoryDrinks.className = "menu-category";

        let menuCategoryDrinksTitle = document.createElement("div");
        menuCategoryDrinksTitle.className = "menu-category-title";
        menuCategoryDrinksTitle.textContent = "DRINKS";

        let menuListDrinks = document.createElement("div");
        menuListDrinks.className = "menu-list";
        menuListDrinks.appendChild(this.#generateMenuItem(drinkImage1,
            "Orange Ocean",
            "A drink inspired by an orange ocean with an orange sky spreading out before you. Enjoy the change in flavor as you mix in the sunset gradient."
        ));
        menuListDrinks.appendChild(this.#generateMenuItem(drinkImage2,
            "Kirby's Exciting Marshmallow O'Latte",
            "Cafe au Lait with Kirby marshmallows. You can choose from two types of marshmallows: Kirby and Warp Star or Sleeping Waddle Dee!"
        ));

        menuCategoryDrinks.appendChild(menuCategoryDrinksTitle);
        menuCategoryDrinks.appendChild(menuListDrinks);

        // Desserts
        let menuCategoryDesserts = document.createElement("div");
        menuCategoryDesserts.className = "menu-category";

        let menuCategoryDessertsTitle = document.createElement("div");
        menuCategoryDessertsTitle.className = "menu-category-title";
        menuCategoryDessertsTitle.textContent = "DESSERTS";

        let menuListDesserts = document.createElement("div");
        menuListDesserts.className = "menu-list";
        menuListDesserts.appendChild(this.#generateMenuItem(dessertImage1,
            "Kirby's Fluffy Pancakes",
            "Kirby strawberry ice cream is topped on thick, fluffy pancakes. Enjoy the contrast with the warm pancakes!"
        ));
        menuListDesserts.appendChild(this.#generateMenuItem(dessertImage2,
            "Waddle Dee's Search",
            "Waddle Dee is looking for something with his face buried in the clouds. Have you found what you're looking for? Enjoy the harmony of orange sherbet and cream."
        ));

        menuCategoryDesserts.appendChild(menuCategoryDessertsTitle);
        menuCategoryDesserts.appendChild(menuListDesserts);

        /////////////////////////////////////////////////////
        
        menuContainer.appendChild(menuCategoryFoods);
        menuContainer.appendChild(menuCategoryDrinks);
        menuContainer.appendChild(menuCategoryDesserts);
        return menuContainer;
    }

    #generateMenuItem (image, name, description) {
        let menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        let menuItemImage = document.createElement("img");
        menuItemImage.src = image;
        let menuItemInformation = document.createElement("div");
        menuItemInformation.className = "menu-item-information";
        let menuItemName = document.createElement("div");
        menuItemName.className = "menu-item-name";
        menuItemName.textContent = name;
        let menuItemDescription = document.createElement("div");
        menuItemDescription.className = "menu-item-description";
        menuItemDescription.textContent = description;
        menuItemInformation.appendChild(menuItemName);
        menuItemInformation.appendChild(menuItemDescription);
        menuItem.appendChild(menuItemImage);
        menuItem.appendChild(menuItemInformation);
        return menuItem;
    }
}

export { Menu };
/*
<div class="menu-container">
    <div class="menu-category">
        <div class="menu-category-title">FOODS</div>
        <div class="menu-list">
            <div class="menu-item">
                <img src="./images/img-menu-food-01-01.png">
                <div class="menu-item-information">
                    <div class="menu-item-name">The Great Car-Filled Gourmet Adventure Plate!</div>
                    <div class="menu-item-description">
                        Kirby's car-munching has become a gourmet one-plate menu! A sandwich shaped like a Warp Star, with roast beef and garlic
                        shrimp. With Waddle Dee and Elfilin on board, he's ready for a big adventure! Fill up your stomach and race through the
                        New World!
                    </div>
                </div>
            </div>

            <div class="menu-item">
                <img src="./images/img-menu-food-05-01.png">
                <div class="menu-item-information">
                    <div class="menu-item-name">Waddle Dee's Nap Omelette Rice</div>
                    <div class="menu-item-description">
                        This omelet rice features a Waddle Dee napping peacefully on a bed of runny eggs and plenty of homemade sauce. Please
                        eat it gently so as to not wake him up!
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
*/