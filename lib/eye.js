import afinn, { hasOwnProperty } from '../wordLists/afinn.json';
import { translate } from 'langbridge';
import LanguageDetect from 'langdetect';

const detector = new LanguageDetect();

var tokenizeWithNoPunctuation = function (phrase) {
  var noPunctuation = phrase.replace(/[^a-zA-Zа-яА-Я ]+/g, ' ').replace('/ {2,}/',' ');
  return noPunctuation.toLowerCase().split(" ");
};

function negative(phrase) {
  const detectedLanguages = detector.detect(phrase);
  const isNotEnglish = detectedLanguages.every(language => language[0] !== 'en');

  if (isNotEnglish) {
    const phr = translate(phrase, {to:"en"})
    var addPush = function(t, score){
      hits -= score;
      words.push(t);
    };
      
    var tokens = tokenizeWithNoPunctuation(phr),
        hits   = 0,
        words  = [];
  
    tokens.forEach(function(t) {
      if (hasOwnProperty(t)) {
        if (afinn[t] < 0){
          addPush(t, afinn[t]);
        }
      }
    });
  
    return {
      score       : hits,
      comparative : hits / tokens.length,
      words       : words
    };
  
  } else {
    var addPush = function(t, score){
      hits -= score;
      words.push(t);
    };
      
    var tokens = tokenizeWithNoPunctuation(phrase),
        hits   = 0,
        words  = [];
  
    tokens.forEach(function(t) {
      if (hasOwnProperty(t)) {
        if (afinn[t] < 0){
          addPush(t, afinn[t]);
        }
      }
    });
  
    return {
      score       : hits,
      comparative : hits / tokens.length,
      words       : words
    };
  }

}

function positive(phrase) {
  const detectedLanguages = detector.detect(phrase);
  const isNotEnglish = detectedLanguages.every(language => language[0] !== 'en');

  if (isNotEnglish) {
    const phr = translate(phrase, {to:"en"})
    var addPush = function(t, score){
      hits += score;
      words.push(t);
    };
  
    var tokens = tokenizeWithNoPunctuation(phr),
        hits   = 0,
        words  = [];
  
    tokens.forEach(function(t) {
      if (hasOwnProperty(t)) {
        if (afinn[t] > 0){
          addPush(t, afinn[t]);
        }
      }
    });
  
    return {
      score : hits,
      comparative : hits / tokens.length,
      words : words
    };
  } else {
    var addPush = function(t, score){
      hits += score;
      words.push(t);
    };
  
    var tokens = tokenizeWithNoPunctuation(phrase),
        hits   = 0,
        words  = [];
  
    tokens.forEach(function(t) {
      if (hasOwnProperty(t)) {
        if (afinn[t] > 0){
          addPush(t, afinn[t]);
        }
      }
    });
  
    return {
      score : hits,
      comparative : hits / tokens.length,
      words : words
    };
  }

  
}

// Version 1.2.0 functions

function happiness(phrase) {
  const detectedLanguages = detector.detect(phrase);
  const isNotEnglish = detectedLanguages.every(language => language[0] !== 'en');

  if (isNotEnglish) {
    const phr = translate(phrase, {to:"en"})
    var addPush = function(t, score) {
      hits += score;
      words.push(t);
    };
  
    var tokens = tokenizeWithNoPunctuation(phrase),
        hits = 0,
        words = [];
  
    tokens.forEach(function(t) {
      if (hasOwnProperty(t)) {
        if (afinn[t] > 0) {
          addPush(t, afinn[t]);
        }
      }
    });
  
    return {
      score: hits,
      comparative: hits / tokens.length,
      words: words
    };
  } else {
    var addPush = function(t, score) {
      hits += score;
      words.push(t);
    };
  
    var tokens = tokenizeWithNoPunctuation(phrase),
        hits = 0,
        words = [];
  
    tokens.forEach(function(t) {
      if (hasOwnProperty(t)) {
        if (afinn[t] > 0) {
          addPush(t, afinn[t]);
        }
      }
    });
  
    return {
      score: hits,
      comparative: hits / tokens.length,
      words: words
    };
  }

}

function sadness(phrase) {
  const detectedLanguages = detector.detect(phrase);
  const isNotEnglish = detectedLanguages.every(language => language[0] !== 'en');

  if (isNotEnglish) {
    const phr = translate(phrase, {to:"en"})
    var addPush = function(t, score) {
      hits -= score;
      words.push(t);
    };
  
    var tokens = tokenizeWithNoPunctuation(phr),
        hits = 0,
        words = [];
  
    tokens.forEach(function(t) {
      if (hasOwnProperty(t)) {
        if (afinn[t] < 0) {
          addPush(t, afinn[t]);
        }
      }
    });
  
    return {
      score: hits,
      comparative: hits / tokens.length,
      words: words
    };

  } else {
    var addPush = function(t, score) {
      hits -= score;
      words.push(t);
    };
  
    var tokens = tokenizeWithNoPunctuation(phrase),
        hits = 0,
        words = [];
  
    tokens.forEach(function(t) {
      if (hasOwnProperty(t)) {
        if (afinn[t] < 0) {
          addPush(t, afinn[t]);
        }
      }
    });
  
    return {
      score: hits,
      comparative: hits / tokens.length,
      words: words
    };
  }

  
}

function analyze(phrase) {
  const detectedLanguages = detector.detect(phrase);
  const isNotEnglish = detectedLanguages.every(language => language[0] !== 'en');

  if (isNotEnglish) {
    const phr = translate(phrase, {to:"en"})
    var pos = positive(phr),
      neg = negative(phr),
      hap = happiness(phr),
      sad = sadness(phr);

  return {
    score: pos.score - neg.score,
    comparative: pos.comparative - neg.comparative,
    positive: pos,
    negative: neg,
    happiness: hap,
    sadness: sad
  };
  }

  
}

export const analyze = analyze;
export const negative = negative;
export const positive = positive;
export const happiness = happiness;
export const sadness = sadness;