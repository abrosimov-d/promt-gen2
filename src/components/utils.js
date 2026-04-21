export class Utils {
	static randomClassName(length = 8) {
		const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
		let result = '';
		result += characters[Math.floor(Math.random() * 26)];
		for (let i = 1; i < length; i++) {
			result += characters[Math.floor(Math.random() * characters.length)];
		}
		return result;
	}

	static showSuccess(message) {
		let toast = new Notyf();
		toast.success({message:message});
	}

	static showError(message) {
		let toast = new Notyf();
		toast.error({duration: 10000, message:message});
	}

	static copyTextToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
			//Utils.showSuccess('copy');
        }, function(err) {
            
        });
    }

	static encodeUnicodeToBase64(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => 
          String.fromCharCode('0x' + p1)
        ));
      }
      
    static decodeBase64ToUnicode(base64) {
        return decodeURIComponent(Array.prototype.map.call(
          atob(base64), 
          c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0')
        ).join(''));
      }

	static strToInt(str) {
		return parseInt(str);
	}

	static intToStr(int) {
		return int.toString();
	}

    static getCurrentTime() {
        const now = new Date();
        // Формат: ГГГГ-ММ-ДД_ЧЧ-ММ-СС (без двоеточий и пробелов)
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
    }
}