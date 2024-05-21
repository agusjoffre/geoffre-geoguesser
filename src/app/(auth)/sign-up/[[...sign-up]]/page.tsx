import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <SignUp path="/sign-up" />
    </div>
  );
};

export default SignUpPage;
