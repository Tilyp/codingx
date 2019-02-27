<template>
    <ui-table url="/account/getPage" ref="userTable" :pageable="true" :page-size="10"
              :search-form="searchForm" @selection-change="handleSelectionChange">
        <template slot="searchForm">
            <el-form-item label="姓名">
                <el-input v-model="searchForm.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </template>
        <template slot="columns">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="createTime" label="日期" sortable width="150"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <!--<el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
                </template>
            </el-table-column>
        </template>
    </ui-table>
</template>

<script>
    import UiTable from '../components/UITable.vue';
    export default {
        name: 'uiTableDemo',
        data() {
            return {
                searchForm:{}
            }
        },
        components:{
            UiTable
        },
        methods:{
            handleSelectionChange(val) {
                console.log(val+"-----------------");
            },
            search() {
                this.$refs.userTable.getData();
            },
            handleEdit(){
                alert(1)
            }
        }
    }

</script>
