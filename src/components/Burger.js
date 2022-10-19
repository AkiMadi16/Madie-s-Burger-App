import React from 'react'
import './Burger.scss'
import  BurgerControls from './BurgerControls'
import BurgerLayers from './BurgerLayer'

class Burger extends React.Component {
  state = {
    burgerLayers: []
  }

  // This function runs when the component first loads on the screen
  componentDidMount() {
    fetch('/burgerLayers')
    .then(res => res.json())
    .then(res => this.setState({
      burgerLayers: res.burgerLayers
    }))
  }

// This function runs every time state gets updated
componentDidUpdate() {
  fetch('/burgerLayers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ burgerLayers: this.state.burgerLayers })
  })
}

  addLayer = layer => {
    const { burgerLayers } = this.state
    this.setState({ burgerLayers: [...burgerLayers, layer]})
  }
  // setstate updates the state 

  removeLayer = indexOfLayerClicked => {
    const { burgerLayers } = this.state
    const updatedLayers = burgerLayers.filter((layer, i) =>
    i !== indexOfLayerClicked)
    this.setState({ burgerLayers: updatedLayers})
  }

  render() {
   const {burgerLayers } = this.state
    // console.log(layerNames)
    return (
      <div className='Burger'>
      <h1>Make your own Burger</h1>
      < BurgerControls addLayer={this.addLayer} />
      <BurgerLayers burgerLayers={burgerLayers} removeLayer={this.removeLayer}/>
      </div>
      
    )
  }
}

export default Burger;