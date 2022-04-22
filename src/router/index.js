import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Base/Index.vue'
import Skill from '../components/Skill/Index.vue'
import Work from '../components/Work/Index.vue'
import Portfolio from '../components/Portfolio/Index.vue'

const routes = [
    {
        path: '/',
        components: {
            default: Home,
        },
    },
    {
        path: '/skill',
        name: 'skill',
        components: {
            Skill
        }
    },
    {
        path: '/work',
        name: 'work',
        components: {
            Work
        }
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        components: {
            Portfolio
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;