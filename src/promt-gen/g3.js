export class PromptGenerator3 {
    constructor() {
        // Физические характеристики
        this.hairColors = ['блондинка', 'брюнетка', 'шатенка', 'рыжая', 'каштановая', 'золотистая', 'медная', 'платиновая'];
        this.hairStyles = ['длинные', 'волнистые', 'распущенные', 'собранные в пучок', 'хвост', 'заплетенные', 'мокрые'];
        this.bodyTypes = ['стройная', 'атлетическая', 'подтянутая', 'спортивная', 'фитнес', 'изящная'];
        this.skinTones = ['загорелая', 'золотистая', 'бронзовая', 'смуглая', 'оливковая', 'карамельная'];
        
        // Одежда и аксессуары
        this.bikiniTypes = ['бикини', 'раздельный купальник', 'открытый купальник', 'бразильское бикини', 'минималистичное бикини', 'спортивное бикини'];
        this.bikiniColors = ['белое', 'черное', 'красное', 'синее', 'голубое', 'бирюзовое', 'розовое', 'коралловое', 'желтое', 'зеленое', 'фиолетовое'];
        this.accessories = ['солнечные очки', 'шляпа от солнца', 'пляжная сумка', 'браслет', 'ожерелье', 'анклет', 'парео'];
        
        // Места и окружение
        this.locations = ['тропический пляж', 'песчаный берег', 'лазурный берег', 'белоснежный пляж', 'скалистый берег', 'уединенная бухта', 'райский остров'];
        this.seaTypes = ['лазурное море', 'бирюзовая вода', 'кристально чистая вода', 'голубой океан', 'спокойное море', 'бескрайний океан'];
        this.timeOfDay = ['золотой час', 'закат', 'яркий солнечный день', 'утро', 'полдень'];
        
        // Позы и действия
        this.poses = ['стоит спиной', 'идет по берегу', 'смотрит на горизонт', 'стоит у кромки воды', 'заходит в воду', 'стоит по колено в воде'];
        this.actions = ['любуется закатом', 'смотрит на море', 'наслаждается видом', 'идет вдоль берега', 'поправляет волосы', 'держит шляпу'];
        
        // Фотографические элементы
        this.lighting = ['естественное освещение', 'золотистый свет', 'мягкий свет', 'контровой свет', 'теплое освещение'];
        this.photographyTerms = [
            'разрешение 8k', 'ультра HD', 'профессиональная фотография', 'идеальная композиция',
            'высококачественное фото', 'кинематографическое освещение', 'профессиональная ретушь'
        ];
        this.atmosphericElements = ['легкий бриз', 'морской бриз', 'брызги воды', 'мягкие волны', 'песчаные дюны', 'пальмы на фоне'];
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    getRandomElements(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    generateBeachPrompt() {
        const hairColor = this.getRandomElement(this.hairColors);
        const hairStyle = this.getRandomElement(this.hairStyles);
        const bodyType = this.getRandomElement(this.bodyTypes);
        const skinTone = this.getRandomElement(this.skinTones);
        const bikiniType = this.getRandomElement(this.bikiniTypes);
        const bikiniColor = this.getRandomElement(this.bikiniColors);
        const accessory = this.getRandomElement(this.accessories);
        const location = this.getRandomElement(this.locations);
        const seaType = this.getRandomElement(this.seaTypes);
        const timeOfDay = this.getRandomElement(this.timeOfDay);
        const pose = this.getRandomElement(this.poses);
        const action = this.getRandomElement(this.actions);
        const lighting = this.getRandomElement(this.lighting);
        const photographyTerms = this.getRandomElements(this.photographyTerms, 3);
        const atmosphericElement = this.getRandomElement(this.atmosphericElements);

        return `${bodyType} девушка с ${skinTone} кожей и ${hairStyle} ${hairColor} волосами в ${bikiniColor} ${bikiniType} ${pose} на ${location}. ${action}, ${seaType} простирается до горизонта. На ней ${accessory}, ${atmosphericElement}. ${timeOfDay}, ${lighting}. ${photographyTerms.join(', ')}. Фотореалистичная, гипердетализированная, вид сзади, идеальная композиция, профессиональная ретушь, качество шедевра`;
    }

    generateSunsetBeachPrompt() {
        const hairColor = this.getRandomElement(this.hairColors);
        const hairStyle = this.getRandomElement(this.hairStyles);
        const bodyType = this.getRandomElement(this.bodyTypes);
        const skinTone = this.getRandomElement(this.skinTones);
        const bikiniType = this.getRandomElement(this.bikiniTypes);
        const bikiniColor = this.getRandomElement(this.bikiniColors);
        const location = this.getRandomElement(this.locations);
        const seaType = this.getRandomElement(this.seaTypes);
        const pose = this.getRandomElement(this.poses);
        const photographyTerms = this.getRandomElements(this.photographyTerms, 2);

        return `Силуэт ${bodyType} девушки с ${hairStyle} волосами в ${bikiniColor} ${bikiniType} ${pose} на ${location} во время заката. Золотистое солнце опускается к горизонту, окрашивая ${seaType} в оранжево-розовые тона. ${photographyTerms.join(', ')}. Фотореалистичная, контровой свет, силуэт, вид сзади, романтическая атмосфера, качество шедевра`;
    }

    generateTropicalBeachPrompt() {
        const hairColor = this.getRandomElement(this.hairColors);
        const hairStyle = this.getRandomElement(this.hairStyles);
        const bodyType = this.getRandomElement(this.bodyTypes);
        const skinTone = this.getRandomElement(this.skinTones);
        const bikiniType = this.getRandomElement(this.bikiniTypes);
        const bikiniColor = this.getRandomElement(this.bikiniColors);
        const accessory = this.getRandomElement(this.accessories);
        const pose = this.getRandomElement(this.poses);
        const action = this.getRandomElement(this.actions);
        const photographyTerms = this.getRandomElements(this.photographyTerms, 2);

        return `${bodyType} девушка с ${skinTone} кожей и ${hairStyle} ${hairColor} волосами в ${bikiniColor} ${bikiniType} ${pose} на тропическом пляже с белоснежным песком. ${action}, бирюзовая вода переливается на солнце. Пальмы и тропическая растительность на фоне. На ней ${accessory}. ${photographyTerms.join(', ')}. Фотореалистичная, гипердетализированная, вид сзади, райский пейзаж, качество шедевра`;
    }

    generateRandomBeachPrompt() {
        const promptTypes = [
            this.generateBeachPrompt.bind(this),
            this.generateSunsetBeachPrompt.bind(this),
            this.generateTropicalBeachPrompt.bind(this)
        ];
        
        const randomPromptGenerator = this.getRandomElement(promptTypes);
        return randomPromptGenerator();
    }
}
