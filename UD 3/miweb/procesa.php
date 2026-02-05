<?php
$nombre  = isset($_POST['nombre'])  ? trim($_POST['nombre'])  : '';
$mensaje = isset($_POST['mensaje']) ? trim($_POST['mensaje']) : '';
?>
<!doctype html>
<html>
  <head><meta charset="utf-8"><title>Resultado</title></head>
  <body>
    <h1>Gracias por tu mensaje</h1>
    <p><strong>Nombre:</strong> <?php echo htmlspecialchars($nombre); ?></p>
    <p><strong>Mensaje:</strong> <?php echo nl2br(htmlspecialchars($mensaje)); ?></p>
    <p><a href="contacto.html">Volver</a> | <a href="index.html">Inicio</a></p>
  </body>
</html>
