const footer = {
	init(){
		return `
		<div id="footer" class="w-full h-auto md:h-[400px] p-12 bg-white">
			<h2 class="text-4xl md:text-5xl font-title my-4">Hubungi Kami</h2>
			<h4 class="text-base md:text-lg font-text font-[800] uppercase text-gray-700">PT. Restu Agung Narogong</h4>
			<div class="flex">
				<svg xmlns="http://www.w3.org/2000/svg" class="text-red-600 h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
				  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
				</svg>
				<span class="my-auto font-text font-semibold text-gray-700 text-xs md:text-sm">Jl. Raya PPLI, Ds. Nambo Kec. Klapanungga Kab. Bogor 16820 – Jawa Barat (Workshop 1)</span>
			</div>
			<div class="flex mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="text-red-600 h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
				  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
				</svg>
				<span class="my-auto font-text font-semibold text-gray-700 text-xs md:text-sm">Ds. Klapasawit Kec. Kalimanah Kab. Purbalingga – Jawa Tengah (Workshop 2)</span>
			</div>
			<div class="flex">
				<svg xmlns="http://www.w3.org/2000/svg" class="text-red-600 h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
				  <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
				  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
				</svg>

				<a href="tel:+62281-890-2251" class="my-auto font-text font-semibold text-gray-700 text-xs md:text-sm">0281-890-2251 (Fax)</a>
			</div>
			<div class="flex">
				<svg xmlns="http://www.w3.org/2000/svg" class="text-red-600 h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
				  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
				  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
				</svg>

				<a href="mailto:ranprecast@gmail.com" class="my-auto font-text font-semibold text-gray-700 text-xs md:text-sm">ranprecast@gmail.com</a>
			</div>

			<div class="flex flex-col md:flex-row mt-8">
				<div class="w-1/6 flex">
					<a href="https://instagram.com/ranprecast?igshid=YmMyMTA2M2Y=" target="_blank" class="mx-2 fa fa-instagram text-5xl m-auto text-red-600 shadow-md rounded-3xl p-2"></a>
					<a href="https://www.youtube.com/channel/UC8Ors0Yr40Q9GZ4rmSBbDRQ" target="_blank" class="mx-2 fa fa-youtube text-5xl m-auto text-red-600 shadow-md rounded-3xl p-2"></a>
				</div>
				<div class="w-5/6 flex mt-4 md:mt-0">
					<span class="my-auto ml-auto font-text text-sm font-bold">Copyright ©2022. Designer By <span class="text-red-600">PT.Restu Agung Narogong</span></span>
				</div>
			</div>

		</div>`;
	},
	afterRender(){
		return ``;
	}
}

export default footer;