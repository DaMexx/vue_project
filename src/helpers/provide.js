import { inject } from "vue";
export const injectName = inject("name");

function obj() {
  let a = {
    b: "sdaaasd",
    c: () => this.b,
  };
}