export class g18 {
    constructor() {
        this.categories = [
            "Современный гламур", "Этнические мотивы", "Городской стиль",
            "Спортивная динамика", "Пляжная эстетика", "Уличная мода",
            "Высокая мода", "Минимализм", "Классический стиль"
        ];
        
        this.characters = [
            "молодая атлетическая модель с идеальными чертами лица и выразительными глазами",
            "юная плюм-модель с нежными чертами лица и естественной красотой",
            "грациозная танцовщица с ангельским лицом и совершенными пропорциями",
            "элегантная модель с утонченными чертами лица и загадочным взглядом",
            "современная дива с идеальной симметрией лица",
            "классическая красавица с классическими чертами лица и очаровательной улыбкой"
        ];

        this.hairstyles = [
            "с распущенными волосами", "с пляжными волнами", "с мокрыми волосами",
            "с собранными в пучок волосами", "с заплетенными косами", "с волнистыми локонами",
            "с прямыми волосами", "с растрепанными волосами", "с влажными волосами"
        ];
        
        this.swimsuits = [
            "минималистичный монокини с тонкими бретелями и идеальным кроем",
            "лаконичное бикини с тончайшими завязками и безупречными пропорциями",
            "цельный купальник с минималистичным вырезом и элегантными линиями",
            "простой купальник с тонкими бретелями и идеальной посадкой",
            "минималистичное бикини с тончайшими бретелями и безупречным кроем",
            "лаконичный купальник с элегантным вырезом и идеальными пропорциями"
        ];

        this.accessories = [
            "с солнцезащитными очками", "с широкополой шляпой", "с пляжной сумкой",
            "с браслетами", "с ожерельем", "с цветами в волосах",
            "с пляжным полотенцем", "с пляжным зонтом", "с венком из цветов"
        ];
        
        this.locations = [
            "современный городской пляж", "люксовая яхта",
            "пляж с белым песком", "городская набережная",
            "современный бассейн", "прибрежный променад"
        ];
        
        this.actions = [
            "прогулка по пляжу", "загорание на шезлонге",
            "купание в море", "отдых у бассейна",
            "пляжный волейбол"
        ];

        this.weather = [
            "в солнечный день", "на закате", "в золотой час",
            "в ясную погоду", "в легкий бриз", "в теплый вечер"
        ];
        
        this.styles = [
            "фотографический гиперреализм", "цифровой арт в стиле модных журналов",
            "современная фотография", "редакционная съемка",
            "минималистичный стиль", "классическая фотография"
        ];
        
        this.lighting = [
            "естественный солнечный свет", "золотой час",
            "мягкое вечернее освещение", "яркий дневной свет",
            "мягкое утреннее освещение"
        ];
        
        this.effects = [
            "естественные блики", "мягкие тени",
            "воздушная перспектива", "атмосферная дымка",
            "естественный контраст"
        ];
        
        this.resolutions = [
            "8K детализация", "профессиональное качество"
        ];
        
        this.angles = [
            "естественный ракурс", "вид с уровня глаз"
        ];
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    getRandomElements(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
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
        const selectedSwimsuit = rand(this.swimsuits);
        const selectedLocation = rand(this.locations);
        const selectedAction = rand(this.actions);
        
        // Select artistic parameters
        const selectedStyle = rand(this.styles);
        const selectedLighting = rand(this.lighting);
        const selectedEffect = rand(this.effects);
        
        // Select specifications
        const selectedResolution = rand(this.resolutions);
        const selectedAngle = rand(this.angles);
        
        // Construct the prompt
        return `${selectedCharacter} в ${selectedSwimsuit} ${selectedAction} на ${selectedLocation}, in a vibrant, colorful, dynamic scene, ${selectedStyle} с ${selectedLighting}, ${selectedEffect}, ${selectedResolution}, ${selectedAngle}`;
    }

    generateMultiplePrompts(count = 5) {
        const results = [];
        for (let i = 0; i < count; i++) {
            results.push(this.generatePrompt());
        }
        return results;
    }
}
