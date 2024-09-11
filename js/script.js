
const {createApp} = Vue;

createApp({

    data() {
        return {
            apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
            mails:[]
        }
    },

    methods: {
        getRandomEmail(num){
            for(let i = 0; i < num; i++)
            axios.get(this.apiUrl).then(response => {
            this.mails.push(response.data.response)
            })
        }
    },
    mounted(){
        this.getRandomEmail(10)
      
    }
}).mount('#emailNodeList')


/*
axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then(function(response) {
    console.log(response.data.response)
})
*/