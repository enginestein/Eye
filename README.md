# Eye - Sentiment Analysis Framework

#To install, run:

```bash
npm install eyepkg
```

#To use Eye in your code:

```javascript
var analyze = require('eyepkg').analyze;
var negative = require('eyepkg').negative;
var positive = require('eyepkg').positive;

analyze('What the hell');
negative('I am sick of this');
positive('I am so happy');
```

#You can also run the tests:

```bash
make test
```

#Todo:

- Make more functions

- Make framework for more languages

- Creating a data visualizer in R 
