import { useState } from "react";

function Kopinikmat() {
  const [iframeSrc, setIframeSrc] = useState("./img/ngopi1.html");

  return (
    <>
      <div className="mt-1">
        <div className="container-fluid">
          <div className="row mb-5 justify-content-center text-center">
            <div className="col-md-7 mb-4">
              <iframe
                src={iframeSrc}
                width="100%"
                height="500"
                style={{ border: "none" }}
                title="Panorama Viewer"
              />

              <div className="">
                <button onClick={() => setIframeSrc("./img/ngopi1.html")} className="btn btn-primary py-1 px-2 mr-2 mb-2">Photos 1</button>
                <button onClick={() => setIframeSrc("./img/ngopi2.html")} className="btn btn-primary py-1 px-2 mr-2 mb-2">Photos 2</button>
                <button onClick={() => setIframeSrc("./img/ngopi3.html")} className="btn btn-primary py-1 px-2 mr-2 mb-2">Photos 3</button>
                <button onClick={() => setIframeSrc("./img/ngopi4.html")} className="btn btn-primary py-1 px-2 mr-2 mb-2">Photos 4</button>
              </div>
            </div>

            <div className="col-md-4">
  <h3 className="text-white">Destinasi 2: Kopi Nikmat</h3>
  <p>
    Setelah menjelajah pagi di tengah hiruk pikuk kota, langkah kami mengarah ke sebuah tempat yang mungkin tak banyak orang tahu: <strong>Kopi Nikmat</strong>, sebuah kedai kopi sederhana yang tersembunyi di dalam gang kecil kota Singkawang. Kedainya tidak besar, bahkan papan namanya pun nyaris tak terlihat jika tak benar-benar mencarinya. Namun justru dari kesederhanaannya lah pesonanya muncul.
  </p>
  <p>
    Begitu masuk ke dalam gang, suasana pun berubah. Deretan kursi kayu, aroma kopi yang baru diseduh, dan canda tawa pengunjung membuat kami merasa seperti pulang ke rumah sendiri. Baristanya menyapa dengan ramah, dan menyuguhkan secangkir kopi lokal dengan teknik seduh manual. Rasanya? Pekat, penuh karakter, dan hangat—seperti pelukan di tengah sibuknya dunia.
  </p>
  <p>
    Duduk di dalam gang sambil menyeruput kopi, kami menyadari betapa nikmatnya hidup dalam pelan. Tempat ini bukan sekadar kedai kopi, melainkan ruang di mana cerita, tawa, dan ketenangan saling bersanding.
  </p>
</div>



          </div>
        </div>
      </div>
    </>
  );
}

export default Kopinikmat;
