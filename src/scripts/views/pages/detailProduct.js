import UrlParser from '../../routes/url-parser';
import dataProducts from '../../data/products';
import btnContact from '../components/btncontact';
const productspage = {
	async init(){
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		this.product = dataProducts.filter((e)=>{
			 return e.id == url.id
		})
		this.lengthImage = this.product[0].img.length;
		this.indexImage = 0;
		return `
			${btnContact.init()}
			<section>
				<div class="w-full min-h-[600px] flex md:flex-row flex-col">
					<div class="w-full md:w-2/4 h-[300px] md:h-[600px] p-4 relative img-wrap">
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
					<div class="w-full md:w-2/4 h-full p-4 md:py-10">
						<h2 class="text-4xl md:text-5xl mt-auto font-semibold font-title tracking-wider text-black">${this.product[0].name}</h2>
						<p class="text-sm md:text-base font-text min-h-[200px] md:min-h-[250px] mt-4">${this.product[0].desc}</p>
						<a href="https://wa.me/6285817355087?text=Saya%20tertarik%20dengan%20produk%20 ${this.product[0].name}%20yang%20ditawarkan%20di%20website%20https://www.ranprecast.com/" target="_blank" class="p-4 bg-red-600 text-white uppercase">Pesan</a>
						<a href="#/products" class="p-4 bg-gray-500 text-white uppercase hover:bg-red-600">Barang Lain</a>
					</div>
				</div>
				<div class="flex flex-col md:p-8 md:flex-row">
					<div class="w-full md:w-full p-8 border-y-2 border-gray-200">
						<h5 class="text-2xl my-2 w-full md:w-1/6 font-semibold font-title tracking-wider text-black">Spesifikasi</h5>
						<ul class="pl-8 list-decimal specs font-text">
						</ul>
					</div>
					<div class="w-full md:w-2/4 p-8 border-y-2 border-l-2 border-gray-200 wrap-dimensi">
						<h5 class="text-2xl my-2 w-full md:w-1/6 font-semibold font-title tracking-wider text-black">${this.product[0].dimensi == null ? "Jenis" : "Dimensi"}</h5>
						<ul class="pl-8 list-disc dimensi w-full md:w-2/4 font-text">
						</ul>
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
		return `<img src="./images/loading.gif" data-src="images/product/${this.product[0].img[this.indexImage]}" class="lazyload w-full h-full bg-white shadow-xl rounded-lg  object-cover select-none img-wrap">`;
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

export default productspage;