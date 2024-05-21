import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <SignIn path="/sign-in" />
    </div>
  );
};

export default SignInPage;
