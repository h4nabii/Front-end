Vue.component("sum-comp", {
    props: ["sum"], template: `
    <div class="sum" id="sum">
      <h2>结算</h2>
      <div class="total">
        <span>合计</span>
        <span>￥{{ sum }}</span>
      </div>
      <button id="pay">结算</button>
    </div>
    `,
});
