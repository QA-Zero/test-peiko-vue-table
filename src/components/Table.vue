<template>
  <div class="table">
    <div class="table-header row">
      <div class="cell stock">Stock</div>
      <div class="cell current">Current</div>
      <div class="cell change">Change</div>
    </div>
    <template v-if="isLoading">
      <div class="table-body loading">Loading...</div>
    </template>
    <template v-else>
      <div v-if="tableData.length" class="table-body filled">
        <div
          v-for="row in tableData"
          :key="row.idx"
          class="row"
        >
          <div class="cell stock">{{ row.stock }}</div>
          <div class="cell current">{{ row.current }}</div>
          <div :class="['cell', 'change', row.change >= 0 ? 'green' : 'red']">
            {{ row.change >= 0 ? `+${row.change}` : row.change }}
          </div>
        </div>
      </div>
      <div v-else class="table-body empty">No data</div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    tableData: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>

<style lang="scss" scoped>
.table {
  min-height: 100px;
  width: 450px;
  border: 1px solid #efefef;
  box-sizing: border-box;
  color: #2c3e50;
  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-style: normal;
  letter-spacing: 0.05em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .row {
    height: 50px;
    width: 100%;
    background-color: #fff;
    font-weight: 400;
    border: 1px solid #efefef;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    &.table-header {
      background-color: #f5f5f5;
      font-weight: 600;
    }
  }

  .cell {
    height: 100%;
    width: 150px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 25px;

    &.stock {
      justify-content: flex-start;
    }

    &.current {
      justify-content: center;
    }

    &.change {
      justify-content: flex-end;
    }

    &.green {
      color: #b3d295;
    }

    &.red {
      color: #e4a5a3;
    }
  }

  .table-body {
    min-height: 50px;

    &.loading,
    &.empty {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
