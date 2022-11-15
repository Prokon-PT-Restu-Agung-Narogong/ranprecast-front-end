const quality = {
	init(){
		return `
		<section class="w-full md:my-[70px] flex flex-col">
			<h3 class="font-title text-3xl md:text-4xl mx-auto mb-8">Keunggulan Produk <span class="text-red-600">RAN Precast</span></h3>
			<div class="flex h-full">
				<div class="w-full max-sm h-full grid grid-cols-4 grid-rows-2 gap-4 py-2 md:p-12">
					<div class="flex flex-col">
						<div class="bg-white w-full h-full  flex">
							<img src="images/Logo.png" class="w-[200px] h-[200px] m-auto"/>
						</div>
					</div>
					<div class="flex flex-col">
						<svg xmlns="http://www.w3.org/2000/svg" class="mt-auto mb-2 text-red-600 mx-auto h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
						  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
						</svg>
						<h4 class="text-xs md:text-sm font-bold mx-auto mb-auto font-text font-[600] capitalize text-center">Produk Berkualitas</h4>
					</div>
					<div class="flex flex-col">
						<svg xmlns="http://www.w3.org/2000/svg" class="mt-auto mb-2 text-red-600 mx-auto h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
						  <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
						</svg>
						<h4 class="text-xs md:text-sm font-bold mx-auto mb-auto font-text font-[600] capitalize text-center">Harga bersaing</h4>
					</div>
					<div class="flex flex-col">
						<svg xmlns="http://www.w3.org/2000/svg" class="mt-auto mb-2 text-red-600 mx-auto h-12 w-12" viewBox="0 0 20 20" viewBox="0 0 20 20" fill="currentColor">
						  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
						  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
						</svg>
						<h4 class="text-xs md:text-sm font-bold mx-auto mb-auto font-text font-[600] capitalize text-center">Layanan fast respon</h4>
					</div>
					<div class="flex flex-col">
						<svg xmlns="http://www.w3.org/2000/svg" class="mt-auto mb-2 text-red-600 mx-auto h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
						  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
						</svg>
						<h4 class="text-xs md:text-sm font-bold mx-auto mb-auto font-text font-[600] capitalize text-center">Ketepatan waktu pengiriman</h4>
					</div>
					<div class="flex flex-col">
						<svg xmlns="http://www.w3.org/2000/svg" class="mt-auto mb-2 text-red-600 mx-auto h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
						  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
						</svg>
						<h4 class="text-xs md:text-sm font-bold mx-auto mb-auto font-text font-[600] capitalize text-center">Siap kirim seluruh Indonesia</h4>
					</div>
					<div class="flex flex-col">
						<svg xmlns="http://www.w3.org/2000/svg" class="mt-auto mb-2 text-red-600 mx-auto h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
						  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
						</svg>
						<h4 class="text-xs md:text-sm font-bold mx-auto mb-auto font-text font-[600] capitalize text-center">Gratis konsultasi produk</h4>
					</div>
					<div class="flex flex-col ">
						<svg xmlns="http://www.w3.org/2000/svg" class="mt-auto mb-2 text-red-600 mx-auto h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
						  <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd" />
						</svg>
						<h4 class="text-xs md:text-sm font-bold mx-auto mb-auto font-text font-[600] capitalize text-center">Melayani dalam jumlah besar maupun kecil</h4>
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