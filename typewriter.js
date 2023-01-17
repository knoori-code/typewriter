const sentence = "This sentence will display with a 50ms delay\n";

let timer = 0
for (const char of sentence) {
  
  setTimeout(() => {
    process.stdout.write(char);
  }, timer += 50)  

}