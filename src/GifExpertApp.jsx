import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GrifGrid from './components/GrifGrid';

const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //  setCategories([...categories, 'Naruto']);
    //   setCategories(cats => [...cats, 'Naruto']);
    //}
    return (
        <>
            <div>GifExpertApp</div>
            <AddCategory setCategories={setCategories} />
            <hr />


            <div>
                {
                    categories.map(category => (
                        <GrifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifExpertApp