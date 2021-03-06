;(function () {
  if (Graphics.prototype.fillRoundRect == null) {
    Graphics.prototype.fillRoundRect = function fillRoundRect (x1,y1, x2,y2, r) {
      let x,y;
      if (x1 > x2) { x = x1; x1 = x2; x2 = x; }
      if (y1 > y2) { y = y1; y1 = y2; y2 = y; }

      r = Math.min(r || 0, (x2-x1)/2, (y2-y1)/2);

      let cx1 = x1+r, cx2 = x2-r;
      let cy1 = y1+r, cy2 = y2-r;

      let gfx = this || g;

      gfx.fillRect(x1,cy1, x2,cy2);

      x = r; y = 0;

      let dx,dy, Error = 0;
      while (y <= x) {
        dy = 1 + 2*y; y++; Error -= dy;
        if (Error < 0) {
          dx = 1 - 2*x; x--; Error -= dx;
        }

        gfx.drawLine(cx1 - x, cy1 - y,  cx2 + x, cy1 - y);
        gfx.drawLine(cx1 - y, cy1 - x,  cx2 + y, cy1 - x);
        gfx.drawLine(cx1 - x, cy2 + y,  cx2 + x, cy2 + y);
        gfx.drawLine(cx1 - y, cy2 + x,  cx2 + y, cy2 + x);
      }

      return gfx;
    };
  }
})();
