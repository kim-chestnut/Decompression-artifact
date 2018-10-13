new Vue({
    el : "#app",
    data : {
        styles : {
            width :200,
        }
    },
    methods : {
        knock(){
            if(parseInt(this.styles.width) > 0) {
                this.styles.width = parseInt(this.styles.width)  - 10;
            }
        },
        reset(){
            this.styles.width = 200;
        }
    },
    computed : {
        sty(){
            this.styles.width = this.styles.width + "px";
            return this.styles;
        }
    },
    filters : {
        nt(value){
            return value == 0 ? false : true;
        }
    }
})
