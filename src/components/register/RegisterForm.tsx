import { FC, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input } from 'formik-semantic-ui-react';
import { toast } from 'react-toastify';
import {
  NAME_REG_EXP,
  EMAIL_REG_EXP,
  RequiredFieldMessage,
  MatchingRuleMessage,
  PASSWORD_REG_EXP
} from '../../meta/types/validations';
import { ToastsMessages } from '../../meta/types/toasts';
import api from '../../services/api';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { RegisterPayloadRequest, RegisterSchema } from '../../meta/interfaces/user';

const RegisterForm: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();

  const registerUserSchema: Yup.ObjectSchema<RegisterSchema> = Yup.object().shape({
    firstName: Yup.string()
      .matches(NAME_REG_EXP, MatchingRuleMessage.CHARACTER)
      .required(RequiredFieldMessage.FIRST_NAME),
    lastName: Yup.string()
      .matches(NAME_REG_EXP, MatchingRuleMessage.CHARACTER)
      .required(RequiredFieldMessage.LAST_NAME),
    email: Yup.string()
      .matches(EMAIL_REG_EXP, MatchingRuleMessage.EMAIL)
      .required(RequiredFieldMessage.EMAIL),
    password: Yup.string()
      .matches(PASSWORD_REG_EXP, MatchingRuleMessage.PASSWORD)
      .required(RequiredFieldMessage.PASSWORD),
  });

  const initialValues: RegisterSchema = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const createUserHandle = ({ firstName, lastName, email, password }: RegisterSchema): void => {

    const payload: RegisterPayloadRequest = {
      firstName, lastName, email, password
    };

    api
      .createUser(payload)
      .then(() => {
        toast.success(ToastsMessages.ACC_CREATED);
        navigate('/login');
      });
  };

  return (
    <div className="page-container">
      <Formik
        initialValues={initialValues}
        validationSchema={registerUserSchema}
        onSubmit={createUserHandle}
      >
        <Form size="large">
          <Input
            name="firstName"
            placeholder="First name"
            errorPrompt
          />
          <Input
            name="lastName"
            placeholder="Last name"
            errorPrompt
          />
          <Input
            name="email"
            placeholder="Email"
            errorPrompt
          />
          <Input
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            errorPrompt
            icon={{
              name: showPassword ? 'eye slash' : 'eye',
              link: true,
              onClick: () => setShowPassword(prevState => !prevState),
            }}
          />
          <Button fluid primary type="submit">
            Create account
          </Button>
          <div className="account-info">
            Do you an account? <strong onClick={() => navigate('/login')}>Login here</strong>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
