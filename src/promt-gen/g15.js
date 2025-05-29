export class g15 {
    constructor() {
        this.styles = [
            "portrait", "fashion", "editorial", "candid", "artistic",
            "vintage", "modern", "cinematic", "studio", "natural",
            "boudoir", "glamour", "fine art", "high fashion", "editorial"
        ];
        
        this.locations = [
            "luxury studio", "penthouse", "beach at sunset", "city rooftop", "modern apartment",
            "luxury hotel room", "private garden", "urban loft", "exclusive club", "private pool"
        ];
        
        this.lighting = [
            "dramatic rim lighting", "soft window light", "golden hour glow", "moody backlight",
            "dramatic studio lighting", "cinematic lighting", "artistic shadows", "dramatic contrast",
            "soft ambient glow", "dramatic spotlight"
        ];
        
        this.mood = [
            "sensual", "mysterious", "elegant", "playful", "confident",
            "dreamy", "alluring", "sophisticated", "intimate", "passionate"
        ];
        
        this.poses = [
            "elegantly standing", "sensually sitting", "gracefully walking", "looking over shoulder",
            "leaning against wall", "lying down", "stretching", "dancing pose", "artistic pose",
            "dynamic movement"
        ];
        
        this.clothing_styles = [
            "transparent mesh dress", "see-through mesh bodysuit", "sheer mesh top",
            "transparent mesh shorts", "see-through mesh leggings", "sheer mesh skirt",
            "transparent mesh swimsuit", "see-through mesh crop top", "sheer mesh tank top",
            "transparent mesh pants", "see-through mesh bodysuit", "sheer mesh dress",
            "transparent mesh jumpsuit", "see-through mesh shorts", "sheer mesh bikini"
        ];

        this.clothing_materials = [
            "transparent mesh", "see-through fabric", "sheer material",
            "translucent fabric", "transparent material", "mesh fabric",
            "sheer mesh", "transparent net", "see-through material",
            "translucent mesh"
        ];

        this.clothing_colors = [
            "black", "white", "nude", "transparent", "sheer",
            "translucent", "clear", "see-through", "invisible", "barely visible"
        ];

        this.accessories = [
            "delicate jewelry", "statement necklace", "elegant earrings", "designer watch",
            "luxury handbag", "designer sunglasses", "silk scarf", "leather belt",
            "designer shoes", "luxury bracelet"
        ];

        this.background_elements = [
            "luxury furniture", "modern art", "designer decor", "elegant curtains",
            "luxury bedding", "designer plants", "artistic props", "luxury accessories",
            "modern architecture", "designer lighting"
        ];
    }

    /**
     * Generate a detailed photo prompt with specified parameters or random ones if not provided
     * @param {string} [style] - Photo style
     * @param {string} [location] - Location setting
     * @param {string} [lighting] - Lighting type
     * @param {string} [mood] - Mood of the photo
     * @param {string} [pose] - Pose type
     * @param {string} [clothing] - Clothing style
     * @returns {string} Generated prompt
     */
    generatePrompt(style = null, location = null, lighting = null, mood = null, pose = null, clothing = null) {
        const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
        
        style = style || getRandomItem(this.styles);
        location = location || getRandomItem(this.locations);
        lighting = lighting || getRandomItem(this.lighting);
        mood = mood || getRandomItem(this.mood);
        pose = pose || getRandomItem(this.poses);
        clothing = clothing || getRandomItem(this.clothing_styles);
        const material = getRandomItem(this.clothing_materials);
        const color = getRandomItem(this.clothing_colors);
        const accessory = getRandomItem(this.accessories);
        const background = getRandomItem(this.background_elements);
        
        let prompt = `A ${mood} ${style} photo of a young woman, ${pose}, wearing a ${material} ${color} ${clothing}, `;
        prompt += `accessorized with ${accessory}, in a ${location} setting with ${background}, `;
        prompt += `illuminated by ${lighting}. `;
        prompt += "High quality detailed professional photography 8k resolution tasteful and artistic composition, magazine quality, editorial style, artistic nu+de aesthetic.";
        
        return prompt;
    }

    /**
     * Generate multiple unique prompts
     * @param {number} [count=5] - Number of prompts to generate
     * @returns {string[]} Array of generated prompts
     */
    generateMultiplePrompts(count = 5) {
        return Array.from({ length: count }, () => this.generatePrompt());
    }

    /**
     * Generate a themed prompt set
     * @param {string} theme - Theme for the prompts (e.g., 'luxury', 'artistic', 'editorial')
     * @param {number} [count=3] - Number of prompts to generate
     * @returns {string[]} Array of themed prompts
     */
    generateThemedPrompts(theme, count = 3) {
        const themes = {
            luxury: {
                style: ['editorial', 'high fashion', 'glamour'],
                location: ['luxury studio', 'penthouse', 'luxury hotel room'],
                mood: ['elegant', 'sophisticated', 'confident']
            },
            artistic: {
                style: ['artistic', 'fine art', 'editorial'],
                location: ['modern apartment', 'urban loft', 'private garden'],
                mood: ['dreamy', 'mysterious', 'artistic']
            }
        };

        const themeConfig = themes[theme] || themes.luxury;
        return Array.from({ length: count }, () => {
            const style = getRandomItem(themeConfig.style);
            const location = getRandomItem(themeConfig.location);
            const mood = getRandomItem(themeConfig.mood);
            return this.generatePrompt(style, location, null, mood);
        });
    }
}

// Example usage
if (typeof window === 'undefined') {
    const generator = new g15();
    
    // Generate a single prompt
    console.log("Single prompt example:");
    console.log(generator.generatePrompt());
    console.log("\nMultiple prompts example:");
    
    // Generate multiple prompts
    generator.generateMultiplePrompts(3).forEach((prompt, i) => {
        console.log(`\nPrompt ${i + 1}:`);
        console.log(prompt);
    });

    // Generate themed prompts
    console.log("\nLuxury themed prompts:");
    generator.generateThemedPrompts('luxury', 2).forEach((prompt, i) => {
        console.log(`\nLuxury Prompt ${i + 1}:`);
        console.log(prompt);
    });
} 