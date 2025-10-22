import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";


// Configurable form fields for reusability
const FORM_FIELDS = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Bonaventure',
    required: true,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'example@gmail.com',
    required: true,
  },
  {
    name: 'message',
    label: 'Your Message',
    type: 'textarea',
    placeholder: 'Write your thoughts here...',
    required: true,
    rows: 4,
  },
];

const INITIAL_FORM = FORM_FIELDS.reduce((acc, field) => {
  acc[field.name] = '';
  return acc;
}, {});

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(INITIAL_FORM);
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  // Generic change handler
  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Animation handlers
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  // Submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation('hit');

    // Prepare email params dynamically
    const emailParams = {
      from_name: form.name,
      to_name: 'Nuwabiine Bonaventure',
      from_email: form.email,
      to_email: 'mnuwabiine@gmail.com',
      message: form.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        emailParams,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });
          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation('idle');
            setForm(INITIAL_FORM);
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation('idle');
          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        }
      );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-500'>
      {alert.show && <Alert {...alert} />}

      {/* Form Section */}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          {FORM_FIELDS.map((field) => (
            <label key={field.name} className='text-black-500 font-semibold'>
              {field.label}
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  rows={field.rows || 3}
                  className='textarea'
                  placeholder={field.placeholder}
                  required={field.required}
                  value={form[field.name]}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  className='input'
                  placeholder={field.placeholder}
                  required={field.required}
                  value={form[field.name]}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              )}
            </label>
          ))}
          <button
            type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>

      {/* 3D Model Section */}
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;