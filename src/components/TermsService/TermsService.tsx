import React, { useContext } from "react";

import { UserContext } from "../../App";
import Header from "../Header";

const PrivacyPolicy = () => {
  const [result, setResult] = React.useState<boolean>(false);
  const contextValues = useContext(UserContext);

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <React.Fragment>
      <Header />
      <h1>Terms of Service</h1>
      <p>Effective date: 10th May 2025</p>

      <p>
        Welcome to JPG! By accessing or using our website at
        https://jpgportfolio.netlify.app/, you agree to be bound by these Terms of Service and
        our Privacy Policy.
      </p>

      <h2>1. Use of the Site</h2>
      <p>
        You agree to use our website only for lawful purposes and in a way that
        does not infringe on the rights of, restrict, or inhibit anyone else’s
        use and enjoyment of the site.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        All content on this website, including text, images, logos, and
        graphics, is the property of JPG or its licensors and
        is protected by copyright laws.
      </p>

      <h2>3. Disclaimer</h2>
      <p>
        This website is provided "as is" without warranties of any kind, either
        express or implied. We do not guarantee that the site will be available
        at all times or free from errors.
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        In no event shall JPG be liable for any indirect,
        incidental, special, or consequential damages resulting from the use of
        or inability to use this site.
      </p>

      <h2>5. Changes to These Terms</h2>
      <p>
        We reserve the right to modify these Terms of Service at any time.
        Changes will be posted on this page with an updated effective date.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at
        jpgcrypto19@gmail.com.
      </p>
    </React.Fragment>
  );
};

PrivacyPolicy.displayName = "components/PrivacyPolicy";

export default PrivacyPolicy;
