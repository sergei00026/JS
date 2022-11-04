const wrapper = document.querySelector('.wrapper');

class NewRectangle {
	constructor(text, height) {
		this.text = text;
		this.height = height;
	}
	render() {
		const element = document.createElement('div');

		element.classList.add('block');
		element.style.minHeight = this.height + 'px';
		element.innerHTML = this.text;

		wrapper.prepend(element);
	}
}

let aaa = 1;

setInterval(() => {
	new NewRectangle(
		'Блок № ' + aaa++,
		50,
	).render();

	const box = document.querySelectorAll('.block')[0];

	box.style.flexBasis = '0';
	box.style.padding = '0px';
	box.style.left = '-190px';

	setTimeout(() => {
		box.style.flexBasis = '100px';
		box.style.padding = '5px';
		box.style.left = '-120px';


	}, 3000);
	const box2 = document.querySelectorAll('.block');


	if (box2.length > 8) {
		box2[8].remove();
	}

	let boxWidth = 0;
	box2.forEach(elem => {
		boxWidth += parseInt(window.getComputedStyle(elem).width, 10);
	});

	if (parseInt(window.getComputedStyle(wrapper).width, 10) + 100 < boxWidth) {
		box2[box2.length - 1].remove();
	}


}, 3000);

const box = document.querySelectorAll('.block');
