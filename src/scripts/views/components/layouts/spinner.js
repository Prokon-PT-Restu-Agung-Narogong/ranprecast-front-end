const spinner = {
  init() {
    return `
    	<div class="loading-wrap w-full h-[80vh] flex z-30 background-[rgba(255,255,255,0.4)]">
    		<div id="loading" class="m-auto"></div>
    	</div>`;
  },
  afterRender() {
  	$('.loading-wrap').hide();
    return ``;
  },
};

export default spinner;
