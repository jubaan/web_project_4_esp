import Card from "./Card.js";
import { places } from "./places.js";

const elements = document.querySelector('.elements');

const addElement = function () {
  places.forEach((elementDetails) => {
    const cardElement = new Card(elementDetails);
    
    elements.append(cardElement.generateCard());
  });
};

addElement();
