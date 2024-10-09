document.addEventListener('DOMContentLoaded', function () {
var splide = new Splide('#latest-creations-carousel', {
type: 'loop',
perPage: 3,       
autoplay: true,    
interval: 5000,   
focus: 'center',   
});
splide.mount();      
});
