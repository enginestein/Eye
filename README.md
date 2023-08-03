# Eye - Sentiment Analysis Framework

Eye is an sentiment analysis library for JavaScript which has six different types of  sentiment analyizing functions including multiple language support. 

# Installation

Install Eye with npm:

```bash
npm install eyepkg
```

# Usage

Analyzing overall results:

```javascript
var analyze = require('./lib/eye').analyze;
console.log(analyze('What the hell'));
```

`analyze` returns `positive`, `negative`, `happiness`, `sadness` and `negative and positive score comparison`

Anaylzing positive score:

```javascript
var positive = require('./lib/eye').positive;
console.log(positive('I am so happy'));
```

Analyzing negative score:

```javascript
var negative = require('./lib/eye').negative;
console.log(negative('I am sick of this'));
```

Analyzing sadness score:

```javascript
var sadness = require('./lib/eye').sadness;
console.log(sadness('What the hell'));
```

Analyzing happiness score:

```javascript
var happiness = require('./lib/eye').happiness;
console.log(happiness('What the hell'));
```

# Run tests

Tests are linked with makefile, so you can directly run tests using:

```bash
make test
```
