import btnContact from '../components/btncontact'
import portofolio from '../components/home/portofolio'
import visimisi from '../components/home/visimisi'
import ContentData from '../../data/ContentData'
const aboutUs = {
	async init(){
		this.data = new ContentData()
		this.dataHero = await this.data.getDataHero();
		return `
			${await btnContact.init()}
			<section class="w-full flex flex-col xl:px-[5%]">
				<div class="flex h-full flex-col md:flex-row relative px-[40px] lg:px-[0]">
					<div class="absolute w-full h-full bg-red-200">
						<img src="./images/loading.gif" data-src="${this.dataHero.img[1].src}" class="lazyload w-full h-full z-0 object-cover select-none image-hero"></img>
					</div>
					<div class="absolute w-full h-full aboutus-bg">
					</div>
					<div class="w-full md:w-2/4 h-full h-[500px] flex z-20 ">
						<div class="w-full h-full mb-4 flex">
							<img src="images/Logo.png" class="w-[250px] h-[250px] md:w-[250px] md:h-[250px] m-auto"/>
						</div>
					</div>
					<div class="w-full md:w-2/4 h-full md:p-8 font-text flex flex-col my-auto z-20">
						<h3 class="my-auto font-title text-black uppercase text-center text-[24px] leading-[30px] font-primary font-[700]">Tentang Kami <br> <span class="text-red-600 text-[21px]">PT Restu Agung Narogong</span></h3>
						<p class="text-[16px] font-primary my-2 text-justify font-[500]"><span class="text-red-600 font-semibold">PT Restu Agung Narogong</span> adalah perusahaan yang bergerak di bidang Kontraktor, Supplier, manufacture, Fabrikasi & Engineering. Selain itu PT. Restu agung Narogong juga memiliki beberapa unit usaha yang mana salah satunya adalah RAN  PRECAST.</p>
						<p class="text-[16px] font-primary my-2 text-justify font-[500]"><span class="text-red-600 font-semibold">RAN Precast</span> merupakan salah satu unit usaha dari PT. Restu Agung Narogong yang bergerak pada penjualan produk precast, diantaranya terdapat U-Ditch, Cover U-Ditch, Box Culvert, Cansteen, Barier dan Paving Block. Semua produk yang dihasilkan oleh RAN Precast merupakan produk bermutu tinggi karena telah melewati beberapa pengujian yang berdampak pada hasil produk yang sangat berkualitas.</p>
					</div>
				</div>
			</section>
			<section class="xl:px-[5%]">
				${await visimisi.init()}
			</section>
			<section class=" xl:px-[5%]">
				${await portofolio.init()}
			</section>
			
		`;
	},
	async afterRender(){
		await btnContact.afterRender();
		await portofolio.afterRender();
	},

}

export default aboutUs;