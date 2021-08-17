<template>
  <div class="checkboxContainer">
    <label for="">All</label>
    <input
      @click="updateFilter('all')"
      type="checkbox"
      :class="{ active: current === 'all' }"
    />

    <label for="">Responded</label>
    <input
      @click="updateFilter('responded')"
      type="checkbox"
      :class="{ active: current === 'responded' }"
    />

    <label for="">No Response</label>
    <input
      @click="updateFilter('noResponse')"
      type="checkbox"
      :class="{ active: current === 'noResponse' }"
    />
  </div>
</template>

<script>
export default {
  props: ['current'],
  methods: {
    updateFilter(by) {
      this.$emit('filterChange', by);
    },
  },
};
</script>

<style>
.checkboxContainer {
  width: 80%;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 800px) {
  .checkboxContainer label {
    font-size: 0.7rem;
  }

  .checkboxContainer input {
    height: 20px;
  }
}

.checkboxContainer label {
  width: 50%;
}

.checkboxContainer input {
  padding: 0;
}
</style>
