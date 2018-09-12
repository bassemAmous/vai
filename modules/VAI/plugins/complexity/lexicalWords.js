const promiseB = require('bluebird');
const _ = require('lodash');

/**
 * convert to table.
 * @param {String} text to convert to a table
 * @return {Array} returns array without multiple spaces ...
 */

const convertToTable = function convertTotable(text) {
  const words = text.replace(/  +/g, ' ');
  return words.split(' ');
};


/**
 * round to 2 like the example.
 * @param {number} number to round
 * @return {number} returns number with 2 nums after comma ...
 */
function roundTwoDecimal(num) {
  return Math.round(num * 10000) / 10000;
}


/**
 * count lexical dencity.
 * @param {Array} array of words
 * @param {Array} database appendix of nonlexical
 * @return {number} overall ...
 */
const countLexicalWords = async function countLexicalWords(words, appendix) {
  console.log(words);
  let count = 0;
  await promiseB.map(words, (word) => {
    if (!_.includes(appendix, word.toLowerCase())) {
      console.log('aaaa', word);
      count += 1;
    }
  });
  return { overall_ld: roundTwoDecimal(count / words.length) };
};


/**
 * count lexical dencity verbose.
 * @param {Array} array of words
 * @param {Array} database appendix of nonlexical
 * @return {number} overall and sentence_Id ...
 */
const countLexicalWordsVerbose = async function countLexicalWordsVerbose(words, appendix) {
  console.log(words);
  let count = 0;
  let count2 = 0;
  const sentenceId = [];
  await promiseB.map(words, (word) => {
    if (!_.includes(appendix, word.toLowerCase())) {
      count += 1;
      count2 += 1;
    } else {
      const moy = count2 / words.length;
      if (moy) {
        sentenceId.push(roundTwoDecimal(moy));
      }
      count2 = 0;
    }
  });
  if (!_.includes(appendix, words[words.length - 1].toLowerCase())) {
    sentenceId.push(roundTwoDecimal(count2 / words.length));
  }

  return { overall_Id: roundTwoDecimal(count / words.length), sentence_Id: sentenceId };
};

module.exports = {
  convertToTable,
  countLexicalWords,
  countLexicalWordsVerbose
};
