<template>
  <div>
    <div id="body">
      <div class="image_pc">
        <img src="../assets/images/pingpong.jpg">
      </div>
      <div class="image_sp">
        <img src="../assets/images/pingpong_sp.jpg">
      </div>
      <div class="discription">
        <table>
          <tbody>
          <tr>
            <td class="title">制作日</td>
            <td>2018/07/28</td>
          </tr>
          </tbody>
        </table>
        <table>
          <tbody>
          <tr>
            <td class="title">制作時間</td>
            <td>10時間</td>
          </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td class="title">テーマ</td>
              <td>シンプルでスタイリッシュなデザイン</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td class="title">サイトレイアウト</td>
              <td>・全体的にシンプルで分かりやすく、スタイリッシュに整えかつ情報が分かりやすいように配慮しました。</td>
            </tr>
            <tr>
              <td></td>
              <td>・企業イメージがわかりやすく伝わるように、写真を大きく配置しました 。</td>
            </tr>
            <tr>
              <td></td>
              <td>・1ビューポートに対し1コンテンツで作成し、項目ごとにメリハリをつけました。</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
          <tr>
            <td class="title">作成環境</td>
            <td>Adobe Illustrator CC</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pingpong'
}
</script>

<style scoped>
  #body {
    width: 100%;
  }

  .image_pc {
    display: block;
    width: 800px;
    height: 450px;
    box-shadow:0px 0px 30px 8px #999;
    margin: 0 auto 80px auto;
  }

  .image_pc img {
    width: 800px;
    height: auto;
  }

  .image_sp {
    display: block;
    width: 400px;
    height: 2134px;
    box-shadow:0px 0px 30px 8px #999;
    margin: 0 auto 80px auto;
  }

  .image_sp img {
    width: 400px;
    margin: 0 auto;
  }

  table {
    width: 1000px;
    margin: 0 auto 40px auto;
  }

  tr {
    width: 800px;
  }

  table .title {
    width: 200px;
    font-weight: bold;
  }
</style>
