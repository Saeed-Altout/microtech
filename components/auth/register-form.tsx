import { WrapperForm } from "@/components/auth/wrapper-form";

export const RegisterForm = () => {
  return (
    <WrapperForm
      title="Register"
      description="Sign up and enjoy."
      backButtonDescription="Do you have an account?"
      backButtonHref="/auth/login"
      backButtonLabel="Login"
    >
      RegisterForm
    </WrapperForm>
  );
};
