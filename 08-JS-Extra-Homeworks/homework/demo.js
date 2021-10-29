var list = ["You", "are", "beautiful", "looking"];
list.sort(function(a, b){
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return a.length - b.length;
  });
console.log(list)




