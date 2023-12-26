import React from 'react';
import Image from 'next/image';

export default function ItemCard({ name, price, id, thumbnail }) {

    return (
        <>

            <div style={{ margin: '0 10px 30px', cursor: 'pointer' }}>
                <div>
                    <Image
                        src={thumbnail}
                        alt={`${name}${id}`}
                        width={250}
                        height={250}
                    />
                </div>
                <hr />

                <h4>{name}</h4>
                <div>${price}</div>

            </div>
        </>
    )
}