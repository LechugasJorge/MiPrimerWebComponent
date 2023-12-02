/**
 *c-r              Cambiando un web component
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

  static get observedAttributes() {
    return ["gif"];
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    // Se llama cuando se detecta un cambio en los atributos observados
    if (attributeName === "gif") {
      this.actualizarContenido();
    }
  }
  actualizarContenido() {
    const parametro = this.getAttribute("gif");
    const qs = parametro !== null ? "gif" : "jpg";
    this.innerHTML = `<img src="Tigres.${qs}"/>`;
  }

  connectedCallback() {
    this.actualizarContenido();
  }
}

window.customElements.define("mi-componente-imagen", MiPrimerComponente);
