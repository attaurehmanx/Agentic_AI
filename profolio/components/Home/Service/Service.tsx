import ServicesCard from './ServicesCard'

const Service = () => {
  return (
    <div className='pt-15 pb-20'>
      <h1 className='text-2xl md:text-4xl font-bold text-center text-white'>
        Collaborate with brands <br /> and agencies to create <br /> impactful results
      </h1>

      <div className='w-[90%]  mx-auto mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServicesCard
            icons="/images/s1.png"
            name="UI/UX Design"
            description="Crafting intuitive and visually engaging interfaces that enhance user experience, improve usability, and strengthen brand identity."
          />
        </div>

        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <ServicesCard
            icons="/images/s2.png"
            name="Web and Mobile App"
            description="Building responsive, high-performance web and mobile applications tailored to your business goals, scalability needs, and user expectations."
          />
        </div>

        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <ServicesCard
            icons="/images/s3.png"
            name="Design and Creative"
            description="Delivering creative design solutions—from branding to digital graphics—that communicate your message with clarity, emotion, and impact."
          />
        </div>

        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <ServicesCard
            icons="/images/s4.png"
            name="Development"
            description="Developing secure, scalable, and efficient digital products using modern technologies, ensuring robust functionality and seamless performance."
          />
        </div>

      </div>
    </div>
  )
}

export default Service
