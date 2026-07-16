// vite.config.ts
import angular from "file:///C:/Users/User/Downloads/IQIP_Project-main/IQIP_Project-main/node_modules/@analogjs/vite-plugin-angular/src/index.js";
import path from "path";
import { defineConfig } from "file:///C:/Users/User/Downloads/IQIP_Project-main/IQIP_Project-main/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "C:\\Users\\User\\Downloads\\IQIP_Project-main\\IQIP_Project-main";
var vite_config_default = defineConfig(() => {
  return {
    base: "/IQIP_Project/",
    plugins: [
      angular({
        jit: true
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, ".")
      }
    },
    server: {
      port: 3e3,
      host: "0.0.0.0",
      hmr: process.env.DISABLE_HMR !== "true",
      watch: process.env.DISABLE_HMR === "true" ? null : {}
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERvd25sb2Fkc1xcXFxJUUlQX1Byb2plY3QtbWFpblxcXFxJUUlQX1Byb2plY3QtbWFpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEb3dubG9hZHNcXFxcSVFJUF9Qcm9qZWN0LW1haW5cXFxcSVFJUF9Qcm9qZWN0LW1haW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1VzZXIvRG93bmxvYWRzL0lRSVBfUHJvamVjdC1tYWluL0lRSVBfUHJvamVjdC1tYWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IGFuZ3VsYXIgZnJvbSAnQGFuYWxvZ2pzL3ZpdGUtcGx1Z2luLWFuZ3VsYXInO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBiYXNlOiAnL0lRSVBfUHJvamVjdC8nLFxuXG4gICAgcGx1Z2luczogW1xuICAgICAgYW5ndWxhcih7XG4gICAgICAgIGppdDogdHJ1ZSxcbiAgICAgIH0pLFxuICAgIF0sXG5cbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuJyksXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHBvcnQ6IDMwMDAsXG4gICAgICBob3N0OiAnMC4wLjAuMCcsXG4gICAgICBobXI6IHByb2Nlc3MuZW52LkRJU0FCTEVfSE1SICE9PSAndHJ1ZScsXG4gICAgICB3YXRjaDogcHJvY2Vzcy5lbnYuRElTQUJMRV9ITVIgPT09ICd0cnVlJyA/IG51bGwgOiB7fSxcbiAgICB9LFxuICB9O1xufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUErVyxPQUFPLGFBQWE7QUFDblksT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBRjdCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYSxNQUFNO0FBQ2hDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUVOLFNBQVM7QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxHQUFHO0FBQUEsTUFDbEM7QUFBQSxJQUNGO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLLFFBQVEsSUFBSSxnQkFBZ0I7QUFBQSxNQUNqQyxPQUFPLFFBQVEsSUFBSSxnQkFBZ0IsU0FBUyxPQUFPLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
