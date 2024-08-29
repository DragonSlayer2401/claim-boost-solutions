import './footer.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-10 !px-5">
      <div className="flex flex-col gap-4 md:flex-row justify-between">
        <div>
          <h4 className="font-bold text-lg md:text-xl mb-4 mx-auto">
            Quick Claim Supplements
          </h4>
          <p className="mx-auto">
            Your fast track to supplementing and estimating. We prioritize your
            needs and ensure every claim is handled with care.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg md:text-xl mb-4 mx-auto">
            Quick Links
          </h4>
          <ul className="mx-auto">
            <li className="mb-2">
              <Link href="/">Home</Link>
            </li>
            <li className="mb-2">
              <Link href="/about">About</Link>
            </li>
            <li className="mb-2">
              <Link href="/services">Services</Link>
            </li>
            <li className="mb-2">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Privacy Policy</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-bold text-lg md:text-xl mb-4 mx-auto">
            Contact Us
          </h4>
          <address className="mx-auto">
            <p>
              Phone: <Link href="tel:+14079135152">(407) 913-5152</Link>
            </p>
            <p>Email: </p>
          </address>
        </div>
      </div>
      <div className="flex justify-center mt-4 gap-x-2 text-sm text-center flex-col md:!text-left md:flex-row">
        <p className="max-w-none">
          Partnered with Ansel & Associates LLC Established in 2014
        </p>
        <span>|</span>
        <p className="max-w-none">
          &copy; {new Date().getFullYear()} Quick Claim Supplements. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
