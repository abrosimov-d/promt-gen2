export class g20 {
    constructor() {
        this.categories = [
            "Urban Street Photography", "City Life Portraits", "Metropolitan Style",
            "Urban Fashion", "City Art", "Metropolitan Culture"
        ];
        
        this.characters = [
            "young woman in revealing white bikini with perfect curves",
            "stylish girl in tiny white bikini with toned body",
            "elegant lady in minimal white bikini with hourglass figure",
            "fashionable woman in micro white bikini with slim waist",
            "urban beauty in string white bikini with athletic body",
            "modern girl in thong white bikini with fit physique"
        ];
        
        this.outfits = [
            "micro white bikini with string ties",
            "tiny white bikini with minimal coverage",
            "string white bikini with thong bottom",
            "minimal white bikini with micro cut",
            "micro white bikini with high cut",
            "string white bikini with cheeky bottom",
            "white bikini with thin straps and open back",
            "white bikini with deep neckline and side ties",
            "white bikini with elegant cut and thin strings",
            "white bikini with minimal design and high waist",
            "white bikini with micro coverage and thin straps",
            "white bikini with string design and cheeky cut"
        ];
        
        this.locations = [
            "luxury rooftop pool with city skyline and passing planes",
            "penthouse apartment with panoramic windows and city lights",
            "modern hotel pool with city views and urban luxury",
            "urban beach with city backdrop and passing ships",
            "luxury yacht marina with modern boats and city backdrop",
            "contemporary hotel pool with city views and urban luxury",
            "modern spa with city views and urban tranquility",
            "luxury penthouse with modern decor and city panorama",
            "urban rooftop terrace with city view and passing clouds",
            "modern beach club with city skyline and urban atmosphere",
            "luxury pool deck with city views and urban elegance",
            "contemporary beach house with city backdrop and urban style",
            "modern resort pool with city skyline and urban luxury",
            "urban beachfront with city lights and urban energy",
            "luxury pool area with city views and urban sophistication",
            "modern beach bar with city backdrop and urban vibe",
            "contemporary pool lounge with city skyline and urban comfort",
            "urban beach resort with city views and urban luxury",
            "modern pool terrace with city backdrop and urban elegance",
            "luxury beach club with city skyline and urban atmosphere",
            "contemporary pool deck with city views and urban style",
            "modern beach house with city backdrop and urban luxury",
            "urban pool area with city skyline and urban sophistication",
            "luxury beachfront with city lights and urban energy",
            "modern pool lounge with city views and urban comfort",
            "contemporary beach resort with city backdrop and urban vibe",
            "urban pool terrace with city skyline and urban elegance",
            "luxury beach club with city views and urban atmosphere",
            "modern pool deck with city backdrop and urban style",
            "contemporary beach house with city skyline and urban luxury",
            "urban pool area with city views and urban sophistication",
            "luxury beachfront with city backdrop and urban energy",
            "modern pool lounge with city skyline and urban comfort",
            "contemporary beach resort with city views and urban vibe",
            "urban pool terrace with city backdrop and urban elegance",
            "luxury beach club with city skyline and urban atmosphere",
            "modern pool deck with city views and urban style",
            "contemporary beach house with city backdrop and urban luxury",
            "urban pool area with city skyline and urban sophistication",
            "luxury beachfront with city views and urban energy",
            "modern pool lounge with city backdrop and urban comfort",
            "contemporary beach resort with city skyline and urban vibe",
            "urban pool terrace with city views and urban elegance",
            "luxury beach club with city backdrop and urban atmosphere",
            "modern pool deck with city skyline and urban style",
            "contemporary beach house with city views and urban luxury",
            "urban pool area with city backdrop and urban sophistication",
            "luxury beachfront with city skyline and urban energy",
            "modern pool lounge with city views and urban comfort",
            "contemporary beach resort with city backdrop and urban vibe"
        ];
        
        this.poses = [
            "walking pose with natural movement through city streets",
            "leaning against urban wall with casual stance",
            "sitting on city steps with relaxed pose",
            "standing with hand on hip against city backdrop",
            "crossing busy street with dynamic movement",
            "looking over shoulder with urban skyline"
        ];
        
        this.styles = [
            "street photography with cinematic lighting and urban atmosphere",
            "urban portrait with dramatic shadows and city mood",
            "city scene with artistic composition and urban energy",
            "street style with fashion focus and metropolitan feel",
            "urban art with creative framing and city spirit",
            "city life with documentary feel and urban reality"
        ];
        
        this.lighting = [
            "dramatic sunset lighting with golden rays and city glow",
            "vibrant neon lighting with electric colors and urban pulse",
            "stunning sunrise lighting with warm orange tones and city sparkle",
            "moody blue hour lighting with deep shadows and city lights",
            "dramatic backlighting with sun rays and city silhouette",
            "vibrant pool lighting with water reflections and city shimmer",
            "stunning spotlight with dramatic shadows and urban contrast",
            "moody night lighting with city neon and urban atmosphere",
            "dramatic window lighting with sun beams and city views",
            "vibrant sunset lighting with orange glow and city backdrop",
            "stunning golden hour lighting with warm rays and urban glow",
            "moody storm lighting with dramatic clouds and city mood"
        ];
        
        this.effects = [
            "shallow depth of field with bokeh and city lights",
            "motion blur with dynamic feel and urban movement",
            "grain effect with film look and city atmosphere",
            "vignette with artistic touch and urban mood",
            "color grading with urban palette and city tones",
            "high contrast with dramatic mood and urban energy"
        ];
        
        this.resolutions = [
            "high quality with perfect detail and urban clarity",
            "professional grade with sharp focus and city precision"
        ];
        
        this.angles = [
            "low angle with urban perspective and city grandeur",
            "eye level with natural view and urban reality"
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