const header = {
	init(){
		return `
		<div class="w-full h-[60px] md:h-[80px] bg-white flex border-b-4 border-gray-100">
			<div class="w-2/4 md:w-3/4 flex pl-[25px] md:pl-[50px] white">
				<img data-src="./images/Logo.png" class="lazyload my-auto w-[50px] h-[50px] md:w-[65px] md:h-[65px]"></img>
			</div>
			<ul class="w-2/4 md:w-1/2 flex">
				<a href="#/" class="text-xs md:text-base m-auto font-text text-black font-[900] font-semibold uppercase tracking-wider hover:text-red-600 text-red-600">Beranda</a>
				<a href="#/products" class="text-xs md:text-base m-auto font-text text-black font-[900] font-semibold uppercase tracking-wider hover:text-red-600">Produk</a>
				<a href="#/feedback" class="text-xs md:text-base m-auto font-text text-black font-[900] font-semibold uppercase tracking-wider hover:text-red-600">Feedback</a>
				<a href="#/login" class="text-xs md:text-base m-auto font-text text-black font-[900] font-semibold uppercase tracking-wider hover:text-red-600">Login</a>
			</ul>
		</div>`;
	},
	afterRender(){
		return ``;
	}
}

export default header;