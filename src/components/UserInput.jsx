import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1500,
    expectedReturn: 2000,
    duration: 10,
  });

  function changeHandler({ investment, input }) {
    setUserInput((prevInput) => {});
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              changeHandler("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>

          <input 
          value={userInput.annualInvestment} 
          onChange={(event) =>
            changeHandler("annualInvestment", event.target.value)
          }
          type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" 
          value={userInput.expectedReturn}
          onChange={(event) =>
            changeHandler("expectedReturn", event.target.value)
          } required />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" 
          value={userInput.duration} 
          onChange={(event) =>
            changeHandler("duration", event.target.value)
          }
          required />
        </p>
      </div>
    </section>
  );
}
