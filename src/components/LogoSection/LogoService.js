import CanvaLogo from './asset/canvalogo.png'
import HatchfullLogo from './asset/hatchfullogo.png'
import PlaceitLogo from './asset/placeitlogo.png'
import GorillaLogo from './asset/logogorilla.png'
import TigerLogo from './asset/logotiger.png'
import LogoPlacing from './asset/logoplacing.png'

const LogoService = () => {
    return (
        <div className="App">
        <div className="your-logo" id="logo">
        <div className="logo-first-text">
        <h1>DESIGN YOUR ORDER</h1>
        </div>
        <div className="your-logo-samples">
        <img src={TigerLogo} alt="Logo-shirt" className="your-logo-sample-img"></img>
        <div className="simple-process-text">
          <h1>Simple process</h1>
          <p>- Just choose one of our apparel with an option "personalize" and click order.</p>
        </div>
        </div>
        <div className="simple-process-text2">
        <div className="simple-process-logo">
          <p className="simple-process-text3">-Create your artwork while we focus on our line of expertise making high quality clothings.</p>
          <a href="https://www.canva.com/"><img src={CanvaLogo} alt="Logo-shirt" className="your-logo-sample-img"></img></a>
          <a href="https://hatchful.shopify.com/"><img src={HatchfullLogo} alt="Logo-shirt" className="your-logo-sample-img"></img></a>
          <a href="https://placeit.net/"><img src={PlaceitLogo} alt="Logo-shirt" className="your-logo-sample-img" id="placeit"></img></a>
          </div>
          <img src={GorillaLogo} alt="Logo-shirt" className="your-logo-sample-img"></img>
        </div>
      </div>

        </div>
    )
}

export default LogoService;