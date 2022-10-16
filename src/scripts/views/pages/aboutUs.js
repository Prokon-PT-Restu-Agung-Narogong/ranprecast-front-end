import btnContact from '../components/btncontact'
import portofolio from '../components/portofolio'
import visimisi from '../components/visimisi'
const aboutUs = {
	async init(){
		return `
			${await btnContact.init()}
			<section class="w-full flex flex-col p-8">
				<div class="flex h-full flex-col md:flex-row">
					<div class="w-full md:w-2/4 h-full max-h-[31em] flex ">
						<div class="bg-white w-full h-full mb-4 rounded-l-[10%] flex">
							<img src="images/Logo.png" class="w-[70%] h-[70%] md:w-[400px] md:h-[400px] m-auto"/>
						</div>
					</div>
					<div class="w-full md:w-2/4 h-full md:p-8 font-text">
						<h3 class="my-auto font-title text-xl md:text-4xl text-black">Tentang Kami <span class="text-red-600">PT Restu Agung Narogong</span></h3>
						<p class="text-sm md:text-base my-2 text-justify font-[500]"><span class="text-red-600 font-semibold">PT Restu Agung Narogong</span> adalah perusahaan yang bergerak di bidang Kontraktor, Supplier, manufacture, Fabrikasi & Engineering. Selain itu PT. Restu agung Narogong juga memiliki beberapa unit usaha yang mana salah satunya adalah RAN  PRECAST.</p>
						<p class="text-sm md:text-base my-2 text-justify font-[500]"><span class="text-red-600 font-semibold">RAN Precast</span> merupakan salah satu unit usaha dari PT. Restu Agung Narogong yang bergerak pada penjualan produk precast, diantaranya terdapat U-Ditch, Cover U-Ditch, Box Culvert, Cansteen, Barier dan Paving Block. Semua produk yang dihasilkan oleh RAN Precast merupakan produk bermutu tinggi karena telah melewati beberapa pengujian yang berdampak pada hasil produk yang sangat berkualitas.</p>
					</div>
				</div>
			</section>
			<section>
				${await visimisi.init()}
			</section>
			<section>
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