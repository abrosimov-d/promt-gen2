export class G28 {
    constructor() {
        this.photoTypes = [
            'ultra realistic photo',
            'hyperrealistic high-detailed photo',
            'professional studio photo',
            'high quality detailed photo',
            'cinematic photo',
            'artistic portrait photo',
            'fashion photography',
            'editorial photo'
        ];

        this.womanDescriptions = [
            'beautiful young woman',
            'elegant young lady',
            'stunning young model',
            'gorgeous young woman',
            'attractive young lady',
            'beautiful young girl',
            'elegant young woman',
            'stunning young lady'
        ];

        this.physicalFeatures = [
            'perfect skin',
            'natural beauty',
            'elegant posture',
            'graceful movements',
            'confident expression',
            'natural makeup',
            'healthy glow',
            'radiant smile',
            'expressive eyes',
            'smooth skin',
            'natural features',
            'beautiful complexion'
        ];

        this.clothing = [
            'elegant evening dress',
            'sophisticated business suit',
            'casual chic outfit',
            'fashionable street wear',
            'elegant cocktail dress',
            'stylish casual dress',
            'fashionable blouse and skirt',
            'elegant maxi dress',
            'trendy casual outfit',
            'sophisticated blazer and pants'
        ];

        this.accessories = [
            'minimal jewelry',
            'elegant necklace',
            'stylish watch',
            'fashionable handbag',
            'designer sunglasses',
            'elegant earrings',
            'stylish belt',
            'fashionable scarf',
            'elegant bracelet',
            'trendy clutch'
        ];

        this.poses = [
            'standing confidently',
            'sitting elegantly',
            'walking gracefully',
            'posing naturally',
            'looking over shoulder',
            'smiling warmly',
            'looking thoughtful',
            'posing for camera',
            'standing with confidence',
            'sitting with poise'
        ];

        this.locations = [
            'in modern office',
            'in elegant restaurant',
            'in beautiful garden',
            'in stylish cafe',
            'in luxury hotel lobby',
            'in fashionable boutique',
            'in urban street',
            'in art gallery',
            'in rooftop terrace',
            'in sophisticated lounge'
        ];

        this.lighting = [
            'soft natural lighting',
            'warm golden hour light',
            'studio lighting',
            'dramatic lighting',
            'soft ambient lighting',
            'professional lighting',
            'natural window light',
            'elegant mood lighting',
            'fashion photography lighting',
            'cinematic lighting'
        ];

        this.backgrounds = [
            'blurred city background',
            'elegant interior',
            'natural outdoor setting',
            'modern architecture',
            'sophisticated environment',
            'urban landscape',
            'luxury setting',
            'contemporary space',
            'elegant backdrop',
            'fashionable surroundings'
        ];

        this.moods = [
            'confident and professional',
            'elegant and sophisticated',
            'natural and relaxed',
            'fashionable and trendy',
            'serene and peaceful',
            'energetic and vibrant',
            'mysterious and intriguing',
            'warm and friendly',
            'strong and independent',
            'graceful and refined'
        ];

        this.technicalSpecs = [
            'high resolution',
            'professional photography',
            'sharp focus',
            'excellent composition',
            'professional camera',
            'high quality',
            'detailed shot',
            'professional lighting',
            'crystal clear',
            'studio quality'
        ];
    }

    generatePrompt() {
        const photoType = this.getRandomElement(this.photoTypes);
        const womanDesc = this.getRandomElement(this.womanDescriptions);
        const features = this.getRandomElements(this.physicalFeatures, 2);
        const clothing = this.getRandomElement(this.clothing);
        const accessory = this.getRandomElement(this.accessories);
        const pose = this.getRandomElement(this.poses);
        const location = this.getRandomElement(this.locations);
        const lighting = this.getRandomElement(this.lighting);
        const background = this.getRandomElement(this.backgrounds);
        const mood = this.getRandomElement(this.moods);
        const techSpecs = this.getRandomElements(this.technicalSpecs, 2);

        return `${photoType} of a ${womanDesc}. ${features.join(', ')}. Wearing ${clothing} with ${accessory}. ${pose} ${location}, ${lighting}, ${background}. ${mood}. ${techSpecs.join(', ')}.`;
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