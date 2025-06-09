export class G22 {
    constructor(apiConfig) {
        this.apiConfig = apiConfig;
        this.promptTemplates = this.initializePromptTemplates();
        this.qualityModifiers = this.initializeQualityModifiers();
        this.diversityEngine = new DiversityEngine();
    }

    initializePromptTemplates() {
        return {
            studio: "studio photography of a {age} and beautiful woman, natural appearance, Rembrandt lighting, {clothing}, {background}",
            outdoor: "a woman {action} {location}, dressed in {outfit}, hair in {hairstyle}, smiling, authentic look",
            candid: "Candid appearance, a full-face photo of a young woman, shot on a {camera}",
            realistic: "Realistic photo portrait of a woman {setting}, close up shot, {expression}",
            softLight: "Soft lighting photograph, portrait, woman {location}, {timeOfDay}",
            street: "a street portrait of a woman, wearing {clothing}, {hairDescription}, {eyeColor}",
            noMakeup: "No make up photo portrait of a woman {setting}",
            naturalism: "Naturalism photo of a young woman {pose}"
        };
    }

    initializeQualityModifiers() {
        return {
            naturalness: ["natural features", "authentic look", "candid appearance", "realistic photo"],
            lighting: ["soft lighting", "natural lighting", "golden hour", "diffused light"],
            technical: ["shallow depth of field", "shot on professional camera", "high resolution"],
            style: ["photojournalistic style", "documentary photography", "environmental portrait"]
        };
    }

    async generateBeautifulPortrait(options = {}) {
        const {
            style = this.getRandomStyle(),
            age = this.getRandomAge(),
            ethnicity = this.getRandomEthnicity(),
            setting = this.getRandomSetting(),
            mood = this.getRandomMood()
        } = options;

        // Построение базового промта
        let basePrompt = this.buildBasePrompt(style, age, ethnicity, setting, mood);
        
        // Добавление модификаторов качества
        basePrompt = this.addQualityModifiers(basePrompt);
        
        // Добавление технических параметров
        const technicalParams = this.buildTechnicalParams(style);
        
        // Обеспечение разнообразия
        const finalPrompt = await this.diversityEngine.ensureDiversity(basePrompt + technicalParams);
        
        return this.callGenerationAPI(finalPrompt);
    }

    buildBasePrompt(style, age, ethnicity, setting, mood) {
        const template = this.promptTemplates[style];
        const variables = {
            age: this.getAgeDescription(age),
            clothing: this.getRandomClothing(),
            background: this.getRandomBackground(),
            action: this.getRandomAction(),
            location: this.getRandomLocation(setting),
            outfit: this.getRandomOutfit(),
            hairstyle: this.getRandomHairstyle(),
            camera: this.getRandomCamera(),
            setting: setting,
            expression: this.getRandomExpression(mood),
            timeOfDay: this.getRandomTimeOfDay(),
            hairDescription: this.getRandomHairDescription(),
            eyeColor: this.getRandomEyeColor(),
            pose: this.getRandomPose()
        };

        return this.interpolateTemplate(template, variables);
    }

    addQualityModifiers(basePrompt) {
        const modifiers = [];
        
        // Добавляем модификаторы естественности
        modifiers.push(this.getRandomItem(this.qualityModifiers.naturalness));
        
        // Добавляем модификаторы освещения
        modifiers.push(this.getRandomItem(this.qualityModifiers.lighting));
        
        // Добавляем технические модификаторы
        if (Math.random() > 0.5) {
            modifiers.push(this.getRandomItem(this.qualityModifiers.technical));
        }
        
        return basePrompt + ", " + modifiers.join(", ");
    }

    buildTechnicalParams(style) {
        const params = [];
        
        // Соотношение сторон
        params.push("--ar " + this.getOptimalAspectRatio(style));
        
        // Стилизация (низкие значения для реализма)
        params.push("--stylize " + this.getRandomInt(0, 300));
        
        // Хаос для разнообразия
        params.push("--chaos " + this.getRandomInt(5, 15));
        
        // Без макияжа для естественности
        if (Math.random() > 0.3) {
            params.push("--no makeup");
        }
        
        return " " + params.join(" ");
    }

    getOptimalAspectRatio(style) {
        const ratios = {
            studio: "3:4",
            outdoor: "4:5",
            candid: "3:4",
            realistic: "3:4",
            softLight: "3:4",
            street: "3:4",
            noMakeup: "3:4",
            naturalism: "3:4"
        };
        return ratios[style] || "3:4";
    }

    // Методы для генерации случайных элементов
    getRandomStyle() {
        const styles = Object.keys(this.promptTemplates);
        return this.getRandomItem(styles);
    }

    getRandomAge() {
        return this.getRandomInt(18, 35);
    }

    getRandomEthnicity() {
        return this.getRandomItem([
            "European", "Asian", "African", "Latina", "Middle Eastern", "Mixed heritage"
        ]);
    }

    getRandomSetting() {
        return this.getRandomItem([
            "outdoor park", "coffee shop", "home interior", "garden setting", 
            "urban environment", "beach", "forest", "library"
        ]);
    }

    getRandomMood() {
        return this.getRandomItem([
            "happy and cheerful",
            "serene and peaceful",
            "confident and strong",
            "mysterious and intriguing",
            "playful and energetic",
            "elegant and sophisticated",
            "natural and relaxed",
            "professional and focused"
        ]);
    }

    getRandomAction() {
        return this.getRandomItem([
            "walking",
            "standing",
            "sitting",
            "posing",
            "looking around",
            "smiling",
            "laughing",
            "talking",
            "reading",
            "working"
        ]);
    }

    // Вспомогательные методы
    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    interpolateTemplate(template, variables) {
        return template.replace(/\{(\w+)\}/g, (match, key) => variables[key] || match);
    }

    async callGenerationAPI(prompt) {
        // Интеграция с API генерации (Midjourney, DALL-E, Stable Diffusion)
        try {
            const response = await fetch(this.apiConfig.endpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiConfig.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: prompt,
                    quality: 'hd',
                    response_format: 'url'
                })
            });
            
            return await response.json();
        } catch (error) {
            console.error('Ошибка генерации:', error);
            throw error;
        }
    }

    generateRandomPrompt(options = {}) {
        const {
            style = this.getRandomStyle(),
            age = this.getRandomAge(),
            ethnicity = this.getRandomEthnicity(),
            setting = this.getRandomSetting(),
            mood = this.getRandomMood(),
            maxModifiers = 3
        } = options;

        // Генерация базового промта
        let prompt = this.buildBasePrompt(style, age, ethnicity, setting, mood);
        
        // Добавление случайных модификаторов качества
        const modifiers = [];
        for(let i = 0; i < maxModifiers; i++) {
            const category = this.getRandomItem(Object.keys(this.qualityModifiers));
            const modifier = this.getRandomItem(this.qualityModifiers[category]);
            modifiers.push(modifier);
        }
        
        // Добавляем модификаторы к промту
        prompt += ", " + modifiers.join(", ");
        
        // Добавляем технические параметры
        prompt += this.buildTechnicalParams(style);
        
        return prompt;
    }

    getAgeDescription(age) {
        if (age < 25) return "young";
        if (age < 35) return "young adult";
        if (age < 45) return "adult";
        return "mature";
    }

    getRandomClothing() {
        return this.getRandomItem([
            "elegant dress",
            "casual outfit",
            "business attire",
            "summer clothes",
            "winter fashion",
            "formal wear",
            "stylish casual",
            "designer clothes",
            "fashionable outfit",
            "trendy clothing"
        ]);
    }

    getRandomBackground() {
        return this.getRandomItem([
            "studio background",
            "urban setting",
            "natural environment",
            "indoor location",
            "cityscape",
            "beautiful landscape",
            "architectural background",
            "minimalist backdrop",
            "artistic setting",
            "professional studio"
        ]);
    }

    getRandomLocation(setting) {
        const locations = {
            outdoor: [
                "in a beautiful park",
                "on a city street",
                "at the beach",
                "in a garden",
                "near a lake",
                "in a forest",
                "on a mountain",
                "in a public square"
            ],
            indoor: [
                "in a modern apartment",
                "in a coffee shop",
                "in a library",
                "in a studio",
                "in a museum",
                "in a restaurant",
                "in an office",
                "in a boutique"
            ]
        };
        
        return this.getRandomItem(locations[setting === "outdoor" ? "outdoor" : "indoor"]);
    }

    getRandomOutfit() {
        return this.getRandomItem([
            "elegant evening gown",
            "casual summer dress",
            "business suit",
            "designer jeans and blouse",
            "formal cocktail dress",
            "stylish casual wear",
            "fashionable street style",
            "professional business attire",
            "trendy casual outfit",
            "sophisticated formal wear"
        ]);
    }

    getRandomHairstyle() {
        return this.getRandomItem([
            "long flowing hair",
            "elegant updo",
            "casual waves",
            "sleek straight hair",
            "messy bun",
            "braided style",
            "curly hair",
            "pixie cut",
            "side-swept style",
            "natural waves"
        ]);
    }

    getRandomCamera() {
        return this.getRandomItem([
            "professional DSLR",
            "high-end mirrorless camera",
            "medium format camera",
            "vintage film camera",
            "modern digital camera",
            "professional portrait camera",
            "high-resolution camera",
            "studio camera",
            "premium photography equipment",
            "professional photography gear"
        ]);
    }

    getRandomExpression(mood) {
        const expressions = {
            happy: [
                "with a bright smile",
                "with a cheerful expression",
                "with a joyful look",
                "with a happy face",
                "with a radiant smile"
            ],
            serious: [
                "with a thoughtful expression",
                "with a contemplative look",
                "with a focused gaze",
                "with a professional demeanor",
                "with a composed expression"
            ],
            natural: [
                "with a natural smile",
                "with a relaxed expression",
                "with a casual look",
                "with an authentic smile",
                "with a genuine expression"
            ]
        };
        
        return this.getRandomItem(expressions[mood] || expressions.natural);
    }

    getRandomTimeOfDay() {
        return this.getRandomItem([
            "during golden hour",
            "in the morning light",
            "during sunset",
            "in the afternoon sun",
            "during sunrise",
            "in the evening light",
            "during blue hour",
            "in the midday sun",
            "during twilight",
            "in the soft daylight"
        ]);
    }

    getRandomHairDescription() {
        return this.getRandomItem([
            "long blonde hair",
            "dark brown hair",
            "auburn hair",
            "black hair",
            "chestnut hair",
            "light brown hair",
            "golden hair",
            "copper hair",
            "ash blonde hair",
            "rich brown hair"
        ]);
    }

    getRandomEyeColor() {
        return this.getRandomItem([
            "blue eyes",
            "brown eyes",
            "green eyes",
            "hazel eyes",
            "gray eyes",
            "amber eyes",
            "deep brown eyes",
            "bright blue eyes",
            "emerald green eyes",
            "warm brown eyes"
        ]);
    }

    getRandomPose() {
        return this.getRandomItem([
            "standing pose with elegant posture",
            "sitting pose with natural grace",
            "leaning pose with casual elegance",
            "walking pose with dynamic movement",
            "reclining pose with relaxed posture",
            "three-quarter pose with perfect angle",
            "profile pose with artistic composition",
            "candid pose with natural expression",
            "formal pose with professional stance",
            "casual pose with authentic feel"
        ]);
    }
}

