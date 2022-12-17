import ContentData from '../../../data/ContentData'
const hero = {
	async init(){
		this.data = new ContentData()
		this.dataProducts = await this.data.getDataProduk();
		this.maxImage = this.dataProducts.length-1;
		return `
		<div class="w-full h-[360px] bg-black flex flex-col relative hero-wrap md:h-[460px] lg:h-[500px]">
			<img src="./images/loading.gif" data-src="${this.dataProducts[0].img}" class="lazyload w-full h-full absolute z-0 object-cover select-none image-hero"></img>
			<div class="w-full h-full z-10 bg-black absolute" style="background-color: rgba(0, 0, 0, 0.7);"></div>
			<div class="px-[23px] z-20 flex flex-col w-full my-auto md:px-[43px]">
				<h1 class="font-primary uppercase text-[24px] font-[800] text-white leading-[29px] w-full md:w-6/6 md:text-[30px] xl:text-[48px] tracking-wide text-center">Produk <span class="color-primary">RAN Precast</span></h1>
			</div>
		</div>`;
	},
	slideHero(element,i,time){
		let template = `<img src="./images/loading.gif" data-src="${this.dataProducts[i].img}" class="lazyload w-full h-full absolute z-0 select-none image-hero object-cover"></img>`;
		setTimeout(()=>{
			i++;
			if(i >= this.maxImage){
				i=0;
				template = `<img src="./images/loading.gif" data-src="${this.dataProducts[i].img}" class="lazyload w-full h-full absolute z-0 select-none image-hero object-cover"></img>`;
			}
			element.find('.image-hero').remove()
			element.append(template)
			element.find('.image-hero').fadeIn(300)
			this.slideHero(element,i,time)
		},time)
	},
	async afterRender(){
		const imageHero = $('.hero-wrap');
		this.slideHero(imageHero,0,5000);
		return ``;
	}
}

export default hero;