import React from "react";

import clientImage from './clients-carousel.jpg';
import newyearsImage from './newyears1.jpg';
import inventoryImage from './inventory-carousel.jpg';

export const TestImage = () => {

    return (
        <div>
            <img src={clientImage} alt="testimage"/>
        </div>

    );
}



export const TestImageTwo = () => {

    return (
        <div>
            <img src={inventoryImage} alt="testimagetwo"/>
        </div>

    );
}



export const TestImageThree = () => {

    return (
        <div>
            <img src={newyearsImage} alt="testimagethree"/>
        </div>

    );
}
