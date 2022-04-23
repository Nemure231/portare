<script>
export default {
  data() {
    return {
      works: [
        {
          id: 1,
          // The title
          title: 'Working at',
          // Your company name
          from: `Your Company Link`,
          // The border bottom color of your company link
          color: `border-[#5eead4]`,
          // Your company url, or maybe their map url
          url: `https://www.company.com`,
          // This is your data at your job, such as your name, what you think about your job
          // your photos, and even your 
          people: [
            {
              id: 1,
              // Your name, also your position in your company
              // Maybe you want to add more like years? Just add it
              name: `Front-End Developer (2011 - 2014)`,
              // Your job detail, what are you doing at your company?
              // What your role? Describe it here
              comment: `I have working in this company as a Front-End Developer. My boss really hate me btw.`,
              // Your picture
              // Its located at folder public/img/profile
              // You can store your image in there, and change the name here
              img: `/img/profile/1.png`,
              // Your company picture, or your picture at work
              // Its located at folder public/img/company
              // You can store your image in there, and change the name here
              testi: `/img/company/1.png`,
            },

            // Maybe you got promotion? you can add more role job at your workplace
            {
              id: 2,
              name: `System Analyist (2014 - NOW)`,
              comment: `My boss give me this promotion, i am now a system analyst.`,
              img: `/img/profile/1.png`,
              testi: `/img/company/1.png`,
            },
          ]
        },
        //Maybe you have a freelance job also?
        {
          id: 2,
          title: 'Client from',
          // Your platform name
          from: `Fiverr`,
          // The brand color of the freelance platform
          color: `border-[#1dbf73]`,
          // Your freelancer link profile
          url: `https://www.fiverr.com`,
          people: [
            {
              id: 1,
              // Your client name
              name: `My client`,
              // Your client review
              comment: `This seller is amazing above beyond!`,
              // Your client profile picture, if its null, then it will return to first number of your client name
              img: ``,
              // Your client testimony image
              testi: `/img/testimony/1.png`,
            },
          ]
        }
      ],
    }
  },
  methods: {
    setWorkData(){
      localStorage.setItem('works', JSON.stringify(this.works))
    }
  },
  mounted(){
    this.setWorkData();
  }
}
</script>
<template>

</template>
