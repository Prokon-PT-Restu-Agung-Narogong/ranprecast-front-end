import ContentData from '../../../data/ContentData'
const allproducts = {
	async init(){
		this.data = new ContentData()
		this.dataProducts = await this.data.getDataProduk();
		this.maxImage = this.dataProducts.length;
		return `
				
				<div class="w-full px-4 md:px-[100px] flex h-[100px]">
					<span class="text-[16px] font-text my-auto"><span class="color-primary mr-2 font-primary">${this.dataProducts.length}</span> Produk Tersedia</span>
				</div>
				<ul class="wrap-card grid grid-cols-1 md:grid-cols-2 h-auto gap-[10px] md:px-[100px] justify-center">
				</ul>`;
	},
	cardExample(data){
		return `<li class="lazyload w-full bg-gray-400 md:h-[350px] shadow-md ml-auto flex bg-no-repeat bg-center bg-cover card-product " src="./images/loading.gif" style="background-image : url('${data.img[0]}')">
					<div class="mt-auto w-full p-8 flex flex-col desc-card">
						<h5 class="text-[14px] text-white font-primary uppercase md:text-[17px] xl:text-[20px]">${data.name}</h5>
						<p class="desc-text text-white font-primary text-[11px] font-[300] md:text-[12px]">${data.desc}</p>
						<div class="mt-4 flex">
							<a href="#/product/${data.id}" class="p-2 bg-red-600 w-2/6 text-center font-[500] text-white h-auto mr-auto text-[11px] text-center font-primary md:text-[12px] ">Detail</a>
						</div>
					</div>
				</li>`;
	},


	afterRender(){
		let i=1;
		let wrapCard = $('.wrap-card');
		this.dataProducts.forEach((e)=>{
			wrapCard.append(this.cardExample(e));
		});

		return ``;
	}
}

export default allproducts;