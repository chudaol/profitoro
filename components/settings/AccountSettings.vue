<template>
  <div>
    <h2 class="title">Account settings</h2>
    <form>
      <div class="form-group">
        <figure class="figure">
          <img @click="onClick" class="img-thumbnail" :src="photoURL" alt="Avatar">
          <figcaption class="figure-caption" @click="onClick">Change profile picture</figcaption>
          <input class="invisible" @change="onChangeProfilePicture($event.target.files)" type="file" ref="imageFile">
        </figure>
      </div>
      <input class="input rounded-0" @change="onChangeUserName" v-model="displayName" type="text" placeholder="Change your username">
      <input class="input rounded-0" @change="onChangeUserEmail" v-model="email" type="text" placeholder="Change your username">
    </form>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {
        displayName: '',
        email: '',
        photoURL: require('~/assets/images/tomato.png'),
        showChangeProfilePicInput: false
      }
    },
    computed: {
      ...mapGetters({user: 'getUser'})
    },
    created () {
      this.displayName = this.user.displayName
      this.email = this.user.email
      this.photoURL = this.user.photoURL ? this.user.photoURL : this.photoURL
    },
    methods: {
      ...mapActions(['updateUserName', 'updateUserEmail', 'updatePhotoURL', 'uploadImages']),
      onChangeUserName () {
        if (this.displayName.length > 0) {
          this.updateUserName(this.displayName)
        }
      },
      onChangeUserEmail () {
        if (this.email.length > 0) {
          this.updateUserEmail(this.email)
        }
      },
      onChangeProfilePicture (files) {
        this.uploadImages([...files]).then(picUrls => {
          this.photoURL = picUrls[0]
          this.updatePhotoURL(this.photoURL)
          this.$refs.imageFile.value = null
        })
      },
      onClick () {
        let clickEvent = new MouseEvent('click', {
          'view': window,
          'bubbles': true,
          'cancelable': true
        })
        this.$refs.imageFile.dispatchEvent(clickEvent)
      }
    }
  }
</script>
<style scoped lang="scss">
  img {
    margin-top: 20px;
    max-width: 200px;
    cursor: pointer;
  }
  figcaption {
    cursor: pointer;
  }
</style>
