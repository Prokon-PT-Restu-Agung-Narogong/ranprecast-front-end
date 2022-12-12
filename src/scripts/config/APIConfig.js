class APIConfig {
	baseUrl = "";

	constructor(){
		this.baseUrl = "https://gateway.ranprecast.com/api"
	}

	async requestGET({request}) {
        return await $.ajax({
            type: "GET",
            url: `${this.baseUrl}/${request}`,
        }).then((response, status) => {
            return (status !== 'error') ? response : status;
        });
    }

    async requestPOST({request,data}) {
        $.post(`${this.baseUrl}/${request}`,data)
    }

}


export default APIConfig;