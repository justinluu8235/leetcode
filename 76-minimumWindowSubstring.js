let minWindow = function (s, t) {
    //build map of the substring letters
    let subMap = new Map();
    //build map with substring
    for (let i = 0; i < t.length; i++) {
        if (subMap.get(t[i]) == undefined) {
            subMap.set(t[i], 1);
        }
        else {
            subMap.set(t[i], subMap.get(t[i]) + 1);
        }
    }

    console.log(subMap);

    let left = 0;
    let right = 0;
    let have = 0;
    let need = subMap.size;
    let result = Number.MAX_VALUE;
    let resultArr = [-1, -1];
    let stringMap = new Map();

    while (right < s.length) {
        let letter = s[right];
        //add to string map 
        if (stringMap.get(letter) == undefined) {
            stringMap.set(letter, 1);
        }
        else {
            stringMap.set(letter, stringMap.get(letter) + 1);
        }

        //if for this letter, it hits the same number as the substring, then increse have criteria by one
        if (subMap.has(letter) && subMap.get(letter) == stringMap.get(letter)) {
            have++;
        }

        //once the window has all the substring, try to decrease window
        while (have == need) {
            if ((right - left + 1) < result) {
                resultArr[0] = left;
                resultArr[1] = right;
                result = right - left + 1;
            }
            //remove the left from map and increment left
            let leftLetter = s[left];
            stringMap.set(leftLetter, stringMap.get(leftLetter) - 1);
            if (subMap.has(leftLetter) && stringMap.get(leftLetter) < subMap.get(leftLetter)) {
                have--;
            }
            left++;
        }
        right++;

    }

    return s.substring(resultArr[0], resultArr[1]+1);



};



let s = "ADOBECODEBANC";
let t = "ABC";

console.log(minWindow(s, t));