const myEach = (collection, callback) => {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) callback(collection[i]);
    } else if (typeof collection === 'object') {
      for (const key in collection) callback(collection[key]);
    }
    return collection;
  };
  
  /*********************************************************/
  
  const myMap = (collection, callback) => {
    if (Array.isArray(collection)) {
      const newArray = [];
      for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i], i));
      }
      return newArray;
    } else if (typeof collection === 'object') {
      const newArray = [];
      for (const key in collection) {
        newArray.push(callback(collection[key], key));
      }
      return newArray;
    }
  };
  
  /*********************************************************/
  function myReduce(collection, callback, initialValue) {
    let accumulator =
      initialValue !== undefined ? initialValue : Object.values(collection)[0];
    const values = Object.values(collection);
  
    for (let i = initialValue !== undefined ? 0 : 1; i < values.length; i++) {
      accumulator = callback(accumulator, values[i], i, collection);
    }
  
    return accumulator;
  }
  
  /***************************************************************/
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return collection[i];
        }
      }
    }
    return undefined;
  }
  
  /*****************************************************/
  function myFilter(collection, predicate) {
    const filteredArray = [];
  
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        filteredArray.push(collection[i]);
      }
    }
  
    return filteredArray;
  }
  
  /*****************************************************************/
  function mySize(collection) {
    if (Array.isArray(collection) || typeof collection === 'string') {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    } else {
      return 0;
    }
  }
  
  /*******************************************************/
  
  function myFirst(array, n = 1) {
    if (!Array.isArray(array) || n <= 0) {
      return [];
    }
    if (n === 1) {
      return array[0];
    }
    return array.slice(0, n);
  }
  
  /*******************************************************/
  function myLast(array, n = 1) {
    if (!Array.isArray(array) || n <= 0) {
      return [];
    }
  
    const lastIndex = array.length - 1;
  
    if (n === 1) {
      return array[lastIndex];
    }
  
    return array.slice(Math.max(0, lastIndex - n + 1));
  }
  
  /*******************************************************/
  
  function myKeys(object) {
    if (typeof object !== 'object' || object === null) {
      return [];
    }
  
    return Object.keys(object);
  }
  
  /********************************* */
  
  function myValues(object) {
    if (typeof object !== 'object' || object === null) {
      return [];
    }
  
    return Object.values(object);
  }