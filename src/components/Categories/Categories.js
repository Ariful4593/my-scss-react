import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import { useContext } from 'react';
import { categoryContext } from '../../App';
import { useState } from 'react';
import { useEffect } from 'react';
const allProducts = [
    {name: "Lenovo", category: "Laptop"},{name: "HP", category: "Mobile"},{name: "Esonic", category: "Mother Board"},
    {name: "Samsung", category: "Hard Disk"},{name: "Assus", category: "Camera"},{name: "Canon", category: "Mobile"},{name: "CD", category: "Camera"},
    {name: "Walton", category: "Computer"},{name: "Google", category: "Tech Leader"},
  
]

const Categories = () => {
    const [category] = useContext(categoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        console.log({category})
        const matchedProducts = allProducts.filter(pd => pd.category === category && category.toLowerCase());
        setProducts(matchedProducts);
    }, [category])
    return (
        <div>
            <h2>Select your category: {category}</h2>
            {
                products.map(pd => <CategoryDetails product={pd}></CategoryDetails>)
            }
            
        </div>
    );
};

export default Categories;