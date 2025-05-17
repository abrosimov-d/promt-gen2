import { PromptGenerator } from './generator';
import { PromptGenerator2 } from './generator2';
import { PromptGenerator3 } from './g3';
import {G5} from './G5';
import {G4} from './G4';
import {G6} from './g6';
import {g7 } from './g7';

export class PromtGen {
    constructor() {
        this.promt = '';
        this.seed = 0;
        this.generator = this.seededRandom(this.seed)
        this.promptGenerator = new PromptGenerator();
        this.beautifyCounter = 0;
    }

    beautify(text) {
        let result = []
        this.beautifyCounter++;
        let lines = [];
        if (this.beautifyCounter % 2 == 0) {
            lines = text.split(/[.]/).map(part => part.trim()).filter(Boolean);
        } else {
            lines = text.split(/[.,|]/).map(part => part.trim()).filter(Boolean);
        }
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

    insert(seed, promt1, promt2) {
        this.seed = seed;
        this.generator = this.seededRandom(this.seed);
        let result = '';
        let resultArray = [];

        resultArray = this.validateMinus(this.textToArray(promt1));
        this.validateMinus(this.textToArray(promt2)).forEach((elem) => {
            resultArray.splice(Math.floor(this.generator() * resultArray.length), 0, elem);
        })
        
        result = this.finish(resultArray.join(this.delim))
        return result; 
    }

    generateBasicPrompt() {
        return this.promptGenerator.generatePhotorealisticPrompt();
    }

    calculatePromtLen(prompt) {
        return this.finish(this.validateMinus(this.textToArray(prompt)).join(this.delim)).length;
    }

    generateFortnitePrompt() {
        const generator = new PromptGenerator2();
        //console.log();
        return generator.generateRandomFortnitePrompt();
    }

    generateRandomBeachPrompt() {
        const generator = new PromptGenerator3();
        return generator.generateRandomBeachPrompt();
    }

    generateG5Prompt() {
        const generator = new G5();
        this.beautifyCounter = 1;
        return generator.generateSinglePrompt();
    }

    generateG4Prompt() {
        const generator = new G4();
        return generator.generatePrompt();
    }

    generateG6Prompt() {
        const generator = new G6();
        return generator.generatePrompt();
    }

    generateG7Prompt() {
        const generator = new g7();
        return generator.generatePrompt();
    }
}

