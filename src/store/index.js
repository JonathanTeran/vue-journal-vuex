import { createStore } from 'vuex'

import journal from '@/modules/daybook/store/journal'

const store = createStore({
    //MODULES
    modules: {
        journal
    }

})

export default store