async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async function() {
  console.log('Start');
  await sleep(2000);
  console.log('End');
})();
