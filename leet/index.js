/**
 * @param {string} s
 * @return {number}
 */

const isUnique = s => {
  let mySet = new Set();
  for (let i = 0; i < s.length; i++) {
    if (mySet.has(s.charAt(i))) {
      return false;
    }
    mySet.add(s.charAt(i));
  }
  return true;
};

var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) {
    return 1;
  }
  let answer = 0;
  for (let i = 0, j = 0; i <= s.length; i++) {
    let sub = s.substring(j, i);
    if (isUnique(sub)) {
      if (sub.length > answer) {
        answer = sub.length;
      }
    } else {
      while (!isUnique(sub)) {
        j++;
        sub = s.substring(j, i);
      }
    }
  }
  return answer;
};
