import {
  Facebook,
  Github,
  LinkedinIcon,
  Locate,
  Mail,
  PhoneCallIcon,
  X,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-20 pb-20 text-white">
      <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            Schedule a Call with me to see if I can help
          </h1>

          <p className="text-gray-300 text-xl">
            Reach out to me today and let's discuss how I can help you achieve your goals.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <PhoneCallIcon />
              <p className="text-xl">+92 458 939937</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail />
              <p className="text-xl">abc@example.com</p>
            </div>

            <div className="flex items-center gap-3">
              <Locate />
              <p className="text-xl">Karachi, Pakistan</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-4">
            {[Facebook, X, LinkedinIcon, Github].map((Icon, index) => (
              <div
                key={index}
                className={`bg-blue-950 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer transition-all duration-300 
                  ${index === 0 ? 'hover:bg-[#1877F2]' : ''} 
                  ${index === 1 ? 'hover:bg-black' : ''} 
                  ${index === 2 ? 'hover:bg-[#0A66C2]' : ''} 
                  ${index === 3 ? 'hover:bg-[#24292F]' : ''}`}
              >
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div
          data-aos="zoom-out"
          data-aos-anchor-placement="top-center"
          className="px-6 py-6 bg-[#131332] rounded-lg space-y-5"
        >
          <input
            type="text"
            placeholder="Name"
            className="p-4 bg-[#363659] rounded-lg w-full outline-none placeholder:text-white"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="p-4 bg-[#363659] rounded-lg w-full outline-none placeholder:text-white"
          />

          <input
            type="number"
            placeholder="Mobile Number"
            className="p-4 bg-[#363659] rounded-lg w-full outline-none placeholder:text-white"
          />

          <textarea
            placeholder="Your Message"
            className="p-4 bg-[#363659] rounded-lg w-full h-40 outline-none placeholder:text-white resize-none"
          ></textarea>

          <button className="bg-blue-950 w-full text-white p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-blue-600">
            Send Message
          </button>
        </div>

      </div>
    </div>
  );
};

export default Contact;
