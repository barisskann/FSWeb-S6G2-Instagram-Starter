// MUÜ için bu dosyayı değiştirmenize gerek yok
import React from "react";
import sahteVeri from "../../sahte-veri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faCircle,
  faCompass,
} from "@fortawesome/free-regular-svg-icons";
import "./AramaÇubuğu.css";

const AramaÇubuğu = (props) => {
  const { gönderi, setArama, arama, setGönderi, filter } = props;
  const handleChange = (e) => {
    filter(e.target.value);
  };
  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input onChange={handleChange} type="text" placeholder="Arama" />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default AramaÇubuğu;
