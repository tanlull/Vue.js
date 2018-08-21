import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contact: {},
        contacts: [{
            'firstName': 'Tanya',
            'lastName': 'Sattaya-aphitan',
            'mobileNo': '0962536559',
            'email': 'tanyas@tot.co.th',
            'facebook': 'https://facebook.com/tanlull',
            'imageUrl': './static/images/tan.jpg'
        },
        {
            'firstName': 'Pakhun',
            'lastName': 'Sattaya-aphitan',
            'mobileNo': '0962536559',
            'email': 'tanyas@tot.co.th',
            'facebook': 'https://facebook.com/tanlull',
            'imageUrl': './static/images/bingo.jpg'
        },

        {
            'firstName': 'Family',
            'lastName': 'Sattaya-aphitan',
            'mobileNo': '0962536559',
            'email': 'tanyas@tot.co.th',
            'facebook': 'https://facebook.com/tanlull',
            'imageUrl': './static/images/family.jpg'
        }

        ]
    },
    getters: {
        contacts: state => state.contacts,
         contact: state => state.contact  // add
    },
    mutations: {
        ADD_CONTACT(state, contact) {
            state.contacts.push(contact)
        },
        UPDATE_CONTACT(state, contact) {
            let contacts = state.contacts.filter((contact) => {
                return contact.id === contact.id
            })
            state[state.contacts.indexOf(contacts[0])] = contact
        },
        REMOVE_CONTACT(state, contact) {
            state.contacts.splice(state.contacts.indexOf(contact), 1)
        }
    },
    actions: {
        addContact({ commit }, contact) {
            commit('ADD_CONTACT', contact)
        },
        updateContact({ commit }, contact) {
            commit('UPDATE_CONTACT', contact)
        },
        removeContact({ commit }, contact) {
            commit('REMOVE_CONTACT', contact)
        }
    }

})
