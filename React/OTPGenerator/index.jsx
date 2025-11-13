const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState("");    // generate OTP
  const [timer, setTimer] = useState(0); // countdown timer

  useEffect(() => {
    let intervalId;

    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }

    // Cleanup previous interval on timer change
    return () => clearInterval(intervalId);
  }, [timer, otp]);

  function generateOTP() {
    // 6 digit random OTP
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(newOtp);
    setTimer(5);
  }
  
  // otp display
  const otpDisplay = otp ? otp : "Click 'Generate OTP' to get a code";

  // timer message
  let timerMsg = "";
  if (timer > 0) {
    timerMsg = `Expires in: ${timer} seconds`;
  } else if (otp && timer === 0) {
    timerMsg = "OTP expired. Click the button to generate a new OTP.";
  }

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{otpDisplay}</h2>
      <p id="otp-timer" aria-live="assertive">{timerMsg}</p>
      <button 
        id="generate-otp-button" 
        onClick={generateOTP}
        disabled={timer > 0}
      >
        Generate OTP
      </button>
    </div>
  );
};
