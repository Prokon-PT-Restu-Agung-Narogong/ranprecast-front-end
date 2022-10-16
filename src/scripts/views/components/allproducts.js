import dataProducts from '../../data/products'
const allproducts = {
	init(){
		this.maxImage = dataProducts.length;
		return `
				<div id="hero-product" class="w-full h-[300px] md:h-[600px] bg-gray-400 flex relative hero-wrap">
					<img src="./images/loading.gif" data-src="./images/product/(12).jpg" class="lazyload w-full h-full absolute z-0 select-none image-hero"></img>
					<div class="w-full h-full z-10 bg-black absolute" style="background-color: rgba(0, 0, 0, 0.7);"></div>
					<h1 class="text-4xl md:text-6xl font-title text-white m-auto z-10">Semua Produk <span class="text-red-600">RAN Precast</span></h1>
				</div>
				<div class="w-full px-4 md:px-[100px] flex h-[100px]">
					<span class="text-xl font-text my-auto">${dataProducts.length} Produk Tersedia</span>
				</div>
				<ul class="wrap-card grid grid-cols-1 md:grid-cols-2 h-auto gap-4 md:px-[100px] justify-center">
				</ul>`;
	},
	cardExample(data,nameClass){
		return `<li class="lazyload w-full bg-gray-400 md:h-[300px] shadow-md ${nameClass} ml-auto flex bg-no-repeat bg-center bg-cover" src="./images/loading.gif" style="background-image : url('images/product/${data.img[0]}')">
					<div class="mt-auto w-full p-8 flex flex-col desc-card">
						<h5 class="text-2xl text-white font-title">${data.name}</h5>
						<p class="text-sm font-text text-white break-words hidden text-justify desc">${data.desc}</p>
						<div class="mt-4 flex">
							<a href="#/product/${data.id}" class="p-2 bg-red-600 w-2/6 text-sm text-center font-[500] text-white font-text h-auto mr-auto">Detail</a>
						</div>
					</div>
				</li>`;
	},
	cardHover(nameClass){
		$(`${nameClass}`).hover(()=>{
			$(`${nameClass}`).find('.desc').removeClass('hidden');
		},()=>{
			$(`${nameClass}`).find('.desc').addClass('hidden');
		})
	},
	slideHero(element,i,time){
		let template = `<img src="./images/loading.gif" data-src="./images/product/${dataProducts[i].img[0]}" class="lazyload w-full h-full absolute z-0 select-none image-hero object-cover"></img>`;
		setTimeout(()=>{
			i++;
			if(i >= this.maxImage){
				i=1;
				template = `<img src="./images/loading.gif" data-src="./images/product/(12).jpg" class="lazyload w-full h-full absolute z-0 select-none image-hero"></img>`;
			}
			element.find('.image-hero').remove()
			element.append(template)
			element.find('.image-hero').fadeIn(300)
			this.slideHero(element,i,time)
		},time)
	},
	afterRender(){
		let i=1;
		let wrapCard = $('.wrap-card');
		dataProducts.forEach((e)=>{
			wrapCard.append(this.cardExample(e,`card-${i}`))
			this.cardHover(`.card-${i}`);
			i++;
		});
		const imageHero = $('.hero-wrap');
		this.slideHero(imageHero,1,5000);
		return ``;
	}
}

export default allproducts;