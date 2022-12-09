import ContentData from '../../../data/ContentData'
const product = {

	async init(){
		this.contentData = new ContentData();
		let dataProducts = await this.contentData.getDataProduk();
		console.log(dataProducts);
		return `
		<div id="product" class="w-full bg-black py-4 md:p-12">
		
			<h3 class="text-[16px] font-primary font-[700] uppercase text-center text-white xl:text-[24px]">Produk <span class="text-red-600">RAN Precast</span></h3>
						
			<div class="flex w-5/6 mx-auto md:h-[350px] mt-4 xl:h-[831px]">
				<ul id="product" class="w-full h-full grid grid-cols-1  grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">
					<li class="w-full md:w-full card card-product-1 ml-auto flex bg-no-repeat bg-center bg-cover lazyload" src="./images/loading.gif" style="background-image : url('${dataProducts[0].img}')">
						<div class="mt-auto w-full p-8 desc-card">
							<h5 class="text-[14px] font-primary font-[700] uppercase text-white mb-[12px]">${dataProducts[0].name}</h5>
							<p class="hidden">${dataProducts[0].desc}</p>
							<a href="#/product/${dataProducts[0].id}" class="text-white text-[11px] py-[8px] px-[24px] bgcolor-primary xl:text-[12px]">Detail</a>							
						</div>
					</li>
					<li class="w-full md:w-full card card-product-2 flex bg-no-repeat bg-center bg-cover lazyload" src="./images/loading.gif" style="background-image : url('${dataProducts[1].img}')">
						<div class="mt-auto w-full p-8 desc-card">
							<h5 class="text-[14px] font-primary font-[700] uppercase text-white mb-[12px]">${dataProducts[1].name}</h5>
							<p class="hidden">${dataProducts[1].desc}</p>
							<a href="#/product/${dataProducts[1].id}" class="text-white text-[11px] py-[8px] px-[24px] bgcolor-primary xl:text-[12px]">Detail</a>							
						</div>
					</li>
					<li class="w-full md:w-full card card-product-3 mr-auto flex bg-no-repeat bg-center bg-cover lazyload" src="./images/loading.gif" style="background-image : url('${dataProducts[2].img}')">
						<div class="mt-auto w-full p-8 desc-card">
							<h5 class="text-[14px] font-primary font-[700] uppercase text-white mb-[12px]">${dataProducts[2].name}</h5>
							<p class="hidden">${dataProducts[2].desc}</p>
							<a href="#/product/${dataProducts[2].id}" class="text-white text-[11px] py-[8px] px-[24px] bgcolor-primary xl:text-[12px]">Detail</a>							
						</div>
					</li>
					<li class="w-full md:w-full card card-product-4 mr-auto flex bg-no-repeat bg-center bg-cover lazyload" src="./images/loading.gif" style="background-image : url('${dataProducts[3].img}')">
						<div class="mt-auto w-full p-8 desc-card">
							<h5 class="text-[14px] font-primary font-[700] uppercase text-white mb-[12px]">${dataProducts[3].name}</h5>
							<p class="hidden">${dataProducts[3].desc}</p>
							<a href="#/product/${dataProducts[3].id}" class="text-white text-[11px] py-[8px] px-[24px] bgcolor-primary xl:text-[12px]">Detail</a>							
						</div>
					</li>
					<li class="w-full md:w-full card card-product-5 mr-auto flex bg-no-repeat bg-center bg-cover lazyload" src="./images/loading.gif" style="background-image : url('${dataProducts[4].img}')">
						<div class="mt-auto w-full p-8 desc-card">
							<h5 class="text-[14px] font-primary font-[700] uppercase text-white mb-[12px]">${dataProducts[4].name}</h5>
							<p class="hidden">${dataProducts[4].desc}</p>
							<a href="#/product/${dataProducts[4].id}" class="text-white text-[11px] py-[8px] px-[24px] bgcolor-primary xl:text-[12px]">Detail</a>							
						</div>
					</li>
					<li class="w-full md:w-full card card-product-6 mr-auto flex bg-no-repeat bg-center bg-cover lazyload" src="./images/loading.gif" style="background-image : url('${dataProducts[5].img}')">
						<div class="mt-auto w-full p-8 desc-card">
							<h5 class="text-[14px] font-primary font-[700] uppercase text-white mb-[12px]">${dataProducts[5].name}</h5>
							<p class="hidden">${dataProducts[5].desc}</p>
							<a href="#/product/${dataProducts[5].id}" class="text-white text-[11px] py-[8px] px-[24px] bgcolor-primary xl:text-[12px]">Detail</a>							
						</div>
					</li>
				</ul>
			</div>
			<div class="w-[130px] h-[30px] mx-auto bgcolor-primary flex mt-[13px] xl:w-[150px] xl:h-[40px] xl:mt-[27px]">
				<a href="#/products" class="text-center m-auto font-primary text-white text-[12px] xl:text-[14px]">Lihat Semua</a>
			</div>
		</div>`;
	},
	hoverCard(nameClass){
		let element = $(`${nameClass}`);
		element.hover(()=>{
			element.find('.desc').removeClass('hidden')
		},()=>{
			element.find('.desc').addClass('hidden')
		})
	},
	afterRender(){
		this.hoverCard('.card-product-1');
		this.hoverCard('.card-product-2');
		this.hoverCard('.card-product-3');
		this.hoverCard('.card-product-4');
		this.hoverCard('.card-product-5');
		this.hoverCard('.card-product-6');
		return ``;
	}
}

export default product;