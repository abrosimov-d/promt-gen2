export class G34 {
    constructor() {
        this.styles = [
            "urban street photography editorial",
            "high-fashion city lookbook aesthetic",
            "cinematic neon-lit night street shoot",
            "moody overcast downtown fashion photo",
            "gritty urban grunge editorial",
            "clean minimal city architecture backdrop",
        ];

        this.characters = [
            "confident woman in urban streetwear",
            "fashion model against graffiti wall",
            "striking female figure on city rooftop",
            "stylish woman crossing busy intersection",
            "bold street-style portrait in alley",
        ];

        this.hair = [
            "sleek straight hair, glossy under streetlight",
            "messy textured waves, windswept look",
            "tight high bun, bold earrings visible",
            "loose low ponytail with face-framing strands",
            "cropped natural curls, statement look",
            "long dark hair cascading over one shoulder",
        ];

        this.outfits = [
            "oversized leather jacket over crop top, low-rise jeans",
            "tailored blazer with nothing underneath, wide-leg trousers",
            "cropped hoodie, micro mini skirt, chunky boots",
            "sleek bodysuit, high-waist cargo pants, belt chains",
            "vintage band tee knotted at waist, distressed denim shorts",
            "monochrome all-black ensemble with cutout details",
            "wrap mini skirt, fitted ribbed top, strappy heels",
            "sheer mesh top over bralette, tailored trousers",
            "asymmetric off-shoulder top, leather mini skirt",
            "camo cargo pants, cropped sport bra, bomber jacket",
            "slip dress over white tee, platform sneakers",
            "double denim co-ord, open jacket, white bralette",
        ];

        this.colors = [
            "all-black outfit against warm amber streetlights",
            "white ensemble with deep shadow contrast",
            "neon green accents in dark urban scene",
            "rust and camel tones on grey concrete",
            "cobalt blue against red brick wall",
            "monochrome grey with chrome accessories",
        ];

        this.poses = [
            "leaning against brick wall, arms crossed",
            "walking toward camera, coat billowing",
            "sitting on concrete steps, looking aside",
            "standing at edge of rooftop, city below",
            "mid-stride crossing wet pavement",
            "looking up at neon sign, profile view",
            "back to camera, glancing over shoulder",
        ];

        this.locations = [
            "graffiti-covered alley at night with neon glow",
            "rain-slicked downtown street after sunset",
            "industrial rooftop with city skyline at dusk",
            "underground parking garage with harsh shadows",
            "busy city crosswalk, motion blur on cars",
            "brutalist concrete plaza at golden hour",
            "fire escape stairway on brick building",
        ];

        this.effects = [
            "harsh side-lighting creating deep shadows",
            "neon reflections on wet pavement",
            "lens flare from streetlamp behind subject",
            "shallow depth of field, city bokeh background",
            "light grain and high contrast film look",
            "dramatic rim light separating subject from background",
        ];

        this.mood = [
            "edgy and confident urban attitude",
            "moody introspective city energy",
            "bold and unapologetic street presence",
            "cool detached metropolitan vibe",
        ];
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * English prompt: Urban street fashion editorial photography.
     */
    generatePrompt(options = {}) {
        const opts = options && typeof options === "object" ? options : {};
        const {
            style = "8k sharp, high contrast color grade",
        } = opts;

        let parts = [
            this.getRandomElement(this.styles),
            this.getRandomElement(this.characters),
            this.getRandomElement(this.hair),
            `outfit: ${this.getRandomElement(this.outfits)}`,
            `${this.getRandomElement(this.colors)} color scheme`,
            this.getRandomElement(this.poses),
            this.getRandomElement(this.locations),
            this.getRandomElement(this.effects),
            this.getRandomElement(this.mood),
            style,
        ];

        let prompt = parts.join(", ");

        while (prompt.length > 400 && parts.length > 4) {
            parts.pop();
            prompt = parts.join(", ");
        }
        if (prompt.length > 400) {
            prompt = prompt.slice(0, 397) + "...";
        }

        return prompt;
    }

    generateMultiplePrompts(count = 5, options = {}) {
        const prompts = [];
        for (let i = 0; i < count; i++) {
            prompts.push(this.generatePrompt(options));
        }
        return prompts;
    }
}