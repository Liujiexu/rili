<template>
    <div class="date">
        请求{{id}}的数据
    </div>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
    data () {
        return {
            id: this.$route.params.id
        }
    },
    created () {
        this.getInfo();
        console.log(this.id)
    },
    methods: {
        getInfo () {
            axios.get('http://www.banmago.cn/chenchu/qunae/api/detail.json', {
                    params: {
                        id: this.$route.params.id
                    }
                }).then((res) => {
                    console.log(res);
                })
        }
    }
}
</script>

<style type="text/css">
    
</style>