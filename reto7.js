// No entendi este reto me lo tuve que robar

function drawGift(size, symbol) {
  if (size == 1) return "#\n";

  const r = [];
  const b = "#".repeat(size);
  const b2 = "#" + symbol.repeat(size - 2) + "#";

  const fn = (i = 0) => {
    const x = (i ? b2 : b) + b2.slice(size - i);
    r.push(x.padStart(size * 2 - 1));
    i < size - 2 ? fn(i + 1) : r.push(b + b2.slice(1));
    r.push(x);
  };

  fn();

  return r.join("\n") + "\n";
}

console.log(drawGift(4, "+"));

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, "*"));
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, "^"));
/*
#
*/
