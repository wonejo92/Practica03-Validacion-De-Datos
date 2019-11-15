var slideIndex = 1;
showDivs(slideIndex);

window.onload = function() {
	iniciar();
}

function iniciar() {
	slideIndex = 1;
	showDivs(1);
	array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var val;
	for(i = 0; i < 5; i++) 
		array.splice(Math.floor(Math.random() * array.length), 1);
		array.splice(Math.floor(Math.random() * array.length), 1);
	shuffle(array);

	for(i = 0; i < 5; i++) 
		document.getElementById(i).src = "img/"+ array[i] +".jpg";
}

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n == x.length)
		document.getElementById('right').disabled = true;
	else
		document.getElementById('right').disabled = false;

	if (n == 1) 
		document.getElementById('left').disabled = true;
	else
		document.getElementById('left').disabled = false

	for (i = 0; i < x.length; i++)
		x[i].style.display = "none";

	x[slideIndex-1].style.display = "block"; 
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}