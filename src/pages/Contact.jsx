import { IoChevronForward } from "react-icons/io5";
import { AiFillStar } from 'react-icons/ai';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { BiPhoneCall } from 'react-icons/bi';
import { GiRotaryPhone } from 'react-icons/gi';

import { Component } from 'react';



const HeroWrapper = () => {
    return (
        <section
            className="w-full  overflow-hidden h-[27rem] bg-cover bg-center bg-no-repeat  flex justify-center items-center text-center text-white flex-col relative"
            style={{
                backgroundImage: "url('../../src/assets/images/img.jpeg')",
            }}
        >
            <div className=" bg-filter absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex justify-center items-center flex-col">
                <div className="  pb-4">
                    <h1 className=" text-[3.25rem] font-normal capitalize">
                        contact
                    </h1>
                    <img></img>
                </div>
                <div className=" font-bold">
                    <p className="  text-p uppercase flex justify-center items-center gap-3 font-normal">
                        home <IoChevronForward /> <span>contact</span>
                    </p>
                </div>
            </div>
        </section>
    );
};



const ContactBody = () => {
    return (
        <section
            className=" w-auto h-auto  flex flex-row flex-wrap justify-center gap-4 m-4 sm:m-10"
        >
            <div className=" w-full sm:w-[360px] h-[600px] p-4 shadow-md mb-4">
                <div className="  pb-4">
                    <h2 className=" text-[1rem] font-normal ">
                        Feel free to write on gmhotelgalaxy@gmail.
                    </h2>
                </div>
                <div className="  pb-4">
                    <h3 className=" text-[0.7rem] font-normal ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta alias aut quos ea exercitationem eaque explicabo? Id totam accusamus modi.
                    </h3>
                </div>
                <hr className=" pb-4"/>

                <div className="  pb-4">
                    <h2 className=" text-[1rem] font-normal ">
                        Call us +91-9918901686
                    </h2>
                </div>
                <div className="  pb-4">
                    <h3 className=" text-[0.7rem] font-normal ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta alias aut quos ea exercitationem eaque explicabo? Id totam accusamus modi.
                    </h3>
                </div>
                <hr className=" pb-4"/>

                <div className="  pb-4">
                    <h2 className=" text-[1rem] font-normal ">
                        Visit us
                    </h2>
                </div>
                <div className="  pb-4">
                    <h3 className=" text-[0.7rem] font-normal ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta alias aut quos ea exercitationem eaque explicabo? Id totam accusamus modi.
                    </h3>
                </div>
                <hr className=" pb-4"/>

                <div className=" w-full h-60">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.6710269058904!2d81.83698417553657!3d25.449259677549534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acbb5ec93f901%3A0x3065ec69362813cf!2sHotel%20Galaxy!5e0!3m2!1sen!2sin!4v1694486158740!5m2!1sen!2sin" loading="lazy" className="h-full w-full"></iframe>
                </div>

            </div>

            <ContactForm />

        </section>
    );
};

const SendMsgBtn = () => {
    return (
        <button className=" w-full bg-primary-color px-6 py-3 text-white text-md uppercase hover:bg-white hover:text-primary-color transition-all duration-200 ease-in-out tracking-wide lg:block">
            Send Message
        </button>
    );
};
  

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    // For example, you can send the form data to a server or perform any other action you need.
  };

  render() {
    return (
      <div className=" w-full sm:w-[360px] h-[600px] p-4 bg-pale-yellow shadow-md mb-4">
        <div className="  pb-4">
            <h2 className=" text-[1.2rem] font-normal capitalize">
                get in touch
            </h2>
        </div> 
        <div className="  pb-4">
            <h3 className=" text-[0.7rem] font-normal ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nostrum repellendus doloremque perferendis explicabo, optio recusandae aperiam illum aliquid ullam cupiditate dolore deleniti delectus, doloribus quam laudantium ratione sunt harum?
            </h3>
        </div>   
                
        <form onSubmit={this.handleSubmit} className="bg-transparent  rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
              placeholder="Subject"
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              placeholder="Message"
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              required
            />
          </div>
          <div className="flex items-center justify-between">

            <SendMsgBtn />
          </div>
        </form>
      </div>
    );
  }
}



const Bookings = () => {
    return (
      <div className="w-full h-auto md:h-[510px] lg:p-24 bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row md:flex-row justify-center items-center gap-4 p-4">
        <div className="w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4 h-72 flex flex-col justify-evenly sm:p-0 md:p-4 lg:p-6 xl:p-6">
          <div className="">
            <div className=' flex flex-row text-primary-color '><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
            <p className=' text-3xl text-primary-color'>Feel free to Call us anytime!</p>
          </div>
  
          <p>Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.</p>
  
          <div className=' flex flex-row flex-wrap items-center gap-4'>
            <span><RiCustomerService2Fill className='w-12 h-20' /></span>
            <div className="">
              <p className=' flex flex-row font-sans text-sm items-center gap-1'><BiPhoneCall /> +91-9918901686 || <GiRotaryPhone />0532-2400507 </p>
              <p>For more information</p>
            </div>
          </div>
  
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4 h-72 flex flex-row flex-wrap justify-center items-center bg-secondory-color ">
  
          <div className=" w-28 flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm bg-pale-yellow">Check-in
            <input className=" bg-transparent border border-gray-300" type="date" />
          </div>
          <div className=" w-28 flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm ">Check-out
            <input className=" bg-transparent border  border-gray-300" type="date" />
          </div>
          <div className=" w-28 flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm">Adult
            <select className=" bg-transparent border border-gray-300" name="check-in" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="1">3</option>
              <option value="2">4</option>
              <option value="1">5</option>
              <option value="2">6</option>
            </select>
          </div>
          <div className=" w-28 flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm">Children
            <select className=" bg-transparent border border-gray-300" name="check-in" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="1">3</option>
              <option value="2">4</option>
              <option value="1">5</option>
              <option value="2">6</option>
            </select>
          </div>
          <div className=" w-28 flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm">Rooms
            <select className=" bg-transparent border border-gray-300" name="check-in" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="1">3</option>
              <option value="2">4</option>
              <option value="1">5</option>
              <option value="2">6</option>
            </select>
          </div>
          <div className=" w-28 flex justify-center flex-col p-4 md:p-2 sm:p-1 text-sm">
            {/* <button className="h-8 w-full bg-orange-400 border-2 border-gray-300 transition duration-300 ease-in-out group hover:bg-gray-200 hover:border-orange-400">Book now</button> */}
            <button className=' bg-primary-color py-3 text-white text-md uppercase hover:bg-white hover:text-primary-color transition-all duration-200 ease-in-out tracking-wide lg:block'>Book now</button>
          </div>
        </div>
      </div>
    );
  };




const Contact = () => {
    return (
        <>
            <HeroWrapper />
            <ContactBody  />
            <Bookings />
        </>
    );
};

export default Contact;