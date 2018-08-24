<template>
  <div>
    <router-link to="/hospital">
      <div class="contents">
        <div class="image">
          <img src="../assets/images/hospital.jpg">
        </div>
        <h4>病院のホームページ</h4>
        <p>制作日 2018/06/25</p>
      </div>
    </router-link>
    <router-link to="/kampa">
      <div class="contents">
        <div class="image">
          <img src="../assets/images/kampa.jpg">
        </div>
        <h4>WEBサービスのブランディング</h4>
        <p>制作日 2018/07/15</p>
      </div>
    </router-link>
    <router-link to="/bentou">
      <div class="contents">
        <div class="image">
          <img src="../assets/images/bentou.jpg">
        </div>
        <h4>宅配弁当のコーポレートサイト</h4>
        <p>制作日 2018/07/24</p>
      </div>
    </router-link>
    <router-link to="/pingpong">
      <div class="contents">
        <div class="image_ping">
          <img src="../assets/images/pingpong.jpg">
        </div>
        <h4>卓球メディアのコーポレートサイト</h4>
        <p>制作日 2018/07/28</p>
      </div>
    </router-link>
    <!--<router-link to="/pingpong">-->
      <!--<div class="contents">-->
        <!--<div class="image">-->
          <!--<img src="../assets/images/hospital.jpg">-->
        <!--</div>-->
        <!--<h4>title</h4>-->
        <!--<p>text</p>-->
      <!--</div>-->
    <!--</router-link>-->
    <!--<router-link to="/pingpong">-->
      <!--<div class="contents">-->
        <!--<div class="image">-->
          <!--<img src="../assets/images/bentou.jpg">-->
        <!--</div>-->
        <!--<h4>title</h4>-->
        <!--<p>text</p>-->
      <!--</div>-->
    <!--</router-link>-->
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped>
  .contents {
    width: 320px;
    float: left;
    margin: 40px 40px 40px 40px;
  }

  img {
    width: 320px;
    height: 180px;
  }

  .image {
    display: inline-block;
    height: 180px;
    box-shadow:0px 4px 20px 2px #999;
    transition: box-shadow .7s;
  }

  .image:hover {
    box-shadow: none;
    transition: box-shadow .7s;
  }

  .image_ping {
    display: inline-block;
    height: 180px;
    box-shadow:0px 4px 20px 2px #333;
    transition: box-shadow .7s;
  }

  .image_ping:hover {
    box-shadow: none;
    transition: box-shadow .7s;
  }

  h4 {
    font-size: 20px;
    margin: 10px auto;
    padding: 0;
    text-align: left;
    text-decoration: none;
  }

  p {
    font-size: 16px;
    margin: 10px auto;
    text-align: left;
  }

  a {
    color: #333;
  }
</style>
