import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
        <nav>
            <img src={logo} alt='jobify' className='logo' />
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>
                    Job <span>tracking</span> app
                </h1>
                <p>
                I'm baby roof party hoodie cray williamsburg franzen. Polaroid ugh you probably haven't heard of them schlitz DIY actually green juice irony cray helvetica gochujang shoreditch lomo bicycle rights. Palo santo fam narwhal austin ethical, gatekeep trust fund. Leggings kogi quinoa williamsburg jianbing slow-carb glossier mumblecore shaman, 3 wolf moon wayfarers. Hot chicken pok pok post-ironic flexitarian photo booth butcher. Scenester crucifix kickstarter YOLO VHS taxidermy.
                </p>
                <button className='btn btn-hero'>
                    Login/Register
                </button>
            </div>
            <img src={main} alt='job hunt' classname='img main-img' />
        </div>
    </main>
  )
}
export default Landing