<template>
    <div>
   <app-toolbar></app-toolbar>
   <v-container>
        <v-form action="http://localhost:3800/users/register" method = "POST">
        <v-text-field
        label = "Name"
        v-model= "name"
        name="name"
        >
        </v-text-field>
        <v-text-field
        label="E-mail"
        v-model= "email"
        type = "email"
        :rules= "emailRules"
        name="email"
        required
        ></v-text-field>
        <v-text-field
        label = "Password"
        v-model= "password"
        name = "password"
        type="password"
        required
        >
        </v-text-field>
        <v-btn color="indigo" type="submit" dark>Register</v-btn>
        </v-form>
    </v-container>
    <app-footer></app-footer>
    </div>
</template>

<script>
import AppFooter from './AppFooter'
import AppToolbar from './AppToolbar'


export default {
    components: {AppFooter, AppToolbar},
    data () {
      return {
        valid: false,
        name: 'Default',
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4'
        ],
        checkbox: true
      }
    },
    methods: {
      submit () {
        this.$refs.form.validate()
      },
      clear () {
        this.$refs.form.reset()
      }
    },
    methods: {
       addUser() {
             let uri = 'http://localhost:3500/users/register';
            this.axios.post(uri, this.users).then((response) => {
               console.log(response);
            });
       }
    }
    
}
</script>