<?php
$nombre = "Luis";
$hora = (int)date("H");
$saludo = ($hora < 12) ? "Buenos días ☀️" : (($hora < 20) ? "Buenas tardes 🌇" : "Buenas noches 🌙");
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Saludo PHP</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="container">
    <h1>Bienvenido, <?php echo htmlspecialchars($nombre); ?></h1>
    <p><?php echo $saludo; ?></p>
    <p><a class="btn" href="index.html">Volver al inicio</a></p>
  </main>
</body>
</html>
