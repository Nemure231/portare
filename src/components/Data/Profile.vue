<script>
export default {
  data() {
    return {
      profile: {
        // This is yout Name
        name: `Your Name of Course`,
        // Your profile picture
        // Located at public/img/profile
        img: `/img/profile/1.png`,
        // This is your description, introduce yourself here
        desc: `Hello there, my name is ..., I am a ... at ..., I like ..., and really curious about ...`,
        // This is your social media link with icon
        // If you want to add more icon, just copy and paste the social data
        // Remember always wrap the data inside backtick `your data`
        // You can get icon brand from here: https://icones.js.org/collection/fa-brands?s=
        // Click your desired icon, click [SVG] button to copy
        // Paste in [ icon: ] data below
        social: [
          {
            id: 1,
            name: `Facebook`,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa6-brands" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>`,
            url: `https://www.your-facebook-link.com`
          },
          {
            id: 2,
            name: `LinkedIn`,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-brands"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>`,
            url: `https://www.your-twitter-link.com`
          },
        ],
      },
      // The background with image,
      // if you dont want to use background just leave it empty with 2 backtick ``
      // But if you want to use fancy background go to:
      // https://www.svgbackgrounds.com/
      // Chhose your desired background
      // You can edit color in that site, pattern, and more
      // If you already done, click [EXPORT] button
      // click CSS to copy that, you will have a many code right?
      // We just need the url code, and replace that at [bg: ] code below, inside the backtick `` and the data always end with comma ,
      bg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2391AA92'/%3E%3Cstop offset='1' stop-color='%235BFFF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23E0FFD6' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E0FFD6' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23E0FFD6' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E0FFD6' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E")`,
      // Same as above, but when in the dark mode,
      // You need to use the darker background
      // Again, if you dont want to use bg just leave it empty with 2 backtick ``
      bgDark:  ``,
    }
  },
  methods: {
    setProfileData(){
      localStorage.setItem('profile', JSON.stringify(this.profile));
    },
    checkBgChild(){
      const checkDark = localStorage.getItem('vueuse-color-scheme');
      if(checkDark !== 'light'){
        document.getElementsByTagName('body')[0].style.backgroundImage = this.bg
      }else{
        document.getElementsByTagName('body')[0].style.backgroundImage = this.bgDark
      }
    }
  },
  mounted(){
    this.bgPattern
  },
  computed: {
    bgPattern(){
      const checkDark = localStorage.getItem('vueuse-color-scheme');
      if(checkDark === 'light'){
        document.getElementsByTagName('body')[0].style.backgroundImage = this.bg
      }else{
        document.getElementsByTagName('body')[0].style.backgroundImage = this.bgDark
      }
    }
  }
}
</script>
<template>

</template>
