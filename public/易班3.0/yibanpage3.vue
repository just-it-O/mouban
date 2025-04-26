<template>
    <div>
      <div class="fixed top-0 w-full bg-primary text-white h-12 flex items-center justify-between px-4 z-10">
        <div class="w-8 h-8 flex items-center justify-center cursor-pointer" @click="$router.push('/yiban2')">
          <i class="ri-arrow-left-s-line ri-lg"></i>
        </div>
        <div class="text-center text-lg font-medium">请销假</div>
        <div class="w-8 h-8 flex items-center justify-center cursor-pointer">
          <i class="ri-more-line ri-lg"></i>
        </div>
      </div>
      <div class="pt-12 pb-16">
        <div class="bg-white flex items-center justify-between px-5 py-4 cursor-pointer">
          <div class="flex items-center">
            <div class="w-6 h-6 flex items-center justify-center mr-2 text-gray-500">
              <i class="ri-file-list-line"></i>
            </div>
            <span class="text-gray-700">我的申请</span>
          </div>
          <div class="w-5 h-5 flex items-center justify-center text-gray-400">
            <i class="ri-arrow-right-s-line"></i>
          </div>
        </div>
        <div class="mt-3 px-4">
          <div v-for="(record, index) in leaveRecords" :key="index" class="bg-white rounded-md mb-4 overflow-hidden">
            <div class="p-4">
              <div class="flex justify-between items-center mb-3">
                <div class="flex items-center" @click="handleMyLeaveClick">
                  <span class="text-gray-700 font-medium">我的请假</span>
                  <span class="status-tag">{{ record.status }}</span>
                </div>
                <span class="text-gray-500 text-sm">{{ record.date }}</span>
              </div>
              <div class="text-gray-600 text-sm mb-2">
                开始时间: {{ record.startTime }}
              </div>
              <div class="text-gray-600 text-sm mb-3 flex justify-between">
                <div>结束时间: {{ record.endTime }}</div>
                <div class="w-5 h-5 flex items-center justify-center text-gray-400">
                  <i class="ri-arrow-right-s-line"></i>
                </div>
              </div>
              <div :class="['status-tag', record.approvalStatus === '审批通过'? 'status-approved' : 'status-canceled']">
                {{ record.approvalStatus }}
              </div>
              <div v-if="record.canCancel" class="border-t border-gray-100 mt-3 pt-3 flex justify-center">
                <button class="text-primary text-sm cursor-pointer!rounded-button" @click="handleCancel(record)">
                  销假
                </button>
              </div>
              <div v-if="record.canceled" class="border-t border-gray-100 mt-3 pt-3 flex justify-center text-gray-500 text-sm">
                已于 {{ record.cancelTime }} 销假
                <div class="w-5 h-5 flex items-center justify-center ml-1 text-primary">
                  <i class="ri-check-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fixed bottom-0 w-full bg-primary text-white h-14 flex items-center justify-center cursor-pointer" @click="handleApplyLeave">
        <span class="font-medium">请假申请</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'YibanPage3',
    data() {
      return {
        leaveRecords: [
          {
            status: '离校',
            date: '2025-04-25',
            startTime: '',
            endTime: '',
            approvalStatus: '审批通过',
            canCancel: true,
            canceled: false
          },
          {
            status: '离校',
            date: '2025-04-05',
            startTime: '2025-04-05 10:00:00',
            endTime: '2025-04-05 16:30:00',
            approvalStatus: '审批通过',
            canCancel: false,
            canceled: true,
            cancelTime: '2025-04-10 09:01'
          },
          {
            status: '离校',
            date: '2025-03-28',
            startTime: '2025-03-28 08:30:00',
            endTime: '2025-03-28 17:30:00',
            approvalStatus: '审批通过',
            canCancel: false,
            canceled: true,
            cancelTime: '2025-03-29 08:15'
          }
        ]
      };
    },
    methods: {
      handleMyLeaveClick() {
        this.$router.push('/fake');
      },
      handleCancel(record) {
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        record.canCancel = false;
        record.canceled = true;
        record.cancelTime = formattedDate;
      },
      handleApplyLeave() {
        console.log('跳转到请假申请页面');
      }
    }
  };
  </script>
  
  <style scoped>
    :where([class^="ri-"]) {
      font-size: inherit;
    }
  </style>