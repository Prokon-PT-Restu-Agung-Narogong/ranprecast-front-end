import btnContact from "../components/btncontact";
import hero from "../components/home/hero";
import visimisi from "../components/home/visimisi";
import quality from "../components/home/quality";
import product from "../components/home/product";
import portofolio from "../components/home/portofolio";
import feedback from "../components/home/feedback";

const homepage = {
  async init() {
    return `
			${await btnContact.init()}
			<section id="hero" class="xl:px-[5%]">
				${await hero.init()}
			</section>
			<section class="xl:px-[5%]">
				${await visimisi.init()}
			</section>
			<section class="xl:px-[5%]">
				${await quality.init()}
			</section>
			<section class="xl:px-[5%]">
				${await portofolio.init()}
			</section>
			<section class="xl:px-[5%]">
				${await product.init()}
			</section>
			<section class="xl:px-[5%]">
				${await feedback.init()}
			</section>
		`;
  },
  async afterRender() {
    await btnContact.afterRender();
    await hero.afterRender();
    await visimisi.afterRender();
    await product.afterRender();
    await portofolio.afterRender();
    await feedback.afterRender();
  },
};

export default homepage;
