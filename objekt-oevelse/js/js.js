/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScriptet sender noget usynligt til konsollen!')
// trolde-objektet
let trold = {
	id : 11,	
  navn : 'Valdemar',
  billede: '',
	vaaben : [
			'Scimitar',
			'Bue',
			'Kølle'
      ]
}

// vi skriver troldens navn i dokumentet
document.querySelector("#demo").innerHTML = "<h2 class='roed'>Du ser trolden</h2><p>" 
+ trold.navn 
+ "... og peger ondt på dig med sin " 
+ trold.vaaben[1] 
+ "</p>"