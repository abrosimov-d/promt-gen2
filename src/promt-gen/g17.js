export class g17 {
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
            "luxury handbag", "elegant scarf", "artistic accessories"
        ];

        this.backgrounds = [
            "a softly lit modern bedroom", "a cozy living room with warm tones",
            "a bright kitchen with daylight", "a sunlit bathroom with a mirror",
            "a minimalist studio apartment"
        ];

        this.quality = "full-frame DSLR, ultra sharp, perfect white balance, realistic colors";
        this.style = "hyper-realistic, intimate mood, sensual but tasteful, everyday setting";
    }

    generatePrompt() {
        const rand = arr => arr[Math.floor(Math.random() * arr.length)];

        const prompt = `Hyper-realistic full-frame photo of a model ${rand(this.poses)}, wearing ${rand(this.clothing_styles)} made of ${rand(this.clothing_materials)} in ${rand(this.clothing_colors)}, styled in ${rand(this.styles)} at ${rand(this.locations)} with ${rand(this.lighting)}, ${rand(this.mood)} mood, accessorized with ${rand(this.accessories)}, ${this.quality}, ${this.style}.`;

        return prompt;
    }
}
