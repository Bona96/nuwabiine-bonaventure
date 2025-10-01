import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text text-gray-800 dark:text-gray-200'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Link to='/contact' className='btn text-gray-800 dark:text-gray-200'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
