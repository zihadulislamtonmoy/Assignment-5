import bannerLogo from '../assets/banner-stack.png';
const Banner = () => {
    return (
        <div className='flex justify-between container mx-auto items-center'>
            <div>
                <h1 className='text-5xl font-bold mb-5'>Build Your Ideal <br></br>
                <span className='block bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent'>Development Stack</span> </h1>
                <p className='mb-6'>Explore frontend, backend, database, and tooling options, <br></br>
                   compare them side by side, and put together the stack that fits your <br></br>
                   next project.</p>
                  
                   <div className=' flex gap-3 '>
                    <button className=" btn bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg">Explore Technologies</button>
                   <button className="btn btn-wide btn-outline rounded-lg ">Learn More</button>
                   </div>
 
            </div>
            <div>
             <img src={bannerLogo} alt=''/>
            </div>
        </div>
    );
};

export default Banner; 