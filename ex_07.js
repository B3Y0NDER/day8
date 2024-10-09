new Vue({
el: '#app',
data() {
return {
chuckNorrisImage: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Chuck_Norris_in_The_Way_of_the_Dragons.jpg', // Mettez votre image ici
};
},
methods: {
moveImage(event) {
const mouseX = event.clientX;
const mouseY = event.clientY;

// Décalage simple pour éloigner l'image de la souris
const offsetX = 100; // Valeur fixe pour le décalage
const offsetY = 100; // Valeur fixe pour le décalage

const image = document.getElementById('chuck-norris');
image.style.transform = `translate(${mouseX + offsetX}px, ${mouseY + offsetY}px)`;
},
},
});
//si je peux me permettre, c'était l'exo le plus marrant de la semaine XD

