import * as yup from "yup";

export const signInFormContent = {
    inputs: [
        {
            label: 'Login',
            name: 'login'
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password'
        }
    ]
}

export const signInSchema = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().required()
})

export const signUpFormContent = {
    inputs: [
        {
            label: 'Name',
            name: 'userName'
        },
        {
            label: 'Login',
            name: 'login'
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password'
        },
        {
            label: 'Enter your password again',
            name: 'repeatPassword',
            type: 'password'
        },
        {
            type: 'checkbox',
            name: 'check'
        }
    ]
}

export const signUpSchema = yup.object().shape({
    userName: yup.string().required(),
    login: yup.string().required(),
    password: yup.string().required(),
    repeatPassword: yup.string().required().oneOf([yup.ref("password")], "Password repeated incorrect"),
    check: yup.boolean().oneOf([true], 'error').required('error')
})

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

export const teamFormSchema = yup.object().shape({
    imageUrl: yup.mixed().required(),
    name: yup.string().required(),
    division: yup.string().required(),
    conference: yup.string().required(),
    foundationYear: yup.string().required()
})

export const playerFormContent = {
    inputs: [
        {
            label: 'Name',
            name: 'name'
        },
        {
            label: 'Position',
            name: 'position',
            select: true
        },
        {
            label: 'Team',
            name: 'team',
            select: true
        },
        {
            label: 'Height',
            name: 'height',
            type: 'number'
        },
        {
            label: 'Weight',
            name: 'weight',
            type: 'number'
        },
        {
            label: 'Birthday',
            name: 'birthday',
            type: 'datetime-local'
        },
        {
            label: 'Number',
            name: 'number',
            type: 'number'
        }
    ]
}

export const playerSchema = yup.object().shape({
    avatarUrl: yup.mixed().required(),
    name: yup.string().required(),
    position: yup.mixed().required(),
    team: yup.mixed().required(),
    height: yup.string().required(),
    weight: yup.string().required(),
    birthday: yup.string().required(),
    number: yup.string().required()
})