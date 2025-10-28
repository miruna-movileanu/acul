import ResetPasswordEmail from '@auth0/auth0-acul-js/reset-password-email';

export const PasskeyScreen = () => {
  const handleClick = () => {
      const resetPasswordEmail = new ResetPasswordEmail();
      resetPasswordEmail.resendEmail()
    };
    
  return (
    <div className="w-[100vw] min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-lg shadow-md">

        <button 
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 color: white"
          onClick={() => handleClick()}
        >
          Continue Passkey
        </button>

      </div>
    </div>
  );
};

export default PasskeyScreen;

