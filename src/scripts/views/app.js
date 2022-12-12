import getDataUser from '../utils/getDataUser'
import ContentData from '../data/ContentData'
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import footer from './components/layouts/footer'
import header from './components/layouts/header'
class App {
  constructor({ header, main, footer }){
    this.header = header;
    this.main = main;
    this.footer = footer;
    this.initialAppShell();
    this.contentData = new ContentData();
    this.initGetDataUser();
  }

  async initialAppShell() {
    this.header.innerHTML = await header.init();
    this.footer.innerHTML = await footer.init();
    header.afterRender();
    footer.afterRender();
  }

  async initGetDataUser(){
    this.contentData.requestPOST({
      request : "visitors",
      data : await getDataUser.getAll(),
    })
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.main.innerHTML = await page.init();
    $('.loading-wrap').show();
    await page.afterRender();
    $('.loading-wrap').hide();
  }
}

export default App;
