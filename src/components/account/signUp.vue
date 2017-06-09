<template>
<div class="signup-wrap">
    <h1 class="signup-title">注册</h1>
    <div class="signupwrap-form">
        <group labelAlign="left">
            <x-input title="昵称" v-model="form.nikename" placeholder=""></x-input>
            <x-input title="账号" v-model="form.account" placeholder=""></x-input>
            <x-input title="密码" v-model="form.password" type="password" placeholder=""></x-input>
            <datetime title="生日" v-model="form.birthday" confirm-text="确认" cancel-text="取消"></datetime>
        </group>

        <x-button type="primary" class="mar-top30">创建</x-button>
        <div class="signup-tip">已有账号？<router-link to="login">立即登录</router-link></div>
    </div>
</div>
</template>

<script>
import '@/static/styles/account/signup.less'
import { Group, XInput, XButton, Datetime } from 'vux'
export default {
    data() {
        return {
            form: {
                nikename: '',
                account: '',
                password: '',
                birthday: ''
            }
        }
    },
    components: {
        Group,
        XInput,
        XButton,
        Datetime
    }
}
</script>
