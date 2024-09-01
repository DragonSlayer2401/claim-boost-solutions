import Footer from '../components/Footer/Footer';
import NavBar from '../components/Header/NavBar';
import homeHero from '../../../public/images/home-hero.webp';
import logo from '../../../public/images/logo-bottom.png';
import HeroSection from '../components/Sections/HeroSection';
import TextSection from '../components/Sections/TextSection';
import CardSection from '../components/Sections/CardSection';
import { FaGavel, FaHandshake, FaPaperPlane, FaSearch } from 'react-icons/fa';
import { BsClipboard2CheckFill } from "react-icons/bs";
import InfoCard from '../components/Cards/InfoCard';
import { FiBriefcase, FiCheckCircle, FiCheckSquare, FiClipboard, FiSearch, FiSend, FiUsers } from 'react-icons/fi';

export const metadata = {
  title: 'Services | Quick Claim Supplements',
};

export default function Services() {
  const cardData = [
    {
      title: 'Initial Consultation',
      body: 'Comprehensive consultation to gather all necessary documentation.',
      icon: <FiUsers size={40} className="mx-auto !mb-4" aria-hidden={true} />,
    },
    {
      title: 'Detailed Review',
      body: 'Thorough review of your claim to identify maximization opportunities.',
      icon: <FiSearch size={40} className="mx-auto !mb-4" aria-hidden={true} />,
    },
    {
      title: 'Supplement Submission',
      body: 'Submission of supplements with complete and accurate documentation.',
      icon: <FiSend size={40} className="mx-auto !mb-4" aria-hidden={true} />,
    },
    {
      title: 'Negotiation & Settlement',
      body: 'Negotiation with the insurance company to secure the highest settlement.',
      icon: <FiCheckSquare size={40} className="mx-auto !mb-4" aria-hidden={true} />,
    },
  ];

  return (
    <>
      <NavBar />
      <main>
        <HeroSection
          bgImage={homeHero.src}
          ctaButton={true}
          heading="Comprehensive Supplementing, Estimating, and Consulting Services"
          subheading="Maximize Your Insurance Claims with Expert Guidance"
        >
          At Quick Claim Supplements, we offer specialized services in
          supplementing, estimating, and consulting to help contractors and
          businesses maximize their insurance claims. With over a decade of
          industry experience, our expert team is dedicated to providing
          accurate estimates, effective negotiation, and personalized consulting
          to ensure your business thrives.
        </HeroSection>
        <TextSection
          border={true}
          title="Maximize Your Insurance Claim with Expert Supplementing"
        >
          Our supplementing services are tailored to help you receive the
          maximum possible reimbursement for your insurance claims. We conduct a
          meticulous review of each claim, ensuring that no detail is
          overlooked. Our expertise in industry standards allows us to identify
          additional opportunities for compensation, and we effectively
          negotiate on your behalf to secure the best possible outcome.
        </TextSection>
        <TextSection
          border={true}
          title="Accurate Estimating for Maximum Claim Value"
        >
          Quick Claim Supplements offers precise estimating services to ensure
          your insurance claims are fully documented and valued accurately.
          Using advanced tools like Xactimate, we provide detailed estimates
          that reflect the true cost of repairs or replacements. Our commitment
          to accuracy helps you avoid underpayment and ensures that every aspect
          of the job is accounted for.
        </TextSection>
        <TextSection
          border={true}
          title="Optimize Your Business with Expert Consulting"
        >
          Beyond our core services, Quick Claim Supplements provides consulting
          to help your business run more efficiently and profitably. We work
          with you to streamline operations, improve customer service, and
          increase your bottom line. Our consulting services are designed to
          give you the tools and strategies you need to enhance profitability
          and drive long-term success.
        </TextSection>
        <CardSection title="Our Process">
          {cardData.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              body={card.body}
              icon={card.icon}
            />
          ))}
        </CardSection>
      </main>
      <Footer />
    </>
  );
}
