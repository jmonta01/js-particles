(function(window){

    function Firework(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.red = 255;
        this.green = 255;
        this.blue = 255;
    }

    Firework.prototype.addImpulse = function(x_force, y_force){
        this.vx = x_force;
        this.vy = y_force;
    }

    Firework.prototype.update = function(gravity){
       this.x += this.vx;
       this.y += this.vy;


        if(this.x > FireworksShow.width-this.radius){
            this.x = FireworksShow.width-this.radius;
            this.vx *= FireworksShow.edgeBounce;
        }else if(this.x < 0+this.radius){
            this.x = 0+this.radius;
            this.vx *= FireworksShow.edgeBounce;
        }

        if(this.y > FireworksShow.height-this.radius){
            this.y = FireworksShow.height-this.radius;
            this.vy *= FireworksShow.edgeBounce;
        }else if(this.y < 0+this.radius){
            this.y = 0+this.radius;
            this.vy *= FireworksShow.edgeBounce;
        }

        this.vx *= FireworksShow.airDrag;
        this.vy += FireworksShow.gravity;
        this.vy *= FireworksShow.airDrag;


        var xM = ((FireworksShow.width - this.x)/FireworksShow.width)*20;
        var yM = ((FireworksShow.height - this.y)/FireworksShow.height)*5;

        this.red = Math.max(25, Math.floor(255*xM*yM));
        this.green = Math.max(25, Math.floor(255*yM));
        this.blue = Math.max(25, Math.floor(255*yM));

        color = "rgb("+this.red+", "+this.green+", "+this.blue+")";
        console.log(color)
    }


    Firework.prototype.draw = function(stage){
        stage.beginPath();
        stage.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        stage.closePath();
        stage.fillStyle = color;
        stage.fill();
    }


    window.Firework = Firework;
}(window));