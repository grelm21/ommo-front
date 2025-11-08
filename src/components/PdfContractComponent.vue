<template>
  <v-pdf ref="pdf" :options="pdfOptions" filename="my-awesome-report.pdf" class="">
    <h2>Отчёт по заказу №{{ orderId }}</h2>
    <table>
      <tr>
        <th>Позиция</th>
        <th>Количество</th>
        <th>Цена</th>
      </tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.qty }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </table>
    <div class="html2pdf__page-number">1</div>
  </v-pdf>
</template>

<script setup>
import { ref } from 'vue'

const pdf = ref(true)

const pdfOptions = {
  margin: 10,
  html2canvas: { scale: 2 },
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'p' }
}

// эта функция вызывается снаружи
function downloadPdf() {
  pdf.value.download()
}

defineExpose({ downloadPdf })
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
th, td {
  border: 1px solid #ccc;
  padding: 6px 10px;
  text-align: left;
}
th {
  background: #f0f0f0;
}
</style>
