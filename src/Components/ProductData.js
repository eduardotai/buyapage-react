import classes from './ProductData.module.css'
import {React, Component, useState, setToggle} from 'react';


export const productData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
        {
            id: 1,
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            id: 2,
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            id: 3,
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            id: 4,
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ],

    
}

Object.freeze(productData); //This line of code just makes your object as a constant. No values can be updated.


export function ProductDataComponent() {
    const [visible, setVisible] = useState(true);
    const [selectedColor, setSelectedColor] = useState(productData.colorOptions[0].id); // Initial selected color
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div>
            {selectedColor == productData.colorOptions[0].id ? (
                <img className={classes.clock} src='https://imgur.com/iOeUBV7.png' alt='#' />
            ) : (
                <img
                    className={classes.clock}
                    src={productData.colorOptions.find((option) => option.id === selectedColor).imageUrl}
                />
            )}
            
            <span className={classes.titleClock}>{productData.title}</span>
            <p className={classes.descClock}>{productData.description}</p>
            <h2>Select Color</h2>
            {productData.colorOptions.map((option) => (
                <img
                    key={option.id}
                    onClick={() => {
                        setSelectedColor(option.id);
                        setVisible(!visible); // Toggles the visibility
                        setSelectedImage(option.id)
                    }}
                    className={classes.clockMiniDisplay}
                    src={option.imageUrl}
                    alt={option.styleName}
                    style={selectedImage === option.id ? { border: '2px solid gray', borderRadius: '6px' } : {}}
                />
            ))}
            
            <button type='button'>Buy Now</button>
        </div>
    );
}
