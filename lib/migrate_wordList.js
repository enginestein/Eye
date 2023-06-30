var fs = require('fs');

var neg5 = require('../wordLists/neglist.js').neg5,
    neg4 = require('../wordLists/neglist.js').neg4,
    neg3 = require('../wordLists/neglist.js').neg3,
    neg2 = require('../wordLists/neglist.js').neg2,
    neg1 = require('../wordLists/neglist.js').neg1,
    pos5 = require('../wordLists/poslist.js').pos5,
    pos4 = require('../wordLists/poslist.js').pos4,
    pos3 = require('../wordLists/poslist.js').pos3,
    pos2 = require('../wordLists/poslist.js').pos2,
    pos1 = require('../wordLists/poslist.js').pos1;

var hap5 = require('../wordLists/haplist.js').hap5,
    hap4 = require('../wordLists/haplist.js').hap4,
    hap3 = require('../wordLists/haplist.js').hap3,
    hap2 = require('../wordLists/haplist.js').hap2,
    hap1 = require('../wordLists/haplist.js').hap1,
    sad5 = require('../wordLists/sadlist.js').sad5,
    sad4 = require('../wordLists/sadlist.js').sad4,
    sad3 = require('../wordLists/sadlist.js').sad3,
    sad2 = require('../wordLists/sadlist.js').sad2,
    sad1 = require('../wordLists/sadlist.js').sad1;


var afinn = require('../wordLists/afinn.json');

var result = {};
hap1.forEach(function(t) {
    if (!(t in afinn)) {
      result[t] = 1;
    } else {
      console.log('Already exist:', t, afinn[t], 1);
    }
  });
  
  hap2.forEach(function(t) {
    if (!(t in afinn)) {
      result[t] = 2;
    } else {
      console.log('Already exist:', t, afinn[t], 2);
    }
  });
  
  hap3.forEach(function(t) {
    if (!(t in afinn)) {
      result[t] = 3;
    } else {
      console.log('Already exist:', t, afinn[t], 3);
    }
  });
  
  hap4.forEach(function(t) {
    if (!(t in afinn)) {
      result[t] = 4;
    } else {
      console.log('Already exist:', t, afinn[t], 4);
    }
  });
  
  hap5.forEach(function(t) {
    if (!(t in afinn)) {
      result[t] = 5;
    } else {
      console.log('Already exist:', t, afinn[t], 5);
    }
  });
  
  sad1.forEach(function(t) {
    if (!(t in afinn)) {
      result[t] = -1;
    } else {
      console.log('Already exist:', t, afinn[t], -1);
    }
  });
  
  sad2.forEach(function(t) {
    if (!(t in afinn)) {
      result[t] = -2;
    } else {
      console.log('Already exist:', t, afinn[t], -2);
    }
  });
  
  sad3.forEach(function(t) {
    if (!(t in afinn)) {
      result[t] = -3;
    } else {
      console.log('Already exist:', t, afinn[t], -3);
    }
  });
  
  sad4.forEach(function(t) {
    if (!(t in afinn)) {
      result[t] = -4;
    } else {
      console.log('Already exist:', t, afinn[t], -4);
    }
  });
  
  sad5.forEach(function(t) {
    if (!(t in afinn)) {
      result[t] = -5;
    } else {
      console.log('Already exist:', t, afinn[t], -5);
    }
  });
  
neg5.forEach(function(t) { if (!(t in afinn)) { result[t] = -5; } else { console.log('Already exist: ', t, afinn[t], -5); } });
neg4.forEach(function(t) { if (!(t in afinn)) { result[t] = -4; } else { console.log('Already exist: ', t, afinn[t], -4); } });
neg3.forEach(function(t) { if (!(t in afinn)) { result[t] = -3; } else { console.log('Already exist: ', t, afinn[t], -3); } });
neg2.forEach(function(t) { if (!(t in afinn)) { result[t] = -2; } else { console.log('Already exist: ', t, afinn[t], -2); } });
neg1.forEach(function(t) { if (!(t in afinn)) { result[t] = -1; } else { console.log('Already exist: ', t, afinn[t], -1); } });
pos1.forEach(function(t) { if (!(t in afinn)) { result[t] = 1; } else { console.log('Already exist: ', t, afinn[t], 1); } });
pos2.forEach(function(t) { if (!(t in afinn)) { result[t] = 2; } else { console.log('Already exist: ', t, afinn[t], 2); } });
pos3.forEach(function(t) { if (!(t in afinn)) { result[t] = 3; } else { console.log('Already exist: ', t, afinn[t], 3); } });
pos4.forEach(function(t) { if (!(t in afinn)) { result[t] = 4; } else { console.log('Already exist: ', t, afinn[t], 4); } });
pos5.forEach(function(t) { if (!(t in afinn)) { result[t] = 5; } else { console.log('Already exist: ', t, afinn[t], 5); } });

console.log(JSON.stringify(result));

Object.assign(afinn, result);

fs.writeFile('wordLists/afinn.json', JSON.stringify(afinn), function (err) {
    if (err) {
	console.log('Error: ', err);
    }
});
