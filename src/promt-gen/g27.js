export class G27 {
    constructor() {
        this.photoTypes = [
            'hyperrealistic high-detailed photo',
            'Professional photo',
            'high quality detailed photo',
            'ultra realistic photo',
            'professional studio photo'
        ];

        this.girlDescriptions = [
            'beautiful young russian girl',
            'beautiful young pretty girl',
            'beautiful youngest russian nurse',
            'beautiful youngest woman',
            'beautiful young woman',
            'beautiful young lady',
            'beautiful young model'
        ];

        this.physicalFeatures = [
            'perfect legs',
            'curvy hips',
            'cute knees',
            'shiny skin',
            'smirk face',
            'long brown volumed hair',
            'long volumed hair',
            'soft shiny skin',
            'soft tanned shiny skin',
            'round buttt',
            'curvy figure',
            'slender waist',
            'graceful posture'
        ];

        this.dresses = [
            'bright orange and yellow floral dress',
            'bright yellow and green floral midi dress',
            'bright yellow and pink floral dress',
            'bright orange floral short dress',
            'pure white long medical robe',
            'white blouse under pure white long medical robe',
            'bright floral summer dress',
            'pastel colored floral dress',
            'light colored floral dress'
        ];

        this.underwear = [
            'white cotton girly panties',
            'white cotton girly panties with thin pink trim',
            'pink cotton girly panties',
            'white girly panties',
            'light colored cotton panties',
            'white lace panties',
            'pink lace panties'
        ];

        this.footwear = [
            'barefoot',
            'white high heel sandals',
            'white short socks',
            'white ankle socks',
            'white sandals',
            'white sneakers'
        ];

        this.poses = [
            'squat sitting on the windowshell',
            'squat lying on her back in relax pose',
            'lying on her stomach',
            'squatting in a shy pose',
            'climbing high up on wooden ladder',
            'sitting on the floor',
            'standing by the window',
            'leaning against the wall',
            'sitting on the edge of the bed'
        ];

        this.locations = [
            'on grey sofa',
            'on the windowshell',
            'in hospital',
            'to the roof',
            'in the bedroom',
            'in the living room',
            'in the garden',
            'by the window',
            'on the floor'
        ];

        this.actions = [
            'she looking at window',
            'holding cup of tea in hands',
            'spread feets',
            'spread bending knees',
            'lift dress',
            'hands clasped under chin',
            'adjusting dress',
            'fixing hair',
            'looking in mirror'
        ];

        this.views = [
            'Full body frontal view',
            'view from front above',
            'Back view from behind above',
            'Frontal view on gusset',
            'rear bottom up view from ground',
            'side view',
            'three-quarter view',
            'front view',
            'back view'
        ];

        this.focusPoints = [
            'focus on panties',
            'showing panties gusset under dress',
            'showing buttt in panties under dress',
            'flashing panties gusset',
            'show up panties under dress',
            'focus on legs',
            'focus on dress',
            'focus on pose'
        ];
    }

    generatePrompt() {
        const photoType = this.getRandomElement(this.photoTypes);
        const girlDesc = this.getRandomElement(this.girlDescriptions);
        const features = this.getRandomElements(this.physicalFeatures, 3);
        const dress = this.getRandomElement(this.dresses);
        const underwear = this.getRandomElement(this.underwear);
        const footwear = this.getRandomElement(this.footwear);
        const pose = this.getRandomElement(this.poses);
        const location = this.getRandomElement(this.locations);
        const action = this.getRandomElement(this.actions);
        const view = this.getRandomElement(this.views);
        const focus = this.getRandomElement(this.focusPoints);

        return `${photoType} of a ${girlDesc}. ${features.join(', ')}. Wearing a ${dress}; ${underwear}; ${footwear}. ${pose} ${location}, ${action}, ${focus}. ${view}.`;
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    getRandomElements(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    generateMultiplePrompts(count = 5) {
        const prompts = [];
        for (let i = 0; i < count; i++) {
            prompts.push(this.generatePrompt());
        }
        return prompts;
    }
} 