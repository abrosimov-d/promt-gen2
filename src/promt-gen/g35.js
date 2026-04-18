export class G35 {
    constructor() {
        this.styles = [
            "sci-fi concept art, digital painting",
            "futuristic space opera illustration",
            "cyberpunk neon-drenched scene",
            "retro-futurism with art deco elements",
            "hard science fiction realism",
            "alien world exploration artwork",
        ];

        this.characters = [
            "space explorer in advanced exosuit",
            "cybernetic humanoid with glowing implants",
            "alien diplomat from distant galaxy",
            "starship captain on bridge of vessel",
            "holographic AI interface projection",
            "post-human entity floating in zero-g",
        ];

        this.outfits = [
            "sleek form-fitting spacesuit with HUD visor",
            "cybernetically enhanced body with exposed wiring",
            "flowing robes with holographic patterns",
            "tactical combat armor with energy shielding",
            "biomechanical suit that merges with flesh",
            "translucent force-field clothing",
        ];

        this.locations = [
            "orbiting space station with view of gas giant",
            "alien jungle with bioluminescent flora",
            "derelict generation ship drifting in nebula",
            "cybercity megastructure reaching into atmosphere",
            "crystal cave on asteroid with floating crystals",
            "quantum computer core with data streams",
        ];

        this.technology = [
            "hover vehicles with anti-gravity engines",
            "neural interface terminals with floating displays",
            "energy weapons with particle trail effects",
            "teleportation gateways with swirling vortexes",
            "drones with adaptive camouflage",
            "nanotechnology swarm forming structures",
        ];

        this.lighting = [
            "neon glow from holographic advertisements",
            "bioluminescent organisms casting soft light",
            "starlight filtering through alien atmosphere",
            "energy cores pulsing with rhythmic light",
            "data streams creating ethereal illumination",
            "nebula gases creating colorful auroras",
        ];

        this.composition = [
            "wide shot showing scale of alien landscape",
            "close-up on character with environmental reflection",
            "dynamic angle with dramatic perspective",
            "symmetrical composition with futuristic architecture",
            "action shot with motion blur and energy trails",
            "cinematic framing with depth layers",
        ];

        this.mood = [
            "sense of wonder and cosmic awe",
            "tense anticipation of first contact",
            "melancholy of deep space isolation",
            "technological transcendence and evolution",
            "chaotic energy of futuristic metropolis",
            "mysterious alien atmosphere",
        ];
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * Generate a sci-fi/futuristic prompt
     */
    generatePrompt(options = {}) {
        const opts = options && typeof options === "object" ? options : {};
        const {
            style = "8k, highly detailed, cinematic lighting",
        } = opts;

        let parts = [
            this.getRandomElement(this.styles),
            this.getRandomElement(this.characters),
            `wearing ${this.getRandomElement(this.outfits)}`,
            `location: ${this.getRandomElement(this.locations)}`,
            `featuring ${this.getRandomElement(this.technology)}`,
            `lighting: ${this.getRandomElement(this.lighting)}`,
            this.getRandomElement(this.composition),
            this.getRandomElement(this.mood),
            style,
        ];

        let prompt = parts.join(", ");

        // Ensure prompt isn't too long
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


