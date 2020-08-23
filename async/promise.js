const todos = 
[
	{title : "Todo 1", description : "bug temizligi..."},
	{title : "Todo 2", description : "video cekimi yap..."},
	{title : "Todo 3", description : "bos zaman..."}
];

function todoList()
{
	setTimeout(() => 
	{
		todos.forEach(element => console.log(element.title, element.description));
	},1000);
}

function newTodo(todo)
{
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			todos.push(todo);
			const e = false;

			//BURASI ÖNEMLİ !!!
			if(!e)
			{
				resolve();
			}else
			{
				reject("Hata var");
			}
		},2000);
	
	});
	
}

newTodo(
	{title : "Todo 4", description : "alisverise git"}
	).then(response => {
		todoList();
	}).catch(e => console.log(e));


todoList();


console.log("hello");


/*

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => console.log(data));

*/