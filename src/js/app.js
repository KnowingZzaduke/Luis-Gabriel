const toggleAbrir = document.querySelector('.menu_hamburguesa');
const toggleCerrar = document.querySelector('.cerrar');
const menuSmall = document.querySelector('.content_menu-desplegable');
const close = document.querySelector('main', 'section', 'footer');

//Abrir Menú
toggleAbrir.addEventListener('click', function(e){
    if(e){
        menuSmall.style.display = ('block');
    }
})

//Cerrar menú
toggleCerrar.addEventListener('click', function(e){
    if(e){
        menuSmall.style.display = ('none');
    }
})

//Cerrar menú en cualquier parte de la pantalla
close.addEventListener('click', function(e){
    if(e){
        menuSmall.style.display = ('none');
    }
})

