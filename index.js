// Code your solutions in this file

function writeCards(names, event){
  for (let i = 0; i < names.length; i++){
  names[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
}
  return names;
}

countDown = 11;
while ( countDown > 1 ){
  console.log(countDown--);
}


