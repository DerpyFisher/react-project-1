/**
 * Shuffle question and their answer up.
 * @param {[]} questionList The list to shuffle up.
 * @example
 * var arr = [2, 11, 37, 42]; shuffle(arr); console.log(arr);
 * @author Derpy Fisher
 * @returns  the question list that has been shuffled up.
 * @version 1.0.0.0
 */
export function shuffle(questionList) {
    let currentIndex = questionList.length;
    let randomIndex = 0;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [questionList[currentIndex], questionList[randomIndex]] = [questionList[randomIndex], questionList[currentIndex]];
  }
  return questionList;
}

