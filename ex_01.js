document.addEventListener('DOMContentLoaded', function () {
new Splide('#latest-creations-carousel', {
type: 'loop',
perPage: 3,       
autoplay: true,   
interval: 5000,   
focus: 'center',  
gap: '1rem',      
padding: '5rem'   
}).mount();
});
