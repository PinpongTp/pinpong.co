<template>
  <header>
    <div className="d-flex justify-content-between align-items-end">
      <div className="">
        <table>
          <tr>
            <td>
              <h1>Pinpong.co</h1>
            </td>
            <td>
              <a
                href="https://webring.wonderful.software/#/pinpong.co"
                title="วงแหวนเว็บ"
              >
                <img
                  style="width: auto"
                  alt="วงแหวนเว็บ"
                  width="28"
                  height="28"
                  src="https://webring.wonderful.software/webring.black.svg"
                />
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderComponent',
})
</script>
