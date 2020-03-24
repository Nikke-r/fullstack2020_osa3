require('dotenv').config();
const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to DB!');
  })
  .catch(error => {
    console.log('DB Error: ', error.message);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true
  },
  number: {
    type: String,
    minlength: 8,
    required: true,
  },
});

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
personSchema.plugin(validator);

module.exports = mongoose.model('Person', personSchema);
