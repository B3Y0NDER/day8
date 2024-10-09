function houdini(name) {
$("#" + name).hide();  
$("." + name).hide();  
}

$(document).ready(function() {
$("#hide-test").click(function() {
houdini("test");  
});
$("#hide-unique").click(function() {

houdini("unique");  
});
});

