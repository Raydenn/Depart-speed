<template>
  <q-page class="flex flex-center">
    <q-btn :loading="loading" @click="simulateProgress" round label="Button Label" size="10vh" icon="fas fa-stopwatch" style="color:#027BE3">
          <span slot="loading">
            <q-spinner-gears class="on-left"/>
          </span>
    </q-btn>
  </q-page>
</template>

<style>
</style>

<script>

export default {
  
  data () {
    return { loading: false }
  },
  methods: {
    
simulateProgress () {
      // we set loading state
      this.loading = true
      var AudioMark = new Audio("./marks.mp3")
      AudioMark.play()

      // simulate a delay, like in
      // waiting for an Ajax call
      setTimeout(() => {
        // delay is over, now we reset loading state
        var AudioReady = new Audio("./ready.mp3")
        AudioReady.play()
        setTimeout(()=> {

          var AudioGo = new Audio("./buzzer.mp3")
          AudioGo.play()
          this.loading = false
        }, 3000)
        // DON't forget to reset loading state
        // otherwise the button will keep on
        // being in "loading" state
      }, 3000)
    }
  }
}
</script>

