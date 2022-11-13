import APIConfig from '../config/APIConfig';

class ContentData extends APIConfig{
	// start request dari /api
	async getCompanyName(){
		return await this.request({
			request : "nama",
			method : "GET"
		})
	}

	async getCompanyDescription(){
		return await this.request({
			request : "deskripsi",
			method : "GET"
		})
	}
}

export default ContentData;