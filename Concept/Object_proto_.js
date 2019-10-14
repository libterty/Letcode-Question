// Object Prototype

function Artist(name, talent) {
    this.name = name;
    this.talent = talent;
}

class Musician extends Artist {
    constructor(name, talent, instrument) {
        super(name, talent);

        this.instrument = instrument;
    }
}

const frank = new Musician(
    'Frank',
    'Singer',
    'voice'
)

Object.prototype.info = function() {
    console.log('this', this);
}

const monet = new Artist.prototype.constructor('Dave', 'Dancing')
console.log('monet', monet)
    // monet Artist { name: 'Dave', talent: 'Dancing' }
    // Artist.prototype return a constructor

frank.info();
// this eq
// Musician { name: 'Frank', talent: 'Singer', instrument: 'voice'}