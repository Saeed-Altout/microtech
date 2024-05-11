import { services } from "@/config/site";

import { ServiceCard } from "@/components/card/service-card";
import { Heading } from "@/components/common/heading";

export const ServicesSection = () => {
  return (
    <div
      id="services"
      className="bg-secondary dark:bg-primary-foreground w-full py-20"
    >
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <Heading
          title="Services"
          description="Unleash the potential of your business with MicroTech Solutions. As a new entrant, we bring fresh energy and a unique perspective to the world of digital design and development."
          className="flex justify-center items-center flex-col lg:max-w-3xl text-center mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {services.map(({ icon, title, description }, index: React.Key) => (
            <ServiceCard
              key={index}
              image={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
