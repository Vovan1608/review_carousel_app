"use strict";

const employee = [
	{
		id: 1,
		name: "vladymyr zenin",
		job: "web developer",
		img: "./img/person1.jpg",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	},
	{
		id: 2,
		name: "vasya popkin",
		job: "back-end developer",
		img: "./img/person2.jpg",
		text:
			"Corporis quidem repellat tenetur.Lorem ipsum dolor sit",
	},
	{
		id: 3,
		name: "bob bobbovich",
		job: "ui designer",
		img: "./img/person3.jpg",
		text:
			"Quia id dolores quod exercitationem officia beatae ad?",
	}
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const randBtn = document.querySelector(".random-button");

function getRandom() {
	return Math.floor(Math.random() * employee.length);
}
// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
	showPerson();
});

function showPerson() {
	const item = employee[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

function getNextPerson() {
	currentItem++;
	if (currentItem > employee.length - 1) {
		currentItem = 0;
	}
}

nextBtn.addEventListener("click", () => {
	currentItem++;
	if (currentItem > employee.length - 1) {
		currentItem = 0;
	}
	showPerson();
});

prevBtn.addEventListener("click", () => {
	currentItem--;
	if (currentItem < 0) {
		currentItem = employee.length - 1;
	}
	showPerson();
});

randBtn.addEventListener("click", () => {
	currentItem = getRandom();
	showPerson();
});