/**
 * @param {string} s
 * @return {number}
 * lengthOfLongestSubstring
 */

// correct solution

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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * medium of sorted array
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let medium = 0;
  let merged_array = [];
  let max =
    nums1[nums1.length - 1] > nums2[nums2.length - 1]
      ? nums1[nums1.length - 1]
      : nums2[nums2.length - 1];
  for (let i = 0; i <= max; i++) {
    if (nums1.includes(i) || nums2.includes(i)) {
      merged_array.push(i);
    }
  } // end of first for loop
  for (
    let i = 0, j = merged_array.length - 1;
    i < merged_array.length;
    i++, j--
  ) {
    if (j === i) {
      medium = merged_array[i];
      break;
    }

    if (i > j) {
      medium = (merged_array[i] + merged_array[j]) / 2;
    }
  }
  return medium;
};

/* REVERSE OF INT 

check for overflow:
if (rev > INT_MAX/10 || (rev == INT_MAX / 10 && pop > 7)) return 0;
if (rev < INT_MIN/10 || (rev == INT_MIN / 10 && pop < -8)) return 0;


Explanation:
This is dependent on the value of INT_MAX.

Consider:

INT_MAX / 10 + INT_MAX % 10 = INT_MAX

because INT_MAX / 10 will take floor of the division.

So if rev == INT_MAX / 10, then pop must be > INT_MAX % 10 for rev + pop > INT_MAX

INT_MAX is 2147483647 and 2147483647 % 10 is 7.

*/

var reverse = function(x) {
  var reversed = 0;
  while (x != 0) {
    reversed *= 10;

    reversed += x % 10;

    x -= x % 10;

    x /= 10;
  }
  if (reversed > 2147483647 || reversed < -2147483648) {
    return 0;
  } else return reversed;
};
