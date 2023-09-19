import { BookNowBtn } from "../BookNowBtn";
import room2 from "../../assets/Images/room2.jpeg"
import "./cardEffect.css";


const RoomCard = ({ roomType, price, brief, description, bgImg }) => {
    return (
        <div className=" relative h-[25rem] w-[30%] card cursor-pointer">
            <div
                className=" card-element-front absolute  top-0 left-0 w-full h-full overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col px-4 py-6"
                style={{
                    backgroundImage: `url(${room2})`,
                }}
            >
                <div
                    className="w-full h-full absolute top-0 left-0"
                    style={{
                        background:
                            "linear-gradient(180deg, #00000080 0%, #DBA76BB3 100%)",
                    }}
                ></div>
                <div className=" absolute top-20 -right-10 rotate-[-90deg] py-3 px-3 border border-white">
                    <p className=" text-h3 text-white font-medium font-['Josefin_Sans']">
                        From <span>&#8377;</span>
                        {price}/night
                    </p>
                </div>
                <div className=" flex flex-col justify-center mt-auto z-10">
                    <h3 className=" capitalize text-h2 mb-4 text-white">
                        {roomType}
                    </h3>
                    <p className=" text-h3 text-white font-medium font-['Josefin_Sans']">
                        {brief}
                    </p>
                </div>
            </div>
            <div
                className=" card-element-back absolute top-0 left-0 flex w-full h-full overflow-hidden bg-cover bg-center bg-no-repeat flex-col px-4 py-6"
                style={{
                    backgroundImage: `${bgImg}`,
                }}
            >
                <div className=" bg-card-filter absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex justify-center items-center flex-col ">
                    <div className=" px-8">
                        <h3 className=" capitalize text-h2 mb-4 text-white font-['Josefin_Sans'] leading-8">
                            {roomType}
                        </h3>
                        <p className=" text-p text-white font-['Josefin_Sans'] font-normal mb-8">
                            {description}
                        </p>
                        <BookNowBtn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
