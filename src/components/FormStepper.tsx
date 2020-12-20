import React, { useState } from 'react'
import { Stepper, Step, StepLabel } from '@material-ui/core'
import PersonalData from './PersonalDetails';


function getSteps(){
    return ["Personal Details", "Contact Details", "Address Details"];
}

function getStepContent(stepIndex: number, handleNext:() => void){
    switch(stepIndex){
        case 0:
            return <PersonalData handleNext={handleNext} />
        case 1:
            return <h2>Case 2</h2>
        case 2:
            return <h2>Case 3</h2>
        default:
            return "Unknown StepIndex"
    }
}

export default function FormStepper(){
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    return (
        <div >
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}