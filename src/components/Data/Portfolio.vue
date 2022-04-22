<script>
export default {
  data() {
    return {
     ////////////////////////////////////  PORTFOLIO PAGE ////////////////////////////////////
      portfolios: [
        {
          id: 1,
          // Your role at this portfolio
          category: `As a Writer`,
          lists: [
            {
              id: 1,
              // The title
              name: `My Novel`,
              // The description
              desc: `I creating this because my friend told me i must write`,
              // Image
              // Its located at folder public/img/portfolio
              img: `/img/portfolio/1.png`,
              // The url, you can make it double, or triple, just copy and paste
              urls: [
                {
                  id: 1,
                  name: `Webnovel`,
                  url: `https://www.url-of-your-portfolio.com`
                },
              ],
              // Your stack, what tools are you use when working with your project.
              // I recommend you to choose icon in here: 
              // https://icones.js.org/collection/vscode-icons?s=
              // or if you didn't find the icon, search all icon
              // Search your desired icon, click, and press the [SVG] button to copy that
              // Remember to remove [ width="" height="" ] from the icon when you see that
              // Paste that in logo: data below
              stacks: [
                {
                  id: 1,
                  name: `Word`,
                  logo: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--vscode-icons"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><defs><linearGradient id="IconifyId1804b93c1433b46741857" x1="4.494" x2="13.832" y1="-1712.086" y2="-1695.914" gradientTransform="translate(0 1720)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2368c4"></stop><stop offset=".5" stop-color="#1a5dbe"></stop><stop offset="1" stop-color="#1146ac"></stop></linearGradient></defs><path fill="#41a5ee" d="M28.806 3H9.705a1.192 1.192 0 0 0-1.193 1.191V9.5l11.069 3.25L30 9.5V4.191A1.192 1.192 0 0 0 28.806 3Z"></path><path fill="#2b7cd3" d="M30 9.5H8.512V16l11.069 1.95L30 16Z"></path><path fill="#185abd" d="M8.512 16v6.5l10.418 1.3L30 22.5V16Z"></path><path fill="#103f91" d="M9.705 29h19.1A1.192 1.192 0 0 0 30 27.809V22.5H8.512v5.309A1.192 1.192 0 0 0 9.705 29Z"></path><path d="M16.434 8.2H8.512v16.25h7.922a1.2 1.2 0 0 0 1.194-1.191V9.391A1.2 1.2 0 0 0 16.434 8.2Z" opacity=".1"></path><path d="M15.783 8.85H8.512V25.1h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z" opacity=".2"></path><path d="M15.783 8.85H8.512V23.8h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z" opacity=".2"></path><path d="M15.132 8.85h-6.62V23.8h6.62a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z" opacity=".2"></path><path fill="url(#IconifyId1804b93c1433b46741857)" d="M3.194 8.85h11.938a1.193 1.193 0 0 1 1.194 1.191v11.918a1.193 1.193 0 0 1-1.194 1.191H3.194A1.192 1.192 0 0 1 2 21.959V10.041A1.192 1.192 0 0 1 3.194 8.85Z"></path><path fill="#fff" d="M6.9 17.988c.023.184.039.344.046.481h.028c.01-.13.032-.287.065-.47s.062-.338.089-.465l1.255-5.407h1.624l1.3 5.326a7.761 7.761 0 0 1 .162 1h.022a7.6 7.6 0 0 1 .135-.975l1.039-5.358h1.477l-1.824 7.748h-1.727l-1.237-5.126q-.054-.222-.122-.578t-.084-.52h-.021q-.021.189-.084.561c-.042.249-.075.432-.1.552L7.78 19.871H6.024L4.19 12.127h1.5l1.131 5.418a4.469 4.469 0 0 1 .079.443Z"></path></svg>`
                },
                {
                  id: 2,
                  name: `AI`,
                  logo: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--vscode-icons" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="#1c0a00" d="M3.169 3.517h25.666v24.966H3.169Z"></path><path fill="#ff7f18" d="M3.169 3.517h25.666v24.966H3.169ZM2 29.65h28V2.35H2Zm18.34-17.57c0-.093.035-.14.14-.14h1.832c.093 0 .14.035.14.14v9.205c0 .093-.023.14-.14.14h-1.807c-.117 0-.152-.058-.152-.152V12.08h-.012Zm-.128-2.648a1.19 1.19 0 0 1 2.38 0a1.115 1.115 0 0 1-1.213 1.19a1.1 1.1 0 0 1-1.165-1.19Zm-5.25 6.487c-.327-1.3-1.1-4.118-1.388-5.483h-.023c-.245 1.365-.863 3.675-1.353 5.483Zm-3.243 1.89l-.922 3.5c-.023.093-.058.117-.175.117H8.909c-.117 0-.14-.035-.117-.175l3.313-11.6a3.779 3.779 0 0 0 .117-.968c0-.082.035-.117.093-.117h2.45c.082 0 .117.023.14.117l3.71 12.588c.023.093 0 .152-.093.152h-1.937c-.093 0-.152-.023-.175-.1l-.957-3.512H11.72Z"></path></svg>`
                },
                
              ]
            },
          ]
        },
        

        // Maybe you have 2 role? Just copy and paste the data below and make new component
        {
          id: 1,
          category: `As an Artist`,
          lists: [
            {
              id: 1,
              name: `My Artwork`,
              desc: `I draw this art when i sleep, amazing right?`,
              img: `/img/portfolio/1.png`,
              // The
              urls: [
                {
                  id: 1,
                  name: `Pixiv`,
                  url: `https://www.pixiv.com`
                }
              ],
              stacks: [
                {
                  id: 1,
                  name: `AI`,
                  logo: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--vscode-icons" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="#1c0a00" d="M3.169 3.517h25.666v24.966H3.169Z"></path><path fill="#ff7f18" d="M3.169 3.517h25.666v24.966H3.169ZM2 29.65h28V2.35H2Zm18.34-17.57c0-.093.035-.14.14-.14h1.832c.093 0 .14.035.14.14v9.205c0 .093-.023.14-.14.14h-1.807c-.117 0-.152-.058-.152-.152V12.08h-.012Zm-.128-2.648a1.19 1.19 0 0 1 2.38 0a1.115 1.115 0 0 1-1.213 1.19a1.1 1.1 0 0 1-1.165-1.19Zm-5.25 6.487c-.327-1.3-1.1-4.118-1.388-5.483h-.023c-.245 1.365-.863 3.675-1.353 5.483Zm-3.243 1.89l-.922 3.5c-.023.093-.058.117-.175.117H8.909c-.117 0-.14-.035-.117-.175l3.313-11.6a3.779 3.779 0 0 0 .117-.968c0-.082.035-.117.093-.117h2.45c.082 0 .117.023.14.117l3.71 12.588c.023.093 0 .152-.093.152h-1.937c-.093 0-.152-.023-.175-.1l-.957-3.512H11.72Z"></path></svg>`
                },
              ]
            },
          ]
        },
        
      ],
    }
  },
  methods: {
    setPortfolioData(){
      localStorage.setItem('portfolios', JSON.stringify(this.portfolios))
    }
  },
  mounted(){
    this.setPortfolioData()
  }
}
</script>
<template>

</template>
