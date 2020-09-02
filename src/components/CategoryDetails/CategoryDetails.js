import React, { useContext } from 'react';
import { categoryContext } from '../../App';
const CategoryDetails = (props) => {
    const {name} = props.product;
    console.log(name)
    return (
        <div>
            <h1>This is your category details</h1>
            <h3>Selected Product: {name}</h3>
        </div>
    );
};

export default CategoryDetails;