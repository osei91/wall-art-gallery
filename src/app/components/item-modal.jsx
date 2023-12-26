import React from 'react';
import styles from '../page.module.css';
import Image from 'next/image';

export default function ItemModal({ item, close }) {
    const { thumbnail, name, id, price, colors } = item;
    const handleClose = () => {
        return close();
    }

    return (
        <>
            <div className={styles.modal}>
                <div style={{ display: 'flex' }}>
                    <button className={styles.closeButton} onClick={handleClose}>&times;</button>
                    <div style={{ margin: '0 20px 30px', cursor: 'pointer' }}>
                        <div>
                            <Image
                                src={thumbnail}
                                alt={`${name}${id}`}
                                width={400}
                                height={400}

                            />
                        </div>
                        <hr />


                    </div>
                    
                    <div>
                        <h4>{name}</h4>
                        <div>${price}</div>
                        <p>Per meter square</p>
                        <button>Add</button>
                        <br/>
                        <div style={{marginTop:'1rem',display:'flex'}}>
                            {
                                colors.map((color, index) => (
                                    <div key={index} style={{ backgroundColor: color, height: 50, width: 50 }}></div>
                                ))
                            }
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}