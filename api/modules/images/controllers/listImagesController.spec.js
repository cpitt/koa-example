const rewire = require('rewire');
const sinon = require('sinon');

describe('listImagesController', () => {
  it('set ctx.body', async () => {
    const mockFiles = ['1.png', '2.png'];
    const mockListFiles = sinon.stub();
    mockListFiles.resolves(mockFiles);

    const createImageController = rewire('./listImagesController.js');
    createImageController.__set__('listFiles', mockListFiles);

    const ctrl = createImageController('/');
    const ctx = {};

    await ctrl(ctx);

    expect(ctx.body).to.eql({ count: mockFiles.length, files: mockFiles });
  });
});
