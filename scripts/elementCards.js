import Card from "./card.js";
import { places } from "./places.js";

const elements = document.querySelector('.elements');

const addElement = function () {
  places.forEach((elementDetails) => {
    const cardElement = new Card(elementDetails, "#elementCard");
    
    elements.append(cardElement.generateCard());
  });
};

addElement();
