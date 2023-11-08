import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-780ca-default-rtdb.firebaseio.com',
})

export default journalApi