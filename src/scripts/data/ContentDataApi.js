class ContentDataApi {
	baseUrl = "";

	constructor(){
		this.baseUrl = "http://localhost:3000"
	}

	async request(request) {
        return await $.ajax({
            type: `GET`,
            url: `${this.baseUrl}/${request}`,
        });
    }

	async getNContentsPerusahaan(){
		let data;
		await this.request('api/contents')
			.then((response, status) => {
                data = (status !== 'error') ? response : status;
            });
        return data;
	}
}


export default ContentDataApi;