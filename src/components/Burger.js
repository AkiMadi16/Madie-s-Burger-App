import { useState, useEffect } from 'react'
import './Burger.scss'
import BurgerControls from './BurgerControls'
import BurgerLayers from './BurgerLayers'

function Burger() {
  const [burgerLayers, setBurgerLayers] = useState(null)

  // This function runs when the component first loads on the screen
  const getBurgerLayers = () => {
    console.log('getBurgerLayers')
    fetch('/burgerLayers')
      .then(res => res.json())
      .then(res => setBurgerLayers(res.burgerLayers))
  }

// This function runs every time state gets updated
const updateBurgerLayers = () =>  {
  console.log('updatedBurgerLayers')
  if (burgerLayers !== null) {
  // if i make array burgerlayers it will run so If statement do here - update server
    fetch('/burgerLayers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ burgerLayers })
   })
  }
}

useEffect(getBurgerLayers, [])
  useEffect(updateBurgerLayers, [burgerLayers])

  const addLayer = layer => {
    setBurgerLayers([...burgerLayers, layer])
  }
  // setstate updates the state 

  const removeLayer = indexOfLayerClicked => {
    const updatedLayers = burgerLayers.filter((layer, i) =>
    i !== indexOfLayerClicked)
    setBurgerLayers(updatedLayers)
  }


    // console.log(layerNames)
    return (
      <div className='Burger'>
      <h1>Make your own Burger</h1>
      < BurgerControls addLayer={addLayer} />
      <BurgerLayers burgerLayers={burgerLayers} removeLayer={removeLayer}/>
      </div>
      
    )
  
}

export default Burger;