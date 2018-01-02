<template>
  <div class="app-container elective-list-container">
    <div>排课管理</div>
    <el-table :data="scheduleList" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row
              style="width: 100%">

      <el-table-column align="center" label="ID" width="65">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="名称" width="165">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="150px" label="所属教学班配置">
        <template slot-scope="scope">
          <span>{{scope.row.teachingClassSettingId}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="150px" label="每周天数">
        <template slot-scope="scope">
          <span>{{scope.row.days}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="150px" label="每天课程数">
        <template slot-scope="scope">
          <span>{{scope.row.lessons}}</span>
        </template>
      </el-table-column>
    </el-table>

    <div v-show="!listLoading" class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.pageNum"
                     :page-sizes="[10,20,30, 50]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { getScheduleSettingList } from '@/api/schedule'
  export default {
    name: 'scheduleList',
    components: {},
    data() {
      return {
        scheduleList: null,
        total: null,
        listLoading: true,
        listQuery: {
          pageNum: 1,
          pageSize: 20
        }
      }
    },
    created() {
      this.getScheduleSettingList()
    },
    methods: {
      getScheduleSettingList() {
        getScheduleSettingList(this.listQuery).then(response => {
          this.scheduleList = response.data.list
          this.total = response.data.total
          this.listLoading = false
        }).catch(err => {
          this.fetchSuccess = false
          console.log(err)
        })
      },
      handleSizeChange(val) {
        this.listQuery.pageSize = val
        this.getScheduleSettingList()
      },
      handleCurrentChange(val) {
        this.listQuery.pageNum = val
        this.getScheduleSettingList()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .elective-list-container {

  }
</style>
