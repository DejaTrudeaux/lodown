'use strict';

// YOU KNOW WHAT TO DO //
/**
 * identity: Designed to take any argument, and return it, unchanged.
 * 
 * @param {Any} anything: Any single argument
 * 
 * @return {Any}: The same argument is returned unchanged
 * 
 *          USAGE:
 *          identity(85);
 *          // returns 85, the same number //
 */
var identity = function(anything){
    return anything;
};
module.exports.identity = identity;


/**
 * typeof: Designed to check the type of the argument, and return its type ("string", 
 * "array", "object", "undefined", "number", "boolean", "null", or "function").
 * 
 * @param {Any} anything: Any data type of value that we will determine its type
 * 
 * @return {string}: A string that describes the type of value that was passed 
 * into the function
 * 
 *          USAGE:
 *      
 *          typeOf(9); 
 *          // returns 'number' //
 */ 
var typeOf = (anything) => {
    if (typeof anything === 'string') return 'string';
    if (Array.isArray(anything)) return 'array';
    if (anything === undefined) return 'undefined';
    if (typeof anything === 'number') return 'number';
    if (typeof anything === 'boolean') return 'boolean';
    if (anything === null) return 'null';
    if (typeof anything === 'function') return 'function';
    if (typeof anything === 'object') return 'object';
};
module.exports.typeOf = typeOf;


/**
 * first: Designed to determine if an array is an array, and if it is not, return 
 * an empty array. If it is an array, if the number is not given or is not a number, 
 * the first element of the array will be returned. Otherwise, the function will
 * return the first array elements of however many the number parameter is.
 * 
 * @param {Array} array: An array 
 * @param {Number} number: Number that will determine the amount of array items we will
 * return
 * 
 * @return {Array}: Will return an empty array if the first
 * argument passed is not an array. Will return the first item of the array of the array 
 * if the "number" argument is not a number or if the number is not given. If a number is 
 * given, an array of the first items in the array pertaining to the input number.
 * 
 *          USAGE:
 * 
 *          first([1, 2, 3, 4], 3;
 *          // returns [1, 2, 3], the first 3 elements of the array
 * 
 *          first([1, 2, 3, 4], 'donkey');
 *          // returns 1, the first element of the array
 * 
 *          first(donkey, 3);
 *          // returns [] because donkey is not an array 
 * 
 */ 
var first = (array, number) => {
    //if array is not an array 
    if (Array.isArray(array) === false || number < 0){
        //return []
        return [];
    }
    //if number is not given or not a number
    else if (typeof number !== 'number'){
    //return just the first element in array
        return array[0];
    }    
    //otherwise, return the first <number> items of <array>
    else {
        return array.slice(0, number);
    }
};
module.exports.first = first;


/**
 * last: Designed to determine if an array is an array, and if it is not, return 
 * an empty array. If it is an array, if the number is not given or not a number, 
 * the last element of the array will be returned. Otherwise, the function will
 * return the last array elements of however many the number parameter is.
 * 
 * @param {Array} array: An array 
 * @param {Number} number: Number that will determine the amount of array items we will
 * return
 * 
 * @return {Array}: Will return an empty array if the first
 * argument passed is not an array. Will return the last item of the array of the array 
 * if the "number" argument is not a number or if the number is not given. If a number is 
 * given, the return is an array of the last items in the array pertaining to the input number.
 * 
 *          USAGE:
 * 
 *          last([1, 2, 3, 4], 3;
 *          // returns [2, 3, 4], the last 3 elements of the array
 * 
 *          first([1, 2, 3, 4], 'donkey');
 *          // returns 4, the last element of the array
 * 
 *          first(monkey, 3);
 *          // returns [] because monkey is not an array 
 */ 
