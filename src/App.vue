<template>
  <div>
    <p>it's value from vue: {{ value }}</p>
    <ul class="menu">
      <li><a href="#">Title1</a></li>
      <li>
        <a href="#">Title2</a>
        <ul>
          <li><a href="#">subtitle</a></li>
          <li><a href="#">subtitle</a></li>
        </ul>
      </li>
      <li>
        <a href="#">Title2</a>
        <ul>
          <li>
            <a href="#">subtitle</a>
            <ul>
              <li><a href="#">sub-subtitle</a></li>
              <li><a href="#">sub-subtitle</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { jqLogic } from "./js";
import $ from "jquery";
import { ref } from "vue";
export default {
  setup() {
    const value = ref("hello");
    return {
      value,
    };
  },
  name: "App",
  components: {},
  mounted() {
    jqLogic();
    $("li").hover(() => (this.value = "hovered"));
    $("li").mouseleave(() => (this.value = "default"));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  margin: 0;
  padding: 0;
}
.menu li {
  float: left;
  position: relative;
  border: 1px solid #5588c2;
  margin-left: -1px;
  list-style: none;
}
.menu a {
  color: #5588c2;
  font: 12px Verdana;
  text-decoration: none;
  display: block;
  padding: 5px;
  outline: none;
}

.menu li ul {
  position: absolute;
  width: 150px;
  margin: 0 0 0 -1px;
  background: #fff;
  border: 1px solid #5588c2;
  padding: 0;
}

.menu li li {
  border: none;
  width: 150px;
  margin: 0;
}
.menu li li ul {
  width: 150px;
  margin: -1px 0 0 150px;
  top: 0px;
}

.active {
  background: #dadada;
}
</style>
