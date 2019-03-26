// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, punctuation, repeatTime) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    let count = 0

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp += theWordArray[i];
        count += 1
        let repeatCount = 0
        if (count === 3 ) {
            while (repeatCount !== repeatTime) {
                repeatCount += 1
                buildMeUp += punctuation;
            }
            count = 0;
        };
        buildMeUp += " ";

        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "?", 4)