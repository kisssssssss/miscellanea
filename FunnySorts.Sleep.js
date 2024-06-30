let a = [1, 3, 2, 5, 8, 9, 7, 6, 13, 10, 4, 14];

async function SleepSort(arr) {
  let res = [];
  async function sleep(time) {
    return new Promise((resolve) =>
      setTimeout(() => {
        res.push(time);
        resolve(time);
      }, time)
    );
  }

  let p = [];
  arr.forEach((item) => {
    p.push(sleep(item));
  });
  await Promise.all(p);

  return res;
}

let time = new Date().getTime();
SleepSort(a).then((res) => {
  console.log(res);

  console.log("排序耗时：", new Date().getTime() - time, "ms");
});
