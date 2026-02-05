// Componente principal de la aplicación: Cliente React sencillo para la API de empleados
// Esta práctica es una continuación directa de la API creada con Node.js + Express.
// La app SOLO lee datos: no hay formularios ni modificaciones, solo muestra la lista.

import { useEffect, useState } from "react";

// URL de la API de empleados (servidor Node.js + Express)
// Asegúrate de que tu app de Node está arrancada en este puerto.
const API_URL = "http://localhost:3000/empleados";

function App() {
  // Estado para guardar la lista de empleados que llega de la API
  const [empleados, setEmpleados] = useState([]);
  // Estado para saber si estamos cargando (true) o ya no (false)
  const [cargando, setCargando] = useState(false);
  // Estado para guardar un mensaje de error si algo falla
  const [error, setError] = useState(null);

  // useEffect se ejecuta DESPUÉS de que el componente se haya pintado
  // Aquí lo usamos para llamar a la API SOLO una vez, cuando se carga la página.
  useEffect(() => {
    // Función asíncrona que llama a la API
    async function cargarEmpleados() {
      try {
        // Indicamos que empezamos a cargar
        setCargando(true);
        // Limpiamos errores anteriores
        setError(null);

        // Hacemos una petición GET a la API
        const respuesta = await fetch(API_URL);

        // Si la respuesta no es correcta (código 200-299), lanzamos un error
        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar los empleados");
        }

        // Convertimos la respuesta a JSON (esto devuelve una promesa)
        const datos = await respuesta.json();

        // Guardamos los datos (array de empleados) en el estado
        setEmpleados(datos);
      } catch (err) {
        // Si algo falla, guardamos el mensaje de error
        setError(err.message);
      } finally {
        // En cualquier caso, dejamos de estar en estado de carga
        setCargando(false);
      }
    }

    // Llamamos a la función que carga los empleados
    cargarEmpleados();
    // El array vacío [] hace que esto se ejecute SOLO al cargar el componente
  }, []);

  // Calculamos algunas estadísticas sencillas a partir del array de empleados
  const totalEmpleados = empleados.length;

  // Obtenemos un array con solo los salarios
  const salarios = empleados.map((emp) => emp.salario);

  // Sumamos los salarios con reduce. Si no hay empleados, la suma será 0.
  const sumaSalarios = salarios.reduce((acumulado, salario) => acumulado + salario, 0);

  // Calculamos el salario medio. Si no hay empleados, el medio es 0.
  const salarioMedio = totalEmpleados > 0 ? (sumaSalarios / totalEmpleados).toFixed(2) : 0;

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "sans-serif",
        padding: "1rem",
      }}
    >
      <h1>Lista de empleados</h1>

      {/* Bloque de estado de carga */}
      {cargando && <p>Cargando empleados...</p>}

      {/* Bloque de error (si existe) */}
      {error && (
        <p style={{ color: "red" }}>
          Error: {error}
        </p>
      )}

      {/* Si no estamos cargando y no hay error, mostramos los datos */}
      {!cargando && !error && (
        <>
          {/* Estadísticas sencillas */}
          <section
            style={{
              border: "1px solid #ccc",
              padding: "0.5rem",
              marginBottom: "1rem",
              borderRadius: "4px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h2>Resumen</h2>
            <p>
              Total de empleados: <strong>{totalEmpleados}</strong>
            </p>
            <p>
              Suma total de salarios: <strong>{sumaSalarios}</strong>
            </p>
            <p>
              Salario medio: <strong>{salarioMedio}</strong>
            </p>
          </section>

          {/* Listado de empleados */}
          <section
            style={{
              border: "1px solid #ccc",
              padding: "0.5rem",
              borderRadius: "4px",
            }}
          >
            <h2>Detalle de empleados</h2>

            {/* Si no hay empleados en el array, lo indicamos */}
            {empleados.length === 0 ? (
              <p>No hay empleados para mostrar.</p>
            ) : (
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        borderBottom: "1px solid #ddd",
                        textAlign: "left",
                        padding: "0.5rem",
                      }}
                    >
                      ID
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid #ddd",
                        textAlign: "left",
                        padding: "0.5rem",
                      }}
                    >
                      Nombre
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid #ddd",
                        textAlign: "left",
                        padding: "0.5rem",
                      }}
                    >
                      Salario
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {empleados.map((empleado) => (
                    <tr key={empleado.id}>
                      <td
                        style={{
                          borderBottom: "1px solid #eee",
                          padding: "0.5rem",
                        }}
                      >
                        {empleado.id}
                      </td>
                      <td
                        style={{
                          borderBottom: "1px solid #eee",
                          padding: "0.5rem",
                        }}
                      >
                        {empleado.nombre}
                      </td>
                      <td
                        style={{
                          borderBottom: "1px solid #eee",
                          padding: "0.5rem",
                        }}
                      >
                        {empleado.salario}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        </>
      )}
    </div>
  );
}

export default App;
