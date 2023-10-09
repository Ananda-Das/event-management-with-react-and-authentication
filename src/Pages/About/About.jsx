
import aboutimg from "../../assets/Images/pexels-photo-3321791.jpeg";
import storyimg from "../../assets/Images/story.avif";

const About = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      {/* About-start */}
      <div className="w-11/12 mx-auto mt-14">
        <div className="flex gap-16 items-center justify-around shadow-2xl p-5">
          <div>
            <h2 className="text-3xl font-bold uppercase text-[#ce1446] mb-5">About Us</h2>
            <p className="text-xl ml-5">
              Welcome to Event Producers, where creativity meets flawless execution in the world of event management. We are a passionate team of
              event professionals dedicated to turning your vision into memorable experiences. With a proven track record of delivering exceptional
              events, we take pride in being your trusted partners in every step of your event journey.
            </p>
          </div>
          <div className="w-full">
            <img src={aboutimg} alt="" />
          </div>
        </div>

        <div className="flex flex-row-reverse gap-16 items-center justify-around shadow-2xl p-5 mt-5">
          <div>
            <h2 className="text-3xl font-bold uppercase text-[#ce1446] mb-5 text-right">Our Story</h2>
            <p className="text-xl ml-5 text-right">
            Founded in 2019, Event Producers has rapidly grown to become a leading event management company in the industry. Our journey began with a simple idea – to create events that leave a lasting impression. Over the years, we have refined our craft and built a reputation for excellence. Today, we stand as a testament to our commitment to turning dreams into reality.
            </p>
          </div>
          <div className="w-full">
            <img src={storyimg} alt="" />
          </div>
        </div>
      </div>
      {/* About-end */}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default About;
