import btnContact from '../components/btncontact'
import ContentData from '../../data/ContentData'
const aboutUs = {
	async init(){
		this.data = new ContentData()
		this.dataHero = await this.data.getDataHero();
		return `
			${await btnContact.init()}
			<section class="w-full h-[100vh] flex flex-col">
				<div class="w-full h-full bg-red-600 flex">
					<form class="w-[400px] h-auto bg-white m-auto flex flex-col px-[40px]">
						<img src="images/Logo.png" class="w-[60px] h-[60px] mx-auto mt-[20px]">
						<h3 class="w-full text-center mt-[20px] font-primary text-[17px] font-[600] uppercase">Feedback</h3>
						<h4 class="text-black font-primary text-center mt-[40px] text-[13px]">Bagaimana penilaianmu terhadap Ranprecast?</h4>
						<input type="text" name="rating" class="rating hidden"  value="1" />
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
						<input type="text" name="name" placeholder="Nama" class="w-full h-[40px] px-2 border border-1 border-gray-200 font-primary my-[5px] focus:outline-none focus:border-red-600 text-[13px]">
						<input type="text" name="email" placeholder="Email" class="w-full h-[40px] px-2 border border-1 border-gray-200 font-primary my-[5px] focus:outline-none focus:border-red-600 text-[13px]">
						<input type="text" name="pesan" placeholder="Pesan" class="w-full h-[100px] px-2 border border-1 border-gray-200 font-primary my-[5px] focus:outline-none focus:border-red-600 text-[13px]">

						<input type="submit" class="px-[105px] py-[12px] text-white bg-red-600 font-primary text-[12px] my-[50px]" value="KIRIM FEEDBACK">
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
	async afterRender(){
		this.testimoniStar()
	},

}

export default aboutUs;