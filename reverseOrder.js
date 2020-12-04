function reverseOrder(sentence) {
    let words = sentence && sentence.split(' ')     // Get words from sentence string in order 

    words.reverse();                                        // Reverse word order 

    let newSentence = words && words.join(' ');            // Concatenating all words to get a new sentence
    return newSentence;
}
console.log(reverseOrder('Mary  had a little lamb')); // run using => node reverseOrder.js