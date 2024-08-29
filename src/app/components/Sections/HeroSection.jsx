import './section.css';
import { Button } from 'react-bootstrap';

const HeroSection = ({ heading, subheading, bgImage, children }) => {
  return (
    <section
      className="w-full flex flex-col justify-center px-5 section"
      id="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>
      <h1 className="text-2xl font-bold !text-center mb-4 md:!text-left md:text-3xl">
        {heading}
      </h1>
      <h2 className="text-lg mb-6 !text-center md:!text-left md:text-2xl ">
        {subheading}
      </h2>
      <p className="text-base mb-8 !text-center md:!text-left md:text-lg">
        {children}
      </p>
      <Button
        className="text-white text-lg border-none rounded-lg py-3 px-6 font-bold block mx-auto"
        href="/contact"
      >
        Get Started Today
      </Button>
    </section>
  );
};

export default HeroSection;
