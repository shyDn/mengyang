<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>hahahaha</h2>
    <a-date-picker />
    <h2 @click="goto('test')">modify later</h2>
    <a-tree-select
      showSearch
      style="width: 300px"
      :value="value"
      :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
      placeholder='Please select'
      :treeDefaultExpandedKeys="treeExpandedKeys"
      allowClear
      @change="onChange">
      <a-tree-select-node value='parent 0' title='公司123' key='1'>
        <a-tree-select-node value='parent 1' title='分区123456789' key='2'>
          <a-tree-select-node value='child 1-0' title='部门123456789' key='3'>
            <a-tree-select-node value='child 1-0-0' title='科室123456789' key='4'>
              <a-tree-select-node value='child 1-0-0-0' title='办公室123456789' key='5'>
                <a-tree-select-node value='child 1-0-0-0-0' title='项目组123456789' key='6'>
                  <a-tree-select-node value='child 1-0-0-0-0-0' title='工程队1234567789' key='7'>
                    <a-tree-select-node value='child 1-0-0-0-0-0-0' title='支队部123456789' key='8'>
                      <a-tree-select-node value='child 1-0-0-0-0-0-0-0' title='施工单位123456789' key='9'>
                        <a-tree-select-node value='child 1-0-0-0-0-0-0-0' title='小分队123456789' key='10'/>
                        <a-tree-select-node value='child 1-0-0-0-0-0-0-1' title='小分队23456789' key='11'/>
                      </a-tree-select-node>
                      <a-tree-select-node value='child 1-0-0-0-0-0-0-1' title='施工单位234567890' key='12'>
                      </a-tree-select-node>
                    </a-tree-select-node>
                    <a-tree-select-node value='child 1-0-0-0-0-0-1' title='支队部234567890' key='13'/>
                  </a-tree-select-node>
                  <a-tree-select-node value='child 1-0-0-0-0-1' title='工程队234567890' key='14'>
                  </a-tree-select-node>
                </a-tree-select-node>
                <a-tree-select-node value='child 1-0-0-0-1' title='项目组234567890' key='15'>
                </a-tree-select-node>
              </a-tree-select-node>
              <a-tree-select-node value='child 1-0-0-1' title='办公室234567890' key='16' />
            </a-tree-select-node>
          </a-tree-select-node>
          <a-tree-select-node value='child 1-0-1' title='部门234567890' key='17' />
        </a-tree-select-node>
        <a-tree-select-node value='parent 1-1' title='分区234567890' key='18'>
          <a-tree-select-node value='child 1-1-0' title="部门only1" key='19'>
            <!-- <b style="color: #08c" slot="title">sss</b> -->
          </a-tree-select-node>
        </a-tree-select-node>
      </a-tree-select-node>
    </a-tree-select>

    <a-tree
      style="width: 50px"
      @expand="onExpand"
      :expandedKeys="expandedKeys"
      @select="onSelect"
      :treeNodes="treeData"
    />
    <span>hahahahahahahahahhaha</span>
    <ul>
      <li v-for="(item, index) of items" :key="item.id">{{index}}: {{item.text}}</li>
    </ul>
  </div>
</template>

<script>
import { DatePicker, TreeSelect, Tree } from 'vue-antd-ui';
const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          {
            title: '0-0-0-0', key: '0-0-0-0',
            children: [
              { title: '0-0-1-0-0', key: '0-0-1-0-0' },
              { title: '0-0-1-1-1', key: '0-0-1-1-1' },
              { title: '0-0-1-2-2', key: '0-0-1-2-2' },
            ]
          },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      }
    ]},
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ]
    },
    {
      title: '0-2',
      key: '0-2',
    }
  ]
export default {
  name: 'Dashboard',
  components: {
    'a-date-picker': DatePicker,
    'a-tree-select': TreeSelect,
    'a-tree-select-node': TreeSelect.TreeNode,
    'a-tree': Tree
  },
  methods: {
    goto(p) {
      console.log(p);
      this.$router.push('/login')
      console.log(this.$router);
    },
    onChange(value) {
      console.log(arguments)
      this.value = value;
    },
    onExpand (expandedKeys) {
      console.log('onExpand', arguments)
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },
    onCheck (checkedKeys) {
      console.log('onCheck', checkedKeys)
      this.checkedKeys = checkedKeys
    },
    onSelect (selectedKeys, info) {
      console.log('onSelect', info)
      this.selectedKeys = selectedKeys
    },
  },
  mounted() {
    console.log(this.$route.query);
  },
  data () {
    return {
      treeExpandedKeys: ['child 1-0-0'],
      expandedKeys: ['0-0-0'],
      treeData,
      value: undefined,
      msg: 'This is Dash Board Page',
      items: [
        {text: 'text1', id: 1},{text: 'text2', id: 2},{text: 'text3', id: 3}, {text: 'text4', id: 4},{text: 'text5', id: 5},
        {text: 'text6', id: 6},{text: 'text7', id: 7},{text: 'text8', id: 8}, {text: 'text9', id: 9},{text: 'text10', id: 10},
        {text: 'text11', id: 11},{text: 'text12', id: 12},{text: 'text13', id: 13},{text: 'text14', id: 14}
      ]
    }
  }
}
</script>

<style scoped lang="scss" src"./dashboard.scss">
</style>

