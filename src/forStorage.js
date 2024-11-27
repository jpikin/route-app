import localforage from 'localforage';
import { nanoid } from 'nanoid'

export async function getStudents() {
	await someNetwork();
	let products = await localforage.getItem('students');
	if (!products) products = [];
	return products;
}

export async function createStudent() {
	await someNetwork();
	let id = nanoid(6);
	let student = { id };
	let students = await getStudents();
	students.unshift(student);
	await setStudents(students);
	return student;
}

function setStudents(students) {
	return localforage.setItem('students', students);
}

let someCache = {};

async function someNetwork(key) {
	if (!key) {
		someCache = {};
	}

	if (someCache[key]) {
		return;
	}

	someCache[key] = true;

	return new Promise((res) => {
		setTimeout(res, Math.random() * 700);
	});
}

export async function getStudent(id) {
	await someNetwork(`student:${id}`);
	let students = await localforage.getItem('students');
	let student = students.find((student) => student.id === id);
	return student ?? null;
}