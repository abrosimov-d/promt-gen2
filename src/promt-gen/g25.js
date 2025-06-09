export class G25 {
    constructor() {
        this.locations = [
            'bedroom',
            'full length mirror',
            'wardrobe mirror',
            'bathroom',
            'dressing room',
            'master bedroom',
            'private room',
            'boudoir',
            'fashion studio',
            'photo studio'
        ];

        this.poses = [
            'taking a full body selfie with iPhone',
            'posing in front of full length mirror with iPhone',
            'showing lingerie in mirror selfie',
            'full body pose with iPhone',
            'standing full body selfie',
            'full length mirror selfie with iPhone',
            'elegant pose with iPhone',
            'full body pose holding iPhone',
            'standing pose with iPhone camera',
            'full length mirror shot with iPhone',
            'catalog style pose',
            'fashion model pose'
        ];

        this.lighting = [
            'soft morning light',
            'warm evening light',
            'cozy indoor lighting',
            'dramatic shadows',
            'backlit by window',
            'ring light effect',
            'mood lighting',
            'romantic lighting',
            'boudoir lighting',
            'studio lighting',
            'fashion photography lighting'
        ];

        this.styles = [
            'elegant',
            'sensual',
            'tasteful',
            'artistic',
            'minimalistic',
            'sophisticated',
            'classy',
            'refined',
            'delicate',
            'fashion catalog style',
            'high fashion'
        ];

        this.phoneDetails = [
            'iPhone 15 Pro',
            'iPhone 15',
            'iPhone 14 Pro',
            'iPhone 14',
            'latest iPhone',
            'new iPhone',
            'gold iPhone',
            'silver iPhone'
        ];

        this.lingerieTypes = [
            'sheer cotton thong',
            'transparent cotton thong',
            'micro cotton thong',
            'sheer cotton bikini',
            'transparent cotton bikini',
            'micro cotton g-string',
            'sheer cotton briefs',
            'transparent cotton briefs',
            'sheer silk thong',
            'transparent silk thong',
            'micro silk thong',
            'sheer silk bikini',
            'transparent silk bikini',
            'micro silk g-string',
            'sheer silk briefs',
            'transparent silk briefs',
            'sheer lace thong',
            'transparent lace thong',
            'micro lace thong',
            'sheer lace bikini',
            'transparent lace bikini',
            'micro lace g-string',
            'sheer lace briefs',
            'transparent lace briefs',
            'sheer satin thong',
            'transparent satin thong',
            'micro satin thong',
            'sheer satin bikini',
            'transparent satin bikini',
            'micro satin g-string',
            'sheer satin briefs',
            'transparent satin briefs',
            'braless with visible nipples',
            'braless with hard nipples',
            'braless with erect nipples',
            'braless with perky nipples',
            'topless with visible nipples',
            'topless with hard nipples',
            'topless with erect nipples',
            'topless with perky nipples',
            'completely topless',
            'fully topless',
            'completely braless',
            'fully braless'
        ];

        this.stockingsTypes = [
            'sheer stockings',
            'fishnet stockings',
            'seamless stockings',
            'back seam stockings',
            'thigh high stockings',
            'suspender stockings',
            'sheer to waist stockings',
            'opaque stockings',
            'matte stockings'
        ];

        this.colors = [
            'white',
            'black',
            'nude',
            'pink',
            'light pink',
            'peach',
            'mint',
            'lavender',
            'light blue',
            'beige',
            'cream',
            'light gray',
            'powder blue',
            'light yellow',
            'pastel green'
        ];
    }

    generatePrompt() {
        const location = this.getRandomElement(this.locations);
        const pose = this.getRandomElement(this.poses);
        const light = this.getRandomElement(this.lighting);
        const lingerie = this.getRandomElement(this.lingerieTypes);
        const stockings = this.getRandomElement(this.stockingsTypes);
        const color = this.getRandomElement(this.colors);

        return `A beautiful young woman in ${location}, ${pose}, wearing ${color} ${lingerie} with ${stockings}. ${light}. High quality, 8k, full body shot.`;
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    generateMultiplePrompts(count = 5) {
        const prompts = [];
        for (let i = 0; i < count; i++) {
            prompts.push(this.generatePrompt());
        }
        return prompts;
    }
} 