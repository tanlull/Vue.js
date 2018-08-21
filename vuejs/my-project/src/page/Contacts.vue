<template>
    <div class="ui center aligned segment">
        {{name}}
        <searchpanel @onClickedAdd="openContactEditor('Add')"></searchpanel>
        <datapager></datapager>
        <div class="ui center aligned segment">
            <cardlist :items="items" @onEditClicked="onEditClicked" @onRemoveClicked="onRemoveClicked"></cardlist>
        </div>
        <contactEditor modalId="contactModal" :contact="contact" :mode="mode" @onSaveClicked="validateContact"></contactEditor>
    
    </div>
</template>
<script>
import searchpanel from '@/components/SearchPanel'
import datapager from '@/components/DataPager'
import cardlist from '@/components/CardList'
import cardItem from '@/components/CardItem'
import contactsStore from '@/store/Contacts'
import contactEditor from '@/components/ContactEditor'
import $ from 'jquery'
import contactAPI from '@/api/Contacts'

export default {
    name: 'contacts',
    components: { searchpanel, datapager, cardlist, cardItem, contactEditor, contactAPI },
    props: ['items'],
    mounted() {
        this.items = contactsStore.getters.contacts
        //console.log(contactsStore.getters.contacts)
    },
    methods: {
        onClickedAdd() {
            //alert(mode)
            $('#contactModal').modal('show')
        },
        openContactEditor(mode) {

            this.mode = mode
            switch (mode) {
                case 'Add':
                    this.item = {}
                    $('#contactId').attr('disabled', false)
                    break
                case 'Edit':
                    $('#contactId').attr('disabled', true)
                    break
            }
            $('.ui.error.message').transition('hide')
            $('.ui.modal').modal('show')
        },
        addContact() {
            contactAPI.add(this.item).then(()=>
                
            )
            /*
            contactsStore.dispatch('addContact', this.contact)
                .then(() => {
                    this.contacts = contactsStore.getters.contacts
                })
                */

        },
        editContact() {
            contactsStore.dispatch('updateContact', this.contact)
                .then(() => {
                    this.contacts = contactsStore.getters.contacts
                })
        },
        saveContact(mode) {
            switch (mode) {
                case 'Add':
                    this.addContact()
                    break
                case 'Edit':
                    this.editContact()
                    break
            }
        },
        onEditClicked(item) {
            this.contact = item
            this.openContactEditor('Edit')
        },
        onRemoveClicked(item) {
            console.log('remove clicked')
            contactsStore.dispatch('removeContact', item)
                .then(() => {
                    this.contacts = contactsStore.getters.contacts
                })
        },
        validateContact() {
            $('.ui.form').form(this.validateRule)
        }

    },
    data() {
        return {
            item: [],
            mode: "Add",
            validateRule: {
                fields: {
                    contactId: {
                        identifier: 'contactId',
                        rules: [{
                            type: 'empty',
                            prompt: 'Please enter Contact ID!'
                        }]
                    },
                    firstName: {
                        identifier: 'firstName',
                        rules: [{
                            type: 'empty',
                            prompt: 'Please enter First Name!'
                        }]
                    },
                    lastName: {
                        identifier: 'lastName',
                        rules: [{
                            type: 'empty',
                            prompt: 'Please enter Last Name!'
                        }]
                    },
                    mobileNo: {
                        identifier: 'mobileNo',
                        rules: [{
                            type: 'empty',
                            prompt: 'Please enter Mobile No!'
                        }]
                    }
                },
                onFailure: (formErrors, fields) => {
                    $('.ui.error.message').transition('show')
                },
                onSuccess: () => {
                    this.saveContact(this.mode)
                    $('.ui.modal').modal('hide')
                }
            }

        }
    }

}
</script>
