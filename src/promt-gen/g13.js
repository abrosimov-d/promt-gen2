export class g13 {
    constructor() {
      // First, define static lists required for generator logic
      this.pantoneColors = [
        "Peach Fuzz", "Viva Magenta", "Very Peri", "Illuminating Yellow", "Classic Blue",
        "Living Coral", "Ultra Violet", "Greenery", "Rose Quartz", "Serenity"
      ];
  
      this.clothings = [
        "micro bodysuit with high-cut hips",
        "mini slip",
        "tight-fitting micro top and skirt",
        "soft minimalist micro dress",
        "minimalist crop tank and micro shorts",
        "micro string bralette and thong",
        "micro lingerie set with string-side briefs",
        "string bralette and ultra-high-cut panties",
        "satin micro bralette and string thong",
        "strappy micro bodysuit",
        "ultra high-cut one-piece bodysuit",
        "oversized shirt worn over string thong",
        "tube top and micro skirt",
        "sheer string underwear set",
        "high-cut bodysuit",
        "Brazilian cut bodysuit",
        "French cut underwear",
        "high leg bodysuit",
        "high leg cut panties",
        "cheeky cut bodysuit",
        "string high-rise thong",
        "asymmetric high-leg bodysuit",
        "cut-out high-leg leotard"
      ];
  
      // Feature generators for different attributes
      this.featureGenerators = {
        ethnicity: () => this.randomChoice(this.ethnicities),
        hair: () => `${this.randomChoice(this.hairColors)} hair`,
        makeup: () => this.randomChoice(this.makeups),
        bust: () => `${this.randomChoice(this.bustSizes)} ${this.randomChoice(this.bustShapes)} bust`,
        outfit: () => `wearing a ${this.randomClothingWithColor()}`,
        location: () => this.generateLocation(),
        time: () => `during ${this.randomChoice(this.timesOfDay)}`,
        mood: () => this.randomChoice(this.moods),
        lens: () => `shot with a ${this.randomChoice(this.lenses)}`,
        lighting: () => this.randomChoice(this.lightings),
        depth: () => this.randomChoice(this.depths)
      };
  
      // Static lists
      this.ethnicities = ["European"];
      this.hairColors = ["blonde", "brunette", "black", "red", "silver", "ombre"];
      this.makeups = ["minimal makeup", "natural makeup", "bold makeup", "no makeup"];
      this.bustSizes = ["small", "medium", "large", "extra-large"];
      this.bustShapes = ["perky", "round", "natural", "voluminous", "slender"];
  
      // Define a graph of location variations for diversity
      this.locationGraph = {
        studio: ["bright studio", "dark studio", "industrial studio"],
        street: ["sunlit urban street", "rainy urban street", "night-time urban street"],
        forest: ["misty forest", "tropical forest", "snowy forest"],
        beach: ["beach at sunset", "rocky shoreline", "tropical beach"],
        interior: ["cozy café", "library interior", "modern apartment interior"]
      };
  
      this.timesOfDay = ["golden hour", "dawn", "midday", "twilight", "blue hour", "sunset"];
      this.moods = ["dreamy atmosphere", "romantic vibe", "fashion editorial style", "nostalgic feel", "dramatic mood", "lighthearted tone"];
      this.lenses = ["85mm lens", "50mm lens", "35mm wide-angle lens", "macro lens", "portrait lens"];
      this.lightings = ["Rembrandt lighting", "softbox lighting", "natural diffuse light", "backlighting", "high-contrast lighting"];
      this.depths = ["shallow depth of field", "deep depth of field"];
    }
  
    // Helper: pick random from array
    randomChoice(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  
    // Combine clothing item with a random Pantone color
    randomClothingWithColor() {
      const clothing = this.randomChoice(this.clothings);
      const color = this.randomChoice(this.pantoneColors);
      return `${color} ${clothing}`;
    }
  
    // Shuffle array in-place
    shuffleArray(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
  
    // Generate a more diverse location by sampling nodes in the locationGraph
    generateLocation() {
      const categories = Object.keys(this.locationGraph);
      const start = this.randomChoice(categories);
      let location = this.randomChoice(this.locationGraph[start]);
      if (Math.random() < 0.3) {
        const other = this.randomChoice(categories.filter(cat => cat !== start));
        const variation = this.randomChoice(this.locationGraph[other]);
        location = `${location} with a backdrop of ${variation}`;
      }
      return `in ${location}`;
    }
  
    // Generate a random prompt with nonlinear order of features
    generateRandomPrompt() {
      const base = `Full-body shot of a`;
      const features = this.shuffleArray(Object.keys(this.featureGenerators));
      const parts = features.map(key => this.featureGenerators[key]());
      let prompt = `${base} ${parts.join(', ')}, ultra-realistic, 8K`;
  
      if (prompt.length > 500) {
        prompt = prompt.slice(0, 500).replace(/\s+\S*$/, "");
      }
      return prompt;
    }
  }
  