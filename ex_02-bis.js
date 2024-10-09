const map = L.map("map").setView([48.8566, 2.3522], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
}).addTo(map);

const schools = [
{ name: "Paris", coords: [48.8566, 2.3522] },
{ name: "Bordeaux", coords: [44.8378, -0.5792] },
{ name: "Lille", coords: [50.6292, 3.0573] },
{ name: "Strasbourg", coords: [48.5734, 7.7521] },
{ name: "Nice", coords: [43.7102, 7.2620] }
];

schools.forEach(school => {
const marker = L.marker(school.coords).addTo(map);
marker.bindPopup(`${school.name} rocks!`);
});

map.setView([48.8566, 2.3522], 5);
map.on('zoomend', () => {
map.setView([48.8566, 2.3522], 5);
});
