import ContentData from '../../../data/ContentData'
const portofolio = {
	async init(){
		this.contentData = new ContentData();
		this.dataPortofolio = await this.contentData.getDataPortofolio();
		return `
		<div class="w-full flex flex-col my-[44px]">
			<h3 class="text-[16px] font-primary font-[700] uppercase text-center md:text-[20px] xl:text-[24px]">Portofolio <span class="text-red-600">RAN Precast</span></h3>
			<ul class="list-portofolio w-full flex h-[180px] mb-auto overflow-x-scroll px-[30px] mt-[44px] xl:h-auto xl:px-0 xl:mt-[36px]">
			</ul>

		</div>`;
	},
	listItem(linkImage,i){
		return `<li class="min-w-[300px] w-full md:w-[30%] cursor-pointer list-${i} xl:min-w-[405px] xl:h-[210px]">
					<img src="images/loading.gif" data-src="${linkImage}" class="lazyload w-full h-full object-cover p-2 shadow-inner" />
				</li>`
	},
	layerForReview(linkImage){
		let template = `
		<div class="layer-review-portofolio fixed right-[100%] w-full h-full z-30 flex" style="background-color: rgba(0, 0, 0, 0.6);">
				<div class="w-full h-auto flex flex-col md:flex-row md:p-8" >
					<img src="${linkImage}" class="w-auto h-auto my-auto md:mx-auto md:my-0">
				</div>
		</div>`;
		const layer = $('.layer-review-portofolio');
		if(layer.length == 0){
			$('body').append(template)
		}
		layer.animate({left : 0},700)
		layer.on('click',()=>{
			layer.remove()
		})
	},
	afterRender(){
		let i =0;
		this.dataPortofolio.forEach((e)=>{
			$('.list-portofolio').append(this.listItem(e.img,i));
			$(`.list-${i}`).on('click',()=>{
				this.layerForReview(e.img);
			})
			i++;
		})
		return ``;
	}
}

export default portofolio;