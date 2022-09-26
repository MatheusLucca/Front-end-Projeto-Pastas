import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#9852B4',
                secondary: '#542467',
                tertiary: '#B5B5B5',
                quaternary: '#FF7939'
            }
        }
    }
})
