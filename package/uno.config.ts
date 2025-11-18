// uno.config.ts
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  include: ["./src/components/Heatmap.svelte"], // 只扫描这个组件
});
