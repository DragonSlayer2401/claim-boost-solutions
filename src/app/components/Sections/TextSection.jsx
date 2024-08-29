import './section.css';

const TextSection = ({ title, children, ctaButton, bgColor, border, icon }) => {
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
      {ctaButton}
    </section>
  );
};

export default TextSection;
