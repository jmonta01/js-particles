(function(window){

    function Firework(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        var seed = Math.random();

        if(FireworksShow.monochromeSpark === false){
            if(seed <= .2){
                this.spark = FireworksShow.white_spark;
            }else if(seed > .2 && seed <= .4){
                this.spark = FireworksShow.red_spark;
            }else if(seed > .4 && seed <= .6){
                this.spark = FireworksShow.yellow_spark;
            }else if(seed > .6 && seed <= .8){
                this.spark = FireworksShow.orange_spark;
            }else if(seed > .8 && seed <= 1){
                this.spark = FireworksShow.blue_spark;
            }
        }else{
            this.spark = FireworksShow.white_spark;
        }
    }

    Firework.prototype.addImpulse = function(x_force, y_force){
        this.vx = x_force;
        this.vy = y_force;
    }

    Firework.prototype.update = function(gravity, useBoundaries){
       this.x += this.vx;
       this.y += this.vy;

        if(useBoundaries === true){
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
        }

        this.vx *= FireworksShow.airDrag;
        this.vy += FireworksShow.gravity;
        this.vy *= FireworksShow.airDrag;
    }


    Firework.prototype.draw = function(stage){
        stage.drawImage(this.spark, this.x, this.y, this.radius, this.radius)
    }


    window.Firework = Firework;
}(window));