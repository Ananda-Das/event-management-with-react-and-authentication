import bannerimg1 from '../../assets/Images/hero-figure1.png'

const Banner = () => {
  return (
    <div className="carousel w-full h-screen">
      <div id="slide1" className="carousel-item relative w-full">
        <div className='flex justify-center items-center gap-5 p-4 '>
          <div className='pl-14 space-y-5'>
            <p className='text-[#ce1446] text-xl font-semibold'>Octobor 21, 2023</p>
            <h2 className="text-6xl font-extrabold">EVENTS, MEETUPS & <span className='text-[#ce1446]'>CONFERENCES</span></h2>
            <div className='flex gap-5'>
              <div>
                <p><span className='font-bold'>500</span> Setas </p>
              </div>
              <div>
                <p><span className='font-bold'>10</span> Speakers</p>
              </div>
            </div>
            <div>
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className='flex items-center gap-16'>
              <button className='bg-[#ce1446] text-white font-bold rounded text-xl btn hover:btn-outline  '>Book Now</button>
              <button className='btn btn-outline hover:bg-[#ce1446] text-[#ce1446] text-xl'>View Detials</button>
            </div>
          </div>
          {/* slider-img */}
          <div className='pr-14'>
          <img src={ bannerimg1 } className="w-full" />
          </div>
          {/* slider-img */}
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
      <div className='flex justify-center items-center gap-5 p-4 '>
          <div className='pl-14 space-y-5'>
            <p className='text-[#ce1446] text-xl font-semibold'>Octobor 21, 2023</p>
            <h2 className="text-6xl font-extrabold">EVENTS, MEETUPS & <span className='text-[#ce1446]'>CONFERENCES</span></h2>
            <div className='flex gap-5'>
              <div>
                <p><span className='font-bold'>500</span> Setas </p>
              </div>
              <div>
                <p><span className='font-bold'>10</span> Speakers</p>
              </div>
            </div>
            <div>
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className='flex items-center gap-16'>
              <button className='bg-[#ce1446] text-white font-bold rounded text-xl btn hover:btn-outline  '>Book Now</button>
              <button className='btn btn-outline hover:bg-[#ce1446] text-[#ce1446] text-xl'>View Detials</button>
            </div>
          </div>
          {/* slider-img */}
          <div className='pr-14'>
          <img src={ bannerimg1 } className="w-full" />
          </div>
          {/* slider-img */}
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <div className='flex justify-center items-center gap-5 p-4 '>
          <div className='pl-14 space-y-5'>
            <p className='text-[#ce1446] text-xl font-semibold'>Octobor 21, 2023</p>
            <h2 className="text-6xl font-extrabold">EVENTS, MEETUPS & <span className='text-[#ce1446]'>CONFERENCES</span></h2>
            <div className='flex gap-5'>
              <div>
                <p><span className='font-bold'>500</span> Setas </p>
              </div>
              <div>
                <p><span className='font-bold'>10</span> Speakers</p>
              </div>
            </div>
            <div>
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className='flex items-center gap-16'>
              <button className='bg-[#ce1446] text-white font-bold rounded text-xl btn hover:btn-outline  '>Book Now</button>
              <button className='btn btn-outline hover:bg-[#ce1446] text-[#ce1446] text-xl'>View Detials</button>
            </div>
          </div>
          {/* slider-img */}
          <div className='pr-14'>
          <img src={ bannerimg1 } className="w-full" />
          </div>
          {/* slider-img */}
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
      <div className='flex justify-center items-center gap-5 p-4 '>
          <div className='pl-14 space-y-5'>
            <p className='text-[#ce1446] text-xl font-semibold'>Octobor 21, 2023</p>
            <h2 className="text-6xl font-extrabold">EVENTS, MEETUPS & <span className='text-[#ce1446]'>CONFERENCES</span></h2>
            <div className='flex gap-5'>
              <div>
                <p><span className='font-bold'>500</span> Setas </p>
              </div>
              <div>
                <p><span className='font-bold'>10</span> Speakers</p>
              </div>
            </div>
            <div>
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className='flex items-center gap-16'>
              <button className='bg-[#ce1446] text-white font-bold rounded text-xl btn hover:btn-outline  '>Book Now</button>
              <button className='btn btn-outline hover:bg-[#ce1446] text-[#ce1446] text-xl'>View Detials</button>
            </div>
          </div>
          {/* slider-img */}
          <div className='pr-14'>
          <img src={ bannerimg1 } className="w-full" />
          </div>
          {/* slider-img */}
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
