<template>
<div class="login-wrap">
    <div class="loginwrap-logo"></div>
    <div class="loginwrap-form">
        <group labelAlign="left">
            <x-input title="账号" v-model="form.account" placeholder="登录账号"></x-input>
            <x-input title="密码" v-model="form.password" type="password" placeholder="登录密码">
                <x-button slot="right" mini :plain="true">忘记密码</x-button>
            </x-input>
        </group>

        <x-button type="primary" class="mar-top30">登录</x-button>
        <div class="login-tip">还没有账号？<a href="">立即注册</a></div>
    </div>
</div>
</template>

<script>
import '@/static/styles/account/login.less'
import { Group, XInput, XButton } from 'vux'
export default {
    data() {
        return {
            form: {
                account: '',
                password: ''
            }
        }
    },
    components: {
        Group,
        XInput,
        XButton
    }
}
</script>
