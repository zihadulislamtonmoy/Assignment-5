import logo from '../assets/logo-text.png';
const Nav = () => {
    return (
        <nav className="container mx-auto mt-3.5">
         <div className='flex justify-between containers mx-auto'>

                   <div>
                <img src={logo} alt=''/>
            </div>

            <div className='flex justify-between gap-7 items-center list-none font-medium'>
                <li className='text-pink-600'>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </div>

            <div>
                <button className="btn btn-ghost">Sign In</button>
                <button className="btn btn-active btn-secondary rounded-4xl">Sign Up</button>
            </div>

         </div>

        </nav>
    );
};

export default Nav;