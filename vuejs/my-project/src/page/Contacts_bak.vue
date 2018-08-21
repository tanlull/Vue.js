<template>
    <div class="ui center aligned segment">
        {{name}}
        <searchpanel></searchpanel>
        <datapager></datapager>
        <div class ="ui center aligned segment">
        <cardlist></cardlist>
        <carditem :item="item"></carditem>
        <carditem :item="item"></carditem>
        </div>
    </div>
</template>
<script>
import searchpanel from '@/components/SearchPanel'
import datapager from '@/components/DataPager'
import cardlist from '@/components/CardList'
import cardItem from '@/components/CardItem'

export default {
    name: 'contacts',
    components: { searchpanel,datapager,cardlist,cardItem},
    data() {
        return {
            item: {
                'firstName': 'Steve',
                'lastName': 'Jobes',
                'mobileNo': '099-999-9999',
                'email': 'steve.j@vuejs.com',
                'facebook': 'https://facebook.com/matt.g',
                'imageUrl': './static/images/steve.jpg'
            }
        }
    }

}
</script>
