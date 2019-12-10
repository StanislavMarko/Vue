//
// Vue.component('task-list' , {
//     template: `<div><task v-for="task in tasks">{{ task.task }}</task></div>`,
//
//     data() {
//         return {
//             tasks:[
//                 {task:'go to the store', complete: true},
//                 {task:'go to the school', complete: false},
//                 {task:'go to the farm', complete: true},
//                 {task:'go to the work', complete: false}
//             ]
//
//         };
//     }
// });
// Vue.component('task' ,{
//     template: '<li><slot></slot></li>'
//
//     // data: {
//     //
//     // }
// });
//
//
// new Vue({
//     el:'#root'
// });
// Vue.component('message', {
//     props:['title', 'body'],
//
//     data() {
//         return{
//             isVisible: true
//         };
//     },
//
//     template:`
//     <article class="message" v-show="isVisible">
//         <div class="message-header">
//             {{ title }}
//
//             <button type="button" @click="isVisible = false">x</button>
//         </div>
//         <div class="message-body">
//             {{ body }}
//         </div>
//     </article>
//     `,
//
//     // methods: {
//     //     hideModal() {
//     //         this.isVisible = false;
//     //
//     //     }
//     // }
// });

// Vue.component('modal',{
//     template:`
//     <div class="modal is-active">
//         <div class="modal-background"></div>
//         <div class="modal-content">
//             <div class="box">
//                <slot></slot>
//             </div>
//         </div>
//         <button class="modal-close is-large" @click="$emit('close')"></button>
//     </div>
//     `
// });
//
Vue.component('tabs', {
    template:`
<div>
    <div class="tabs">
          <ul>
            <li v-for="tab in tabs" :class="{'is-active': tab.isActive}"><a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a></li>
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
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab',{
    template:`
    <div v-show="isActive"><slot></slot></div>
    `,

    props:{
        name:{ required:true },
        selected: { default:  false}
    },

    data() {
        return {
            isActive: false
        }

    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    }
});

new Vue({
    el:'#root',


});
