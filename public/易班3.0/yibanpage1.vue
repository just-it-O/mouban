<template>
    <div>
      <div class="nav-bar flex items-center px-4 justify-between">
        <div class="text-lg font-medium">贵州财经职业学院·易班</div>
        <div class="flex items-center space-x-4">
          <i class="fas fa-search text-white"></i>
          <i class="fas fa-bell text-white"></i>
        </div>
      </div>
      <div class="content">
        <div class="banner relative w-full h-48 bg-primary overflow-hidden">
          <img
            src="https://image-resource.mastergo.com/158324437530042/158324437530044/50b5a3295f6bc603a05547f1883c3f96.jpg"
            class="w-full h-full object-cover"
            alt="banner"
          />
          <div
            class="absolute bottom-4 left-0 w-full flex justify-center space-x-2"
          >
            <div class="w-2 h-2 rounded-full bg-white"></div>
            <div class="w-2 h-2 rounded-full bg-white/50"></div>
            <div class="w-2 h-2 rounded-full bg-white/50"></div>
          </div>
        </div>
        <div class="grid grid-cols-5 gap-4 bg-white p-4">
          <div v-for="(item, index) in navItems" :key="index" class="flex flex-col items-center" @click="handleNavClick(item)">
            <div class="grid-icon bg-[item.bgColor]/10 rounded-lg mb-2">
              <i :class="['fas', item.iconClass]" :style="{ color: item.iconColor }"></i>
            </div>
            <span class="text-xs">{{ item.name }}</span>
          </div>
        </div>
        <div class="mt-4 bg-white p-4">
          <div class="flex space-x-6 mb-4">
            <span class="text-primary font-medium">学校</span>
            <span class="text-gray-500">原创</span>
            <span class="text-gray-500">头条</span>
            <span class="text-gray-500">热帖</span>
          </div>
          <div class="flex items-center space-x-4">
            <img
              src="https://ai-public.mastergo.com/ai/img_res/ad00c107d0f746a293d6b40381bb7d6c.jpg"
              class="w-16 h-16 rounded-lg"
              alt="school"
            />
            <div class="flex-1">
              <div class="font-medium mb-1">贵州财经职业学院</div>
              <div class="text-sm text-gray-500">云游贵财职 | 720度VR全景校园</div>
            </div>
            <button class="px-4 py-2 bg-primary text-white rounded-button">进入溜达</button>
          </div>
        </div>
      </div>
      <div class="tab-bar flex items-center justify-around">
        <div v-for="(tab, index) in tabItems" :key="index" class="flex flex-col items-center">
          <i :class="['fas', tab.iconClass]" :style="{ color: tab.iconColor }"></i>
          <span class="text-xs mt-1" :style="{ color: tab.textColor }">{{ tab.name }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'YibanPage1',
    data() {
      return {
        navItems: [
          { name: '易班优课', bgColor: 'primary', iconClass: 'fa-graduation-cap', iconColor: 'primary' },
          { name: '数字马院', bgColor: 'secondary', iconClass: 'fa-university', iconColor: 'secondary' },
          { name: '学习资源', bgColor: 'green-100', iconClass: 'fa-book', iconColor: 'green-500' },
          { name: '微影黔行', bgColor: 'purple-100', iconClass: 'fa-video', iconColor: 'purple-500' },
          { name: '党纪学习', bgColor: 'red-100', iconClass: 'fa-flag', iconColor: 'red-500' },
          { name: '易班本校化', bgColor: 'blue-100', iconClass: 'fa-school', iconColor: 'blue-500' },
          { name: '满意度', bgColor: 'yellow-100', iconClass: 'fa-clipboard-check', iconColor: 'yellow-500' },
          { name: '教务系统', bgColor: 'indigo-100', iconClass: 'fa-desktop', iconColor: 'indigo-500' },
          { name: '心理健康', bgColor: 'pink-100', iconClass: 'fa-heart', iconColor: 'pink-500' },
          { name: '民俗文化', bgColor: 'orange-100', iconClass: 'fa-mask', iconColor: 'orange-500' },
          { name: '党史学习', bgColor: 'red-100', iconClass: 'fa-monument', iconColor: 'red-500' },
          { name: '易班熊', bgColor: 'cyan-100', iconClass: 'fa-paw', iconColor: 'cyan-500' },
          { name: '诚信行动', bgColor: 'teal-100', iconClass: 'fa-user-check', iconColor: 'teal-500' },
          { name: '文明心中', bgColor: 'emerald-100', iconClass: 'fa-leaf', iconColor: 'emerald-500' },
          { name: '开学第一课', bgColor: 'sky-100', iconClass: 'fa-school', iconColor: 'sky-500' }
        ],
        tabItems: [
          { name: '首页', iconClass: 'fa-home', iconColor: 'primary', textColor: 'primary' },
          { name: '互动', iconClass: 'fa-comments', iconColor: 'gray-400', textColor: 'gray-400' },
          { name: '发布', iconClass: 'fa-plus', iconColor: 'white', textColor: 'gray-400' },
          { name: '应用', iconClass: 'fa-th', iconColor: 'gray-400', textColor: 'gray-400' },
          { name: '我的', iconClass: 'fa-user', iconColor: 'gray-400', textColor: 'gray-400' }
        ]
      };
    },
    methods: {
      handleNavClick(item) {
        if (item.name === '易班本校化') {
          this.$router.push('/yiban2');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    width: 375px;
    margin: 0 auto;
    background: #F8F9FA;
    min-height: 100vh;
  }
  .nav-bar {
    height: 44px;
    background: linear-gradient(90deg, #4B96F3, #6BA6F5);
    position: fixed;
    top: 0;
    width: 375px;
    z-index: 100;
    color: white;
  }
  .content {
    margin-top: 44px;
    margin-bottom: 60px;
    min-height: calc(100vh - 104px);
  }
  .tab-bar {
    height: 60px;
    background: white;
    position: fixed;
    bottom: 0;
    width: 375px;
    border-top: 1px solid #EAEAEA;
  }
  .grid-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>