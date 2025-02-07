var config = {
    type: Phaser.AUTO,   
    width: 1000,
    height: 800,

    scene:{
        preload:preload,
        create: create,
        update: update
    }
}

var game= new Phaser.Game(config);

var peixinho;

function preload () {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/tubarao.png');
    this.load.image('concha', 'assets/concha.png')
    
}

function create() {
    this.add.image(500, 400, 'mar').setDisplaySize(1000,800)
    this.add.image(500,750, 'logo').setScale(0.5);
    peixinho=this.add.image(400,300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false);
    this.add.image(800, 600, 'concha')
    


    peixinho.setFlip(true, false);
   
}

function update() {
    peixinho.x=this.input.x;
    peixinho.y=this.input.y;
    

}

