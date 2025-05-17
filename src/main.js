import './style.css'
import { App } from './app'
import { Utils } from './components/utils'

try {
    let app = new App()
    document.querySelector('body').innerHTML = app.render();
app.run();
} catch (error) {
    Utils.showError(error)
}
