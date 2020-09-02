import React, {useState} from 'react';
import { useContext } from 'react';
import { categoryContext } from '../../App';

const Headers = (props) => {
    const [category, setCategory] = useContext(categoryContext)
    return (
        <div>
            <h1>This is Headers: {category}</h1>
            <button onClick={() => setCategory('Laptop')}>Laptop</button>
            <button onClick={() => setCategory("Mobile")}>Mobile</button>
            <button onClick={() => setCategory("Camera")}>Camera</button>
        </div>
    );
};

export default Headers;