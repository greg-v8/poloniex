try {
  var pjson = require('./package.json');
  var pjson = require('./trollbox.js');
  console.log('pass');
  process.exit(0);
} catch (e) {
  console.log('fail');
  console.log(e);
  process.exit(1);
}
