/**
 * @param {string} s
 * @return {number}
 */

const isUnique = s => {
  const mySet = new Set();
  mySet.has(s.charAt(i));
  for (let i = 0; i < s.length; i++) {
    if (mySet.has(s.charAt(i))) {
      return false;
    }
    mySet.add(s.charAt(i));
  }
  return true;
};

var handler = {
  get: function(target, name) {
    return target.hasOwnProperty(name) ? target[name] : 0;
  }
};
var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) {
    return 1;
  }

  var longest1 = 0;
  var longest2 = 0;
  var dictionary = new Proxy({}, handler);

  for (let i = 0; i < s.length; i++) {
    dictionary[s.charAt(i)] += 1;
    if (dictionary[s.charAt(i)] > 1) {
      if (Object.keys(dictionary).length > longest1) {
        longest1 = Object.keys(dictionary).length;
      }
      dictionary = new Proxy({}, handler);
      dictionary[s.charAt(i)] += 1;
    } else if (Object.keys(dictionary).length > longest1) {
      longest1 = Object.keys(dictionary).length;
    }
    console.log("iteration: ", i, "Value: ", dictionary);
  } // end of for loop

  for (let i = s.length - 1; i >= 0; i++) {
    dictionary[s.charAt(i)] += 1;
    if (dictionary[s.charAt(i)] > 1) {
      if (Object.keys(dictionary).length > longest1) {
        longest1 = Object.keys(dictionary).length;
      }
      dictionary = new Proxy({}, handler);
      dictionary[s.charAt(i)] += 1;
    } else if (Object.keys(dictionary).length > longest1) {
      longest1 = Object.keys(dictionary).length;
    }
    console.log("iteration: ", i, "Value: ", dictionary);
  } // end of for loop
};
