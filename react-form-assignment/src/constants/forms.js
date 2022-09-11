const forms = [
  {
    personalDetails: [
      {
        label: "First Name",
        type: "text",
        elementId: "firstName",
      },
      {
        label: "Last Name",
        type: "text",
        elementId: "lastName",
      },
      {
        label: "E-mail",
        type: "email",
        elementId: "email",
      },
      {
        label: "Phone No.",
        type: "tel",
        elementId: "phoneno",
      },
    ],
    id: "Personal Details",
  },
  {
    govtIdDetails: [
      {
        label: "Aadhar Number",
        type: "number",
        elementId: "aadharNumber",
      },
      {
        label: "PAN Number",
        type: "text",
        elementId: "panNumber",
      },
    ],
    id: "Governmnet ID Details",
  },
  {
    addressDetails: [
        {
            label: "Flat Number",
            type: "number",
            elementId: "flatNumber",
          },
          {
            label: "Building Name",
            type: "text",
            elementId: "buildingName",
          },
      {
        label: "City",
        type: "text",
        elementId: "city",
      },
      {
        label: "State",
        type: "text",
        elementId: "addressState",
      },
    ],
    id: "Address Details",
  },
];

export default forms;
