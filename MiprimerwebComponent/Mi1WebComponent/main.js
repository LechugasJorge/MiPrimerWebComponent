/**
 *c-r               HTLElement
 *c-al      Es una interfaz que representa y
 *c-al      permite seleccionar elementos de HTML
 */
class MiPrimerComponente extends HTMLElement {
  constructor() {
    super();
  }
  //El método connectedCallback() es uno de los métodos del ciclo de vida de los elementos personalizados
  //(también conocidos como Web Components). Este método se llama automáticamente cuando el elemento
  //personalizado se conecta al DOM, es decir, cuando se inserta en el documento HTML.
  connectedCallback() {
    this.innerHTML = "<h1>Hola Mundo</h1>";
  }
}

window.customElements.define("mi-primer-componente", MiPrimerComponente);
