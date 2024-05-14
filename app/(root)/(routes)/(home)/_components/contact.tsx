import { Heading } from "@/components/common/heading";
import { ContactForm } from "@/components/common/contact-form";

export const ContactSection = () => {
  return (
    <section id="contact-us" className="container py-20">
      <Heading
        title="Contact Us"
        description="Let's turn your vision into reality. Get in touch with us today and let the digital transformation begin!"
        className="flex justify-center items-center flex-col lg:max-w-3xl text-center mx-auto"
      />
      <div className="mt-10 max-w-5xl mx-auto">
        <ContactForm />
      </div>
    </section>
  );
};
