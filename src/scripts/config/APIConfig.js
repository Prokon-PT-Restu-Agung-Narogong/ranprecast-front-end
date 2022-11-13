class APIConfig {
	baseUrl = "";

	constructor(){
		this.baseUrl = "https://operator.ranprecast.com/api"
	}

	async request({request,method}) {
        return await $.ajax({
            type: method,
            url: `${this.baseUrl}/${request}`,
        }).then((response, status) => {
            return (status !== 'error') ? response : status;
        });
    }

}


export default APIConfig;