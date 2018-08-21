<template>
    <div class="ui four stackable cards">
        <div>{{msg}}</div>
        <carditem v-for="a in items" :item="a" :key="a.id"> </carditem>
    </div>
</template>

<script>
import carditem from '@/components/CardItem'

export default {
    name: 'cardlist',
    components: { carditem },
    props: ['items'],
    data() {
        return {
            msg: 'Welcome to Card List',
            methods: {
                onEditClicked(item) {
                    this.$emit('onEditClicked', item)
                },
                onRemoveClicked(item) {
                    this.$emit('onRemoveClicked', item)
                }
            },

            items: [
                {
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
        }
    }
}
</script>
