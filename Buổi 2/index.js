//
// const arrayA = [1, 2, 3, 4, 5,];
// console.log(arrayA);
// const arrayB = [6,7,8,9];
// console.log(arrayB);
// console.log(arrayA + arrayB);
// console.log(...arrayA);
// console.log(...arrayB);
// const arrayC = [...arrayA, ...arrayB];
// console.log(arrayC);
// cho 3 mảng 
const a = [2, 6, 8, 4]
const b = [3, 9, 110, 1]
const c = [0]
// làm ghép 3 mảng này thành 1 array và xếp từ nhỏ đến lớn
const array = [...a, ...b, ...c]
console.log(array);


let dem = 0;


// for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[j] < array[i]) {
//             dem = array[i];
//             array[i] = array[j];
//             array[j] = dem;
//         }
//     }
// }
// console.log(array);


//sort arrays
const sortFake = (a, b) => b - a;
console.log(array.sort(sortFake));


//
const objA = {
    name: "Cường",
    age: 24
}
const objB = {
    name: "Cường 2",
    addres: "107A NPS"
}
const objC = {
    addres: "37 TQH"
}
console.log({ ...objA, ...objB, ...objC });
// 
const data2 = {
    name: "cường",
    price: [1, 2, 3, 4, 5],
    product: [
        {
            name: "product 1",
            price: 2
        },
        {
            name: "product 2",
            price: 4
        }
    ],
    category: [
        {
            id: 1,
            name: "Áo"
        },
        {
            id: 2,
            name: "Quần"
        }
    ]
}
console.log(data2.product);
//lấy key làm biến 
const { product } = data2
console.log(product);

console.log("name", data2.product[0].name);

const { category } = data2
console.log(category[0].name);
