import btnContact from '../components/btncontact'
import ContentData from '../../data/ContentData'
const aboutUs = {
	async init(){
		this.data = new ContentData()
		this.dataTentang = await this.data.getDataTentang();
		return `
			${await btnContact.init()}
			<section class="w-full h-auto flex flex-col py-[100px]  bg-red-600">
				<div class="w-full h-full flex">
					<form id="testimoniForm" class="w-full w-lg-[400px] h-auto bg-white m-auto flex flex-col px-[40px]">
						<img src="${this.dataTentang.logo}" class="w-[60px] h-[60px] mx-auto mt-[20px]">
						<h3 class="w-full text-center mt-[20px] font-primary text-[17px] font-[600] uppercase">Feedback</h3>
						<h4 class="text-black font-primary text-center mt-[40px] text-[13px]">Bagaimana penilaianmu terhadap Ranprecast?</h4>
						<input required type="text" name="rating" class="rating hidden"  value="1" />
						<div class="w-full mx-auto flex flex-col">
							<div class="mx-auto flex my-[13px]">
								<i class="fa-solid fa-star text-gray-400 color-primary testimoni-star text-[18px]"></i>
								<i class="fa-solid fa-star text-gray-400 testimoni-star text-[18px]"></i>
								<i class="fa-solid fa-star text-gray-400 testimoni-star text-[18px]"></i>
								<i class="fa-solid fa-star text-gray-400 testimoni-star text-[18px]"></i>
								<i class="fa-solid fa-star text-gray-400 testimoni-star text-[18px]"></i>
							</div>
							<span class="status text-[11px] font-primary color-primary mx-auto">Sangat Buruk</span>
						</div>
						<input required type="text" name="name" placeholder="Nama" class="w-full h-[40px] px-2 border border-1 border-gray-200 font-primary my-[5px] focus:outline-none focus:border-red-600 text-[13px]">
						<input required type="email" name="email" placeholder="Email" class="w-full h-[40px] px-2 border border-1 border-gray-200 font-primary my-[5px] focus:outline-none focus:border-red-600 text-[13px]">
						<input required type="text" name="deskripsi" placeholder="Pesan" class="w-full h-[100px] px-2 border border-1 border-gray-200 font-primary my-[5px] focus:outline-none focus:border-red-600 text-[13px]">

						<h4 class="message-submit text-white font-primary text-center text-[13px] bgcolor-primary my-[5px] hidden">Berhasil Terkirim</h4>
						<input type="submit" class="px-[105px] py-[12px] text-white bg-red-600 font-primary text-[12px] my-[50px]" value="KIRIM FEEDBACK" disable>
					</form>
				</div>
			</section>
		`;
	},
	testimoniStar(){
		let status = ['Sangat Buruk','Buruk','Sedang','Baik','Sangat Baik'];
		$('.testimoni-star').each((e)=>{
			$('.testimoni-star')[e].addEventListener('click',(x)=>{
				x.target.classList.toggle('color-primary')
				$('.rating').val(e+1);
				$('.status').text(status[e]);
				for (var i = 0; i < e+1; i++) {
					$('.testimoni-star')[i].classList.add('color-primary')
				}
				for (var i = e+1; i < 5; i++) {
					$('.testimoni-star')[i].classList.remove('color-primary')
				}
			})
		})
	},
	
	async submitForm(){
		$('#testimoniForm').submit(async (event)=>{
			event.preventDefault()

			let form = $('#testimoniForm');
			let dataTestimoni = {
				rating : form.find("input[name='rating']").val(),
				name : form.find("input[name='name']").val(),
				email : form.find("input[name='email']").val(),
				deskripsi : form.find("input[name='deskripsi']").val(),
			}
			form.find("input[type='text'],input[type='email']").val('')
			await this.data.requestPOST({
				request : "testimoni",
				data : dataTestimoni
			}).then((e)=>{
				$('.message-submit').toggleClass('hidden')
				$('.message-submit').text('Berhasil Terkirim')
			}).error((e)=>{
				$('.message-submit').text('Gagal Terkirim')

			})


		})
	},
	validateForm(){
	    $("#testimoniForm").validate({
	      rules: {
	        name : {
	          required : true,
	          maxlength : 19,
	        },
	        deskripsi: {
	        	required :true,
	        	maxlength : 176
	        }
	      }
	    });
	  },
	async afterRender(){
		this.testimoniStar()
		this.validateForm();
		await this.submitForm();
	},

}

export default aboutUs;