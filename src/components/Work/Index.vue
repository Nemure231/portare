<script>
import { Starport } from 'vue-starport'
import { OnClickOutside } from '@vueuse/components'
import Modal from './Modal.vue'
import SubNav from './SubNav.vue'
import Platform from './Platform.vue'
import Item from './Item.vue'
export default {
  components: { SubNav, Starport, Modal, OnClickOutside, Platform, Item },
  inject: ['provWorks'],
  emits: ['childReload'],
  data() {
    return {
      showImg: false,
      modalImg: '',
    }
  },
  methods: {
    reloadOnce(){
      this.$emit('childReload');
    },
    showImgModal(e) {
      this.showImg = !this.showImg
      this.modalImg = e;
    },
    closeImgModal() {
      this.showImg = false;
    },
    showCommentDropUp(e) {
      const dropUpEl = document.getElementById('showComment' + e);
      const dropUpElBtn = document.getElementById('showCommentBtn' + e);
      var timer;
      if (dropUpEl.classList.contains('opacity-0')) {
        window.clearTimeout(timer);
        dropUpEl.classList.remove('opacity-0', 'translate-y-20', 'invisible');
        dropUpEl.classList.add('translate-y-0', 'opacity-100');
      } else {
        dropUpEl.classList.add('opacity-0', 'translate-y-20');
        dropUpEl.classList.remove('translate-y-0', 'opacity-100');

        timer = window.setTimeout(() => {
          dropUpEl.classList.add('invisible');
        }, 300);
      }
      window.addEventListener('click', (eve) => {
        if (!dropUpElBtn.contains(eve.target) && !dropUpEl.contains(eve.target)) {
          dropUpEl.classList.add('opacity-0', 'translate-y-20');
          dropUpEl.classList.remove('translate-y-0', 'opacity-100');

          timer = window.setTimeout(() => {
            dropUpEl.classList.add('invisible');
          }, 300);
        }
      });
    }
  },
  mounted(){
    this.reloadOnce();
  }
}
</script>

<template>
  <nav class="sticky top-0 z-50 ">
    <Starport port="work-nav" class="h-12 duration-1000 transition-all">
      <SubNav />
    </Starport>
  </nav>

  <main class="w-full flex flex-col justify-center items-center">
    <Teleport to="body">
      <transition enter-active-class="duration-500 ease-out" enter-from-class="transform opacity-0 -translate-y-20"
        enter-to-class="opacity-100  translate-y-0" leave-active-class="duration-500 ease-in"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="transform opacity-0 -translate-y-20">
        <Modal v-if="showImg">
          <template #outsideClickModal>
            <OnClickOutside @trigger="closeImgModal">
              <img class="w-auto h-80 object-center object-cover" :src="modalImg" alt="">
            </OnClickOutside>

          </template>
        </Modal>
      </transition>
    </Teleport>

    <section class="flex-1 my-20 relative">

      <div class="flex flex-col justify-center flex-wrap h-auto items-center">

        <div class="relative z-20 flex-1 lg:max-w-4xl md:max-w-2xl max-w-max mx-3">
          <div class="break-words flex flex-nowrap space-y-6 flex-col justify-center items-center font-semibold 
          border-black rounded-xl">
            <Item @childShowImgModal="showImgModal" @childShowCommentDropUp="showCommentDropUp"/>
          </div>
        </div>

      </div>
    </section>



  </main>
</template>



<style>
</style>
