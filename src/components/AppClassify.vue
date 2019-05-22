<template>
  <div class="text-xs-center">
    <app-toolbar></app-toolbar>
    <div class="vis">
    <h1 style="color:indigo;" padding-top:135px>Classify Data</h1>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
          class="button2"
        >
          How to use me
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Quick Tip
        </v-card-title>

        <v-card-text>
        Store file you want to visualize with name "visualizeme" in /Desktop/DMS/visualize.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            I Got It
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <app-footer></app-footer>
  </div>
  <div>
      <form action="http://localhost:3800/testcase">
      <v-btn type="submit" class="button2" color="green lighten-1" dark>Training Data Visualize</v-btn>
      </form>
      <form action="http://localhost:3800/dataforml">
      <v-btn type="submit" class="button2" color="green lighten-1" dark>Extraction of Machine Learning Data</v-btn>
      </form>
      <form action="http://localhost:3800/testvis">
      <v-btn type="submit" class="button2" color="green lighten-1" dark>Visualize Test Data</v-btn>
      </form>
      <form action="http://localhost:3800/cattourl">
      <v-btn type="submit" class="button2" color="green lighten-1" dark>Categorize URL Data</v-btn>
      </form>
      <form action="http://localhost:3800/catvis">
      <v-btn type="submit" class="button2" color="green lighten-1" dark>Visualize Categorize Data</v-btn>
      </form>

  </div>
</div>
</template>

<script>
import AppFooter from './AppFooter'
import AppToolbar from './AppToolbar'

  export default {
    components: {AppFooter, AppToolbar},
    data () {
      return {
        dialog: false
      }
    }
  }
</script>

<style>
.button2 {
    width: 20%;
    height: 60px;
}

.vis{
  margin-top: 120px;
}
</style>
