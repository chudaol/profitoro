<template>
  <div class="row justify-content-center">
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="container">
        <h2>Account settings</h2>
        <figure class="figure">
          <img :src="settings.profile_picture" class="figure-img img-fluid rounded" alt="Profile Pic">
          <figcaption class="figure-caption">Change profile picture</figcaption>
        </figure>
        <form>
          <div class="form-group">
            <label for="username">Change your username</label>
            <input type="username" class="form-control" id="username" placeholder="Change your username">
          </div>
          <div class="form-group">
            <label for="email">Change your email</label>
            <input type="email" class="form-control" id="email" placeholder="Change your email">
          </div>
        </form>
        <h2>Change your password</h2>
        <form>
          <div class="form-group">
            <label for="oldpassword">Old password</label>
            <input type="password" class="form-control" id="oldpassword">
          </div>
          <div class="form-group">
            <label for="newpassword1">New password</label>
            <input type="password" class="form-control" id="newpassword1">
          </div>
          <div class="form-group">
            <label for="newpassword2">Repeat new password</label>
            <input type="password" class="form-control" id="newpassword2">
          </div>
        </form>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-8">
      <h2 class="mb-5">Set your pomodoro timer</h2>
      <div class="mt-5 row justify-content-center align-items-center">
        <div class="col-md-5 col-sm-10">
          <set-timer value="25"></set-timer>
          <div class="figure-caption">Pomodoro</div>
        </div>
        <div class="col-md-4 col-sm-10">
          <set-timer value="10"></set-timer>
          <div class="figure-caption">Long break</div>
        </div>
        <div class="col-md-3 col-sm-10">
          <set-timer value="5"></set-timer>
          <div class="figure-caption">Short break</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import SvgCircleSector from './timer/SvgCircleSector'
  import SetTimer from './timer/SetTimer'
  export default {
    computed: {
      ...mapGetters({
        settings: 'getSettings'
      })
    },
    components: {
      SvgCircleSector,
      SetTimer
    }
  }
</script>
<style scoped lang="sass">
  .figure-caption {
    text-align: center;
  }
</style>
