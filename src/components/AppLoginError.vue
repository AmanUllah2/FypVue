<template>
    <div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="indigo">
                <v-toolbar-title>Login Error</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  
                  
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <h3> Email or Password incorrect :( </h3>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <router-link to="./">
                <v-btn dark color="indigo">Try Again?</v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>

