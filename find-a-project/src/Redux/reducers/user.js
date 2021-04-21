const initial = {

}

const reducer = (user = initial, action) => {
    switch (action.type) {
        case 'SIGN_UP_A_USER':
            return user;
        default:
            break;
    }
};