<template>
  <div class="notice">
    <el-form :v-model="form" v-show="!YuLan">
      <el-form-item>
        <span class="content">标题</span>
        <el-input v-model="form.header" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <span class="content">公告分类</span>
        <el-select v-model="form.type">
          <el-option
            v-for="item in types"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <quill-editor ref="myTextEditor"
        :content="form.content"
        v-model="form.content"
        :options="editorOption"
        @change="onEditorChange($event)">
      </quill-editor>
      <el-button type="primary" @click="handleReset()" class="button">重 置</el-button>
      <el-button type="primary" @click="handleSubmit()" class="button">保 存</el-button>
      <el-button type="primary" @click="YuLan = !YuLan" class="button">文章预览</el-button>
    </el-form>

    <el-card class="box-card" v-show="YuLan">
      <h2>{{form.header}}</h2>
      <h4>{{form.createdAt.slice(0,10)}}  {{form.createdAt.slice(11,19)}}</h4>
      <div v-html="form.content"></div>
      <el-button type="primary" @click="YuLan = !YuLan" class="button">返 回</el-button>
    </el-card>
  </div>
</template>

<style>
.notice{
  overflow-y: scroll;
  height: 600px;
}
.button{
  margin-top: 20px!important;
  margin-bottom: 40px;
}
</style>

<script>
import { quillEditor } from 'vue-quill-editor'
import store from '../../store'
export default {
  name:'Notice',
  components: {
    quillEditor
  },
  data () {
    return {
      form:{
        content: '<h2>I am Example</h2>',
        createdAt:'',
      },
      YuLan:false,
      id:'',
      types:[
        {
          label:'焦点新闻',
          value:'焦点新闻'
        },{
          label:'卫生保健',
          value:'卫生保健'
        },{
          label:'社区活动',
          value:'社区活动'
        },{
          label:'园所介绍',
          value:'园所介绍'
        },{
          label:'每日餐饮',
          value:'每日餐饮'
        },{
          label:'规章制度',
          value:'规章制度'
        },{
          label:'缴费通知',
          value:'缴费通知'
        },{
          label:'幼儿园公告',
          value:'幼儿园公告'
        },{
          label:'家园共育',
          value:'家园共育'
        },{
          label:'早教基地',
          value:'早教基地'
        },{
          label:'其他',
          value:'其他'
        }
      ],
      editorOption: {
       modules: {
        syntax: {
            highlight: text => hljs.highlightAuto(text).value
        },
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{'header': 1}, {'header': 2}],               // custom button values
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
            [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
            [{'direction': 'rtl'}],                         // text direction

            [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
            [{'header': [1, 2, 3, 4, 5, 6, false]}],

            [{'color': []}, {'background': []}],          // dropdown with defaults from theme
            [{'font': []}],
            [{'align': []}],
            ['link', 'image', 'formula']//去除video即可
        ]
      },
        placeholder: '编辑内容...'
      }
    }
  },
  created () {
    this.id = this.$store.state.count;
    console.log(this.id);
    if(this.id != -1){
      this.form.id = this.$store.state.count;
      this.$store.state.count = -1;
      var url = 'http://127.0.0.1:3000/notice/findById'
      var vm = this;
      $.getJSON(url,{id:this.form.id},function(data){
        vm.form = data;
      })
    }
  },
  methods: {
    onEditorBlur(editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange({ editor, html, text }) {
      // console.log('editor change!', editor, html, text)
      this.content = html
    },
    handleReset(){
      this.content = null;
    },
    handleSubmit(){
      if(this.id != -1){
        var url = 'http://127.0.0.1:3000/notice/update';
        var vm = this;
        $.post(url,vm.form,function(data){
          if(data.answer == 'success'){
            vm.$message({
              type:'success',
              message:'成功修改一条数据'
            })
            vm.$router.push({path:'/teacher/notice'});
          }else{
            vm.$message({
              type:'error',
              message:'操作失败'
            })
          }
        })
      }else{
        var url = 'http://127.0.0.1:3000/notice/save';
        var vm = this;
        delete vm.form.updatedAt;
        vm.form.ownerId = 1;
        $.post(url,vm.form,function(data){
          if(data.answer == 'success'){
            vm.$message({
              type:'success',
              message:'成功保存一条数据'
            })
            vm.$router.push({path:'/teacher/notice'});
          }else{
            vm.$message({
              type:'error',
              message:'操作失败'
            })
          }
        })
      }
    }
  }
}
</script>


