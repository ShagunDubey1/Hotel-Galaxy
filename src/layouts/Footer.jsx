import { RiInstagramLine, RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { BiArrowToRight } from "react-icons/bi";
import { MdEmail, MdPermPhoneMsg } from "react-icons/md";
import { CgPhone } from "react-icons/cg";

const Footer = () => {
    return (
        <footer className=" absolute bottom-0 w-full bg-[#333] mt-auto z-[1] flex  flex-col justify-center items-center ">
            <div className=" relative w-full max-w-[1140px] flex justify-between items-start py-12">
                <div className=" flex flex-col justify-start items-start basis-1/3 px-12">
                    <h3 className="text-primary-color font-normal text-3xl uppercase mb-8">
                        Hotel Galaxy
                    </h3>
                    <p className=" mb-8 text-[#f4f6fe] text-base font-light font-['Josefin_Sans']">
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
                <div className=" flex flex-col justify-start items-start basis-1/3 px-12">
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
                <div className=" flex flex-col justify-start items-start basis-1/3 px-12">
                    <h4 className="text-white font-normal text-3xl capitalize mb-4 mt-4">
                        Contact Us
                    </h4>
                    <address className=" mb-4 text-[#f4f6fe] text-sm font-['Josefin_Sans'] font-[400]">
                        HOTEL GALAXY | P-Square Mall | Beside Civil Lines Bus
                        Terminal |Civil Lines | Prayagraj – 211001
                    </address>
                    <ul className=" flex flex-col justify-start items-start text-[#f4f6fe] text-base font-light">
                        <li className=" flex justify-start items-center gap-2 mb-2">
                            <MdPermPhoneMsg className=" text-primary-color" />:
                            +91-9918901686{" "}
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
            <div className=" relative w-full bg-black flex justify-center items-center py-6">
                <div className=" w-full max-w-[1140px] flex justify-between items-center px-12">
                    <p className="text-[#f4f6fe] text-base font-light font-['Josefin_Sans']">
                        Copyright © Hotel Galaxy all rights reserved.
                    </p>
                    <ul className=" flex justify-center gap-4 items-center text-[#f4f6fe] text-base font-light">
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
