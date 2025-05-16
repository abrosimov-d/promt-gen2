/**
 * G5 - Instagram Photo Prompt Generator
 * Генератор промтов для создания красивых фотографий в стиле Instagram
 */
export class G5 {
    constructor() {
        // Appearance options / Опции внешности
        this.appearance = {
            hairColor: ['светлые', 'каштановые', 'рыжие', 'черные', 'мелированные', 'пепельные', 'шоколадные', 'медные'],
            eyeColor: ['голубые', 'зеленые', 'карие', 'серые', 'янтарные', 'синие', 'ореховые'],
            makeup: ['натуральный', 'вечерний', 'минимальный', 'дымчатый', 'без макияжа', 'яркий', 'пастельный', 'металлический'],
            hairstyle: ['распущенные волны', 'прямые', 'коса', 'небрежный пучок', 'полураспущенные', 'конский хвост', 'каре', 'локоны']
        };

        // Style options / Опции стиля
        this.style = {
            type: ['повседневный', 'элегантный', 'уличный', 'бохо', 'минималистичный', 'спортивный', 'классический', 'романтичный'],
            accessories: ['крупные серьги', 'нежное колье', 'солнечные очки', 'шляпа', 'шарф', 'браслет', 'кольцо', 'сумка'],
            outfit: ['платье', 'джинсы и блузка', 'юбка и топ', 'костюм', 'комбинезон', 'брюки и рубашка', 'шорты и майка']
        };

        // Location options / Опции локации
        this.location = {
            urban: ['городская улица', 'кафе', 'крыша', 'художественная галерея', 'торговый район', 'парк', 'набережная', 'старый город'],
            studio: ['минималистичная студия', 'винтажная студия', 'современная студия', 'индустриальная студия', 'белая студия', 'лофт'],
            nature: ['пляж', 'лес', 'сад', 'горы', 'озеро', 'поле', 'водопад', 'река']
        };

        // Lighting options / Опции освещения
        this.lighting = {
            type: ['золотой час', 'мягкий естественный свет', 'драматичный', 'контровой', 'студийный', 'оконный', 'вечерний', 'утренний'],
            direction: ['боковой свет', 'передний свет', 'задний свет', 'объемный свет', 'бабочка', 'рембрандт', 'разделенный свет']
        };

        // Pose and emotion options / Опции поз и эмоций
        this.pose = {
            emotion: ['легкая улыбка', 'искренний смех', 'задумчивый', 'мечтательный', 'уверенный', 'игривый', 'спокойный', 'энергичный'],
            direction: ['смотрит в камеру', 'смотрит в сторону', 'смотрит вниз', 'смотрит вверх', 'в профиль', 'через плечо', 'с закрытыми глазами'],
            pose: ['стоя', 'сидя', 'прислонившись', 'в движении', 'на коленях', 'лежа', 'опираясь на стену']
        };

        // Technical parameters / Технические параметры
        this.technical = {
            resolution: ['4K', '8K', 'высокое разрешение', 'средний формат', 'полный кадр'],
            style: ['натуральный', 'винтажный', 'кинематографичный', 'модный', 'редакционный', 'художественный', 'документальный'],
            processing: ['мягкие тени', 'натуральная кожа', 'теплые тона', 'холодные тона', 'высокий контраст', 'пастельные тона', 'черно-белый']
        };

        // Максимальная длина промта
        this.maxPromptLength = 400;
    }

    /**
     * Get random item from array / Получить случайный элемент из массива
     * @param {Array} array - Source array / Исходный массив
     * @returns {string} Random item / Случайный элемент
     */
    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * Generate a single prompt / Сгенерировать один промт
     * @returns {string} Generated prompt / Сгенерированный промт
     */
    generateSinglePrompt() {
        const prompt = [
            `Красивая девушка с ${this.getRandomItem(this.appearance.hairColor)} волосами, ${this.getRandomItem(this.appearance.eyeColor)} глазами и ${this.getRandomItem(this.appearance.makeup)} макияжем.`,
            `Прическа: ${this.getRandomItem(this.appearance.hairstyle)}.`,
            `Одежда: ${this.getRandomItem(this.style.type)} стиль, ${this.getRandomItem(this.style.outfit)} с ${this.getRandomItem(this.style.accessories)}.`,
            `Локация: ${this.getRandomItem([...this.location.urban, ...this.location.studio, ...this.location.nature])}.`,
            `Освещение: ${this.getRandomItem(this.lighting.type)}, ${this.getRandomItem(this.lighting.direction)}.`,
            `Поза: ${this.getRandomItem(this.pose.pose)}, ${this.getRandomItem(this.pose.emotion)}, ${this.getRandomItem(this.pose.direction)}.`,
            `Технические параметры: ${this.getRandomItem(this.technical.resolution)}, ${this.getRandomItem(this.technical.style)} стиль, ${this.getRandomItem(this.technical.processing)}.`
        ].join(' ');

        // Проверка длины промта
        if (prompt.length > this.maxPromptLength) {
            return this.generateSinglePrompt(); // Рекурсивно генерируем новый промт, если текущий слишком длинный
        }

        return prompt;
    }

    /**
     * Generate multiple prompts / Сгенерировать несколько промтов
     * @param {number} count - Number of prompts to generate / Количество промтов для генерации
     * @returns {string[]} Array of generated prompts / Массив сгенерированных промтов
     */
    generate(count = 1) {
        const prompts = [];
        for (let i = 0; i < count; i++) {
            prompts.push(this.generateSinglePrompt());
        }
        return prompts;
    }

    /**
     * Add new options to existing categories / Добавить новые опции в существующие категории
     * @param {string} category - Category name / Название категории
     * @param {string} subcategory - Subcategory name / Название подкатегории
     * @param {string[]} options - New options / Новые опции
     */
    addOptions(category, subcategory, options) {
        if (this[category] && this[category][subcategory]) {
            this[category][subcategory] = [...this[category][subcategory], ...options];
        }
    }

    /**
     * Set maximum prompt length / Установить максимальную длину промта
     * @param {number} length - Maximum length / Максимальная длина
     */
    setMaxPromptLength(length) {
        this.maxPromptLength = length;
    }
}
