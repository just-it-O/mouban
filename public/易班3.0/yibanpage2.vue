<template>
    <div>
      <div class="fixed top-0 w-full z-10">
        <div class="h-12 flex items-center justify-between px-4 text-white">
          <button
            class="w-8 h-8 flex items-center justify-center cursor-pointer"
            @click="$router.push('/yiban1')"
          >
            <i class="ri-arrow-left-s-line ri-lg"></i>
          </button>
          <h1 class="text-base font-normal">网页</h1>
          <button class="w-8 h-8 flex items-center justify-center cursor-pointer">
            <i class="ri-more-2-fill ri-lg"></i>
          </button>
        </div>
      </div>
      <div class="pt-14 pb-12 relative" style="background: linear-gradient(135deg, #4FC3F7 0%, #1E88E5 100%);">
        <div class="flex justify-center gap-32 px-6 mt-4">
          <div class="text-center cursor-pointer">
            <div class="bg-white rounded-xl w-14 h-14 flex items-center justify-center mb-2">
              <span class="text-2xl font-medium text-primary">1</span>
            </div>
            <a
              href="https://readdy.ai/home/39fff65a-eb6e-4a4b-b16f-dcd499f40d25/379385aa-6180-4e4d-aeec-bdfd5e74fba8"
              data-readdy="true"
              class="text-white text-sm no-underline"
            >消息</a>
          </div>
          <div class="text-center cursor-pointer">
            <div class="bg-white rounded-xl w-14 h-14 flex items-center justify-center mb-2">
              <span class="text-2xl font-medium text-primary">0</span>
            </div>
            <p class="text-white text-sm m-0">工作台</p>
          </div>
        </div>
      </div>
      <div class="px-5 py-6 bg-white rounded-3xl mx-4 mt-4">
        <div class="grid grid-cols-4 gap-x-4 gap-y-6">
          <div v-for="(gridItem, index) in gridItems" :key="index" class="grid-item cursor-pointer" @click="handleGridClick(gridItem)">
            <div class="w-14 h-14 rounded-lg" :style="{ backgroundColor: gridItem.bgColor }">
              <img :src="gridItem.iconUrl" alt="gridItem.name" class="w-10 h-10 object-contain">
            </div>
            <p class="text-gray-700">{{ gridItem.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'YibanPage2',
    data() {
      return {
        gridItems: [
          {
            name: '综合测评',
            bgColor: '#FFF7E6',
            iconUrl: 'https://readdy.ai/api/search-image?query=icon%2C%202.5D%20vector%20illustration%2C%20assessment%20document%20with%20chart%2C%20high-quality%20details%2C%20prominent%20main%20subject%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20light%20yellow%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20no%20shadows%2C%20no%20text%2C%20Content%20simple&width=56&height=56&seq=1&orientation=squarish'
          },
          {
            name: '信息完善',
            bgColor: 'blue-100',
            iconUrl: 'https://readdy.ai/api/search-image?query=icon%2C%202.5D%20vector%20illustration%2C%20document%20with%20checkmark%2C%20high-quality%20details%2C%20prominent%20main%20subject%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20light%20blue%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20no%20shadows%2C%20no%20text%2C%20Content%20simple&width=56&height=56&seq=2&orientation=squarish'
          },
          {
            name: '预报到',
            bgColor: 'blue-100',
            iconUrl: 'https://readdy.ai/api/search-image?query=icon%2C%202.5D%20vector%20illustration%2C%20calendar%20with%20checkmark%2C%20high-quality%20details%2C%20prominent%20main%20subject%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20light%20blue%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20no%20shadows%2C%20no%20text%2C%20Content%20simple&width=56&height=56&seq=3&orientation=squarish'
          },
          {
            name: '生源地贷款',
            bgColor: 'blue-100',
            iconUrl: 'https://readdy.ai/api/search-image?query=icon%2C%202.5D%20vector%20illustration%2C%20money%20loan%20document%2C%20high-quality%20details%2C%20prominent%20main%20subject%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20light%20blue%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20no%20shadows%2C%20no%20text%2C%20Content%20simple&width=56&height=56&seq=4&orientation=squarish'
          },
          {
            name: '晚点签到',
            bgColor: 'green-100',
            iconUrl: 'https://readdy.ai/api/search-image?query=icon%2C%202.5D%20vector%20illustration%2C%20evening%20check-in%20document%2C%20high-quality%20details%2C%20prominent%20main%20subject%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20light%20green%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20no%20shadows%2C%20no%20text%2C%20Content%20simple&width=56&height=56&seq=5&orientation=squarish'
          },
          {
            name: '任务反馈',
            bgColor: '#FFF7E6',
            iconUrl: 'https://readdy.ai/api/search-image?query=icon%2C%202.5D%20vector%20illustration%2C%20task%20feedback%20document%2C%20high-quality%20details%2C%20prominent%20main%20subject%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20light%20yellow%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20no%20shadows%2C%20no%20text%2C%20Content%20simple&width=56&height=56&seq=6&orientation=squarish'
          },
          {
            name: '请销假',
            bgColor: 'green-100',
            iconUrl: 'https://readdy.ai/api/search-image?query=icon%2C%202.5D%20vector%20illustration%2C%20leave%20application%20form%2C%20high-quality%20details%2C%20prominent%20main%20subject%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20light%20green%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20no%20shadows%2C%20no%20text%2C%20Content%20simple&width=56&height=56&seq=7&orientation=squarish'
          },
          {
            name: '第二课堂',
            bgColor: 'red-100',
            iconUrl: 'https://readdy.ai/api/search-image?query=icon%2C%202.5D%20vector%20illustration%2C%20book%20with%20number%202%2C%20high-quality%20details%2C%20prominent%20main%20subject%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20light%20red%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20no%20shadows%2C%20no%20text%2C%20Content%20simple&width=56&height=56&seq=8&orientation=squarish'
          },
          {
            name: '校园风光',
            bgColor: 'blue-100',
            iconUrl: 'https://readdy.ai/api/search-image?query=icon%2C%202.5D%20vector%20illustration%2C%20campus%20landscape%20with%20buildings%2C%20high-quality%20details%2C%20prominent%20main%20subject%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20light%20blue%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20no%20shadows%2C%20no%20text%2C%20Content%20simple&width=56&height=56&seq=9&orientation=squarish'
          },
          {
            name: '失物招领',
            bgColor: 'red-100',
            iconUrl: 'https://readdy.ai/api/search-image?query=icon%2C%202.5D%20vector%20illustration%2C%20lost%20and%20found%20items%2C%20high-quality%20details%2C%20prominent%20main%20subject%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20light%20red%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20no%20shadows%2C%20no%20text%2C%20Content%20simple&width=56&height=56&seq=10&orientation=squarish'
          },
          {
            name: '权益维护',
            bgColor: '#FFF7E6',
            iconUrl: 'https://readdy.ai/api/search-image?query=icon%2C%202.5D%20vector%20illustration%2C%20shield%20with%20rights%20protection%2C%20high-quality%20details%2C%20prominent%20main%20subject%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20light%20yellow%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20no%20shadows%2C%20no%20text%2C%20Content%20simple&width=56&height=56&seq=11&orientation=squarish'
          },
          {
            name: '校园指南',
            bgColor: 'green-100',
            iconUrl: 'https://readdy.ai/api/search-image?query=icon%2C%202.5D%20vector%20illustration%2C%20campus%20guide%20map%2C%20high-quality%20details%2C%20prominent%20main%20subject%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20light%20green%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20no%20shadows%2C%20no%20text%2C%20Content%20simple&width=56&height=56&seq=12&orientation=squarish'
          },
          {
            name: '设备识别',
            bgColor: 'red-100',
            iconUrl: 'https://readdy.ai/api/search-image?query=icon%2C%202.5D%20vector%20illustration%2C%20device%20identification%20scanner%2C%20high-quality%20details%2C%20prominent%20main%20subject%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20light%20red%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20no%20shadows%2C%20no%20text%2C%20Content%20simple&width=56&height=56&seq=13&orientation=squarish'
          }
        ]
      };
    },
    methods: {
      handleGridClick(gridItem) {
        if (gridItem.name === '请销假') {
          this.$router.push('/yiban3');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  :where([class^="ri-"])::before {
    content: "\f3c2";
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: #f8f9fa;
    width: 375px;
    margin: 0 auto;
    min-height: 762px;
    position: relative;
  }
  .gradient-header {
    background: linear-gradient(180deg, #4FC3F7 0%, #1E88E5 100%);
    height: 180px;
  }
  .badge {
    position: absolute;
    top: -5px;
    right: -5px;
    min-width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #FF5252;
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;
  }
  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .grid-item p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    font-size: 12px;
    margin-top: 5px;
  }
  </style>