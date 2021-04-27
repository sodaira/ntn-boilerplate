<template>
    <footer class="Footer">
        <ul class="Footer__head">
            <li class="Footer__item"><nuxt-link to="/privacy" class="Footer__link">個人情報保護方針</nuxt-link></li>
            <li class="Footer__item"><nuxt-link to="/security" class="Footer__link">情報セキュリティ方針</nuxt-link></li>
        </ul>
        <p class="Footer__body">Copyright c 2013 - 2017 Lincraft,Inc. All rights Reserved</p>
    </footer>
</template>


<script>
export default {
  name: 'Footer'
}
</script>