<script lang="ts" setup>
defineProps<{
  show: boolean
}>()

const years = range(1900, new Date().getFullYear())
const days = range(1, 31)
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]

const formRef = ref(null)

const submit = () => 
{
    const form = (formRef.value! as HTMLFormElement)

    if(form.reportValidity())
    {

    }
}
</script>

<template>
    <Modal name="register" :show="show" title="Register" @closeModal="$emit('closeModal')" closable>
        <form method="POST" class="content flex flex-col" @submit.prevent="submit" ref="formRef">

            <div class="flex mb-3">
                <TkInput type="text" class="pr-1.5" placeholder="Firstname" size="medium" required/>
                <TkInput type="text" class="pl-1.5" placeholder="Lastname" size="medium" required/>
            </div>

            <TkInput type="text" placeholder="Email or phone number" size="medium" class="mb-3" required/>

            <TkInput type="password" placeholder="Password" size="medium" class="mb-3" required/>

            <span class="text-sm pb-1 pl-0.5">Birthday</span>

            <div class="flex mb-3">
                <TkSelect :list="months" class="w-1/3 pr-0.5"/>
                <TkSelect :list="days" class="w-1/3 pr-0.5 pl-0.5"/>
                <TkSelect :list="years.reverse()" class="w-1/3 pl-0.5"/>
            </div>

            <span class="text-sm pb-1 pl-0.5">Gender</span>

            <div class="flex mb-6">
                <TkRadio class="w-1/3 pr-0.5" name="gender" size="medium" selected>Female</TkRadio>
                <TkRadio class="w-1/3 pr-0.5 pl-0.5" name="gender" size="medium">Male</TkRadio>
                <TkRadio class="w-1/3 pl-0.5" name="gender" size="medium">Other</TkRadio>
            </div>

            <p class="text-[12.5px] text-center mb-2">
                By clicking Sign Up, you agree to our 
                <NuxtLink to="/" class="underline text-primary">Terms</NuxtLink>, <NuxtLink to="/" class="underline text-primary">Privacy Policy</NuxtLink> and 
                <NuxtLink to="/" class="underline text-primary">Cookies Policy.</NuxtLink>
            </p>

            <TkButton class="w-full !bg-secondary" size="medium">Create new account</TkButton>
        </form>
    </Modal>
</template>