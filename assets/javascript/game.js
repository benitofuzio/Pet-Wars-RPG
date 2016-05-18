var mac = "";
var queso = "";
var grumpycat = "";
var garfield = "";

function start() {
  mac = new fighter ("Mac", 140, 7, 10);
  queso = new fighter("Queso", 180, 8, 15);
  grumpycat = new fighter("Grumpy Cat", 170, 5, 14);
  garfield = new fighter("Garfield", 200, 6, 17);
}
function fighter(name, health, attack, counter){
	this.name=name;
	this.health=health;
	this.attack=attack;
	this.counter=counter;
	$("#starting-point").html('<img src="../images/mac.png">');
document.onload = start();
