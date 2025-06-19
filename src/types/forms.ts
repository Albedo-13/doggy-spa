export type BookAppointmentFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  timeslots: string[];
  calendar: Date;
  comment: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
};

export type ContactSpaFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comment: string;
};

export type SignUpFormInputs = {
  email: string;
};

export type InfoDogFormInputs = {
  searchDogName: string;
};
