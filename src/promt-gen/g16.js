export class g16 {
    constructor() {
      this.faces = [
        "an incredibly beautiful woman with soft, natural features",
        "a breathtaking girl with expressive eyes and sensual lips",
        "a stunning beauty with perfectly symmetrical face and warm expression"
      ];
  
      this.hairstyles = [
        "long flowing hair",
        "messy bun",
        "sleek high ponytail",
        "loose waves",
        "braided crown",
        "short bob cut",
        "curly shoulder-length hair",
        "wet hair look",
        "side-swept bangs",
        "straight and shiny hair"
      ];
  
      this.makeups = [
        "natural but radiant makeup with glossy lips",
        "soft foundation with shimmering eyes and flushed cheeks",
        "dewy skin with subtle highlights and nude lipstick"
      ];
  
      this.outfits = [
        "a sheer tank top and tight shorts",
        "a silky robe loosely tied, revealing her curves",
        "an unbuttoned blouse over lace panties",
        "a thin white T-shirt without a bra",
        "a crop top and minimal thong",
        "a satin camisole and high-cut panties",
        "a lace bralette with matching shorts",
        "a see-through oversized shirt",
        "a sports bra and low-rise briefs",
        "a transparent mesh top and G-string",
        "a low-cut nightgown",
        "a minimalist halter top",
        "a cotton crop top and tiny shorts",
        "a silk slip dress",
        "a sheer kimono with lingerie",
        "a buttoned shirt barely covering her body",
        "a bandeau top with string bikini bottom",
        "a lightweight robe slipping off her shoulder",
        "a tube top and lace panties",
        "a loose knit sweater and no underwear"
      ];
  
      this.shoes = [
        "clear platform heels",
        "high-heeled house slippers",
        "tall stiletto sandals",
        "minimal strap heels on a high platform",
        "lace-up high heels",
        "glossy black pumps",
        "transparent heels with ankle strap",
        "metallic silver stilettos",
        "velvet high-heeled mules",
        "open-toe platform wedges"
      ];
  
      this.accessories = [
        "large hoop earrings",
        "a simple gold chain around her neck",
        "thin silver rings on her fingers",
        "a leather choker",
        "a delicate anklet",
        "a wristwatch",
        "subtle ear cuffs"
      ];
  
      this.backgrounds = [
        "a softly lit modern bedroom",
        "a cozy living room with warm tones",
        "a bright kitchen with daylight",
        "a sunlit bathroom with a mirror",
        "a minimalist studio apartment"
      ];
  
      this.lightings = [
        "natural soft daylight",
        "diffused warm sunlight",
        "perfect white balance studio light",
        "balanced warm interior lighting"
      ];
  
      this.quality = "full-frame DSLR, ultra sharp, perfect white balance, realistic colors";
      this.style = "hyper-realistic, intimate mood, sensual but tasteful, everyday setting";
    }
  
    generatePrompt() {
      const rand = arr => arr[Math.floor(Math.random() * arr.length)];
  
      const prompt = `Hyper-realistic full-frame photo of ${rand(this.faces)} with ${rand(this.hairstyles)}, ${rand(this.makeups)}, wearing ${rand(this.outfits)} and ${rand(this.shoes)}, accessorized with ${rand(this.accessories)}, in ${rand(this.backgrounds)} with ${rand(this.lightings)}, ${this.quality}, ${this.style}.`;
  
      return prompt;
    }
  }
  