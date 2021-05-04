const animationLetters = ['|', '/', '-', '\\', '|', '/', '-', '\\']
let time = 100;
for (const letter of animationLetters) {
  setTimeout(() => {
    process.stdout.write(`\r${letter}   `);
  }, time);
  time += 200;
}
