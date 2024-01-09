import bookKoe from "../assets/bookoe-logo.png";

const Footer = () => {
  return (
    <div className="w-[1240px] mx-auto py-[37px] flex items-center">
      <div>
        <div className="grid grid-cols-2 mb-[55px]">
          <div className="flex items-center">
            <div>
              <img src={bookKoe} alt="" />
            </div>
            <div>
              <p className=" text-4xl ml-1">BooKoe</p>
              <p className=" ml-1">Rekomendasi Bukumu</p>
            </div>
          </div>
          <div className=" font-[18px] text-[#6F6C90]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            voluptate officia placeat! Minus deleniti excepturi odio sint
            doloremque debitis quas repellat in aut tenetur eligendi dolore,
            assumenda non enim, fugiat officia, cupiditate deserunt similique
            distinctio. Dolorum libero qui repudiandae quam, quidem provident,
            recusandae, totam quaerat fugiat sed iusto inventore sapiente.
          </div>
        </div>
        <hr className="w-full mb-[38px]" />
        <div className="grid grid-cols-2">
          <div>
            <p>Copyright © 2023 Codemasters.id | All Rights Reserved </p>
          </div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
