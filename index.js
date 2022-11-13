/* 

В игре в гольф каждая лунка имеет par, то есть, среднее число strokes ожидается, что игрок в гольф сделает так, 
чтобы погрузить мяч в лунку, чтобы завершить игру. В зависимости от того, насколько высоко или ниже par strokes у вас есть, 
есть данное прозвище.

*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
if(strokes == 1) {
  return names[0];
}else  if(strokes <= par - 2) {
  return names[1];
}else  if(strokes == par - 1) {
  return names[2];
}else  if(strokes == par) {
  return names[3];
}else  if(strokes == par + 1) {
  return names[4];
}else  if(strokes == par + 2) {
  return names[5];
}else  if(strokes >= par + 3) {
  return names[6];
}

  return "Change Me";
}

golfScore(5, 4);