import './section.css';

const CardSection = ({ title, children }) => {
  return (
    <section className='cardSection section'>
      <h2 className="text-center font-bold mb-10">{title}</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
};

export default CardSection;
