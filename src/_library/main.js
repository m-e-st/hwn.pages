/* main for aprendo-espanol */


function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function setDetailsDisplay(parentElement, newState) {
	const domDetails = parentElement.querySelectorAll("article>details");
	for (let i = 0; i < domDetails.length; i++) {
		domDetails[i].open = newState;
	}
}

function toggleDetailsDisplay(parentElement) {
	const domDetails = parentElement.querySelectorAll("article>details");
	for (let i = 0; i < domDetails.length; i++) {
		domDetails[i].open = ! domDetails[i].open;
	}
}

