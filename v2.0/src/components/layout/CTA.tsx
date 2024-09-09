import camaraLogo from '@Assets/Camara_LogoWhite-BETiuRay.png';
import dinameLogo from '@Assets/Dinamo_LogoWhite-CEqbSWSK.png';
import hatorLogo from '@Assets/Hathor_LogoWhite-CMYJVfPM.png';

export function CTA() {
  return (
    <div className="cta">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="common text-center">
              <div
                className="common-meta aos-init"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay=""
              >
                Conheça Nossos Parceiros Estratégicos
              </div>
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay=""
                className="aos-init"
              >
                Dedicando a melhor experiência DeFi
              </h2>
            </div>
          </div>
          <div className="col-12">
            <div className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target=""
                  aria-label="Slide 1"
                  className="active"
                  aria-current="true"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="active carousel-item">
                  <div className="justify-content-center text-center row">
                    <div className="mb-3 mb-md-0 col-md-4 col-12">
                      <img
                        className="img-fluid"
                        src={dinameLogo}
                        alt="Dinamo Partner Image"
                        style={{ maxWidth: '50%' }}
                      />
                    </div>
                    <div className="mb-3 mb-md-0 col-md-4 col-12">
                      <img
                        className="img-fluid"
                        src={hatorLogo}
                        alt="Hathor Partner Image"
                        style={{ maxWidth: '50%' }}
                      />
                    </div>
                    <div className="col-md-4 col-12">
                      <img
                        className="img-fluid"
                        src={camaraLogo}
                        alt="Camera Paraguaya de Blockchain Partner Image"
                        style={{ maxWidth: '50%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" role="button" tabIndex={0} href="#">
                <span aria-hidden="true" className="carousel-control-prev-icon"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" role="button" tabIndex={0} href="#">
                <span aria-hidden="true" className="carousel-control-next-icon"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
