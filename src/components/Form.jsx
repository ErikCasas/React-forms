import React, { useState } from "react";
import "../styles/form-styles.css";

const Form = () => {

  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);


  const handlerSubmit = (e) => {
    e.preventDefault();

    if (age <= 18) {
      return setError("Debes ser mayor de 18");
    }

    if (typeof age !== "number") {
      return setError("Debe ser un dato numerico");
    }

    if (age <= 0) {
      return setError("Debe ser un valor valido");
    }
    if (name === "") {
      return setError("introduce un nombre");
    }

    if (name.length <= 3) {
      return setError("introduce un nombre valido");
    }
    setError(null);
    console.log("se envio!!");
  };

  return (
    <div>
      {/**Si existe algun valor en error, mostrará la etiqueta con ese error
       * de lo contrario no mostrará nada*/}
      {error && <p>{error}</p>}
      <form className="form" onSubmit={handlerSubmit}>
        <label htmlFor="age">edad</label>
        <input
          min={1}
          max={113}
          type="number"
          id="age"
          onChange={(evento) => {
            // le decimos que guarde en el estado de react aquel estado del input 
            setAge(evento.currentTarget.valueAsNumber);
          }}
        />
        <label htmlFor="name"> nombre</label>
        <input type="text" onChange={(e) => {
          //recordemos que tenemos alternativas para acceder al valor del input
          setName(e.target.value)
          }} />

        <button type="submit">Subir</button>
      </form>
         {/* <button type="submit">Subir</button> averigua que sucede si el boton esta por fuera del form */}
    </div>
  );
};

export default Form;
