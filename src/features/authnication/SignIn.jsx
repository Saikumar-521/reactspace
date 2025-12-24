// // import { useNavigate } from "react-router-dom"

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";



// export const SignIn=()=>{
//   let navigate =useNavigate()

//       const [loginValue, setloginValue] = useState({
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setloginValue({ ...loginValue, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

    
//     const savedUser = JSON.parse(localStorage.getItem("user"));

//     if (!savedUser) {
//       alert("No user found, please register first!");
//       return;
//     }
//     if (
//       savedUser.email === loginValue.email &&
//       savedUser.password === loginValue.password
//     ) {
//       alert("Login Successful!");
//     } else {
//       alert("Invalid email or password");
//     }
//  setTimeout(()=>{
//   navigate('/home')
//  },1000)

//   };

//     return(
//         <>
//        <form onSubmit={handleSubmit}>

//               <h1 className="a11y-hidden">SignIn Form</h1>

//          <div className="mb-3">
//               <label className="form-label fw-semibold">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 name="email"
//                 placeholder="Enter email"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label fw-semibold">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 name="password"
//                 placeholder="Enter password"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           <button type="submit" className="btn btn-primary w-100 mt-2">
//               SignIn
//             </button>
//        </form>

         
//         </>
//     )
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  let navigate = useNavigate();

  const [loginValue, setloginValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setloginValue({ ...loginValue, [e.target.name]: e.target.value });
    setError(""); // clear error while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("No user found, please register first!");
      return;
    }

    if (
      savedUser.email === loginValue.email &&
      savedUser.password === loginValue.password
    ) {
      alert("Login Successful!");
      setTimeout(() => {
        navigate("/home"); // navigation only when success
      }, 1000);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="a11y-hidden">SignIn Form</h1>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            required
          />
        </div>

        {error && <small className="text-danger">{error}</small>}

        <button type="submit" className="btn btn-primary w-100 mt-2">
          SignIn
        </button>
      </form>
    </>
  );
};
