export class G23 {
    constructor() {
        this.locations = [
            "romantic restaurant with candlelight",
            "beautiful garden with flowers",
            "cozy cafe with warm lighting",
            "stunning beach at sunset",
            "elegant rooftop terrace",
            "charming park with autumn leaves",
            "luxurious hotel lobby",
            "picturesque city square",
            "peaceful lakeside",
            "starlit balcony"
        ];

        this.poses = [
            "holding hands while walking",
            "sharing a romantic dance",
            "sitting close together",
            "sharing a tender moment",
            "enjoying a romantic dinner",
            "watching the sunset together",
            "sharing a warm embrace",
            "laughing together",
            "walking arm in arm",
            "sharing a sweet moment"
        ];

        this.moods = [
            "with loving gaze",
            "with tender smile",
            "with gentle expression",
            "with warm smile",
            "with affectionate look",
            "with sweet expression",
            "with romantic atmosphere",
            "with loving atmosphere",
            "with tender atmosphere",
            "with romantic mood"
        ];

        this.styles = [
            "elegant evening wear",
            "casual chic outfits",
            "smart casual attire",
            "formal evening dress",
            "stylish casual wear",
            "sophisticated outfits",
            "fashionable attire",
            "trendy casual wear",
            "elegant casual style",
            "smart fashionable look"
        ];

        this.lighting = [
            "soft romantic lighting",
            "warm candlelight",
            "golden hour sunlight",
            "gentle evening light",
            "soft ambient lighting",
            "warm sunset glow",
            "romantic mood lighting",
            "soft natural light",
            "warm atmospheric lighting",
            "gentle romantic glow"
        ];

        this.weather = [
            "on a clear evening",
            "under the stars",
            "during golden hour",
            "on a beautiful day",
            "in perfect weather",
            "under clear skies",
            "in ideal conditions",
            "on a lovely evening",
            "in perfect lighting",
            "under romantic skies"
        ];
    }

    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    generatePrompt() {
        const location = this.getRandomItem(this.locations);
        const pose = this.getRandomItem(this.poses);
        const mood = this.getRandomItem(this.moods);
        const style = this.getRandomItem(this.styles);
        const lighting = this.getRandomItem(this.lighting);
        const weather = this.getRandomItem(this.weather);

        return `A romantic couple ${pose} in ${location}, ${mood}, wearing ${style}, ${lighting}, ${weather}, professional photography, high quality, detailed, beautiful composition`;
    }

    generateMultiplePrompts(count = 5) {
        const prompts = [];
        for (let i = 0; i < count; i++) {
            prompts.push(this.generatePrompt());
        }
        return prompts;
    }
} 