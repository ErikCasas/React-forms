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
            onChange={(event)=>{setValue(event.currentTarget.value)}}//currentTarget es una alternativa para acceder a value
            />
        </>
    )
}
```

Finalmente ya con el valor del input, en una variable mas facíl de manipular, podemos pensar en distintos casos que deben ser controlados, para así no permitir que por ejemplo, nuestra base de datos almacene datos erroneos. Esto lo podemos hacer de distintas formas, una de ella puede ser a traves del hook _useEffect_, como por ejemplo


```javascript
function AnotherComponent(){

    const [value, setValue] = useState("");

    useEffect(()=>{
        if(value.length<3){
            console.log("se requieren al menos 3 caracteres")
        }else if(value.length>11){
            console.log("demasiados caracteres D:<")
        }else {
            console.log("Valor válido");
        }
    },[value])

    return(
        <>
            <h1>este es el valor del input {value}</h1>
            <input 
            type="text" 
            value={value}
            onChange={(event)=>{setValue(event.currentTarget.value)}}
            />
        </>
    )
}
```

Sin embargo, este modo no es del todo recomendable, debido a que este presentaria un mensaje de error sin que el usuario haya terminado de llenar el formulario, siendo un poco hostigante e incluso podemos hablar de consumo de recursos innecesario ya que se esta evaluando algo que aún no esta terminado. Es por ello que debemos en primer lugar agregar un botón que al ser clickeado, inidique que el usuario ha terminado de llenar el formulario y este debe ser validado.

Para esto, también es importante introducir el uso de la etquieta \<form> la cual deberá envolver todo nuestro formulario, indicando el inicio y fin de este, para finalizar con la implmentación del evento onSubmit el cual se activa, cuando se intenta enviar el fomrumario.  Este evento nos permite ejecutar validaciones una vez que el usuario ha completado el formulario y ha hecho clic en el botón de envío.


```javascript
function AnotherOneBitesTheDus(){

    const [value, setValue] = useState("");

    function handlerSubmit(e){
        e.preventDefault();
         if(value.length<3){
            console.log("se requieren al menos 3 caracteres")
        }else if(value.length>11){
            console.log("demasiados caracteres D:<")
        }else {
            console.log("Valor válido");
        }
    };
    return(
        <>
            <form onSubmit={handlerSubmit}>
                <h1>este es el valor del input {value}</h1>
                <input  
                type="text"  
                value={value} 
                onChange={(event)=>{setValue(event.currentTarget.value)}}/>
                <button type="submit">
            </form>
        </>
    )
};
```
En resumen, la creación y manejo de formularios con __*React*__ se vuelve más sencillo y efectivo, gracias a la combinación de elementos _HTML_ y _JavaScript_, junto con la implementación de los hooks. En ultima instancia, comprender también cómo crear un formulario en __*React*__ y aplicar las buenas practicas es algo de **vital** importancia para garantizar su usabilidad y la integridad de este, cabe mencionar el echo de que existen, _hooks_ y paquetes externos que facilitan aún más el manejo de los formularios, como el _hook_ _**useRef**_, el cual nos facilita extraer el valor del input, con menos código

```javascript
function NameOfAComponent(){

    const text = useRef(null);

    function handlerSubmit(e){
        e.preventDefault();
        console.log(text.current.value)
    };
    return(
        <>
            <form onSubmit={handlerSubmit}>
                <h1>este es el valor del input {value}</h1>
                <input  
                type="text"  
                ref={text}
                />
                <button type="submit">
            </form>
        </>
    )
};
```

También existen herramientas externas como [formik](https://formik.org/ (click aquí)), que facilitan su control [ejemplo](https://formik.org/docs/examples/basic). Sin embargo, ahora solo te falta realizar practicas para mejorar tus hablidades y poner en practica lo aprendido el día de hoy :love_letter:

