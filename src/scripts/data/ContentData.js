import APIConfig from '../config/APIConfig';

class ContentData extends APIConfig{
	// start request dari /api
	async getDataHero(){
		return await this.request({
			request : "hero",
			method : "GET"
		})
	}

	async getDataVisiMisi(){
		return await this.request({
			request : "visimisi",
			method : "GET"
		})
	}

	async getDataQuality(){
		return await this.request({
			request : "keunggulan",
			method : "GET"
		})
	}

	async getDataPortofolio(){
		return await this.request({
			request : "portofolio",
			method : "GET"
		})
	}

	async getDataProduk(){
		return await this.request({
			request : "produk",
			method : "GET"
		})
	}
	async getDataProdukByID(id){
		return await this.request({
			request : `produk/${id}`,
			method : "GET"
		})
	}
	async getDataFeedback(){
		return await this.request({
			request : "testimoni",
			method : "GET"
		})
	}
}

export default ContentData;