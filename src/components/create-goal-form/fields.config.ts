const goalTypeOptions = [
    {
        value: 'boolean',
        label: 'Completed / Not completed',
    },
    {
        value: 'amount',
        label: 'Amount',
    },
];

export const fieldsConfig = [
    {
        name: 'title',
        id: 'title',
        labelText: 'Title',
    },
    {
        type: 'select',
        name: 'type',
        id: 'type',
        labelText: 'What type of goal do you want to select?',
        options: goalTypeOptions,
        defaultValue: 'boolean',
    },
    {
        name: 'description',
        id: 'description',
        labelText: 'Description',
    },
];
