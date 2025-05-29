import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { Table } from "./components/table";
import { ConfigEditor } from "./components/config-editor";
import { Utils } from "./components/utils";
import { Storage } from "./components/storage";
import { ImportExport } from "./components/import-export";
import { PromtTextarea } from "./promt-gen/promt-textarea";
import { PromtGen } from "./promt-gen/promt-gen";
import { Toolbar } from "./promt-gen/toolbar";
import { Button } from "./components/button";
import { Dropdown } from "./components/dropdown";
import { Div } from "./components/div";

const APP_NAME = 'PROMT-GEN2';

export class App {
	constructor() {
		this.components = [];
		this.header = new Header(APP_NAME);
		this.footer =  new Footer();

		this.div = new Div();

		this.dropdown = new Dropdown('G1|G2|G3|G4|G5|G6|G7|G8|G9|G10|G11|G12|G13|G14|G15|G16|G17|G18|G19|G20|G21|G22|G23|G24|G25|G26|G27|G28|G29|G30', this.callback.bind(this));
		this.button = new Button('GENERATE', this.callback.bind(this));

		this.toolbar = new Toolbar('BEAUTIFY|INSERT|SHUFFLE|-|_SEED|+', this.callback.bind(this))

		this.promt1Textarea = new PromtTextarea('PROMT 1', this.callback.bind(this));
		this.promt2Textarea = new PromtTextarea('PROMT 2', this.callback.bind(this));
		this.promt3Textarea = new PromtTextarea('RESULT', this.callback.bind(this));
		this.configEditor = new ConfigEditor('CONFIG', this.callback.bind(this))
		this.importExport = new ImportExport('IMPORT/EXPORT', this.callback.bind(this))

		this.div.push(this.dropdown)
		this.div.push(this.button)

		this.components.push(this.div)
		this.components.push(this.toolbar)
		this.components.push(this.promt1Textarea)
		this.components.push(this.promt2Textarea)
		this.components.push(this.promt3Textarea)
		this.components.push(this.configEditor)
		this.components.push(this.importExport)

		this.storage = new Storage();
		this.config = JSON.parse(this.storage.get('promt-gen2-config', ''));

		this.promtGen = new PromtGen();

		this.callbackLastMethod = 'INSERT';
	}

	render() {
		let result = ''
		result += this.header.render();
		result += '<main class="container">'
		this.components.forEach(component => {
			result += component.render();
		})
		result += '</main>'
		result += this.footer.render();
		return result;
	}

	run() {
		this.components.forEach(component => {
			component.run();
		})
		this.importConfig(this.config);
	}

	updateConfig(config) {
		this.config = config;

		if (config == null)
			return

		this.config.promt1 = this.promt1Textarea.getText();
		this.config.promt2 = this.promt2Textarea.getText();
		this.config.promt3 = this.promt3Textarea.getText();
		this.config.generator = this.dropdown.getSelectedValue();	
		this.config.seed = this.toolbar.getElementText('_SEED');
		this.configEditor.setText(JSON.stringify(this.config));
		this.importExport.setText(Utils.encodeUnicodeToBase64(JSON.stringify(this.config)));
		this.storage.set('promt-gen2-config', JSON.stringify(this.config));		
	}

	importConfig(config) {
		this.config = config;
		this.promt1Textarea.setText(this.config.promt1);
		this.promt2Textarea.setText(this.config.promt2);
		this.promt3Textarea.setText(this.config.promt3);
		this.dropdown.setSelectedValue(this.config.generator);
		this.toolbar.setElementText('_SEED', this.config.seed);
		this.updateConfig(this.config);
	}

