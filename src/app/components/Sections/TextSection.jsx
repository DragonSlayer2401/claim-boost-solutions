import { Button } from 'react-bootstrap';
import './section.css';

const TextSection = ({
  title,
  children,
  ctaButton = { show: false },
  bgColor,
  border,
  icon,
}) => {
  return (
    <section
      className="textSection section"
      style={{
        background: bgColor,
        borderBottom: border ? '1px solid #dee2e6' : 'none',
      }}
    >
      {icon}
      <h2 className="text-center font-semibold">{title}</h2>
      <p className="text-lg text-center md:!text-justify">{children}</p>
      {ctaButton.show && (
        <Button
          href={ctaButton?.link || '/contact'}
          className="text-white text-lg border-none rounded-lg py-3 px-6 font-bold"
        >
          {ctaButton?.text || 'Contact Us'}
        </Button>
      )}
    </section>
  );
};

export default TextSection;
