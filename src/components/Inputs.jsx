import React from "react";
import "../styles/form-styles.css";

const Inputs = () => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("envio del formulario");
  };
  return (
    <>
      <form className="form" onSubmit={handlerSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            onChange={(e) => console.log(e.currentTarget.value)}
          />
        </label>

        <label htmlFor="age">
          age:
          <input
            type="number"
            id="age"
            onChange={(e) => console.log(e.currentTarget.valueAsNumber)}
          />
        </label>
        <label htmlFor="password">
          password:
          <input
            type="password"
            id="password"
            onChange={(e) => console.log(e.currentTarget.value)}
          />
        </label>
        
        <label htmlFor="range">
          range:
          <input
            //podemos definir un rango para seleccionar
            min={10}
            max={25}
            // value={10} podemos definir un valor inicial 
            type="range"
            id="range"
            onClick={(e) => console.log(e.currentTarget.value)}
          />
        </label>
        <label htmlFor="file">
          file:
          <input
            type="file"
            id="file"
            onChange={(e) => console.log(e.currentTarget.files[0])}
          />
        </label>
        <label htmlFor="checkbox">
          checkbox:
          <input
            type="checkbox"
            id="checkbox"
            onClick={(e) => console.log(e.currentTarget.checked)}
          />
        </label>
 

        <button type="submit">enviar</button>
        {/* Si le ponemos de tipo reset al boton dentro del form,
           este limpiara todos los campos de este */}
        <button type="reset">borrar todo</button>
      </form>
    </>
  );
};

export default Inputs;
