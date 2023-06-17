var afinn = require('../wordLists/afinn.json');

var tokenizeWithNoPunctuation = function (phrase) {
  var noPunctuation = phrase.replace(/[^a-zA-Zа-яА-Я ]+/g, ' ').replace('/ {2,}/',' ');
  return noPunctuation.toLowerCase().split(" ");
};

function negative(phrase) {
  var addPush = function(t, score){
    hits -= score;
    words.push(t);
  };
    
  var tokens = tokenizeWithNoPunctuation(phrase),
      hits   = 0,
      words  = [];

  tokens.forEach(function(t) {
    if (afinn.hasOwnProperty(t)) {
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

function positive(phrase) {
  var addPush = function(t, score){
    hits += score;
    words.push(t);
  };

  var tokens = tokenizeWithNoPunctuation(phrase),
      hits   = 0,
      words  = [];

  tokens.forEach(function(t) {
    if (afinn.hasOwnProperty(t)) {
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

function analyze(phrase) {

  var pos = positive(phrase),
      neg = negative(phrase);

  return {
    score       : pos.score - neg.score,
    comparative : pos.comparative - neg.comparative,
    positive    : pos,
    negative    : neg
  };
}


module.exports = {
  analyze    : analyze,
  negative : negative,
  positive : positive
};