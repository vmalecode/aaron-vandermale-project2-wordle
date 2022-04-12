export default function gradeWord(answer,word) {
    let output = Array.apply(null, Array(answer.length)).map(function () {return "greyBox"})
    for(let i in word) {
        let letter = word[i];
        if(letter === answer[i]) {
            output[i] = 'greenBox';
        }
    }

    function getColorAnswerOccurrences(output, letter, word, color,idx) {
        let AnswerOccurrences = 0;
        for(let i=0;i<idx;i++) {
            if (output[i] === color && letter === word[i]) {
                AnswerOccurrences++;
            }
        }
        return AnswerOccurrences;
    }

    for( let i in word) {
        let letter = word[i];
        if(answer.includes(letter)) {
            let totalAnswerOccurrences = answer.split(letter).length - 1
            let greenAnswerOccurrences = getColorAnswerOccurrences(output,letter,word,'greenBox',word.length);
            let yellowAnswerOccurrences = getColorAnswerOccurrences(output,letter,word,'yellowBox',i);
            // (Greens + previousYellows) < wordOccurrencesSoFar
            if((((yellowAnswerOccurrences + greenAnswerOccurrences) < totalAnswerOccurrences)) && output[i] !== 'greenBox') {
                output[i] = 'yellowBox';
            }
        }
    }
    return output;
}
