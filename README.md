<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interfaz de Imágenes Interactivas</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="image-container">
        <div class="image-item" id="img1">
            <img src="imagen1.jpg" alt="Imagen 1">
            <div class="info">Información de la imagen 1</div>
        </div>
        <div class="image-item" id="img2">
            <img src="imagen2.jpg" alt="Imagen 2">
            <div class="info">Información de la imagen 2</div>
        </div>
        <div class="image-item" id="img3">
            <img src="imagen3.jpg" alt="Imagen 3">
            <div class="info">Información de la imagen 3</div>
        </div>
        <div class="image-item" id="img4">
            <img src="imagen4.jpg" alt="Imagen 4">
            <div class="info">Información de la imagen 4</div>
        </div>
        <div class="image-item" id="img5">
            <img src="imagen5.jpg" alt="Imagen 5">
            <div class="info">Información de la imagen 5</div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
 styles.css 
body {
    font-family Arial, sans-serif;
    display flex;
    justify-content center;
    align-items center;
    height 100vh;
    background-color #f4f4f4;
    margin 0;
}

.image-container {
    display flex;
    gap 20px;
}

.image-item {
    position relative;
    overflow hidden;
    width 200px;
    height 300px;
    transition all 0.3s ease;
}

.image-item img {
    width 100%;
    height 100%;
    object-fit cover;
    transition transform 0.3s ease;
}

.image-item .info {
    position absolute;
    bottom 0;
    left 0;
    right 0;
    background rgba(0, 0, 0, 0.7);
    color white;
    padding 10px;
    transform translateY(100%);
    transition transform 0.3s ease;
}

.image-itemhover img {
    transform translateX(10px);  Desplaza la imagen hacia la derecha 
}

.image-itemhover .info {
    transform translateY(0);  Muestra la información 
}
 script.js
const images = document.querySelectorAll('.image-item');

images.forEach(image = {
    image.addEventListener('mouseover', () = {
        image.querySelector('.info').style.transform = 'translateY(0)';
    });
    
    image.addEventListener('mouseout', () = {
        image.querySelector('.info').style.transform = 'translateY(100%)';
    });
});

