let divide = (arr) => {
    if (arr.length < 2) return arr;
    var mid = Math.floor(arr.length / 2);
    var left = divide(arr.slice(0,mid));
    var right = divide(arr.slice(mid));

    left.reverse();
    return join(left, right);
}
let join = (left, right) => {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        result.push(left[0] < right[0] ? right.shift() : left.shift());
    }
    result = result.concat(left).concat(right);

    return result;
}
const arr = [4, 13, 8, 9, 7, 1];
arr.reverse();
console.log(divide(arr));
