/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 *
 * @author usuario
 */

public class EmpleadoTest {

    @Test
    void testGetNombre() {
        // Crear un objeto Empleado con nombre "Juan" y edad 30
        Empleado empleado = new Empleado("Juan", 30);
        
        // Verificar si el nombre del empleado es "Juan"
        assertEquals("Juan", empleado.getNombre(), "El nombre del empleado debería ser 'Juan'");
    }

    @Test
    void testGetEdad() {
        // Crear un objeto Empleado con nombre "Juan" y edad 30
        Empleado empleado = new Empleado("Juan", 30);
        
        // Verificar si la edad del empleado es 30
        assertEquals(30, empleado.getEdad(), "La edad del empleado debería ser 30");
    }
    
    @Test
    void testErrorNombreIncorrecto() {
        // Crear un objeto Empleado con nombre "Juan" y edad 30
        Empleado empleado = new Empleado("Juan", 30);
        
        // Verificar si el nombre del empleado es "Pedro" (esto debería fallar)
        assertEquals("Pedro", empleado.getNombre(), "El nombre del empleado debería ser 'Juan'");
    }
}