var last = (array, number) => {
    if (Array.isArray(array) === false || number < 0){
        //return []
        return [];
    }
    //if number is not given or not a number
    else if (typeof number !== 'number'){
    //return just the first element in array
        return array[array.length-1];
    }    
    //otherwise, return the first <number> items of <array>
    else {
        return array.slice(-number);
    }
};
module.exports.last = last;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * If collection is an array, the function will be applied 
 * to each element in the array, its index, and the entire collection. If the 
 * collection is an object, the function will be applied to its keys, values, and 
 * the whole collection itself.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * @return {nothing}: There is no return statement, therefore this one 
 * will returned undefined.
 * 
 *          USAGE:
 *          each([1, 2, 3], console.log);
 *          // will print 1 (first element), 0 (index number), & [1, 2, 3] (whole 
 *          // collection) and will do this for each element in the array, but only
 *          // because we are using console.log. If we used another function, we
 *          // would have no return.
 */
var each = (collection, action) => {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
};
module.exports.each = each;


/**
 * indexOf: Designed to loop through an array and return the index number of value
 * if it appears in the array. If it doesn't appear in the array, the function will
 * return -1. 
 * 
 * @param {Array} array: The array is what we will loop through to try to find value.
 * @param {Number} value: The value is what we are looking for in the array, and once we find 
 * it we will return the index number of its first iteration in the array.
 * 
 * @return {Number}: either the index number if the value appears in the array, or
 * - 1 if the value does not appear in the array
 * 
 *          USAGE: 
 * 
 *          indexOf([1, 2, 3], 2)
 *          // returns 1, the correct index number
 * 
 *          indexOf(['carmen sandiego', 'the chapstick', 'my mind'], 'waldo')
 *          // returns -1, waldo doesn't appear in the array
 */
var indexOf = (array, value) => {
    //return the index of array that is the first occurence of value
    for (var i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }    
   return -1; 
};
module.exports.indexOf = indexOf;


/**
 * filter: Designed to loop through an array and test each element (the element, 
 * its index number, and the whole array) with a function, 
 * returning a new array with each element that when tested returned true.
 * 
 * @param {Array} array: This array will be looped through and its items tested with a function
 * @param {Function} action: This is a function to test each element of the array
 * 
 * @return {Array}: The new array will be created and filled with each element, 
 * index number, and whole array that is passed to the function.
 * 
 *          USAGE: 
 *          filter([1, 2, 3, 4, 5], function(x){return x%2 === 0})
 *          // returns [2, 4], the two numbers in the array that are divisible
 *          // by two
 */
var filter = (array, action) => {
    var newArray = [];
    // loop through array
    for (var i = 0; i < array.length; i++){
    //for each element in array pass the arguments: element, index, and array
    //if calling function returned true
        if (action(array[i], i, array) === true){
    //return a new array of elements
            newArray.push(array[i]);
        }
    }
    return newArray;
};
module.exports.filter = filter;


/**
 * reject: Designed to call function for each element in an array, and return a new
 * array containing values for which calling the function returned false.
 * 
 * @param {Array} array: This array's elements, index numbers, and the array itself will be
 * looped through and called with the function
 * @param {Function} action: For all values which calling the function returned false, we
 * will create a new array with those values
 * 
 * @return {Array}: The new array which will be created with whatever elements returned
 * false when passed into the function
 * 
 *          USAGE: 
 *          reject([1, 2, 3, 4, 5], function(x){return x%2 === 0});
 *          // returns [1, 3, 5], the numbers that are not divisible by two
 */
 var reject = (array, action) => {
    var newArray = filter(array, function(element, index, array){
        if (action(element, index, array) === false){
            return true;
        }
    });
    return newArray;
};
module.exports.reject = reject;


/**
 * partition: Designed to loop through an array, passing arguments to the function and
 * push the values that return true to the first array nested within our array, and the 
 * values that return false are pushed to the second array nested within our array.
 * 
 * @param {Array} array: array for which we will pass each element, its index number, and 
 * the array itself to a function
 * @param {Function} action: we will pass all aspects of the array through the function and 
 * for those that return truthy when passed, we will put into one sub-array of our array, 
 * and the other array for those that return falsy.
 * 
 * @return {Array}: An array with two sub-arrays: one sub-array for true values 
 * when passed through the function, and one for false values.
 * 
 *          USAGE:
 * 
 *          partition([1, 2, 3, 4, 5, 6], function(x){return x%3 === 0});
 *          // returns [[3, 6][1, 2, 4, 5]]
 */ 
