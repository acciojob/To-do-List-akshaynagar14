//your code here
let btn = document.getElementById("addTodoBtn");

function addItem() {
	let data = document.getElementById("newTodoInput").value;
	if(data){
		var li = document.createElement("li");
		li.innerHTML = data;
		document.getElementById("todoList").appendChild(li);
	}
	document.getElementById("newTodoInput").value = "";
}

btn.addEventListener('click', addItem);

