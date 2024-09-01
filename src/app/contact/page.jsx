import Footer from '../components/Footer/Footer';
import NavBar from '../components/Header/NavBar';
import HeroSection from '../components/Sections/HeroSection';
import homeHero from '../../../public/images/home-hero.webp';
import ContactForm from '../components/Forms/ContactForm';
import FormSection from '../components/Sections/FormSection';
import logo from '../../../public/images/logo-bottom.png';

export const metadata = {
  title:
    'Contact Quick Claim Supplements | Expert Supplementing & Estimating Services',
  description:
    'Contact Quick Claim Supplements today to maximize your insurance claims. We offer expert supplementing and estimating services with personalized attention to every detail. Let us help you secure top dollar for your claims.',
  keywords: [
    'contact Quick Claim Supplements',
    'insurance claim supplementing',
    'claim estimating services',
    'maximize insurance claims',
    'personalized service',
    'insurance claims help',
  ],
  openGraph: {
    title:
      'Contact Quick Claim Supplements | Expert Supplementing & Estimating Services',
    description:
      'Reach out to Quick Claim Supplements to ensure you get the most out of your insurance claims. We provide expert supplementing and estimating services with a focus on personalized attention and maximizing your returns.',
    image: [
      {
        url: logo.src,
        width: 500,
        height: 500,
        alt: 'Quick Claim Supplements Logo',
      },
      {
        url: homeHero.src,
        width: 1280,
        height: 854,
        alt: 'Professional working on documents',
      },
    ],
    url: '#/contact',
    type: 'website',
  },
  alternatives: {
    canonical: '#/contact',
  },
};

export default function Contact() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection
          bgImage={homeHero.src}
          ctaButton={{ show: false }}
          heading="Contact Quick Claim Supplements"
          subheading="Your Partner in Maximizing Insurance Claims Since 2013"
        >
          At Quick Claim Supplements, we are committed to providing you with
          personalized service and expert guidance to ensure that your insurance
          claims are handled with precision and care. Reach out to us today and
          let us help you secure the maximum value for your claims.
        </HeroSection>
        <FormSection title="Contact Us" className="flex">
          <ContactForm />
        </FormSection>
      </main>
      <Footer />
    </>
  );
}
