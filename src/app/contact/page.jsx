import Footer from '../components/Footer/Footer';
import NavBar from '../components/Header/NavBar';
import HeroSection from '../components/Sections/HeroSection';
import homeHero from '../../../public/images/home-hero.webp';
import ContactForm from '../components/Forms/ContactForm';
import FormSection from '../components/Sections/FormSection';
import logo from '../../../public/images/logo-bottom.png';

export const metadata = {
  title:
    'Contact ClaimBoost Solutions | Expert Supplementing & Estimating Services',
  description:
    'Contact ClaimBoost Solutions today to maximize your insurance claims. We offer expert supplementing and estimating services with personalized attention to every detail. Let us help you secure top dollar for your claims.',
  keywords: [
    'contact ClaimBoost Solutions',
    'insurance claim supplementing',
    'claim estimating services',
    'maximize insurance claims',
    'personalized service',
    'insurance claims help',
  ],
  openGraph: {
    title:
      'Contact ClaimBoost Solutions | Expert Supplementing & Estimating Services',
    description:
      'Reach out to ClaimBoost Solutions to ensure you get the most out of your insurance claims. We provide expert supplementing and estimating services with a focus on personalized attention and maximizing your returns.',
    image: [
      {
        url: homeHero.src,
        width: 1280,
        height: 854,
        alt: 'Professional working on documents',
      },
    ],
    url: `${process.env.DOMAIN}/contact`,
    type: 'website',
  },
  alternatives: {
    canonical: `${process.env.DOMAIN}/contact`,
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
          heading="Contact ClaimBoost Solutions"
          subheading="Your Partner in Maximizing Insurance Claims Since 2013"
        >
          At ClaimBoost Solutions, we are committed to providing you with
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
