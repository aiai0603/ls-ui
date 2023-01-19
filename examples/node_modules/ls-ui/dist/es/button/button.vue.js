import { defineComponent as i, useAttrs as p, computed as m, openBlock as d, createElementBlock as a, mergeProps as b, unref as s, renderSlot as f } from "vue";
import "./style/index.css";
import { buttonProps as k } from "./types.js";
const z = /* @__PURE__ */ i({
  name: "button",
  props: k,
  emits: ["click"],
  setup(n, { emit: r }) {
    const t = n;
    console.log(t);
    const o = p();
    console.log(o);
    const l = m(() => ({
      "ls-button": !0,
      [`ls-button-${t.type}`]: t.type,
      "is-round": t.round,
      "is-disabled": t.disabled,
      [`ls-button-${t.size}`]: t.size
    })), u = () => {
      r("click", 11);
    };
    return (c, e) => (d(), a("button", b({ class: s(l) }, s(o), {
      onClick: e[0] || (e[0] = (y) => u())
    }), [
      f(c.$slots, "default")
    ], 16));
  }
});
export {
  z as default
};
