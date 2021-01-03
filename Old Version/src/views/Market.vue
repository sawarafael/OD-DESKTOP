<template>

<div>
    <div>        
        <GeneralNavbar></GeneralNavbar>
        <BuyerHeader></BuyerHeader>
    </div>
    <div>
    
    </div>
    
</div>

</template>

<script>
import GeneralNavbar from '../components/shared/GeneralNavbar.vue'
import BuyerHeader from '../components/market/BuyerHeader.vue'
export default {
  components: { GeneralNavbar, BuyerHeader },

  data () {
    return {
      splitterModel: 50,
      selected: 'Food',
      simple: [
        {
          label: 'Relax Hotel',
          children: [
            {
              label: 'Food',
              icon: 'restaurant_menu'
            },
            {
              label: 'Room service',
              icon: 'room_service'
            },
            {
              label: 'Room view',
              icon: 'photo'
            }
          ]
        }
      ]
    }
  }
    
}
</script>