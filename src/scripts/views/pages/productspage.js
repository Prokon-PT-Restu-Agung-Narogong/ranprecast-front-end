import btnContact from '../components/btncontact'
import allproducts from '../components/allproducts'
const productspage = {
	async init(){
		return `
			${btnContact.init()}
			<section>
				${allproducts.init()}
			</section>
		`;
	},
	async afterRender(){
		btnContact.afterRender()
		allproducts.afterRender();
	},

}

export default productspage;