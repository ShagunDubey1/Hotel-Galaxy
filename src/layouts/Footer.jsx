import { RiInstagramLine, RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { BiArrowToRight } from "react-icons/bi";
import { MdEmail, MdPermPhoneMsg } from "react-icons/md";
import { CgPhone } from "react-icons/cg";

const Footer = () => {
    return (
        <footer className=" mt-auto left-0 right-0 w-full bg-[#333] flex  flex-col justify-center items-center">
            <div className=" relative w-full max-w-[1140px] flex justify-center md:justify-between  items-center md:items-start py-6 sm:py-8 md:py-12 flex-col md:flex-row px-18 sm:px-24 md:px-0 ">
                <div className=" flex flex-col justify-center sm:justify-start  items-center sm:items-start basis-1/3 md:px-12 px-8">
                    <h3 className="text-primary-color font-normal text-2xl lg:text-3xl uppercase mb-4 sm:mb-8">
                        Hotel Galaxy
                    </h3>
                    <p className=" mb-8 text-[#f4f6fe] text-base font-light font-['Josefin_Sans'] text-center sm:text-start">
                        Quisque pretium fermentum quam, sit amet cursus ante
                        sollicitudin vel. Morbi consequat risus consequat,
                        porttitor orci sit amet, iaculis nisl.
                    </p>
                    <ul className=" flex justify-start items-center gap-4">
                        <li className=" bg-primary-color p-2 flex justify-center items-center">
                            <RiInstagramLine className=" text-white" />
                        </li>
                        <li className=" bg-primary-color p-2 flex justify-center items-center">
                            <RiFacebookFill className=" text-white" />
                        </li>
                        <li className=" bg-primary-color p-2 flex justify-center items-center">
                            <RiTwitterFill className=" text-white" />
                        </li>
                    </ul>
                </div>

                <div className=" sm:w-full flex md:justify-between justify-center sm:flex-row flex-col sm:basis-2/3">
                    <div className=" flex flex-col justify-center sm:justify-start items-start  basis-[50%] md:basis-1/2 md:px-12 px-8 ">
                        <h4 className="text-white font-normal text-3xl capitalize mb-4 mt-4">
                            General
                        </h4>
                        <ul className=" flex flex-col justify-start items-start text-[#f4f6fe] text-base font-light">
                            <li className=" flex justify-start items-center gap-2 mb-2">
                                <BiArrowToRight />
                                About us
                            </li>
                            <li className=" flex justify-start items-center gap-2 mb-2">
                                <BiArrowToRight />
                                Accommodation
                            </li>
                            <li className=" flex justify-start items-center gap-2 mb-2">
                                <BiArrowToRight />
                                Our Dining
                            </li>
                            <li className=" flex justify-start items-center gap-2 mb-2">
                                <BiArrowToRight />
                                Meetings & Events
                            </li>
                            <li className=" flex justify-start items-center gap-2 mb-2">
                                <BiArrowToRight />
                                Gallery
                            </li>
                        </ul>
                    </div>
                    <div className=" flex flex-col justify-start items-start basis-[50%] md:basis-1/2 md:px-12 px-8">
                        <h4 className="text-white font-normal text-3xl capitalize mb-4 mt-4">
                            Contact Us
                        </h4>
                        <address className=" mb-4 text-[#f4f6fe] text-sm font-['Josefin_Sans'] font-[400] hidden md:block">
                            HOTEL GALAXY | P-Square Mall | Beside Civil Lines
                            Bus Terminal |Civil Lines | Prayagraj – 211001
                        </address>
                        <ul className=" flex flex-col justify-start items-start text-[#f4f6fe] text-base font-light">
                            <li className=" flex justify-start items-center gap-2 mb-2">
                                <MdPermPhoneMsg className=" text-primary-color" />
                                : +91-9918901686{" "}
                            </li>
                            <li className=" flex justify-start items-center gap-2 mb-2">
                                <CgPhone className=" text-primary-color" />:
                                0532-2400507 - Ext 12
                            </li>
                            <li className=" flex justify-start items-center gap-2 mb-2">
                                <MdEmail className=" text-primary-color" />:
                                gmhotelgalaxy@gmail.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" relative w-full bg-black flex justify-center items-center py-6">
                <div className=" w-full max-w-[1140px] flex  justify-center sm:justify-between items-center px-12">
                    <p className="text-[#f4f6fe] sm:text-base font-light font-['Josefin_Sans']  sm:w-[70%] text-sm">
                        Copyright © Hotel Galaxy all rights reserved.
                    </p>
                    <ul className=" sm:flex justify-center gap-2 md:gap-4 items-center text-[#f4f6fe] text-sm md:text-base font-light hidden w-[30%] ">
                        <li>Home</li>
                        <li>Privacy Policy</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
