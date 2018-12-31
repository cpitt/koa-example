const rewire = require('rewire');
const sinon = require('sinon');

describe('getImageController', () => {
  it('should call send middleware with correct args', async () => {
    const createCtrl = rewire('./getImageController.js');

    const sendStub = sinon.stub();
    createCtrl.__set__('send', sendStub);

    const path = './test';

    const ctrl = createCtrl(path);

    const ctx = { params: { imageName: '1.jpg' } };
    await ctrl(ctx);

    expect(
      sendStub.calledWith(ctx, ctx.params.imageName, { root: path }),
    ).to.eq(true);
  });
});
