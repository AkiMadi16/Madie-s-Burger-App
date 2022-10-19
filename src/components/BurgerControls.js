import {layerNames, layerImages} from '../layerImages'


function BurgerControls({ addLayer }) {
 return (
  <section className='controls'>
  {layerNames.map((layer, index) =>
  <button key={index} onClick={() => addLayer(layer)}>
    <img src={layerImages[layer]} alt={layer} />
  </button>
  )}
</section>
  )
}

export default BurgerControls