import UrlParser from '../../routes/url-parser';
import btnContact from '../components/btncontact';
import ContentData from '../../data/ContentData'
const detailProducts = {
	async init(){
		this.data = new ContentData()
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		this.product = await this.data.getDataProdukByID(url.id);
		this.kontak = await this.data.getDataKontak();
		this.lengthImage = this.product[0].img.length;
		this.indexImage = 0;
		return `
			${await btnContact.init()}
			<section class="my-[28px] px-[5%]">
				<div class="flex my-[36px]">
					<h1 class="text-[24px] w-full text-center font-primary uppercase font-[700]">Detail <span class="color-primary">Produk</span> </h1>
				</div>
				<div class="w-full min-h-[600px] flex xl:flex-row flex-col">
					<div class="w-full xl:w-[550px] xl:h-[550px]  p-4 relative img-wrap">
						<button class="w-[50px] h-[50px] absolute left-4 inset-y-[40%] text-gray-600 prev-image opacity-[50%]">
							<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 20 20" fill="currentColor">
							  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
							</svg>
						</button>
						${this.template()}

						<button class="w-[50px] h-[50px] absolute right-4 inset-y-[40%] text-gray-600 next-image opacity-[50%]">
							<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 20 20" fill="currentColor">
							  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
							</svg>
						</button>
					</div>
					<div class="w-full xl:w-2/4 h-full px-[20px] lg:pl-[59px]">
						<h2 class="text-[30px] font-[700] mt-auto font-semibold font-title tracking-wider text-black uppercase">${this.product[0].name}</h2>
						<p class="text-[14px] font-[400] mt-[16px] font-primary">${this.product[0].desc}</p>
						<hr class="mt-[48px] mb-[16px]">
						<div class="flex flex-col">
							<div class="w-full">
								<h5 class="text-[18px] font-[600] letter-[4%] w-full font-primary">Spesifikasi</h5>
								<ul class="specs list-decimal ml-[20px] font-primary text-[13px] font-[400] mt-[11px]">
								</ul>
							</div>
							<hr class="mt-[16px] mb-[16px]">
							<div class="flex flex-col">
								<h5 class="text-[18px] font-[600] letter-[4%] w-full font-primary">${this.product[0].dimensi == null ? "Jenis" : "Dimensi"}</h5>
								<ul class="dimensi list-disc ml-[20px] font-primary text-[13px] font-[400] mt-[11px]">
								</ul>
							</div>
						</div>
						<hr class="mb-[48px] mt-[16px]">
						<div class="grid grid-cols-1 grid-rows-2 gap-y-2 xl:grid-cols-3 xl:grid-rows-1 xl:gap-4 w-full ">
							<a href="https://wa.me/${this.kontak.whatsapp_1}?text=Saya%20tertarik%20dengan%20produk%20 ${this.product[0].name}%20yang%20ditawarkan%20di%20website%20https://www.ranprecast.com/" target="_blank" class="p-4 bg-red-600 text-white uppercase w-full col-span-2 text-center text-[18px] font-[600]">Pesan</a>
							<a href="#/products" class="p-4 bg-gray-500 text-white uppercase hover:bg-red-600 w-full text-center text-[18px] font-[600]">Produk Lain</a>
						</div>

					</div>
				</div>
			</section>
		`;
	},
	async addSpecs(){
		const specs = await $('.specs');
		this.product[0].specs.forEach((e)=>{
			specs.append(`<li>${e}</li>`)
		})
	},
	async addDimensi(){
		const dimensi = await $('.dimensi');
		this.product[0].dimensi.forEach((e)=>{
			dimensi.append(`<li>${e}</li>`)
		})
	},
	async addJenis(){
		const jenis = await $('.dimensi');
		this.product[0].jenis.forEach((e)=>{
			jenis.append(`<li>${e}</li>`)
		})
	},
	async changeImage(){

		$('.next-image').on('click',()=>{
				this.indexImage++;
				if(this.indexImage == this.lengthImage){
					this.indexImage = 0;
				}
				$('.img-wrap img').remove();
				$('.img-wrap').append(this.template());
				console.log(this.indexImage);
		})
		$('.prev-image').on('click',()=>{
				this.indexImage--;
				if(this.indexImage == -1){
					this.indexImage = this.lengthImage-1;
				}
				$('.img-wrap img').remove();
				$('.img-wrap').append(this.template());
				console.log(this.indexImage);
		})

	},
	template(){
		return `<img src="./images/loading.gif" data-src="${this.product[0].img[this.indexImage]}" class="lazyload w-full h-full bg-white shadow-xl rounded-lg  object-cover select-none img-wrap">`;
	},
	async afterRender(){
		btnContact.afterRender()
		this.addSpecs();
		await this.changeImage();
		if(this.product[0].dimensi == null && this.product[0].jenis == null){
			$('.wrap-dimensi').remove()
		}
		else if(this.product[0].dimensi == null){
			this.addJenis();
		}else if(this.product[0].jenis == null){
			this.addDimensi();
		}
	},

}

export default detailProducts;