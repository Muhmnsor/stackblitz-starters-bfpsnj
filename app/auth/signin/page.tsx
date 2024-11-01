import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import SignInForm from './SignInForm';

export default async function SignIn() {
  const session = await getServerSession();

  if (session) {
    redirect('/');
  }

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="/logo.svg"
          alt="جمعية ديوان الشبابية"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          تسجيل الدخول
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}