// window.Event = new Vue();
//
//
// Vue.component('coupon',{
//     template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',
//
//     methods: {
//         onCouponApplied(){
//             Event.$emit('applied');
//
//
//         }
//     }
//
// });
// Vue.component('modal', {
//     template:`
// <div class="modal is-active">
//   <div class="modal-background"></div>
//   <div class="modal-card">
//     <header class="modal-card-head">
//         <p class="modal-card-title">
//
//       <slot name="header"></slot>
//         </p>
//       <button class="delete" aria-label="close"></button>
//     </header>
//     <section class="modal-card-body">
//       <slot></slot>
//     </section>
//     <footer class="modal-card-foot">
//       <slot name="footer"></slot>
//     </footer>
//   </div>
// </div>
//     `
// })
Vue.component('progress-view', {

    data() {
        return { completionRate: 1  };
    }
});

new Vue({
    el:'#root',
    // //
    // // data: {
    // //     couponApplied: false
    // // },
    // //
    // // created() {
    // //     Event.$on('applied', ()=> alert('Hennlda') )
    // }
});

