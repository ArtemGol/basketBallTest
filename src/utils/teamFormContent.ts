import * as yup from "yup";

export const teamFormContent = {
    inputs: [
        {
            label: 'Name',
            name: 'name'
        },
        {
            label: 'Division',
            name: 'division'
        },
        {
            label: 'Conference',
            name: 'conference'
        },
        {
            label: 'Year of foundation',
            type: 'number',
            name: 'foundationYear'
        }
    ]
}

export const schema = yup.object().shape({
    imageUrl: yup.mixed().required(),
    name: yup.string().required(),
    division: yup.string().required(),
    conference: yup.string().required(),
    foundationYear: yup.string().required()
})