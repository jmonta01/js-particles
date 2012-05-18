(function(window){

    FireworksShow.edgeBounce = -1;
    FireworksShow.gravity = .2;
    FireworksShow.airDrag = .98;

    FireworksShow.white_spark = new Image();
    FireworksShow.white_spark.src = "images/white_spark.png";

    FireworksShow.red_spark = new Image();
    FireworksShow.red_spark.src = "images/red_spark.png";

    FireworksShow.yellow_spark = new Image();
    FireworksShow.yellow_spark.src = "images/yellow_spark.png";

    FireworksShow.orange_spark = new Image();
    FireworksShow.orange_spark.src = "images/orange_spark.png";

    FireworksShow.blue_spark = new Image();
    FireworksShow.blue_spark.src = "images/blue_spark.png";

    FireworksShow.monochromeSpark = false;

    var particles=[], numParticles;

    function FireworksShow(stage, width, height){
        FireworksShow.stage = stage;
        FireworksShow.width = width;
        FireworksShow.height = height;
        this.init();
    }

    FireworksShow.prototype.init = function(){
        //init fireworks show
    }

    FireworksShow.prototype.generate = function(count, x, y, isMonochrome){
        particles = [];
        this.numParticles = count;
        FireworksShow.monochromeSpark = isMonochrome;
        var particle;
        for(var i=0; i<this.numParticles; i++){
            particle = new Firework(x, y, Math.random()*5);
            particles.push(particle)
        }
    }

    FireworksShow.prototype.shoot = function(){
        for(var j=0; j<this.numParticles; j++){
            particles[j].addImpulse(Math.random() * 20 - 10, Math.random() * 20 - 15);
        }
    }


    FireworksShow.prototype.update = function(useBoundaries){
        for(var j=0; j<this.numParticles; j++){
            particles[j].update(FireworksShow.gravity, useBoundaries);
            particles[j].draw(FireworksShow.stage)
        }
    }


    window.FireworksShow = FireworksShow;
}(window));