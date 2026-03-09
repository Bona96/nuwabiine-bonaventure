import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='flex flex-row justify-between items-center py-3 px-4 bg-gray-100/50 dark:bg-gray-800/50 rounded-3xl shadow-lg mt-16'>
      <p className='ml-5 text-gray-800 dark:text-gray-200'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Link to='/contact' className='mr-5 btn text-gray-800 dark:text-gray-200'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
