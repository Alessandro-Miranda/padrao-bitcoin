export function Soluction() {
  return (
    <div className="solution" id="solucoes">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="common text-center">
              <div className="common-meta aos-init" data-aos="fade-up" data-aos-duration="1000">
                Nossas Soluções
              </div>
              <h2
                className="text-white aos-init"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                Explore Nossas Soluções
              </h2>
              <p
                className="text-white aos-init"
                data-aos="fade-up"
                data-aos-duration="1400"
                data-aos-delay="150"
              >
                Descubra soluções abrangentes sob medida para atender às suas necessidades
                financeiras.
              </p>
            </div>
            <div
              className="video-presentation aos-init"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="250"
            >
              <div style={{ padding: '56.25% 0px 0px', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/918165715?h=1c612d4f38&amp;title=0&amp;byline=0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%' }}
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}