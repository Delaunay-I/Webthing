const Login = () => {
  return (
    <div>
      <form action="" className="flex flex-col items-center p-4">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="email@myapp.com"
            className="border border-gray-500 dark:bg-gray-700 dark:text-white rounded-lg p-2.5 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="pass" className="block mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            id="pass"
            required
            className="block border border-gray-500 dark:bg-gray-700 dark:text-white rounded-lg p-2.5 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <div className="mb-5">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
        </div>
        <button type="submit" className="block">Submit</button>
      </form>
    </div>
  );
};

export default Login;
