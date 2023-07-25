function Bundle(x, y, z) {

  this.x = x;
  this.y = y;
  this.z = z;
  this.s = 10;
  this.lifetime = 100;
  this.display = function() {
      for (var i = 0; i < total; i++) {
        var lat = map(i, 0, total, -HALF_PI, HALF_PI);
       for (var j = 0; j < total; j++) {
          var lon = map(j, 0, total, -PI, PI);
          var x = r * sin(lat)  /*cos(lat)*/;
          var y = r * sin(lat)  /*sin(lat)*/;
          var z = r * cos(lat);
          translate(this.x, this.y, this.z);
          box(this.s);
        }
      }
        this.update = function() {
          rotateY(-.04 * frameCount);
          rotateX(-.04 * frameCount);
          this.lifetime = this.lifetime - 1;
        }
      
  }
}