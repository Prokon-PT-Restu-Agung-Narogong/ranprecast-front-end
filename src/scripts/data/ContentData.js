import APIConfig from '../config/APIConfig';

class ContentData extends APIConfig{
	// start request dari /api
	async getDataTentang(){
		return await this.requestGET({
			request : "tentang",
		})
	}

	async getDataVisiMisi(){
		return await this.requestGET({
			request : "visimisi",
		})
	}

	async getDataQuality(){
		return await this.requestGET({
			request : "keunggulan",
		})
	}

	async getDataPortofolio(){
		return await this.requestGET({
			request : "portofolio",
		})
	}

	async getDataProduk(){
		return await this.requestGET({
			request : "produk",
		})
	}
	async getDataProdukByID(id){
		return await this.requestGET({
			request : `produk/${id}`,
		})
	}
	async getDataFeedback(){
		return await this.requestGET({
			request : "testimoni",
		})
	}
	async getDataKontak(){
		return await this.requestGET({
			request : "kontak",
		})
	}

}

export default ContentData;