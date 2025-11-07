import Link from "next/link";
import Herosection from "./herosection";

export default function TermsAndPolicies() {
  return (
    <div className="grid gap-24">
      <Herosection />
      <section className="max-w-7xl mx-auto p-4 grid gap-8">
        <p className="text-lg">
          Prep Ecom Solution, We respects your privacy. This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you interact with our Website, our services, or when you
          communicate with us via SMS, email, or other channels.
        </p>

        <div>
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-primary mb-2">
            Information We Collect
          </h1>
          <p>
            We may collect the following information: Personal details such as
            your name, email address, phone number, and company name when you
            contact us. Communication information such as SMS message history,
            preferences, or inquiries sent to us. Website data such as your IP
            address, browser type, device information, and browsing activity on
            our website via cookies or analytics tools.
          </p>
        </div>
        <div>
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-primary mb-2">
            How We Use Your Information
          </h1>
          <p>
            We use the collected information to: Provide, operate, and improve
            our services. Send you service-related communications such as order
            updates, account notices, or customer support messages. Send
            promotional or marketing messages only if you have opted in. Comply
            with legal obligations or resolve disputes.
          </p>
        </div>
        <div>
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-primary mb-2">
            How We Share Information
          </h1>
          <p>
            We do not sell, rent, or trade your personal information. We may
            share limited information only with: Service providers or business
            partners who assist us in delivering our services (such as SMS
            delivery platforms, hosting providers, or payment processors).
            Authorities or regulators, when required by law. SMS consent is not
            shared with third parties or affiliates.
          </p>
        </div>
        <div>
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-primary mb-2">
            SMS Policy
          </h1>
          <p>
            When you opt in to receive text messages from Prep Ecom Solution,
            you consent to receive SMS communications for purposes such as
            service updates, order alerts, or marketing. Message frequency may
            vary. Message and data rates may apply. To opt out, text STOP at any
            time. For assistance, text HELP or visit prepecomsolution.com. Your
            SMS consent will never be shared with any third parties.
          </p>
        </div>
        <div>
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-primary mb-2">
            Data Security
          </h1>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data from unauthorized access, loss, misuse,
            or disclosure.
          </p>
        </div>
        <div>
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-primary mb-2">
            Data Retention
          </h1>
          <p>
            We retain your information only as long as necessary to fulfill the
            purposes described in this policy or as required by law.
          </p>
        </div>
        <div>
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-primary mb-2">
            Your Rights
          </h1>
          <p>
            Depending on your jurisdiction, you may have rights to access,
            correct, or delete your personal data. To exercise these rights,
            contact us at support@prepecomsolution.com
          </p>
        </div>
      </section>
    </div>
  );
}
