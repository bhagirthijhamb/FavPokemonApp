import * as Yup from "yup";
import knowUserBetterFormModel from "./knowUserBetterFormModel";
const {
  formField: { firstName, lastName, phoneNumber, zipCode, address, pokemon },
} = knowUserBetterFormModel;

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [phoneNumber.name]: Yup.number().required(
      `${phoneNumber.requiredErrorMsg}`
    ),
    [zipCode.name]: Yup.string().required(`${zipCode.requiredErrorMsg}`),
    [address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [pokemon.name]: Yup.string().required(`${pokemon.requiredErrorMsg}`),
  }),
];
