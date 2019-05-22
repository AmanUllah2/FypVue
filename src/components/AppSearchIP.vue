<template>
  <div class="text-xs-center">
    <app-toolbar></app-toolbar>
    <div class="fix">
    <h1 style="color:blue;" padding-top:135px>URL Extractor from PCAP files</h1>
  <form>
    <div class="bar">
        <v-flex xs12 sm6>
          <v-text-field
            label="Search"
            single-line
            solo
          ></v-text-field>
        </v-flex>
    </div>
    <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
        <button v-on:click="submitFile()">Submit</button>

    <v-btn type="submit" color="green" dark>Search</v-btn>
  </form> 
        
<input type="submit" value="Upload Image" name="submit">

  <div>
  </div>

    <app-footer></app-footer>
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
        dialog: false,
        file: ''

      }
    },
    methods: {
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      },
      submitFile(){
        /*
                Initialize the form data
            */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);

        /*
          Make the request to the POST /single-file URL
        */
            axios.post( 'http://localhost:3800/users/CSVsearch',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },

    }
  }
</script>

<style>
.fix{
  margin-top: 120px;
}

.bar{
  margin-left: 700px;
  margin-right: 270px;
  margin-top: 20px;
}

</style>
