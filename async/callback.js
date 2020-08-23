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

function newTodo(todo, callback)
{
	setTimeout(() => {
		todos.push(todo);
		callback();
	},2000);
}

newTodo({title : "Todo 4", description : "alisverise git"}, todoList);
//todoList();



/*

HATA BURADA !!!


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
	setTimeout(() => {
		todos.push(todo);
	},2000);
}

newTodo({title : "Todo 4", description : "alisverise git"});
todoList();

*/