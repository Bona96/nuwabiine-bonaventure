import { Link, useNavigate } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  const navigate = useNavigate();
  const hmInfoMainDiv = "p-5 rounded-md flex flex-col items-center bg-gray-400/50";
  const nolink = (e) => {
    e.preventDefault();
    alert("Portfolio coming soon!");
  }
  const haslink = (e) => {
    e.preventDefault();
    navigate(`${e.target.href.split(window.location.origin)[1]}`);
    console.log(`${e.target.href.split(window.location.origin)[1]}`);
  }
  if (currentStage === 1)
    return (
      <div className={`${hmInfoMainDiv}`}>
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-black mx-5'>
          Hi, I'm
          <span className='font-semibold mx-2'>Nuwabiine</span>
          👋
          <br />
        </h1>
        <p className="text-cyan-700 text-center" >A Web & Software Developer from Uganda</p>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className={`${hmInfoMainDiv}`}>
        <p className='font-medium sm:text-xl text-center'>
          Worked with a number of companies and individuals <br /> and picked up many skills along the way
        </p>
        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className={`${hmInfoMainDiv}`}>
        <p className='font-medium text-center sm:text-xl'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link onClick={haslink} className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className={`${hmInfoMainDiv}`}>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
