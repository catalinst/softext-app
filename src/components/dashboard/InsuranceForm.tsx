// @ts-nocheck
import { FC, useState } from 'react';
import { Button, Container, DropdownProps } from 'semantic-ui-react';
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { MatchingRuleMessage, RequiredFieldMessage } from '../../meta/types/validations';
import { Form, Input, Select } from 'formik-semantic-ui-react';
import { Formik, FormikHelpers } from 'formik';
import {
  CascoPayloadRequest,
  InsuranceSchema,
  InsuranceType,
  RcaPayloadRequest,
  SelectOptionsTypes
} from '../../meta/interfaces/insurance';
import { createCascoInsurance, createRcaInsurance } from '../../redux/insuranceSlice';

const InsuranceForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const [insuranceType, setInsuranceType] = useState<InsuranceType | ''>();

  const typeOptions: SelectOptionsTypes[] = [
    { key: 'rca', value: 'RCA', text: 'RCA' },
    { key: 'casco', value: 'CASCO', text: 'CASCO' },
  ];

  const toggleDropdown = (data: DropdownProps) => {
    setInsuranceType(data.value as InsuranceType);
  };

  const insuranceSchema = Yup.object().shape({
    lastName: Yup.string()
      .min(3, MatchingRuleMessage.LAST_NAME_MIN)
      .required(RequiredFieldMessage.LAST_NAME),
    firstName: Yup.string()
      .max(10, MatchingRuleMessage.FIRST_NAME_MAX),
    dateOfBirth: Yup.date()
      .min(1900, 'Nice try, haha')
      .nullable()
      .transform((curr, orig) => orig === '' || orig < 1900 ? null : curr)
      .typeError(MatchingRuleMessage.DATE)
      .required(RequiredFieldMessage.DATE_OF_BIRTH),
    type: Yup.string()
      .required(RequiredFieldMessage.TYPE),
    model: Yup.string()
      .when('type', (type, schema) => {
        if (type.includes('RCA'))
          return schema.required(RequiredFieldMessage.MODEL);
      }),
    productionYear: Yup.number()
      .when('type', (type, schema) => {
        if (type.includes('RCA'))
          return schema
            .typeError(MatchingRuleMessage.NUMBER)
            .required(RequiredFieldMessage.PRODUCTION_YEAR);
      }),
    licenseNumber: Yup.string()
      .when('type', (type, schema) => {
        if (type.includes('RCA'))
          return schema.required(RequiredFieldMessage.LICENSE_NR);
      }),
    chassisSeries: Yup.string()
      .when('type', (type, schema) => {
        if (type.includes('CASCO'))
          return schema.required(RequiredFieldMessage.CHASSIS_SERIES);
      }),
    nrKilometers: Yup.number()
      .when('type', (type, schema) => {
        if (type.includes('CASCO'))
          return schema
            .typeError(MatchingRuleMessage.NUMBER)
            .moreThan(-1, 'Nice try, haha')
            .required(RequiredFieldMessage.NR_KM);
      }),
  });

  const initialValues: InsuranceSchema = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    type: '',
    model: '',
    productionYear: '',
    licenseNumber: '',
    chassisSeries: '',
    nrKilometers: '',
  };

  const createInsuranceHandler = (
    {
      firstName,
      lastName,
      dateOfBirth,
      type,
      model,
      productionYear,
      licenseNumber,
      chassisSeries,
      nrKilometers
    }: InsuranceSchema
    , { resetForm }: FormikHelpers<InsuranceSchema>
  ): void => {

    if (insuranceType === 'RCA') {
      const payload: RcaPayloadRequest = {
        firstName,
        lastName,
        type,
        dateOfBirth,
        model,
        productionYear,
        licenseNumber,
      };

      dispatch(createRcaInsurance(payload));
    }

    if (insuranceType === 'CASCO') {
      const payload: CascoPayloadRequest = {
        firstName,
        lastName,
        type,
        dateOfBirth,
        chassisSeries,
        nrKilometers,
      };

      dispatch(createCascoInsurance(payload));
    }

    setInsuranceType('')
    resetForm();
  };

  return (
    <Container fluid>
      <div
        className="underline-pointer orders"
        onClick={() => navigation('/my-profile')}
      >
        See my orders - My profile
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={insuranceSchema}
        onSubmit={createInsuranceHandler}
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
            name="dateOfBirth"
            placeholder="Date of birth: yyyy-mm-dd"
            errorPrompt
          />
          <Select
            name="type"
            options={typeOptions}
            placeholder="Select the type of insurance"
            onChange={(event, data) => toggleDropdown(data)}
            errorPrompt
          />
          {insuranceType === 'RCA' && (
            <>
              <Input
                name="model"
                placeholder="Model"
                errorPrompt
              />
              <Input
                name="productionYear"
                placeholder="Production Year"
                errorPrompt
              />
              <Input
                name="licenseNumber"
                placeholder="License Number"
                errorPrompt
              />
            </>
          )}
          {insuranceType === 'CASCO' && (
            <>
              <Input
                name="chassisSeries"
                placeholder="Chassis Series"
                errorPrompt
              />
              <Input
                name="nrKilometers"
                placeholder="Number of km"
                errorPrompt
              />
            </>
          )}
          <Button fluid primary type="submit">
            Create offer
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default InsuranceForm;

