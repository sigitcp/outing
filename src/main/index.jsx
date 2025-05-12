// Index.js
import { Link } from 'react-router-dom';

function Index() {
  return (
    <>
      <div className="container-fluid" data-aos="fade" data-aos-delay="500">
        <div className="row">

          <div className="col-lg-6">
            <div className="image-wrap-2">
              <div className="image-info">
                <h2 className="mb-3">Bakmi 68</h2>
                <Link to="/bakmi68" className="btn btn-outline-white py-2 px-4">More Photos</Link>
              </div>
              <img src="img/mamam2.JPG" alt="Image" className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="image-wrap-2">
              <div className="image-info">
                <h2 className="mb-3">Warung Kopi Nikmat</h2>
                <Link to="/kopinikmat" className="btn btn-outline-white py-2 px-4">More Photos</Link>
              </div>
              <img src="img/ngopi3.JPG" alt="Image" className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="image-wrap-2">
              <div className="image-info">
                <h2 className="mb-3">Palm Beach</h2>
                <Link to="/palmbeach" className="btn btn-outline-white py-2 px-4">More Photos</Link>
              </div>
              <img src="img/pantai2.JPG" alt="Image" className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="image-wrap-2">
              <div className="image-info">
                <h2 className="mb-3">File Arsip</h2>
                <a href="https://drive.google.com/drive/folders/1bz7aDrpRjE-CkM0VPXueXB5J0vV8-qRJ" target="_blank" className="btn btn-outline-white py-2 px-4">More Photos</a>
              </div>
              <img src="img/drive.png" alt="Image" className="img-fluid"/>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Index;
