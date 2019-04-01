<template>
  <div class="row">
    <div class="col-10 offset-1">
      <h3>Call Log</h3>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>From</th>
            <th>Email</th>
            <th>Call Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in calls">
            <td>{{ c.name }}</td>
            <td>{{ c.email }}</td>
            <td>{{ c.callTime | date }}</td>
            <td><router-link :to="{ name: 'call', params: { call: c }}" class="btn btn-sm btn-warning">Open</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { mapState, mapActions } from 'vuex'
  import store from '../store'
  export default {
    store,
    computed: mapState([
      "error",
      "calls"
    ]),
    methods: {
      ...mapActions([
        "load",
        "deleteCall"
      ])
    },
    mounted: function () { this.load() }
  }
</script>