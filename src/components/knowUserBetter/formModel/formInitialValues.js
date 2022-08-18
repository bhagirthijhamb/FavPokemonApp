import knowUserBetterFormModel from "./knowUserBetterFormModel";
const {
  formField: { firstName, lastName, phoneNumber, address, pokemon },
} = knowUserBetterFormModel;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  [firstName.name]: "",
  [lastName.name]: "",
  [phoneNumber.name]: "",
  [address.name]: "",
  [pokemon.name]: "",
};
