<template>
  <nav>
    <div class="header">
      <span class="material-icons">person</span>
      <p>Developer Adam</p>
    </div>
    <div class="main">
      <router-link :to="{ name: 'Home' }">
        <span class="material-icons">home</span>
        <p>DashBoard</p>
      </router-link>

      <router-link :to="{ name: 'AddJob' }">
        <span class="material-icons">add</span>
        <p>New Job</p>
      </router-link>

      <router-link :to="{ name: 'Settings' }">
        <span class="material-icons">settings</span>
        <p>Settings</p>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
@media screen and (max-width: 800px) {
  nav {
    width: 35px;
    /* min-width: 30px; */
  }
  p {
    display: none;
  }
}

nav {
  width: 20%;
  height: 100vh;
  /* min-width: 200px; */
  background-color: #e2ebf3;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
  width: 100%;
}

a.router-link-active {
  color: #5291cf;
}

.material-icons {
  font-size: 2.5rem;
}

@media screen and (max-width: 800px) {
  .header {
    display: flex;
    flex-direction: column;
  }
}

.header {
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.8px;
}

.main {
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  background-color: transparent;
  padding: 1rem;
  margin-top: 2rem;
}

a {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 25%;
  width: 100%;
  font-weight: 700;
  letter-spacing: 0.7px;
  cursor: pointer;
}

.main-box:hover {
  font-size: 1.1rem;
  transition: font-size 0.3s linear;
}
</style>
