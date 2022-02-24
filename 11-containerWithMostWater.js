/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let max = 0;
    //distance, area, smallerHeight

    for(let left =0; left<height.length; left++){
        for(let right = height.length - 1; right > left ; right --){
            //if best case for area based on distance doesn't work, stop shrinking the window
            if(height[left] * (right - left) < max){
                break;
            }

            let lowerHeight = Math.min(height[left], height[right]);
            let distance = right - left;
            let area = lowerHeight * distance;
            max = Math.max(area, max);
        }



    }
    return max;

};


let height = [1,8,6,2,5,4,8,3,7];

console.log(maxArea(height));