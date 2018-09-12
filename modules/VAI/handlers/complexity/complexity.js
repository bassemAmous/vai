const seneca = require('../../helpers');
// const Raven = require('../plugins/config/ravenConf'); // eslint-disable-line import/no-unresolved

exports.display = {
  handler: async (req) => {
    try {
      const inputs = req.payload;
      const {
        text
      } = inputs;
      const nlexic = await seneca.asyncAct({
        role: 'nlexic', cmd: 'find'
      });
      const convertTotable = await seneca.asyncAct({
        role: 'complexity',
        cmd: 'convertTotable',
        text
      });
      let lexicalDensity = null;
      if (req.query.mode !== 'verbose') {
        lexicalDensity = await seneca.asyncAct({
          role: 'complexity',
          cmd: 'countLexicalWords',
          text: convertTotable.answer,
          appendix: nlexic.answer
        });
      } else {
        lexicalDensity = await seneca.asyncAct({
          role: 'complexity',
          cmd: 'countLexicalWordsVerbose',
          text: convertTotable.answer,
          appendix: nlexic.answer
        });
      }
      if (!nlexic.answer) {
        await seneca.asyncAct({
          role: 'nlexic', cmd: 'insert'
        });
      }

      return {
        data: lexicalDensity.answer,
      };
    } catch (err) {
      console.log(err);
      return err;
    }
  }
};