var partition = (array, action) => {
    var myArray = [[], []];
    for (var i = 0; i < array.length; i++){
        if (action(array[i], i, array === true)){
            myArray[0].push(array[i]);
        }
        else {
            myArray[1].push(array[i]);
        }
    }
    return myArray;
};
module.exports.partition = partition;


/**
 * unique: Designed to loop through an array with duplicates and return a new array 
 * without duplicates.
 * 
 * @param {Array} array: an array with duplicates
 * 
 * @return {Array}: a new array without duplicates
 * 
 *          USAGE:
 * 
 *          unique([1, 2, 3, 3, 3, 4, 5);
 *          // returns [1, 2, 3, 4, 5];
 */
var unique = (array) => {
  var myArray = [];
      for (var i = 0; i < array.length; i++){
          if (indexOf(myArray, array[i]) === -1){
          myArray.push(array[i]);
      }
  }
  return myArray;
}; 
module.exports.unique = unique;


/**
 * map: Designed to pass each element in collection to a function, and save the return
 * value in a new array, returning the new array.
 * 
 * @param {Array | Object} collection: An array or an object. For an array, pass its element, index, and
 * the array itself. For an object, pass its key, value, and the object itself.
 * @param {Function} action: The function we will pass our array or object to
 * 
 * @return {Array}: This array has the return values of our collection passed through
 * our function.
 * 
 *          USAGE:
 * 
 *          map([1, 2, 3, 4], function(e){return e+3})
 *          // returns [4, 5, 6, 7], we added 3 to each element of the array
 * 
 */ 
var map = (collection, action) => {
    var newArray = [];
    each(collection, function(element, index, collection){
        newArray.push(action(element, index, collection));
    });
    return newArray;
};
module.exports.map = map;


/**
 * pluck: Designed to loop through an array of objects and return an array with
 * the value of every element in array that has the key of property. 
 * 
 * @param {Array} array: An array of objects
 * @param {String} property: This is a key of a value that we will be pushing into an 
 * array.
 * 
 * @return {Array}: An array of values of whatever the property is as the parameter
 * 
 *          USAGE:
 *          
 *          pluck([{1: 'a' 2: 'b'}, {1: 'c', 2: 'd'}], 2)
 *          // returns ['b', 'd']
 */ 
var pluck = (array, property) => {
    var newArray = [];
    map(array, function(element, index, collection){
        newArray.push(element[property]);
    });
    return newArray;
};
module.exports.pluck = pluck;


/**
 * contains: Designed to take an array and a value, and return true if the
 * array contains the value, and false otherwise.
 * 
 * @param {Array} array: an array of values
 * @param {Number} value: a value
 * 
 * @return {Boolean}: True if the array contains the value, and
 * false otherwise.
 * 
 *          USAGE:
 *          contains(['a', 'b', 'c'], 'c');
 *          // returns true
 */ 
 
