let pai = document.querySelector('#pai');
let irmaoOndeVoceEsta = document.createElement('p');
irmaoOndeVoceEsta.innerHTML = "IrmãoOndeVoceEsta";
pai.appendChild(irmaoOndeVoceEsta);

let elementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta");
let filhoElementoOnde = document.createElement('p');
filhoElementoOnde.innerText = 'filho do elementoOndeVoceEsta ;)';
elementoOndeVoceEsta.appendChild(filhoElementoOnde);

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let filhoDoPrimeiroFilhoFilho = document.createElement('p');
filhoDoPrimeiroFilhoFilho.innerText = "elemento filho do primeirofilhodofilho";
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoFilho);

let terceiroFilho = filhoDoPrimeiroFilhoFilho
.parentElement
.parentElement
.nextElementSibling;
console.log(terceiroFilho);

