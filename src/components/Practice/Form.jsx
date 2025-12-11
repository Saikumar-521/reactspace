// import { useState } from "react"

// export function Form(){
//     const [email,setemail]=useState('')
//     const [password,setpassword]=useState('')

//     const[error,seterror]=useState({})

//     let newerror={}
//     function validate(){
//         if(email.trim()=='')
//             newerror.email='pl enter a email'
    
//     else if(!/\S+@\S+\.\S+/.test(email))
//         newerror.email='please enter valid email'

//     if(password.trim()=='')
//         newerror.password='please enter password'
//     else if(password.length<6)
//         newerror.password='please enter password as per requriment'
//   seterror(newerror)
//     return Object.keys(newerror).length==0
 
// }

// function handle(e){
//     e.preventDefault()

//     if(validate())
//         alert('Login successful')
//     else
//         alert('Login Fail')
// }

//     return(
//         <>
//         <div className="form">
//             <form action="" onSubmit={handle} className="d-flex">
//                 <label htmlFor="Name">
//                     <input type="text" placeholder="Enter tour name" onChange={(e)=>setemail(e.target.value)}/>
//                     {
//                         error.email && <p className="text-danger">{error.email}</p>
//                     }
//                 </label>
//                 <label htmlFor="password">
//                     <input type="password"  placeholder="enter your password" onChange={(e)=>setpassword(e.target.value)}/>
//                     {
//                         error.password && <p className="text-danger">{error.password}</p>
//                     }
//                 </label>

//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//         </>
//     )
// }
import { useState } from "react";

export  function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    // Email validation
    if (email.trim() === "") {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Password validation
    if (password.trim() === "") {
      newErrors.password = "Please enter your password";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      // replace with real submit logic
      alert("Login successful");
      // reset form (optional)
      setEmail("");
      setPassword("");
      setErrors({});
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 space-y-6"
        noValidate
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Login</h2>

        {/* Email field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-300 transition disabled:opacity-50 ${
              errors.email ? "border-red-400" : "border-gray-200"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby={errors.password ? "password-error" : undefined}
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-300 transition disabled:opacity-50 ${
              errors.password ? "border-red-400" : "border-gray-200"
            }`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p id="password-error" className="mt-1 text-sm text-red-600">
              {errors.password}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
            <span className="ml-2 text-gray-600">Remember me</span>
          </label>

          <a href="#" className="text-sm text-indigo-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 active:scale-98 transition"
        >
          Sign in
        </button>

        <p className="text-center text-sm text-gray-500">
          Don’t have an account? <a href="#" className="text-indigo-600 hover:underline">Sign up</a>
        </p>
      </form>
    </div>
  );
}
