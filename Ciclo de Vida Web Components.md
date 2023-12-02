# Ciclo de vida de los Elementos Personalizados o Web Components

Los elementos personalizados, o Web Components, tienen un ciclo de vida que describe las distintas etapas por las que pasan desde que son creados hasta que son eliminados del DOM. Estas etapas están gestionadas por ciertos métodos que puedes implementar en tu clase de elemento personalizado. Aquí hay una descripción general de las fases principales del ciclo de vida:

1. **Creación (Constructor):**
   - **Método Relevante:** `constructor()`
   - **Descripción:** Se llama cuando se crea una instancia del elemento personalizado. Aquí es donde se deben realizar las inicializaciones iniciales.

2. **Conexión al DOM (Connected):**
   - **Método Relevante:** `connectedCallback()`
   - **Descripción:** Se llama cuando el elemento personalizado se conecta al DOM. Es un buen lugar para realizar tareas de configuración, como establecer eventos o realizar acciones específicas de conexión.

3. **Desconexión del DOM (Disconnected):**
   - **Método Relevante:** `disconnectedCallback()`
   - **Descripción:** Se llama cuando el elemento personalizado se desconecta del DOM. Aquí puedes realizar limpiezas o liberar recursos relacionados con el DOM.

4. **Atributos Observados (Attribute Changed):**
   - **Método Relevante:** `attributeChangedCallback()`
   - **Descripción:** Se llama cuando los atributos observados del elemento personalizado cambian. Puedes definir qué atributos observar y qué hacer cuando cambian.

5. **Adopción (Adopted):**
   - **Método Relevante:** `adoptedCallback()`
   - **Descripción:** Se llama cuando el elemento personalizado es adoptado por otro documento. Esto puede suceder cuando el elemento se mueve de un documento a otro.

Estos métodos ofrecen puntos de gancho donde puedes agregar lógica personalizada para responder a eventos específicos en la vida útil de tu elemento personalizado. No todos los métodos son necesarios en todos los casos; depende de las necesidades específicas de tu componente. Por ejemplo, si no estás observando atributos o si no necesitas realizar acciones en la conexión o Desconexión del DOM, no es necesario implementar esos métodos.
Por eso es que se mantiene guardados en la interfaz HTMLElements
