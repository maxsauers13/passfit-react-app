<!-- HEADER -->
<?php
  include_once 'header.php'
?>

<html>

<head>
<link rel="stylesheet" href="css/style.css">
</head>

<body>

<h1 class="title">Passfit</h1>

<img class="piechart" src="img/piechart.png" usemap="#piechartmain"></img>

<map name="piechartmain">
  <area shape="rect" coords="50,100,175,200" alt="Physical" href="physical.php">
  <area shape="rect" coords="250,100,375,200" alt="Cognitive" href="cognitive.php">
  <area shape="rect" coords="125,250,300,350" alt="Psychological" href="psychological.php">
</map>

<!--
<a class="form-link" href="physical.php">Pysical</a>
<a class="form-link" href="cognitive.php">Cognitive</a>

<div class="form-link-divider"></div>
<a class="form-link" href="psychological.php">Psychological</a>
<div class="form-link-divider"></div>
-->
<div class="row">
  <div class="form-link-divider"></div>
</div>

</body>
</html>

<!-- FOOTER -->
<?php
  include_once 'footer.php'
?>