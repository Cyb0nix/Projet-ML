<script setup>
import {ref} from 'vue';
import axios from 'axios';

let file;
let prediction = '';
const previewSrc = ref('');
const isLoading = ref(false);
const isResultVisible = ref(false);

function onFileChange(event) {
  file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      previewSrc.value = reader.result;
    };
    reader.readAsDataURL(file);
  } else {
    previewSrc.value = '';
  }
}

function clearImage() {
  file.value = null;
  previewSrc.value = '';
  const fileInput = document.querySelector('input[type="file"]');
  if (fileInput) {
    fileInput.value = '';
  }
  isResultVisible.value = false;
}

function analyzeImage() {
  if (!previewSrc.value) {
    alert("Please select an image before analyzing.");
    return;
  }
  const formData = new FormData();
  formData.append('image', file)
  isLoading.value = true;
  isResultVisible.value = false;

  axios.post(
      'http://localhost:3000/analyze-image',
      formData).then(response => {
      prediction = response.data;

  }).catch(error => {
    console.error(error);
    alert("An error occurred while analyzing the image.")
    isLoading.value = false;
  }).finally(() => {
    isLoading.value = false;
    isResultVisible.value = true;
  });


}
</script>

<template>
  <div class="flex justify-center items-center ">
    <div class="flex space-x-10 w-2/5">
      <div>
        <input type="file" @change="onFileChange"
               class="file-input file-input-bordered file-input-info w-full max-w-xs"/>
        <div class="mt-2">
          <div v-if="previewSrc" class="mt-4">
            <img :src="previewSrc" alt="Preview" class="max-w-xs"/>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <button @click="clearImage" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Clear</button>
        <button @click="analyzeImage" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Analyze</button>
      </div>
    </div>

    <div class="divider lg:divider-horizontal"></div>

    <div class="w-2/5 items-center">
      <div v-if="isLoading" id="loading" class="mt-4">
        <span class="loading loading-spinner loading-lg"></span>
      </div>

      <div v-if="isResultVisible" id="result" class="mt-4 ">
        <h1>Result</h1>
        <h2>Prediction: {{ prediction }} </h2>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>