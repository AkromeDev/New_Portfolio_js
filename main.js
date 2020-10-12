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