var contains = (array, value) => {
    return (indexOf(array, value) > -1 ? true : false);
};
module.exports.contains = contains;


 /**
 * every: Designed to take a collection and a function, and return true if
 * every argument is true when called as a function argument, and false if 
 * even one of the elements of the collection is false when called as the function
 * argument. If a function is not provided, returns true when every element of 
 * the collection is truthy, and false if any element is false.
 * 
 * @param {Array | Object} collection: An array or object
 * @param {Function} action: A function to test each element of the array or object
 * 
 * @return {Boolean}: true if each element is true when passed as an argument, and false
 * if even one element is false when passed as an argument
 * 
 *          USAGE:
 *          every(['a', 'b', 'c'], function(e){return typeof e === 'string'});
 *          returns true;
 *          every(['a', 'b', 5], function(e){return typeof e === 'string'});
 *          returns false;
 */ 
 var every = (collection, action) => {
  if (action === undefined){
    var myArr = [];
    each(collection, function(element, index, collection){
        myArr.push( element);
    });
        for (let i = 0; i < myArr.length; i++){
            if (myArr[i] === false){
                return false;
            }
        }
        return true;
    }
  var newArr = map(collection, function(element, index, array){
      return (action(element, index, array) === true ? true : false);
    });
   return (contains(newArr, false) ? false : true);
};
 module.exports.every = every;
 
 
 /**
 * some: Designed to take a collection and a function, and return false if
 * every argument is false when called as a function argument, and true if 
 * even one of the elements of the collection is true when called as the function
 * argument. If a function is not provided, returns false when every element of 
 * the collection is falsy, and true if any element is true.
 * 
 * @param {Array | Object} collection: An array or object
 * @param {Function} action: A function to test each element of the array or object
 * 
 * @return {Boolean}: false if each element is false when passed as an argument, and true
 * if even one element is true when passed as an argument
 * 
 *          USAGE:
 *          some(['a', 'b', 'c'], function(e){return typeof e === 'number'});
 *          // returns false; //
 *          some(['a', 'b', 5], function(e){return typeof e === 'number'});
 *          // returns true; //
 */ 
 var some = (collection, action) => {
  if (action === undefined){
    for (var i = 0; i < collection.length; i++){
      if (collection[i] === false){
        return false;
      }
    }
      return true;
    }
  var newArr = map(collection, function(element, index, array){
      if (action(element, index, array) === true){
        return true;
      }
      else {
        return false;
      }
    });
   return (contains(newArr, true) ? true : false);
};
module.exports.some = some;
 
 
 /**
 * reduce: Designed to take an array, a function and a seed. If no seed is given,
 * the first element of the array will be used as seed. On each iteration, we 
 * use seed as "previous result", and test the function on the values of the array,
 * testing the previous sum, current value, and current index, and on the last 
 * iteration, returning the value after final iteration of the function.
 * 
 * @param {Array} array: an array of values
 * @param {Function} action: a function to test the values
 * @param {Number} seed: used as previous result on the first iteration of our function,
 * but if no seed is given we use the first element of the array as our seed.
 * 
 * @return {Number}: the value of the final iteration of the return
 * 
 *          USAGE:
 *          reduce([5, 6, 7], function(previousSum, currentValue, currentIndex){return previousSum - currentValue}, 15);
 *          // returns -3 //
 */
 var reduce = (array, action, seed) => {
  //if no seed was given
  if (seed === undefined){
      //use the first element/value of <collection> as <seed>
      seed = array[0];      
      //call function for every element in collection passing previous result, element, and index
    for (let i = 1; i < array.length; i++){
        seed = action(seed, array[i], i);
    }
  }
    // use the return value of function as previous result for the next iteration
    else {
      for (let i = 0; i < array.length; i++){
        seed = action(seed, array[i], i);
        }
    }
    return seed;
};
module.exports.reduce = reduce;
 
 
 /**
 * extend: Designed to take an object and some unknown number of more objects 
 * and copy properties from second object and possibly more objects to the first
 * object, also updating properties that already appear in object1.
 * 
 * @param {Object} object1: an object
 * @param {Object} object2: an unknown number of objects
 * 
 * @return {Object} object1: object1 should be updated with the properties of all the 
 * other objects listed as parameters.
 * 
 *          USAGE:
 *          extend({1: 'a', 2: 'b', 3: 'c'}, {3: 'd', 4: 'e'});
 *          // returns {1: 'a', 2: 'b', 3: 'd', 4: 'e'};
 * 
 */
 var extend = function (object1, object2){
    var myArr = Array.from(arguments);
    for (var i = 0; i < myArr.length; i++){
      Object.assign(object1, myArr[i]);
    }
  return object1;
};
module.exports.extend = extend;