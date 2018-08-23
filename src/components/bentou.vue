<template>
  <div>
    <div id="body">
      <div class="image_pc">
        <img src="../assets/images/bentou_pc.jpg">
      </div>
      <div class="image_sp">
        <img src="../assets/images/bentou_sp.jpg">
      </div>
      <div class="discription">
        <table>
          <tbody>
          <tr>
            <td class="title">制作日</td>
            <td>2018/07/24</td>
          </tr>
          </tbody>
        </table>
        <table>
          <tbody>
          <tr>
            <td class="title">制作時間</td>
            <td>8時間</td>
          </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td class="title">テーマ</td>
              <td>清潔感を第一に、アクセントでロゴのカラーを取り入れることで暖かみを感じ親しみをもっていただけるデザイン。</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td class="title">サイトレイアウト</td>
              <td>・全体的にシンプルなレイアウトにし、伝えたいことや興味を持ってもらえるような内容を盛り込みました。</td>
            </tr>
            <tr>
              <td></td>
              <td>・ロゴのマークが笑顔のデザインになっているので、メインビジュアルの文言に「あなたの“笑顔”をタベルでつくる」を加えました。</td>
            </tr>
            <tr>
              <td></td>
              <td>・お客様の笑顔、食材、お弁当、作り手の写真を使い、サービスの特徴を視覚的に伝えられるようにしました。</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
          <tr>
            <td class="title">作成環境</td>
            <td>Adobe Photoshop CC</td>
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
    height: 2337px;
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
    height: 4978px;
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
