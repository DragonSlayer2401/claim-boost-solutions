import Footer from '../components/Footer/Footer';
import NavBar from '../components/Header/NavBar';
import homeHero from '../../../public/images/home-hero.webp';
import HeroSection from '../components/Sections/HeroSection';
import TextSection from '../components/Sections/TextSection';
import CardSection from '../components/Sections/CardSection';
import InfoCard from '../components/Cards/InfoCard';
import { FiCheckSquare, FiSend, FiUsers } from 'react-icons/fi';
import { BsClipboard2CheckFill } from 'react-icons/bs';

export const metadata = {
  title: 'Comprehensive Insurance Claim Services | ClaimBoost Solutions',
  description:
    'ClaimBoost Solutions offers specialized supplementing, estimating, and consulting services designed to maximize your insurance claim returns. With a focus on accuracy, efficiency, and customer satisfaction, we help you secure top dollar for every claim.',
  keywords: [
    'insurance claim supplementing',
    'estimating services',
    'business consulting',
    'maximize insurance claims',
    'ClaimBoost Solutions',
    'contractor services',
    'insurance consulting',
    'claim management',
  ],
  openGraph: {
    title: 'Comprehensive Insurance Claim Services | ClaimBoost Solutions',
    description:
      'At ClaimBoost Solutions, we are dedicated to helping contractors and businesses maximize their insurance claim returns through expert supplementing, accurate estimating, and strategic consulting. Our services are tailored to enhance profitability and ensure every claim is handled with care.',
    image: [
      {
        url: homeHero.src,
        width: 1280,
        height: 854,
        alt: 'Professional working on documents',
      },
    ],
    url: `${process.env.DOMAIN}/services`,
    type: 'website',
  },
  alternatives: {
    canonical: `${process.env.DOMAIN}/services`,
  },
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
      icon: (
        <BsClipboard2CheckFill
          size={40}
          className="mx-auto !mb-4"
          aria-hidden={true}
        />
      ),
    },
    {
      title: 'Supplement Submission',
      body: 'Submission of supplements with complete and accurate documentation.',
      icon: <FiSend size={40} className="mx-auto !mb-4" aria-hidden={true} />,
    },
    {
      title: 'Negotiation & Settlement',
      body: 'Negotiation with the insurance company to secure the highest settlement.',
      icon: (
        <FiCheckSquare size={40} className="mx-auto !mb-4" aria-hidden={true} />
      ),
    },
  ];

  return (
    <>
      <NavBar />
      <main>
        <HeroSection
          bgImage={homeHero.src}
          heading="Comprehensive Supplementing, Estimating, and Consulting Services"
          subheading="Maximize Your Insurance Claims with Expert Guidance"
        >
          At ClaimBoost Solutions, we offer specialized services in
          supplementing, estimating, and consulting to help contractors and
          businesses maximize their insurance claims. With over a decade of
          industry experience, our expert team is dedicated to providing
          accurate estimates, effective negotiation, and personalized consulting
          to ensure your business thrives.
        </HeroSection>
        <TextSection
          title="Maximize Your Insurance Claim with Expert Supplementing"
          ctaButton={{ show: true }}
        >
          Our supplementing services are tailored to help you receive the
          maximum possible reimbursement for your insurance claims. We conduct a
          meticulous review of each claim, ensuring that no detail is
          overlooked. Our expertise in industry standards allows us to identify
          additional opportunities for compensation, and we effectively
          negotiate on your behalf to secure the best possible outcome.
        </TextSection>
        <TextSection
          title="Accurate Estimating for Maximum Claim Value"
          ctaButton={{ show: true, text: 'Get a Quote' }}
        >
          ClaimBoost Solutions offers precise estimating services to ensure
          your insurance claims are fully documented and valued accurately.
          Using advanced tools like Xactimate, we provide detailed estimates
          that reflect the true cost of repairs or replacements. Our commitment
          to accuracy helps you avoid underpayment and ensures that every aspect
          of the job is accounted for.
        </TextSection>
        <TextSection
          title="Optimize Your Business with Expert Consulting"
          ctaButton={{ show: true, text: 'Start Consulting' }}
        >
          Beyond our core services, ClaimBoost Solutions provides consulting
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
