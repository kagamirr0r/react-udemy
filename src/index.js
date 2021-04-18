// テンプレート文字列

// const name = "kagami";
// const age = 27;

// const messsage = `私の名前は${name}です。年齢は${age}です`;

// console.log(messsage);
// function func1(str) {
//   return str;
// }

// const func1 = (str) => {
//   return str;
// };

// const func1 = (str) => str;
// console.log(func1("func1です"));

// const func2 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func2(10, 20));

// const myProfile = {
//   name: "kagami",
//   age: 27
// };

// const message = `名前は${myProfile.name}です。年齢は${myProfile.ageです}`;

// console.log(message);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message2);

// const myProfile = ["kagami", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name},年齢は${age}`;
// console.log(message4);

// デフォルト値

// const sayHello = (name = "デフォルト") => {
//   console.log(`こんにちは！${name}さん`);
// };
// sayHello();

//スプレッド構文

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };

// sumFunc(arr1[0], arr1[1]);

// sumFunc(...arr1); // => 3

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;

// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//mapやfilterを使った処理
// const nameArr = ["田中", "山田", "じゃけえ"];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2)

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

//三項演算子

// const val1 = 1 > 0 ? true : false;
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "１００を超えています" : "許容範囲内です";
// };

// console.log(checkSum(90,100))

//論理演算子の本当の意味

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1か2はtrueになります");
// }

const num = 100;
const fee = num || "金額未設定です";
console.log(fee);
