// Following the Guide
const addData = document.querySelector("#addData");
const deleteData = document.querySelector("#deleteData");
const topData = document.querySelector("#topData");
const clearData = document.querySelector("#clearData");

addData.addEventListener("click", () => {
	const inputData = document.querySelector("#inputData");
	let num = inputData.value;
	if (num != "") {
		pushData(num);
		num = "";
		inputData.value = "";
	}
	console.log(stack);
})

deleteData.addEventListener("click", () => {
	popData();
	console.log(stack);
})

topData.addEventListener("click", () => {
	getTop();
})

clearData.addEventListener("click", () => {
	clearStack();
	console.log(stack);
})

const max = 5;
let topPointer = -1;
let stack = new Array(max).fill(null);

const pushData = (data) => {
	if (!isFull()) {
		topPointer++;
		stack[topPointer] = data;
	} else {
		console.log("Stack is Full");
	}
}

const popData = () => {
	if (!isEmpty()) {
		stack[topPointer] = null;
		if (topPointer === 0) {
			topPointer = -1
		} else {
			topPointer--;
		}
	} else {
		console.log("Stack is Empty");
	}	
}

const isFull = () => {
	if (topPointer === max - 1) {
		return true;
	} else {
		return false;
	}
}

const isEmpty = () => {
	if (topPointer === -1) {
		return true;
	} else {
		return false;
	}
}

const getTop = () => {
	console.log("top: " + stack[topPointer]);
}

const clearStack = () => {
	while (topPointer > -1) {
		stack[topPointer] = null;
		topPointer--;
	}
}