// Класс для обеспечения разнообразия
class DiversityEngine {
    constructor() {
        this.recentPrompts = [];
        this.maxHistory = 50;
    }

    async ensureDiversity(prompt) {
        // Проверяем схожесть с недавними промтами
        const similarity = this.calculateSimilarity(prompt);
        
        if (similarity > 0.7) {
            // Модифицируем промт для увеличения разнообразия
            return this.modifyForDiversity(prompt);
        }
        
        this.addToHistory(prompt);
        return prompt;
    }

    calculateSimilarity(prompt) {
        // Упрощенный алгоритм расчета схожести
        // В реальном проекте можно использовать более сложные методы
        return Math.random(); // Заглушка
    }

    modifyForDiversity(prompt) {
        // Добавляем случайные элементы для увеличения разнообразия
        const diversityModifiers = [
            "unique lighting", "artistic angle", "creative composition",
            "interesting background", "dynamic pose", "expressive mood"
        ];
        
        const modifier = diversityModifiers[Math.floor(Math.random() * diversityModifiers.length)];
        return prompt + ", " + modifier;
    }

    addToHistory(prompt) {
        this.recentPrompts.push(prompt);
        if (this.recentPrompts.length > this.maxHistory) {
            this.recentPrompts.shift();
        }
    }
}