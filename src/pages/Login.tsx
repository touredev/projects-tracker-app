import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../state/context";
import { LoginUser, User } from "../state/actions";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  width: 300px;
  span {
    color: red;
    font-size: 0.7rem;
    padding: 0.7rem;
  }
`;

const SubmitButton = styled.input`
  padding: 12px 10px;
  border: 0;
  background: linear-gradient(to right, #de48b5 0%, #0097ff 100%);
  border-radius: 3px;
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  letter-spacing: 1px;
  font-family: "Merriweather", serif;
  cursor: pointer;
`;

interface ILoginInputs {
  username: string;
  password: string;
}

const Login = () => {
  const {
    state: { userToken },
    dispatch,
  } = React.useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>();

  // Login
  const login = React.useCallback(
    ({ username, password }) => {
      const authToken =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      const user: User = { username };
      sessionStorage.setItem(
        "react_data",
        JSON.stringify({ user, userToken: authToken })
      );
      dispatch(LoginUser(user, authToken));
    },
    [dispatch]
  );

  const onSubmit: SubmitHandler<ILoginInputs> = (data: ILoginInputs) => {
    login(data);
  }

  if (userToken) {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="container is-fluid is-flex is-flex-direction-column is-align-content-center is-align-items-center">
      <h1 className="title mt-6 mb-6" style={{ letterSpacing: "1px" }}>
        Projects Tracker App
      </h1>
      <h3
        style={{ letterSpacing: "1px", color: "#4f46a5" }}
        className="title is-size-3 has-text-centered has-text-weight-medium mt-4"
      >
        Sign In
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <input
            className="input is-normal mt-3 mb-3 pl-4 pr-4"
            type="text"
            placeholder="Username"
            {...register("username", { required: true })}
          />
          {errors.username && <span>This field is required</span>}
          <input
            className="input is-normal mt-3 mb-3 pl-4 pr-4"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
          <SubmitButton type="submit" value="Login" />
        </FormContainer>
      </form>
    </div>
  );
}
export default Login;
