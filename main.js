"use strict";

const employee = [
	{
		id: 1,
		name: "vladymyr zenin",
		job: "web developer",
		img: "./img/person1.jpg",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem repellat tenetur. Quia id dolores quod exercitationem officia beatae ad?",
	},
	{
		id: 2,
		name: "vasya popkin",
		job: "back-end developer",
		img: "./img/person2.jpg",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem repellat tenetur. Quia id dolores quod exercitationem officia beatae ad?",
	},
	{
		id: 3,
		name: "bob bobbovich",
		job: "ui designer",
		img: "./img/person3.jpg",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem repellat tenetur. Quia id dolores quod exercitationem officia beatae ad?",
	}
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

