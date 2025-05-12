export class PromptGenerator {
    constructor() {
        // Физические характеристики
        this.hairColors = ['блондинка', 'брюнетка', 'шатенка', 'рыжая', 'каштановая', 'розовая', 'синяя', 'фиолетовая', 'серебристая', 'платиновая', 'золотистая', 'медная', 'радужная', 'пастельно-розовая', 'пастельно-голубая', 'мятно-зеленая'];
        this.hairStyles = ['длинные', 'короткие', 'волнистые', 'прямые', 'кудрявые', 'заплетенные', 'хвост', 'каре', 'пикси', 'ирокез', 'андеркат', 'растрепанный пучок', 'французская коса', 'два пучка', 'асимметричная'];
        this.eyeColors = ['голубые', 'зеленые', 'карие', 'ореховые', 'серые', 'янтарные', 'фиолетовые', 'золотистые', 'разного цвета', 'хрустальные', 'изумрудные', 'сапфировые', 'рубиновые'];
        this.eyeShapes = ['миндалевидные', 'круглые', 'приподнятые', 'опущенные', 'глубоко посаженные', 'широко посаженные', 'близко посаженные'];
        this.faceShapes = ['овальное', 'круглое', 'сердцевидное', 'квадратное', 'ромбовидное', 'треугольное'];
        this.skinTones = ['фарфоровая', 'светлая', 'средняя', 'оливковая', 'загорелая', 'смуглая', 'темная', 'фарфоровая', 'золотистая'];
        this.bodyTypes = ['стройная', 'атлетическая', 'пышная', 'миниатюрная', 'высокая', 'среднего телосложения'];
        
        // Одежда и аксессуары
        this.outfits = ['повседневная', 'формальная', 'спортивная', 'элегантная', 'винтажная', 'современная', 'готическая', 'бохо', 'киберпанк', 'стимпанк', 'каваи', 'лолита', 'панк', 'преппи', 'стритвир', 'бизнес-кэжуал'];
        this.clothingColors = ['черная', 'белая', 'красная', 'синяя', 'зеленая', 'фиолетовая', 'розовая', 'желтая', 'пастельная', 'неоновая', 'металлическая', 'градиентная'];
        this.accessories = ['ожерелье', 'серьги', 'браслет', 'кольцо', 'повязка', 'шарф', 'шляпа', 'очки', 'солнечные очки', 'перчатки', 'пояс', 'сумка', 'часы'];
        
        // Места и окружение
        this.locations = ['пляж', 'лес', 'город', 'сад', 'студия', 'кафе', 'библиотека', 'парк', 'замок', 'космическая станция', 'подводный мир', 'горы', 'пустыня', 'заснеженный пейзаж', 'неоновый город', 'древние руины'];
        this.weather = ['солнечная', 'дождливая', 'снежная', 'туманная', 'грозовая', 'ясная ночь', 'закат', 'рассвет', 'облачная'];
        this.seasons = ['весна', 'лето', 'осень', 'зима'];
        
        // Настроения и позы
        this.moods = ['счастливая', 'серьезная', 'игривая', 'загадочная', 'мечтательная', 'уверенная', 'нежная', 'сердитая', 'грустная', 'удивленная', 'решительная', 'спокойная', 'энергичная', 'уставшая', 'сосредоточенная'];
        this.poses = ['стоя', 'сидя', 'идущая', 'бегущая', 'танцующая', 'прыгающая', 'опирающаяся', 'присевшая', 'лежащая'];
        
        // Стили фотографии
        this.artStyles = ['реалистичная', 'аниме', 'масляная живопись', 'акварель', 'цифровое искусство', 'фотореалистичная', 'эскиз', 'пиксель-арт', '3D-рендер', 'импрессионизм', 'сюрреализм', 'поп-арт', 'минимализм', 'киберпанк', 'стимпанк'];
        this.lighting = ['естественное', 'драматическое', 'мягкое', 'контровое', 'ободковое', 'неоновое', 'золотой час', 'лунный свет', 'студийное'];
        this.cameraAngles = ['портрет', 'в полный рост', 'крупный план', 'средний план', 'низкий ракурс', 'высокий ракурс', 'вид сбоку', 'три четверти'];
        
        // Эффекты и элементы
        this.specialEffects = ['светящаяся', 'искрящаяся', 'огненная', 'водная', 'ветреная', 'дымная', 'туманная', 'радужная', 'северное сияние', 'частицы'];
        this.backgroundElements = ['цветы', 'деревья', 'здания', 'звезды', 'облака', 'горы', 'океан', 'городские огни', 'туман', 'дождь'];

        // Элементы красоты
        this.beautyElements = [
            'безупречная кожа', 'фарфоровый цвет лица', 'сияющий вид', 'естественная красота',
            'идеальная симметрия', 'утонченные черты', 'элегантная осанка', 'грациозная поза',
            'мягкий фокус', 'эффект боке', 'глубина резкости', 'профессиональный макияж',
            'естественное освещение', 'студийное качество', 'высокая мода', 'люкс-стиль'
        ];
        
        // Фотографические термины
        this.photographyTerms = [
            'разрешение 8k', 'ультра HD', 'профессиональная фотография', 'студийный снимок',
            'идеальная композиция', 'шедевр', 'награжденная работа', 'редакционное качество',
            'обложка журнала', 'фотография моды', 'портретная фотография',
            'коммерческая фотография', 'высококачественное производство', 'кинематографическое освещение',
            'профессиональная ретушь', 'идеальная экспозиция', 'четкий фокус'
        ];

        // Стили красоты
        this.beautyStyles = [
            'естественная красота', 'гламурная', 'элегантная', 'утонченная',
            'высокая мода', 'редакционная', 'подиумная', 'от кутюр',
            'люксовая', 'премиум', 'эксклюзивная', 'элитная',
            'высококлассная', 'профессиональная', 'отполированная', 'изысканная'
        ];

        // Стили фотографии
        this.photographyStyles = [
            'портретная', 'модная', 'редакционная', 'коммерческая',
            'высококлассная', 'люксовая', 'премиум', 'профессиональная',
            'студийная', 'кинематографическая', 'драматическая', 'художественная',
            'шедевр', 'награжденная', 'качество журнала'
        ];
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    getRandomElements(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    generatePhotorealisticPrompt() {
        const hairColor = this.getRandomElement(this.hairColors);
        const hairStyle = this.getRandomElement(this.hairStyles);
        const eyeColor = this.getRandomElement(this.eyeColors);
        const eyeShape = this.getRandomElement(this.eyeShapes);
        const faceShape = this.getRandomElement(this.faceShapes);
        const skinTone = this.getRandomElement(this.skinTones);
        const bodyType = this.getRandomElement(this.bodyTypes);
        const outfit = this.getRandomElement(this.outfits);
        const outfitColor = this.getRandomElement(this.clothingColors);
        const accessories = this.getRandomElements(this.accessories, 2);
        const location = this.getRandomElement(this.locations);
        const weather = this.getRandomElement(this.weather);
        const season = this.getRandomElement(this.seasons);
        const mood = this.getRandomElement(this.moods);
        const pose = this.getRandomElement(this.poses);
        const lighting = this.getRandomElement(this.lighting);
        const cameraAngle = this.getRandomElement(this.cameraAngles);
        const beautyElements = this.getRandomElements(this.beautyElements, 3);
        const photographyTerms = this.getRandomElements(this.photographyTerms, 4);
        const beautyStyle = this.getRandomElement(this.beautyStyles);
        const photographyStyle = this.getRandomElement(this.photographyStyles);

        return `${beautyStyle} девушка с ${bodyType} фигурой и ${skinTone} кожей, ${hairStyle} ${hairColor} волосы, ${eyeShape} ${eyeColor} глаза и ${faceShape} лицо. ${beautyElements.join(', ')}. На ней ${outfitColor} ${outfit} одежда с ${accessories.join(' и ')}. ${pose} в ${location} во время ${weather} ${season}. ${cameraAngle} с ${lighting} освещением. ${photographyTerms.join(', ')}. ${photographyStyle} фотография, ультрареалистичная, фотореалистичная, гипердетализированная, идеальная композиция, профессиональная ретушь, качество шедевра`;
    }

    generateBeautyPortraitPrompt() {
        const hairColor = this.getRandomElement(this.hairColors);
        const hairStyle = this.getRandomElement(this.hairStyles);
        const eyeColor = this.getRandomElement(this.eyeColors);
        const eyeShape = this.getRandomElement(this.eyeShapes);
        const faceShape = this.getRandomElement(this.faceShapes);
        const skinTone = this.getRandomElement(this.skinTones);
        const mood = this.getRandomElement(this.moods);
        const beautyElements = this.getRandomElements(this.beautyElements, 4);
        const photographyTerms = this.getRandomElements(this.photographyTerms, 3);
        const lighting = this.getRandomElement(this.lighting);

        return `Крупный план красивой девушки с ${hairStyle} ${hairColor} волосами, ${eyeShape} ${eyeColor} глазами и ${faceShape} лицом. ${skinTone} кожа с ${beautyElements.join(', ')}. ${mood} выражение. ${lighting} освещение. ${photographyTerms.join(', ')}. Профессиональная портретная фотография, ультрареалистичная, фотореалистичная, гипердетализированная, идеальная композиция, профессиональная ретушь, качество шедевра`;
    }

    generateFashionEditorialPrompt() {
        const hairColor = this.getRandomElement(this.hairColors);
        const hairStyle = this.getRandomElement(this.hairStyles);
        const eyeColor = this.getRandomElement(this.eyeColors);
        const outfit = this.getRandomElement(this.outfits);
        const outfitColor = this.getRandomElement(this.clothingColors);
        const accessories = this.getRandomElements(this.accessories, 2);
        const location = this.getRandomElement(this.locations);
        const pose = this.getRandomElement(this.poses);
        const beautyElements = this.getRandomElements(this.beautyElements, 3);
        const photographyTerms = this.getRandomElements(this.photographyTerms, 4);
        const lighting = this.getRandomElement(this.lighting);

        return `Модная редакционная съемка потрясающей модели с ${hairStyle} ${hairColor} волосами и ${eyeColor} глазами. ${beautyElements.join(', ')}. На ней ${outfitColor} ${outfit} с ${accessories.join(' и ')}. ${pose} в ${location}. ${lighting} освещение. ${photographyTerms.join(', ')}. Высококлассная модная фотография, ультрареалистичная, фотореалистичная, гипердетализированная, идеальная композиция, профессиональная ретушь, качество обложки журнала`;
    }

    generateCustomPrompt(options = {}) {
        const {
            hairColor = this.getRandomElement(this.hairColors),
            hairStyle = this.getRandomElement(this.hairStyles),
            eyeColor = this.getRandomElement(this.eyeColors),
            eyeShape = this.getRandomElement(this.eyeShapes),
            faceShape = this.getRandomElement(this.faceShapes),
            skinTone = this.getRandomElement(this.skinTones),
            bodyType = this.getRandomElement(this.bodyTypes),
            outfit = this.getRandomElement(this.outfits),
            outfitColor = this.getRandomElement(this.clothingColors),
            accessories = this.getRandomElements(this.accessories, 2),
            location = this.getRandomElement(this.locations),
            weather = this.getRandomElement(this.weather),
            season = this.getRandomElement(this.seasons),
            mood = this.getRandomElement(this.moods),
            pose = this.getRandomElement(this.poses),
            lighting = this.getRandomElement(this.lighting),
            cameraAngle = this.getRandomElement(this.cameraAngles),
            beautyElements = this.getRandomElements(this.beautyElements, 3),
            photographyTerms = this.getRandomElements(this.photographyTerms, 3),
            beautyStyle = this.getRandomElement(this.beautyStyles),
            photographyStyle = this.getRandomElement(this.photographyStyles)
        } = options;

        return `${beautyStyle} девушка с ${bodyType} фигурой и ${skinTone} кожей, ${hairStyle} ${hairColor} волосы, ${eyeShape} ${eyeColor} глаза и ${faceShape} лицо. ${beautyElements.join(', ')}. На ней ${outfitColor} ${outfit} одежда с ${accessories.join(' и ')}. ${pose} в ${location} во время ${weather} ${season}. ${cameraAngle} с ${lighting} освещением. ${photographyTerms.join(', ')}. ${photographyStyle} фотография, ультрареалистичная, фотореалистичная, гипердетализированная, идеальная композиция, профессиональная ретушь, качество шедевра`;
    }
}

// Пример использования:
// const generator = new PromptGenerator();
// console.log(generator.generatePhotorealisticPrompt());
// console.log(generator.generateBeautyPortraitPrompt());
// console.log(generator.generateFashionEditorialPrompt());
// console.log(generator.generateCustomPrompt({
//     hairColor: 'серебристая',
//     mood: 'загадочная',
//     beautyElements: ['безупречная кожа', 'сияющий вид'],
//     photographyTerms: ['разрешение 8k', 'профессиональная фотография']
// }));

//module.exports = PromptGenerator; 