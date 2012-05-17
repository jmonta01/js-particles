(function(window){

    Particle.gravity = -9.87;
    Particle.life = 5;

    function Particle(x, y, radius){
        this.x = x;
        this.vx = .25;
        this.y = y;
        this.vy = -.25;
        this.radius = radius;
    }

    Particle.prototype.update = function(){
        this.x += this.vx;
        this.y += this.vy;
    }

    Particle.prototype.draw = function(stage, context){
        stage.beginPath();
        stage.arc(context.x, context.y, context.radius, 0, Math.PI*2, false);
        stage.closePath();
        stage.fillStyle = "#FFFFFF";
        stage.fill();

    }


    window.Particle = Particle;
}(window));
