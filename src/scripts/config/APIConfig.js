class APIConfig {
	baseUrl = "";

	constructor(){
		this.baseUrl = "http://localhost:3000/api"
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