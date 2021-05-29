const app = new Vue({
    el:'#app',
    data:{
        url:"https://flynn.boolean.careers/exercises/api/array/music",
        dischi: "",
    },
    methods:{},
    mounted(){
        axios.get(this.url)
        .then(response =>{
            this.dischi = response.data.response
            console.log(this.dischi);
        })
    }
})