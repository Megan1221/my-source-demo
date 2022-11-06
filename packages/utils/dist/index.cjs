'use strict';

function isObject(val) {
  return typeof val === "object" && val !== null;
}
function isOn(key) {
  return key[0] === "o" && key[1] === "n";
}

exports.isObject = isObject;
exports.isOn = isOn;
