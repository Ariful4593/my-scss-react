import React from 'react';
import { useContext } from 'react';
import { categoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(categoryContext);
    return (
        <div>
            <h1>This is Shipment Pages!</h1>
            <button onClick={() => setCategory(category + 1)}>Increament from Shipment category</button>
        </div>
    );
};

export default Shipment;