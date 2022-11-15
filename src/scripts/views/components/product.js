import dataProducts from '../../data/products'

const product = {
	init(){
		return `
		<div id="product" class="w-full bg-black py-4 md:p-12">
		
				<h3 class="my-auto text-center font-title text-2xl md:text-4xl text-white p-2">Produk <span class="text-red-600">RAN Precast</span></h3>
						
			<div class="flex w-5/6 mx-auto md:h-[350px] mt-4">
				<ul id="product" class="w-full m-auto h-full flex flex-col md:flex-row md:px-8">
					<li class="w-full md:w-2/6 border border-2 border-black card card-product-1 ml-auto flex bg-no-repeat bg-center bg-cover lazyload" src="./images/loading.gif" style="background-image : url('images/product/${dataProducts[0].img[1]}')">
						<div class="mt-auto w-full p-8 flex flex-col desc-card">
							<h5 class="text-2xl text-white font-title">${dataProducts[0].name}</h5>
							<p class="text-sm font-text text-white break-words hidden text-justify desc">${dataProducts[0].desc}</p>
							<div class="mt-4 flex">
								<a href="#/product/${dataProducts[0].id}" class="p-2 bg-red-600 w-2/6 text-sm text-center font-[500] text-white font-text h-auto mr-auto">Detail</a>
							</div>
						</div>
					</li>
					<li class="w-full md:w-2/6 border border-2 border-black card card-product-2 flex bg-no-repeat bg-center bg-cover lazyload" src="./images/loading.gif" style="background-image : url('images/product/${dataProducts[1].img[0]}')">
						<div class="mt-auto w-full p-8 flex flex-col desc-card">
							<h5 class="text-2xl text-white font-title">${dataProducts[1].name}</h5>
							<p class="text-sm font-text text-white break-words hidden text-justify desc">${dataProducts[1].desc}</p>
							<div class="mt-4 flex">
								<a href="#/product/${dataProducts[1].id}" class="p-2 bg-red-600 w-2/6 text-sm text-center font-[500] text-white font-text h-auto mr-auto">Detail</a>
							</div>
						</div>
					</li>
					<li class="w-full md:w-2/6 border border-2 border-black card card-product-3 mr-auto flex bg-no-repeat bg-center bg-cover lazyload" src="./images/loading.gif" style="background-image : url('images/product/${dataProducts[2].img[0]}')">
						<div class="mt-auto w-full p-8 flex flex-col desc-card">
							<h5 class="text-2xl text-white font-title">${dataProducts[2].name}</h5>
							<p class="text-sm font-text text-white break-words hidden text-justify desc">${dataProducts[2].desc}</p>
							<div class="mt-4 flex">
								<a href="#/product/${dataProducts[2].id}" class="p-2 bg-red-600 w-2/6 text-sm text-center font-[500] text-white font-text h-auto mr-auto">Detail</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="flex w-5/6 mx-auto h-auto md:h-[350px] md:mt-2">
				<ul id="product" class="w-full m-auto h-full flex flex-col md:flex-row md:px-8">
					<li class="w-full md:w-2/6 border border-2 border-black card card-product-4 ml-auto flex bg-no-repeat bg-center bg-cover lazyload" src="./images/loading.gif" style="background-image : url('images/product/${dataProducts[3].img[0]}')">
						<div class="mt-auto w-full p-8 flex flex-col desc-card">
							<h5 class="text-2xl text-white font-title">${dataProducts[3].name}</h5>
							<p class="text-sm font-text text-white break-words hidden text-justify desc">${dataProducts[3].desc}</p>
							<div class="mt-4 flex">
								<a href="#/product/${dataProducts[3].id}" class="p-2 bg-red-600 w-2/6 text-sm text-center font-[500] text-white font-text h-auto mr-auto">Detail</a>
							</div>
						</div>
					</li>
					<li class="w-full md:w-2/6 border border-2 border-black card card-product-5 flex bg-no-repeat bg-center bg-cover lazyload" src="./images/loading.gif" style="background-image : url('images/product/${dataProducts[4].img[0]}')">
						<div class="mt-auto w-full p-8 flex flex-col desc-card">
							<h5 class="text-2xl text-white font-title">${dataProducts[4].name}</h5>
							<p class="text-sm font-text text-white break-words hidden text-justify desc">${dataProducts[4].desc}</p>
							<div class="mt-4 flex">
								<a href="#/product/${dataProducts[4].id}" class="p-2 bg-red-600 w-2/6 text-sm text-center font-[500] text-white font-text h-auto mr-auto">Detail</a>
							</div>
						</div>
					</li>
					<li class="w-full md:w-2/6 border border-2 border-black card card-product-6 mr-auto flex bg-no-repeat bg-center bg-cover lazyload" src="./images/loading.gif" style="background-image : url('images/product/${dataProducts[5].img[0]}')">
						<div class="mt-auto w-full p-8 flex flex-col desc-card">
							<h5 class="text-2xl text-white font-title">${dataProducts[5].name}</h5>
							<p class="text-sm font-text text-white break-words hidden text-justify desc">${dataProducts[5].desc}</p>
							<div class="mt-4 flex">
								<a href="#/product/${dataProducts[5].id}" class="p-2 bg-red-600 w-2/6 text-sm text-center font-[500] text-white font-text h-auto mr-auto">Detail</a>
							</div>
						</div>
					</li>
				</ul>
				</div>
				<div class="w-10/12 mt-9 md:flex">
					<a href="#/products" class="text-white ml-auto my-auto hover:bg-red-600 p-2 font-text border border-2 border-white hover:border-red-600">Lihat Semua</a>
				</div>
		</div>`;
	},
	hoverCard(nameClass){
		let element = $(`${nameClass}`);
		element.hover(()=>{
			$('#product .card').removeClass('md:w-4/6');
			$('#product .card').addClass('md:w-2/6');
			element.removeClass('md:w-2/6');
			element.addClass('md:w-4/6');
			element.find('.desc').removeClass('hidden')
		},()=>{
			$('#product .card').removeClass('md:w-4/6');
			$('#product .card').addClass('md:w-2/6');
			element.find('.desc').addClass('hidden')

		})
	},
	afterRender(){
		this.hoverCard('.card-product-1');
		this.hoverCard('.card-product-2');
		this.hoverCard('.card-product-3');
		this.hoverCard('.card-product-4');
		this.hoverCard('.card-product-5');
		this.hoverCard('.card-product-6');
		return ``;
	}
}

export default product;