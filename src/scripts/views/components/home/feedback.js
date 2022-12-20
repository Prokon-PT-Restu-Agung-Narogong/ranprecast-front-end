import ContentData from '../../../data/ContentData'
const feedback = {
  async init() {
		this.contentData = new ContentData();
		this.dataFeedback = await this.contentData.getDataFeedback();
		this.valueAvarage = this.avarageFeedback().toFixed(1);
    return `
		<div class="w-full h-auto flex flex-col">
			<h3 class="text-[16px] font-primary font-[700] uppercase text-center mt-[34px] xl:text-[24px]">Penilaian <span class="text-red-600">RAN Precast</span></h3>

			<div class="text-center font-[600] font-primary text-[40px] color-primary mt-[20px]">${this.valueAvarage}<i class="text-[20px] text-normal text-gray-700">/5</i></div>
				<div class="flex mt-[7px] avarage-testimoni w-[fit-content] mx-auto" style="${this.cssCustomGradient()}">
					<i class="fa fa-star text-[20px] md:text-[30px] mx-[1px]" ></i>
					<i class="fa fa-star text-[20px] md:text-[30px] mx-[1px]"></i>
					<i class="fa fa-star text-[20px] md:text-[30px] mx-[1px]"></i>
					<i class="fa fa-star text-[20px] md:text-[30px] mx-[1px]"></i>
					<i class="fa fa-star text-[20px] md:text-[30px] mx-[1px]"></i>
				</div>
		
			<div class="text-[20px] px-[20px] font-primary font-[700] text-gray-800 leading-[5px] mt-[40px] text-right">Latest Feedback</div>
			<ul class="feedback-list w-full flex h-auto mb-auto  overflow-x-hidden mb-[39px] overflow-y-hidden justify-between mt-[40px]">
				
			</ul>
		</div>`;
  },
  avarageFeedback(){
  	let sum = 0;
  	let length = this.dataFeedback.length;
  	this.dataFeedback.forEach((e)=>{
  		sum += e.rating;
  	});
  	return sum/length
  },
  cssCustomGradient(){
  	let leftGradient = this.valueAvarage * 100 / 5
  	let rightGradient = 100 - leftGradient
  	return `
			background: linear-gradient(90deg, #DC2626 ${leftGradient}%, rgba(5,32,37,1) ${rightGradient}%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
  	`;
  },
  itemFeedback({name,rating,deskripsi}){
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
  	<li class="min-w-[120px] h-[120px] md:min-w-[300px] md:h-[150px] ml-[15px] p-[11px] bg-gray-100">
				<div class="flex">
					<h4 class="text-[12px] font-[600] leading-[8px] md:text-[16px] my-4">${name}</h4>
				</div>
				<div class="flex mt-[7px]">
					${ratingProses()}
				</div>
				<p class="text-[8px] leading-[9px] mt-[10px] md:text-[14px] md:leading-[18px]">${deskripsi}</p>
		</li>`
  },

  afterRender(){
  	let max = 4;
  		this.dataFeedback.sort().reverse().forEach((e,i)=>{
  			if (i < 4) {
	  			$('.feedback-list').append(this.itemFeedback({
	  				name : e.name,
	  				rating : e.rating,
	  				deskripsi : e.deskripsi
	  			}));  				
  			}
  		})
  }
};

export default feedback;
