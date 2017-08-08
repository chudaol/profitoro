<template>
  <div>
    <header-component></header-component>
    <div class="min-full-height container">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-lg-4">
          <account-settings></account-settings>
        </div>
        <div class="col-sm-12 col-lg-8">
          <pomodoro-timer-settings></pomodoro-timer-settings>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'
  import PomodoroTimerSettings from '~/components/settings/PomodoroTimerSettings'
  import AccountSettings from '~/components/settings/AccountSettings'

  export default {
    middleware: 'authenticated',
    components: {
      HeaderComponent,
      FooterComponent,
      PomodoroTimerSettings,
      AccountSettings
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/styles/main";

  .container {
    padding-top: 40px;
    padding-bottom: 40px;
  }
</style>
