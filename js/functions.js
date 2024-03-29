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
    if(callback) callback(num);
    return num;
}

