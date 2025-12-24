import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  
  let navigate=useNavigate()

  const [formvalue, setformvalue] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: ""
  });

  const handlechange = (e) => {
    setformvalue({
      ...formvalue,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formvalue));
    alert('register successfully')
    setTimeout(()=>navigate('/Signin'),1000)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-semibold">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullname"
            placeholder="Enter full name"
            onChange={handlechange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
            onChange={handlechange}
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
            onChange={handlechange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            placeholder="Confirm password"
            onChange={handlechange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Mobile</label>
          <input
            type="tel"
            className="form-control"
            name="mobile"
            placeholder="Enter mobile number"
            onChange={handlechange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-2" >
          Register
        </button>
      </form>
    </>
  );
};


// import { useState } from "react";

// export const SignUp = () => {
//   const [formvalue, setformvalue] = useState({
//     fullname: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     mobile: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handlechange = (e) => {
//     setformvalue({
//       ...formvalue,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validate = () => {
//     let newErrors = {};

//     if (!/^[A-Za-z ]{3,30}$/.test(formvalue.fullname)) {
//       newErrors.fullname = "Full name must contain only letters & spaces (3-30 chars)";
//     }

//     if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(formvalue.email)) {
//       newErrors.email = "Enter a valid email address";
//     }

//     if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formvalue.password)) {
//       newErrors.password =
//         "Password must be 8+ chars, include uppercase, lowercase, number, special char";
//     }

//     if (formvalue.password !== formvalue.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     if (!/^[6-9][0-9]{9}$/.test(formvalue.mobile)) {
//       newErrors.mobile = "Enter valid 10-digit mobile starting with 6-9";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0; // returns true if no errors
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validate()) {
//       localStorage.setItem("user", JSON.stringify(formvalue));
//       alert("Registered Successfully!");
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         {/* Full Name */}
//         <div className="mb-3">
//           <label className="form-label fw-semibold">Full Name</label>
//           <input
//             type="text"
//             className="form-control"
//             name="fullname"
//             placeholder="Enter full name"
//             value={formvalue.fullname}
//             onChange={handlechange}
//           />
//           {errors.fullname && <small className="text-danger">{errors.fullname}</small>}
//         </div>

//         {/* Email */}
//         <div className="mb-3">
//           <label className="form-label fw-semibold">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             name="email"
//             placeholder="Enter email"
//             value={formvalue.email}
//             onChange={handlechange}
//           />
//           {errors.email && <small className="text-danger">{errors.email}</small>}
//         </div>

//         {/* Password */}
//         <div className="mb-3">
//           <label className="form-label fw-semibold">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             name="password"
//             placeholder="Enter password"
//             value={formvalue.password}
//             onChange={handlechange}
//           />
//           {errors.password && <small className="text-danger">{errors.password}</small>}
//         </div>

//         {/* Confirm Password */}
//         <div className="mb-3">
//           <label className="form-label fw-semibold">Confirm Password</label>
//           <input
//             type="password"
//             className="form-control"
//             name="confirmPassword"
//             placeholder="Confirm password"
//             value={formvalue.confirmPassword}
//             onChange={handlechange}
//           />
//           {errors.confirmPassword && (
//             <small className="text-danger">{errors.confirmPassword}</small>
//           )}
//         </div>

//         {/* Mobile */}
//         <div className="mb-3">
//           <label className="form-label fw-semibold">Mobile</label>
//           <input
//             type="tel"
//             className="form-control"
//             name="mobile"
//             placeholder="Enter mobile number"
//             value={formvalue.mobile}
//             onChange={handlechange}
//           />
//           {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
//         </div>

//         <button type="submit" className="btn btn-primary w-100 mt-2">
//           Register
//         </button>
//       </form>
//     </>
//   );
// };
