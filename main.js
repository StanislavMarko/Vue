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
Vue.component('message', {
    props:['title', 'body'],

    data() {
        return{
            isVisible: true
        };
    },

    template:`
    <article class="message" v-show="isVisible">
        <div class="message-header">
            {{ title }}
            
            <button type="button" @click="hideModal">x</button>
        </div>
        <div class="message-body">
            {{ body }}
        </div>
    </article>
    `,

    methods: {
        hideModal() {
            this.isVisible = false;

        }
    }
});

new Vue({
    el:'#root'
});