<template>
    <tree-table :data="data" :columns="columns">
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column label="操作" width="260">
            <template scope="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="small" type="primary" @click="handleAdd(scope.$index,scope.row)">添加子菜单</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </tree-table>
</template>
<script>
    import TreeTable from '../components/TreeTable.vue';
    export default {
        data () {
            return {
                data: [],
                columns:[{
                    value:'name',
                    text:"姓名"
                }]
            }
        },
        components:{
            TreeTable
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                var d = [{
                    id: 1,
                    parentId: 0,
                    name: '测试1',
                    age: 18,
                    sex: '男',
                    children: [
                        {
                            id: 2,
                            parentId: 1,
                            name: '测试2',
                            age: 22,
                            sex: '男'
                        }
                    ]
                },
                    {
                        id: 3,
                        parentId: 0,
                        name: '测试3',
                        age: 23,
                        sex: '女',
                        children: [
                            {
                                id: 4,
                                parentId: 3,
                                name: '测试4',
                                age: 22,
                                sex: '男'
                            },
                            {
                                id: 5,
                                parentId: 3,
                                name: '测试5',
                                age: 25,
                                sex: '男'
                            },
                            {
                                id: 6,
                                parentId: 3,
                                name: '测试6',
                                age: 26,
                                sex: '女',
                                children: [
                                    {
                                        id: 7,
                                        parentId: 6,
                                        name: '测试7',
                                        age: 27,
                                        sex: '男'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 18,
                        parentId: 0,
                        name: '测试8',
                        age: 18,
                        sex: '男'
                    }
                ];
                this.data = d;
            },
            handleAdd(index,row){

            },
            handleEdit(index,row){

            },
            handleDelete(index,row){

            }
        }
    }
</script>
