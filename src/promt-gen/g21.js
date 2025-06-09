export class g21 {
    constructor() {
        this.categories = [
            "Elegant Photography", "Luxury Portraits", "High Fashion",
            "Artistic Beauty", "Cinematic Style", "Professional Photography"
        ];
        
        this.characters = [
            "beautiful blonde woman with perfect figure and elegant posture",
            "stunning young woman with hourglass figure and graceful pose",
            "elegant lady with long flowing hair and confident smile",
            "gorgeous model with toned body and natural beauty",
            "sophisticated woman with perfect proportions and alluring gaze",
            "charming girl with delicate features and radiant smile"
        ];
        
        this.outfits = [
            "elegant white dress with flowing fabric",
            "luxurious black mini skirt with designer details",
            "sophisticated red lingerie with premium quality",
            "transparent white fabric with delicate drape",
            "fashionable body art with artistic elements",
            "designer outfit with high-end fashion details",
            "elegant evening gown with crystal embellishments",
            "luxury silk dress with designer accessories",
            "high-fashion cocktail dress with premium details",
            "sophisticated business attire with designer elements",
            "elegant swimwear with luxury styling",
            "designer casual wear with premium quality",
            "high-end sportswear with fashion-forward design",
            "luxury beachwear with sophisticated style",
            "elegant party dress with designer touches"
        ];
        
        this.locations = [
            "luxury loft with dramatic lighting",
            "elegant office with executive desk",
            "high-end photography studio with professional setup",
            "modern apartment with designer furniture",
            "upscale hotel suite with panoramic windows",
            "exclusive venue with artistic atmosphere",
            "premium location with cinematic backdrop",
            "elite space with sophisticated decor",
            "luxurious setting with dramatic shadows",
            "prestigious environment with professional lighting"
        ];
        
        this.poses = [
            "sitting pose with elegant posture and confident stance",
            "lying pose with graceful body curve and alluring position",
            "standing pose with perfect posture and natural elegance",
            "leaning pose with sophisticated angle and artistic composition",
            "reclining pose with sensual curve and dramatic lighting",
            "posing with dynamic movement and professional style"
        ];
        
        this.styles = [
            "cinematic photography with dramatic lighting",
            "high fashion photography with artistic composition",
            "professional portrait with perfect lighting",
            "artistic photography with creative framing",
            "luxury photography with premium quality",
            "elegant photography with sophisticated style"
        ];
        
        this.lighting = [
            "dramatic lighting with perfect shadows and highlights",
            "cinematic lighting with artistic contrast",
            "professional lighting with studio quality",
            "dramatic shadows with elegant highlights",
            "artistic lighting with creative effects",
            "luxury lighting with premium atmosphere"
        ];
        
        this.effects = [
            "high resolution with perfect detail",
            "professional quality with sharp focus",
            "cinematic effect with dramatic mood",
            "artistic touch with creative composition",
            "luxury finish with premium quality",
            "elegant style with sophisticated look"
        ];
        
        this.resolutions = [
            "4K quality with perfect detail",
            "high resolution with professional grade",
            "ultra HD with crystal clear focus",
            "premium quality with perfect clarity",
            "professional grade with perfect sharpness",
            "high-end quality with perfect definition"
        ];
        
        this.angles = [
            "low angle with dramatic perspective",
            "eye level with natural view",
            "high angle with artistic composition",
            "side angle with elegant framing",
            "three-quarter view with perfect lighting",
            "profile view with dramatic shadows"
        ];
    }

    generatePrompt() {
        const rand = arr => arr[Math.floor(Math.random() * arr.length)];
        const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        
        // Select key elements
        const selectedCharacter = rand(this.characters);
        const selectedOutfit = rand(this.outfits);
        const selectedLocation = rand(this.locations);
        const selectedPose = rand(this.poses);
        
        // Select artistic parameters
        const selectedStyle = rand(this.styles);
        const selectedLighting = rand(this.lighting);
        const selectedEffect = rand(this.effects);
        
        // Construct the prompt
        return `${selectedCharacter} in ${selectedOutfit} ${selectedPose} in ${selectedLocation}, ${selectedStyle}, ${selectedLighting}, ${selectedEffect}`;
    }

    generateMultiplePrompts(count = 5) {
        const results = [];
        for (let i = 0; i < count; i++) {
            results.push(this.generatePrompt());
        }
        return results;
    }
} 