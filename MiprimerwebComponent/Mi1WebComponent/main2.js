/**
 *c-r               window.customElements
 *c-al      window es el objeto global en el navegador.
 *c-r               customElements
 *c-al    es una propiedad de window que proporciona un punto
 *c-al    de acceso para interactuar con los elementos personalizados en el DOM.
 */
class MiPrimerComponente extends HTMLElement {
  /** 
  *c-al El constructor  lo podemos borrar si no lo modificamos 
   constructor() {
     super();
   }*/
  connectedCallback() {
    const parametro = this.getAttribute("gif"); //Con esta función getAttribute() Recuperamos los atributos de nuestro componente
    const qs = parametro !== null ? "gif" : "jpg"; //Con ese operador ternario buscamos el gift o la imagen dependiendo de si se detect el parametro gift
    this.innerHTML = `<img src="Tigres.${qs}"/>`;
  }
}

window.customElements.define("mi-componente-imagen", MiPrimerComponente);
