<template>
  <div>
    <p>
      Hello, my name is Pinpong Tongpat (Pin). <br />
      I am full stack web developer.
    </p>
    <nuxt-img preload src="/profile.jpg" />

    <p>
      สวัสดีผมเป็น dev เดปไม่ได้หมายถึงคนเขียนโปรแกรม แต่หมายถึงนักพัฒนา
      และความหมายของผมต่างไปจากนั้นอีก นักพัฒนาที่ไม่ได้พัฒนาแค่ผลงาน
      แต่ยังหมายถึงพัฒนาตัวเอง อย่างสม่ำเสมอ เดปไม่เคยหยุดและหยุดไม่ได้
    </p>
    <p>
      เว็บไซต์นี้เป็นพื้นที่สำหรับเรียนรู้
      ส่วนใหญ่ก็คงเป็นตัวผมเองที่ได้เรียนรู้ก่อนที่จะเอามาบันทึกที่นี่
      บันทึกไว้เพื่อให้ตัวเองได้มาอ่านในอนาคตเผื่อจะลืมไป
      กลับมาอ่านความคิดของเด็กคนนึงว่าคิดอะไรยังไงในช่วงเวลานั้นๆ
    </p>
    <p>
      ปฏิเสธไม่ได้นะว่าเราไม่มีทางจำอะไรได้หมดอยู่แล้วถึงแม้จะทำมันบ่อยๆก็ตาม
      และหากเราไม่ต้องเครียดว่าจะจำหมดไหม
      ไว้ค่อยกลับมาอ่านเดี้ยวก็นึกขึ้นได้เองก็คงจะเบาสมองไม่น้อย
    </p>
    <p>
      เรื่องราวหลายเรื่องที่จะบันทึกมีทั้งแนวคิด วิธีคิด วิธีทำ และเทคนิคต่างๆ
      ไว้จะมาบันทึกไว้บ่อยๆนะครับ
    </p>

    <br />
    <br />

    <p><b>Contact</b><br /></p>
    <table>
      <tbody>
        <tr>
          <td>Name:</td>
          <td>Pinpong Tongpat (Pin)</td>
        </tr>
        <tr>
          <td>TH:</td>
          <td>ปิ่นพงศ์ ทองพัด (ปิ่น)</td>
        </tr>
        <tr>
          <td>Tel:</td>
          <td>081-596-7897</td>
        </tr>

        <tr>
          <td>Email:</td>
          <td>
            <a href="mailto:pinpong.tp@gmail.com" target="_blank"
              >pinpong.tp@gmail.com</a
            >
          </td>
        </tr>

        <tr>
          <td>Git :</td>
          <td>
            <a href="https://github.com/PinpongTp" target="_blank"
              >github.com/PinpongTp</a
            >
          </td>
        </tr>

        <tr>
          <td>Twitter :</td>
          <td>
            <a href="https://twitter.com/PinpongTt" target="_blank"
              >PinpongTt</a
            >
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <p>
      <small>Copyright 2022 by Pinpong. All Rights Reserved.</small>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutPage',
  head() {
    return {
      title: `About me | Pinpong.co`,
    }
  },
})
</script>
