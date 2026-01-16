"use client";

import Container from "@/components/container";
import {
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";

export default function Contact({ settings }) {
  const handleEmailClick = (e) => {
    const subject = encodeURIComponent("Contact from Wedding Website");
    const body = encodeURIComponent("Hi Iyleah & Anusha,\n\n");
    window.location.href = `mailto:${settings?.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Container>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Contact
      </h1>
      <div className="text-center">
        <p className="text-lg">We are here to help.</p>
      </div>

      <div className="grid my-10 md:grid-cols-2">
        <div className="my-10">
          <h2 className="text-2xl font-semibold dark:text-white">
            Get In Touch
          </h2>
          <p className="max-w-sm mt-5">
            Have questions about our wedding? We'd love to hear from you!
            Feel free to reach out via email or phone.
          </p>

          <div className="mt-5">
            {settings?.email && (
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <EnvelopeIcon className="w-4 h-4" />
                <a href={`mailto:${settings.email}`}>
                  {settings.email}
                </a>
              </div>
            )}
            {settings?.phone && (
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <PhoneIcon className="w-4 h-4" />
                <a href={`tel:${settings.phone}`}>{settings.phone}</a>
              </div>
            )}
          </div>
        </div>
        <div className="my-10">
          <div className="space-y-4">
            <button
              onClick={handleEmailClick}
              className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black">
              Send us an Email
            </button>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              Click the button above to open your email client and send us a message.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
