import footlogo from '../assets/Logo 1.svg';


const Footer = () => (
    <footer className="bg-gray-800 text-white">
      <div className="flex flex-col gap-4 py-8 px-20">
        <p className="project col-span-1">
          <img src={footlogo} width="20px" className="mr-2" alt="Logo" />
          PROJECT
        </p>
        <p className="col-span-2">Almaty city,</p>
        <p className="col-span-4">&copy;2023 FinalProject. All rights reserved</p>
        <p className="col-span-7">31177@iitu.edu.com</p>
      </div>
    </footer>
  );
  
  export default Footer;