	callback(message, data) {
		let result = null;
		
		switch (message) {
			case 'promt-changed':
				this.config = {};
				this.config['promt1'] = this.promt1Textarea.getText();
				this.config['promt2'] = this.promt2Textarea.getText();
				this.config['promt3'] = this.promt3Textarea.getText();    
				this.updateConfig(this.config);
				break;

			case 'config-change':        
				if (data != null){
					this.updateConfig(data);
				}                
				break;

			case 'config-load':
				return this.config;
				break;
			
			case 'import':
				this.importConfig(JSON.parse(Utils.decodeBase64ToUnicode(data)));
				this.configEditor.setText(JSON.stringify(this.config));
				break;
			
			case 'export':
				return Utils.encodeUnicodeToBase64(JSON.stringify(this.config));
				break;

			case 'button':
				this.callback('toolbar', this.dropdown.getSelectedValue());
				break;

			case 'toolbar':
				switch (data) {
					case 'G1':
						this.promt1Textarea.setText(this.promtGen.generateBasicPrompt());
						break;
					case 'G2':
						this.promt1Textarea.setText(this.promtGen.generateFortnitePrompt());
						break;
					case 'SHUFFLE':    
						this.promt3Textarea.setText(
							this.promtGen.shuffle(
								this.config.seed, 
								this.config.promt1, 
								this.config.promt2, 
							));
						Utils.copyTextToClipboard(this.promt3Textarea.getText());
						this.callbackLastMethod = 'SHUFFLE';
						break;
					case 'INSERT':
						this.promt3Textarea.setText(this.promtGen.insert(this.config.seed, this.config.promt1, this.config.promt2));
						Utils.copyTextToClipboard(this.promt3Textarea.getText());
						this.callbackLastMethod = 'INSERT';
						break;
					case 'G3':
						this.promt1Textarea.setText(this.promtGen.generateRandomBeachPrompt());
						break;
					case 'G4':
						this.promt1Textarea.setText(this.promtGen.generateG4Prompt());
						break;
					case 'G5':
						this.promt1Textarea.setText(this.promtGen.generateG5Prompt());
						break;
					case 'G6':
						this.promt1Textarea.setText(this.promtGen.generateG6Prompt());
						break;
					case 'G7':
						this.promt1Textarea.setText(this.promtGen.generateG7Prompt());
						break;
					case 'G8':
						this.promt1Textarea.setText(this.promtGen.generateG8Prompt());
						break;
					case 'G9':
						this.promt1Textarea.setText(this.promtGen.generateG9Prompt());
						break;
					case 'G10':
						this.promt1Textarea.setText(this.promtGen.generateG10Prompt());
						break;
					case 'G11':
						this.promt1Textarea.setText(this.promtGen.generateG11Prompt());
						break;
					case 'G12':
						this.promt1Textarea.setText(this.promtGen.generateG12Prompt());
						break;
					case 'G13':
						this.promt1Textarea.setText(this.promtGen.generateG13Prompt());
						break;
					case 'G14':
						this.promt1Textarea.setText(this.promtGen.generateG14Prompt());
						break;
					case 'G15':
						this.promt1Textarea.setText(this.promtGen.generateG15Prompt());
						break;
					case 'G16':
						this.promt1Textarea.setText(this.promtGen.generateG16Prompt());
						break;
					case 'G17':
						this.promt1Textarea.setText(this.promtGen.generateG17Prompt());
						break;
					case 'G18':
						this.promt1Textarea.setText(this.promtGen.generateG18Prompt());
						break;
					case 'G19':
						this.promt1Textarea.setText(this.promtGen.generateG19Prompt());
						break;
					case 'G20':
						this.promt1Textarea.setText(this.promtGen.generateG20Prompt());
						break;
					case 'G21':
						this.promt1Textarea.setText(this.promtGen.generateG21Prompt());
						break;
					case 'G22':
						this.promt1Textarea.setText(this.promtGen.generateG22Prompt());
						break;
					case 'G23':
						this.promt1Textarea.setText(this.promtGen.generateG23Prompt());
						break;
					case 'G24':
						this.promt1Textarea.setText(this.promtGen.generateG24Prompt());
						break;
					case 'G25':
						this.promt1Textarea.setText(this.promtGen.generateG25Prompt());
						break;
					case 'G26':
						this.promt1Textarea.setText(this.promtGen.generateG26Prompt());
						break;
					case 'G27':
						this.promt1Textarea.setText(this.promtGen.generateG27Prompt());
						break;
					case 'G28':
						this.promt1Textarea.setText(this.promtGen.generateG28Prompt());
						break;
					case 'G29':
						this.promt1Textarea.setText(this.promtGen.generateG29Prompt());
						break;
					case 'G30':
						this.promt1Textarea.setText(this.promtGen.generateG30Prompt());
						break;
					case 'SEED':
						break;
					case 'BEAUTIFY':
						this.promt1Textarea.setText(this.promtGen.beautify(this.config.promt1));
						break;
					case '+':
						this.config.seed = Utils.strToInt(this.toolbar.getElementText('_SEED'));
						this.config.seed = this.config.seed + 1;
						this.toolbar.setElementText('_SEED', this.config.seed);
						this.callback('toolbar', this.callbackLastMethod);
						break;
					case '-':
						this.config.seed = Utils.strToInt(this.toolbar.getElementText('_SEED'));
						this.config.seed = this.config.seed - 1;
						this.toolbar.setElementText('_SEED', this.config.seed);
						this.callback('toolbar', this.callbackLastMethod);
						break;
					case 'EXPORT':
						Utils.copyTextToClipboard(this.importExport.getText());
						break;
				}
				this.updateConfig(this.config);
				break;
		}

		return result;
	}
}