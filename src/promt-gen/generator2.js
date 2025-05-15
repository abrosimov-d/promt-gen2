export class PromptGenerator2 {
    constructor() {
        // Физические характеристики
        this.hairColors = ['блондинка', 'брюнетка', 'шатенка', 'рыжая', 'каштановая', 'розовая', 'синяя', 'фиолетовая', 'серебристая', 'платиновая', 'золотистая', 'медная', 'радужная', 'пастельно-розовая', 'пастельно-голубая', 'мятно-зеленая'];
        this.hairStyles = ['длинные', 'короткие', 'волнистые', 'прямые', 'кудрявые', 'заплетенные', 'хвост', 'каре', 'пикси', 'ирокез', 'андеркат', 'растрепанный пучок', 'французская коса', 'два пучка', 'асимметричная'];
        this.eyeColors = ['голубые', 'зеленые', 'карие', 'ореховые', 'серые', 'янтарные', 'фиолетовые', 'золотистые', 'разного цвета', 'хрустальные', 'изумрудные', 'сапфировые', 'рубиновые'];
        this.skinTones = ['фарфоровая', 'светлая', 'средняя', 'оливковая', 'загорелая', 'смуглая', 'темная', 'фарфоровая', 'золотистая'];
        
        // Локации из Fortnite
        this.fortniteLocations = [
            'Tilted Towers', 'Pleasant Park', 'Retail Row', 'Lazy Lake', 
            'Sweaty Sands', 'Misty Meadows', 'Slurpy Swamp', 'Weeping Woods',
            'Steamy Stacks', 'Craggy Cliffs', 'The Spire', 'Coral Castle',
            'The Shark', 'The Grotto', 'The Agency', 'The Rig',
            'Stark Industries', 'Doom\'s Domain', 'Holly Hedges', 'Salty Springs'
        ];
        
        // Оружие из Fortnite
        this.fortniteWeapons = [
            'штурмовая винтовка', 'дробовик', 'снайперская винтовка', 'пистолет', 
            'ракетница', 'гранатомет', 'миниган', 'лук', 'арбалет',
            'тактический дробовик', 'помповый дробовик', 'тяжелая снайперская винтовка',
            'легендарный скар', 'боевой автомат', 'тактический пистолет-пулемет'
        ];
        
        // Экипировка из Fortnite
        this.fortniteOutfits = [
            'боевой костюм', 'тактическая экипировка', 'броня', 'кожаная куртка',
            'неоновый костюм', 'футуристический комбинезон', 'военная форма',
            'спортивная одежда', 'стильный наряд', 'космический скафандр',
            'стелс-костюм', 'защитный жилет', 'боевой шлем'
        ];
        
        // Цвета экипировки
        this.outfitColors = [
            'черная', 'белая', 'красная', 'синяя', 'зеленая', 'фиолетовая', 
            'розовая', 'желтая', 'неоновая', 'металлическая', 'камуфляжная',
            'золотая', 'серебряная', 'радужная', 'огненная', 'ледяная'
        ];
        
        // Сцены из Fortnite
        this.fortniteScenes = [
            'перестрелка', 'строительство форта', 'прыжок с парашютом', 'погоня за зоной',
            'открытие сундука', 'сбор ресурсов', 'снайперская дуэль', 'штурм базы противника',
            'защита позиции', 'исследование подземелья', 'побег от шторма', 'засада',
            'сражение с боссом', 'использование портала', 'езда на транспорте', 'выполнение задания'
        ];
        
        // Эффекты и элементы
        this.specialEffects = [
            'взрывы', 'перестрелка', 'строительство', 'разрушение', 'дым',
            'огонь', 'молнии', 'щит', 'исцеление', 'портал', 'телепортация',
            'буря', 'туман', 'дождь', 'снег', 'лава'
        ];
        
        // Фотографические термины
        this.photographyTerms = [
            'разрешение 8k', 'ультра HD', 'профессиональная фотография', 'студийный снимок',
            'идеальная композиция', 'шедевр', 'награжденная работа', 'редакционное качество',
            'кинематографическое освещение', 'профессиональная ретушь', 'идеальная экспозиция', 
            'четкий фокус', 'динамичная сцена', 'экшн-кадр', 'эпический момент'
        ];
        
        // Освещение
        this.lighting = [
            'естественное', 'драматическое', 'мягкое', 'контровое', 'ободковое', 
            'неоновое', 'золотой час', 'лунный свет', 'боевое', 'взрывное',
            'магическое', 'огненное', 'ледяное', 'электрическое'
        ];
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    getRandomElements(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    generateFortniteGirlPrompt() {
        const hairColor = this.getRandomElement(this.hairColors);
        const hairStyle = this.getRandomElement(this.hairStyles);
        const eyeColor = this.getRandomElement(this.eyeColors);
        const skinTone = this.getRandomElement(this.skinTones);
        const location = this.getRandomElement(this.fortniteLocations);
        const weapon = this.getRandomElement(this.fortniteWeapons);
        const outfit = this.getRandomElement(this.fortniteOutfits);
        const outfitColor = this.getRandomElement(this.outfitColors);
        const scene = this.getRandomElement(this.fortniteScenes);
        const effects = this.getRandomElements(this.specialEffects, 2);
        const lighting = this.getRandomElement(this.lighting);
        const photographyTerms = this.getRandomElements(this.photographyTerms, 3);

        return `Красивая девушка с ${hairStyle} ${hairColor} волосами, ${eyeColor} глазами и ${skinTone} кожей в мире Fortnite. На ней ${outfitColor} ${outfit} в стиле игры. Она держит ${weapon} во время ${scene} в локации ${location}. Вокруг видны ${effects.join(' и ')}. ${lighting} освещение подчеркивает динамику сцены. ${photographyTerms.join(', ')}. Фотореалистичная, гипердетализированная, в стиле игры Fortnite, качество шедевра`;
    }

    generateFortniteActionPrompt() {
        const hairColor = this.getRandomElement(this.hairColors);
        const hairStyle = this.getRandomElement(this.hairStyles);
        const eyeColor = this.getRandomElement(this.eyeColors);
        const skinTone = this.getRandomElement(this.skinTones);
        const location = this.getRandomElement(this.fortniteLocations);
        const weapon = this.getRandomElement(this.fortniteWeapons);
        const outfit = this.getRandomElement(this.fortniteOutfits);
        const outfitColor = this.getRandomElement(this.outfitColors);
        const scene = this.getRandomElement(this.fortniteScenes);
        const effects = this.getRandomElements(this.specialEffects, 3);
        const lighting = this.getRandomElement(this.lighting);
        const photographyTerms = this.getRandomElements(this.photographyTerms, 3);

        return `Динамичная сцена с девушкой-бойцом с ${hairStyle} ${hairColor} волосами и ${eyeColor} глазами в игре Fortnite. Она одета в ${outfitColor} ${outfit} и активно участвует в ${scene}. В руках у нее ${weapon}, вокруг происходит ${effects.join(', ')}. Действие происходит в ${location} с ${lighting} освещением. ${photographyTerms.join(', ')}. Ультрареалистичная, фотореалистичная, гипердетализированная, в стиле игры Fortnite, качество шедевра`;
    }

    generateFortnitePortraitPrompt() {
        const hairColor = this.getRandomElement(this.hairColors);
        const hairStyle = this.getRandomElement(this.hairStyles);
        const eyeColor = this.getRandomElement(this.eyeColors);
        const skinTone = this.getRandomElement(this.skinTones);
        const outfit = this.getRandomElement(this.fortniteOutfits);
        const outfitColor = this.getRandomElement(this.outfitColors);
        const location = this.getRandomElement(this.fortniteLocations);
        const lighting = this.getRandomElement(this.lighting);
        const photographyTerms = this.getRandomElements(this.photographyTerms, 3);

        return `Портрет красивой девушки с ${hairStyle} ${hairColor} волосами, выразительными ${eyeColor} глазами и ${skinTone} кожей в стиле Fortnite. На ней ${outfitColor} ${outfit}. Фон - размытый пейзаж ${location}. ${lighting} освещение создает драматический эффект. ${photographyTerms.join(', ')}. Фотореалистичная, гипердетализированная, в стиле игры Fortnite, качество шедевра`;
    }

    generateRandomFortnitePrompt() {
        const promptTypes = [
            this.generateFortniteGirlPrompt.bind(this),
            this.generateFortniteActionPrompt.bind(this),
            this.generateFortnitePortraitPrompt.bind(this)
        ];
        
        const randomPromptGenerator = this.getRandomElement(promptTypes);
        return randomPromptGenerator();
    }
}
