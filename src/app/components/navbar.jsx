import React from 'react';
import styles from '../page.module.css';


export default function Navbar() {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.content}>
                    <h3>
                        <span style={{ fontSize: '2rem' }}>🎨</span>
                        Wall Decor Gallery
                    </h3>
                    
                </div>

            </div>
        </>
    )
}