import React from "react";
import useForm from "../customHooks/useForm";
import validateForm from "../customHooks/validateForm";
import { Button, TextField } from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import CheckIcon from "@material-ui/icons/Check";
import { Constants } from "../constants/constants";
import "./styles.scss";

const Form = () => {
  const {
    inputs,
    handleInputChange,
    handleSubmit,
    errors,
    isSubmitClicked
  } = useForm({ password: "", confirmPassword: "" }, validateForm);
  console.log(isSubmitClicked, errors, "::::::::");
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="password-textfield">
          <div>
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              name="password"
              onChange={handleInputChange}
              value={inputs.password}
              variant="outlined"
              required
            />
          </div>
          <div>
            <TextField
              id="standard-confirm-password-input"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              onChange={handleInputChange}
              value={inputs.confirmPassword}
              variant="outlined"
              required
            />
          </div>
        </div>

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={handleSubmit}
          className="submit-button"
        >
          {"Submit"}
        </Button>

        <div className="display-error">
          <div>
            {errors.password &&
              errors.password.map((message, index) => {
                return (
                  <div className="error-message">
                    <CloseOutlinedIcon color="error" />
                    <span key={index}>{message}</span>
                  </div>
                );
              })}
          </div>
          <div>
            {isSubmitClicked &&
              (errors.confirmPassword ? (
                <div className="error-message">
                  <CheckIcon style={{ color: "green" }} />
                  <span>{Constants?.passwordMatched}</span>
                </div>
              ) : (
                <div className="error-message">
                  <CloseOutlinedIcon color="error" />
                  <span>{Constants?.passwordFailedToMatch}</span>
                </div>
              ))}
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
