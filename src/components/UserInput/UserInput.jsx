import { useState } from "react"}

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput =>{
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            };
        });
    }
    
    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type='number'
                     required 
                     value={userInput.initialInvestment}
                     onChange={(event) =>handleChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                <label>Anuual Investment</label>
                    <input type='number' required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type='number' required/>
                </p>
                <p>
                <label>Duration</label>
                    <input type='number' required/>
                </p>
            </div>
        </section>
    )
}