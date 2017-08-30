<template>
  <div>
    <h2 class="title">Add your workout</h2>
      <form>
        <input v-model="name" type="text" class="input" placeholder="Name it">
        <textarea v-model="description" type="text" class="input" placeholder="Describe it"></textarea>
        <div class="image-upload">
          <label class="title" for="imageFile">Add an image</label>
          <input @change="filesChange($event.target.files)" type="file" multiple class="form-control-file" ref="imageFile">
        </div>
        <div class="row">
          <div class="col">
            <button v-show="!isCreating" @click="onCancel" type="button" class="button button-primary">Cancel</button>
          </div>
          <div class="col">
            <button v-show="!isCreating" @click="onCreateNew" type="submit" class="button button-primary">Apply</button>
          </div>
        </div>
      </form>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'

  export default {
    data () {
      return {
        name: '',
        description: '',
        pictures: [],
        isCreating: false
      }
    },
    methods: {
      ...mapActions(['createNewWorkout', 'uploadImages']),
      filesChange (files) {
        this.pictures = [...files]
      },
      reset () {
        this.name = ''
        this.description = ''
        this.pictures = []
        this.$refs.imageFile.value = null
      },
      onCancel (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.reset()
      },
      onCreateNew (ev) {
        this.isCreating = true
        ev.preventDefault()
        ev.stopPropagation()
        if (this.name.length > 0 && this.description.length > 0 && this.pictures.length > 0) {
          this.uploadImages(this.pictures).then(picUrls => {
            this.createNewWorkout({
              name: this.name,
              description: this.description,
              pictures: picUrls
            }).then(() => {
              this.reset()
              this.isCreating = false
            })
          })
        } else {
          this.isCreating = false
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/styles/main";

  .image-upload {
    margin: 40px 0;
  }
</style>
