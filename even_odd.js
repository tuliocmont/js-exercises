showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    i % 2 === 0 ? console.log(`${i} EVEN`) : console.log(`${i} ODD`);
  }
}
