const visimisi = {
	init(){
		return `
			<div class="w-full  flex flex-col md:flex-row md:py-8">
				<div class="w-full md:w-2/4 bg-black flex flex-col p-[25px] py-[50px] md:p-[50px]">
					<div class="w-full flex mb-4 border-b-2 border-red-600">
						<h3 class="mx-auto font-title text-4xl md:text-5xl p-2 text-white tracking-wider mt-auto">VISI</h3>
					</div>
					<div class="text-sm md:text-base text-white font-text text-center mx-auto mb-auto font-[500]">Menjadikan perusahaan industry beton yang menghasilkan produk berkualitas, dengan mengutamakan “research and development” serta inovasi, sehingga menjadi perusahaan industry beton yang bertaraf internasional.</div>
				</div>
				<div class="w-full md:w-2/4 flex flex-col p-[25px] py-[50px] md:p-[50px]">
					<div class="w-full flex mb-4 border-b-2 border-red-600">
						<h3 class="mx-auto font-title text-4xl md:text-5xl p-2 text-black tracking-wider mt-auto">MISI</h3>
					</div>
					<ul class="text-sm md:text-base text-black font-text text-left mx-auto mb-auto font-[500]">
						<li class="my-4">Menghasilkan produk-produk inovatif dan berkualitas, yang dapat mengikuti perubahan dan perkembangan zaman.</li>
						<li class="my-4">Menjalin Kerjasama dengan mengedepankan profesionalisme, integritas. Kejujuran dan keadilan yang berfokus pada kebutuhan pelanggan.</li>
						<li class="my-4">Mewujudkan SDM Ketenagakerjaan yang kompeten, dan membuka akses kesempatan kerja yang lebih luas.</li>
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