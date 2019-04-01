<template>
  <div>
    <div><router-link to="/" class="btn btn-sm btn-secondary">Back</router-link></div>
    <table class="table">
      <tr>
        <td>Name</td>
        <td>{{ call.name }}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{{ call.email }}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{{ call.callTime | date }}</td>
      </tr>
      <tr>
        <td>Problem</td>
        <td>{{ call.problem }}</td>
      </tr>
      <tr>
        <td colspan="2"><button class="btn btn-success" @click="answer(call)">Marked Answered</button></td>
      </tr>
    </table>
  </div>
</template>
<script>
  import { mapActions } from "vuex";
  import store from "../store";
  export default {
    store,
    props: ["call"],
    methods: {
      ...mapActions([ "answer" ])
    }
  }
</script>