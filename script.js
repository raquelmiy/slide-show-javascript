'use strict';

const imagens = [
{'id': '1', 'url':'./imagens/ft1 (1).jpeg'},
{'id': '2', 'url':'./imagens/ft2.jpg'},
{'id': '3', 'url':'./imagens/ft3.jpg'},
{'id': '4', 'url':'./imagens/ft4.jpg'},
{'id': '5', 'url':'./imagens/ft5).jpg'},
{'id': '6', 'url':'./imagens/ft6.jpg'},
{'id': '7', 'url':'./imagens/ft7.jpg'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = (imagens, container) => {
imagens.forEach(imagens => {
	container.innerHTML += `
	<div class="item">
	<img src= '${imagens.url}'
	</div>
	`
})
}

loadImages(imagens, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
	containerItems.appendChild(items[0]);//appendChild mandar para o final.
    items = document.querySelectorAll('.item');  
}            

const next = () => {
	const lastItem = items[items.length - 1]; //pegar ultmo item
	containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');  
}            


document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);