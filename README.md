# react-forms

##### ¡Bienvenido@s a _react-forms_!

react es una biblioteca la cual facilita la creación de interfaces de usuario, esto gracias a la combinación de _**javascript**_ y _**HTML**_, 
esto conlleva a que la creación y control de formularios, sea mucho mas fácil, esto a traves de algunos _hooks_ como _**useState**_ y _**useEffect**_.

Los formularios son aquellos espacios en nuestro sitio web en los que el usuario puede ingresar algún dato, para ello, lo primero que necesitamos, es la etiqueta **HTML** _\<input/>_ y a según nuestros intereses, debemos definir, el tipo de _\<input/>_ que utilizaremos. Algunos de los tipos comunes son:

###### podemos ingresar texto || \<input type="text">
<input type="text"> 

---

###### podemos ingresar números || \<input type="number"> 
<input type="number"> 

---
###### podemos ingresar archivos || \<input type="file">  
<input type="file">

---
###### podemos ingresar la fecha || \<input type="date">  
<input type="date">  

---
###### podemos marcar una opciónm entre varias || \<input type="radius">  
<input type="radio">

---
###### podemos ingresar un rango numerico || \<input type="range"> 
<input type="range">

---
###### podemos marcar una casilla de verificaión || \<input type="checkbox"> 

<input type="checkbox">

---

Existen mas tipos de \<input>, sin embargo estos son de los mas utilizados. Para poder realiza la gestión y control de los datos ingresados en el formulario,el primer paso es extraer los valores, que son ingresados en estos (los que se pueden), o extraer el valor que respresentan estos (como el chackbox), para asi evaluarlo e indicar si es valido o no el formulario, esto se puede hacer a trabes del atributo _**onChange**_, el cual recibe una función para el manejo del _evento_. Una vez con acceso al objeto de evento, podremos acceder a su propiedad target con la notación del punto ".", y por ultimo accedemos al valor del input, dependiendo del tipo de input, pero por lo general es a traves de la propiedad "value", mas adelante, exploraremos sus variantes y posibles alternativas.

```javascript
<input type="text" onChange={(event)=>{console.log(event.target.value)}}/>//value es el texto en el input
```

Ya teniendo claro como acceder a los valores de un \<input>, solo queda guardar el valor en una variable, o aun mejor, en un stado local, utlizando el hook, _useState_, utlizando la función para actualizar el estado y el valor del estado que nos da este hook.

```javascript
function Component(){

    const [value, setValue] = useState("");

    return(
        <>
        <h1>este es el valor del input {value}</h1>
        <input 
        type="text" 
        value={value}
        onChange={(event)=>{setValue(event.target.value)}}/>
    )
}
```

