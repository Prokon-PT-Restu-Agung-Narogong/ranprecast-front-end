import ContentData from '../../../data/ContentData'
const hero = {
	async init(){
		this.data = new ContentData()
		this.dataHero = await this.data.getDataHero();
		return `
		<div class="w-full h-[360px] bg-black flex flex-col relative hero-wrap md:h-[460px] lg:h-[618px]">
			<img src="./images/loading.gif" data-src="${this.dataHero.img[0].src}" class="lazyload w-full h-full absolute z-0 object-cover select-none image-hero"></img>
			<div class="w-full h-full z-10 bg-black absolute" style="background-color: rgba(0, 0, 0, 0.7);"></div>
			<div class="px-[23px] z-20 flex flex-col w-full my-auto md:px-[43px]">
				<h1 class="font-primary uppercase text-[24px] font-[800] text-white leading-[29px] w-full md:w-5/6 md:text-[30px] xl:text-[48px] tracking-wide">${this.dataHero.nama}</h1>
				<p class="font-primary mt-[17px] text-white font-[500] text-justify leading-[13px] text-[11px] w-full md:w-3/6 md:text-[16px] md:leading-[20px] md:w-3/6 xl:w-[713px]">${this.dataHero.deskripsi}</p>
				<div class="w-full mt-[23px]">
					<a href="#/products" class="p-[7px_5px_7px_5px] font-primary text-white bgcolor-primary text-[9px] md:text-[13px] md:p-[12px_26px]">Jelajahi Produk</a>
					<a href="#/aboutus" class="p-[7px_5px_7px_5px] font-primary text-white bg-gray-600 text-[9px] md:text-[13px] md:p-[12px_26px]">Tentang Kami</a>
				</div>
			</div>
		</div>`;
	},
	slideHero(element,i,time){
		const dataImage = this.dataHero.img;

		const template = (link)=>{
			return `<img src="./images/loading.gif" data-src="${link}" class="lazyload  w-full h-full absolute z-0 object-cover select-none image-hero"></img>`;
		}

		setTimeout(()=>{
			i++;
			if(i >= dataImage.length){
				i=0;
			}
			element.find('.image-hero').remove()
			element.append(template(dataImage[i].src))
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