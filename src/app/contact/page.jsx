import Footer from '../components/Footer/Footer';
import NavBar from '../components/Header/NavBar';
import HeroSection from '../components/Sections/HeroSection';
import homeHero from '../../../public/images/home-hero.webp';
import ContactForm from '../components/Forms/ContactForm';
import FormSection from '../components/Sections/FormSection';

export const metadata = {
  title: 'Contact Us | Quick Claim Supplements',
};

export default function Contact() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection
          heading="Contact Quick Claim Supplements"
          subheading="Your Partner in Maximizing Insurance Claims Since 2013"
          bgImage={homeHero.src}
          ctaButton={false}
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
