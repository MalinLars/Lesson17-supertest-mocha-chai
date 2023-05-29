import {randFullName, randEmail} from '@ngneat/falso';

export const createRandomUser = () => {
    const data = {
        email: randEmail({provider: 'jenseneductaion', suffix: 'se'}),
        name: randFullName({gender: 'male'}),
        gender: 'male',
        status: 'active'

    }

    return data;
}

console.log(createRandomUser());