const header = {
  init() {
    return `
		<div class="w-full h-auto bg-white flex border-b-4 border-gray-100 px-[15px] py-[4px] relative xl:px-[5%]">
			<div class="w-2/4 md:w-3/4 flex pl-[25px] md:pl-[50px] white">
				<img data-src="./images/Logo.png" class="lazyload my-auto w-[50px] h-[50px] md:w-[70px] md:h-[70px]">
			</div>

			<ul class="hidden md:flex md:ml-auto">
				<a href="#/" class="md:text-[14px] lg:text-[16px] md:font-[600] md:leading-[19px] md:text-black md:my-auto md:uppercase md:mx-2 md:font-primary hover:text-red-600">Beranda</a>
				<a href="#/products" class="md:text-[14px] lg:text-[16px] md:font-[600] md:leading-[19px] md:text-black md:my-auto md:uppercase md:mx-2 md:font-primary hover:text-red-600">Produk</a>
				<a href="#/feedback" class="md:text-[14px] lg:text-[16px] md:font-[600] md:leading-[19px] md:text-black md:my-auto md:uppercase md:mx-2 md:font-primary hover:text-red-600">Feedback</a>
			</ul>

			<button class="btn-bar ml-auto my-auto md:hidden">
				<i class="fa-solid fa-bars text-[30px]" ></i>
			</button>

			<ul class="header-bar w-full absolute z-30 bg-white left-0 top-[100%] flex flex-col p-4 hidden">
				<a href="#/" class="text-[15px] w-full text-center font-primary font-[600] py-2 hover:bg-red-600 hover:color-primary xl:text-[16px]">Beranda</a>
				<a href="#/products" class="text-[15px] w-full text-center font-primary font-[600] py-2 hover:bg-red-600 hover:color-primary xl:text-[16px]">Produk</a>
				<a href="#/feedback" class="text-[15px] w-full text-center font-primary font-[600] py-2 hover:bg-red-600 hover:color-primary xl:text-[16px]">Feedback</a>
			</ul>


		</div>`;
  },
  afterRender() {
  	$('.btn-bar').on('click',()=>{
  		$('.header-bar').toggleClass('hidden')
  	})
    return ``;
  },
};

export default header;
