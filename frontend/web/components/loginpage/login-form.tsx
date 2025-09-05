"use client";

import React, { useState } from "react";
import styles from "./login-form.module.css";

const LoginForm: React.FC = () => {
  const [signIn, setSignIn] = useState(true);

  const handleToggle = (isSignIn: boolean) => {
    setSignIn(isSignIn);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign-in clicked");
  };

  return (
 <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Sherine Travels and Tours 🚗</h1>
      </header>
      
       {/* Login Box */}
      <div className={styles.container}>
        {/* Sign Up */}
        <div className={`${styles.signUpContainer} ${!signIn ? styles.active : ""}`}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Create Account</h1>
            <input className={styles.input} type="text" placeholder="Name" required />
            <input className={styles.input} type="email" placeholder="Email" required />
            <input className={styles.input} type="password" placeholder="Password" required />
            <button className={styles.button} type="submit">Sign Up</button>

            <div className={styles.divider}>or</div>
            <button className={styles.googleButton} type="button" onClick={handleGoogleSignIn}>
              {/* Google Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
          </form>
        </div>

        {/* Sign In */}
        <div className={`${styles.signInContainer} ${!signIn ? styles.inactive : ""}`}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Sign In</h1>
            <input className={styles.input} type="email" placeholder="Email" required />
            <input className={styles.input} type="password" placeholder="Password" required />
            <a className={styles.anchor} href="#">Forgot your password?</a>
            <button className={styles.button} type="submit">Sign In</button>
          </form>
        </div>

        {/* Overlay */}
        <div className={`${styles.overlayContainer} ${!signIn ? styles.inactive : ""}`}>
          <div className={`${styles.overlay} ${!signIn ? styles.inactive : ""}`}>
            <div className={`${styles.overlayPanel} ${styles.leftOverlayPanel} ${!signIn ? styles.active : ""}`}>
              <h1 className={styles.overlayTitle}>Welcome Back!</h1>
              <p className={styles.paragraph}>To keep connected with us please login with your personal info</p>
              <button className={styles.ghostButton} type="button" onClick={() => handleToggle(true)}>Sign In</button>
            </div>

            <div className={`${styles.overlayPanel} ${styles.rightOverlayPanel} ${!signIn ? styles.inactive : ""}`}>
              <h1 className={styles.overlayTitle}>Hello!</h1>
              <p className={styles.paragraph}>Enter your personal details and start journey with us</p>
              <button className={styles.ghostButton} type="button" onClick={() => handleToggle(false)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
