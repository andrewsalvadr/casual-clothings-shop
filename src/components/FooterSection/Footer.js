import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faPinterest } from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
    return (
        <div className="footer-section">

        <div className="social-media-section">
      <a href="https://www.facebook.com/" className="social-media-link"><FontAwesomeIcon icon={faFacebook}/></a>
      <a href="https://twitter.com/" className="social-media-link"><FontAwesomeIcon icon={faTwitter}/></a>
      <a href="https://www.instagram.com/" className="social-media-link"><FontAwesomeIcon icon={faInstagram}/></a>
      <a href="https://www.pinterest.com/" className="social-media-link"><FontAwesomeIcon icon={faPinterest}/></a>
      </div>


      </div>

    )
}

export default Footer;