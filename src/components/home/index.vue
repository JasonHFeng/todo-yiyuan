<template>
<div class="home">
    <div class="home-title">
        <h1>Salads</h1>
        <!-- <p>2 / 8</p> -->
    </div>
    <div class="home-todolist">
        <checker v-model="selectTodo" default-item-class="todo-item" type="checkbox" selected-item-class="todo-item-selected" >
            <checker-item v-for="item in todolist" :key="item.id" :value="item.id" @on-item-click="selectedItem">
                <div class="display-table todo-item-wrap">
                    <div class="todo-item-icon">
                        <i class="iconfont icon-round"></i>
                        <i class="iconfont icon-roundcheck"></i>
                    </div>
                    <div class="todo-item-title">{{ item.value }}</div>
                </div>
            </checker-item>
        </checker>
    </div>
</div>
</template>

<script>
import { Checker, CheckerItem  } from 'vux'
import '@/static/styles/home/home.less'

export default {
    data() {
        return {
            selectTodo: [1, 3, 6],
            todolist: [
                { id: 1, value: 'salad1' },
                { id: 2, value: 'salad2' },
                { id: 3, value: 'salad3' },
                { id: 4, value: 'salad4' },
                { id: 5, value: 'salad5' },
                { id: 6, value: 'salad6' }
            ]
        }
    },
    methods: {
        selectedItem(val) {
            console.log(val);
        }
    },
    components: {
        Checker,
        CheckerItem
    }
}
</script>
