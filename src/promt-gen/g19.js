export class g19 {
    constructor() {
        this.categories = [
            "Artistic Photography", "High Fashion", "Elegant Minimalism",
            "Natural Beauty", "Modern Art", "Classic Style",
            "Experimental Photography", "Conceptual Art", "Abstract Aesthetics",
            "Artistic Minimalism", "Elegant Simplicity", "Artistic Naturalness"
        ];
        
        this.characters = [
            "young model with perfect features and natural beauty",
            "elegant girl with refined features and perfect proportions",
            "graceful model with angelic face and slender figure",
            "artistic nature with mysterious gaze and perfect forms",
            "modern muse with perfect symmetry and natural grace",
            "classic beauty with noble features and perfect lines"
        ];
        
        this.outfits = [
            "minimalist dress with thinnest straps and open back",
            "elegant top with deep neckline and bare shoulders",
            "artistic outfit with asymmetric cut and finest details",
            "conceptual suit with minimalist silhouette and open décolletage",
            "abstract dress with thinnest straps and deep neckline",
            "artistic outfit with elegant cut and open back"
        ];
        
        this.locations = [
            "art gallery with minimalist interior",
            "photo studio with perfect lighting",
            "exhibition hall with conceptual design",
            "abstract space with artistic atmosphere",
            "art studio with dramatic lighting",
            "conceptual location with minimalist aesthetics"
        ];
        
        this.poses = [
            "graceful pose with elegant body curve",
            "artistic position with minimalist movement",
            "elegant stance with perfect balance",
            "conceptual pose with abstract gesture",
            "minimalist position with artistic curve",
            "artistic pose with dramatic angle"
        ];
        
        this.styles = [
            "artistic photography with minimalist aesthetics",
            "conceptual art with dramatic lighting",
            "minimalist style with artistic approach",
            "abstract aesthetics with perfect balance",
            "experimental shooting with finest details",
            "classic photography with modern view"
        ];
        
        this.lighting = [
            "artistic lighting with dramatic shadows",
            "minimalist light with perfect balance",
            "contrast highlights with finest transitions",
            "natural lighting with artistic approach",
            "studio light with dramatic effect",
            "conceptual lighting with minimalist aesthetics"
        ];
        
        this.effects = [
            "artistic highlights with finest transitions",
            "dramatic shadows with perfect balance",
            "aerial perspective with minimalist approach",
            "atmospheric haze with artistic effect",
            "natural contrast with dramatic lighting",
            "artistic blur with conceptual style"
        ];
        
        this.resolutions = [
            "artistic quality with perfect detail",
            "professional shooting with minimalist approach"
        ];
        
        this.angles = [
            "artistic angle with dramatic lighting",
            "conceptual angle with perfect balance"
        ];
    }

    generatePrompt() {
        const rand = arr => arr[Math.floor(Math.random() * arr.length)];
        const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        
        // Select 1-2 categories
        const numCategories = randInt(1, 2);
        const selectedCategories = [];
        const categoriesCopy = [...this.categories];
        for (let i = 0; i < numCategories; i++) {
            const index = Math.floor(Math.random() * categoriesCopy.length);
            selectedCategories.push(categoriesCopy.splice(index, 1)[0]);
        }
        
        // Select key elements
        const selectedCharacter = rand(this.characters);
        const selectedOutfit = rand(this.outfits);
        const selectedLocation = rand(this.locations);
        const selectedPose = rand(this.poses);
        
        // Select artistic parameters
        const selectedStyle = rand(this.styles);
        const selectedLighting = rand(this.lighting);
        const selectedEffect = rand(this.effects);
        
        // Select specifications
        const selectedResolution = rand(this.resolutions);
        const selectedAngle = rand(this.angles);
        
        // Construct the prompt
        return `${selectedCharacter} in ${selectedOutfit} ${selectedPose} in ${selectedLocation}, in a vibrant, artistic, dynamic scene, ${selectedStyle} with ${selectedLighting}, ${selectedEffect}, ${selectedResolution}, ${selectedAngle}`;
    }

    generateMultiplePrompts(count = 5) {
        const results = [];
        for (let i = 0; i < count; i++) {
            results.push(this.generatePrompt());
        }
        return results;
    }
} 