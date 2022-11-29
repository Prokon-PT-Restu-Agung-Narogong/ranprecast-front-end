import ContentData from '../../../data/ContentData'
const visimisi = {
	async init(){
		this.contentData = new ContentData();
		this.dataVisiMisi = await this.contentData.getDataVisiMisi();
		return `
			<div class="w-full  flex flex-col md:flex-row md:py-8">
				<div class="w-full bg-black flex flex-col py-[48px] px-[30px] md:py-[64px] md:px-[68px]">
					<div class="w-full m-auto md:m-0">
						<h3 class="text-[16px] text-white font-primary font-[800] w-full text-center md:text-[20px] xl:text-[24px]">VISI</h3>
						<hr class="my-[15px] border-red-600">
					</div>
					<div class="text-[11px] font-primary text-white text-center md:text-[14px] xl:mt-[34px] xl:px-4">
						${this.dataVisiMisi.visi}
					</div>
				</div>
				<div class="w-full flex flex-col py-[48px] px-[30px] md:py-[64px] md:px-[68px]">
					<div class="w-full m-auto md:m-0">
						<h3 class="text-[16px] text-black font-primary font-[800] w-full text-center md:text-[20px] xl:text-[24px]">MISI</h3>
						<hr class="my-[15px] border-red-600">
					</div>
					<ul class="text-[11px] font-primary md:text-[14px] xl:mt-[34px]">
						${this.dataVisiMisi.misi}
					</ul>
				</div>
			</div>
		`;
	},
	afterRender(){
		return ``;
	}
}

export default visimisi;