import ContentData from '../../../data/ContentData'
const quality = {
	async init(){
		this.contentData = new ContentData();
		this.dataQuality = await this.contentData.getDataQuality()
		console.log(this.dataQuality);
		return `
		<section class="w-full md:mt-[9px] flex flex-col">
			<h3 class="text-[16px] font-primary font-[700] uppercase text-center md:text-[20px] xl:text-[24px]">Keunggulan Produk <span class="color-primary">RAN Precast</span></h3>
			<div class="flex h-full mt-[44px] lg:px-[153px]">
				<div class="w-full h-auto grid grid-cols-2 grid-rows-4 gap-4 justify-items-center md:grid-cols-3 md:grid-rows-3 md:gap-[40px] xl:grid-cols-4 xl:grid-rows-2">
					<div class="w-[120px] h-[120px] flex flex-col md:w-[220px] md:h-[220px]">
						<div class="bg-white w-full h-full  flex">
							<img src="images/Logo.png" class="w-[100px] h-[100px] m-auto md:w-[150px] md:h-[150px]"/>
						</div>
					</div>
					<div class="w-[120px] h-[120px] flex flex-col md:w-[220px] md:h-[220px]">
						<div class="m-auto">
						<img src="${this.dataQuality[0].icon}" class="w-[30px] h-[30px] mx-auto md:w-[50px] md:h-[50px] xl:w-[70px] xl:h-[70px]" >
						<h4 class="text-[11px] font-[600] font-primary text-center md:text-[14px] md:mt-[20px] xl:text-[16px]">${this.dataQuality[0].deskripsi}</h4>
						</div>
					</div>
					<div class="w-[120px] h-[120px] flex flex-col md:w-[220px] md:h-[220px]">
						<div class="m-auto">
						<img src="${this.dataQuality[1].icon}" class="w-[30px] h-[30px] mx-auto md:w-[50px] md:h-[50px] xl:w-[70px] xl:h-[70px]" >
						<h4 class="text-[11px] font-[600] font-primary text-center md:text-[14px] md:mt-[20px] xl:text-[16px]">${this.dataQuality[1].deskripsi}</h4>
						</div>
					</div>
					<div class="w-[120px] h-[120px] flex flex-col md:w-[220px] md:h-[220px]">
						<div class="m-auto">
						<img src="${this.dataQuality[2].icon}" class="w-[30px] h-[30px] mx-auto md:w-[50px] md:h-[50px] xl:w-[70px] xl:h-[70px]" >
						<h4 class="text-[11px] font-[600] font-primary text-center md:text-[14px] md:mt-[20px] xl:text-[16px]">${this.dataQuality[2].deskripsi}</h4>
						</div>
					</div>
					<div class="w-[120px] h-[120px] flex flex-col md:w-[220px] md:h-[220px]">
						<div class="m-auto">
						<img src="${this.dataQuality[3].icon}" class="w-[30px] h-[30px] mx-auto md:w-[50px] md:h-[50px] xl:w-[70px] xl:h-[70px]" >
						<h4 class="text-[11px] font-[600] font-primary text-center md:text-[14px] md:mt-[20px] xl:text-[16px]">${this.dataQuality[3].deskripsi}</h4>
						</div>
					</div>
					<div class="w-[120px] h-[120px] flex flex-col md:w-[220px] md:h-[220px]">
						<div class="m-auto">
						<img src="${this.dataQuality[4].icon}" class="w-[30px] h-[30px] mx-auto md:w-[50px] md:h-[50px] xl:w-[70px] xl:h-[70px]" >
						<h4 class="text-[11px] font-[600] font-primary text-center md:text-[14px] md:mt-[20px] xl:text-[16px]">${this.dataQuality[4].deskripsi}</h4>
						</div>
					</div>
					<div class="w-[120px] h-[120px] flex flex-col md:w-[220px] md:h-[220px]">
						<div class="m-auto">
						<img src="${this.dataQuality[5].icon}" class="w-[30px] h-[30px] mx-auto md:w-[50px] md:h-[50px] xl:w-[70px] xl:h-[70px]" >
						<h4 class="text-[11px] font-[600] font-primary text-center md:text-[14px] md:mt-[20px] xl:text-[16px]">${this.dataQuality[5].deskripsi}</h4>
						</div>
					</div>
					<div class="w-[120px] h-[120px] flex flex-col md:w-[220px] md:h-[220px]">
						<div class="m-auto">
						<img src="${this.dataQuality[6].icon}" class="w-[30px] h-[30px] mx-auto md:w-[50px] md:h-[50px] xl:w-[70px] xl:h-[70px]" >
						<h4 class="text-[11px] font-[600] font-primary text-center md:text-[14px] md:mt-[20px] xl:text-[16px]">${this.dataQuality[6].deskripsi}</h4>
						</div>
					</div>


				</div>
			</div>
		</section>`;
	},
	afterRender(){
		return ``;
	}
}

export default quality;