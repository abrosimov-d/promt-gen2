export class G33 {
    constructor() {
        this.styles = [
            "golden hour resort photography",
            "tropical luxury pool editorial",
            "sunset beach club aesthetic",
            "warm cinematic swimwear shoot",
            "high-end vacation instagram mood",
            "palm-shadow dappled poolside light",
        ];

        this.characters = [
            "confident woman at luxury pool",
            "fashion model at infinity pool edge",
            "summer beauty in tropical resort setting",
            "striking female silhouette against sunset sky",
            "relaxed pose at beach club cabana",
        ];

        this.hair = [
            "wet-look sleek hair tucked behind ears",
            "long sunlit waves with golden highlights",
            "high ponytail with loose strands",
            "messy beach bun with tropical flower accent",
            "short bob catching orange sunset tones",
            "braided crown with damp ends",
        ];

        this.bikiniLead = [
            "minimal bikini as main outfit: tiny panels, thin straps only",
            "micro bikini set: string ties, maximum skin in warm light",
            "resort swimwear focus: barely-there two-piece silhouette",
            "fashion bikini minimal coverage, golden hour glow on skin",
            "poolside bikini only: no cover-up, clean summer lines",
        ];

        this.outfits = [
            "string-tie micro bikini, high-cut hips",
            "triangle top + side-tie bottom, minimal fabric",
            "halter plunge bikini + low string bottom",
            "bandeau strip bikini with narrow side ties",
            "criss-cross strap bikini, tiny coverage panels",
            "cut-out torso bikini with large skin windows",
            "one-shoulder micro bikini, asymmetric panels",
            "neon trim micro bikini on tan skin",
            "satin micro bikini, narrow neck and hip ties",
            "lace micro triangle bikini, negative space between panels",
            "seamless micro bikini, second-skin fit",
            "wrap-ribbon bikini, minimal front panel",
            "keyhole micro top + string bottom set",
            "sport micro bikini, long bare legs emphasis",
            "color-block tiny panels bikini, bold contrast",
            "deep side-cut one-piece with high leg, pool style",
        ];

        this.skinForward = [
            "frame emphasizes legs, waist, shoulders over fabric area",
            "warm light on skin, clothing is secondary visual mass",
            "no long sleeves or pants, long bare legs visible",
            "silhouette is mostly skin plus thin bikini lines",
        ];

        this.noModest = [
            "avoid conservative full-coverage resort dress",
            "avoid long sarong or robe as main subject",
            "avoid modest one-piece with high neck and full back",
            "keep focus on minimal swimwear despite luxury setting",
        ];

        this.colors = [
            "coral bikini vs teal pool water",
            "white bikini with gold sunset rim light",
            "hot pink bikini against orange sky gradient",
            "turquoise bikini and palm green bokeh",
            "sunset orange bikini with purple shadow tones",
            "cream bikini with bronze skin highlights",
        ];

        this.poses = [
            "sitting on pool edge, feet in water",
            "standing at infinity pool vanishing line",
            "leaning on palm trunk, relaxed arm up",
            "walking on wet deck toward camera",
            "lying on lounger, one knee bent",
            "waist-deep in pool, arms on coping",
            "looking back over shoulder at sunset",
        ];

        this.locations = [
            "infinity pool overlooking ocean at sunset",
            "private villa pool with palm silhouettes",
            "tropical beach club with tiki lights starting",
            "marble pool deck with warm uplights",
            "lagoon-style pool with rock and waterfall",
            "rooftop pool in resort city golden hour",
            "quiet cove beach with calm warm water",
        ];

        this.effects = [
            "warm lens flare from low sun",
            "specular highlights on wet skin",
            "soft bloom on bright sky edge",
            "palm leaf shadow patterns on deck",
            "shallow depth of field, creamy bokeh water",
            "subtle haze in humid tropical air",
        ];
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * English prompt: Bikini / micro swimwear at warm tropical pool or beach resort.
     */
    generatePrompt(options = {}) {
        const opts = options && typeof options === "object" ? options : {};
        const {
            style = "8k sharp, warm color grade",
            mood = "relaxed luxury, confident",
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
