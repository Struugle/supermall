import GoTop from 'components/common/goTop/GoTop'
export const listenGoTop = {
  data() {
    return {
      topIsShow: false
    }
  },
  methods: {
    //回到顶部
    goTop() {
      this.$refs.scroll.scrollTo(0,0,300)
    }
  },
  components: {
    GoTop
  }
}