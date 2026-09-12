import logo from '../assets/logo-text.png';
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8 px-6 mt-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-1">
          
            <div className="flex items-center gap-2 mb-3">
         <img src={logo} alt=''/>
             </div>
          
          <p className="text-sm text-gray-500">
            Curated tools, framework insights, and interactive stack builder for modern web developers.
          </p>
          
          <div className='flex gap-3 mt-4'>
            <a href=''>GitHub</a>
            <a href=''>Twitter</a>
            <a href=''>Linkedin</a>
          </div>

        </div>

        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li> <a href=''> About Us </a></li>
            <li> <a href=''> Careers </a></li>
            <li> <a href=''>Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <p>© 2026 DevStack. All rights reserved.</p>
        <div className="flex gap-4">
          <li className="list-none"> Privacy Policy </li>
          <li className="list-none"> Terms of Service </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;