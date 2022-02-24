let testArr = [];

let grocceries = ["Milk", "Eggs", "Frosted Flakes", "Salami", "Juice"];

console.log(testArr);
console.log(grocceries);

for (let i = 0; i < grocceries.length; i++) {  
    console.log(grocceries[i]);
}

console.log(typeof(grocceries));

grocceries.push("Cookies");  // добавить элемент в конец массива

console.log(grocceries);

grocceries.unshift("Bananas"); // добавить элемент в начале массива. Нумерация изменятеся

console.log(grocceries);

let lastItem = grocceries.pop(); // pop удаляет последний элемент и возвращает его

console.log("Удаленный элемен методом pop: " + lastItem);
console.log("Массив после выполнения команды pop: " +grocceries);

grocceries.shift();
console.log("Массив после выполнения команды shift: " + grocceries); // pop удалает первый элемент и возвращает его

// поиск элементов в массиве

let resultIndex = grocceries.indexOf("Eggs", 0); // indexOf возвращает первый найденный индекс искомого элемента lastIndexOf возвращает последний найденный индекс
console.log("первый найденный индекс искомого элемента \"Eggs\": " + resultIndex);







