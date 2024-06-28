import React, { useState } from 'react';
import './Slideshow.css';

const images = [
  { id: 1, url: 'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMkrEaoK5q8HiG0C7pO1ikScm5Ctxv5IDntU7sYs6a1gqN8N1Z0spoWqNgPUTUBC1dhsy19uvL6bm2Lvknn3nswnsqqZ5Yg9kwFjavCbzezRwEA.kXeZqZdx3OWQALuACf.lF2_Fn5lYXyG_dH7fuOBsj39UUy1a0N1mTEAmhNY_veG138sGECx3zPXEnPmtB6Q--&h=552' },
  { id: 2, url: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWXfre?ver=19a9&h=552' },
  { id: 3, url: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE5dQ4j?ver=d466&h=552' },
  { id: 4, url: 'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMkrEaoK5q8HiG0C7pO1ikScm5Ctxv5IDntU7sYs6a1gqr1VKJ.VMJukcJZT6f1pn5QxuLXRvizRrp.GsttmYW_Bl78J4L6oY0eB7P0Dx74IOgXkWIt3bv0py1fBeg_stAO9c3XDRan2WFRI2eU6Yfx0p15XMdqKbP7Tjnc.faSpBvxz5hgnlDAtUnGvEDOKzRQ--&h=552' },
  { id: 5, url: 'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMkrEaoK5q8HiG0C7pO1ikScm5Ctxv5IDntU7sYs6a1gqc5XPwwCbLAGvC3PLU1p6RDl9S00V1RuyGRFlG8GJ7Xh3fDCvZQ1MleISyuwAF5p2lbg3AO3y8RZcJuJQL8tU95FbllbLnFQ1J25FY5udzbspbomRG8cXu8M24r51C0tC&h=552' },
  { id: 6, url: 'https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMkrEaoK5q8HiG0C7pO1ikScm5Ctxv5IDntU7sYs6a1gqBFv98MOt7dmd7jl2dDakHRmhBi28ShBhj3LYoTikvkPfORpMJmkUSaniiaRVCfrsUrAdBIlSVYgxl5vBezv5DVWE92tD3vpPZccZan41k6ZIHau8.PilVOHoi28EUY3oXcw6exsovT41E4Rokh5Y4g--&h=552' },

];

function Slideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow">
      <div className="slideshow__image-container">
        <img
          src={images[currentImage].url}
          alt={`Image ${images[currentImage].id}`}
          className="slideshow__image"
        />
        <div className="slideshow__nav">
          <button className="slideshow__button slideshow__button--prev" onClick={handlePrevImage}>
            Prev          </button>
          <button className="slideshow__button slideshow__button--next" onClick={handleNextImage}>
            Next
          </button>
        </div>
      </div>
      <div className="slideshow__thumbnails">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Image ${image.id}`}
            className={`slideshow__thumbnail ${currentImage === index ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
            
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
