"use client"
import React, { useState } from 'react';
import styles from './page.module.css'
import ItemCard from './components/item-card'
import { listings } from './mocks/listings';
import ItemModal from './components/item-modal';


export default function Home() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const onShowItem = (itemid) => {
    console.log(itemid);
    const sel = listings.filter((itm) => itm.id === itemid)
    setSelected(sel && sel[0] || null);
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }
  return (
    <main className={styles.main}>
      <div>
        <small><i>Images from Pinterest</i></small>
      </div>
      <br />
      <div className={styles.list}>
        {
          listings.map((item) => (
            <div key={item.id} onClick={onShowItem.bind(this, item.id)}>
              <ItemCard
                thumbnail={item.thumbnail}
                name={item.name}
                price={item.price}
                id={item.id}
              />
            </div>
          ))
        }
      </div>
      {show&&selected && <ItemModal item={selected} close={handleClose} />}
    </main>
  )
}
