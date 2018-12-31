const rewire = require('rewire');

describe('resizeImageController', () => {
  let ctrl;
  let ctx;
  let mockResponse;
  beforeEach(() => {
    ctrl = rewire('./resizeImageController.js');
    ctrl.__set__('fileExists', () => Promise.resolve(true));
    ctrl.__set__('resizeImage', () => Promise.resolve(mockResponse));
    ctx = {
      request: {
        body: {
          imageName: '1.jpg',
          resizeOptions: {
            width: 100,
            height: 100,
          },
        },
      },
    };

    mockResponse = {
      resizedImage: '1 - 4zL2hE3-w100-h100.jpg',
      format: 'jpeg',
      width: 100,
      height: 100,
      channels: 3,
      premultiplied: false,
      size: 2978,
    };
  });
  it('should throw error if imageName is ommitted', async () => {
    ctx.request.body.imageName = undefined;
    try {
      await ctrl(ctx);
    } catch (e) {
      expect(e.message).to.eq('request body must contain valid imageName');
    }
  });

  it('should throw error if image does not exist', async () => {
    ctrl.__set__('fileExists', () => Promise.resolve(false));
    try {
      await ctrl(ctx);
    } catch (e) {
      expect(e.message).to.eq(
        `${ctx.request.body.imageName} is not a valid original image`,
      );
    }
  });

  it('should throw error if imageName is ommitted', async () => {
    await ctrl(ctx);
    expect(ctx.body).to.eq(mockResponse);
  });
});
