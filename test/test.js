var should = require('should'),
    positivity = require('../lib/eye.js').positivity,
    negativity = require('../lib/eye.js').negativity,
    analyze = require('../lib/eye.js').analyze;


describe('Negativity', function () {
  describe('#negativeScore', function () {
    it('level 5 should return 5 points', function (done) {
      negativity("bastard").score.should.equal(5);
      done();
    });
    it('level 4 should return 4 points', function (done) {
      negativity("scumbag").score.should.equal(4);
      done();
    });
    it('level 3 should return 3 points', function (done) {
      negativity("evil").score.should.equal(3);
      done();
    });
    it('level 2 should return 2 points', function (done) {
      negativity("ache").score.should.equal(2);
      done();
    });
    it('level 1 should return 1 points', function (done) {
      negativity("anti").score.should.equal(1);
      done();
    });
  });
  describe('#negativeComparative', function () {
    it('should return score divided by word length', function (done) {
      negativity("Hey scumbag").comparative.should.equal(2);
      done();
    });
  });
  describe('#negativeWordCount', function () {
    it('should return the negative world count', function (done) {
      negativity("This is two anti evil words").words.length.should.equal(2);
      done();
    });
  });
  describe('#negativeComparative', function () {
    it('should properly handle punctuation', function (done) {
      negativity("I'll be here till 5").score.should.equal(0);
      done();
    });
  });
});


describe('Positivity', function () {
  describe('#positiveScore', function () {
    it('level 5 should return 5 points', function (done) {
      positivity("superb").score.should.equal(5);
      done();
    });
    it('level 4 should return 4 points', function (done) {
      positivity("amazing").score.should.equal(4);
      done();
    });
    it('level 3 should return 3 points', function (done) {
      positivity("admire").score.should.equal(3);
      done();
    });
    it('level 2 should return 2 points', function (done) {
      positivity("amaze").score.should.equal(2);
      done();
    });
    it('level 1 should return 1 points', function (done) {
      positivity("cool").score.should.equal(1);
      done();
    });
  });
  describe('#positiveComparative', function () {
    it('should return score divided by word length', function (done) {
      positivity("Hey amazing").comparative.should.equal(2);
      done();
    });
  });
  describe('#positiveWordCount', function () {
    it('should return the positive world count', function (done) {
      positivity("This is two amazing cool words").words.length.should.equal(2);
      done();
    });
  });
  describe('#positiveComparative', function () {
    it('should properly handle punctuation', function (done) {
      positivity("I'll be here till 5").score.should.equal(0);
      done();
    });
  });
});

describe('Analyze', function () {
  describe('#score', function () {
    it('should equal positivity - negativity', function (done) {
      analyze("Hey Amazing Scumbag").score.should.equal(0);
      done();
    });
    it('should be positive for only positives', function (done) {
      analyze("Cool beans").score.should.equal(1);
      done();
    });
    it('should be negative for only negatives', function (done) {
      analyze("Hey scumbag").score.should.equal(-4);
      done();
    });
    it('should ignore ending punctuation', function (done) {
      analyze("Fearless!").score.should.equal(2);
      analyze("Crash!").score.should.equal(-2);
      done();
    });
    it('should ignore hashtags', function (done) {
      analyze("#fearless").score.should.equal(2);
      analyze("#crash").score.should.equal(-2);
      done();
    });
  });
  describe('#comparative', function () {
    it('should equal (positive - negative) / word count ', function (done) {
      analyze("An amazing anti").comparative.should.equal(1);
      done();
    });
  });
  describe('Russian', function () {
    it('RU1', function(done) {
      analyze("Система автоопределения тональности явно недооценена").score.should.equal(-1);
      analyze("Система автоопределения тональности явно недооценена").comparative.should.equal(-0.2);
      done();
    });
  });
});
