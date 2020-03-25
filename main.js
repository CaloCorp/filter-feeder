/******************
 * YOUR CODE HERE *
 ******************/

const isOdd =function(num){

  return (num % 2 !==0)
}

const onlyOdds = function(num){

  return num.filter(isOdd)
}

const isEven = function (num){

  return (num % 2 === 0)
}

const onlyEvens = function(num){

  return num.filter(isEven)
}

const isShort = function(string)
{

  if (string.length < 7){
    return true
  }
else {
  return false
}
}
const shortNamesOnly= function (string){

  return string.filter(isShort)
}
const isDName = function (string){

if (string.startsWith('D')){
  return true
}
else {
  return false
} 
}

const dNames =function (names){

  return names.filter(isDName)
}
 
const isTriStateArea=function(strings){

 return (strings.endsWith('NJ') || strings.endsWith('NY') || strings.endsWith('CT'))

}

const triStateAreaOnly= function(strings){

  return strings.filter(isTriStateArea)
}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof isOdd === 'undefined') {
  isOdd = undefined;
}

if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof isEven === 'undefined') {
  isEven = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof isShort === 'undefined') {
  isShort = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof isDName === 'undefined') {
  isDName = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}

if (typeof containsLowercase === 'undefined') {
  containsLowercase = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof isTriStateArea === 'undefined') {
  isTriStateArea = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}


module.exports = {
  isOdd,
  onlyOdds,
  isEven,
  onlyEvens,
  isShort,
  shortNamesOnly,
  isDName,
  dNames,
  containsLowercase,
  removeTrolls,
  isTriStateArea,
  triStateAreaOnly,
}
