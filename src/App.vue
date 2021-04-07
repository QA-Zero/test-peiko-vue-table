<template>
  <div id="app">
    <Button
      class="btn-position"
      @click="getData"
    >
      Get data
    </Button>
    <Table
      :isLoading="isLoading"
      :tableData="tableData"
    />
  </div>
</template>

<script>

import getTableData from './api/index';
import Button from './components/Button';
import Table from './components/Table';

export default {
  name: 'App',
  components: { Button, Table },
  data() {
    return {
      isLoading: false,
      tableData: [],
    }
  },
  methods: {
    getData() {
      this.isLoading = true;

      getTableData().then(
        ({ isSuccess, result }) => {
          if (isSuccess) this.tableData = this.getRowsFromColumns(result);
          else this.tableData = [];

          this.isLoading = false;
        }
      )
    },

    getRowsFromColumns(table) {
      return table.stocks
        .reduce(
          (res, current, idx) => {
            res.push({
              idx,
              stock: table.stocks[idx],
              current: table.current[idx].toFixed(2),
              change: (table.current[idx] - table.start[idx]).toFixed(2),
            })

            return res;
          },
          []
        )
        .sort((current, next) => current.stock.localeCompare(next.stock));
    },
  },
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  width: calc(100% - 2*100px);
  padding: 0 100px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn-position {
    margin-top: 60px;
    margin-bottom: 30px;
  }
}
</style>

<style>
body {
  margin: 0;
}
</style>
