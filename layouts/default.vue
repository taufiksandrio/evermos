<template>
    <div class="Layouts">
        <header>
            <nav class="nav">
                <div class="nav-item nav-logo">
                    <img src="@/assets/images/logo-dummy.png" alt="" srcset="">
                </div>
                <div class="nav-item">
                    <input class="nav-search" type="text" placeholder="Search Product....">
                </div>
                <div class="nav-item">
                    <ul>
                        <li><a href="#">Daftar</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            </nav>
        </header>
        <main>
            <nuxt/>
        </main>
        <footer>
            <span>Shopping App - &copy; 2022</span>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout'
}
</script>