<template>
  <svg width="87" height="95" viewBox="0 0 87 95" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.7" filter="url(#filter0_dng_265_261)">
      <path d="M74.9564 44.1718L16.2495 82.2965L12.5859 12.3925L74.9564 44.1718Z" fill="#6AFF00"/>
    </g>
    <defs>
      <filter id="filter0_dng_265_261" x="0.585938" y="0.392456" width="86.3705" height="93.9041" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="6"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.415686 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_265_261"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feTurbulence type="fractalNoise" baseFrequency="2.8571429252624512 2.8571429252624512" stitchTiles="stitch" numOctaves="3" result="noise" seed="210" />
        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
          <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
        </feComponentTransfer>
        <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
        <feFlood flood-color="rgba(0, 0, 0, 0.25)" result="color1Flood" />
        <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
        <feMerge result="effect2_noise_265_261">
          <feMergeNode in="shape" />
          <feMergeNode in="color1" />
        </feMerge>
        <feBlend mode="normal" in="effect2_noise_265_261" in2="effect1_dropShadow_265_261" result="effect2_noise_265_261"/>
        <feTurbulence type="fractalNoise" baseFrequency="3.3333332538604736 3.3333332538604736" numOctaves="3" seed="2668" />
        <feDisplacementMap in="effect2_noise_265_261" scale="2" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
        <feMerge result="effect3_texture_265_261">
          <feMergeNode in="displacedImage"/>
        </feMerge>
      </filter>
    </defs>
  </svg>

  <!--  <svg-->
<!--    xmlns="http://www.w3.org/2000/svg"-->
<!--    width="32"-->
<!--    height="32"-->
<!--    fill="currentColor"-->
<!--    class="bi bi-music-note-beamed"-->
<!--    viewBox="0 0 16 16"-->
<!--  >-->
<!--    <path-->
<!--      d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"-->
<!--    />-->
<!--    <path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z" />-->
<!--    <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z" />-->
<!--  </svg>-->
</template>
