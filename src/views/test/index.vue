<template>
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
import A from '@/components/a.vue'
console.log(A)
export default {
    name: 'Test',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        
    }
}
</script>

