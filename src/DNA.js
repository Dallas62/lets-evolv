'use strict';

const CHARACTERS = 'ACGT';

class DNA {

    constructor(sequence = '') {
        if('string' !== typeof sequence && sequence.match(/[ACGT]+/)) {
            throw new Error("The `sequence` is not a valid DNA sequence.");
        }

        this._sequence = sequence;
    }

    mutate(rate = 0.01) {
        for(let i = 0; i < this._sequence.length; i++) {
            if(Math.random() > rate) {
                continue;
            }

            const index = Math.floor(Math.random() * CHARACTERS.length);

            this._sequence[i] = CHARACTERS[index];
        }
    }

    crossover(dna) {

    }

    get sequence() {
      return this._sequence;
    }

    static serialize(network) {

    }

    static deserialize(dna) {

    }
}

module.exports = DNA;
