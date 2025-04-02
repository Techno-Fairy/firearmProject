'use client'

export default function RegistrationForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    console.log("User Registered:", userData);
    alert("Registration Successful!");
  }

  ///function redirectToLogin(){
    ///window.location.href="/login";
  ///}

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="fullname" required className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" required className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" name="phone" required className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Passport/ID Number</label>
            <input type="text" name="id_number" required className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" required className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">Sign Up</button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
}
