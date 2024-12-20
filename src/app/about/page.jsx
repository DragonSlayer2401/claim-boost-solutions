import Footer from '../components/Footer/Footer';
import NavBar from '../components/Header/NavBar';
import HeroSection from '../components/Sections/HeroSection';
import homeHero from '../../../public/images/home-hero.webp';
import TextSection from '../components/Sections/TextSection';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { FaHistory, FaRegHandshake } from 'react-icons/fa';
import { MdOutlineContactMail } from 'react-icons/md';

export const metadata = {
  title:
    'About ClaimBoost Solutions | Expert Insurance Supplementing & Estimating Services',
  description:
    'Learn about ClaimBoost Solutions, a trusted partner in maximizing insurance claims. Discover our commitment to providing expert supplementing and estimating services with a focus on customer satisfaction and integrity.',
  keywords: [
    'About ClaimBoost Solutions',
    'insurance supplementing services',
    'insurance estimating services',
    'maximize insurance claims',
    'expert insurance services',
    'customer satisfaction',
    'integrity in insurance',
  ],
  openGraph: {
    title:
      'About ClaimBoost Solutions | Expert Insurance Supplementing & Estimating Services',
    description:
      'Discover how ClaimBoost Solutions provides top-tier insurance supplementing and estimating services with a commitment to maximizing your claims and ensuring customer satisfaction.',
    image: [
      {
        url: homeHero.src,
        width: 1280,
        height: 854,
        alt: 'Professional working on documents',
      },
    ],
    url: `${process.env.DOMAIN}/about`,
    type: 'website',
  },
  alternatives: {
    canonical: `${process.env.DOMAIN}/about`,
  },
};

export default function About() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection
          bgImage={homeHero.src}
          heading="About ClaimBoost Solutions"
          subheading="Leading Expert in Supplementing and Estimating Solutions"
        >
          Since 2013,ClaimBoost Solutions has been a trusted partner for
          contractors and businesses seeking to maximize their insurance claims.
          Founded and operated by an industry veteran, our mission is to deliver
          expert supplementing and estimating services that enhance
          profitability and streamline operations. With a deep understanding of
          the restoration process, I ensure every job is completed with
          precision and care.
        </HeroSection>
        <TextSection
          title="Unmatched Insurance Supplementing Services"
          icon={<FaRegCircleCheck className="icon" aria-hidden={true} />}
        >
          At ClaimBoost Solutions, I pride myself on delivering unmatched
          service in supplementing and estimating. My focus is on ensuring that
          every client receives the maximum value for their insurance claims.
          With personalized attention to detail, I support your business through
          every step of the process, from collections to invoicing.
        </TextSection>
        <TextSection
          title="The Journey of ClaimBoost Solutions"
          icon={<FaHistory className="icon" aria-hidden={true} />}
        >
          ClaimBoost Solutions was founded in 2013 after my experience as a
          project manager opened my eyes to the need for dedicated supplementing
          and estimating services. Having worked both the front and back end of
          the industry, I saw the opportunity to create a company that maximizes
          insurance claims while providing clients with the tools and knowledge
          to succeed. My growth and success over the years are rooted in a
          commitment to enhancing profitability and efficiency for every client.
        </TextSection>
        <TextSection
          title="Our Core Values: Integrity and Customer Satisfaction"
          icon={<FaRegHandshake className="icon" aria-hidden={true} />}
        >
          As the sole operator of ClaimBoost Solutions, my values guide every
          decision I make. I believe in integrity, transparency, and a
          relentless focus on customer satisfaction. These values ensure that
          each client receives personalized service and the best possible
          outcomes for their insurance claims.
        </TextSection>
        <TextSection
          title="Maximize Your Insurance Claims with Expert Guidance"
          border={false}
          ctaButton={{ show: true }}
          icon={<MdOutlineContactMail className="icon" aria-hidden={true} />}
        >
          Contact ClaimBoost Solutions today to learn how I can help you
          maximize the value of your insurance claims. I am ready to provide the
          expert guidance and support you need to succeed in today’s competitive
          market.
        </TextSection>
      </main>
      <Footer />
    </>
  );
}
