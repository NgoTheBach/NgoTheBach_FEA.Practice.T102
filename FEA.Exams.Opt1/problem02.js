// const inputArray = [1, 2, 2, 1];
const inputArray = [1, 2, 2, 3, 1, 3, 1, 3];
const counter = {};
function checkEqualFrequency(inputArray) {
    inputArray.forEach(name => counter[name] ? counter[name]++ : counter[name] = 1);
    console.log(inputArray);
    const minCount = Math.min(...Object.values(counter)), maxCount = Math.max(...Object.values(counter));
    if (minCount == maxCount && Object.keys(counter).length == maxCount) return(true);
    else return(false);
}
console.log(checkEqualFrequency(inputArray))