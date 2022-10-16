import hero from '../components/hero'
import visimisi from '../components/visimisi'
import quality from '../components/quality'
import product from '../components/product'
import portofolio from '../components/portofolio'
import btnContact from '../components/btncontact'
const homepage = {
	async init(){
		return `
			${await btnContact.init()}
			<section id="hero">
				${await hero.init()}
			</section>
			<section>
				${await visimisi.init()}
			</section>
			<section>
				${await quality.init()}
			</section>
			<section>
				${await portofolio.init()}
			</section>
			<section>
				${await product.init()}
			</section>
		`;
	},
	async afterRender(){
		await btnContact.afterRender();
		await hero.afterRender();
		await product.afterRender();
		await portofolio.afterRender()
	},

}

export default homepage;