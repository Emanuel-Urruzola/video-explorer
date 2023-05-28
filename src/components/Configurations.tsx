import { useEffect } from 'react'

function Configurations() {
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
        <input type="text" name="buscador" id="buscador" placeholder="Cardio" />
      </div>
      <div className="color">
        <label htmlFor="colorPrincipal">Color principal</label>
        <input type="color" name="colorPrincipal" id="colorPrincipal" />
      </div>
      <div className="color">
        <label htmlFor="colorPrincipal">Color configuracion</label>
        <input type="color" name="colorPrincipal" id="colorPrincipal" />
      </div>
    </aside>
  )
}

export default Configurations