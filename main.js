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
    },
})

Vue.component('tabs', {
    template: `
    
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.tabIsActive}">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }} </a>
                    </li>
                </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>

    `,

    data() {
        return { tabs: [] };
    },

    created() {
        this.tabs = this.$children;
        // console.log(this.$children);
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.tabIsActive = (tab.name == selectedTab.name);
            })
        }
    }

});

Vue.component('tab', {

    template: `

    <div v-show="tabIsActive">
        <slot></slot>
    </div>

    `,

    props: {
        name: { required: true },
        selected: { default: false }
    },

    data() {
        return {
            tabIsActive: false
        };
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.tabIsActive = this.selected;
    },
});

new Vue ({
    el:"#tabs-template"
});


Vue.component('bigmodal', {
    template: 
    `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">

            <header class="modal-card-head">
                <p class="modal-card-title">
                    <slot name="bigModalHeader">L'habit de fait pas le moine et le titre ne fait pas le livre</slot>
                </p>
                <button class="delete" aria-label="close" @click="$emit('close-big-modal')"></button>
            </header>

            <section class="modal-card-body">
                <slot name="bigModalBody">
                    This is the default body of the sections
                </slot>
            </section>

            <footer class="modal-card-foot">
                <button class="button is-success" @click="$emit('close-big-modal')">
                    <slot name="bigModalButton1"> Make the magic happen </slot>
                </button>

                <button class="button" @click="$emit('close-big-modal')">
                    <slot name="bigModalButton2">Cancel all magic</slot>
                </button>
            </footer>
        </div>
    </div>
`,
})

new Vue ({
    el:"#big-modal",

    data: {
        showBigModal: false
    },
});

Vue.component ('counter-view', {
    data() {
        return {clickedTimes : 0 };
    }
});

new Vue ({
    el:"#clickcounter",
})