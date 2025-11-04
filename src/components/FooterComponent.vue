<script setup>
</script>

<template>
  <div class="footer-wrapper">
    <div class="footer-container handjet-extra-bold">
      <span class="produced-by">Produced by</span>
      <span class="group-name-container">
      <span class="group-name">Чемоданная</span>
      <span class="group-name-shadow">Чемоданная</span>
    </span>
      <span class="year-text">2025</span>
    </div>
  </div>
</template>

<style scoped>

.footer-wrapper {
  @apply absolute xl:-bottom-96 -bottom-40 left-0 right-0 overflow-clip;
}

.footer-container {
  @apply flex gap-x-10 text-4xl text-white justify-center py-7 items-center;
  position: relative;
  background: linear-gradient(135deg, rgba(21, 0, 54, 1), rgba(27, 3, 35, 1));
  width: 100%;
  max-width: 100vw; /* Ограничивает максимальную ширину */
  box-sizing: border-box;
}

.footer-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/noise.svg');
  opacity: 0.15;
  pointer-events: none;
  z-index: 1;
}

.produced-by {
}

.group-name-container {
  @apply relative flex text-[44px];
}

.group-name {
  text-shadow:
    -2px -2px 0 #7a07d1,
    2px -2px 0 #7a07d1,
    -2px 2px 0 #7a07d1,
    2px 2px 0 #7a07d1,
    0 0 36px rgba(82, 94, 208, 0.9);
  z-index: 10;
}

.group-name-shadow {
  @apply absolute flex -top-2 -left-2 ;

  text-shadow:
    -2px -2px 0 #421165,
    2px -2px 0 #421165,
    -2px 2px 0 #421165,
    2px 2px 0 #421165,
    0 0 36px #421165;
  color: #421165;
  z-index: 5;
}

.year-text {
  @apply text-[#D4AFFF] text-3xl;
}

@media (max-width: 480px) {
  .footer-wrapper {
    @apply -bottom-80;
  }
  .footer-container {
    @apply text-xl;
  }
  .group-name-container, .year-text {
    @apply text-[28px];
  }
  .group-name-shadow {
    @apply -top-1 -left-1 ;
  }
}

@media (max-width: 640px) {
  .footer-wrapper {
    @apply -bottom-80;
  }
  .footer-container {
    @apply text-xl;
  }
  .group-name-container, .year-text {
    @apply text-[28px];
  }
  .group-name-shadow {
    @apply -top-1 -left-1 ;
  }
}

@media (max-width: 768px) {
  .footer-wrapper {
    @apply -bottom-80;
  }
  .footer-container {
    @apply text-xl;
  }
  .group-name-container, .year-text {
    @apply text-[28px];
  }
  .group-name-shadow {
    @apply -top-1 -left-1 ;
  }
}
</style>
