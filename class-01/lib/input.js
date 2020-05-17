// capturing the input args. (minimist) + Validate it -m , url is-url
const isUrl = require('is-url');
const minimist = require('minimist');

function Input() {
  // capturing the args
  const args = minimist(process.argv.slice(2)); // command line args
  this.method = this.getMethod(args.m);
  this.url = this.getUrl(args.u);
}

Input.prototype.getUrl = function(url = '') {
  return isUrl(url) ? url : undefined;
};

Input.prototype.getMethod = function(method = '') {
  let validMethods = /get|post|put|delete/i;
  return validMethods.test(method) ? method : 'GET';
};

module.exports = Input;
