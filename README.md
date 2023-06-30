# Eye - Sentiment Analysis Framework

**To install, run**:

```bash
npm install eyepkg
```

**To use Eye in your code**:

```javascript
var analyze = require('./lib/eye').analyze;
var negative = require('./lib/eye').negative;
var positive = require('./lib/eye').positive;
var happiness = require('./lib/eye').happiness;
var sadness = require('./lib/eye').sadness;

console.log(happiness('What the hell'));
console.log(sadness('What the hell'));
console.log(negative('I am sick of this'));
console.log(positive('I am so happy'));
console.log(analyze('What the hell'));
```

**You can also run the tests**:

```bash
make test
```

**Todo**:

- Make more functions

- Make framework for more languages

- Creating a data visualizer in R 
