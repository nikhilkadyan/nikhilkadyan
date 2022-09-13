import './App.css';
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar_brand">
          nikhilkadyan.com
        </div>
        {/* <div className="navbar_links">
          <a className='link'>
            <FaGithub />&nbsp; Git Tracker
          </a>
        </div> */}
      </nav>
      <div className="content">
        <div className='title'>👋 I'm Nikhil Kadyan</div>
        <div className='subtitle'>`A Backend developer`</div>
        <div className='social'>
          <a href='https://github.com/nikhilkadyan' target={'_blank'} rel={'noreferrer'}><FaGithub /></a>
          <a href='https://twitter.com/kadyanikhil' target={'_blank'} rel={'noreferrer'}><FaTwitter /></a>
          <a href='https://linkedin.com/in/nikhilkadyan/' target={'_blank'} rel={'noreferrer'}><FaLinkedinIn /></a>
          <a href='https://instagram.com/nikhilkadyan' target={'_blank'} rel={'noreferrer'}><FaInstagram /></a>
        </div>
        <div className='actions'>
          <div className='button'>Résumé</div>
          <a href='mailto:nikhilkadyan@icloud.com' className='button'>Email me</a>
        </div>
      </div>
      <footer className="footer">
        © 2022, Built with ❤️ by Nikhil Kadyan
      </footer>
    </div>
  );
}

export default App;
