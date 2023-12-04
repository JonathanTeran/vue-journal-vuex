import { createStore } from 'vuex'

import auth from '@/modules/auth/store'
import journal from '@/modules/daybook/store/journal'

const store = createStore({
    //MODULES
    modules: {
        auth,
        journal
    }

})

export default store