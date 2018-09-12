const Hapi = require('hapi');

const Lab = require('lab');

const { expect } = require('code');

const lab = exports.lab = Lab.script();// eslint-disable-line no-multi-assign

const { it } = lab;
/* eslint-enable  import/no-extraneous-dependencies */
const input = require('./complexity.json');// eslint-disable-line import/no-unresolved

const routePlugin = require('../../index');

lab.test('complexity Route create', { timeout: 10000 }, async () => {
  async function start() {
    return new Promise(async (resolve, reject) => {
      const server = Hapi.server({
        host: 'localhost',
        port: '6000'
      });
      const options = {
        method: 'POST',
        url: 'localhost:9999/complexity?mode=verbose',
        payload: input
      };
      try {
        await server.start();
        await server.register(routePlugin);
        const result = await server.inject(options);
        resolve(JSON.parse(result.payload));
      } catch (err) {
        reject(err);
      }
    });
  }
  try {
    const result = await start();
    it('should contain answer', () => {
      expect(result).to.exist();
    });
    it('should contain data ', async () => {
      expect(result.data).to.exist();
    });
    it('should sentence_Id exits', async () => {
      expect(result.data.sentence_Id).to.exist();
    });

    it('should sentence_Id equals to ', async () => {
      expect(result.data.sentence_Id).to.equal([
        0.5714,
        0.1429
      ]);
    });
    it('should contain overall_ld', async () => {
      expect(result.data.overall_Id).to.exist();
    });
    it('should overall_ld equals to ', async () => {
      expect(result.data.overall_Id).to.equal(0.7143);
    });
  } catch (err) {
    console.log(err);
  }
});
