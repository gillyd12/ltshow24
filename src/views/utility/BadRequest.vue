<template>
  <div class="badRequest d-flex align-items-center">
    <div class="container pt-8">
      <div class="row">
        <div class="col-2"></div>
        <div class="jumbotron col-8">
          <div class="jumbotron-content-wrapper">
            <span class="text-center d-flex justify-content-center">
              <h3><strong>Oh no!</strong>&nbsp;It looks like you may have taken a wrong turn.</h3>
            </span>
            <div class="d-flex justify-content-center pt-3">
              <h5>Let's see if we can get you back on track!</h5>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-lg btn-primary" @click="goBack()">Go Back</button>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'BadRequest',

  setup() {
    const router = useRouter()
    async function goBack() {
      router.go(-1)
    }

    return { goBack }
  }
}
</script>

<style scoped></style>
