// // задание 1

for (let i = 0; i <= 10; i++) {
if (i === 0) {
    console.log(`${i} - это ноль`);
} else if (i % 2 === 1) {
    console.log(`${i} - нечетное число`);
} else {
    console.log(`${i} - четное число`);
    }
}

//  задание 2 

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// задание 3 

const arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.round(Math.random() * 10));
}
console.log(arr);
console.log(arr.map(price => price ** 2));

// // задание 4 

const oneArr = [];
for (let i = 0; i < 5; i++) {
    oneArr.push(Math.round(Math.random() * 10));
}
console.log(oneArr);
console.log(oneArr.filter (element => (element !== 3)));
console.log(oneArr.map(sum => sum + sum * 10/100));

// задание 5 

for (let i = 0; i < 9; i++) {
    console.log(i);
}

// необязательное задание  

for (let i = 0; i < 20; i++) {
    console.log('x'.repeat(i));
}
