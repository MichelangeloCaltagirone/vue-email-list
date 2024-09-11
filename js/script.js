
const {createApp} = Vue;

createApp({

    data: () => {
        return {
            apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
            email: ''
        }
    },

    methods: {
        getRandomEmail(){
            axios.get(this.apiUrl).then(function(response) {
            console.log(response.data.response),
            this.email = response.data.response
            })
        }
    },
    mounted(){
        this.getRandomEmail();
        console.log(this.email, "è l'email in dataVue")
    }
}).mount('#emailNodeList')


/*
axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then(function(response) {
    console.log(response.data.response)
})
*/