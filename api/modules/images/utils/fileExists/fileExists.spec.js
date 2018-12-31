const sinon = require('sinon');
const rewire = require('rewire');

describe('fileExists', () => {
  let fileExists = rewire('./fileExists');
  const accessStub = sinon.stub();
  const file = 'test.jpg';
  fileExists.__set__('fs', {access: accessStub})

  it('should resolve true if file exists', async () => {
    accessStub.yields(undefined);
    return expect(await fileExists(file)).to.equal(true);
  });
  it('should resolve false if file does not exist', async () =>
    {
      accessStub.yields(new Error('Oh No!'));
      expect(await fileExists(file)).to.equal(false)
    });
});
