// import { useNavigate } from "react-router-dom"

export const SignIn=()=>{
 

    return(
        <>
        <h1 className="a11y-hidden">SignIn Form</h1>

        <div>
          <label className="label-email">
            <input
              type="email"
              className="text"
              name="email"
              placeholder="Email"
              tabIndex={1}
              required
            />
            <span className="required">Email</span>
          </label>
        </div>

        <input
          type="checkbox"
          name="show-password"
          className="show-password a11y-hidden"
          id="show-password"
          tabIndex={3}
        />

        <label className="label-show-password" htmlFor="show-password">
          <span>Show Password</span>
        </label>

        <div>
          <label className="label-password">
            <input
              type="text"
              className="text"
              name="password"
              placeholder="Password"
              tabIndex={2}
              required
            />
            <span className="required">Password</span>
          </label>
        </div>

        <input type="submit" value="Log In" />

        <div className="email">
          <a href="#">Forgot password?</a>
        </div>
         

         
        </>
    )
}