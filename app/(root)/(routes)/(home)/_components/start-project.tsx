import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const StartProjectSection = () => {
  return (
    <div className="bg-secondary dark:bg-primary-foreground py-20">
      <div className="flex flex-col gap-2 text-center lg:max-w-6xl w-full max-w-screen-xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl">
          Embark on an exciting journey of creativity and accomplishment with us
        </h3>
        <p>
          Combining the power of design, engineering, and project management to
          create transformation digital experiences. They invite you to join
          them on their journey and discover how they can help bring your
          digital ideas to life.
        </p>
        <div className="bg-background px-8 py-3 rounded-md flex items-center justify-center flex-wrap gap-5 w-fit mx-auto mt-8">
          <p className="text-sm">Let&apos;s start your project now!</p>
          <Button>
            Start project now <ArrowUpRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
