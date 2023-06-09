var myMark = 500;
switch (true) {

  case myMark >= 80 && myMark <= 100:
    document.write(`A+`);
    break;

  case myMark >= 70 && myMark < 100:
    document.write(`A`);
    break;

  case myMark >= 60 && myMark < 70:
    document.write(`A-`);
    break;

  case myMark >= 50 && myMark < 60:
    document.write(`B`);
    break;

  case myMark >= 40 && myMark < 50:
    document.write(`C`);
      break;
   
  case myMark >= 33 && myMark < 40:
    document.write(`D`);
    break;

  default:
    document.write(`Fail`);
}


