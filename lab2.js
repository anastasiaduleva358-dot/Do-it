function printArray(array){
   
    if (!Array.isArray(array)){
        throw new Error("It's not array!");
    }

    for (let i = 0; i < array.length; i++){
        console.log(`Element: ${i}: value ${array[i]}`);
    }
    
}


function printArray1(array){
   
    if (!Array.isArray(array)){
        throw new Error("It's not array!");
    }

    for (let i = 0; i < array.length; i++){
        console.log(`${i}:  ${array[i]}`);
    }
    
}


function forEach(array, callback){
    if (!Array.isArray(array)){
        throw new Error("Eirst argument must be an array!");
    }

    if (typeof callback !== "function"){
        throw new Error("Second argument must be a function!");
    } 

    for (let i = 0; i < array.length; i++){
        callback(array[i], i, array);
    }
}

function map(array, callback){
    if (!Array.isArray(array)){
        throw new Error("Eirst argument must be an array!");
    }

    if (typeof callback !== "function"){
        throw new Error("Second argument must be a function!");
    } 

    const result = [];

    for (let i = 0; i < array.length; i++){
        result.push(callback(array[i], i, array));
    }
    return result;
}

function filter(array, callback){
   if (!Array.isArray(array)){
        throw new Error("Eirst argument must be an array!");
    }

    if (typeof callback !== "function"){
        throw new Error("Second argument must be a function!");
    } 

    const result = [];

    for (let i = 0; i < array.length; i++){
        
        if (callback(array[i], i, array)){
            result.push(array[i]);
            
        } 
    }
    return result;
}

function find(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError("Первый аргумент должен быть массивом");
    }
    if (typeof callback !== "function") {
        throw new TypeError("Второй аргумент должен быть функцией");
    }

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }

    return undefined;
}

const numbers = [1, 2, 3, 4, 5];
const firstEven = find(numbers, (element) => element % 2 === 0);
console.log(firstEven); 

function some(array, callback){
    if (!Array.isArray(array)){
        throw new Error("Eirst argument must be an array!");
    }

    if (typeof callback !== "function"){
        throw new Error("Second argument must be a function!");
    } 

    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)){
            return true;
        } 
    }
        return false;

}

function every(array, callback){
    if (!Array.isArray(array)){
        throw new Error("Eirst argument must be an array!");
    }

    if (typeof callback !== "function"){
        throw new Error("Second argument must be a function!");
    } 

    for (let i = 0; i < array.length; i++){
        
        if (!callback(array[i], i, array)){
            return false;
        } 
    }
      return true;  

}

