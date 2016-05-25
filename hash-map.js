var SinglyLinkedList = require('./singly-linked-list.js');

/* Initialize an array of SinglyLinkedLists of length */
var HashMap = function(length){
  this.h_array = []
  for( var i = 0; i < length; i++ ) {
    this.h_array.push( new SinglyLinkedList() );
  }
}

HashMap.prototype = {

  /*
    Method: print
    Display entire hashMap structure to console.
  */
  print: function(data) {
    this.h_array.forEach( function(el, index){
      console.log("\nPosition " +index + " :");
      el.print();
    });
  },

  toHash: function(key, arr_length) {
    arr_length = arr_length | 13;
    return key
      .split('').map(function (letter){
        return letter.charCodeAt();
      })
      .reduce(function(prev, curr) {
        return prev + curr;
      }) % arr_length;
  },

  put: function(key, value) {
    var arr_pos = this.toHash(key);
    this.h_array[arr_pos].prepend(key, value);
  },

  get: function(key) {
    var arr_pos = this.toHash(key);
    return this.h_array[arr_pos].find(key);
  },

  remove: function(key) {
    var arr_pos = this.toHash(key);
    return this.h_array[arr_pos].delete(key);
  },

  keySet: function() {
    return this.h_array
      .map(function (el) {
        return el.list('k');
      })
      .filter(function (el2) {
        return el2 != undefined;
      })
      .reduce(function (pre, cur) {
        return pre.concat(cur);
      }, []);
  },

  values: function() {
    return this.h_array
      .map(function(el) {
        return el.list('v');
      })
      .filter(function (el2) {
        return el2 != undefined
      })
      .reduce(function (pre, cur) {
        return pre.concat(cur);
      }, []);
  }
}


// export for driver
module.exports = HashMap;