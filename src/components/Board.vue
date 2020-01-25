<template>
  <div>
    Board
    <div>bid: {{ bid }}</div>
    <div>
      Board List:
      <ul>
        <li>
          <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
        </li>
        <li>
          <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
        </li>
      </ul>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
	data() {
		return {
			bid: 0,
		};
	},
	created() {
		this.bid = this.$route.params.bid;
	},
};
</script>

<style>
</style>ㅐㅍ