const getDataUser = {

	async getAll(){
		this.data = {};
		await $.getJSON("http://ip-api.com/json",async (data)=> {
        	this.data = await {
        		ip_address : data.query,
        		country : data.country,
        		regionName : data.regionName,
        		city : data.city,
        		isp : data.isp,
        		browser : navigator.appCodeName,
        		date : new Date().toString()
        	};
        })
		return this.data
	}
}

export default getDataUser;