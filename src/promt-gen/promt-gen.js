import { PromptGenerator } from './generator';
import { PromptGenerator2 } from './generator2';
import { PromptGenerator3 } from './g3';
import {G5} from './G5';
import {G4} from './G4';
import {g6} from './g6';
import {g7 } from './g7';
import {g8} from './g8';
import {g9} from './g9';    
import {g10} from './g10';
import {g11} from './g11';
import {g12} from './g12';
import {g13} from './g13';
import {g14} from './g14';
import {g15} from './g15';
import {g16} from './g16';
import {g17} from './g17';
import {g18} from './g18.js';
import {g19} from './g19.js';
import {g20} from './g20.js';
import { g21 } from './g21';
import { G22 } from './g22';
import { G23 } from './g23';
import { G24 } from './g24';
import { G25 } from './g25.js';
import { G26 } from './g26.js';

export class PromtGen {
    constructor() {
        this.promt = '';
        this.seed = 0;
        this.generator = this.seededRandom(this.seed)
        this.promptGenerator = new PromptGenerator();
        this.beautifyCounter = 0;
        this.g18 = new g18();
        this.g19 = new g19();
        this.g20 = new g20();
        this.g21 = new g21();
        this.g22 = new G22({ endpoint: '', apiKey: '' });
        this.g23 = new G23();
        this.g24 = new G24(''); // Initialize with empty API key
        this.g25 = new G25();
        this.g26 = new G26();
    }

    beautify(text) {
        let result = []
        this.beautifyCounter++;
        let lines = [];
        lines = text.split(/[,]/).map(part => part.trim()).filter(Boolean);
        //if (this.beautifyCounter % 2 == 0) {
        //    lines = text.split(/[.]/).map(part => part.trim()).filter(Boolean);
        //} else {
        //    lines = text.split(/[.,|]/).map(part => part.trim()).filter(Boolean);
        //}
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
                    if (!elem.includes(':'))
                        result.push(elem)                
            }
                
        })
        return result
    }  

    processRepalce(array, target) {
        let result = target
        array.forEach((elem) => {
            if (elem.includes(':')) {
                let parts = elem.split(':')
                target.forEach((targetElem) => {
                    if (targetElem.includes(parts[0])) {
                        let newTargetElem = targetElem.replace(parts[0], parts[1])
                        target.splice(target.indexOf(targetElem), 1, newTargetElem)
                    }
                })
            }
        })
        return result;
    }
    insertCharInString(string, char, index) {
        let result = string;
        result = result.slice(0, index) + char + result.slice(index);
        return result;
    }

    finish(string) {
        let result = string
        for (let i = 0; i < 20; i++)
            result = result.replace(this.delim + this.delim, this.delim)
        result = this.processBadWords(result);
        return result;
    }     

    processBadWords(string) {
        let result = string;
        let badWords = [
            'nude ',
            'transparent ',
            'sheer ',
            'translucent ',
            'see-through ',
            'tank ',
            'latex ',
            'bra ', 'bra,',
            'panties', 'panties,',
            'thong',
            'naturistki',
            'underwear',
            'nightgown',
            'natural',
            'lipstick',
            'topless',
            "erect",
            "nipple",
        ]

        badWords.forEach((word) => {
            result = result.replace(word, this.insertCharInString(word, '+', 2));
        })

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
        
        resultArray = this.processRepalce(this.textToArray(promt2), resultArray)

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
        const generator = new g6();
        return generator.generatePrompt();
    }

    generateG7Prompt() {
        const generator = new g7();
        return generator.generatePrompt();
    }

    generateG8Prompt() {
        const generator = new g8();
        return generator.generatePrompt();
    }

    generateG9Prompt() {
        const generator = new g9();
        return generator.generatePrompt();
    }

    generateG10Prompt() {
        const generator = new g10();
        return generator.generatePrompt('bold');
    }

    generateG11Prompt() {
        const generator = new g11();
        return generator.generatePrompt();
    }

    generateG12Prompt() {
        return g12.generatePrompt();
    }

    generateG13Prompt() {
        const generator = new g13();
        return generator.generateRandomPrompt('ru');
    }

    generateG14Prompt() {
        const generator = new g14();
        return generator.generateRandomPrompt();
    }

    generateG15Prompt() {
        const generator = new g15();
        return generator.generatePrompt();
    }

    generateG16Prompt() {
        const generator = new g16();
        return generator.generatePrompt();
    }

    generateG17Prompt() {
        const generator = new g17();
        return generator.generatePrompt();
    }

    generateG18Prompt() {
        return this.g18.generatePrompt();
    }

    generateG19Prompt() {
        return this.g19.generatePrompt();
    }

    generateG20Prompt() {
        return this.g20.generatePrompt();
    }

    generateG21Prompt() {
        return this.g21.generatePrompt();
    }

    generateG22Prompt() {
        return this.g22.generateRandomPrompt();
    }

    generateG23Prompt() {
        return this.g23.generatePrompt();
    }

    setOpenRouterApiKey(apiKey) {
        if (!apiKey) {
            console.error('OpenRouter API key cannot be empty');
            return false;
        }
        this.g24.setApiKey(apiKey);
        return true;
    }

    async generateG24Prompt(promptType = 'beach') {
        try {
            const result = await this.g24.generatePrompt(promptType);
            console.log('Generated prompt:', result);
            return result;
        } catch (error) {
            console.error('Error in generateG24Prompt:', error);
            return `Error: ${error.message}`;
        }
    }

    async generateG24MultiplePrompts(count = 5, promptType = 'romantic') {
        try {
            const results = await this.g24.generateMultiplePrompts(count, promptType);
            console.log('Generated prompts:', results);
            return results;
        } catch (error) {
            console.error('Error in generateG24MultiplePrompts:', error);
            return [`Error: ${error.message}`];
        }
    }

    generateG25Prompt() {
        return this.g25.generatePrompt();
    }

    generateG26Prompt() {
        return this.g26.generatePrompt();
    }
}

