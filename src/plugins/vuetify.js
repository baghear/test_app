import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#7F56D9',
                secondary: '#6941C6'
            },
        },
    },

    icons: {
        iconfont: 'mdiSvg',
    },

});
