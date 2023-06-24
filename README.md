# Eye - Sentiment Analysis Framework

Introducing Eye: A Cutting-Edge Sentiment Analysis Framework

Eye is a groundbreaking sentiment analysis framework that brings a new level of insight and understanding to textual data. Developed with a focus on accuracy and efficiency, Eye offers three powerful functions that enable comprehensive sentiment analysis: negativity percentage detection, positivity percentage detection, and overall sentiment evaluation.

With Eye, discerning the sentiment of a sentence has never been easier. The framework's advanced algorithms meticulously analyze the linguistic cues and context within a sentence, accurately determining the level of negativity present. Additionally, Eye effortlessly detects the positivity percentage, providing a holistic view of the sentiment expressed.

What sets Eye apart is its ability to deliver a comprehensive assessment of overall negativity and positivity. By leveraging sophisticated data modeling techniques, Eye combines the results from both the negativity and positivity analyses, providing a nuanced understanding of the sentiment at hand.

Eye's exceptional precision and versatility make it an invaluable tool for a wide range of applications. From social media sentiment analysis to customer feedback evaluation, Eye empowers businesses, researchers, and developers to gain actionable insights from textual data.

Whether you're looking to analyze public sentiment, gauge customer satisfaction, or understand the emotional tone of a text, Eye is your go-to framework. Embrace Eye and unlock a whole new world of sentiment analysis possibilities.

**To install, run**:

```bash
npm install eyepkg
```

**To use Eye in your code**:

```javascript
var analyze = require('eyepkg').analyze;
var negative = require('eyepkg').negative;
var positive = require('eyepkg').positive;

analyze('What the hell');
negative('I am sick of this');
positive('I am so happy');
```

**You can also run the tests**:

```bash
make test
```

**Todo**:

- Make more functions

- Make framework for more languages
