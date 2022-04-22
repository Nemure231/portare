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
        desc: ` Hello there, my name is ..., I am a ... at ..., I like ..., and really curious about ...`,
        social: [
          {
            id: 1,
            name: `Facebook`,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa6-brands" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>`,
            url: `https://www.your-facebook-link.com`
          },
          {
            id: 3,
            name: `LinkedIn`,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-brands"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>`,
            url: `https://www.your-twitter-link.com`
          },
        ]
      },
    }
  },
  methods: {
    setProfileData(){
      localStorage.setItem('profile', JSON.stringify(this.profile))
    }
  },
  mounted(){
    this.setProfileData()
  }
}
</script>
<template>

</template>
