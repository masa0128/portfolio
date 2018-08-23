<template>
  <div>
    <div id="body">
      <div class="image_pc">
        <img src="../assets/images/hospital_1.jpg">
      </div>
      <div class="image_pc">
        <img src="../assets/images/hospital_2.jpg">
      </div>
      <div class="discription">
        <table>
          <tbody>
          <tr>
            <td class="title">制作日</td>
            <td>2018/06/25</td>
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
            <td>クライアント様の病院内をイメージした、シンプルでわかりやすく老若男女に親しみをもっていただけるサイト
            </td>
          </tr>
          </tbody>
        </table>
        <table>
          <tbody>
          <tr>
            <td class="title">サイトレイアウト</td>
            <td>・各項目ごとにわかりやすいシンプルなUIにしました。</td>
          </tr>
          <tr>
            <td></td>
            <td>・ボタンは大きく、写真も使用し遷移先のページのイメージがつきやすいように配慮しました。</td>
          </tr>
          <tr>
            <td></td>
            <td>・フッターにサイトマップを置くことで、迷わず行きたい階層へアクセスできるようにしました。</td>
          </tr>
          <tr>
            <td></td>
            <td>・ファーストビューに患者様が必要としているであろう情報を掲載、また遷移ボタンを配置しました。</td>
          </tr>
          </tbody>
        </table>
        <table>
          <tbody>
          <tr>
            <td class="title">別案</td>
            <td>別案として、病院ということで清潔さを表現したものも作成しました。</td>
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
  name: 'Hospital'
}
</script>

<style scoped>
  #body {
    width: 100%;
  }

  .image_pc {
    display: block;
    width: 800px;
    height: 2277px;
    box-shadow:0px 0px 30px 8px #999;
    margin: 0 auto 80px auto;
  }

  .image_pc img {
    width: 800px;
    height: auto;
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
