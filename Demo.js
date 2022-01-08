  g.setBgColor('#000000');
  g.clear(false);

  require('https://raw.githubusercontent.com/rozek/banglejs-2-fillroundrect/main/fillRoundRect.js');

  g.setColor('#FF0000');
  g.fillRoundedRect(20,30, 80,120, 10);

  g.setColor('#0000FF');
  g.fillRoundedRect(50,140, 130,60, 100);

  g.setColor('#00FF00');
  g.fillRoundedRect(160,50, 70,80, 20);
