<template>
    <div>
        <app-toolbar></app-toolbar>
        <app-footer></app-footer>
        <div class="sett">
        <v-btn class="block" block color="secondary" dark>Capture PCAP</v-btn>
        </div>
        <div>
        <router-link to="/extracturl">
        <v-btn class="size" color="grey" dark>Extract URL</v-btn>
        </router-link>
        <router-link to="classify">
        <v-btn class="size" color="pink" dark>Classify Data</v-btn>
        </router-link>
        </div>
        <div>
        <router-link to="/CSVsearch">
        <v-btn class="size" color="grey" dark>Search by IP</v-btn>
        </router-link>
        <router-link to="/visualize">
        <v-btn class="size" color="pink" dark>Visualize</v-btn>
        </router-link>
        </div>
        <div class="sett1">
        <router-link to="/most">
        <v-btn class="block" block color="secondary" dark>Most Visited</v-btn>
        </router-link>
        </div>
    </div>
</template>

<script>
import AppFooter from './AppFooter'
import AppToolbar from './AppToolbar'

export default {
    components: {AppFooter, AppToolbar}
}
</script>


<style>
.sett {
  margin-top: 70px;
  margin-left: 450px;
  margin-right: 450px;
  
}

.sett1 {
  margin-top: 5px;
  margin-left: 450px;
  margin-right: 450px;
  margin-bottom: 25px;
  
}

.size{
    width: 460px;
    height: 150px;
    font-size: 20px;
}
.block{
    height: 150px;
    font-size: 40px;
}

</style>
