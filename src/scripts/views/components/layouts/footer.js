const footer = {
  init() {
    return `
		<div id="footer" class="px-[23px] py-[13px] xl:px-[5%] xl:mt-[36px] lg:flex">
			<div>
				<h2 class="text-[18px] font-primary text-black font-[700] leading-[22px] uppercase">Hubungi Kami</h2>
				<h4 class="text-[13px] leading-[16px] font-[600] color-primary mt-[13px] uppercase font-primary">PT. Restu Agung Narogong</h4>
				<div class="flex mt-[13px]">
					<div class="w-1/8">
						<svg xmlns="http://www.w3.org/2000/svg" class="text-red-600 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
					  	<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
						</svg>
					</div>
					<span class="text-[12px] font-primary font-[500] w-7/8">Jl. Raya PPLI, Ds. Nambo Kec. Klapanungga Kab. Bogor 16820 – Jawa Barat (Workshop 1)</span>
				</div>
				<div class="flex mt-[5px]">
					<div class="w-1/8">
						<svg xmlns="http://www.w3.org/2000/svg" class="text-red-600 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
					  	<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
						</svg>
					</div>
					<span class="text-[12px] font-primary font-[500] w-7/8">Ds. Klapasawit Kec. Kalimanah Kab. Purbalingga – Jawa Tengah (Workshop 2)</span>
				</div>
				<div class="flex mt-[5px]">
					<div class="w-1/8">
						<svg xmlns="http://www.w3.org/2000/svg" class="text-red-600 h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
					  	<path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
					  	<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
						</svg>
					</div>
					<a href="tel:+62281-890-2251" class="text-[12px] font-primary font-[500] w-7/8">0281-890-2251 (Fax)</a>
				</div>
				<div class="flex mt-[5px]">
					<div class="w-1/8">
						<svg xmlns="http://www.w3.org/2000/svg" class="text-red-600 h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
						  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
						  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</svg>
					</div>
					<a href="mailto:ranprecast@gmail.com" class="text-[12px] font-primary font-[500] w-7/8">ranprecast@gmail.com</a>
				</div>
			</div>

			<div class="mt-[12px] lg:ml-auto lg:mt-auto">
				<h5 class="text-[12px] leading-[15px] font-[600] font-primary lg:text-[13px]"> Media Sosial</h5>
				<div class="mt-[13px] lg:my-[22px]">
					<a href="https://instagram.com/ranprecast?igshid=YmMyMTA2M2Y=" target="_blank" class="fa fa-instagram text-[20px] bg-gray-200 p-[4px] rounded-md color-primary mx-[5px]"></a>
					<a href="https://www.youtube.com/channel/UC8Ors0Yr40Q9GZ4rmSBbDRQ" target="_blank" class="fa fa-youtube text-[20px] bg-gray-200 p-[4px] rounded-md color-primary mx-[5px]"></a>
				</div>
				<span class="text-[10px] font-primary font-[600] mt-[15px] lg:text-[14px]">Copyright ©2022. Designer By <span class="text-red-600">PT.Restu Agung Narogong</span></span>
			</div>

		</div>`;
  },
  afterRender() {
    return ``;
  },
};

export default footer;
