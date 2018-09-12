const NLexic = require('../../model/NLexic');

const mongoose = require('mongoose');
const conf = require('../config/conf');

/**
 * find NLexics .
 * @return {Array} returns Arrays of non lexic ...
 */

const findNLexic = async function findNLexic() {
  return new Promise(async (resolve) => {
    mongoose.connect(conf.mongoUrl + conf.mongoLexicalUrl, async () => {
      NLexic.findOne({ }, async (err2, document) => {
        resolve(document.nonLexic);
      });
    });
  });
};


/**
 * insert NLexics.
 * @return {Boolean} returns true if success false if not ...
 */

const insertNLexic = async function insertNLexic() {
  return new Promise(async (resolve, reject) => {
    mongoose.connect(conf.mongoUrl + conf.mongoLexicalUrl, async (err) => {
      if (err) { console.log(err); }
      const nLexic = new NLexic({
        nonLexic: [
          'do', 'got', 'is', 'have', 'and', 'although', 'or', 'that', 'when', 'while', 'a', 'either',
          'more', 'much', 'neither', 'my', 'that', 'the', 'as', 'no', 'nor', 'not',
          'at', 'between', 'in', 'of', 'without', 'I', 'you', 'he', 'she', 'it', 'we', 'they', 'anybody', 'one', 'to'
        ]
      });
      nLexic.save((err2) => {
        if (err2) { reject(err2); }
        console.log(err2);
        console.log('nLexic created!');
        resolve(true);
      });
    });
  });
};
module.exports = { findNLexic, insertNLexic };
