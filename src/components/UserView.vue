<template>
    <div>
    <app-toolbar></app-toolbar>
    <v-container>
        <h1>Users</h1>
        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
            </tr>
            </thead>
            <tbody>
            <form action="http://localhost:3800/users/users" method="Post">
               <!-- <tr v-for="user in users" :key="user._id">
                    <td>{{ users._id }}</td>
                    <td>{{ users.name }}</td>
                    <td>{{ users.email }}</td>
                    <td></td>
                </tr> -->
                <tr>
                    <td>  </td>
                </tr>
            </form>
            </tbody>
        </table>
    </v-container>
    <app-footer></app-footer>
    </div>
</template>

// <script>
// import AppFooter from './AppFooter'
// import AppToolbar from './AppToolbar'

//     export default {
//         components: {AppFooter, AppToolbar},
//         data(){
//             return{
//                 users: []
//             }
//         },

//         created: function()
//         {
//             this.fetchItems();
//         },

//         methods: {
//             fetchItems()
//             {
//               let uri = 'http://localhost:3800/users/users';
//               this.axios.get(uri).then((response) => {
//                   console.log(response.data.data);
//                   this.users = response.data;
//               });
//             }
//         }
//     }
 </script>