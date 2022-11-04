import dataPortofolio from '../../data/dataPortofolio'
import ContentDataApi from '../../data/ContentDataApi'
const hero = {
	async init(){

		this.maxImage = dataPortofolio.length;
		this.dataContents = await this.getContentDataApi();
		return `
		<div class="w-full h-[30em] md:h-[40em] bg-black flex flex-col relative hero-wrap">
			<img src="./images/loading.gif" data-src="./images/portofolio/${dataPortofolio[0]}" class="lazyload w-full h-full absolute z-0 object-cover select-none image-hero"></img>
			<div class="w-full h-full z-10 bg-black absolute" style="background-color: rgba(0, 0, 0, 0.7);"></div>
			<div class="px-[8%] z-20 flex flex-col w-full h-full">
				<h1 class="text-5xl md:text-7xl text-white mt-auto w-full md:w-2/4 font-semibold font-title tracking-wider">${this.dataContents.nameCompany != null ? this.dataContents.nameCompany : "PT. Restu Agung Narogong"}</h1>
				<p class="w-full md:w-2/4 my-8 text-white font-text text-justify">PT Restu Agung Narogong adalah perusahaan yang bergerak di bidang Kontraktor, Supplier, manufacture, Fabrikasi & Engineering. Selain itu PT. Restu agung Narogong juga memiliki beberapa unit usaha yang mana salah satunya adalah RAN  PRECAST. </p>
				<div class="mb-auto w-full md:w-2/4 flex text-xs md:text-sm">
					<a href="#/products" class=" bg-red-600 w-full h-full w-2/6 mr-2 text-center p-2 text-white shadow-xl font-text">Jelajahi Produk</a>
					<a href="#/aboutus" class=" bg-gray-600 w-full h-full w-2/6 mr-2 text-center p-2 text-white shadow-xl font-text">Tentang Kami</a>
					
				</div>
			</div>
		</div>`;
	},
	slideHero(element,i,time){
		const template = `<img src="./images/loading.gif" data-src="./images/portofolio/${dataPortofolio[i]}" class="lazyload  w-full h-full absolute z-0 object-cover select-none image-hero"></img>`;
		setTimeout(()=>{
			i++;
			if(i >= this.maxImage){
				i=1;
			}
			element.find('.image-hero').remove()
			element.append(template)
			element.find('.image-hero').fadeIn(300)
			this.slideHero(element,i,time)
		},time)
	},
	async afterRender(){
		console.log(await this.getContentDataApi());
		const imageHero = $('.hero-wrap');
		this.slideHero(imageHero,1,5000);

		return ``;
	},
	async getContentDataApi(){
		let data = new ContentDataApi();
		return await data.getNContentsPerusahaan().then((value)=>{
			return value[0];
		});
	}
}

export default hero;