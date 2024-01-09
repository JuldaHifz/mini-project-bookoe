/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Books from "../assets/Books.png";

const ErrorPage = () => {
  return (
    <>
      <div className="w-full">
        <img src={Books} alt="" className="mx-auto w-[574px]" />
      </div>
      <div className=" flex justify-center items-center flex-col">
        <h1 className=" text-[147px] text-[#8170F2]">404</h1>
        <p className="text-[23px] mb-[20px]">Looks like you've got lost...</p>
        <p className=" text-[16px] text-[#0D0842] mb-[34px]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <button className="w-[120px] h-[32px] py-[6px] px[23px] text-center rounded-md border-2 border-[#8170F2] font-medium text-[13px] text-[#8170F2]">
            Back Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
