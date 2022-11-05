const hits = document.querySelectorAll('.active__hit');

//Нажатие на кнопки ударов
function activeHit() {
	let countHit = 0;

	// Навешивание классов при нажатии
	hits.forEach(item => {
		item.addEventListener("click", function (e) {
			if (item.classList.contains('hit-active')) {
				item.classList.remove('hit-active');
				if (countHit > 0) {
					countHit--;
				}
			} else {
				if (countHit < 2) {
					item.classList.add('hit-active');
					countHit++;
				}
			}
		});
	});
}
activeHit();



const activeButton = document.querySelector('.active__button');
const chat = document.querySelector('.chat');

// Нанесение ударов
function striking() {
	activeButton.addEventListener("click", function (e) {
		e.preventDefault();

		hits.forEach(elem => {
			hitZone(elem, 'hit-active', 'head', 'голову');
			hitZone(elem, 'hit-active', 'body', 'туловище');
			hitZone(elem, 'hit-active', 'hands', 'руки');
			hitZone(elem, 'hit-active', 'belt', 'пояс');
			hitZone(elem, 'hit-active', 'legs', 'ноги');
		});
	});
}
striking();

// Функционал при нанесении ударов
function hitZone(elem, classHit, dataHit, zone) {
	if (elem.classList.contains(classHit) && elem.getAttribute('data-hit') == dataHit) {
		const hit = damage(49, 101);
		health(hit);
		const item = document.createElement('div');
		item.innerHTML = `<b>Вы:</b> ударили в ${zone} нанесено урона: <span>${hit}</span>`;
		chat.prepend(item);
	}
}


// Расчет нанесения урона
function damage(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

// Уменьшения здоровья при ударе
const orkHealth = document.querySelector('.ork__health');
const healthOrk = 1000;
let end = healthOrk;


function health(endHealth = 0) {
	end -= endHealth;
	endBattle(end);

	orkHealth.textContent = `${healthOrk} | ${end}`;
}
health();

// Завершение боя и выявление победителя
const head = document.querySelector('.head');
const wrapper = document.querySelector('.wrapper');
const expOrk = 50;
let exp = 0;

function endBattle(nullhealth) {
	if (nullhealth < 0) {
		head.style.display = 'none';
		endBattleWindow.style.display = 'block';
		chat.style.display = 'none';
		const battleExp = document.querySelector('.end-battle__body span').textContent = expOrk;
		exp += expOrk;
		character(exp);
		end = 1000;
	}
}


// Начисление опыта
const characterExp = document.querySelector('.character__experience span');

function character(exp) {
	characterExp.textContent = exp;
}


const char = document.querySelector('.character');
const endBattleWindow = document.querySelector('.end-battle');

// Кнопка переброски на песонажа(После боя)
function returnCharacter() {
	head.style.display = 'none';
	char.style.display = 'block';
	endBattleWindow.style.display = 'none';

}

// Кнопка переброски на стартовую(После боя)
const characterButton = document.querySelector('.character__button');
characterButton.addEventListener("click", function (e) {
	char.style.display = 'none';
	head.style.display = 'flex';
	chat.style.display = 'block';
	chat.replaceChildren();


});