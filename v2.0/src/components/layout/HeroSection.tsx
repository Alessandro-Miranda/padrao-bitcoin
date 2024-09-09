import bannerDesktop from '@Assets/banner-background-CuHSBWvp.png';
import bannerMobile from '@Assets/banner-bgForMobile-BaYorDMK.png';

export function HeroSection() {
  return (
    <div className="banner">
      <div className="banner-bg">
        <img className="d-none d-lg-block" src={bannerDesktop} alt="Decoration Image" />
        <img className="d-block d-lg-none" src={bannerMobile} alt="Decoration Image" />
      </div>
      <div className="container">
        <div className="align-items-center justify-content-center align-items-center justify-content-lg-start row">
          <div className="col-lg-6 col-md-10">
            <div className="common text-center text-lg-start">
              <div
                className="common-meta aos-init"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay=""
              >
                ETHER PRIVATE BANK
              </div>
              <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="" className="aos-init">
                <span>Seu Patrimônio </span> protegido com <span>Criptoativos e DeFi</span>
              </h1>
              <p data-aos="fade-up" data-aos-duration="1400" data-aos-delay="" className="aos-init">
                Private Banking + DeFi em um único dashboard exclusivo.
              </p>
              <button
                className="btn open-account-btn aos-init"
                data-aos="fade-up"
                data-aos-duration="1600"
                data-aos-delay=""
              >
                Abra Sua Conta Hoje
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
