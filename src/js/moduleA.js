import {mapGetters} from "vuex";

export default {
  name: "module1",
  computed: {
    ...mapGetters(['doubleCount'])
  },
  methods: {
    fun1: function () {
      console.log('this.$store.state.moduleA', this.$store.state.moduleA);
    },
    mu1: function () {
      console.log('this.$store.commit(\'increment\').moduleA', this.$store.commit('increment'));
    }
  }
};