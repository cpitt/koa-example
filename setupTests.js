/* eslint-disable import/no-extraneous-dependencies */
const chai = require('chai');
const dirtyChai = require('dirty-chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(dirtyChai);
chai.use(chaiAsPromised);

global.expect = chai.expect;
