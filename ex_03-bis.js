document.addEventListener('DOMContentLoaded', function() {
const elements = [
{ id: "image", content: "C'est une image." },
{ id: "square", content: "C'est un carré." },
{ id: "sound", content: "C'est un son." },
{ id: "button", content: "C'est un bouton." },
{ id: "video", content: "C'est une vidéo." }
];

elements.forEach(function(item) {
tippy(`#${item.id}`, {
content: item.content,
trigger: 'click',
onHide(instance) {
instance.unmount();
}
});
});

tippy(`#image`, {
content: "C'est une image.",
duration: 300,
onShow(instance) {
setTimeout(() => {
instance.hide();
}, 5000);
}
}).show();
});

