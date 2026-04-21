/**
 * Класс для скачивания текста в виде текстового файла.
 */
export class TextFileDownloader {
    /**
     * Скачивает текстовое содержимое в файл.
     * @param {string} text - Содержимое файла.
     * @param {string} filename - Имя файла (например, "notes.txt").
     * @throws {Error} Если текст не передан (кроме пустой строки) или имя файла не указано.
     */
    static download(text, filename) {
        // Проверка корректности аргументов
        if (text === undefined || text === null) {
            throw new Error('Текст не может быть пустым');
        }
        if (!filename || typeof filename !== 'string') {
            filename = 'download.txt';
        }

        // Создаём Blob с типом text/plain и кодировкой UTF-8
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        // Генерируем временный URL для Blob
        const url = URL.createObjectURL(blob);

        // Создаём и настраиваем ссылку для скачивания
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        // Добавляем ссылку в DOM, имитируем клик и удаляем
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Освобождаем выделенный под Blob URL
        URL.revokeObjectURL(url);
    }
}