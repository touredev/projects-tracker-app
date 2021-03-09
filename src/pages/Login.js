import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  h3 {
    margin-top: 1.2rem;
    font-size: 1.7rem;
    letter-spacing: 1px;
    color: #4f46a5;
  }

  h1 {
    margin: 4rem 0;
    letter-spacing: 1px;
  }
`;

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

const InputField = styled.input`
  height: 46px;
  padding: 0 1rem;
  margin: 0.5rem 0;
  border: 2px solid #dcdcdc;
  border-radius: 4px;
  outline: 0;
  transition: 0.2s;
  margin-top: 20px;
  font-family: "Merriweather", serif;
  font-weight: 500;
  &:focus {
    border-color: #000;
  }
`;

const SubmitButton = styled.input`
  padding: 12px 10px;
  border: 0;
  background: linear-gradient(to right, #de48b5 0%, #0097ff 100%);
  border-radius: 3px;
  margin-top: 2rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: 1px;
  font-family: "Merriweather", serif;
  cursor: pointer;
`;

const Login = ({ authenticate, authToken }) => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    authenticate(data);
    history.push("/");
  };

  console.log(authToken);

  if (authToken !== null && authToken !== "") {
    return <Redirect to={"/"} />;
  }

  return (
    <Wrapper>
      <h1>Projects Tracker App</h1>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <InputField
            type="text"
            placeholder="Username"
            name="username"
            ref={register({ required: true })}
          />
          {errors.username && <span>This field is required</span>}
          <InputField
            type="password"
            placeholder="Password"
            name="password"
            ref={register({ required: true })}
          />
          {errors.password && <span>This field is required</span>}
          <SubmitButton type="submit" value="Login" />
        </FormContainer>
      </form>
    </Wrapper>
  );
};

Login.defaultProps = {
  authToken: "",
};

Login.propTypes = {
  authenticate: PropTypes.func,
  authToken: PropTypes.string,
};

export default Login;
