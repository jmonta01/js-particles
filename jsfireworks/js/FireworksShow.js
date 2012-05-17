(function(window){

    FireworksShow.edgeBounce = -1;
    FireworksShow.gravity = .2;
    FireworksShow.airDrag = .98;

    var particles=[], numParticles;

    function FireworksShow(stage, width, height){
        FireworksShow.stage = stage;
        FireworksShow.width = width;
        FireworksShow.height = height;
        this.init();
    }

    FireworksShow.prototype.init = function(){
        clear();
        this.generate(50);
    }

    FireworksShow.prototype.generate = function(count){
        particles = [];
        this.numParticles = count;
        var particle;
        var baseHeight = FireworksShow.height-50;
        for(var i=0; i<this.numParticles; i++){
            particle = new Firework(Math.random()*FireworksShow.width, (Math.random()*50)+baseHeight, Math.random()*5);
            particles.push(particle)
        }
    }

    FireworksShow.prototype.shoot = function(){
        for(var j=0; j<this.numParticles; j++){
            particles[j].addImpulse(Math.random() * 20 - 10, Math.random()*-20)
        }
    }


    function clear (){
        particles = [];
    }

    FireworksShow.prototype.update = function(){
        for(var j=0; j<this.numParticles; j++){
            particles[j].update(FireworksShow.gravity);
            particles[j].draw(FireworksShow.stage)
        }
    }

    window.FireworksShow = FireworksShow;
}(window));