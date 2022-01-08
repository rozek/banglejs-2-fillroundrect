  g.setBgColor('#000000');
  g.clear(false);

  require('https://raw.githubusercontent.com/rozek/banglejs-2-fillroundrect/main/fillRoundRect.js');

  g.setColor('#FF0000');
  g.fillRoundRect(20,30, 80,120, 10);

  g.setColor('#0000FF');
  g.fillRoundRect(50,140, 130,60, 100);

  g.setColor('#00FF00');
  g.fillRoundRect(160,50, 70,80, 20);
