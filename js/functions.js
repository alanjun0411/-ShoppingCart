function jsonData(key, arr) {
    // arr = arr || [];
    if (arr) {
        return localStorage.setItem(key, JSON.stringify(arr));
    } else {
        return JSON.parse(localStorage.getItem(key));
    }
}
// function ADDcounter(add, callback, styles) {
//     let num = $(add).val();
//     num++;
//     callback(num);
// }
// function reduceCounter(reduce, callback) {
//     let num = $(reduce).val();
//     num--;
//     callback(num);
//     return num;
// }
function counter(element, styles, callback) {
    let num = $(element).val();
    styles ? num++ : num--;
    $(element).val(num);
    console.log(callback);
    console.log(Boolean(callback));
    
    if(callback) {
        console.log(num);
        callback(num);
        console.log(num);
    };
    console.log(num);
    return num;
}