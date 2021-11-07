<template>
  <div id="nav">
    <nav class="navbar">
      <div class="container justify-content-center">
        <router-link to="/" class="fixup">One Way</router-link>
        <router-link to="/roundtrip" class="fixup">Round Trip</router-link>
        <router-link to="/multicity" class="fixup">Multi-City</router-link>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style>
#nav {
  padding: 15px;
}

#nav .navbar .container {
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 0;
  width: fit-content;
}

#nav a {
  color: #2c3e50;
  font-weight: 600;
  margin: 0 10px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  background-size: 300% 100%;
  border: none;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  height: 35px;
  margin: 5px;
  padding-top: 5px;
  width: 110px;
  text-align: center;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

#nav a.router-link-exact-active:hover {
  background-position: 100% 0;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

#nav a.router-link-exact-active:focus {
  outline: none;
}

#nav a.router-link-exact-active.fixup {
  background-image: linear-gradient(
    to right,
    #eb3941,
    #f15e64,
    #e14e53,
    #e2373f
  );
  box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4);
}
</style>
