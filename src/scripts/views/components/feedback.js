const feedback = {
  init() {
    return `
		<div class="w-full h-[25em] flex flex-col ">
			<h3 class="font-title text-3xl md:text-4xl mx-auto mt-4 md:mt-10">Penilaian <span class="text-red-600">RAN Precast</span></h3>
		</div>`;
  },

  getPosts() {
    // kita gunakan fetch dalam kita ambil data sample.txt yang sudah kita buat
    fetch("https://operator.ranprecast.com/api/testimoni")
      // kita buat response menjadi json
      .then((response) => response.json())
      // lalu data nya kita ambil dan kita masuken ke p id output
      .then((data) => {
        // kita buat variabel output
        let output = "<h2>posts</h2>";
        // kita console.log agar mengetahui apakah data nya sudah masuk atau belum
        console.log(data);
        // forEach ini adalah looping dan dinamakan post
        data.forEach((post) => {
          // kita tambahkan output-nya jangan lupa gunakan backslash `` yang di sebelah angka nomer 1
          // kita panggil id name email didapat dari post.json
          output += `
          <div>
            // <h3>${post.name}</h3>
            // <p>${post.rating}</p>
          </div>
        `;
        });
        // kita panggil id output agar bisa di tampilkan ke browser saat di klik
        document.getElementById("output").innerHTML = output;
      })
      // membuat catch jadi kalau ada yang error langsung ketawan
      .catch((err) => console.log(err));
    document.getElementById("getPosts");
  },
};

export default feedback;
