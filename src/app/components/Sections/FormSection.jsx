import './section.css';

const FormSection = ({ title, children, bgColor }) => {
  return (
    <section className="formSection section" style={{ background: bgColor }}>
      <h2 className="text-center font-bold mb-5">{title}</h2>
      {children}
    </section>
  );
};

export default FormSection;
