import { layerImages } from '../layerImages'

function BurgerLayers({ burgerLayers, removeLayer}) {

  return (
    <div className='layers'>
    { burgerLayers.map((layer, index) =>
    <img 
    key={index}
    className={layer}
    src={layerImages[layer]} alt={layer} 
    onClick={() => removeLayer(index)}
    />
    )}
  </div>

  )
}

export default BurgerLayers