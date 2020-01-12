const { reactive } = Vue
var App = {
  template: `
    <div class="container">
          <input v-model="state.value" />
          <p>{{state.value}}</p>
    </div>`,
  setup() {
    const state = reactive({ value: 'Hello World!!!' })
    return { state }
  }
}
Vue.createApp().mount(App, '#app')
