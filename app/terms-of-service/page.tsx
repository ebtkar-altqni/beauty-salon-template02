import React from "react";

const TermsOfService: React.FC = () => (
  <div className="max-w-3xl mx-auto py-10 px-4">
    <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
    <p className="mb-4">
      Welcome to Riri Beauty Center. By visiting our center or using our website, you agree to the following terms and conditions.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Appointments</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Please arrive on time for your appointment. If you are late, your session may be shortened.</li>
      <li>Appointments can be rescheduled or canceled by contacting us in advance.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">Services</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>All services are provided by trained professionals.</li>
      <li>We reserve the right to refuse service to anyone for inappropriate behavior.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">Payments</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Payments are due at the time of service.</li>
      <li>We accept cash and other locally accepted payment methods.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">Liability</h2>
    <p className="mb-4">
      Riri Beauty Center is not responsible for any allergic reactions or side effects from treatments. Please inform us of any allergies or medical conditions before your session.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Changes to Terms</h2>
    <p className="mb-4">
      We may update these terms from time to time. Please check our website for the latest version.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
    <p>
      For any questions about these Terms of Service, please contact us at our center or through our website contact form.
    </p>
  </div>
);

export default TermsOfService;