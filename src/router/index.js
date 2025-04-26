import Vue from 'vue';
import VueRouter from 'vue-router';
import YibanPage1 from '../components/YibanPage1.vue';
import YibanPage2 from '../components/YibanPage2.vue';
import YibanPage3 from '../components/YibanPage3.vue';
import FakePage from '../components/Fake.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/yiban1',
        name: 'YibanPage1',
        component: YibanPage1
    },
    {
        path: '/yiban2',
        name: 'YibanPage2',
        component: YibanPage2
    },
    {
        path: '/yiban3',
        name: 'YibanPage3',
        component: YibanPage3
    },
    {
        path: '/fake',
        name: 'FakePage',
        component: FakePage
    }
];

const router = new VueRouter({
    routes
});

export default router;