export class g14 {
    constructor() {
        // Pantone colors for clothing
        this.pantoneColors = [
            "Персиковый", "Пурпурный", "Фиолетовый", "Желтый", "Классический синий",
            "Коралловый", "Ультрафиолет", "Зеленый", "Розовый кварц", "Серенити"
        ];

        this.clothings = [
            "микро боди с высоким разрезом",
            "мини комбина",
            "облегающий микро топ и юбка",
            "мягкое минималистичное микро платье",
            "минималистичный кроп топ и микро шорты",
            "микро стринги и бралетт",
            "микро комплект белья со стрингами",
            "бралетт и ультра-высокие трусики",
            "атласный микро бралетт и стринги",
            "боди с тонкими бретелями",
            "ультра высокое цельное боди",
            "oversize рубашка поверх стрингов",
            "топ-труба и микро юбка",
            "комплект прозрачного белья",
            "высокое боди",
            "бразильское боди",
            "французское белье",
            "боди с высоким разрезом",
            "трусики с высоким разрезом",
            "боди с открытыми боками",
            "стринги с высокой талией",
            "асимметричное боди с высоким разрезом",
            "боди с вырезами и высоким разрезом"
        ];

        // Feature generators for different attributes
        this.featureGenerators = {
            ethnicity: () => this.randomChoice(this.ethnicities),
            hair: () => `${this.randomChoice(this.hairColors)} волосы`,
            makeup: () => this.randomChoice(this.makeups),
            bust: () => `${this.randomChoice(this.bustSizes)} ${this.randomChoice(this.bustShapes)} грудь`,
            outfit: () => `в ${this.randomClothingWithColor()}`,
            location: () => this.generateLocation(),
            time: () => `во время ${this.randomChoice(this.timesOfDay)}`,
            mood: () => this.randomChoice(this.moods),
            lens: () => `снято на ${this.randomChoice(this.lenses)}`,
            lighting: () => this.randomChoice(this.lightings),
            depth: () => this.randomChoice(this.depths)
        };

        // Static lists
        this.ethnicities = ["Европейская"];
        this.hairColors = ["блондинка", "брюнетка", "шатенка", "рыжая", "серебристая", "омбре"];
        this.makeups = ["минимальный макияж", "натуральный макияж", "яркий макияж", "без макияжа"];
        this.bustSizes = ["маленькая", "средняя", "большая", "очень большая"];
        this.bustShapes = ["подтянутая", "округлая", "натуральная", "объемная", "стройная"];

        // Define a graph of location variations for diversity
        this.locationGraph = {
            studio: ["светлая студия", "темная студия", "индустриальная студия"],
            street: ["солнечная городская улица", "дождливая городская улица", "ночная городская улица"],
            forest: ["туманный лес", "тропический лес", "заснеженный лес"],
            beach: ["пляж на закате", "скалистый берег", "тропический пляж"],
            interior: ["уютное кафе", "интерьер библиотеки", "современная квартира"]
        };

        this.timesOfDay = ["золотой час", "рассвет", "полдень", "сумерки", "синий час", "закат"];
        this.moods = ["мечтательная атмосфера", "романтическое настроение", "стиль фэшн-редакции", "ностальгическое чувство", "драматическое настроение", "легкое настроение"];
        this.lenses = ["объектив 85мм", "объектив 50мм", "широкоугольный объектив 35мм", "макро объектив", "портретный объектив"];
        this.lightings = ["свет Рембрандта", "софтбокс", "естественный рассеянный свет", "контровой свет", "высококонтрастное освещение"];
        this.depths = ["малая глубина резкости", "большая глубина резкости"];
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
            location = `${location} с фоном ${variation}`;
        }
        return `в ${location}`;
    }

    // Generate a random prompt with nonlinear order of features
    generateRandomPrompt() {
        const base = `Полный рост девушки`;
        const features = this.shuffleArray(Object.keys(this.featureGenerators));
        const parts = features.map(key => this.featureGenerators[key]());
        let prompt = `${base}, ${parts.join(', ')}, ультра-реалистично, 8K`;

        if (prompt.length > 500) {
            prompt = prompt.slice(0, 500).replace(/\s+\S*$/, "");
        }
        return prompt;
    }
}
