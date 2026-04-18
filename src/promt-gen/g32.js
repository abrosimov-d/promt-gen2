export class G32 {
    constructor() {
        this.styles = [
            "cinematic winter photography",
            "frozen landscape aesthetic",
            "cold-weather fashion editorial",
            "icy atmosphere lighting",
            "winter wonderland mood",
            "breathable cold air effect",
        ];

        this.characters = [
            "young woman in bikini on frozen terrain",
            "summer-style beauty in winter setting",
            "confident female model embracing the cold",
            "beautiful woman defying winter weather",
            "striking contrast: warm colors vs cold background",
        ];

        this.hair = [
            "wavy blonde hair with snow dusting",
            "long jet-black hair frozen in wind",
            "messy brunette waves, icy strands",
            "platinum silver highlights from frost",
            "red hair contrasting against blue sky",
            "ponytail flying in winter wind",
            "natural curls dusted with light snow",
        ];

        this.bikiniLead = [
            "minimal bikini as sole garment: tiny top and small bottom panels",
            "micro bikini set: whisper-thin fabric, maximum skin exposure",
            "summer bikini style in winter scene: barely there two-piece",
            "fashion minimalist bikini, tiny triangle cups, string-tie bottoms",
            "barely-there swimwear: razor thin straps, minimum coverage design",
        ];

        this.outfits = [
            "string-side micro bikini duo, minimal panels",
            "triangle bikinis + narrow neck strap, hip high cuts",
            "plunge halter bikini top + low-rise string bottom",
            "Y-back bikini strips + high-leg cut, minimal cloth",
            "criss-cross strap harness bikini, tiny coverage panels",
            "bandeau strip bikini + side-tie bottoms, almost no fabric",
            "cut-out torso bikini, large skin windows on top",
            "one-shoulder micro bikini set, asymmetric design",
            "neon trim on micro bikini, thin elastic only",
            "satin micro bikini, narrow ties at neck and hips",
            "lace micro triangles bikini, maximum skin between panels",
            "seamless micro bikini, painted-on look effect",
            "wrap ribbons only bikini, minimal front coverage",
            "keyhole micro top + string bottom bikini",
            "asymmetric straps bikini, one panel smaller than the other",
            "sport micro bikini: compression hints, long bare legs",
            "color blocks on tiny bikini panels, big negative space",
            "deep side cuts on bikini, legs and waist bare",
        ];

        this.skinForward = [
            "camera focused on skin curves not fabric",
            "skin takes more frame area than clothing",
            "no long sleeves or pants, maximum bare legs visible",
            "silhouette is mostly skin plus thin bikini straps",
        ];

        this.noModest = [
            "avoid covered-up winter fashion styling",
            "avoid coat, jacket or full coverage clothing",
            "avoid snowsuit or thick winter garments on body",
            "focus on swimwear minimalism despite cold setting",
        ];

        this.colors = [
            "bright red bikini vs blue ice background",
            "hot pink bikini against white snow contrast",
            "yellow bikini panels with orange accents",
            "white bikini with electric blue trim",
            "neon green bikini on purple winter sky",
            "orange bikini top + teal bottom combination",
        ];

        this.poses = [
            "confident pose arms akimbo on snow bank",
            "victory pose one hand up against frozen backdrop",
            "ready stance near ice formation edge",
            "jumping mid-air over frozen puddle splash",
            "running toward camera through light snowfall",
            "standing on frozen platform looking distant",
            "emote dance freeze-frame in icy air",
        ];

        this.locations = [
            "icy beach with frozen water and snow banks",
            "frozen lake shore at winter sunset",
            "snow mountain peak with bikini silhouette",
            "ice cave interior with natural light",
            "winter resort area with frosty atmosphere",
            "frozen riverbank with ice formations",
            "snow-covered dunes under blue winter sky",
        ];

        this.effects = [
            "breath visible in freezing air effect",
            "snowflakes falling around subject",
            "icy rim light on skin and bikini edges",
            "subtle frost particles in background",
            "vibrant bloom on highlights from cold",
            "clean winter UI lighting atmosphere",
        ];
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * English prompt: Bikini woman in winter cold setting.
     */
    generatePrompt(options = {}) {
        const opts = options && typeof options === "object" ? options : {};
        const {
            style = "8k sharp",
            mood = "bold, confident",
        } = opts;

        const outfitLine = `outfit: ${this.getRandomElement(this.outfits)}`;
        let parts = [
            this.getRandomElement(this.bikiniLead),
            outfitLine,
            this.getRandomElement(this.skinForward),
            this.getRandomElement(this.noModest),
            this.getRandomElement(this.styles),
            this.getRandomElement(this.characters),
            this.getRandomElement(this.hair),
            `${this.getRandomElement(this.colors)} color scheme`,
            this.getRandomElement(this.poses),
            this.getRandomElement(this.locations),
            this.getRandomElement(this.effects),
            mood,
            style,
        ];

        let prompt = parts.join(", ");

        const trimTo400 = () => {
            while (prompt.length > 400 && parts.length > 4) {
                parts.pop();
                prompt = parts.join(", ");
            }
            if (prompt.length > 400) {
                prompt = prompt.slice(0, 397) + "...";
            }
        };

        trimTo400();

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
