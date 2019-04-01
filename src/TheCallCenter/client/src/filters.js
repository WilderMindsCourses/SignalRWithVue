import moment from "moment";
import Vue from "vue";

export default () => {
  Vue.filter("date", function (d) {
    return moment(d).format();
  });
}