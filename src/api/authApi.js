import axios from "axios";

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyDvini0T3xtfn9FSUSLlX8vc_VxTwFUyEc'
        //key: 'AIzaSyBhCquFEBH1rgR5IJFo1v1qGiZzHDe2PVI'
    }
})

export default authApi