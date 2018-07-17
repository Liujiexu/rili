<template>
  <div class="content">
    <Calendar ref="Calendar" :markDateMore="arr" :markDate="arr2"  v-on:isToday="clickToday"  v-on:choseDay="clickDay" v-on:changeMonth="changeDate"></Calendar>
    <br/>
    <!-- <h3 @click="demo">markDateMore标记不同风格：：1号2号一种风格====13号另一种风格</h3>
    <br>
    <h3>markDate 标记23号 单一风格 更简单</h3>
    <div class="div" @click="demo ">
      点击跳到2018-12-12
    </div> -->
  </div>
</template>

<script>
import Calendar from '../vue-calendar-component/index';
// import Calendar from 'vue-calendar-component';
export default {
  data() {
    return {
      // arr2: ['2018/6/23'],
      nowDate: [],
      arr2: [],
      arr: [
        {
          date: '2018/6/1',
          className: 'mark1'
        },
        {
          date: '2018/6/13',
          className: 'mark2'
        }
      ]
    };
  },
  components: {
    Calendar
  },
  methods: {
    clickDay(data) {
      this.nowDate = [];  
      for(let i=0;i<this.arr.length;i++) {
        let date = this.arr[i].date;
        if(data === this.arr[i].date) {
          this.nowDate.push(this.arr[i].date);
        }
      }
      if(this.nowDate[0] === undefined) {
        return
      }
      let arr = this.nowDate[0].split('/');
      if(arr[1].length < 2) {
        arr[1] = '0' + arr[1]
      }
      if(arr[2].length < 2) {
        arr[2] = '0' + arr[2]
      }
      arr = Number(arr.join(""))
      console.log(typeof arr)
      this.$router.push({
        path: '/date/'+ arr
      })

      // if (data === this.arr[0].date) {
      //   alert(111);
      // }
      // console.log('选中了', data); //选中某天
      // this.$toast('选中了' + data);
    },
    clickToday(data) {
      // console.log('跳到了本月今天', data); //跳到了本月
    },
    changeDate(data) {
      this.$toast('切换到的月份为' + data);
      // console.log('左右点击切换月份', data); //左右点击切换月份
    },
    // demo() {
    //   this.$refs.Calendar.ChoseMonth('2018-12-13'); //跳到12月12日选中12月12日
    // }
  },
  created() {
    function format(date, index) {
      date = new Date(date);
      return `${date.getFullYear()}/${date.getMonth() + 1}/${index}`;
    }
    this.arr = [
      {
        date: '2018/6/1',
        className: 'blue',
        num: 99
      },
      {
        date: format(new Date(), 1),
        className: 'purple',
        num: 3
      },
      {
        date: format(new Date(), 13),
        className: 'blue',
        num: 2
      }
    ];
  }
};
</script>

<style>
a,a:hover,a:active,a:visited,a:link,a:focus{
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    outline:none;
    text-decoration: none;
}
a,input,i,img,select,p,span,div,li{-webkit-tap-highlight-color:rgba(255,0,0,0);}
h3 {
  text-align: center;
  width: 90%;
  margin: auto;
}

.div {
  margin: auto;
  width: 220px;
  height: 44px;
  line-height: 44px;
  background: #0fc37c;
  color: #fff;
  font-size: 17px;
  text-align: center;
  margin-top: 20px;
}

.purple {
  background-color: purple;
  border-radius: 50% !important;
}

.blue {
  background-color: blue;
  border-radius: 50% !important;
}
.wh_content_item > .wh_isMark {
  background: orange;

}
.wh_content_item .wh_chose_day {
  background: gray;
}
</style>