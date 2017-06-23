var path = require('path');
var tdmd = require('typedoc-markdown');

tdmd.genDocs(path.resolve('.'), 'https://github.com/int0h/promise-decorators/blob/master/docs/', path.resolve('./docs'));
console.log('done');