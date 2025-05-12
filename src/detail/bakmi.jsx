import { useState } from "react";

function Bakmi() {
  const [iframeSrc, setIframeSrc] = useState("./img/mamam1.html");

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
                <button onClick={() => setIframeSrc("./img/mamam1.html")} className="btn btn-primary py-1 px-2 mr-2 mb-2">Photos 1</button>
                <button onClick={() => setIframeSrc("./img/mamam2.html")} className="btn btn-primary py-1 px-2 mr-2 mb-2">Photos 2</button>
                <button onClick={() => setIframeSrc("./img/mamam3.html")} className="btn btn-primary py-1 px-2 mr-2 mb-2">Photos 3</button>
                <button onClick={() => setIframeSrc("https://www.youtube.com/embed/8dp11JKkV1U?si=amB_vvBhH3hwk6JQ")} className="btn btn-primary py-1 px-2 mr-2 mb-2">Video</button>
              </div>
            </div>

            <div className="col-md-4">
  <h3 className="text-white">Destinasi 1: Bakmie 68 Singkawang</h3>
  <p>
    Perjalanan kami dimulai dari Bakmie 68 Singkawang, sebuah tempat legendaris yang terkenal akan cita rasa autentik bakmie khas Tionghoa Kalimantan. Terletak di pusat kota Singkawang, tempat ini menjadi destinasi wajib bagi pencinta kuliner.
  </p>
  <p>
    Bakmie yang disajikan memiliki tekstur kenyal, disiram kuah kaldu gurih, dan dilengkapi topping seperti charsiu, pangsit, dan irisan daging ayam kampung. Tempatnya sederhana namun selalu ramai oleh warga lokal maupun wisatawan.
  </p>
  <p>
    Menikmati sarapan di Bakmie 68 membuka hari kami dengan penuh semangat. Ini bukan hanya soal makanan, tapi juga pengalaman mencicipi sejarah kuliner Singkawang yang kaya.
  </p>
</div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Bakmi;
