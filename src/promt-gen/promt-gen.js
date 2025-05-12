import { PromptGenerator } from './generator';

export class PromtGen {
    constructor() {
        this.promt = '';
        this.seed = 0;
        this.generator = new PromptGenerator();
    }

    beautify(text) {
        let result = []
        let lines = text.split(/[.,|]/).map(part => part.trim()).filter(Boolean);
        lines.forEach((line => {
            result.push(line.trim())
        }))
        result = result.join('\n')
        for (let i = 0; i < 20; i++)
            result = result.replace('  ', ' ')
        return result;
    }

    seededRandom(seed) {
        let a = seed | 0;
        return function() {
          a |= 0;
          a = (a + 0x6D2B79F5) | 0;
          let t = Math.imul(a ^ (a >>> 15), 1 | a);
          t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
          return ((t ^ (t >>> 14)) >>> 0) / 4294967296; //
        };
    }

    shuffleArray(array) {
        let currentIndex = array.length;
        this.generator = this.seededRandom(this.seed);
        while (currentIndex != 0) {
          let randomIndex = Math.floor(this.generator() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
    }

    textToArray(text) {
        let result = []
        result = text.split('\n')
        return result
    }

    validateMinus(array) {
        let result = [];
        array.forEach((elem) => {
            if (elem[0] != '-') {
                if (elem[0] == '+')
                    result.push(this.obfuscateString(elem))
                else
                    result.push(elem)
            }
                
        })
        return result
    }  

    finish(string) {
        let result = string
        for (let i = 0; i < 20; i++)
            result = result.replace(this.delim + this.delim, this.delim)
        return result;
    }     

    shuffle(seed, promt1, promt2) {
        this.seed = seed;
        let result = '';
        let resultArray = [];

        resultArray = this.textToArray(promt1);
        resultArray = resultArray.concat(this.textToArray(promt2));
        //resultArray = resultArray.concat(this.textToArray(null));
        //resultArray = resultArray.concat(this.textToArray(null));
        
        resultArray = this.validateMinus(resultArray);

        this.shuffleArray(resultArray)

        result = this.finish(resultArray.join(this.delim))

        return result;      
    }

    generateBasicPrompt() {
        return this.generator.generatePhotorealisticPrompt();
    }

}

