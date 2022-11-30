import hero from "../components/products/hero";
import btnContact from '../components/btncontact'
import allproducts from '../components/products/allproducts'
const productspage = {
	async init(){
		return `
			${await btnContact.init()}
			<section class="xl:px-[5%]">
			${await hero.init()}
			</section>
			<section class="xl:px-[5%]">
				${await allproducts.init()}
			</section>
		`;
	},
	async afterRender(){
		await hero.afterRender();
		btnContact.afterRender();
		allproducts.afterRender();
	},

}

export default productspage;