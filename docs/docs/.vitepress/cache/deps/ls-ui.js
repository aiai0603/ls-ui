// node_modules/ls-ui/node_modules/@ls-ui/utils/index.ts
var withInstall = (main, extra) => {
  main.install = app => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};

// node_modules/ls-ui/src/button/index.ts
import Button from 'C:/Users/10168/Desktop/ls-ui/docs/node_modules/ls-ui/src/button/button.vue';
var LsButton = withInstall(Button);
var button_default = LsButton;

// node_modules/ls-ui/src/index.ts
var src_default = {
  LsButton: button_default
};

// node_modules/ls-ui/package.json
var version = '1.0.1';

// node_modules/ls-ui/index.ts
var install = function (app) {
  Object.entries(src_default).forEach(([key, value]) => {
    app.component(key, value);
  });
};
var ls_ui_default = {
  install,
  version
};
export { ls_ui_default as default };
//# sourceMappingURL=ls-ui.js.map
