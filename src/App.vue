<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container-fluid">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                      <RouterLink to="/"><a class="nav-link active" aria-current="page" href="">Calculator</a></RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/conversor"><a class="nav-link active" href="">Conversor</a></RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/weather"><a class=" nav-link active" href="">Weather</a></RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </header>
 

  <RouterView />

</template>

<style scoped>

.RouterView {
  background-color: rgba (156, 146, 146, 0.04);
}
html {
  height: 100%;
}
 .navbar {
    background-color: #393E46 !important;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0 auto;
    } 
 a { text-decoration: none;}
header {
  line-height: 1.5;
  max-height: 100vh;
 
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;

  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
  .nav-item{
    font-size: 20px;
  }
  
}
@media only screen and (max-width: 500px) {
  .nav-item{
    font-size: 25px;
  }
}
</style>
