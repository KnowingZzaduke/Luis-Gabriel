<?php 
include 'views/interfaces/pagina_principal/index.php';


if(isset($_GET["action"])){
    if($_GET["action"] == "iniciar"){
        include 'views/formularios/form_iniciar-sesion.php';
    }
}

?>