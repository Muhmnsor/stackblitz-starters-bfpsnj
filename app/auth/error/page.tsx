export default function AuthError({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const error = searchParams.error;
  let errorMessage = 'حدث خطأ أثناء تسجيل الدخول';

  if (error === 'AccessDenied') {
    errorMessage = 'يجب استخدام بريد إلكتروني تابع للجمعية';
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
          خطأ في تسجيل الدخول
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">{errorMessage}</p>
      </div>
    </div>
  );
}