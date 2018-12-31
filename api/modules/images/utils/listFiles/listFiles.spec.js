const rewire = require('rewire');
const sinon = require('sinon')

describe('listFiles', () => {
  const listFiles = rewire('./listFiles');


  describe('#_filterHidden', () => {
    const filterHidden = listFiles.__get__('filterHidden');
    it('filter out hidden files', () => {
      expect(['.hidden1', '.hidden2', 'test.txt', 'test.jpg'].filter(filterHidden).length).to.equal(2)
    });
  });

  describe('#_filterPermittedExtensions', () => {
    const filterPermittedExtensions = listFiles.__get__('filterPermittedExtensions');
    const permittedExtensions = ['.png', '.jpg']
    const files = ['test.jpg', 'test.png', 'test.txt']
    const expectedFiles = ['test.jpg', 'test.png']
    it('should return only matching files', () => {
      expect(filterPermittedExtensions(files, permittedExtensions )).to.eql(expectedFiles)
    })
  });

  describe('#listFiles', () => {
    const readdir = sinon.stub()
    listFiles.__set__('fs', { readdir })
    it('should return rejected promise if error', async () => {
      readdir.yields(new Error('Oh No'))
      try {
        await listFiles('/')
      } catch (e) {
        expect(e).to.be.instanceOf(Error)
      }
    })
    it('should return list of files', async () => {
      const files = ['file1', 'file2']
      readdir.yields(undefined, files)
      expect( await listFiles('/')).to.eql(files)
    })
  });

});
