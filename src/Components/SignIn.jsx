function SignIn() {
    return (
      <div className="signin-container">
        <div className="signin-box">
          <h2>Sign In</h2>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Submit</button>
          <p>Don't have an account? <span>Register</span></p>
        </div>
      </div>
    );
  }
  
  export default SignIn;
  