import ContentData from '../../../data/ContentData'
const product = {

	async init(){
		this.contentData = new ContentData();
		let dataProducts = await this.contentData.getDataProduk();
		return `
		<div id="product" class="w-full bg-black py-4 md:p-12">
		
			<h3 class="text-[16px] font-primary font-[700] uppercase text-center text-white xl:text-[24px]">Produk <span class="text-red-600">RAN Precast</span></h3>
						
			<div class="flex w-5/6 mx-auto md:h-[350px] mt-4 xl:h-[760px]">
				<ul id="product" class="w-full h-full grid grid-cols-1  grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">
					${this.createList(dataProducts)}
				</ul>
			</div>
			<div class="w-[130px] h-[30px] mx-auto bgcolor-primary flex mt-[13px] xl:w-[150px] xl:h-[40px] xl:mt-[27px]">
				<a href="#/products" class="text-center m-auto font-primary text-white text-[12px] xl:text-[14px]">Lihat Semua</a>
			</div>
		</div>`;
	},
	createList(data){
		let html = ``;
		const maxShow = 6;
		let template = (data)=>{
			return`<li class="lazyload w-full bg-gray-400 md:h-[350px] shadow-md ml-auto flex bg-no-repeat bg-center bg-cover card-product " src="./images/loading.gif" style="background-image : url('${data.img}')">
						<div class="mt-auto w-full p-8 flex flex-col desc-card">
							<h5 class="text-[14px] text-white font-primary uppercase md:text-[17px] ">${data.name}</h5>
							<p class="desc-text text-white font-primary text-[11px] font-[300] md:text-[12px]">${data.desc}</p>
							<div class="mt-4 flex">
								<a href="#/product/${data.id}" class="p-2 bg-red-600 w-2/6 text-center font-[500] text-white h-auto mr-auto text-[11px] text-center font-primary md:text-[12px] ">Detail</a>
							</div>
						</div>
					</li>`;
		};

		data.forEach((item,index)=>{
			if(index < maxShow){			
				html += template(item);
			}
		})

		return html;

	},
	afterRender(){
		return ``;
	}
}

export default product;