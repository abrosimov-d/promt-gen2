export class G29 {
    constructor() {
        // no external API usage; local prompt generator only
    }

    randomChoice(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    /**
     * Генерирует один промт для красивой взрослой девушки
     * в дорогом нижнем белье, в роскошном интерьере, в VR-шлеме.
     * Никаких вызовов внешних AI-API.
     */
    generatePrompt(options = {}) {
        const opts = (options && typeof options === 'object') ? options : {};

        const {
            style = 'photorealistic, 8k, studio lighting',
            mood = 'cinematic, elegant',
            camera = 'medium shot, eye level',
        } = opts;

        const locations = [
            'in a cozy modern living room',
            'in a minimalist living room with big windows',
            'in a stylish kitchen with marble counters',
            'in a soft bedroom with a big bed',
            'in a dim evening bedroom with warm light',
            'in a luxury bathroom with a freestanding tub',
            'in a bathroom with candles and soft reflections',
            'in a high-end loft with brick walls',
            'in a penthouse living room with city view',
            'in a sunlit bedroom by the window',
            'in a minimalist bathroom with plants',
            'in a lounge with velvet sofa',
            'in a bedroom with sheer curtains',
            'in a modern loft with concrete and wood',
        ];

        const lingerieColors = [
            'black', 'white', 'deep red', 'emerald green', 'pastel pink', 'dark blue',
            'beige', 'chocolate brown', 'soft gray', 'wine red', 'burgundy', 'navy',
            'ivory', 'blush', 'mauve', 'forest green', 'gold', 'silver gray',
        ];

        const lingerieTypes = [
            'minimalist bra and panties set',
            'simple lace lingerie set',
            'silk lingerie set with thin straps',
            'modern bralette and hipster panties',
            'minimalist bodysuit',
            'triangle bra and low-rise panties',
            'soft balconette set',
            'sleek seamless lingerie set',
            'light lace bra and panties set',
            'mesh-panel lingerie set',
            'delicate lace bodysuit with sheer details',
            'semi-sheer bra and simple panties',
            'sheer-panel bralette and low-rise panties',
            'silk and mesh lingerie set',
            'soft tulle lingerie set',
            'longline bra and brief set',
            'lace-trimmed seamless set',
            'mesh bralette and high-leg panties',
            'teddy with lace trim',
            'camisole and shorts set',
            'corset top and high-waist panties',
            'bralette and thong set',
            'bandeau and boy shorts',
            'push-up bra and lace panties',
            'shelf bra and hipster set',
            'strapless bodysuit',
            'garter belt and stockings with bra set',
            'bustier and panties',
            'satin slip dress as lingerie',
            'cropped lace top and briefs',
            'sporty bralette and high-cut panties',
            'romper-style lingerie',
            'wrap-style bra and panties',
            'keyhole bra and matching panties',
            'sheer overlay bodysuit',
            'lace teddy with open back',
            'minimalist thong and bralette set',
            'high-neck bralette and high-waist briefs',
            'deep V bra and cheeky panties',
            'underwired bra and lace panties set',
        ];

        const emotions = [
            'with a relaxed, dreamy expression',
            'with a playful, confident smile',
            'fully immersed in the virtual world',
            'with a calm, serene mood',
            'with a soft mysterious look',
            'with a gentle, curious expression',
            'with a slight smile, lost in thought',
            'with an elegant, composed expression',
            'with a soft, content expression',
            'with a subtle smirk',
        ];

        const poses = [
            'standing near a window, one leg slightly bent',
            'sitting on a sofa with crossed legs',
            'reclining on the bed, leaning on one arm',
            'sitting on the edge of a counter',
            'standing in a doorway, body turned slightly',
            'kneeling on the bed, looking over shoulder',
            'lying on her side on the sofa',
            'sitting on the floor, legs curled to the side',
            'leaning against a wall, arms relaxed',
            'standing with weight on one leg, hand on hip',
            'sitting on an armchair, one leg over the arm',
            'reclining on pillows, head slightly tilted',
            'standing at the window, back slightly to camera',
            'sitting on the bed edge, feet on the floor',
            'lying on her back on the bed, arms above head',
            'perched on a bar stool, legs crossed',
            'crouching by a low table',
            'standing in the middle of the room, arms at sides',
            'sitting in a bathtub edge, legs in water',
            'leaning on a door frame',
            'sitting cross-legged on a rug',
            'standing on tiptoe reaching for something',
            'half-lying on a chaise lounge',
            'sitting on a windowsill, legs dangling',
            'standing with back to camera, glancing back',
            'sitting on the floor leaning against the bed',
            'reclining in an armchair, legs over one arm',
            'standing holding the VR controllers',
            'sitting on a bench, leaning forward slightly',
            'lying on stomach on the bed, chin on hands',
        ];

        const location = this.randomChoice(locations);
        const color = this.randomChoice(lingerieColors);
        const type = this.randomChoice(lingerieTypes);
        const lingerie = `${color} ${type}`;
        const emotion = this.randomChoice(emotions);
        const pose = this.randomChoice(poses);

        // Собираем промт частями и при необходимости укорачиваем,
        // убирая наименее важные детали, а не просто режем строку.
        let parts = [
            `a beautiful adult woman in ${lingerie}`,
            'wearing a sleek modern VR headset',
            location,
            pose,
            emotion,
            'warm cinematic lighting, realistic skin, tasteful atmosphere',
            style,
            mood,
            camera,
        ];

        let prompt = parts.join(', ');

        const tryShorten = () => {
            if (prompt.length <= 400) return;
            // 1. убираем камеру
            parts = parts.filter(p => p !== camera);
            prompt = parts.join(', ');
            if (prompt.length <= 400) return;
            // 2. убираем настроение
            parts = parts.filter(p => p !== mood);
            prompt = parts.join(', ');
            if (prompt.length <= 400) return;
            // 3. убираем стиль
            parts = parts.filter(p => p !== style);
            prompt = parts.join(', ');
        };

        tryShorten();

        if (prompt.length > 400) {
            prompt = prompt.slice(0, 397) + '...';
        }

        return prompt;
    }

    /**
     * Генерация нескольких промтов (просто несколько вариантов подряд).
     * Для простоты сейчас возвращает одинаковый промт count раз,
     * при желании можно рандомизировать детали.
     */
    generateMultiplePrompts(count = 5, options = {}) {
        const prompts = [];
        for (let i = 0; i < count; i++) {
            prompts.push(this.generatePrompt(options));
        }
        return prompts;
    }
}
