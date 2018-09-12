

const seneca = require('seneca')(); // eslint-disable-line

const vaiServices = require('../plugins/service-registration');


// start seneca services
seneca.use(vaiServices.services);


// function to use seneca
exports.asyncAct = function asyncActCallForSeneca(pattern) {
  return new Promise((resolve, reject) => {
    seneca.act(pattern, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};
