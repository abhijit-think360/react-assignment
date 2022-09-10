const forms = [
    {
        personalDetails: [
            {
                label: "First Name",
                type : "text",
                elementId: 'firstName'
            },
            {
                label: 'Last Name',
                type : 'text',
                elementId: 'lastName'
            },
            {
                label: 'E-mail',
                type : 'text',
                elementId: 'email'
            },
            {
                label: 'Phone No.',
                type : 'text',
                elementId: 'phoneno'
            }
        ],
        id: 'Personal Details'
    },
    {
        govtIdDetails: [
            {
                label: "Aadhar Number",
                type : "text",
                elementId: 'aadharNumber'
            },
            {
                label: 'PAN Number',
                type : 'text',
                elementId: 'panNumber'
            },
            {
                label: 'Passport Number',
                type : 'text',
                elementId: 'passportNumber'
            },
           
        ],
        id: 'Governmnet ID Details'
    },
    {
        addressDetails: [
            {
                label: "City",
                type : "text",
                elementId: 'city'
            },
            {
                label: 'State',
                type : 'text',
                elementId: 'addressState'
            },
            
           
        ],
        id: 'Address Details'
    },
]

export default forms;