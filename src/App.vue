<script>
import { StarportCarrier, Starport } from 'vue-starport'
import { UseDark } from '@vueuse/components'
import Profile from './components/Data/Profile.vue'
import Home from './components/Base/Index.vue'
import Skill from './components/Data/Skill.vue'
import Portfolio from './components/Data/Portfolio.vue'
import Work from './components/Data/Work.vue'
import ReOff from './components/Reload/Index.vue'
export default {
  components: { StarportCarrier, Starport, UseDark, Profile, Skill, Portfolio, Work, ReOff, Home },
  data() {
    return {
      switchTheme: {
        dark: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"></path></svg>`,
        light: ` <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"></path></svg>`
      },
    }
  },
  provide() {
    return {
      provSkills: this.getSkillData(),
      provWorks: this.getWorkData(),
      provPortfolios: this.getPortfolioData(),
      provProfile: this.getProfileData(),
    }
  },
  methods: {
    giveProfileData() {
      this.$refs.childProfile.setProfileData();
    },
    getProfileData() {
      return JSON.parse(localStorage.getItem('profile'))
    },

    getSkillData() {
      return JSON.parse(localStorage.getItem('skills'))
    },

    getWorkData() {
      return JSON.parse(localStorage.getItem('works'))
    },

    getPortfolioData() {
      return JSON.parse(localStorage.getItem('portfolios'))
    },


    reloadOnce() {
      if (!localStorage.reloadProfile) {
        localStorage.setItem("reloadProfile", "true");
        window.location.reload();
      }

      if (!localStorage.reloadSkill) {
        localStorage.setItem("reloadSkill", "true");
        window.location.reload();
      }

      if (!localStorage.reloadPortfolio) {
        localStorage.setItem("reloadPortfolio", "true");
        window.location.reload();
      }

      if (!localStorage.reloadWork) {
        localStorage.setItem("reloadWork", "true");
        window.location.reload();
      }

    },
    checkBg(){
      this.$refs.childProfile.checkBgChild();
    }
  },
  mounted() {
    this.reloadOnce();
  },
}   
</script>

<template>
  <router-view @childReload="reloadOnce" name="Work"></router-view>
  <router-view @childReload="reloadOnce" name="Skill"></router-view>
  <router-view @childReload="reloadOnce" name="Portfolio"></router-view>
  <Home v-if="this.$route.name == 'Home'"/>
  <!-- <router-view name="Home"></router-view> -->
  

  <StarportCarrier></StarportCarrier>

  <div class="fixed z-50 top-2.5 right-4">
    <UseDark v-slot="{ isDark, toggleDark }">
      <button id="klik" @click="toggleDark(); checkBg()" v-html="isDark ? switchTheme.dark : switchTheme.light"
        class=" h-7 w-7 text-gray-200">
      </button>
    </UseDark>
  </div>

  <ReOff />
  <Profile ref="childProfile" />
  <Skill />
  <Portfolio />
  <Work />
</template>

<style>

</style>