import React from 'react';
import Categories from '../Categories/Categories';
import { useContext } from 'react';
import { categoryContext } from '../../App';

const Home = () => {
    const [category] = useContext(categoryContext)
    return (
        <div style={{border: "1px solid purple", padding: "20px"}}>
            <h1>This is from home: {category}</h1>
            <Categories count={category}></Categories>
        </div>
    );
};

export default Home;