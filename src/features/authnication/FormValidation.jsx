import { useState } from "react"

export default function Formvalidation(){
   const [value,setvalues]=useState({
    name:'',
    password:''
   })
   const [error,seterror]=useState({})

   function handlechange(e){
    setvalues({...value,[e.target.name]:e.target.value})
    // seterror()
   }
   function validation(){
    let newerrors={}
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if(value.name=='')
            newerrors.name='please enter the name'
        else if(!/^[A-Za-z]\\w{5, 29}$/.test(value.name))
            newerrors.name='please follow the specifactions'

        if(value.password=='')
            newerrors.password='please enter the password'
        else if(!pattern.test(value.password))
            newerrors.password='please enter the proper password'
        return newerrors
   }

   function handleSubmit(e){
    e.preventDefault()

    let val=validation()
      
    seterror(val)
    if (Object.keys(val).length==0)
        alert('Login successfull')

   }

    return(
        <>
         <div className="container">
            <div className="row">
                <div className="col-12">
                    <form onSubmit={handleSubmit}>
                        <input type="text" 
                        placeholder="enter your name"
                        name="name"
                        onChange={handlechange}
                        />
                        {error.name && (<p style={{color:'red'}}></p>)}
                        <input type="password"
                        placeholder="enter your password"
                        name="password" 
                        onChange={handlechange}
                        />
                           {error.password && (<p style={{color:'red'}}></p>)}

                        <button type="submit" className="btn btn-primary" >Log in</button>
                    </form>
                </div>
            </div>
         </div>
        </>
    )
}

// import { useState } from "react";

// export default function FormValidation() {
//   const [values, setValues] = useState({
//     name: "",
//     password: ""
//   });

//   // store per-field error messages
//   const [errors, setErrors] = useState({});

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setValues(prev => ({ ...prev, [name]: value }));

//     // clear only the error for the currently edited field
//     setErrors(prev => ({ ...prev, [name]: "" }));
//   }

//   function validateAll() {
//     const newErrors = {};

//     // Name pattern: start with a letter, then 5–29 word characters (total length 6–30)
//     const namePattern = /^[A-Za-z]\w{5,29}$/;

//     if (values.name.trim() === "") {
//       newErrors.name = "Please enter the name";
//     } else if (!namePattern.test(values.name)) {
//       newErrors.name = "Name must start with a letter and be 6–30 characters (letters/numbers/_)";
//     }

//     // Password: at least one letter + at least one digit, min 6 chars
//     const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

//     if (values.password.trim() === "") {
//       newErrors.password = "Please enter the password";
//     } else if (!passwordPattern.test(values.password)) {
//       newErrors.password = "Password must be at least 6 characters and include letters and numbers";
//     }

//     return newErrors;
//   }

//   function handleSubmit(e) {
//     // prevent page reload
//     e.preventDefault();

//     const validationErrors = validateAll();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       // form is valid — proceed with submission logic
//       alert("Form Submitted Successfully");
//       // reset form if desired:
//       // setValues({ name: "", password: "" });
//     }
//   }

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <form onSubmit={handleSubmit} noValidate>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   name="name"
//                   value={values.name}
//                   onChange={handleChange}
//                   className={`form-control ${errors.name ? "is-invalid" : ""}`}
//                 />
//                 {errors.name && <div className="invalid-feedback">{errors.name}</div>}
//               </div>

//               <div className="mb-3">
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   name="password"
//                   value={values.password}
//                   onChange={handleChange}
//                   className={`form-control ${errors.password ? "is-invalid" : ""}`}
//                 />
//                 {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//               </div>

//               <button className="btn btn-primary" type="submit">Log in</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
