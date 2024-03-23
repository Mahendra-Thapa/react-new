const Footer = () => {
  return (
    <div >
      
      {/* <div className="relative">
        <div className="text-center absolute top-36 md:top-14 md:left-[200px] text-white left-[500px]">
        <h1 className="font-bold text-2xl ">Develope By</h1>
          <h2 className="font-semibold text-xl">Mahendra Thapa</h2>
          <p className="text-xl">2024 <strong> &copy;</strong> thapamahednra.com </p>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#000000"
              fill-opacity="1"
              d="M0,64L1440,128L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div> */}



      <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#000000"
              fill-opacity="1"
              d="M0,64L1440,128L1440,320L0,320Z"
            ></path>
          </svg>
         
          <div className="text-center  absolute top-[170px] left-[550px] text-white md:top-[60px] xl:top-[150px] md:left-[200px] lg:top-[100px] lg:left-[400px]">
        <h1 className="font-bold text-2xl ">Developed By</h1>
          <h2 className="font-semibold text-xl">Mahendra Thapa</h2>
          <p className="text-xl">2024 <strong> &copy;</strong> thapamahednra.com </p>
        </div>
      </div>

      {/* <div className="py-4 text-center bg-black text-white">
      <h1 className="font-bold text-2xl">Develope By</h1>
      <h2 className="font-semibold text-xl">Mahendra Thapa</h2>
      <p className="text-xl">thapamahendra671@gmail.com</p>
  </div> */}
  
    </div>
  );
};
export default Footer;
