
/**
 * 
 * @param {[]} questionList The list to shuffle up.
 * @returns 
 */
export function shuffle(questionList) {
    let currentIndex = questionList.length;
    let randomIndex = 0;

  while (currentIndex > 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Thanks, internet strangers!
    [questionList[currentIndex], questionList[randomIndex]] = [
      questionList[randomIndex], questionList[currentIndex]];
  }

  return questionList;
}

// Used like so
var arr = [2, 11, 37, 42];
shuffle(arr);
console.log(arr);
