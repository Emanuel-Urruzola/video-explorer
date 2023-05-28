import { usePrimarycolor } from '../hooks/usePrimarycolor'
import { useConfigurationsColor } from '../hooks/useConfigurationsColor'
import { useTamanio } from '../hooks/useTamanio'

function Configurations() {
  const { primaryColor, handleColorChange } = usePrimarycolor()
  const { secondaryColor, handleSColorChange } = useConfigurationsColor()
  const { tamanio, handleTamanio } = useTamanio()
  return (
    <aside>
      <h1>Configuraciones</h1>
      <div className="order">
        <label htmlFor="order">Ordenar por</label>
        <select name="order" id="order">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="tags">
        <label htmlFor="tags">Tags</label>
        <select name="tags" id="tags">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="buscador">
        <label htmlFor="buscador">Buscar: </label>
        <input
          type="text"
          name="buscador"
          id="buscador"
          placeholder="Cardio" />
      </div>
      <div className="tamanio">
        <label htmlFor="tamanio">Tamaño</label>
        <input
          type="range"
          name="tamanio"
          id="tamanio"
          min={40}
          max={80}
          value={tamanio}
          onChange={handleTamanio} />
      </div>
      <div className="color">
        <label htmlFor="colorPrincipal">Color principal</label>
        <input
          type="color"
          name="colorPrincipal"
          id="colorPrincipal"
          onChange={handleColorChange}
          value={primaryColor} />
      </div>
      <div className="color">
        <label htmlFor="colorSecundario">Color configuracion</label>
        <input
          type="color"
          name="colorSecundario"
          id="colorSecundario"
          onChange={handleSColorChange}
          value={secondaryColor} />
      </div>
    </aside>
  )
}

export default Configurations