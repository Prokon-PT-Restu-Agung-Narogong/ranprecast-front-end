const feedback = {
  init() {
    return `
		<div class="w-full h-[25em] flex flex-col ">
			<h3 class="font-title text-3xl md:text-4xl mx-auto mt-4 md:mt-10">Penilaian <span class="text-red-600">RAN Precast</span></h3>
			<ul class="w-full flex h-[80%] mb-auto p-4 overflow-x-scroll list-portofolio">
			</ul>

		</div>`;
  },
  listItem(nameImage, i) {
    return `<li class="min-w-[100%] md:min-w-[30%] w-full md:w-[30%] cursor-pointer list-${i}">
					<img src="images/loading.gif" data-src="images/portofolio/${nameImage}" class="lazyload w-full h-full object-cover p-2 shadow-inner" />
				</li>`;
  },
  layerForReview(nameImage) {
    let template = `
		<div class="layer-review-portofolio fixed right-[100%] w-full h-full z-30 flex" style="background-color: rgba(0, 0, 0, 0.6);">
				<div class="w-full h-auto flex flex-col md:flex-row md:p-8" >
					<img src="images/portofolio/${nameImage}" class="w-auto h-auto my-auto md:mx-auto md:my-0">
				</div>
		</div>`;
    const layer = $(".layer-review-portofolio");
    if (layer.length == 0) {
      $("body").append(template);
    }
    layer.animate({ left: 0 }, 700);
    layer.on("click", () => {
      layer.remove();
    });
  },
  afterRender() {
    let i = 0;
    dataPortofolio.forEach((e) => {
      $(".list-portofolio").append(this.listItem(e, i));
      $(`.list-${i}`).on("click", () => {
        this.layerForReview(e);
      });
      i++;
    });
    return ``;
  },
};

export default feedback;
