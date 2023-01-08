function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw("Joe")
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  })
  .then(function () {
    return luckyDraw("Caroline");
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  })
  .then(function () {
    return luckyDraw("Sabrina");
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  });
