new Vue ({
    el:'#app',
    data: {
        message:'Hello World'
    }
})

var appli = new Vue ({
    el:'#taksList',
    data: {
        newTask:'',
        tasks:['Do the Groceries', 'Water the plants', 'Enjoy the afternoon spray', 'Be double great at the morning']
    },

    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask='';
        }
    },
});

new Vue ({
    el: "#giffy",

    data: {
        working: false,
        sleeping: false
    },

    methods: {
        toggleClass() {
            if (working = true) {
                this.working = false
            } else if (sleeping = true) {
                this.sleeping = false
            }
        }
    }
})

Vue.component("modal", {
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <p>
                        <slot></slot>
                    </p>
                </div>
            </div>
        <button class="modal-close" @click="$emit('close-modal')" ></button>
    </div>
    `
});

new Vue({
    el:"#modal",
    data: {
        showMessageModal: false
    }
})