const Login = () => {
  const handleGoogleSignIn = () => {
    console.log("google is coming");
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
    </div>
  );
};

export default Login;
