import ContentData from '../../../data/ContentData'
const feedback = {
  async init() {
		this.contentData = new ContentData();
		this.dataFeedback = await this.contentData.getDataFeedback();
    return `
		<div class="w-full h-auto flex flex-col">
			<h3 class="text-[16px] font-primary font-[700] uppercase text-center mt-[34px] xl:text-[24px]">Penilaian <span class="text-red-600">RAN Precast</span></h3>
			<ul class="feedback-list w-full flex h-auto mb-auto p-4 overflow-x-scroll my-[39px]">
				
			</ul>
		</div>`;
  },

  itemFeedback({img,name,rating,deskripsi}){
  	let ratingProses = ()=>{
  		let tagHtml = ''
  		for (var i = 0; i < rating; i++) {
  			tagHtml += '<i class="fa fa-star text-[5px] md:text-[9px] mx-[1px] color-primary"></i>'
  		}
  		for (var i = 0; i < 5 - rating; i++) {
  			tagHtml += '<i class="fa fa-star text-[5px] md:text-[9px] mx-[1px] color-gray-100"></i>'
  		}
  		return tagHtml;
  	}


  	return `
  	<li class="min-w-[120px] h-[120px] md:min-w-[300px] md:h-[150px] ml-[15px] p-[11px]">
				<div class="flex">
					<img src="${img}" class="bg-gray-600 w-[18px] h-[18px] md:w-[26px] md:h-[26px] object-cover rounded-[100%]"></img>
					<h4 class="text-[7px] font-[600] leading-[8px] my-auto ml-[9px] md:text-[12px]">${name}</h4>
				</div>
				<div class="flex mt-[7px]">
					${ratingProses()}
				</div>
				<p class="text-[8px] leading-[9px] mt-[10px] md:text-[14px] md:leading-[18px]">${deskripsi}</p>
		</li>`
  },

  afterRender(){
  		this.dataFeedback.forEach((e)=>{
  			$('.feedback-list').append(this.itemFeedback({
  				img : e.img,
  				name : e.name,
  				rating : e.rating,
  				deskripsi : e.deskripsi
  			}));
  		})
  }
};

export default feedback;
