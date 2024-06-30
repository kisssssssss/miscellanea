let a = [1, 3, 2, 5, 8, 9, 7, 6, 13, 10, 4, 14];

function BogoSort(a) {
  function sort(array) {
    for (let i = 0; i < array.length; i++) {
      const randomIndex = Math.floor(Math.random() * array.length);
      const temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }
  }

  function isSorted(array) {
    let lastItem = array[0];
    for (const item of array) {
      if (item < lastItem) {
        return false;
      }
      lastItem = item;
    } 
    return true;
  }

  let count = 1;
  while (!isSorted(a)) {
    sort(a);
    count++;
  }
  return count;
}

let time = new Date().getTime();
console.log(BogoSort(a));
console.log("排序耗时：", new Date().getTime() - time, "ms");
