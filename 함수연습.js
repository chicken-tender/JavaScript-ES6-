const userInfo = (name, age, job) => {
  return console.log(`이름 : ${name}\n나이 : ${age}\n직업 : ${job}`);
}
userInfo("김하림", 33, "경찰");

const harim = {
  name: "김하림",
  age: 33,
  job: "police"
};

const userInfo2 = obj => obj.job;
console.log(userInfo2(harim));

// Thank you Eille ~ 🔥

const fruits = ['🍊', '🍉', '🍋', '🍎'];
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));