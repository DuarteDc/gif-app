import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import GifGridItem from './GifGridItem';

const GrifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGif(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid animate__animated animate__fadeIn">
                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GrifGrid