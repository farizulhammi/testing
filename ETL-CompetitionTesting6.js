const arr = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20];
const middle = arr.length / 2;
const total = arr.length - 1;
for (let i = 0; i < 5; i++) {
    console.log(`${arr[i]} -> ${arr[(middle - 1) - i]} -> ${arr[i]}`)
}
let a = 0;
for (let i = total; i > total - 5; i--) {
    console.log(`${arr[(total - middle + 1)]} -> ${arr[i]} -> ${arr[middle - 1 - a]}`)
    a++
}
