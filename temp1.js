let words = ['hello', 'world'];
words.forEach((word, i)=> {
    word[i] = word[i].split('');
})

console.log(words);