# Cliente React sencillo para la API de empleados

Esta práctica es una **continuación directa** de la sesión donde has creado la API REST con Node.js y Express:

```txt
GET /empleados
http://localhost:3000/empleados
```

Esa API devuelve un array de empleados en formato JSON, por ejemplo:

```json
[
  { "id": 1, "nombre": "Luis", "salario": 2000 },
  { "id": 2, "nombre": "Marta", "salario": 2400 },
  { "id": 3, "nombre": "Diego", "salario": 1800 }
]
```

## 📝 Enunciado de la práctica (para el alumnado)

### Título  
**Cliente React para la API de empleados (versión sencilla)**

### Objetivo  
Crear una pequeña aplicación en **React** que se conecte a la API de empleados hecha con **Node.js + Express** y muestre la lista de empleados en pantalla.

### Lo que debe hacer la aplicación

1. **Conectarse a la API**
   - Usar `fetch` para hacer una petición `GET` a:
     ```txt
     http://localhost:3000/empleados
     ```

2. **Estados en React**
   - Usar `useState` para guardar:
     - La lista de empleados.
     - Un texto de error (si algo falla).
     - Un indicador de `cargando` (true/false).
   - Usar `useEffect` para hacer la petición a la API **cuando se cargue la página**.

3. **Mostrar información en la pantalla**
   - Un título: `Lista de empleados`.
   - Un mensaje **"Cargando..."** mientras se están descargando los datos.
   - Si hay un error, un mensaje en rojo con el texto del error.
   - Si se han cargado bien:
     - Mostrar cuántos empleados hay en total.
     - Mostrar un listado (tabla o lista) con:
       - ID del empleado
       - Nombre
       - Salario

4. **Calcular y mostrar:**
     - La **suma total** de todos los salarios.
     - El **salario medio** (total / número de empleados).

No hace falta **ningún formulario**, ni **añadir**, ni **borrar**, ni **editar** empleados.  
Solo **leer** de la API y mostrarlo en pantalla.

---

## Cómo usar este proyecto con Vite + React

Este proyecto está pensado para usarse con una plantilla básica de **Vite + React**.

### 1. Crear un proyecto nuevo con Vite

En una terminal:

```bash
npm create vite@latest cliente-react-empleados -- --template react
cd cliente-react-empleados
npm install
```

### 2. Sustituir archivos de `src/`

1. Borra el contenido de la carpeta `src/` del proyecto que ha creado Vite.
2. Copia dentro de `src/` los archivos de esta descarga:
   - `App.jsx`
   - `main.jsx`

Puedes copiar también este `README.md` a la raíz del proyecto si quieres.

### 3. Asegurarte de que la API de empleados está funcionando

En **otra** terminal distinta, arranca el servidor Node.js de la práctica anterior (la API de empleados), por ejemplo:

```bash
cd C:\Users\TU_USUARIO\Desktop\api-empleados
node app.js
```

Deberías ver en la consola:

```txt
API funcionando en puerto 3000
```

Y si entras en el navegador a:

```txt
http://localhost:3000/empleados
```

deberías ver el JSON con la lista de empleados.

### 4. Arrancar la aplicación React

En la carpeta del proyecto de React (`cliente-react-empleados`):

```bash
npm run dev
```

La terminal te mostrará una URL, normalmente:

```txt
http://localhost:5173/
```

Ábrela en el navegador.  
Si todo está bien, verás:

- Un título `Lista de empleados`.
- Mientras carga: el mensaje `Cargando empleados...`.
- Después, la lista de empleados que vengan de tu API de Node.
