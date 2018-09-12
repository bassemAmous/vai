const mongoose = require('mongoose');

const { Schema } = mongoose;

// create a schema
const nLexicSchema = new Schema({
  nonLexic: [String],
});

// the schema is useless so far
// we need to create a model using it
const NLexic = mongoose.model('NLexic', nLexicSchema);

// make this available to our users in our Node applications
module.exports = NLexic;
