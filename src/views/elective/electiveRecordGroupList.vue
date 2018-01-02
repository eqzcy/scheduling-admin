<template>
  <div class="app-container elective-list-container">
    自由组合
    <el-table :data="autoGroupList" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row
              style="width: 100%">
      ----------
      <el-table-column align="center" label="选课组合" width="165">
        <template slot-scope="scope">
          <span>{{scope.row.subjectCodeGroup.replace('04','政治').replace('05','物理').replace('06','化学')
            .replace('07','历史').replace('08','地理').replace('09','生物')}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="150px" label="学生数">
        <template slot-scope="scope">
          <span>{{scope.row.stuCount}}</span>
        </template>
      </el-table-column>
    </el-table>

    固定时课程节次组合
<!--    <ul id="example-1">
      <li v-for="itemList in electiveStatList">
      <span v-for="item in itemList">
       {{item.times}}-{{item.subjectCode}}: {{item.lesson1}}, {{item.lesson2}}, {{item.lesson3}}, {{item.stuCount}}
      </span>
      </li>
    </ul>-->

    <!--<table v-for="itemList in electiveStatList">
      <tr>
        <th>科目</th>
        <th>组合1</th>
        <th>组合2</th>
        <th>组合3</th>
        <th>总人数</th>
      </tr>
      <tr v-for="item in itemList">
        <td>{{item.subjectCode}}</td>
        <td>{{item.lesson1}}</td>
        <td>{{item.lesson2}}</td>
        <td>{{item.lesson3}}</td>
        <td>{{item.stuCount}}</td>
      </tr>
      </table>-->

    <div v-for="statItemList in electiveStatList">
      <el-table :data="statItemList" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row
                style="width: 100%">
      <el-table-column align="center" label="科目" width="165">
        <template slot-scope="scope">
          <span>{{scope.row.subjectCode.replace('04','政治').replace('05','物理').replace('06','化学')
            .replace('07','历史').replace('08','地理').replace('09','生物')}}</span>
        </template>
      </el-table-column>
        <el-table-column min-width="150px" label="1节班学生数">
          <template slot-scope="scope">
            <span>{{scope.row.lesson1}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="150px" label="2节班学生数">
          <template slot-scope="scope">
            <span>{{scope.row.lesson2}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="150px" label="3节班学生数">
          <template slot-scope="scope">
            <span>{{scope.row.lesson3}}</span>
          </template>
        </el-table-column>
      <el-table-column min-width="150px" label="学生数">
        <template slot-scope="scope">
          <span>{{scope.row.stuCount}}</span>
        </template>
      </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
  import { getAutoGroupList, getElectiveStatList } from '@/api/electiveRecord'
  export default {
    name: 'electiveList',
    components: {},
    data() {
      return {
        autoGroupList: null,
        electiveStatList: null,
        listLoading: true
      }
    },
    created() {
      this.getAutoGroupList()
      this.getElectiveStatList()
    },
    methods: {
      getAutoGroupList() {
        getAutoGroupList(999).then(response => {
          this.autoGroupList = response.data
          this.listLoading = false
        }).catch(err => {
          this.fetchSuccess = false
          console.log(err)
        })
      },
      getElectiveStatList() {
        getElectiveStatList(999).then(response => {
          this.electiveStatList = response.data
          this.listLoading = false
        }).catch(err => {
          this.fetchSuccess = false
          console.log(err)
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .elective-list-container {

  }
</style>
