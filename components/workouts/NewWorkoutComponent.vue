<template>
  <div>
    <h2 class="title">Add your workout</h2>
      <form>
        <input type="text" class="input" placeholder="Name it">
        <textarea type="text" class="input" placeholder="Describe it"></textarea>
        <div class="image-upload">
          <label class="title" for="imageFile">Add an image</label>
          <input type="file" multiple class="form-control-file" id="imageFile">
        </div>
        <div class="row">
          <div class="col">
            <button type="button" class="button button-primary">Cancel</button>
          </div>
          <div class="col">
            <button @click="onCreateNew" type="submit" class="button button-primary">Apply</button>
          </div>
        </div>
      </form>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'

  export default {
    methods: {
      ...mapActions(['createNewWorkout']),
      onCreateNew (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.createNewWorkout({name: 'test', description: 'gavno'})
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
