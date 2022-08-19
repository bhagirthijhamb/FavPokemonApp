import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { Formik, Form } from "formik";

import UserDetailsForm from "./forms/UserDetailsForm";
import FavPokemonForm from "./forms/FavPokemonForm";
import SubmitConfirmation from "./SubmitConfirmation";
import SubmitSuccess from "./SubmitSuccess";

import classes from "./KnowUserBetter.module.css";

import validationSchema from "./formModel/validationSchema";
import knowUserBetterFormModel from "./formModel/knowUserBetterFormModel";
import formInitialValues from "./formModel/formInitialValues";

const steps = ["User Details", "Favourite Pokemon", "Confirmation"];
const { formId, formField } = knowUserBetterFormModel;

function renderStepContent(step, setFieldValue) {
  switch (step) {
    case 0:
      return <UserDetailsForm formField={formField} />;
    case 1:
      return (
        <FavPokemonForm formField={formField} setFieldValue={setFieldValue} />
      );
    case 2:
      return <SubmitConfirmation />;
    case 3:
      return <SubmitSuccess />;
    default:
      return <div>Not Found</div>;
  }
}

const KnowUserBetter = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function submitForm(values, actions) {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  function handleSubmit(values, actions) {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <Card>
      <CardContent>
        <Typography component="h1" variant="h4" align="center">
          Know User Better
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <SubmitSuccess />
          ) : (
            <Formik
              initialValues={formInitialValues}
              validationSchema={currentValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue }) => {
                return (
                  <Form id={formId}>
                    {renderStepContent(activeStep, setFieldValue)}

                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        {isLastStep ? "Submit" : "Next"}
                      </Button>
                      {isSubmitting && <CircularProgress size={24} />}
                    </div>
                  </Form>
                );
              }}
            </Formik>
          )}
        </>
      </CardContent>
    </Card>
  );
};

export default KnowUserBetter;
