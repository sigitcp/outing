import { useState } from "react";

function Palmbeach() {
  const [iframeSrc, setIframeSrc] = useState("./img/pantai2.html");

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
                <button onClick={() => setIframeSrc("./img/pantai2.html")} className="btn btn-primary py-1 px-2 mr-2 mb-2">Photos 1</button>
                <button onClick={() => setIframeSrc("./img/pantai3.html")} className="btn btn-primary py-1 px-2 mr-2 mb-2">Photos 2</button>
                <button onClick={() => setIframeSrc("./img/pantai4.html")} className="btn btn-primary py-1 px-2 mr-2 mb-2">Photos 3</button>
                <button onClick={() => setIframeSrc("https://www.youtube.com/embed/4Lp43BHuW6Y?si=MeXpoqvYEk9n1gm_")} className="btn btn-primary py-1 px-2 mr-2 mb-2">Video</button>
              </div>
            </div>

            <div className="col-md-4">
  <h3 className="text-white">Destinasi 3: Palm Beach</h3>
  <p>
    Menjelang senja, perjalanan kami membawa langkah ke ujung barat kota—<strong>Palm Beach</strong>, salah satu pantai terbaik untuk menyaksikan matahari terbenam di Singkawang. Pantai ini menawarkan panorama yang menakjubkan: garis pantai yang panjang, deretan pohon kelapa yang menjulang tenang, dan ombak yang berkejaran menyentuh pasir.
  </p>
  <p>
    Saat matahari mulai merunduk, langit berubah warna—merah muda, jingga, lalu emas. Kami duduk diam, tak berkata apa-apa, hanya menikmati momen yang terasa abadi. Beberapa anak bermain bola di pasir, sepasang kekasih berjalan menyusuri tepi air, dan di kejauhan, siluet kapal nelayan melintas perlahan.
  </p>
  <p>
    Di Palm Beach, waktu seolah melambat. Sunset di sini bukan hanya tontonan alam, tapi pengalaman spiritual—pengingat bahwa keindahan paling tulus datang dari hal-hal sederhana yang hadir di waktu yang tepat.
  </p>
</div>



          </div>
        </div>
      </div>
    </>
  );
}

export default Palmbeach;
