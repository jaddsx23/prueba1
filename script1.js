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
