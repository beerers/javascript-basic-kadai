const now = new Date();
console.log(now);

const year = now.getFullYear();
const month = now.getMonth() +1;
const day = now.getDate();

console.log(year + '年' + month + '月' + day + '日');