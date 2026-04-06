export class G30 {
    constructor() {
        this.styles = [
            'Fortnite game art style',
            'stylized 3D character like Fortnite',
            'cel-shaded Fortnite female skin',
            'bold saturated colors, Fortnite aesthetic',
            'Unreal Engine stylized render, Fortnite look',
        ];

        this.characters = [
            'young adult female Fortnite-style character',
            'female Fortnite skin design',
            'stylized female hero in Fortnite vibe',
            'playful female battle royale character',
        ];

        this.hair = [
            'neon pink ponytail',
            'electric blue bob',
            'long purple gradient hair',
            'short platinum hair with undercut',
            'twin buns with streaks',
            'wavy coral hair',
            'sleek black hair with colored tips',
        ];

        // Strong minimal lingerie — short phrases; avoid words that read “modest” or trigger badWords
        this.lingerieLead = [
            'NOT conservative clothing: extremely minimal lingerie, almost only strings and tiny fabric',
            'micro lingerie only: whisper-thin straps, minimal triangles, no dress no coat no skirt',
            'fashion lingerie focus: smallest possible panels, high-cut legs, open midriff, single layer',
            'string-tie lingerie set, hip-high cuts, narrow elastic only, no extra layers',
            'barely-there lingerie as sole garment, razor straps, maximum visible skin, stylized 3D',
        ];

        this.outfits = [
            'string-side lingerie duo, micro coverage',
            'triangle micro panels + narrow hip straps',
            'plunge halter lingerie + low-rise string bottom',
            'Y-back lingerie strip + high-leg bottom, minimal cloth',
            'criss-cross strap harness lingerie, tiny panels',
            'bandeau strip + side-tie bottoms, almost no fabric',
            'cut-out torso lingerie, large skin windows',
            'one-shoulder micro lingerie set',
            'neon trim on micro lingerie, thin elastic only',
            'satin micro lingerie, narrow ties at neck and hips',
            'lace micro triangles, maximum skin between panels',
            'seamless micro lingerie, painted-on look',
            'wrap ribbons only, minimal front coverage',
            'keyhole micro top + string bottom',
            'asymmetric straps, one panel smaller than the other',
            'sport micro set: compression hints, long bare legs',
            'color blocks on tiny panels, big negative space on body',
            'deep side cuts on lingerie one-piece, legs and waist bare',
            'stylized chain accents, lingerie still minimal fabric',
        ];

        this.skinForward = [
            'camera on midriff hips legs shoulders, not on clothes volume',
            'skin takes more frame area than fabric',
            'no long sleeves, no floor-length anything, no modest coverage',
            'silhouette is mostly skin plus thin straps',
        ];

        this.noModest = [
            'avoid conservative or fully covered look',
            'avoid habit-like or robe-like silhouette',
            'avoid prim covered-up styling',
        ];

        this.colors = [
            'hot pink and cyan',
            'purple and gold',
            'lime green and black',
            'orange and teal',
            'white and electric blue',
            'red and silver',
        ];

        this.poses = [
            'confident lobby pose',
            'victory pose with one hand up',
            'ready stance holding a pickaxe',
            'jumping mid-air with dynamic hair',
            'running toward the camera',
            'standing on a glowing platform',
            'emote dance freeze-frame',
        ];

        this.locations = [
            'colorful Fortnite island backdrop',
            'stylized city skyline at sunset',
            'neon battle bus in the sky',
            'cartoon forest with bright trees',
            'futuristic lobby environment',
            'storm circle edge with purple sky',
            'beach with saturated sand and water',
        ];

        this.effects = [
            'subtle glow outlines',
            'particle sparkles',
            'soft bloom on highlights',
            'clean game UI lighting',
            'vibrant rim light',
        ];
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * English prompt: Fortnite-styled female character in minimalist lingerie only.
     */
    generatePrompt(options = {}) {
        const opts = options && typeof options === 'object' ? options : {};
        const {
            style = '8k sharp',
            mood = 'bold, confident',
        } = opts;

        // Lingerie-first order so truncation never kills the main intent
        const outfitLine = `outfit: ${this.getRandomElement(this.outfits)}`;
        let parts = [
            this.getRandomElement(this.lingerieLead),
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

        let prompt = parts.join(', ');

        const trimTo400 = () => {
            while (prompt.length > 400 && parts.length > 4) {
                // drop from the end: style, mood, effects, location… keep lingerie block
                parts.pop();
                prompt = parts.join(', ');
            }
            if (prompt.length > 400) {
                prompt = prompt.slice(0, 397) + '...';
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
