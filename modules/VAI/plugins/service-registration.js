const complexity = require('./complexity/lexicalWords');
const nLexic = require('./NLexic/NLexic');

exports.services = function allFunctionAsServices() {
// complexitys
  this.add({ role: 'complexity', cmd: 'convertTotable' }, async (msg, done) => {
    try {
      const token = await complexity.convertToTable(msg.text);
      done(null, { answer: token });
    } catch (err) {
      done(null, { error: err });
      console.log(err);
    }
  });
  this.add({ role: 'complexity', cmd: 'countLexicalWords' }, async (msg, done) => {
    try {
      const token = await complexity.countLexicalWords(msg.text, msg.appendix);
      done(null, { answer: token });
    } catch (err) {
      done(null, { error: err });
      console.log(err);
    }
  });

  this.add({ role: 'complexity', cmd: 'countLexicalWordsVerbose' }, async (msg, done) => {
    try {
      const token = await complexity.countLexicalWordsVerbose(msg.text, msg.appendix);
      done(null, { answer: token });
    } catch (err) {
      done(null, { error: err });
      console.log(err);
    }
  });

  this.add({ role: 'nlexic', cmd: 'insert' }, async (msg, done) => {
    try {
      const token = await nLexic.insertNLexic();
      done(null, { answer: token });
    } catch (err) {
      done(null, { error: err });
      console.log(err);
    }
  });
  this.add({ role: 'nlexic', cmd: 'find' }, async (msg, done) => {
    try {
      const token = await nLexic.findNLexic();
      done(null, { answer: token });
    } catch (err) {
      done(null, { error: err });
      console.log(err);
    }
  });
};
