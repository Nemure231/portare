<script>
export default {
  data() {
    return {
      skills: [
        {
          id: 1,
          // This is the skill name
          name: `PhotoShop`,
          // This is the border bottom color
          // remember just change the hex color only, starting form #
          color: `border-b-[#31C5F0]`,
          // This is the shadow color, it will glow in the dark theme when you hover the icon
          // remember just change the hex color only, starting form #
          shadow: `hover:dark:shadow-[#31C5F0]/50`,
          // This is the skills logo
          // I you can choose icon in here: 
          // https://icones.js.org/collection/vscode-icons?s=
          // or if you didn't find the icon, search all icon
          // Search your desired icon, click, and press the [SVG] button to copy that
          // Paste that in [ logo: ] data below
          logo: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--vscode-icons" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="#0c0824" d="M3.167 3.517h25.666v24.966H3.167Z"></path><path fill="#31c5f0" d="M3.167 3.517h25.666v24.966H3.167ZM2 29.65h28V2.35H2Zm18.877-16.1c-.922 0-1.237.467-1.237.852c0 .42.21.712 1.447 1.353c1.832.887 2.4 1.738 2.4 2.987c0 1.867-1.423 2.87-3.348 2.87a5.076 5.076 0 0 1-2.392-.5c-.082-.035-.093-.093-.093-.187v-1.717c0-.117.058-.152.14-.093a4.33 4.33 0 0 0 2.345.688c.922 0 1.307-.385 1.307-.91c0-.42-.268-.793-1.447-1.4c-1.657-.793-2.345-1.6-2.345-2.94c0-1.505 1.178-2.753 3.22-2.753a5.365 5.365 0 0 1 2.088.327a.258.258 0 0 1 .117.233v1.6c0 .093-.058.152-.175.117a3.941 3.941 0 0 0-2.03-.525Zm-10.034 1.388c.268.023.478.023.945.023c1.365 0 2.648-.478 2.648-2.333c0-1.482-.922-2.228-2.473-2.228c-.467 0-.91.023-1.12.035Zm-2.077-6.2c0-.082.163-.14.257-.14a69.782 69.782 0 0 1 3.01-.058c3.232 0 4.492 1.773 4.492 4.037c0 2.963-2.147 4.235-4.783 4.235c-.443 0-.595-.023-.91-.023v4.48c0 .093-.035.14-.14.14H8.907c-.093 0-.14-.035-.14-.14V8.743Z"></path></svg>`
        },
        // Same as above, its just your end skills
        {
          id: 2,
          name: `Word`,
          color: `border-b-[#185ABD]`,
          shadow: `hover:dark:shadow-[#185ABD]/50`,
          logo: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--vscode-icons"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><defs><linearGradient id="IconifyId1804b93c1433b46741857" x1="4.494" x2="13.832" y1="-1712.086" y2="-1695.914" gradientTransform="translate(0 1720)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2368c4"></stop><stop offset=".5" stop-color="#1a5dbe"></stop><stop offset="1" stop-color="#1146ac"></stop></linearGradient></defs><path fill="#41a5ee" d="M28.806 3H9.705a1.192 1.192 0 0 0-1.193 1.191V9.5l11.069 3.25L30 9.5V4.191A1.192 1.192 0 0 0 28.806 3Z"></path><path fill="#2b7cd3" d="M30 9.5H8.512V16l11.069 1.95L30 16Z"></path><path fill="#185abd" d="M8.512 16v6.5l10.418 1.3L30 22.5V16Z"></path><path fill="#103f91" d="M9.705 29h19.1A1.192 1.192 0 0 0 30 27.809V22.5H8.512v5.309A1.192 1.192 0 0 0 9.705 29Z"></path><path d="M16.434 8.2H8.512v16.25h7.922a1.2 1.2 0 0 0 1.194-1.191V9.391A1.2 1.2 0 0 0 16.434 8.2Z" opacity=".1"></path><path d="M15.783 8.85H8.512V25.1h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z" opacity=".2"></path><path d="M15.783 8.85H8.512V23.8h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z" opacity=".2"></path><path d="M15.132 8.85h-6.62V23.8h6.62a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z" opacity=".2"></path><path fill="url(#IconifyId1804b93c1433b46741857)" d="M3.194 8.85h11.938a1.193 1.193 0 0 1 1.194 1.191v11.918a1.193 1.193 0 0 1-1.194 1.191H3.194A1.192 1.192 0 0 1 2 21.959V10.041A1.192 1.192 0 0 1 3.194 8.85Z"></path><path fill="#fff" d="M6.9 17.988c.023.184.039.344.046.481h.028c.01-.13.032-.287.065-.47s.062-.338.089-.465l1.255-5.407h1.624l1.3 5.326a7.761 7.761 0 0 1 .162 1h.022a7.6 7.6 0 0 1 .135-.975l1.039-5.358h1.477l-1.824 7.748h-1.727l-1.237-5.126q-.054-.222-.122-.578t-.084-.52h-.021q-.021.189-.084.561c-.042.249-.075.432-.1.552L7.78 19.871H6.024L4.19 12.127h1.5l1.131 5.418a4.469 4.469 0 0 1 .079.443Z"></path></svg>`
        },
      ],
    }
  },
  methods: {
    setSkillData(){
      localStorage.setItem('skills', JSON.stringify(this.skills));
    }
  },
  mounted(){
    this.setSkillData();
  }
}
</script>
<template>

</template>
