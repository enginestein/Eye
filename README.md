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

# Supported languages

Eye supports multiple languages which are:

- en - English
- pt - Portuguese
- pt-BR - Portuguese (Brazil)
- af - Afrikaans
- sq - Albanian
- am - Amharic
- ar - Arabic
- hy - Armenian
- az - Azerbaijani
- eu - Basque
- be - Belarusian
- bn - Bengali
- bs - Bosnian
- bg - Bulgarian
- ca - Catalan
- ceb - Cebuano
- ny - Chichewa
- zh-CN - Chinese (Simplified)
- zh-TW - Chinese (Traditional)
- co - Corsican
- hr - Croatian
- cs - Czech
- da - Danish
- nl - Dutch
- en - English
- eo - Esperanto
- et - Estonian
- tl - Filipino
- fi - Finnish
- fr - French
- fy - Frisian
- gl - Galician
- ka - Georgian
- de - German
- el - Greek
- gu - Gujarati
- ht - Haitian Creole
- ha - Hausa
- haw - Hawaiian
- iw - Hebrew
- hi - Hindi
- hmn - Hmong
- hu - Hungarian
- is - Icelandic
- ig - Igbo
- id - Indonesian
- ga - Irish
- it - Italian
- ja - Japanese
- jw - Javanese
- kn - Kannada
- kk - Kazakh
- km - Khmer
- rw - Kinyarwanda
- ko - Korean
- ku - Kurdish
- ky - Kyrgyz
- lo - Lao
- la - Latin
- lv - Latvian
- lt - Lithuanian
- lb - Luxembourgish
- mk - Macedonian
- mg - Malagasy
- ms - Malay
- ml - Malayalam
- mt - Maltese
- mi - Maori
- mr - Marathi
- mn - Mongolian
- my - Burmese
- ne - Nepali
- no - Norwegian
- or - Odia
- ps - Pashto
- fa - Persian
- pl - Polish
- pt - Portuguese
- pa - Punjabi
- ro - Romanian
- ru - Russian
- sm - Samoan
- gd - Scottish Gaelic
- sr - Serbian
- st - Sesotho
- sn - Shona
- sd - Sindhi
- si - Sinhala
- sk - Slovak
- sl - Slovenian
- so - Somali
- es - Spanish
- su - Sundanese
- sw - Swahili
- sv - Swedish
- tg - Tajik
- ta - Tamil
- tt - Tatar
- te - Telugu
- th - Thai
- tr - Turkish
- tk - Turkmen
- uk - Ukrainian
- ur - Urdu
- ug - Uyghur
- uz - Uzbek
- vi - Vietnamese
- cy - Welsh
- xh - Xhosa
- yi - Yiddish
- yo - Yoruba
- zu - Zulu
