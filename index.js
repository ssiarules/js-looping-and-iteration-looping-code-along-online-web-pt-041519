// Code your solutions in this file

function writeCards(names, event){
  for (let i = 0; i < names.length; i++){
  names[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
}
  return names;
}

countdown = 11;
while ( countdown > 0 ){
  console.log(countdown--);
}
