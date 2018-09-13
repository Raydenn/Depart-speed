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
import {Howl} from 'howler'

export default {
  
  data () {
    return { loading: false }
  },
  methods: {
    
simulateProgress () {
      // we set loading state
      this.loading = true
      var sound = new Howl({
      src: ['./marks.mp3']
      });
      sound.play()

      // simulate a delay, like in
      // waiting for an Ajax call
      setTimeout(() => {
        // delay is over, now we reset loading state
      sound = new Howl({
      src: ['./ready.mp3']
      });
      sound.play()
        var attente = Math.random() * (3 - 1) + 1;
        setTimeout(()=> {

      sound = new Howl({
      src: ['./buzzer.mp3']
      });
      sound.play()
          this.loading = false
        }, attente * 1000)
        // DON't forget to reset loading state
        // otherwise the button will keep on
        // being in "loading" state
      }, 3000)
    }
  }
}
</script>

