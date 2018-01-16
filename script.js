//Task One//
const firstLine = "qwertyuiop[]";
const secondLine = "asdfghjkl;'";
const thirdLine = "zxcvbnm,./";
//Task Two//
const firstLineAmount = firstLine.length;
const secondLineAmount = secondLine.length;
const thirdLineAmount = thirdLine.length;
//Task Three//
console.log(firstLine.charAt (0), firstLine.charAt(firstLine.length-1));
console.log(secondLine.charAt (0), secondLine.charAt(secondLine.length-1));
console.log(thirdLine.charAt (0), thirdLine.charAt(thirdLine.length-1));
//Task Four//
const firstPos = firstLine.indexOf ("[");
console.log (firstPos);
const secondPos = firstLine.indexOf ("]");
console.log (secondPos);
//Task Five//
const keyboard = firstLine + "is" + firstLineAmount +"  " + secondLine + "is" +secondLineAmount + "   " + thirdLine + "is" +thirdLineAmount;
console.log (keyboard);
