import NavBar from './components/Header/NavBar';
import homeHero from '../../public/images/home-hero.webp';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Sections/HeroSection';
import InfoSection from './components/Sections/CardSection';
import InfoCard from './components/Cards/InfoCard';
import { FiCheckSquare, FiClock } from 'react-icons/fi';
import { FaHandshake, FaHeadset } from 'react-icons/fa';

export const metadata = {
  title: 'ClaimBoost Solutions | Maximize Your Insurance Claims',
  description:
    'ClaimBoost Solutions provides expert supplementing and estimating services to ensure you get the maximum value from your insurance claims. Contact us today!',
  keywords: [
    'supplementing',
    'estimating',
    'insurance claims',
    'claim maximization',
    'ClaimBoost Solutions',
  ],
  openGraph: {
    title: 'ClaimBoost Solutions | Maximize Your Insurance Claims',
    description:
      'Expert supplementing and estimating services to help you secure the highest possible returns on your insurance claims.',
    image: [
      {
        url: homeHero.src,
        width: 1280,
        height: 854,
        alt: 'Professional working on documents',
      },
    ],
    url: `${process.env.DOMAIN}`,
    type: 'website',
  },
  alternatives: {
    canonical: `${process.env.DOMAIN}`,
  },
};

export default function Home() {
  const cardData = [
    {
      title: 'Comprehensive Claim Review',
      body: 'Our team meticulously reviews each claim to identify opportunities for maximization, ensuring no detail is overlooked.',
      icon: (
        <FiCheckSquare size={40} className="mx-auto !mb-4" aria-hidden={true} />
      ),
    },
    {
      title: 'Expert Negotiation',
      body: 'We engage directly with insurance companies to secure the highest possible returns on your claims.',
      icon: (
        <FaHandshake size={40} className="mx-auto !mb-4" aria-hidden={true} />
      ),
    },
    {
      title: 'Timely and Transparent',
      body: 'We provide regular updates and ensure that every supplement is processed efficiently, keeping your projects on track.',
      icon: <FiClock size={40} className="mx-auto !mb-4" aria-hidden={true} />,
    },
    {
      title: 'Dedicated Support',
      body: 'Our commitment to personalized service means we are always available to assist with any questions or challenges.',
      icon: (
        <FaHeadset size={40} className="mx-auto !mb-4" aria-hidden={true} />
      ),
    },
  ];

  return (
    <>
      <NavBar />
      <main>
        <HeroSection
          bgImage={homeHero.src}
          heading="Your Fast Track to Supplementing and Estimating"
          subheading="We prioritize your needs to ensure every claim is handled with care."
        >
          Welcome to ClaimBoost Solutions. Our mission is to help you
          maximize the value of your insurance claims through our expert
          supplementing and estimating services. With our attention to detail,
          we strive to secure top dollar for every job. Let us assist you with
          collections, invoicing, and customer service, backed by years of
          industry experience.
        </HeroSection>
        <InfoSection title="Our Expertise at a Glance">
          {cardData.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              body={card.body}
              icon={card.icon}
            />
          ))}
        </InfoSection>
      </main>
      <Footer />
    </>
  );
}
