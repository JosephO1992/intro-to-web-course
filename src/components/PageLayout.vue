<template>
       <div class="flex flex-col flex-grow h-full">
        <div class="flex flex-col p-5 text-xl flex-grow">
            <h2 class="font-bold text-left mb-8 underline border-b-2 pb-4 border-gray-800">
                {{title}}
            </h2>
        
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>