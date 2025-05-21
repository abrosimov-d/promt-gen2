export class g13 {
    constructor() {
      this.pantoneColors = [
        "Peach Fuzz", "Viva Magenta", "Very Peri", "Illuminating Yellow", "Classic Blue",
        "Living Coral", "Ultra Violet", "Greenery", "Rose Quartz", "Serenity"
      ];
  
      this.colorPalettes = [
        ["Viva Magenta", "Rose Quartz"],
        ["Peach Fuzz", "Serenity"],
        ["Very Peri", "Classic Blue"],
        ["Greenery", "Illuminating Yellow"]
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
  
      this.featureGenerators = {
        ethnicity: () => this.randomChoice(this.ethnicities),
        appearance: () => `${this.randomChoice(this.hairColors)} hair with ${this.randomChoice(this.makeups)}`,
        bust: () => `${this.randomChoice(this.bustSizes)} ${this.randomChoice(this.bustShapes)} bust`,
        outfit: () => `wearing a ${this.randomClothingWithColor()}`,
        location: () => this.generateLocation(),
        time: () => `during ${this.randomChoice(this.timesOfDay)}`,
        mood: () => this.randomChoice(this.moods),
        pose: () => this.randomChoice(this.poses),
        emotion: () => this.randomChoice(this.emotions),
        lens: () => `shot with a ${this.randomChoice(this.lenses)}`,
        lighting: () => this.randomChoice(this.lightings),
        depth: () => this.randomChoice(this.depths),
        shoot: () => `in a ${this.randomChoice(this.shoots)}`
      };
  
      this.ethnicities = ["European"];
      this.hairColors = ["blonde", "brunette", "black", "red", "silver", "ombre"];
      this.makeups = ["minimal makeup", "natural makeup", "bold makeup", "no makeup"];
      this.bustSizes = ["small", "medium", "large", "extra-large"];
      this.bustShapes = ["perky", "round", "natural", "voluminous", "slender"];
  
      this.locationGraph = {
        studio: ["bright studio", "dark studio", "industrial studio"],
        street: ["sunlit urban street", "rainy urban street", "night-time urban street"],
        forest: ["misty forest", "tropical forest", "snowy forest"],
        beach: ["beach at sunset", "rocky shoreline", "tropical beach"],
        interior: ["cozy café", "library interior", "modern apartment interior"]
      };
  
      this.timesOfDay = ["golden hour", "dawn", "midday", "twilight", "blue hour", "sunset"];
      this.moods = ["dreamy atmosphere", "romantic vibe", "fashion editorial style", "nostalgic feel", "dramatic mood", "lighthearted tone"];
      this.emotions = ["playful smile", "serene gaze", "confident expression", "shy glance", "focused look"];
      this.poses = ["standing confidently", "walking slowly", "sitting on a chair", "kneeling", "lying on a couch"];
      this.lenses = ["85mm lens", "50mm lens", "35mm wide-angle lens", "macro lens", "portrait lens"];
      this.lightings = ["Rembrandt lighting", "softbox lighting", "natural diffuse light", "backlighting", "high-contrast lighting"];
      this.depths = ["shallow depth of field", "deep depth of field"];
      this.shoots = ["editorial fashion shoot", "artistic fine-art photo", "fitness catalog shoot", "minimalist portrait series"];
  
      this.history = [];
    }
  
    randomChoice(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  
    randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    randomClothingWithColor() {
      const clothing = this.randomChoice(this.clothings);
      const palette = this.randomChoice(this.colorPalettes);
      const color = this.randomChoice(palette);
      return `${color} ${clothing}`;
    }
  
    shuffleArray(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
  
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
  
    generateRandomPrompt() {
      let prompt;
      let attempts = 0;
  
      do {
        const featureKeys = this.shuffleArray(Object.keys(this.featureGenerators)).slice(0, this.randomInt(6, 10));
        const parts = featureKeys.map(key => this.featureGenerators[key]());
        prompt = `Full-body shot of a ${parts.join(', ')}, ultra-realistic, 8K`;
        if (prompt.length > 500) prompt = prompt.slice(0, 500).replace(/\s+\S*$/, "");
        attempts++;
      } while (this.history.includes(prompt) && attempts < 10);
  
      this.history.push(prompt);
      if (this.history.length > 20) this.history.shift();
      return prompt;
    }
  }
  