const btnContact = {
	init(){
		return `
		<div class="w-[120px] h-auto fixed z-30 right-4 md:right-12 bottom-12 flex cursor-pointer grid grid-cols-1 grid-rows-1 gap-4 ">
			<a href="https://wa.me/6281324198783?text=Saya%20tertarik%20dengan%20produk%20yang%20ditawarkan%20di%20website%20https://www.ranprecast.com/" target="_blank" class="w-full h-[60px] flex  btn-contact hidden">
				<div class="w-2/4 my-auto font-text font-semibold text-xs bg-white text-center">
					Admin 1
				</div>
				<div class="w-2/4 h-full my-auto flex bg-green-600 rounded-[50%]">
					${this.iconWhatsApp()}
				</div>
			</a>
			<a href="https://wa.me/6285817355087?text=Saya%20tertarik%20dengan%20produk%20yang%20ditawarkan%20di%20website%20https://www.ranprecast.com/" target="_blank" class="w-full h-[60px] flex  btn-contact hidden">
				<div class="w-2/4 my-auto font-text font-semibold text-xs bg-white text-center">
					Admin 2
				</div>
				<div class="w-2/4 h-full my-auto flex bg-green-600 rounded-[50%]">
					${this.iconWhatsApp()}
				</div>
			</a>
			<a href="mailto:ranprecast@gmail.com" target="_blank" class="w-full h-[60px] flex  btn-contact hidden">
				<div class="w-2/4 my-auto font-text font-semibold text-xs bg-white text-center">
					Email
				</div>
				<div class="w-2/4 h-full my-auto flex bg-black rounded-[50%]">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-[50%] w-[50%] m-auto text-white" viewBox="0 0 20 20" fill="currentColor">
					  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
					  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
					</svg>
				</div>
			</a>
			<div class="ml-auto w-2/4 h-[60px] flex bg-red-600 rounded-[50%] btn-close open ">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-[50%] w-[50%] m-auto text-white" viewBox="0 0 20 20" fill="currentColor">
				  <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
				</svg>
			</div>
		</div>
		`;
	},
	iconWhatsApp(){
		return `<svg version="1.1" id="Layer_1" class="h-[50%] w-[50%] m-auto text-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 308 308" fill="currentColor"  xml:space="preserve">
	<path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"/>
	<path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"/></svg>`
	},
	afterRender(){
		$('.btn-close').on('click',()=>{
			$('.btn-contact').toggleClass('hidden');
			const btnClose = $('.btn-close');
			btnClose.toggleClass('open');
			if(btnClose.hasClass('open')){
				btnClose.html(`<svg xmlns="http://www.w3.org/2000/svg" class="h-[50%] w-[50%] m-auto text-white" viewBox="0 0 20 20" fill="currentColor">
				  <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
				</svg>`);
			}else{
				btnClose.html(`<svg xmlns="http://www.w3.org/2000/svg" class="h-[50%] w-[50%] m-auto text-white" viewBox="0 0 20 20" fill="currentColor">
				  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
				</svg>`);
			}

		})
		return ``;
	}
}

export default btnContact;