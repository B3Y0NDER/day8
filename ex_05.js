const app = new Vue({
el: '#app',
data: {
message: ''
},
created() {
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
this.message = `The current time is ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}.`;
}
});
