import Tv, { effectScope as Rl, ref as we, markRaw as Il, toRaw as Ml, isRef as Ri, isReactive as gs, toRef as Rv, hasInjectionContext as Iv, inject as Mv, watch as Qr, reactive as Lv, getCurrentScope as Ll, onScopeDispose as Pl, nextTick as vs, toRefs as Pv, computed as At, defineComponent as ni, openBlock as L, createElementBlock as V, createElementVNode as j, Fragment as Ke, renderList as hr, toDisplayString as ie, resolveComponent as Ft, normalizeClass as pn, renderSlot as fr, createBlock as Oe, createCommentVNode as pe, unref as Q, onMounted as Nl, readonly as Nv, getCurrentInstance as Fv, shallowRef as Bv, withModifiers as Te, resolveDirective as $a, withDirectives as wt, createVNode as ue, createTextVNode as ut, withCtx as _e, useSlots as Uv, Transition as Ba, withKeys as $v, vModelText as zv, TransitionGroup as Fl, normalizeStyle as Wv } from "vue";
var Hv = !1, Bl = { NVM_RC_VERSION: "", npm_package_dependencies__vueuse_core: "^10.1.2", npm_package_devDependencies_postcss_import: "^16.1.0", TERM_PROGRAM: "vscode", NODE: "/usr/local/bin/node", INIT_CWD: "/Users/stepanenko/Sites/_packages/nova-filemanager", _P9K_TTY: "/dev/ttys013", NVM_CD_FLAGS: "-q", npm_config_version_git_tag: "true", TERM: "xterm-256color", SHELL: "/bin/zsh", npm_package_devDependencies_vite: "^5.2.6", npm_package_dependencies__types_uuid: "^9.0.2", TMPDIR: "/var/folders/1d/_b63712j4hgbbsvgxrsjsqj80000gn/T/", npm_config_global_prefix: "/Users/stepanenko/.npm-global", npm_package_scripts_lint: "eslint resources/js --fix --ext js,vue,ts", npm_config_init_license: "MIT", npm_config_email: "stpnnk.artem@gmail.com", TERM_PROGRAM_VERSION: "1.87.2", npm_package_devDependencies__vitejs_plugin_vue: "^5.0.4", npm_package_scripts_dev: "NODE_ENV=development vite build --watch", ZDOTDIR: "/Users/stepanenko", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", npm_package_scripts_nova_install: "npm --prefix='./vendor/laravel/nova' i", COLOR: "1", npm_config_noproxy: "", npm_package_private: "true", npm_config_registry: "https://registry.yarnpkg.com", npm_config_local_prefix: "/Users/stepanenko/Sites/_packages/nova-filemanager", HERD_PHP_83_INI_SCAN_DIR: "/Users/stepanenko/Library/Application Support/Herd/config/php/83/", ZSH: "/Users/stepanenko/.oh-my-zsh", npm_package_readmeFilename: "README.md", NVM_DIR: "/Users/stepanenko/Library/Application Support/Herd/config/nvm", PHP_INI_SCAN_DIR: "/Users/stepanenko/Library/Application Support/Herd/config/php/:/Users/stepanenko/Library/Application Support/Herd/config/php/:", USER: "stepanenko", npm_package_description: "[![Latest Version on Packagist](https://img.shields.io/packagist/v/stepanenko3/nova-filemanager.svg?style=flat-square)](https://packagist.org/packages/stepanenko3/nova-filemanager) [![Total Downloads](https://img.shields.io/packagist/dt/stepanenko3/nova-filemanager.svg?style=flat-square)](https://packagist.org/packages/stepanenko3/nova-filemanager) [![License](https://poser.pugx.org/stepanenko3/nova-filemanager/license)](https://packagist.org/packages/stepanenko3/nova-filemanager)", npm_package_devDependencies_filesize: "^10.1.1", LS_COLORS: "di=1;36:ln=35:so=32:pi=33:ex=31:bd=34;46:cd=34;43:su=30;41:sg=30;46:tw=30;42:ow=30;43", npm_package_license: "MIT", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/stepanenko/.npm-global/etc/npmrc", npm_package_exports___import: "./dist/js/package.js", npm_package_devDependencies__inertiajs_inertia: "^0.11.1", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.goxGzExCfF/Listeners", npm_package_dependencies_lodash: "^4.17.21", npm_package_scripts_dev_package: "NODE_ENV=development LIB=package vite build --watch", __CF_USER_TEXT_ENCODING: "0x1F5:0:0", npm_package_devDependencies_postcss: "^8.4.38", npm_execpath: "/usr/local/lib/node_modules/npm/bin/npm-cli.js", HERD_PHP_82_INI_SCAN_DIR: "/Users/stepanenko/Library/Application Support/Herd/config/php/82/", PAGER: "less", npm_package_module: "./dist/js/package.js", LSCOLORS: "Gxfxcxdxbxegedabagacad", npm_package_scripts_build_tool: "LIB_NAME=tool vite build", PATH: "/var/folders/1d/_b63712j4hgbbsvgxrsjsqj80000gn/T/yarn--1711547628697-0.13888073790336275:/Users/stepanenko/Sites/_packages/nova-filemanager/node_modules/.bin:/Users/stepanenko/.config/yarn/link/node_modules/.bin:/Users/stepanenko/.npm-global/bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/Users/stepanenko/Sites/_packages/nova-filemanager/node_modules/.bin:/Users/stepanenko/Sites/_packages/node_modules/.bin:/Users/stepanenko/Sites/node_modules/.bin:/Users/stepanenko/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/stepanenko/Library/Application Support/Herd/bin/:/Users/Shared/DBngin/mysql/8.0.27/bin:~/.yarn/bin:~/.config/yarn/global/node_modules/.bin:/usr/local/sbin:~/.npm-global/bin:/usr/local/bin:/usr/local/sbin:~/bin:/usr/bin:/bin:/usr/sbin:/sbin:~/.composer/vendor/bin", npm_config_argv: '{"remain":[],"cooked":["run","build:package"],"original":["build:package"]}', npm_package_devDependencies_uuid: "^9.0.1", npm_package_json: "/Users/stepanenko/Sites/_packages/nova-filemanager/package.json", _: "/Users/stepanenko/Sites/_packages/nova-filemanager/node_modules/.bin/vite", npm_package_dependencies_vue: "^3.4.21", npm_config_userconfig: "/Users/stepanenko/.npmrc", npm_config_init_module: "/Users/stepanenko/.npm-init.js", USER_ZDOTDIR: "/Users/stepanenko", __CFBundleIdentifier: "com.microsoft.VSCode", npm_package_devDependencies_md5: "^2.2.1", npm_command: "run-script", PWD: "/Users/stepanenko/Sites/_packages/nova-filemanager", npm_package_devDependencies_tailwindcss: "^3.4.1", LIB_NAME: "package", VSCODE_NONCE: "4016f3ea-90ac-47c8-a8f5-5b9fb646038b", npm_lifecycle_event: "build:package", EDITOR: "vi", P9K_SSH: "0", P9K_TTY: "old", LANG: "en_US.UTF-8", npm_package_name: "", npm_package_dependencies_autoprefixer: "^10.4.14", npm_config_progress: "", npm_package_devDependencies_sass: "^1.72.0", npm_package_scripts_build: "yarn build:tool && yarn build:package", npm_config_version_commit_hooks: "true", npm_config_npm_version: "10.2.3", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_package_dependencies__pqina_pintura: "^8.60.2", npm_config_username: "stepanenko3", npm_config_bin_links: "true", npm_config_node_gyp: "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_main: "./dist/js/tool.js", XPC_SERVICE_NAME: "0", npm_package_version: "", VSCODE_INJECTION: "1", npm_package_dependencies_pinia: "^2.1.7", SHLVL: "3", HOME: "/Users/stepanenko", npm_package_type: "module", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", npm_config_save_prefix: "^", npm_config_strict_ssl: "true", npm_config_version_git_message: "v%s", npm_config_cache: "/Users/stepanenko/.npm", LESS: "-R", LOGNAME: "stepanenko", YARN_WRAP_OUTPUT: "false", npm_package_scripts_format: "prettier --write 'resources/js/**/*.{css,js,vue,ts}'", npm_lifecycle_script: "LIB_NAME=package vite build", npm_package_exports___require: "./dist/js/package.js", VSCODE_GIT_IPC_HANDLE: "/var/folders/1d/_b63712j4hgbbsvgxrsjsqj80000gn/T/vscode-git-cfef0277bb.sock", npm_package_scripts_package: "npm run format && npm run lint && npm run build", npm_config_user_agent: "yarn/1.22.19 npm/? node/v20.10.0 darwin x64", npm_package_devDependencies__vue_compiler_sfc: "^3.4.21", npm_package_scripts_check_format: "prettier --list-different 'resources/**/*.{css,js,vue,ts}'", npm_config_version_git_sign: "", npm_config_ignore_scripts: "", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", HERD_PHP_74_INI_SCAN_DIR: "/Users/stepanenko/Library/Application Support/Herd/config/php/74/", npm_package_dependencies__types_lodash: "^4.14.195", npm_package_devDependencies__types_node: "^20.11.30", npm_package_dependencies_resumablejs: "^1.1.0", npm_package_dependencies__pqina_vue_pintura: "^9.0.1", npm_package_files_0: "dist/*", npm_package_devDependencies_vue_cropperjs: "^5.0.0", npm_config_init_version: "1.0.0", npm_config_ignore_optional: "", npm_node_execpath: "/usr/local/bin/node", npm_config_prefix: "/Users/stepanenko/.npm-global", COLORTERM: "truecolor", npm_package_scripts_build_package: "LIB_NAME=package vite build", npm_config_version_tag_prefix: "v", NODE_ENV: "production" };
let Ul;
const za = (s) => Ul = s, $l = (
  /* istanbul ignore next */
  Symbol()
);
function ds(s) {
  return s && typeof s == "object" && Object.prototype.toString.call(s) === "[object Object]" && typeof s.toJSON != "function";
}
var Ti;
(function(s) {
  s.direct = "direct", s.patchObject = "patch object", s.patchFunction = "patch function";
})(Ti || (Ti = {}));
function ay() {
  const s = Rl(!0), p = s.run(() => we({}));
  let i = [], h = [];
  const C = Il({
    install(W) {
      za(C), C._a = W, W.provide($l, C), W.config.globalProperties.$pinia = C, h.forEach((B) => i.push(B)), h = [];
    },
    use(W) {
      return !this._a && !Hv ? h.push(W) : i.push(W), this;
    },
    _p: i,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: s,
    _s: /* @__PURE__ */ new Map(),
    state: p
  });
  return C;
}
const zl = () => {
};
function El(s, p, i, h = zl) {
  s.push(p);
  const C = () => {
    const W = s.indexOf(p);
    W > -1 && (s.splice(W, 1), h());
  };
  return !i && Ll() && Pl(C), C;
}
function Kr(s, ...p) {
  s.slice().forEach((i) => {
    i(...p);
  });
}
const qv = (s) => s();
function ps(s, p) {
  s instanceof Map && p instanceof Map && p.forEach((i, h) => s.set(h, i)), s instanceof Set && p instanceof Set && p.forEach(s.add, s);
  for (const i in p) {
    if (!p.hasOwnProperty(i))
      continue;
    const h = p[i], C = s[i];
    ds(C) && ds(h) && s.hasOwnProperty(i) && !Ri(h) && !gs(h) ? s[i] = ps(C, h) : s[i] = h;
  }
  return s;
}
const Gv = (
  /* istanbul ignore next */
  Symbol()
);
function Xv(s) {
  return !ds(s) || !s.hasOwnProperty(Gv);
}
const { assign: lr } = Object;
function Yv(s) {
  return !!(Ri(s) && s.effect);
}
function jv(s, p, i, h) {
  const { state: C, actions: W, getters: B } = p, T = i.state.value[s];
  let $;
  function U() {
    !T && Bl.NODE_ENV === "production" && (i.state.value[s] = C ? C() : {});
    const Y = Pv(i.state.value[s]);
    return lr(Y, W, Object.keys(B || {}).reduce((q, ae) => (q[ae] = Il(At(() => {
      za(i);
      const H = i._s.get(s);
      return B[ae].call(H, H);
    })), q), {}));
  }
  return $ = Wl(s, U, p, i, h, !0), $;
}
function Wl(s, p, i = {}, h, C, W) {
  let B;
  const T = lr({ actions: {} }, i), $ = {
    deep: !0
    // flush: 'post',
  };
  let U, Y, q = [], ae = [], H;
  const d = h.state.value[s];
  !W && !d && Bl.NODE_ENV === "production" && (h.state.value[s] = {}), we({});
  let E;
  function D(ce) {
    let le;
    U = Y = !1, typeof ce == "function" ? (ce(h.state.value[s]), le = {
      type: Ti.patchFunction,
      storeId: s,
      events: H
    }) : (ps(h.state.value[s], ce), le = {
      type: Ti.patchObject,
      payload: ce,
      storeId: s,
      events: H
    });
    const ne = E = Symbol();
    vs().then(() => {
      E === ne && (U = !0);
    }), Y = !0, Kr(q, le, h.state.value[s]);
  }
  const S = W ? function() {
    const { state: le } = i, ne = le ? le() : {};
    this.$patch((ye) => {
      lr(ye, ne);
    });
  } : (
    /* istanbul ignore next */
    zl
  );
  function _() {
    B.stop(), q = [], ae = [], h._s.delete(s);
  }
  function oe(ce, le) {
    return function() {
      za(h);
      const ne = Array.from(arguments), ye = [], Pe = [];
      function rt(je) {
        ye.push(je);
      }
      function ft(je) {
        Pe.push(je);
      }
      Kr(ae, {
        args: ne,
        name: ce,
        store: te,
        after: rt,
        onError: ft
      });
      let mt;
      try {
        mt = le.apply(this && this.$id === s ? this : te, ne);
      } catch (je) {
        throw Kr(Pe, je), je;
      }
      return mt instanceof Promise ? mt.then((je) => (Kr(ye, je), je)).catch((je) => (Kr(Pe, je), Promise.reject(je))) : (Kr(ye, mt), mt);
    };
  }
  const ee = {
    _p: h,
    // _s: scope,
    $id: s,
    $onAction: El.bind(null, ae),
    $patch: D,
    $reset: S,
    $subscribe(ce, le = {}) {
      const ne = El(q, ce, le.detached, () => ye()), ye = B.run(() => Qr(() => h.state.value[s], (Pe) => {
        (le.flush === "sync" ? Y : U) && ce({
          storeId: s,
          type: Ti.direct,
          events: H
        }, Pe);
      }, lr({}, $, le)));
      return ne;
    },
    $dispose: _
  }, te = Lv(ee);
  h._s.set(s, te);
  const De = (h._a && h._a.runWithContext || qv)(() => h._e.run(() => (B = Rl()).run(p)));
  for (const ce in De) {
    const le = De[ce];
    if (Ri(le) && !Yv(le) || gs(le))
      W || (d && Xv(le) && (Ri(le) ? le.value = d[ce] : ps(le, d[ce])), h.state.value[s][ce] = le);
    else if (typeof le == "function") {
      const ne = oe(ce, le);
      De[ce] = ne, T.actions[ce] = le;
    }
  }
  return lr(te, De), lr(Ml(te), De), Object.defineProperty(te, "$state", {
    get: () => h.state.value[s],
    set: (ce) => {
      D((le) => {
        lr(le, ce);
      });
    }
  }), h._p.forEach((ce) => {
    lr(te, B.run(() => ce({
      store: te,
      app: h._a,
      pinia: h,
      options: T
    })));
  }), d && W && i.hydrate && i.hydrate(te.$state, d), U = !0, Y = !0, te;
}
function Kv(s, p, i) {
  let h, C;
  const W = typeof p == "function";
  typeof s == "string" ? (h = s, C = W ? i : p) : (C = s, h = s.id);
  function B(T, $) {
    const U = Iv();
    return T = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    T || (U ? Mv($l, null) : null), T && za(T), T = Ul, T._s.has(h) || (W ? Wl(h, p, C, T) : jv(h, C, T)), T._s.get(h);
  }
  return B.$id = h, B;
}
function Hl(s) {
  {
    s = Ml(s);
    const p = {};
    for (const i in s) {
      const h = s[i];
      (Ri(h) || gs(h)) && (p[i] = // ---
      Rv(s, i));
    }
    return p;
  }
}
var Vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ql(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Ua = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ua.exports;
(function(s, p) {
  (function() {
    var i, h = "4.17.21", C = 200, W = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", B = "Expected a function", T = "Invalid `variable` option passed into `_.template`", $ = "__lodash_hash_undefined__", U = 500, Y = "__lodash_placeholder__", q = 1, ae = 2, H = 4, d = 1, E = 2, D = 1, S = 2, _ = 4, oe = 8, ee = 16, te = 32, ge = 64, De = 128, ce = 256, le = 512, ne = 30, ye = "...", Pe = 800, rt = 16, ft = 1, mt = 2, je = 3, $e = 1 / 0, xe = 9007199254740991, xn = 17976931348623157e292, Mn = NaN, gt = 4294967295, Vn = gt - 1, kn = gt >>> 1, Ln = [
      ["ary", De],
      ["bind", D],
      ["bindKey", S],
      ["curry", oe],
      ["curryRight", ee],
      ["flip", le],
      ["partial", te],
      ["partialRight", ge],
      ["rearg", ce]
    ], qt = "[object Arguments]", Pn = "[object Array]", Ar = "[object AsyncFunction]", en = "[object Boolean]", tn = "[object Date]", Sn = "[object DOMException]", Cn = "[object Error]", En = "[object Function]", xt = "[object GeneratorFunction]", Rt = "[object Map]", Nn = "[object Number]", Tr = "[object Null]", Bt = "[object Object]", dr = "[object Promise]", Rr = "[object Proxy]", On = "[object RegExp]", Qe = "[object Set]", Z = "[object String]", ve = "[object Symbol]", ze = "[object Undefined]", kt = "[object WeakMap]", St = "[object WeakSet]", Gt = "[object ArrayBuffer]", Fn = "[object DataView]", Ir = "[object Float32Array]", Mr = "[object Float64Array]", ri = "[object Int8Array]", ii = "[object Int16Array]", Se = "[object Int32Array]", Lr = "[object Uint8Array]", pr = "[object Uint8ClampedArray]", gn = "[object Uint16Array]", ai = "[object Uint32Array]", Zn = /\b__p \+= '';/g, Ct = /\b(__p \+=) '' \+/g, Ha = /(__e\(.*?\)|\b__t\)) \+\n'';/g, oi = /&(?:amp|lt|gt|quot|#39);/g, Ze = /[&<>"']/g, Ye = RegExp(oi.source), qa = RegExp(Ze.source), Jn = /<%-([\s\S]+?)%>/g, Ga = /<%([\s\S]+?)%>/g, vn = /<%=([\s\S]+?)%>/g, Xa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lt = /^\w*$/, nn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dn = /[\\^$.*+?()[\]{}|]/g, Ya = RegExp(Dn.source), gr = /^\s+/, si = /\s/, vr = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ja = /\{\n\/\* \[wrapped with (.+)\] \*/, Mi = /,? & /, Li = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Xt = /[()=,{}\[\]\/\s]/, Ut = /\\(\\)?/g, Qn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ui = /\w*$/, li = /^[-+]0x[0-9a-f]+$/i, Ka = /^0b[01]+$/i, Pi = /^\[object .+?Constructor\]$/, Ni = /^0o[0-7]+$/i, mr = /^(?:0|[1-9]\d*)$/, Va = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Bn = /($^)/, Za = /['\n\r\u2028\u2029\\]/g, Yt = "\\ud800-\\udfff", Ja = "\\u0300-\\u036f", Qa = "\\ufe20-\\ufe2f", Fi = "\\u20d0-\\u20ff", Bi = Ja + Qa + Fi, Ui = "\\u2700-\\u27bf", $i = "a-z\\xdf-\\xf6\\xf8-\\xff", eo = "\\xac\\xb1\\xd7\\xf7", to = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", no = "\\u2000-\\u206f", ro = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", zi = "A-Z\\xc0-\\xd6\\xd8-\\xde", Wi = "\\ufe0e\\ufe0f", Hi = eo + to + no + ro, ci = "['’]", io = "[" + Yt + "]", qi = "[" + Hi + "]", _r = "[" + Bi + "]", g = "\\d+", a = "[" + Ui + "]", l = "[" + $i + "]", u = "[^" + Yt + Hi + g + Ui + $i + zi + "]", b = "\\ud83c[\\udffb-\\udfff]", m = "(?:" + _r + "|" + b + ")", w = "[^" + Yt + "]", A = "(?:\\ud83c[\\udde6-\\uddff]){2}", X = "[\\ud800-\\udbff][\\udc00-\\udfff]", F = "[" + zi + "]", R = "\\u200d", I = "(?:" + l + "|" + u + ")", G = "(?:" + F + "|" + u + ")", Ie = "(?:" + ci + "(?:d|ll|m|re|s|t|ve))?", Re = "(?:" + ci + "(?:D|LL|M|RE|S|T|VE))?", Ge = m + "?", Be = "[" + Wi + "]?", it = "(?:" + R + "(?:" + [w, A, X].join("|") + ")" + Be + Ge + ")*", ct = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", et = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rn = Be + Ge + it, It = "(?:" + [a, A, X].join("|") + ")" + rn, K = "(?:" + [w + _r + "?", _r, A, X, io].join("|") + ")", Ue = RegExp(ci, "g"), at = RegExp(_r, "g"), Et = RegExp(b + "(?=" + b + ")|" + K + rn, "g"), mn = RegExp([
      F + "?" + l + "+" + Ie + "(?=" + [qi, F, "$"].join("|") + ")",
      G + "+" + Re + "(?=" + [qi, F + I, "$"].join("|") + ")",
      F + "?" + I + "+" + Ie,
      F + "+" + Re,
      et,
      ct,
      g,
      It
    ].join("|"), "g"), Un = RegExp("[" + R + Yt + Bi + Wi + "]"), $n = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, An = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], an = -1, Ce = {};
    Ce[Ir] = Ce[Mr] = Ce[ri] = Ce[ii] = Ce[Se] = Ce[Lr] = Ce[pr] = Ce[gn] = Ce[ai] = !0, Ce[qt] = Ce[Pn] = Ce[Gt] = Ce[en] = Ce[Fn] = Ce[tn] = Ce[Cn] = Ce[En] = Ce[Rt] = Ce[Nn] = Ce[Bt] = Ce[On] = Ce[Qe] = Ce[Z] = Ce[kt] = !1;
    var Fe = {};
    Fe[qt] = Fe[Pn] = Fe[Gt] = Fe[Fn] = Fe[en] = Fe[tn] = Fe[Ir] = Fe[Mr] = Fe[ri] = Fe[ii] = Fe[Se] = Fe[Rt] = Fe[Nn] = Fe[Bt] = Fe[On] = Fe[Qe] = Fe[Z] = Fe[ve] = Fe[Lr] = Fe[pr] = Fe[gn] = Fe[ai] = !0, Fe[Cn] = Fe[En] = Fe[kt] = !1;
    var Pr = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, fi = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, hi = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Gi = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Xi = parseFloat, Yi = parseInt, di = typeof Vr == "object" && Vr && Vr.Object === Object && Vr, ao = typeof self == "object" && self && self.Object === Object && self, ht = di || ao || Function("return this")(), oo = p && !p.nodeType && p, yr = oo && !0 && s && !s.nodeType && s, bs = yr && yr.exports === oo, so = bs && di.process, on = function() {
      try {
        var x = yr && yr.require && yr.require("util").types;
        return x || so && so.binding && so.binding("util");
      } catch {
      }
    }(), ws = on && on.isArrayBuffer, xs = on && on.isDate, ks = on && on.isMap, Ss = on && on.isRegExp, Cs = on && on.isSet, Es = on && on.isTypedArray;
    function jt(x, M, O) {
      switch (O.length) {
        case 0:
          return x.call(M);
        case 1:
          return x.call(M, O[0]);
        case 2:
          return x.call(M, O[0], O[1]);
        case 3:
          return x.call(M, O[0], O[1], O[2]);
      }
      return x.apply(M, O);
    }
    function Jl(x, M, O, re) {
      for (var me = -1, We = x == null ? 0 : x.length; ++me < We; ) {
        var dt = x[me];
        M(re, dt, O(dt), x);
      }
      return re;
    }
    function sn(x, M) {
      for (var O = -1, re = x == null ? 0 : x.length; ++O < re && M(x[O], O, x) !== !1; )
        ;
      return x;
    }
    function Ql(x, M) {
      for (var O = x == null ? 0 : x.length; O-- && M(x[O], O, x) !== !1; )
        ;
      return x;
    }
    function Os(x, M) {
      for (var O = -1, re = x == null ? 0 : x.length; ++O < re; )
        if (!M(x[O], O, x))
          return !1;
      return !0;
    }
    function er(x, M) {
      for (var O = -1, re = x == null ? 0 : x.length, me = 0, We = []; ++O < re; ) {
        var dt = x[O];
        M(dt, O, x) && (We[me++] = dt);
      }
      return We;
    }
    function ji(x, M) {
      var O = x == null ? 0 : x.length;
      return !!O && Nr(x, M, 0) > -1;
    }
    function uo(x, M, O) {
      for (var re = -1, me = x == null ? 0 : x.length; ++re < me; )
        if (O(M, x[re]))
          return !0;
      return !1;
    }
    function Ve(x, M) {
      for (var O = -1, re = x == null ? 0 : x.length, me = Array(re); ++O < re; )
        me[O] = M(x[O], O, x);
      return me;
    }
    function tr(x, M) {
      for (var O = -1, re = M.length, me = x.length; ++O < re; )
        x[me + O] = M[O];
      return x;
    }
    function lo(x, M, O, re) {
      var me = -1, We = x == null ? 0 : x.length;
      for (re && We && (O = x[++me]); ++me < We; )
        O = M(O, x[me], me, x);
      return O;
    }
    function ec(x, M, O, re) {
      var me = x == null ? 0 : x.length;
      for (re && me && (O = x[--me]); me--; )
        O = M(O, x[me], me, x);
      return O;
    }
    function co(x, M) {
      for (var O = -1, re = x == null ? 0 : x.length; ++O < re; )
        if (M(x[O], O, x))
          return !0;
      return !1;
    }
    var tc = fo("length");
    function nc(x) {
      return x.split("");
    }
    function rc(x) {
      return x.match(Li) || [];
    }
    function Ds(x, M, O) {
      var re;
      return O(x, function(me, We, dt) {
        if (M(me, We, dt))
          return re = We, !1;
      }), re;
    }
    function Ki(x, M, O, re) {
      for (var me = x.length, We = O + (re ? 1 : -1); re ? We-- : ++We < me; )
        if (M(x[We], We, x))
          return We;
      return -1;
    }
    function Nr(x, M, O) {
      return M === M ? gc(x, M, O) : Ki(x, As, O);
    }
    function ic(x, M, O, re) {
      for (var me = O - 1, We = x.length; ++me < We; )
        if (re(x[me], M))
          return me;
      return -1;
    }
    function As(x) {
      return x !== x;
    }
    function Ts(x, M) {
      var O = x == null ? 0 : x.length;
      return O ? po(x, M) / O : Mn;
    }
    function fo(x) {
      return function(M) {
        return M == null ? i : M[x];
      };
    }
    function ho(x) {
      return function(M) {
        return x == null ? i : x[M];
      };
    }
    function Rs(x, M, O, re, me) {
      return me(x, function(We, dt, Xe) {
        O = re ? (re = !1, We) : M(O, We, dt, Xe);
      }), O;
    }
    function ac(x, M) {
      var O = x.length;
      for (x.sort(M); O--; )
        x[O] = x[O].value;
      return x;
    }
    function po(x, M) {
      for (var O, re = -1, me = x.length; ++re < me; ) {
        var We = M(x[re]);
        We !== i && (O = O === i ? We : O + We);
      }
      return O;
    }
    function go(x, M) {
      for (var O = -1, re = Array(x); ++O < x; )
        re[O] = M(O);
      return re;
    }
    function oc(x, M) {
      return Ve(M, function(O) {
        return [O, x[O]];
      });
    }
    function Is(x) {
      return x && x.slice(0, Ns(x) + 1).replace(gr, "");
    }
    function Kt(x) {
      return function(M) {
        return x(M);
      };
    }
    function vo(x, M) {
      return Ve(M, function(O) {
        return x[O];
      });
    }
    function pi(x, M) {
      return x.has(M);
    }
    function Ms(x, M) {
      for (var O = -1, re = x.length; ++O < re && Nr(M, x[O], 0) > -1; )
        ;
      return O;
    }
    function Ls(x, M) {
      for (var O = x.length; O-- && Nr(M, x[O], 0) > -1; )
        ;
      return O;
    }
    function sc(x, M) {
      for (var O = x.length, re = 0; O--; )
        x[O] === M && ++re;
      return re;
    }
    var uc = ho(Pr), lc = ho(fi);
    function cc(x) {
      return "\\" + Gi[x];
    }
    function fc(x, M) {
      return x == null ? i : x[M];
    }
    function Fr(x) {
      return Un.test(x);
    }
    function hc(x) {
      return $n.test(x);
    }
    function dc(x) {
      for (var M, O = []; !(M = x.next()).done; )
        O.push(M.value);
      return O;
    }
    function mo(x) {
      var M = -1, O = Array(x.size);
      return x.forEach(function(re, me) {
        O[++M] = [me, re];
      }), O;
    }
    function Ps(x, M) {
      return function(O) {
        return x(M(O));
      };
    }
    function nr(x, M) {
      for (var O = -1, re = x.length, me = 0, We = []; ++O < re; ) {
        var dt = x[O];
        (dt === M || dt === Y) && (x[O] = Y, We[me++] = O);
      }
      return We;
    }
    function Vi(x) {
      var M = -1, O = Array(x.size);
      return x.forEach(function(re) {
        O[++M] = re;
      }), O;
    }
    function pc(x) {
      var M = -1, O = Array(x.size);
      return x.forEach(function(re) {
        O[++M] = [re, re];
      }), O;
    }
    function gc(x, M, O) {
      for (var re = O - 1, me = x.length; ++re < me; )
        if (x[re] === M)
          return re;
      return -1;
    }
    function vc(x, M, O) {
      for (var re = O + 1; re--; )
        if (x[re] === M)
          return re;
      return re;
    }
    function Br(x) {
      return Fr(x) ? _c(x) : tc(x);
    }
    function _n(x) {
      return Fr(x) ? yc(x) : nc(x);
    }
    function Ns(x) {
      for (var M = x.length; M-- && si.test(x.charAt(M)); )
        ;
      return M;
    }
    var mc = ho(hi);
    function _c(x) {
      for (var M = Et.lastIndex = 0; Et.test(x); )
        ++M;
      return M;
    }
    function yc(x) {
      return x.match(Et) || [];
    }
    function bc(x) {
      return x.match(mn) || [];
    }
    var wc = function x(M) {
      M = M == null ? ht : Ur.defaults(ht.Object(), M, Ur.pick(ht, An));
      var O = M.Array, re = M.Date, me = M.Error, We = M.Function, dt = M.Math, Xe = M.Object, _o = M.RegExp, xc = M.String, un = M.TypeError, Zi = O.prototype, kc = We.prototype, $r = Xe.prototype, Ji = M["__core-js_shared__"], Qi = kc.toString, qe = $r.hasOwnProperty, Sc = 0, Fs = function() {
        var e = /[^.]+$/.exec(Ji && Ji.keys && Ji.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), ea = $r.toString, Cc = Qi.call(Xe), Ec = ht._, Oc = _o(
        "^" + Qi.call(qe).replace(Dn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ta = bs ? M.Buffer : i, rr = M.Symbol, na = M.Uint8Array, Bs = ta ? ta.allocUnsafe : i, ra = Ps(Xe.getPrototypeOf, Xe), Us = Xe.create, $s = $r.propertyIsEnumerable, ia = Zi.splice, zs = rr ? rr.isConcatSpreadable : i, gi = rr ? rr.iterator : i, br = rr ? rr.toStringTag : i, aa = function() {
        try {
          var e = Cr(Xe, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Dc = M.clearTimeout !== ht.clearTimeout && M.clearTimeout, Ac = re && re.now !== ht.Date.now && re.now, Tc = M.setTimeout !== ht.setTimeout && M.setTimeout, oa = dt.ceil, sa = dt.floor, yo = Xe.getOwnPropertySymbols, Rc = ta ? ta.isBuffer : i, Ws = M.isFinite, Ic = Zi.join, Mc = Ps(Xe.keys, Xe), pt = dt.max, Ot = dt.min, Lc = re.now, Pc = M.parseInt, Hs = dt.random, Nc = Zi.reverse, bo = Cr(M, "DataView"), vi = Cr(M, "Map"), wo = Cr(M, "Promise"), zr = Cr(M, "Set"), mi = Cr(M, "WeakMap"), _i = Cr(Xe, "create"), ua = mi && new mi(), Wr = {}, Fc = Er(bo), Bc = Er(vi), Uc = Er(wo), $c = Er(zr), zc = Er(mi), la = rr ? rr.prototype : i, yi = la ? la.valueOf : i, qs = la ? la.toString : i;
      function c(e) {
        if (tt(e) && !be(e) && !(e instanceof Le)) {
          if (e instanceof ln)
            return e;
          if (qe.call(e, "__wrapped__"))
            return Gu(e);
        }
        return new ln(e);
      }
      var Hr = /* @__PURE__ */ function() {
        function e() {
        }
        return function(t) {
          if (!Je(t))
            return {};
          if (Us)
            return Us(t);
          e.prototype = t;
          var n = new e();
          return e.prototype = i, n;
        };
      }();
      function ca() {
      }
      function ln(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i;
      }
      c.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Jn,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Ga,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: vn,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: c
        }
      }, c.prototype = ca.prototype, c.prototype.constructor = c, ln.prototype = Hr(ca.prototype), ln.prototype.constructor = ln;
      function Le(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = gt, this.__views__ = [];
      }
      function Wc() {
        var e = new Le(this.__wrapped__);
        return e.__actions__ = $t(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = $t(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = $t(this.__views__), e;
      }
      function Hc() {
        if (this.__filtered__) {
          var e = new Le(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function qc() {
        var e = this.__wrapped__.value(), t = this.__dir__, n = be(e), r = t < 0, o = n ? e.length : 0, f = rh(0, o, this.__views__), v = f.start, y = f.end, k = y - v, P = r ? y : v - 1, N = this.__iteratees__, z = N.length, J = 0, se = Ot(k, this.__takeCount__);
        if (!n || !r && o == k && se == k)
          return pu(e, this.__actions__);
        var he = [];
        e:
          for (; k-- && J < se; ) {
            P += t;
            for (var Ee = -1, de = e[P]; ++Ee < z; ) {
              var Me = N[Ee], Ne = Me.iteratee, Jt = Me.type, Pt = Ne(de);
              if (Jt == mt)
                de = Pt;
              else if (!Pt) {
                if (Jt == ft)
                  continue e;
                break e;
              }
            }
            he[J++] = de;
          }
        return he;
      }
      Le.prototype = Hr(ca.prototype), Le.prototype.constructor = Le;
      function wr(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function Gc() {
        this.__data__ = _i ? _i(null) : {}, this.size = 0;
      }
      function Xc(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function Yc(e) {
        var t = this.__data__;
        if (_i) {
          var n = t[e];
          return n === $ ? i : n;
        }
        return qe.call(t, e) ? t[e] : i;
      }
      function jc(e) {
        var t = this.__data__;
        return _i ? t[e] !== i : qe.call(t, e);
      }
      function Kc(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = _i && t === i ? $ : t, this;
      }
      wr.prototype.clear = Gc, wr.prototype.delete = Xc, wr.prototype.get = Yc, wr.prototype.has = jc, wr.prototype.set = Kc;
      function zn(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function Vc() {
        this.__data__ = [], this.size = 0;
      }
      function Zc(e) {
        var t = this.__data__, n = fa(t, e);
        if (n < 0)
          return !1;
        var r = t.length - 1;
        return n == r ? t.pop() : ia.call(t, n, 1), --this.size, !0;
      }
      function Jc(e) {
        var t = this.__data__, n = fa(t, e);
        return n < 0 ? i : t[n][1];
      }
      function Qc(e) {
        return fa(this.__data__, e) > -1;
      }
      function ef(e, t) {
        var n = this.__data__, r = fa(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
      }
      zn.prototype.clear = Vc, zn.prototype.delete = Zc, zn.prototype.get = Jc, zn.prototype.has = Qc, zn.prototype.set = ef;
      function Wn(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function tf() {
        this.size = 0, this.__data__ = {
          hash: new wr(),
          map: new (vi || zn)(),
          string: new wr()
        };
      }
      function nf(e) {
        var t = ka(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function rf(e) {
        return ka(this, e).get(e);
      }
      function af(e) {
        return ka(this, e).has(e);
      }
      function of(e, t) {
        var n = ka(this, e), r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
      }
      Wn.prototype.clear = tf, Wn.prototype.delete = nf, Wn.prototype.get = rf, Wn.prototype.has = af, Wn.prototype.set = of;
      function xr(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.__data__ = new Wn(); ++t < n; )
          this.add(e[t]);
      }
      function sf(e) {
        return this.__data__.set(e, $), this;
      }
      function uf(e) {
        return this.__data__.has(e);
      }
      xr.prototype.add = xr.prototype.push = sf, xr.prototype.has = uf;
      function yn(e) {
        var t = this.__data__ = new zn(e);
        this.size = t.size;
      }
      function lf() {
        this.__data__ = new zn(), this.size = 0;
      }
      function cf(e) {
        var t = this.__data__, n = t.delete(e);
        return this.size = t.size, n;
      }
      function ff(e) {
        return this.__data__.get(e);
      }
      function hf(e) {
        return this.__data__.has(e);
      }
      function df(e, t) {
        var n = this.__data__;
        if (n instanceof zn) {
          var r = n.__data__;
          if (!vi || r.length < C - 1)
            return r.push([e, t]), this.size = ++n.size, this;
          n = this.__data__ = new Wn(r);
        }
        return n.set(e, t), this.size = n.size, this;
      }
      yn.prototype.clear = lf, yn.prototype.delete = cf, yn.prototype.get = ff, yn.prototype.has = hf, yn.prototype.set = df;
      function Gs(e, t) {
        var n = be(e), r = !n && Or(e), o = !n && !r && ur(e), f = !n && !r && !o && Yr(e), v = n || r || o || f, y = v ? go(e.length, xc) : [], k = y.length;
        for (var P in e)
          (t || qe.call(e, P)) && !(v && // Safari 9 has enumerable `arguments.length` in strict mode.
          (P == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          o && (P == "offset" || P == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          f && (P == "buffer" || P == "byteLength" || P == "byteOffset") || // Skip index properties.
          Xn(P, k))) && y.push(P);
        return y;
      }
      function Xs(e) {
        var t = e.length;
        return t ? e[Io(0, t - 1)] : i;
      }
      function pf(e, t) {
        return Sa($t(e), kr(t, 0, e.length));
      }
      function gf(e) {
        return Sa($t(e));
      }
      function xo(e, t, n) {
        (n !== i && !bn(e[t], n) || n === i && !(t in e)) && Hn(e, t, n);
      }
      function bi(e, t, n) {
        var r = e[t];
        (!(qe.call(e, t) && bn(r, n)) || n === i && !(t in e)) && Hn(e, t, n);
      }
      function fa(e, t) {
        for (var n = e.length; n--; )
          if (bn(e[n][0], t))
            return n;
        return -1;
      }
      function vf(e, t, n, r) {
        return ir(e, function(o, f, v) {
          t(r, o, n(o), v);
        }), r;
      }
      function Ys(e, t) {
        return e && Rn(t, vt(t), e);
      }
      function mf(e, t) {
        return e && Rn(t, Wt(t), e);
      }
      function Hn(e, t, n) {
        t == "__proto__" && aa ? aa(e, t, {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        }) : e[t] = n;
      }
      function ko(e, t) {
        for (var n = -1, r = t.length, o = O(r), f = e == null; ++n < r; )
          o[n] = f ? i : rs(e, t[n]);
        return o;
      }
      function kr(e, t, n) {
        return e === e && (n !== i && (e = e <= n ? e : n), t !== i && (e = e >= t ? e : t)), e;
      }
      function cn(e, t, n, r, o, f) {
        var v, y = t & q, k = t & ae, P = t & H;
        if (n && (v = o ? n(e, r, o, f) : n(e)), v !== i)
          return v;
        if (!Je(e))
          return e;
        var N = be(e);
        if (N) {
          if (v = ah(e), !y)
            return $t(e, v);
        } else {
          var z = Dt(e), J = z == En || z == xt;
          if (ur(e))
            return mu(e, y);
          if (z == Bt || z == qt || J && !o) {
            if (v = k || J ? {} : Nu(e), !y)
              return k ? jf(e, mf(v, e)) : Yf(e, Ys(v, e));
          } else {
            if (!Fe[z])
              return o ? e : {};
            v = oh(e, z, y);
          }
        }
        f || (f = new yn());
        var se = f.get(e);
        if (se)
          return se;
        f.set(e, v), fl(e) ? e.forEach(function(de) {
          v.add(cn(de, t, n, de, e, f));
        }) : ll(e) && e.forEach(function(de, Me) {
          v.set(Me, cn(de, t, n, Me, e, f));
        });
        var he = P ? k ? Ho : Wo : k ? Wt : vt, Ee = N ? i : he(e);
        return sn(Ee || e, function(de, Me) {
          Ee && (Me = de, de = e[Me]), bi(v, Me, cn(de, t, n, Me, e, f));
        }), v;
      }
      function _f(e) {
        var t = vt(e);
        return function(n) {
          return js(n, e, t);
        };
      }
      function js(e, t, n) {
        var r = n.length;
        if (e == null)
          return !r;
        for (e = Xe(e); r--; ) {
          var o = n[r], f = t[o], v = e[o];
          if (v === i && !(o in e) || !f(v))
            return !1;
        }
        return !0;
      }
      function Ks(e, t, n) {
        if (typeof e != "function")
          throw new un(B);
        return Oi(function() {
          e.apply(i, n);
        }, t);
      }
      function wi(e, t, n, r) {
        var o = -1, f = ji, v = !0, y = e.length, k = [], P = t.length;
        if (!y)
          return k;
        n && (t = Ve(t, Kt(n))), r ? (f = uo, v = !1) : t.length >= C && (f = pi, v = !1, t = new xr(t));
        e:
          for (; ++o < y; ) {
            var N = e[o], z = n == null ? N : n(N);
            if (N = r || N !== 0 ? N : 0, v && z === z) {
              for (var J = P; J--; )
                if (t[J] === z)
                  continue e;
              k.push(N);
            } else
              f(t, z, r) || k.push(N);
          }
        return k;
      }
      var ir = xu(Tn), Vs = xu(Co, !0);
      function yf(e, t) {
        var n = !0;
        return ir(e, function(r, o, f) {
          return n = !!t(r, o, f), n;
        }), n;
      }
      function ha(e, t, n) {
        for (var r = -1, o = e.length; ++r < o; ) {
          var f = e[r], v = t(f);
          if (v != null && (y === i ? v === v && !Zt(v) : n(v, y)))
            var y = v, k = f;
        }
        return k;
      }
      function bf(e, t, n, r) {
        var o = e.length;
        for (n = ke(n), n < 0 && (n = -n > o ? 0 : o + n), r = r === i || r > o ? o : ke(r), r < 0 && (r += o), r = n > r ? 0 : dl(r); n < r; )
          e[n++] = t;
        return e;
      }
      function Zs(e, t) {
        var n = [];
        return ir(e, function(r, o, f) {
          t(r, o, f) && n.push(r);
        }), n;
      }
      function _t(e, t, n, r, o) {
        var f = -1, v = e.length;
        for (n || (n = uh), o || (o = []); ++f < v; ) {
          var y = e[f];
          t > 0 && n(y) ? t > 1 ? _t(y, t - 1, n, r, o) : tr(o, y) : r || (o[o.length] = y);
        }
        return o;
      }
      var So = ku(), Js = ku(!0);
      function Tn(e, t) {
        return e && So(e, t, vt);
      }
      function Co(e, t) {
        return e && Js(e, t, vt);
      }
      function da(e, t) {
        return er(t, function(n) {
          return Yn(e[n]);
        });
      }
      function Sr(e, t) {
        t = or(t, e);
        for (var n = 0, r = t.length; e != null && n < r; )
          e = e[In(t[n++])];
        return n && n == r ? e : i;
      }
      function Qs(e, t, n) {
        var r = t(e);
        return be(e) ? r : tr(r, n(e));
      }
      function Mt(e) {
        return e == null ? e === i ? ze : Tr : br && br in Xe(e) ? nh(e) : gh(e);
      }
      function Eo(e, t) {
        return e > t;
      }
      function wf(e, t) {
        return e != null && qe.call(e, t);
      }
      function xf(e, t) {
        return e != null && t in Xe(e);
      }
      function kf(e, t, n) {
        return e >= Ot(t, n) && e < pt(t, n);
      }
      function Oo(e, t, n) {
        for (var r = n ? uo : ji, o = e[0].length, f = e.length, v = f, y = O(f), k = 1 / 0, P = []; v--; ) {
          var N = e[v];
          v && t && (N = Ve(N, Kt(t))), k = Ot(N.length, k), y[v] = !n && (t || o >= 120 && N.length >= 120) ? new xr(v && N) : i;
        }
        N = e[0];
        var z = -1, J = y[0];
        e:
          for (; ++z < o && P.length < k; ) {
            var se = N[z], he = t ? t(se) : se;
            if (se = n || se !== 0 ? se : 0, !(J ? pi(J, he) : r(P, he, n))) {
              for (v = f; --v; ) {
                var Ee = y[v];
                if (!(Ee ? pi(Ee, he) : r(e[v], he, n)))
                  continue e;
              }
              J && J.push(he), P.push(se);
            }
          }
        return P;
      }
      function Sf(e, t, n, r) {
        return Tn(e, function(o, f, v) {
          t(r, n(o), f, v);
        }), r;
      }
      function xi(e, t, n) {
        t = or(t, e), e = $u(e, t);
        var r = e == null ? e : e[In(hn(t))];
        return r == null ? i : jt(r, e, n);
      }
      function eu(e) {
        return tt(e) && Mt(e) == qt;
      }
      function Cf(e) {
        return tt(e) && Mt(e) == Gt;
      }
      function Ef(e) {
        return tt(e) && Mt(e) == tn;
      }
      function ki(e, t, n, r, o) {
        return e === t ? !0 : e == null || t == null || !tt(e) && !tt(t) ? e !== e && t !== t : Of(e, t, n, r, ki, o);
      }
      function Of(e, t, n, r, o, f) {
        var v = be(e), y = be(t), k = v ? Pn : Dt(e), P = y ? Pn : Dt(t);
        k = k == qt ? Bt : k, P = P == qt ? Bt : P;
        var N = k == Bt, z = P == Bt, J = k == P;
        if (J && ur(e)) {
          if (!ur(t))
            return !1;
          v = !0, N = !1;
        }
        if (J && !N)
          return f || (f = new yn()), v || Yr(e) ? Mu(e, t, n, r, o, f) : eh(e, t, k, n, r, o, f);
        if (!(n & d)) {
          var se = N && qe.call(e, "__wrapped__"), he = z && qe.call(t, "__wrapped__");
          if (se || he) {
            var Ee = se ? e.value() : e, de = he ? t.value() : t;
            return f || (f = new yn()), o(Ee, de, n, r, f);
          }
        }
        return J ? (f || (f = new yn()), th(e, t, n, r, o, f)) : !1;
      }
      function Df(e) {
        return tt(e) && Dt(e) == Rt;
      }
      function Do(e, t, n, r) {
        var o = n.length, f = o, v = !r;
        if (e == null)
          return !f;
        for (e = Xe(e); o--; ) {
          var y = n[o];
          if (v && y[2] ? y[1] !== e[y[0]] : !(y[0] in e))
            return !1;
        }
        for (; ++o < f; ) {
          y = n[o];
          var k = y[0], P = e[k], N = y[1];
          if (v && y[2]) {
            if (P === i && !(k in e))
              return !1;
          } else {
            var z = new yn();
            if (r)
              var J = r(P, N, k, e, t, z);
            if (!(J === i ? ki(N, P, d | E, r, z) : J))
              return !1;
          }
        }
        return !0;
      }
      function tu(e) {
        if (!Je(e) || ch(e))
          return !1;
        var t = Yn(e) ? Oc : Pi;
        return t.test(Er(e));
      }
      function Af(e) {
        return tt(e) && Mt(e) == On;
      }
      function Tf(e) {
        return tt(e) && Dt(e) == Qe;
      }
      function Rf(e) {
        return tt(e) && Ta(e.length) && !!Ce[Mt(e)];
      }
      function nu(e) {
        return typeof e == "function" ? e : e == null ? Ht : typeof e == "object" ? be(e) ? au(e[0], e[1]) : iu(e) : Sl(e);
      }
      function Ao(e) {
        if (!Ei(e))
          return Mc(e);
        var t = [];
        for (var n in Xe(e))
          qe.call(e, n) && n != "constructor" && t.push(n);
        return t;
      }
      function If(e) {
        if (!Je(e))
          return ph(e);
        var t = Ei(e), n = [];
        for (var r in e)
          r == "constructor" && (t || !qe.call(e, r)) || n.push(r);
        return n;
      }
      function To(e, t) {
        return e < t;
      }
      function ru(e, t) {
        var n = -1, r = zt(e) ? O(e.length) : [];
        return ir(e, function(o, f, v) {
          r[++n] = t(o, f, v);
        }), r;
      }
      function iu(e) {
        var t = Go(e);
        return t.length == 1 && t[0][2] ? Bu(t[0][0], t[0][1]) : function(n) {
          return n === e || Do(n, e, t);
        };
      }
      function au(e, t) {
        return Yo(e) && Fu(t) ? Bu(In(e), t) : function(n) {
          var r = rs(n, e);
          return r === i && r === t ? is(n, e) : ki(t, r, d | E);
        };
      }
      function pa(e, t, n, r, o) {
        e !== t && So(t, function(f, v) {
          if (o || (o = new yn()), Je(f))
            Mf(e, t, v, n, pa, r, o);
          else {
            var y = r ? r(Ko(e, v), f, v + "", e, t, o) : i;
            y === i && (y = f), xo(e, v, y);
          }
        }, Wt);
      }
      function Mf(e, t, n, r, o, f, v) {
        var y = Ko(e, n), k = Ko(t, n), P = v.get(k);
        if (P) {
          xo(e, n, P);
          return;
        }
        var N = f ? f(y, k, n + "", e, t, v) : i, z = N === i;
        if (z) {
          var J = be(k), se = !J && ur(k), he = !J && !se && Yr(k);
          N = k, J || se || he ? be(y) ? N = y : ot(y) ? N = $t(y) : se ? (z = !1, N = mu(k, !0)) : he ? (z = !1, N = _u(k, !0)) : N = [] : Di(k) || Or(k) ? (N = y, Or(y) ? N = pl(y) : (!Je(y) || Yn(y)) && (N = Nu(k))) : z = !1;
        }
        z && (v.set(k, N), o(N, k, r, f, v), v.delete(k)), xo(e, n, N);
      }
      function ou(e, t) {
        var n = e.length;
        if (n)
          return t += t < 0 ? n : 0, Xn(t, n) ? e[t] : i;
      }
      function su(e, t, n) {
        t.length ? t = Ve(t, function(f) {
          return be(f) ? function(v) {
            return Sr(v, f.length === 1 ? f[0] : f);
          } : f;
        }) : t = [Ht];
        var r = -1;
        t = Ve(t, Kt(fe()));
        var o = ru(e, function(f, v, y) {
          var k = Ve(t, function(P) {
            return P(f);
          });
          return { criteria: k, index: ++r, value: f };
        });
        return ac(o, function(f, v) {
          return Xf(f, v, n);
        });
      }
      function Lf(e, t) {
        return uu(e, t, function(n, r) {
          return is(e, r);
        });
      }
      function uu(e, t, n) {
        for (var r = -1, o = t.length, f = {}; ++r < o; ) {
          var v = t[r], y = Sr(e, v);
          n(y, v) && Si(f, or(v, e), y);
        }
        return f;
      }
      function Pf(e) {
        return function(t) {
          return Sr(t, e);
        };
      }
      function Ro(e, t, n, r) {
        var o = r ? ic : Nr, f = -1, v = t.length, y = e;
        for (e === t && (t = $t(t)), n && (y = Ve(e, Kt(n))); ++f < v; )
          for (var k = 0, P = t[f], N = n ? n(P) : P; (k = o(y, N, k, r)) > -1; )
            y !== e && ia.call(y, k, 1), ia.call(e, k, 1);
        return e;
      }
      function lu(e, t) {
        for (var n = e ? t.length : 0, r = n - 1; n--; ) {
          var o = t[n];
          if (n == r || o !== f) {
            var f = o;
            Xn(o) ? ia.call(e, o, 1) : Po(e, o);
          }
        }
        return e;
      }
      function Io(e, t) {
        return e + sa(Hs() * (t - e + 1));
      }
      function Nf(e, t, n, r) {
        for (var o = -1, f = pt(oa((t - e) / (n || 1)), 0), v = O(f); f--; )
          v[r ? f : ++o] = e, e += n;
        return v;
      }
      function Mo(e, t) {
        var n = "";
        if (!e || t < 1 || t > xe)
          return n;
        do
          t % 2 && (n += e), t = sa(t / 2), t && (e += e);
        while (t);
        return n;
      }
      function Ae(e, t) {
        return Vo(Uu(e, t, Ht), e + "");
      }
      function Ff(e) {
        return Xs(jr(e));
      }
      function Bf(e, t) {
        var n = jr(e);
        return Sa(n, kr(t, 0, n.length));
      }
      function Si(e, t, n, r) {
        if (!Je(e))
          return e;
        t = or(t, e);
        for (var o = -1, f = t.length, v = f - 1, y = e; y != null && ++o < f; ) {
          var k = In(t[o]), P = n;
          if (k === "__proto__" || k === "constructor" || k === "prototype")
            return e;
          if (o != v) {
            var N = y[k];
            P = r ? r(N, k, y) : i, P === i && (P = Je(N) ? N : Xn(t[o + 1]) ? [] : {});
          }
          bi(y, k, P), y = y[k];
        }
        return e;
      }
      var cu = ua ? function(e, t) {
        return ua.set(e, t), e;
      } : Ht, Uf = aa ? function(e, t) {
        return aa(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: os(t),
          writable: !0
        });
      } : Ht;
      function $f(e) {
        return Sa(jr(e));
      }
      function fn(e, t, n) {
        var r = -1, o = e.length;
        t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
        for (var f = O(o); ++r < o; )
          f[r] = e[r + t];
        return f;
      }
      function zf(e, t) {
        var n;
        return ir(e, function(r, o, f) {
          return n = t(r, o, f), !n;
        }), !!n;
      }
      function ga(e, t, n) {
        var r = 0, o = e == null ? r : e.length;
        if (typeof t == "number" && t === t && o <= kn) {
          for (; r < o; ) {
            var f = r + o >>> 1, v = e[f];
            v !== null && !Zt(v) && (n ? v <= t : v < t) ? r = f + 1 : o = f;
          }
          return o;
        }
        return Lo(e, t, Ht, n);
      }
      function Lo(e, t, n, r) {
        var o = 0, f = e == null ? 0 : e.length;
        if (f === 0)
          return 0;
        t = n(t);
        for (var v = t !== t, y = t === null, k = Zt(t), P = t === i; o < f; ) {
          var N = sa((o + f) / 2), z = n(e[N]), J = z !== i, se = z === null, he = z === z, Ee = Zt(z);
          if (v)
            var de = r || he;
          else
            P ? de = he && (r || J) : y ? de = he && J && (r || !se) : k ? de = he && J && !se && (r || !Ee) : se || Ee ? de = !1 : de = r ? z <= t : z < t;
          de ? o = N + 1 : f = N;
        }
        return Ot(f, Vn);
      }
      function fu(e, t) {
        for (var n = -1, r = e.length, o = 0, f = []; ++n < r; ) {
          var v = e[n], y = t ? t(v) : v;
          if (!n || !bn(y, k)) {
            var k = y;
            f[o++] = v === 0 ? 0 : v;
          }
        }
        return f;
      }
      function hu(e) {
        return typeof e == "number" ? e : Zt(e) ? Mn : +e;
      }
      function Vt(e) {
        if (typeof e == "string")
          return e;
        if (be(e))
          return Ve(e, Vt) + "";
        if (Zt(e))
          return qs ? qs.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -$e ? "-0" : t;
      }
      function ar(e, t, n) {
        var r = -1, o = ji, f = e.length, v = !0, y = [], k = y;
        if (n)
          v = !1, o = uo;
        else if (f >= C) {
          var P = t ? null : Jf(e);
          if (P)
            return Vi(P);
          v = !1, o = pi, k = new xr();
        } else
          k = t ? [] : y;
        e:
          for (; ++r < f; ) {
            var N = e[r], z = t ? t(N) : N;
            if (N = n || N !== 0 ? N : 0, v && z === z) {
              for (var J = k.length; J--; )
                if (k[J] === z)
                  continue e;
              t && k.push(z), y.push(N);
            } else
              o(k, z, n) || (k !== y && k.push(z), y.push(N));
          }
        return y;
      }
      function Po(e, t) {
        return t = or(t, e), e = $u(e, t), e == null || delete e[In(hn(t))];
      }
      function du(e, t, n, r) {
        return Si(e, t, n(Sr(e, t)), r);
      }
      function va(e, t, n, r) {
        for (var o = e.length, f = r ? o : -1; (r ? f-- : ++f < o) && t(e[f], f, e); )
          ;
        return n ? fn(e, r ? 0 : f, r ? f + 1 : o) : fn(e, r ? f + 1 : 0, r ? o : f);
      }
      function pu(e, t) {
        var n = e;
        return n instanceof Le && (n = n.value()), lo(t, function(r, o) {
          return o.func.apply(o.thisArg, tr([r], o.args));
        }, n);
      }
      function No(e, t, n) {
        var r = e.length;
        if (r < 2)
          return r ? ar(e[0]) : [];
        for (var o = -1, f = O(r); ++o < r; )
          for (var v = e[o], y = -1; ++y < r; )
            y != o && (f[o] = wi(f[o] || v, e[y], t, n));
        return ar(_t(f, 1), t, n);
      }
      function gu(e, t, n) {
        for (var r = -1, o = e.length, f = t.length, v = {}; ++r < o; ) {
          var y = r < f ? t[r] : i;
          n(v, e[r], y);
        }
        return v;
      }
      function Fo(e) {
        return ot(e) ? e : [];
      }
      function Bo(e) {
        return typeof e == "function" ? e : Ht;
      }
      function or(e, t) {
        return be(e) ? e : Yo(e, t) ? [e] : qu(He(e));
      }
      var Wf = Ae;
      function sr(e, t, n) {
        var r = e.length;
        return n = n === i ? r : n, !t && n >= r ? e : fn(e, t, n);
      }
      var vu = Dc || function(e) {
        return ht.clearTimeout(e);
      };
      function mu(e, t) {
        if (t)
          return e.slice();
        var n = e.length, r = Bs ? Bs(n) : new e.constructor(n);
        return e.copy(r), r;
      }
      function Uo(e) {
        var t = new e.constructor(e.byteLength);
        return new na(t).set(new na(e)), t;
      }
      function Hf(e, t) {
        var n = t ? Uo(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      }
      function qf(e) {
        var t = new e.constructor(e.source, ui.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function Gf(e) {
        return yi ? Xe(yi.call(e)) : {};
      }
      function _u(e, t) {
        var n = t ? Uo(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      }
      function yu(e, t) {
        if (e !== t) {
          var n = e !== i, r = e === null, o = e === e, f = Zt(e), v = t !== i, y = t === null, k = t === t, P = Zt(t);
          if (!y && !P && !f && e > t || f && v && k && !y && !P || r && v && k || !n && k || !o)
            return 1;
          if (!r && !f && !P && e < t || P && n && o && !r && !f || y && n && o || !v && o || !k)
            return -1;
        }
        return 0;
      }
      function Xf(e, t, n) {
        for (var r = -1, o = e.criteria, f = t.criteria, v = o.length, y = n.length; ++r < v; ) {
          var k = yu(o[r], f[r]);
          if (k) {
            if (r >= y)
              return k;
            var P = n[r];
            return k * (P == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function bu(e, t, n, r) {
        for (var o = -1, f = e.length, v = n.length, y = -1, k = t.length, P = pt(f - v, 0), N = O(k + P), z = !r; ++y < k; )
          N[y] = t[y];
        for (; ++o < v; )
          (z || o < f) && (N[n[o]] = e[o]);
        for (; P--; )
          N[y++] = e[o++];
        return N;
      }
      function wu(e, t, n, r) {
        for (var o = -1, f = e.length, v = -1, y = n.length, k = -1, P = t.length, N = pt(f - y, 0), z = O(N + P), J = !r; ++o < N; )
          z[o] = e[o];
        for (var se = o; ++k < P; )
          z[se + k] = t[k];
        for (; ++v < y; )
          (J || o < f) && (z[se + n[v]] = e[o++]);
        return z;
      }
      function $t(e, t) {
        var n = -1, r = e.length;
        for (t || (t = O(r)); ++n < r; )
          t[n] = e[n];
        return t;
      }
      function Rn(e, t, n, r) {
        var o = !n;
        n || (n = {});
        for (var f = -1, v = t.length; ++f < v; ) {
          var y = t[f], k = r ? r(n[y], e[y], y, n, e) : i;
          k === i && (k = e[y]), o ? Hn(n, y, k) : bi(n, y, k);
        }
        return n;
      }
      function Yf(e, t) {
        return Rn(e, Xo(e), t);
      }
      function jf(e, t) {
        return Rn(e, Lu(e), t);
      }
      function ma(e, t) {
        return function(n, r) {
          var o = be(n) ? Jl : vf, f = t ? t() : {};
          return o(n, e, fe(r, 2), f);
        };
      }
      function qr(e) {
        return Ae(function(t, n) {
          var r = -1, o = n.length, f = o > 1 ? n[o - 1] : i, v = o > 2 ? n[2] : i;
          for (f = e.length > 3 && typeof f == "function" ? (o--, f) : i, v && Lt(n[0], n[1], v) && (f = o < 3 ? i : f, o = 1), t = Xe(t); ++r < o; ) {
            var y = n[r];
            y && e(t, y, r, f);
          }
          return t;
        });
      }
      function xu(e, t) {
        return function(n, r) {
          if (n == null)
            return n;
          if (!zt(n))
            return e(n, r);
          for (var o = n.length, f = t ? o : -1, v = Xe(n); (t ? f-- : ++f < o) && r(v[f], f, v) !== !1; )
            ;
          return n;
        };
      }
      function ku(e) {
        return function(t, n, r) {
          for (var o = -1, f = Xe(t), v = r(t), y = v.length; y--; ) {
            var k = v[e ? y : ++o];
            if (n(f[k], k, f) === !1)
              break;
          }
          return t;
        };
      }
      function Kf(e, t, n) {
        var r = t & D, o = Ci(e);
        function f() {
          var v = this && this !== ht && this instanceof f ? o : e;
          return v.apply(r ? n : this, arguments);
        }
        return f;
      }
      function Su(e) {
        return function(t) {
          t = He(t);
          var n = Fr(t) ? _n(t) : i, r = n ? n[0] : t.charAt(0), o = n ? sr(n, 1).join("") : t.slice(1);
          return r[e]() + o;
        };
      }
      function Gr(e) {
        return function(t) {
          return lo(xl(wl(t).replace(Ue, "")), e, "");
        };
      }
      function Ci(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var n = Hr(e.prototype), r = e.apply(n, t);
          return Je(r) ? r : n;
        };
      }
      function Vf(e, t, n) {
        var r = Ci(e);
        function o() {
          for (var f = arguments.length, v = O(f), y = f, k = Xr(o); y--; )
            v[y] = arguments[y];
          var P = f < 3 && v[0] !== k && v[f - 1] !== k ? [] : nr(v, k);
          if (f -= P.length, f < n)
            return Au(
              e,
              t,
              _a,
              o.placeholder,
              i,
              v,
              P,
              i,
              i,
              n - f
            );
          var N = this && this !== ht && this instanceof o ? r : e;
          return jt(N, this, v);
        }
        return o;
      }
      function Cu(e) {
        return function(t, n, r) {
          var o = Xe(t);
          if (!zt(t)) {
            var f = fe(n, 3);
            t = vt(t), n = function(y) {
              return f(o[y], y, o);
            };
          }
          var v = e(t, n, r);
          return v > -1 ? o[f ? t[v] : v] : i;
        };
      }
      function Eu(e) {
        return Gn(function(t) {
          var n = t.length, r = n, o = ln.prototype.thru;
          for (e && t.reverse(); r--; ) {
            var f = t[r];
            if (typeof f != "function")
              throw new un(B);
            if (o && !v && xa(f) == "wrapper")
              var v = new ln([], !0);
          }
          for (r = v ? r : n; ++r < n; ) {
            f = t[r];
            var y = xa(f), k = y == "wrapper" ? qo(f) : i;
            k && jo(k[0]) && k[1] == (De | oe | te | ce) && !k[4].length && k[9] == 1 ? v = v[xa(k[0])].apply(v, k[3]) : v = f.length == 1 && jo(f) ? v[y]() : v.thru(f);
          }
          return function() {
            var P = arguments, N = P[0];
            if (v && P.length == 1 && be(N))
              return v.plant(N).value();
            for (var z = 0, J = n ? t[z].apply(this, P) : N; ++z < n; )
              J = t[z].call(this, J);
            return J;
          };
        });
      }
      function _a(e, t, n, r, o, f, v, y, k, P) {
        var N = t & De, z = t & D, J = t & S, se = t & (oe | ee), he = t & le, Ee = J ? i : Ci(e);
        function de() {
          for (var Me = arguments.length, Ne = O(Me), Jt = Me; Jt--; )
            Ne[Jt] = arguments[Jt];
          if (se)
            var Pt = Xr(de), Qt = sc(Ne, Pt);
          if (r && (Ne = bu(Ne, r, o, se)), f && (Ne = wu(Ne, f, v, se)), Me -= Qt, se && Me < P) {
            var st = nr(Ne, Pt);
            return Au(
              e,
              t,
              _a,
              de.placeholder,
              n,
              Ne,
              st,
              y,
              k,
              P - Me
            );
          }
          var wn = z ? n : this, Kn = J ? wn[e] : e;
          return Me = Ne.length, y ? Ne = vh(Ne, y) : he && Me > 1 && Ne.reverse(), N && k < Me && (Ne.length = k), this && this !== ht && this instanceof de && (Kn = Ee || Ci(Kn)), Kn.apply(wn, Ne);
        }
        return de;
      }
      function Ou(e, t) {
        return function(n, r) {
          return Sf(n, e, t(r), {});
        };
      }
      function ya(e, t) {
        return function(n, r) {
          var o;
          if (n === i && r === i)
            return t;
          if (n !== i && (o = n), r !== i) {
            if (o === i)
              return r;
            typeof n == "string" || typeof r == "string" ? (n = Vt(n), r = Vt(r)) : (n = hu(n), r = hu(r)), o = e(n, r);
          }
          return o;
        };
      }
      function $o(e) {
        return Gn(function(t) {
          return t = Ve(t, Kt(fe())), Ae(function(n) {
            var r = this;
            return e(t, function(o) {
              return jt(o, r, n);
            });
          });
        });
      }
      function ba(e, t) {
        t = t === i ? " " : Vt(t);
        var n = t.length;
        if (n < 2)
          return n ? Mo(t, e) : t;
        var r = Mo(t, oa(e / Br(t)));
        return Fr(t) ? sr(_n(r), 0, e).join("") : r.slice(0, e);
      }
      function Zf(e, t, n, r) {
        var o = t & D, f = Ci(e);
        function v() {
          for (var y = -1, k = arguments.length, P = -1, N = r.length, z = O(N + k), J = this && this !== ht && this instanceof v ? f : e; ++P < N; )
            z[P] = r[P];
          for (; k--; )
            z[P++] = arguments[++y];
          return jt(J, o ? n : this, z);
        }
        return v;
      }
      function Du(e) {
        return function(t, n, r) {
          return r && typeof r != "number" && Lt(t, n, r) && (n = r = i), t = jn(t), n === i ? (n = t, t = 0) : n = jn(n), r = r === i ? t < n ? 1 : -1 : jn(r), Nf(t, n, r, e);
        };
      }
      function wa(e) {
        return function(t, n) {
          return typeof t == "string" && typeof n == "string" || (t = dn(t), n = dn(n)), e(t, n);
        };
      }
      function Au(e, t, n, r, o, f, v, y, k, P) {
        var N = t & oe, z = N ? v : i, J = N ? i : v, se = N ? f : i, he = N ? i : f;
        t |= N ? te : ge, t &= ~(N ? ge : te), t & _ || (t &= ~(D | S));
        var Ee = [
          e,
          t,
          o,
          se,
          z,
          he,
          J,
          y,
          k,
          P
        ], de = n.apply(i, Ee);
        return jo(e) && zu(de, Ee), de.placeholder = r, Wu(de, e, t);
      }
      function zo(e) {
        var t = dt[e];
        return function(n, r) {
          if (n = dn(n), r = r == null ? 0 : Ot(ke(r), 292), r && Ws(n)) {
            var o = (He(n) + "e").split("e"), f = t(o[0] + "e" + (+o[1] + r));
            return o = (He(f) + "e").split("e"), +(o[0] + "e" + (+o[1] - r));
          }
          return t(n);
        };
      }
      var Jf = zr && 1 / Vi(new zr([, -0]))[1] == $e ? function(e) {
        return new zr(e);
      } : ls;
      function Tu(e) {
        return function(t) {
          var n = Dt(t);
          return n == Rt ? mo(t) : n == Qe ? pc(t) : oc(t, e(t));
        };
      }
      function qn(e, t, n, r, o, f, v, y) {
        var k = t & S;
        if (!k && typeof e != "function")
          throw new un(B);
        var P = r ? r.length : 0;
        if (P || (t &= ~(te | ge), r = o = i), v = v === i ? v : pt(ke(v), 0), y = y === i ? y : ke(y), P -= o ? o.length : 0, t & ge) {
          var N = r, z = o;
          r = o = i;
        }
        var J = k ? i : qo(e), se = [
          e,
          t,
          n,
          r,
          o,
          N,
          z,
          f,
          v,
          y
        ];
        if (J && dh(se, J), e = se[0], t = se[1], n = se[2], r = se[3], o = se[4], y = se[9] = se[9] === i ? k ? 0 : e.length : pt(se[9] - P, 0), !y && t & (oe | ee) && (t &= ~(oe | ee)), !t || t == D)
          var he = Kf(e, t, n);
        else
          t == oe || t == ee ? he = Vf(e, t, y) : (t == te || t == (D | te)) && !o.length ? he = Zf(e, t, n, r) : he = _a.apply(i, se);
        var Ee = J ? cu : zu;
        return Wu(Ee(he, se), e, t);
      }
      function Ru(e, t, n, r) {
        return e === i || bn(e, $r[n]) && !qe.call(r, n) ? t : e;
      }
      function Iu(e, t, n, r, o, f) {
        return Je(e) && Je(t) && (f.set(t, e), pa(e, t, i, Iu, f), f.delete(t)), e;
      }
      function Qf(e) {
        return Di(e) ? i : e;
      }
      function Mu(e, t, n, r, o, f) {
        var v = n & d, y = e.length, k = t.length;
        if (y != k && !(v && k > y))
          return !1;
        var P = f.get(e), N = f.get(t);
        if (P && N)
          return P == t && N == e;
        var z = -1, J = !0, se = n & E ? new xr() : i;
        for (f.set(e, t), f.set(t, e); ++z < y; ) {
          var he = e[z], Ee = t[z];
          if (r)
            var de = v ? r(Ee, he, z, t, e, f) : r(he, Ee, z, e, t, f);
          if (de !== i) {
            if (de)
              continue;
            J = !1;
            break;
          }
          if (se) {
            if (!co(t, function(Me, Ne) {
              if (!pi(se, Ne) && (he === Me || o(he, Me, n, r, f)))
                return se.push(Ne);
            })) {
              J = !1;
              break;
            }
          } else if (!(he === Ee || o(he, Ee, n, r, f))) {
            J = !1;
            break;
          }
        }
        return f.delete(e), f.delete(t), J;
      }
      function eh(e, t, n, r, o, f, v) {
        switch (n) {
          case Fn:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case Gt:
            return !(e.byteLength != t.byteLength || !f(new na(e), new na(t)));
          case en:
          case tn:
          case Nn:
            return bn(+e, +t);
          case Cn:
            return e.name == t.name && e.message == t.message;
          case On:
          case Z:
            return e == t + "";
          case Rt:
            var y = mo;
          case Qe:
            var k = r & d;
            if (y || (y = Vi), e.size != t.size && !k)
              return !1;
            var P = v.get(e);
            if (P)
              return P == t;
            r |= E, v.set(e, t);
            var N = Mu(y(e), y(t), r, o, f, v);
            return v.delete(e), N;
          case ve:
            if (yi)
              return yi.call(e) == yi.call(t);
        }
        return !1;
      }
      function th(e, t, n, r, o, f) {
        var v = n & d, y = Wo(e), k = y.length, P = Wo(t), N = P.length;
        if (k != N && !v)
          return !1;
        for (var z = k; z--; ) {
          var J = y[z];
          if (!(v ? J in t : qe.call(t, J)))
            return !1;
        }
        var se = f.get(e), he = f.get(t);
        if (se && he)
          return se == t && he == e;
        var Ee = !0;
        f.set(e, t), f.set(t, e);
        for (var de = v; ++z < k; ) {
          J = y[z];
          var Me = e[J], Ne = t[J];
          if (r)
            var Jt = v ? r(Ne, Me, J, t, e, f) : r(Me, Ne, J, e, t, f);
          if (!(Jt === i ? Me === Ne || o(Me, Ne, n, r, f) : Jt)) {
            Ee = !1;
            break;
          }
          de || (de = J == "constructor");
        }
        if (Ee && !de) {
          var Pt = e.constructor, Qt = t.constructor;
          Pt != Qt && "constructor" in e && "constructor" in t && !(typeof Pt == "function" && Pt instanceof Pt && typeof Qt == "function" && Qt instanceof Qt) && (Ee = !1);
        }
        return f.delete(e), f.delete(t), Ee;
      }
      function Gn(e) {
        return Vo(Uu(e, i, ju), e + "");
      }
      function Wo(e) {
        return Qs(e, vt, Xo);
      }
      function Ho(e) {
        return Qs(e, Wt, Lu);
      }
      var qo = ua ? function(e) {
        return ua.get(e);
      } : ls;
      function xa(e) {
        for (var t = e.name + "", n = Wr[t], r = qe.call(Wr, t) ? n.length : 0; r--; ) {
          var o = n[r], f = o.func;
          if (f == null || f == e)
            return o.name;
        }
        return t;
      }
      function Xr(e) {
        var t = qe.call(c, "placeholder") ? c : e;
        return t.placeholder;
      }
      function fe() {
        var e = c.iteratee || ss;
        return e = e === ss ? nu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function ka(e, t) {
        var n = e.__data__;
        return lh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
      }
      function Go(e) {
        for (var t = vt(e), n = t.length; n--; ) {
          var r = t[n], o = e[r];
          t[n] = [r, o, Fu(o)];
        }
        return t;
      }
      function Cr(e, t) {
        var n = fc(e, t);
        return tu(n) ? n : i;
      }
      function nh(e) {
        var t = qe.call(e, br), n = e[br];
        try {
          e[br] = i;
          var r = !0;
        } catch {
        }
        var o = ea.call(e);
        return r && (t ? e[br] = n : delete e[br]), o;
      }
      var Xo = yo ? function(e) {
        return e == null ? [] : (e = Xe(e), er(yo(e), function(t) {
          return $s.call(e, t);
        }));
      } : cs, Lu = yo ? function(e) {
        for (var t = []; e; )
          tr(t, Xo(e)), e = ra(e);
        return t;
      } : cs, Dt = Mt;
      (bo && Dt(new bo(new ArrayBuffer(1))) != Fn || vi && Dt(new vi()) != Rt || wo && Dt(wo.resolve()) != dr || zr && Dt(new zr()) != Qe || mi && Dt(new mi()) != kt) && (Dt = function(e) {
        var t = Mt(e), n = t == Bt ? e.constructor : i, r = n ? Er(n) : "";
        if (r)
          switch (r) {
            case Fc:
              return Fn;
            case Bc:
              return Rt;
            case Uc:
              return dr;
            case $c:
              return Qe;
            case zc:
              return kt;
          }
        return t;
      });
      function rh(e, t, n) {
        for (var r = -1, o = n.length; ++r < o; ) {
          var f = n[r], v = f.size;
          switch (f.type) {
            case "drop":
              e += v;
              break;
            case "dropRight":
              t -= v;
              break;
            case "take":
              t = Ot(t, e + v);
              break;
            case "takeRight":
              e = pt(e, t - v);
              break;
          }
        }
        return { start: e, end: t };
      }
      function ih(e) {
        var t = e.match(ja);
        return t ? t[1].split(Mi) : [];
      }
      function Pu(e, t, n) {
        t = or(t, e);
        for (var r = -1, o = t.length, f = !1; ++r < o; ) {
          var v = In(t[r]);
          if (!(f = e != null && n(e, v)))
            break;
          e = e[v];
        }
        return f || ++r != o ? f : (o = e == null ? 0 : e.length, !!o && Ta(o) && Xn(v, o) && (be(e) || Or(e)));
      }
      function ah(e) {
        var t = e.length, n = new e.constructor(t);
        return t && typeof e[0] == "string" && qe.call(e, "index") && (n.index = e.index, n.input = e.input), n;
      }
      function Nu(e) {
        return typeof e.constructor == "function" && !Ei(e) ? Hr(ra(e)) : {};
      }
      function oh(e, t, n) {
        var r = e.constructor;
        switch (t) {
          case Gt:
            return Uo(e);
          case en:
          case tn:
            return new r(+e);
          case Fn:
            return Hf(e, n);
          case Ir:
          case Mr:
          case ri:
          case ii:
          case Se:
          case Lr:
          case pr:
          case gn:
          case ai:
            return _u(e, n);
          case Rt:
            return new r();
          case Nn:
          case Z:
            return new r(e);
          case On:
            return qf(e);
          case Qe:
            return new r();
          case ve:
            return Gf(e);
        }
      }
      function sh(e, t) {
        var n = t.length;
        if (!n)
          return e;
        var r = n - 1;
        return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(vr, `{
/* [wrapped with ` + t + `] */
`);
      }
      function uh(e) {
        return be(e) || Or(e) || !!(zs && e && e[zs]);
      }
      function Xn(e, t) {
        var n = typeof e;
        return t = t ?? xe, !!t && (n == "number" || n != "symbol" && mr.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Lt(e, t, n) {
        if (!Je(n))
          return !1;
        var r = typeof t;
        return (r == "number" ? zt(n) && Xn(t, n.length) : r == "string" && t in n) ? bn(n[t], e) : !1;
      }
      function Yo(e, t) {
        if (be(e))
          return !1;
        var n = typeof e;
        return n == "number" || n == "symbol" || n == "boolean" || e == null || Zt(e) ? !0 : lt.test(e) || !Xa.test(e) || t != null && e in Xe(t);
      }
      function lh(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function jo(e) {
        var t = xa(e), n = c[t];
        if (typeof n != "function" || !(t in Le.prototype))
          return !1;
        if (e === n)
          return !0;
        var r = qo(n);
        return !!r && e === r[0];
      }
      function ch(e) {
        return !!Fs && Fs in e;
      }
      var fh = Ji ? Yn : fs;
      function Ei(e) {
        var t = e && e.constructor, n = typeof t == "function" && t.prototype || $r;
        return e === n;
      }
      function Fu(e) {
        return e === e && !Je(e);
      }
      function Bu(e, t) {
        return function(n) {
          return n == null ? !1 : n[e] === t && (t !== i || e in Xe(n));
        };
      }
      function hh(e) {
        var t = Da(e, function(r) {
          return n.size === U && n.clear(), r;
        }), n = t.cache;
        return t;
      }
      function dh(e, t) {
        var n = e[1], r = t[1], o = n | r, f = o < (D | S | De), v = r == De && n == oe || r == De && n == ce && e[7].length <= t[8] || r == (De | ce) && t[7].length <= t[8] && n == oe;
        if (!(f || v))
          return e;
        r & D && (e[2] = t[2], o |= n & D ? 0 : _);
        var y = t[3];
        if (y) {
          var k = e[3];
          e[3] = k ? bu(k, y, t[4]) : y, e[4] = k ? nr(e[3], Y) : t[4];
        }
        return y = t[5], y && (k = e[5], e[5] = k ? wu(k, y, t[6]) : y, e[6] = k ? nr(e[5], Y) : t[6]), y = t[7], y && (e[7] = y), r & De && (e[8] = e[8] == null ? t[8] : Ot(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = o, e;
      }
      function ph(e) {
        var t = [];
        if (e != null)
          for (var n in Xe(e))
            t.push(n);
        return t;
      }
      function gh(e) {
        return ea.call(e);
      }
      function Uu(e, t, n) {
        return t = pt(t === i ? e.length - 1 : t, 0), function() {
          for (var r = arguments, o = -1, f = pt(r.length - t, 0), v = O(f); ++o < f; )
            v[o] = r[t + o];
          o = -1;
          for (var y = O(t + 1); ++o < t; )
            y[o] = r[o];
          return y[t] = n(v), jt(e, this, y);
        };
      }
      function $u(e, t) {
        return t.length < 2 ? e : Sr(e, fn(t, 0, -1));
      }
      function vh(e, t) {
        for (var n = e.length, r = Ot(t.length, n), o = $t(e); r--; ) {
          var f = t[r];
          e[r] = Xn(f, n) ? o[f] : i;
        }
        return e;
      }
      function Ko(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var zu = Hu(cu), Oi = Tc || function(e, t) {
        return ht.setTimeout(e, t);
      }, Vo = Hu(Uf);
      function Wu(e, t, n) {
        var r = t + "";
        return Vo(e, sh(r, mh(ih(r), n)));
      }
      function Hu(e) {
        var t = 0, n = 0;
        return function() {
          var r = Lc(), o = rt - (r - n);
          if (n = r, o > 0) {
            if (++t >= Pe)
              return arguments[0];
          } else
            t = 0;
          return e.apply(i, arguments);
        };
      }
      function Sa(e, t) {
        var n = -1, r = e.length, o = r - 1;
        for (t = t === i ? r : t; ++n < t; ) {
          var f = Io(n, o), v = e[f];
          e[f] = e[n], e[n] = v;
        }
        return e.length = t, e;
      }
      var qu = hh(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(nn, function(n, r, o, f) {
          t.push(o ? f.replace(Ut, "$1") : r || n);
        }), t;
      });
      function In(e) {
        if (typeof e == "string" || Zt(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -$e ? "-0" : t;
      }
      function Er(e) {
        if (e != null) {
          try {
            return Qi.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function mh(e, t) {
        return sn(Ln, function(n) {
          var r = "_." + n[0];
          t & n[1] && !ji(e, r) && e.push(r);
        }), e.sort();
      }
      function Gu(e) {
        if (e instanceof Le)
          return e.clone();
        var t = new ln(e.__wrapped__, e.__chain__);
        return t.__actions__ = $t(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function _h(e, t, n) {
        (n ? Lt(e, t, n) : t === i) ? t = 1 : t = pt(ke(t), 0);
        var r = e == null ? 0 : e.length;
        if (!r || t < 1)
          return [];
        for (var o = 0, f = 0, v = O(oa(r / t)); o < r; )
          v[f++] = fn(e, o, o += t);
        return v;
      }
      function yh(e) {
        for (var t = -1, n = e == null ? 0 : e.length, r = 0, o = []; ++t < n; ) {
          var f = e[t];
          f && (o[r++] = f);
        }
        return o;
      }
      function bh() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = O(e - 1), n = arguments[0], r = e; r--; )
          t[r - 1] = arguments[r];
        return tr(be(n) ? $t(n) : [n], _t(t, 1));
      }
      var wh = Ae(function(e, t) {
        return ot(e) ? wi(e, _t(t, 1, ot, !0)) : [];
      }), xh = Ae(function(e, t) {
        var n = hn(t);
        return ot(n) && (n = i), ot(e) ? wi(e, _t(t, 1, ot, !0), fe(n, 2)) : [];
      }), kh = Ae(function(e, t) {
        var n = hn(t);
        return ot(n) && (n = i), ot(e) ? wi(e, _t(t, 1, ot, !0), i, n) : [];
      });
      function Sh(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (t = n || t === i ? 1 : ke(t), fn(e, t < 0 ? 0 : t, r)) : [];
      }
      function Ch(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (t = n || t === i ? 1 : ke(t), t = r - t, fn(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Eh(e, t) {
        return e && e.length ? va(e, fe(t, 3), !0, !0) : [];
      }
      function Oh(e, t) {
        return e && e.length ? va(e, fe(t, 3), !0) : [];
      }
      function Dh(e, t, n, r) {
        var o = e == null ? 0 : e.length;
        return o ? (n && typeof n != "number" && Lt(e, t, n) && (n = 0, r = o), bf(e, t, n, r)) : [];
      }
      function Xu(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var o = n == null ? 0 : ke(n);
        return o < 0 && (o = pt(r + o, 0)), Ki(e, fe(t, 3), o);
      }
      function Yu(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var o = r - 1;
        return n !== i && (o = ke(n), o = n < 0 ? pt(r + o, 0) : Ot(o, r - 1)), Ki(e, fe(t, 3), o, !0);
      }
      function ju(e) {
        var t = e == null ? 0 : e.length;
        return t ? _t(e, 1) : [];
      }
      function Ah(e) {
        var t = e == null ? 0 : e.length;
        return t ? _t(e, $e) : [];
      }
      function Th(e, t) {
        var n = e == null ? 0 : e.length;
        return n ? (t = t === i ? 1 : ke(t), _t(e, t)) : [];
      }
      function Rh(e) {
        for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
          var o = e[t];
          r[o[0]] = o[1];
        }
        return r;
      }
      function Ku(e) {
        return e && e.length ? e[0] : i;
      }
      function Ih(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var o = n == null ? 0 : ke(n);
        return o < 0 && (o = pt(r + o, 0)), Nr(e, t, o);
      }
      function Mh(e) {
        var t = e == null ? 0 : e.length;
        return t ? fn(e, 0, -1) : [];
      }
      var Lh = Ae(function(e) {
        var t = Ve(e, Fo);
        return t.length && t[0] === e[0] ? Oo(t) : [];
      }), Ph = Ae(function(e) {
        var t = hn(e), n = Ve(e, Fo);
        return t === hn(n) ? t = i : n.pop(), n.length && n[0] === e[0] ? Oo(n, fe(t, 2)) : [];
      }), Nh = Ae(function(e) {
        var t = hn(e), n = Ve(e, Fo);
        return t = typeof t == "function" ? t : i, t && n.pop(), n.length && n[0] === e[0] ? Oo(n, i, t) : [];
      });
      function Fh(e, t) {
        return e == null ? "" : Ic.call(e, t);
      }
      function hn(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : i;
      }
      function Bh(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var o = r;
        return n !== i && (o = ke(n), o = o < 0 ? pt(r + o, 0) : Ot(o, r - 1)), t === t ? vc(e, t, o) : Ki(e, As, o, !0);
      }
      function Uh(e, t) {
        return e && e.length ? ou(e, ke(t)) : i;
      }
      var $h = Ae(Vu);
      function Vu(e, t) {
        return e && e.length && t && t.length ? Ro(e, t) : e;
      }
      function zh(e, t, n) {
        return e && e.length && t && t.length ? Ro(e, t, fe(n, 2)) : e;
      }
      function Wh(e, t, n) {
        return e && e.length && t && t.length ? Ro(e, t, i, n) : e;
      }
      var Hh = Gn(function(e, t) {
        var n = e == null ? 0 : e.length, r = ko(e, t);
        return lu(e, Ve(t, function(o) {
          return Xn(o, n) ? +o : o;
        }).sort(yu)), r;
      });
      function qh(e, t) {
        var n = [];
        if (!(e && e.length))
          return n;
        var r = -1, o = [], f = e.length;
        for (t = fe(t, 3); ++r < f; ) {
          var v = e[r];
          t(v, r, e) && (n.push(v), o.push(r));
        }
        return lu(e, o), n;
      }
      function Zo(e) {
        return e == null ? e : Nc.call(e);
      }
      function Gh(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (n && typeof n != "number" && Lt(e, t, n) ? (t = 0, n = r) : (t = t == null ? 0 : ke(t), n = n === i ? r : ke(n)), fn(e, t, n)) : [];
      }
      function Xh(e, t) {
        return ga(e, t);
      }
      function Yh(e, t, n) {
        return Lo(e, t, fe(n, 2));
      }
      function jh(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
          var r = ga(e, t);
          if (r < n && bn(e[r], t))
            return r;
        }
        return -1;
      }
      function Kh(e, t) {
        return ga(e, t, !0);
      }
      function Vh(e, t, n) {
        return Lo(e, t, fe(n, 2), !0);
      }
      function Zh(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
          var r = ga(e, t, !0) - 1;
          if (bn(e[r], t))
            return r;
        }
        return -1;
      }
      function Jh(e) {
        return e && e.length ? fu(e) : [];
      }
      function Qh(e, t) {
        return e && e.length ? fu(e, fe(t, 2)) : [];
      }
      function ed(e) {
        var t = e == null ? 0 : e.length;
        return t ? fn(e, 1, t) : [];
      }
      function td(e, t, n) {
        return e && e.length ? (t = n || t === i ? 1 : ke(t), fn(e, 0, t < 0 ? 0 : t)) : [];
      }
      function nd(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (t = n || t === i ? 1 : ke(t), t = r - t, fn(e, t < 0 ? 0 : t, r)) : [];
      }
      function rd(e, t) {
        return e && e.length ? va(e, fe(t, 3), !1, !0) : [];
      }
      function id(e, t) {
        return e && e.length ? va(e, fe(t, 3)) : [];
      }
      var ad = Ae(function(e) {
        return ar(_t(e, 1, ot, !0));
      }), od = Ae(function(e) {
        var t = hn(e);
        return ot(t) && (t = i), ar(_t(e, 1, ot, !0), fe(t, 2));
      }), sd = Ae(function(e) {
        var t = hn(e);
        return t = typeof t == "function" ? t : i, ar(_t(e, 1, ot, !0), i, t);
      });
      function ud(e) {
        return e && e.length ? ar(e) : [];
      }
      function ld(e, t) {
        return e && e.length ? ar(e, fe(t, 2)) : [];
      }
      function cd(e, t) {
        return t = typeof t == "function" ? t : i, e && e.length ? ar(e, i, t) : [];
      }
      function Jo(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = er(e, function(n) {
          if (ot(n))
            return t = pt(n.length, t), !0;
        }), go(t, function(n) {
          return Ve(e, fo(n));
        });
      }
      function Zu(e, t) {
        if (!(e && e.length))
          return [];
        var n = Jo(e);
        return t == null ? n : Ve(n, function(r) {
          return jt(t, i, r);
        });
      }
      var fd = Ae(function(e, t) {
        return ot(e) ? wi(e, t) : [];
      }), hd = Ae(function(e) {
        return No(er(e, ot));
      }), dd = Ae(function(e) {
        var t = hn(e);
        return ot(t) && (t = i), No(er(e, ot), fe(t, 2));
      }), pd = Ae(function(e) {
        var t = hn(e);
        return t = typeof t == "function" ? t : i, No(er(e, ot), i, t);
      }), gd = Ae(Jo);
      function vd(e, t) {
        return gu(e || [], t || [], bi);
      }
      function md(e, t) {
        return gu(e || [], t || [], Si);
      }
      var _d = Ae(function(e) {
        var t = e.length, n = t > 1 ? e[t - 1] : i;
        return n = typeof n == "function" ? (e.pop(), n) : i, Zu(e, n);
      });
      function Ju(e) {
        var t = c(e);
        return t.__chain__ = !0, t;
      }
      function yd(e, t) {
        return t(e), e;
      }
      function Ca(e, t) {
        return t(e);
      }
      var bd = Gn(function(e) {
        var t = e.length, n = t ? e[0] : 0, r = this.__wrapped__, o = function(f) {
          return ko(f, e);
        };
        return t > 1 || this.__actions__.length || !(r instanceof Le) || !Xn(n) ? this.thru(o) : (r = r.slice(n, +n + (t ? 1 : 0)), r.__actions__.push({
          func: Ca,
          args: [o],
          thisArg: i
        }), new ln(r, this.__chain__).thru(function(f) {
          return t && !f.length && f.push(i), f;
        }));
      });
      function wd() {
        return Ju(this);
      }
      function xd() {
        return new ln(this.value(), this.__chain__);
      }
      function kd() {
        this.__values__ === i && (this.__values__ = hl(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? i : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function Sd() {
        return this;
      }
      function Cd(e) {
        for (var t, n = this; n instanceof ca; ) {
          var r = Gu(n);
          r.__index__ = 0, r.__values__ = i, t ? o.__wrapped__ = r : t = r;
          var o = r;
          n = n.__wrapped__;
        }
        return o.__wrapped__ = e, t;
      }
      function Ed() {
        var e = this.__wrapped__;
        if (e instanceof Le) {
          var t = e;
          return this.__actions__.length && (t = new Le(this)), t = t.reverse(), t.__actions__.push({
            func: Ca,
            args: [Zo],
            thisArg: i
          }), new ln(t, this.__chain__);
        }
        return this.thru(Zo);
      }
      function Od() {
        return pu(this.__wrapped__, this.__actions__);
      }
      var Dd = ma(function(e, t, n) {
        qe.call(e, n) ? ++e[n] : Hn(e, n, 1);
      });
      function Ad(e, t, n) {
        var r = be(e) ? Os : yf;
        return n && Lt(e, t, n) && (t = i), r(e, fe(t, 3));
      }
      function Td(e, t) {
        var n = be(e) ? er : Zs;
        return n(e, fe(t, 3));
      }
      var Rd = Cu(Xu), Id = Cu(Yu);
      function Md(e, t) {
        return _t(Ea(e, t), 1);
      }
      function Ld(e, t) {
        return _t(Ea(e, t), $e);
      }
      function Pd(e, t, n) {
        return n = n === i ? 1 : ke(n), _t(Ea(e, t), n);
      }
      function Qu(e, t) {
        var n = be(e) ? sn : ir;
        return n(e, fe(t, 3));
      }
      function el(e, t) {
        var n = be(e) ? Ql : Vs;
        return n(e, fe(t, 3));
      }
      var Nd = ma(function(e, t, n) {
        qe.call(e, n) ? e[n].push(t) : Hn(e, n, [t]);
      });
      function Fd(e, t, n, r) {
        e = zt(e) ? e : jr(e), n = n && !r ? ke(n) : 0;
        var o = e.length;
        return n < 0 && (n = pt(o + n, 0)), Ra(e) ? n <= o && e.indexOf(t, n) > -1 : !!o && Nr(e, t, n) > -1;
      }
      var Bd = Ae(function(e, t, n) {
        var r = -1, o = typeof t == "function", f = zt(e) ? O(e.length) : [];
        return ir(e, function(v) {
          f[++r] = o ? jt(t, v, n) : xi(v, t, n);
        }), f;
      }), Ud = ma(function(e, t, n) {
        Hn(e, n, t);
      });
      function Ea(e, t) {
        var n = be(e) ? Ve : ru;
        return n(e, fe(t, 3));
      }
      function $d(e, t, n, r) {
        return e == null ? [] : (be(t) || (t = t == null ? [] : [t]), n = r ? i : n, be(n) || (n = n == null ? [] : [n]), su(e, t, n));
      }
      var zd = ma(function(e, t, n) {
        e[n ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Wd(e, t, n) {
        var r = be(e) ? lo : Rs, o = arguments.length < 3;
        return r(e, fe(t, 4), n, o, ir);
      }
      function Hd(e, t, n) {
        var r = be(e) ? ec : Rs, o = arguments.length < 3;
        return r(e, fe(t, 4), n, o, Vs);
      }
      function qd(e, t) {
        var n = be(e) ? er : Zs;
        return n(e, Aa(fe(t, 3)));
      }
      function Gd(e) {
        var t = be(e) ? Xs : Ff;
        return t(e);
      }
      function Xd(e, t, n) {
        (n ? Lt(e, t, n) : t === i) ? t = 1 : t = ke(t);
        var r = be(e) ? pf : Bf;
        return r(e, t);
      }
      function Yd(e) {
        var t = be(e) ? gf : $f;
        return t(e);
      }
      function jd(e) {
        if (e == null)
          return 0;
        if (zt(e))
          return Ra(e) ? Br(e) : e.length;
        var t = Dt(e);
        return t == Rt || t == Qe ? e.size : Ao(e).length;
      }
      function Kd(e, t, n) {
        var r = be(e) ? co : zf;
        return n && Lt(e, t, n) && (t = i), r(e, fe(t, 3));
      }
      var Vd = Ae(function(e, t) {
        if (e == null)
          return [];
        var n = t.length;
        return n > 1 && Lt(e, t[0], t[1]) ? t = [] : n > 2 && Lt(t[0], t[1], t[2]) && (t = [t[0]]), su(e, _t(t, 1), []);
      }), Oa = Ac || function() {
        return ht.Date.now();
      };
      function Zd(e, t) {
        if (typeof t != "function")
          throw new un(B);
        return e = ke(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function tl(e, t, n) {
        return t = n ? i : t, t = e && t == null ? e.length : t, qn(e, De, i, i, i, i, t);
      }
      function nl(e, t) {
        var n;
        if (typeof t != "function")
          throw new un(B);
        return e = ke(e), function() {
          return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = i), n;
        };
      }
      var Qo = Ae(function(e, t, n) {
        var r = D;
        if (n.length) {
          var o = nr(n, Xr(Qo));
          r |= te;
        }
        return qn(e, r, t, n, o);
      }), rl = Ae(function(e, t, n) {
        var r = D | S;
        if (n.length) {
          var o = nr(n, Xr(rl));
          r |= te;
        }
        return qn(t, r, e, n, o);
      });
      function il(e, t, n) {
        t = n ? i : t;
        var r = qn(e, oe, i, i, i, i, i, t);
        return r.placeholder = il.placeholder, r;
      }
      function al(e, t, n) {
        t = n ? i : t;
        var r = qn(e, ee, i, i, i, i, i, t);
        return r.placeholder = al.placeholder, r;
      }
      function ol(e, t, n) {
        var r, o, f, v, y, k, P = 0, N = !1, z = !1, J = !0;
        if (typeof e != "function")
          throw new un(B);
        t = dn(t) || 0, Je(n) && (N = !!n.leading, z = "maxWait" in n, f = z ? pt(dn(n.maxWait) || 0, t) : f, J = "trailing" in n ? !!n.trailing : J);
        function se(st) {
          var wn = r, Kn = o;
          return r = o = i, P = st, v = e.apply(Kn, wn), v;
        }
        function he(st) {
          return P = st, y = Oi(Me, t), N ? se(st) : v;
        }
        function Ee(st) {
          var wn = st - k, Kn = st - P, Cl = t - wn;
          return z ? Ot(Cl, f - Kn) : Cl;
        }
        function de(st) {
          var wn = st - k, Kn = st - P;
          return k === i || wn >= t || wn < 0 || z && Kn >= f;
        }
        function Me() {
          var st = Oa();
          if (de(st))
            return Ne(st);
          y = Oi(Me, Ee(st));
        }
        function Ne(st) {
          return y = i, J && r ? se(st) : (r = o = i, v);
        }
        function Jt() {
          y !== i && vu(y), P = 0, r = k = o = y = i;
        }
        function Pt() {
          return y === i ? v : Ne(Oa());
        }
        function Qt() {
          var st = Oa(), wn = de(st);
          if (r = arguments, o = this, k = st, wn) {
            if (y === i)
              return he(k);
            if (z)
              return vu(y), y = Oi(Me, t), se(k);
          }
          return y === i && (y = Oi(Me, t)), v;
        }
        return Qt.cancel = Jt, Qt.flush = Pt, Qt;
      }
      var Jd = Ae(function(e, t) {
        return Ks(e, 1, t);
      }), Qd = Ae(function(e, t, n) {
        return Ks(e, dn(t) || 0, n);
      });
      function ep(e) {
        return qn(e, le);
      }
      function Da(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new un(B);
        var n = function() {
          var r = arguments, o = t ? t.apply(this, r) : r[0], f = n.cache;
          if (f.has(o))
            return f.get(o);
          var v = e.apply(this, r);
          return n.cache = f.set(o, v) || f, v;
        };
        return n.cache = new (Da.Cache || Wn)(), n;
      }
      Da.Cache = Wn;
      function Aa(e) {
        if (typeof e != "function")
          throw new un(B);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function tp(e) {
        return nl(2, e);
      }
      var np = Wf(function(e, t) {
        t = t.length == 1 && be(t[0]) ? Ve(t[0], Kt(fe())) : Ve(_t(t, 1), Kt(fe()));
        var n = t.length;
        return Ae(function(r) {
          for (var o = -1, f = Ot(r.length, n); ++o < f; )
            r[o] = t[o].call(this, r[o]);
          return jt(e, this, r);
        });
      }), es = Ae(function(e, t) {
        var n = nr(t, Xr(es));
        return qn(e, te, i, t, n);
      }), sl = Ae(function(e, t) {
        var n = nr(t, Xr(sl));
        return qn(e, ge, i, t, n);
      }), rp = Gn(function(e, t) {
        return qn(e, ce, i, i, i, t);
      });
      function ip(e, t) {
        if (typeof e != "function")
          throw new un(B);
        return t = t === i ? t : ke(t), Ae(e, t);
      }
      function ap(e, t) {
        if (typeof e != "function")
          throw new un(B);
        return t = t == null ? 0 : pt(ke(t), 0), Ae(function(n) {
          var r = n[t], o = sr(n, 0, t);
          return r && tr(o, r), jt(e, this, o);
        });
      }
      function op(e, t, n) {
        var r = !0, o = !0;
        if (typeof e != "function")
          throw new un(B);
        return Je(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), ol(e, t, {
          leading: r,
          maxWait: t,
          trailing: o
        });
      }
      function sp(e) {
        return tl(e, 1);
      }
      function up(e, t) {
        return es(Bo(t), e);
      }
      function lp() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return be(e) ? e : [e];
      }
      function cp(e) {
        return cn(e, H);
      }
      function fp(e, t) {
        return t = typeof t == "function" ? t : i, cn(e, H, t);
      }
      function hp(e) {
        return cn(e, q | H);
      }
      function dp(e, t) {
        return t = typeof t == "function" ? t : i, cn(e, q | H, t);
      }
      function pp(e, t) {
        return t == null || js(e, t, vt(t));
      }
      function bn(e, t) {
        return e === t || e !== e && t !== t;
      }
      var gp = wa(Eo), vp = wa(function(e, t) {
        return e >= t;
      }), Or = eu(/* @__PURE__ */ function() {
        return arguments;
      }()) ? eu : function(e) {
        return tt(e) && qe.call(e, "callee") && !$s.call(e, "callee");
      }, be = O.isArray, mp = ws ? Kt(ws) : Cf;
      function zt(e) {
        return e != null && Ta(e.length) && !Yn(e);
      }
      function ot(e) {
        return tt(e) && zt(e);
      }
      function _p(e) {
        return e === !0 || e === !1 || tt(e) && Mt(e) == en;
      }
      var ur = Rc || fs, yp = xs ? Kt(xs) : Ef;
      function bp(e) {
        return tt(e) && e.nodeType === 1 && !Di(e);
      }
      function wp(e) {
        if (e == null)
          return !0;
        if (zt(e) && (be(e) || typeof e == "string" || typeof e.splice == "function" || ur(e) || Yr(e) || Or(e)))
          return !e.length;
        var t = Dt(e);
        if (t == Rt || t == Qe)
          return !e.size;
        if (Ei(e))
          return !Ao(e).length;
        for (var n in e)
          if (qe.call(e, n))
            return !1;
        return !0;
      }
      function xp(e, t) {
        return ki(e, t);
      }
      function kp(e, t, n) {
        n = typeof n == "function" ? n : i;
        var r = n ? n(e, t) : i;
        return r === i ? ki(e, t, i, n) : !!r;
      }
      function ts(e) {
        if (!tt(e))
          return !1;
        var t = Mt(e);
        return t == Cn || t == Sn || typeof e.message == "string" && typeof e.name == "string" && !Di(e);
      }
      function Sp(e) {
        return typeof e == "number" && Ws(e);
      }
      function Yn(e) {
        if (!Je(e))
          return !1;
        var t = Mt(e);
        return t == En || t == xt || t == Ar || t == Rr;
      }
      function ul(e) {
        return typeof e == "number" && e == ke(e);
      }
      function Ta(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= xe;
      }
      function Je(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function tt(e) {
        return e != null && typeof e == "object";
      }
      var ll = ks ? Kt(ks) : Df;
      function Cp(e, t) {
        return e === t || Do(e, t, Go(t));
      }
      function Ep(e, t, n) {
        return n = typeof n == "function" ? n : i, Do(e, t, Go(t), n);
      }
      function Op(e) {
        return cl(e) && e != +e;
      }
      function Dp(e) {
        if (fh(e))
          throw new me(W);
        return tu(e);
      }
      function Ap(e) {
        return e === null;
      }
      function Tp(e) {
        return e == null;
      }
      function cl(e) {
        return typeof e == "number" || tt(e) && Mt(e) == Nn;
      }
      function Di(e) {
        if (!tt(e) || Mt(e) != Bt)
          return !1;
        var t = ra(e);
        if (t === null)
          return !0;
        var n = qe.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n instanceof n && Qi.call(n) == Cc;
      }
      var ns = Ss ? Kt(Ss) : Af;
      function Rp(e) {
        return ul(e) && e >= -xe && e <= xe;
      }
      var fl = Cs ? Kt(Cs) : Tf;
      function Ra(e) {
        return typeof e == "string" || !be(e) && tt(e) && Mt(e) == Z;
      }
      function Zt(e) {
        return typeof e == "symbol" || tt(e) && Mt(e) == ve;
      }
      var Yr = Es ? Kt(Es) : Rf;
      function Ip(e) {
        return e === i;
      }
      function Mp(e) {
        return tt(e) && Dt(e) == kt;
      }
      function Lp(e) {
        return tt(e) && Mt(e) == St;
      }
      var Pp = wa(To), Np = wa(function(e, t) {
        return e <= t;
      });
      function hl(e) {
        if (!e)
          return [];
        if (zt(e))
          return Ra(e) ? _n(e) : $t(e);
        if (gi && e[gi])
          return dc(e[gi]());
        var t = Dt(e), n = t == Rt ? mo : t == Qe ? Vi : jr;
        return n(e);
      }
      function jn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = dn(e), e === $e || e === -$e) {
          var t = e < 0 ? -1 : 1;
          return t * xn;
        }
        return e === e ? e : 0;
      }
      function ke(e) {
        var t = jn(e), n = t % 1;
        return t === t ? n ? t - n : t : 0;
      }
      function dl(e) {
        return e ? kr(ke(e), 0, gt) : 0;
      }
      function dn(e) {
        if (typeof e == "number")
          return e;
        if (Zt(e))
          return Mn;
        if (Je(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Je(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Is(e);
        var n = Ka.test(e);
        return n || Ni.test(e) ? Yi(e.slice(2), n ? 2 : 8) : li.test(e) ? Mn : +e;
      }
      function pl(e) {
        return Rn(e, Wt(e));
      }
      function Fp(e) {
        return e ? kr(ke(e), -xe, xe) : e === 0 ? e : 0;
      }
      function He(e) {
        return e == null ? "" : Vt(e);
      }
      var Bp = qr(function(e, t) {
        if (Ei(t) || zt(t)) {
          Rn(t, vt(t), e);
          return;
        }
        for (var n in t)
          qe.call(t, n) && bi(e, n, t[n]);
      }), gl = qr(function(e, t) {
        Rn(t, Wt(t), e);
      }), Ia = qr(function(e, t, n, r) {
        Rn(t, Wt(t), e, r);
      }), Up = qr(function(e, t, n, r) {
        Rn(t, vt(t), e, r);
      }), $p = Gn(ko);
      function zp(e, t) {
        var n = Hr(e);
        return t == null ? n : Ys(n, t);
      }
      var Wp = Ae(function(e, t) {
        e = Xe(e);
        var n = -1, r = t.length, o = r > 2 ? t[2] : i;
        for (o && Lt(t[0], t[1], o) && (r = 1); ++n < r; )
          for (var f = t[n], v = Wt(f), y = -1, k = v.length; ++y < k; ) {
            var P = v[y], N = e[P];
            (N === i || bn(N, $r[P]) && !qe.call(e, P)) && (e[P] = f[P]);
          }
        return e;
      }), Hp = Ae(function(e) {
        return e.push(i, Iu), jt(vl, i, e);
      });
      function qp(e, t) {
        return Ds(e, fe(t, 3), Tn);
      }
      function Gp(e, t) {
        return Ds(e, fe(t, 3), Co);
      }
      function Xp(e, t) {
        return e == null ? e : So(e, fe(t, 3), Wt);
      }
      function Yp(e, t) {
        return e == null ? e : Js(e, fe(t, 3), Wt);
      }
      function jp(e, t) {
        return e && Tn(e, fe(t, 3));
      }
      function Kp(e, t) {
        return e && Co(e, fe(t, 3));
      }
      function Vp(e) {
        return e == null ? [] : da(e, vt(e));
      }
      function Zp(e) {
        return e == null ? [] : da(e, Wt(e));
      }
      function rs(e, t, n) {
        var r = e == null ? i : Sr(e, t);
        return r === i ? n : r;
      }
      function Jp(e, t) {
        return e != null && Pu(e, t, wf);
      }
      function is(e, t) {
        return e != null && Pu(e, t, xf);
      }
      var Qp = Ou(function(e, t, n) {
        t != null && typeof t.toString != "function" && (t = ea.call(t)), e[t] = n;
      }, os(Ht)), eg = Ou(function(e, t, n) {
        t != null && typeof t.toString != "function" && (t = ea.call(t)), qe.call(e, t) ? e[t].push(n) : e[t] = [n];
      }, fe), tg = Ae(xi);
      function vt(e) {
        return zt(e) ? Gs(e) : Ao(e);
      }
      function Wt(e) {
        return zt(e) ? Gs(e, !0) : If(e);
      }
      function ng(e, t) {
        var n = {};
        return t = fe(t, 3), Tn(e, function(r, o, f) {
          Hn(n, t(r, o, f), r);
        }), n;
      }
      function rg(e, t) {
        var n = {};
        return t = fe(t, 3), Tn(e, function(r, o, f) {
          Hn(n, o, t(r, o, f));
        }), n;
      }
      var ig = qr(function(e, t, n) {
        pa(e, t, n);
      }), vl = qr(function(e, t, n, r) {
        pa(e, t, n, r);
      }), ag = Gn(function(e, t) {
        var n = {};
        if (e == null)
          return n;
        var r = !1;
        t = Ve(t, function(f) {
          return f = or(f, e), r || (r = f.length > 1), f;
        }), Rn(e, Ho(e), n), r && (n = cn(n, q | ae | H, Qf));
        for (var o = t.length; o--; )
          Po(n, t[o]);
        return n;
      });
      function og(e, t) {
        return ml(e, Aa(fe(t)));
      }
      var sg = Gn(function(e, t) {
        return e == null ? {} : Lf(e, t);
      });
      function ml(e, t) {
        if (e == null)
          return {};
        var n = Ve(Ho(e), function(r) {
          return [r];
        });
        return t = fe(t), uu(e, n, function(r, o) {
          return t(r, o[0]);
        });
      }
      function ug(e, t, n) {
        t = or(t, e);
        var r = -1, o = t.length;
        for (o || (o = 1, e = i); ++r < o; ) {
          var f = e == null ? i : e[In(t[r])];
          f === i && (r = o, f = n), e = Yn(f) ? f.call(e) : f;
        }
        return e;
      }
      function lg(e, t, n) {
        return e == null ? e : Si(e, t, n);
      }
      function cg(e, t, n, r) {
        return r = typeof r == "function" ? r : i, e == null ? e : Si(e, t, n, r);
      }
      var _l = Tu(vt), yl = Tu(Wt);
      function fg(e, t, n) {
        var r = be(e), o = r || ur(e) || Yr(e);
        if (t = fe(t, 4), n == null) {
          var f = e && e.constructor;
          o ? n = r ? new f() : [] : Je(e) ? n = Yn(f) ? Hr(ra(e)) : {} : n = {};
        }
        return (o ? sn : Tn)(e, function(v, y, k) {
          return t(n, v, y, k);
        }), n;
      }
      function hg(e, t) {
        return e == null ? !0 : Po(e, t);
      }
      function dg(e, t, n) {
        return e == null ? e : du(e, t, Bo(n));
      }
      function pg(e, t, n, r) {
        return r = typeof r == "function" ? r : i, e == null ? e : du(e, t, Bo(n), r);
      }
      function jr(e) {
        return e == null ? [] : vo(e, vt(e));
      }
      function gg(e) {
        return e == null ? [] : vo(e, Wt(e));
      }
      function vg(e, t, n) {
        return n === i && (n = t, t = i), n !== i && (n = dn(n), n = n === n ? n : 0), t !== i && (t = dn(t), t = t === t ? t : 0), kr(dn(e), t, n);
      }
      function mg(e, t, n) {
        return t = jn(t), n === i ? (n = t, t = 0) : n = jn(n), e = dn(e), kf(e, t, n);
      }
      function _g(e, t, n) {
        if (n && typeof n != "boolean" && Lt(e, t, n) && (t = n = i), n === i && (typeof t == "boolean" ? (n = t, t = i) : typeof e == "boolean" && (n = e, e = i)), e === i && t === i ? (e = 0, t = 1) : (e = jn(e), t === i ? (t = e, e = 0) : t = jn(t)), e > t) {
          var r = e;
          e = t, t = r;
        }
        if (n || e % 1 || t % 1) {
          var o = Hs();
          return Ot(e + o * (t - e + Xi("1e-" + ((o + "").length - 1))), t);
        }
        return Io(e, t);
      }
      var yg = Gr(function(e, t, n) {
        return t = t.toLowerCase(), e + (n ? bl(t) : t);
      });
      function bl(e) {
        return as(He(e).toLowerCase());
      }
      function wl(e) {
        return e = He(e), e && e.replace(Va, uc).replace(at, "");
      }
      function bg(e, t, n) {
        e = He(e), t = Vt(t);
        var r = e.length;
        n = n === i ? r : kr(ke(n), 0, r);
        var o = n;
        return n -= t.length, n >= 0 && e.slice(n, o) == t;
      }
      function wg(e) {
        return e = He(e), e && qa.test(e) ? e.replace(Ze, lc) : e;
      }
      function xg(e) {
        return e = He(e), e && Ya.test(e) ? e.replace(Dn, "\\$&") : e;
      }
      var kg = Gr(function(e, t, n) {
        return e + (n ? "-" : "") + t.toLowerCase();
      }), Sg = Gr(function(e, t, n) {
        return e + (n ? " " : "") + t.toLowerCase();
      }), Cg = Su("toLowerCase");
      function Eg(e, t, n) {
        e = He(e), t = ke(t);
        var r = t ? Br(e) : 0;
        if (!t || r >= t)
          return e;
        var o = (t - r) / 2;
        return ba(sa(o), n) + e + ba(oa(o), n);
      }
      function Og(e, t, n) {
        e = He(e), t = ke(t);
        var r = t ? Br(e) : 0;
        return t && r < t ? e + ba(t - r, n) : e;
      }
      function Dg(e, t, n) {
        e = He(e), t = ke(t);
        var r = t ? Br(e) : 0;
        return t && r < t ? ba(t - r, n) + e : e;
      }
      function Ag(e, t, n) {
        return n || t == null ? t = 0 : t && (t = +t), Pc(He(e).replace(gr, ""), t || 0);
      }
      function Tg(e, t, n) {
        return (n ? Lt(e, t, n) : t === i) ? t = 1 : t = ke(t), Mo(He(e), t);
      }
      function Rg() {
        var e = arguments, t = He(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var Ig = Gr(function(e, t, n) {
        return e + (n ? "_" : "") + t.toLowerCase();
      });
      function Mg(e, t, n) {
        return n && typeof n != "number" && Lt(e, t, n) && (t = n = i), n = n === i ? gt : n >>> 0, n ? (e = He(e), e && (typeof t == "string" || t != null && !ns(t)) && (t = Vt(t), !t && Fr(e)) ? sr(_n(e), 0, n) : e.split(t, n)) : [];
      }
      var Lg = Gr(function(e, t, n) {
        return e + (n ? " " : "") + as(t);
      });
      function Pg(e, t, n) {
        return e = He(e), n = n == null ? 0 : kr(ke(n), 0, e.length), t = Vt(t), e.slice(n, n + t.length) == t;
      }
      function Ng(e, t, n) {
        var r = c.templateSettings;
        n && Lt(e, t, n) && (t = i), e = He(e), t = Ia({}, t, r, Ru);
        var o = Ia({}, t.imports, r.imports, Ru), f = vt(o), v = vo(o, f), y, k, P = 0, N = t.interpolate || Bn, z = "__p += '", J = _o(
          (t.escape || Bn).source + "|" + N.source + "|" + (N === vn ? Qn : Bn).source + "|" + (t.evaluate || Bn).source + "|$",
          "g"
        ), se = "//# sourceURL=" + (qe.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++an + "]") + `
`;
        e.replace(J, function(de, Me, Ne, Jt, Pt, Qt) {
          return Ne || (Ne = Jt), z += e.slice(P, Qt).replace(Za, cc), Me && (y = !0, z += `' +
__e(` + Me + `) +
'`), Pt && (k = !0, z += `';
` + Pt + `;
__p += '`), Ne && (z += `' +
((__t = (` + Ne + `)) == null ? '' : __t) +
'`), P = Qt + de.length, de;
        }), z += `';
`;
        var he = qe.call(t, "variable") && t.variable;
        if (!he)
          z = `with (obj) {
` + z + `
}
`;
        else if (Xt.test(he))
          throw new me(T);
        z = (k ? z.replace(Zn, "") : z).replace(Ct, "$1").replace(Ha, "$1;"), z = "function(" + (he || "obj") + `) {
` + (he ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (y ? ", __e = _.escape" : "") + (k ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + z + `return __p
}`;
        var Ee = kl(function() {
          return We(f, se + "return " + z).apply(i, v);
        });
        if (Ee.source = z, ts(Ee))
          throw Ee;
        return Ee;
      }
      function Fg(e) {
        return He(e).toLowerCase();
      }
      function Bg(e) {
        return He(e).toUpperCase();
      }
      function Ug(e, t, n) {
        if (e = He(e), e && (n || t === i))
          return Is(e);
        if (!e || !(t = Vt(t)))
          return e;
        var r = _n(e), o = _n(t), f = Ms(r, o), v = Ls(r, o) + 1;
        return sr(r, f, v).join("");
      }
      function $g(e, t, n) {
        if (e = He(e), e && (n || t === i))
          return e.slice(0, Ns(e) + 1);
        if (!e || !(t = Vt(t)))
          return e;
        var r = _n(e), o = Ls(r, _n(t)) + 1;
        return sr(r, 0, o).join("");
      }
      function zg(e, t, n) {
        if (e = He(e), e && (n || t === i))
          return e.replace(gr, "");
        if (!e || !(t = Vt(t)))
          return e;
        var r = _n(e), o = Ms(r, _n(t));
        return sr(r, o).join("");
      }
      function Wg(e, t) {
        var n = ne, r = ye;
        if (Je(t)) {
          var o = "separator" in t ? t.separator : o;
          n = "length" in t ? ke(t.length) : n, r = "omission" in t ? Vt(t.omission) : r;
        }
        e = He(e);
        var f = e.length;
        if (Fr(e)) {
          var v = _n(e);
          f = v.length;
        }
        if (n >= f)
          return e;
        var y = n - Br(r);
        if (y < 1)
          return r;
        var k = v ? sr(v, 0, y).join("") : e.slice(0, y);
        if (o === i)
          return k + r;
        if (v && (y += k.length - y), ns(o)) {
          if (e.slice(y).search(o)) {
            var P, N = k;
            for (o.global || (o = _o(o.source, He(ui.exec(o)) + "g")), o.lastIndex = 0; P = o.exec(N); )
              var z = P.index;
            k = k.slice(0, z === i ? y : z);
          }
        } else if (e.indexOf(Vt(o), y) != y) {
          var J = k.lastIndexOf(o);
          J > -1 && (k = k.slice(0, J));
        }
        return k + r;
      }
      function Hg(e) {
        return e = He(e), e && Ye.test(e) ? e.replace(oi, mc) : e;
      }
      var qg = Gr(function(e, t, n) {
        return e + (n ? " " : "") + t.toUpperCase();
      }), as = Su("toUpperCase");
      function xl(e, t, n) {
        return e = He(e), t = n ? i : t, t === i ? hc(e) ? bc(e) : rc(e) : e.match(t) || [];
      }
      var kl = Ae(function(e, t) {
        try {
          return jt(e, i, t);
        } catch (n) {
          return ts(n) ? n : new me(n);
        }
      }), Gg = Gn(function(e, t) {
        return sn(t, function(n) {
          n = In(n), Hn(e, n, Qo(e[n], e));
        }), e;
      });
      function Xg(e) {
        var t = e == null ? 0 : e.length, n = fe();
        return e = t ? Ve(e, function(r) {
          if (typeof r[1] != "function")
            throw new un(B);
          return [n(r[0]), r[1]];
        }) : [], Ae(function(r) {
          for (var o = -1; ++o < t; ) {
            var f = e[o];
            if (jt(f[0], this, r))
              return jt(f[1], this, r);
          }
        });
      }
      function Yg(e) {
        return _f(cn(e, q));
      }
      function os(e) {
        return function() {
          return e;
        };
      }
      function jg(e, t) {
        return e == null || e !== e ? t : e;
      }
      var Kg = Eu(), Vg = Eu(!0);
      function Ht(e) {
        return e;
      }
      function ss(e) {
        return nu(typeof e == "function" ? e : cn(e, q));
      }
      function Zg(e) {
        return iu(cn(e, q));
      }
      function Jg(e, t) {
        return au(e, cn(t, q));
      }
      var Qg = Ae(function(e, t) {
        return function(n) {
          return xi(n, e, t);
        };
      }), ev = Ae(function(e, t) {
        return function(n) {
          return xi(e, n, t);
        };
      });
      function us(e, t, n) {
        var r = vt(t), o = da(t, r);
        n == null && !(Je(t) && (o.length || !r.length)) && (n = t, t = e, e = this, o = da(t, vt(t)));
        var f = !(Je(n) && "chain" in n) || !!n.chain, v = Yn(e);
        return sn(o, function(y) {
          var k = t[y];
          e[y] = k, v && (e.prototype[y] = function() {
            var P = this.__chain__;
            if (f || P) {
              var N = e(this.__wrapped__), z = N.__actions__ = $t(this.__actions__);
              return z.push({ func: k, args: arguments, thisArg: e }), N.__chain__ = P, N;
            }
            return k.apply(e, tr([this.value()], arguments));
          });
        }), e;
      }
      function tv() {
        return ht._ === this && (ht._ = Ec), this;
      }
      function ls() {
      }
      function nv(e) {
        return e = ke(e), Ae(function(t) {
          return ou(t, e);
        });
      }
      var rv = $o(Ve), iv = $o(Os), av = $o(co);
      function Sl(e) {
        return Yo(e) ? fo(In(e)) : Pf(e);
      }
      function ov(e) {
        return function(t) {
          return e == null ? i : Sr(e, t);
        };
      }
      var sv = Du(), uv = Du(!0);
      function cs() {
        return [];
      }
      function fs() {
        return !1;
      }
      function lv() {
        return {};
      }
      function cv() {
        return "";
      }
      function fv() {
        return !0;
      }
      function hv(e, t) {
        if (e = ke(e), e < 1 || e > xe)
          return [];
        var n = gt, r = Ot(e, gt);
        t = fe(t), e -= gt;
        for (var o = go(r, t); ++n < e; )
          t(n);
        return o;
      }
      function dv(e) {
        return be(e) ? Ve(e, In) : Zt(e) ? [e] : $t(qu(He(e)));
      }
      function pv(e) {
        var t = ++Sc;
        return He(e) + t;
      }
      var gv = ya(function(e, t) {
        return e + t;
      }, 0), vv = zo("ceil"), mv = ya(function(e, t) {
        return e / t;
      }, 1), _v = zo("floor");
      function yv(e) {
        return e && e.length ? ha(e, Ht, Eo) : i;
      }
      function bv(e, t) {
        return e && e.length ? ha(e, fe(t, 2), Eo) : i;
      }
      function wv(e) {
        return Ts(e, Ht);
      }
      function xv(e, t) {
        return Ts(e, fe(t, 2));
      }
      function kv(e) {
        return e && e.length ? ha(e, Ht, To) : i;
      }
      function Sv(e, t) {
        return e && e.length ? ha(e, fe(t, 2), To) : i;
      }
      var Cv = ya(function(e, t) {
        return e * t;
      }, 1), Ev = zo("round"), Ov = ya(function(e, t) {
        return e - t;
      }, 0);
      function Dv(e) {
        return e && e.length ? po(e, Ht) : 0;
      }
      function Av(e, t) {
        return e && e.length ? po(e, fe(t, 2)) : 0;
      }
      return c.after = Zd, c.ary = tl, c.assign = Bp, c.assignIn = gl, c.assignInWith = Ia, c.assignWith = Up, c.at = $p, c.before = nl, c.bind = Qo, c.bindAll = Gg, c.bindKey = rl, c.castArray = lp, c.chain = Ju, c.chunk = _h, c.compact = yh, c.concat = bh, c.cond = Xg, c.conforms = Yg, c.constant = os, c.countBy = Dd, c.create = zp, c.curry = il, c.curryRight = al, c.debounce = ol, c.defaults = Wp, c.defaultsDeep = Hp, c.defer = Jd, c.delay = Qd, c.difference = wh, c.differenceBy = xh, c.differenceWith = kh, c.drop = Sh, c.dropRight = Ch, c.dropRightWhile = Eh, c.dropWhile = Oh, c.fill = Dh, c.filter = Td, c.flatMap = Md, c.flatMapDeep = Ld, c.flatMapDepth = Pd, c.flatten = ju, c.flattenDeep = Ah, c.flattenDepth = Th, c.flip = ep, c.flow = Kg, c.flowRight = Vg, c.fromPairs = Rh, c.functions = Vp, c.functionsIn = Zp, c.groupBy = Nd, c.initial = Mh, c.intersection = Lh, c.intersectionBy = Ph, c.intersectionWith = Nh, c.invert = Qp, c.invertBy = eg, c.invokeMap = Bd, c.iteratee = ss, c.keyBy = Ud, c.keys = vt, c.keysIn = Wt, c.map = Ea, c.mapKeys = ng, c.mapValues = rg, c.matches = Zg, c.matchesProperty = Jg, c.memoize = Da, c.merge = ig, c.mergeWith = vl, c.method = Qg, c.methodOf = ev, c.mixin = us, c.negate = Aa, c.nthArg = nv, c.omit = ag, c.omitBy = og, c.once = tp, c.orderBy = $d, c.over = rv, c.overArgs = np, c.overEvery = iv, c.overSome = av, c.partial = es, c.partialRight = sl, c.partition = zd, c.pick = sg, c.pickBy = ml, c.property = Sl, c.propertyOf = ov, c.pull = $h, c.pullAll = Vu, c.pullAllBy = zh, c.pullAllWith = Wh, c.pullAt = Hh, c.range = sv, c.rangeRight = uv, c.rearg = rp, c.reject = qd, c.remove = qh, c.rest = ip, c.reverse = Zo, c.sampleSize = Xd, c.set = lg, c.setWith = cg, c.shuffle = Yd, c.slice = Gh, c.sortBy = Vd, c.sortedUniq = Jh, c.sortedUniqBy = Qh, c.split = Mg, c.spread = ap, c.tail = ed, c.take = td, c.takeRight = nd, c.takeRightWhile = rd, c.takeWhile = id, c.tap = yd, c.throttle = op, c.thru = Ca, c.toArray = hl, c.toPairs = _l, c.toPairsIn = yl, c.toPath = dv, c.toPlainObject = pl, c.transform = fg, c.unary = sp, c.union = ad, c.unionBy = od, c.unionWith = sd, c.uniq = ud, c.uniqBy = ld, c.uniqWith = cd, c.unset = hg, c.unzip = Jo, c.unzipWith = Zu, c.update = dg, c.updateWith = pg, c.values = jr, c.valuesIn = gg, c.without = fd, c.words = xl, c.wrap = up, c.xor = hd, c.xorBy = dd, c.xorWith = pd, c.zip = gd, c.zipObject = vd, c.zipObjectDeep = md, c.zipWith = _d, c.entries = _l, c.entriesIn = yl, c.extend = gl, c.extendWith = Ia, us(c, c), c.add = gv, c.attempt = kl, c.camelCase = yg, c.capitalize = bl, c.ceil = vv, c.clamp = vg, c.clone = cp, c.cloneDeep = hp, c.cloneDeepWith = dp, c.cloneWith = fp, c.conformsTo = pp, c.deburr = wl, c.defaultTo = jg, c.divide = mv, c.endsWith = bg, c.eq = bn, c.escape = wg, c.escapeRegExp = xg, c.every = Ad, c.find = Rd, c.findIndex = Xu, c.findKey = qp, c.findLast = Id, c.findLastIndex = Yu, c.findLastKey = Gp, c.floor = _v, c.forEach = Qu, c.forEachRight = el, c.forIn = Xp, c.forInRight = Yp, c.forOwn = jp, c.forOwnRight = Kp, c.get = rs, c.gt = gp, c.gte = vp, c.has = Jp, c.hasIn = is, c.head = Ku, c.identity = Ht, c.includes = Fd, c.indexOf = Ih, c.inRange = mg, c.invoke = tg, c.isArguments = Or, c.isArray = be, c.isArrayBuffer = mp, c.isArrayLike = zt, c.isArrayLikeObject = ot, c.isBoolean = _p, c.isBuffer = ur, c.isDate = yp, c.isElement = bp, c.isEmpty = wp, c.isEqual = xp, c.isEqualWith = kp, c.isError = ts, c.isFinite = Sp, c.isFunction = Yn, c.isInteger = ul, c.isLength = Ta, c.isMap = ll, c.isMatch = Cp, c.isMatchWith = Ep, c.isNaN = Op, c.isNative = Dp, c.isNil = Tp, c.isNull = Ap, c.isNumber = cl, c.isObject = Je, c.isObjectLike = tt, c.isPlainObject = Di, c.isRegExp = ns, c.isSafeInteger = Rp, c.isSet = fl, c.isString = Ra, c.isSymbol = Zt, c.isTypedArray = Yr, c.isUndefined = Ip, c.isWeakMap = Mp, c.isWeakSet = Lp, c.join = Fh, c.kebabCase = kg, c.last = hn, c.lastIndexOf = Bh, c.lowerCase = Sg, c.lowerFirst = Cg, c.lt = Pp, c.lte = Np, c.max = yv, c.maxBy = bv, c.mean = wv, c.meanBy = xv, c.min = kv, c.minBy = Sv, c.stubArray = cs, c.stubFalse = fs, c.stubObject = lv, c.stubString = cv, c.stubTrue = fv, c.multiply = Cv, c.nth = Uh, c.noConflict = tv, c.noop = ls, c.now = Oa, c.pad = Eg, c.padEnd = Og, c.padStart = Dg, c.parseInt = Ag, c.random = _g, c.reduce = Wd, c.reduceRight = Hd, c.repeat = Tg, c.replace = Rg, c.result = ug, c.round = Ev, c.runInContext = x, c.sample = Gd, c.size = jd, c.snakeCase = Ig, c.some = Kd, c.sortedIndex = Xh, c.sortedIndexBy = Yh, c.sortedIndexOf = jh, c.sortedLastIndex = Kh, c.sortedLastIndexBy = Vh, c.sortedLastIndexOf = Zh, c.startCase = Lg, c.startsWith = Pg, c.subtract = Ov, c.sum = Dv, c.sumBy = Av, c.template = Ng, c.times = hv, c.toFinite = jn, c.toInteger = ke, c.toLength = dl, c.toLower = Fg, c.toNumber = dn, c.toSafeInteger = Fp, c.toString = He, c.toUpper = Bg, c.trim = Ug, c.trimEnd = $g, c.trimStart = zg, c.truncate = Wg, c.unescape = Hg, c.uniqueId = pv, c.upperCase = qg, c.upperFirst = as, c.each = Qu, c.eachRight = el, c.first = Ku, us(c, function() {
        var e = {};
        return Tn(c, function(t, n) {
          qe.call(c.prototype, n) || (e[n] = t);
        }), e;
      }(), { chain: !1 }), c.VERSION = h, sn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        c[e].placeholder = c;
      }), sn(["drop", "take"], function(e, t) {
        Le.prototype[e] = function(n) {
          n = n === i ? 1 : pt(ke(n), 0);
          var r = this.__filtered__ && !t ? new Le(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = Ot(n, r.__takeCount__) : r.__views__.push({
            size: Ot(n, gt),
            type: e + (r.__dir__ < 0 ? "Right" : "")
          }), r;
        }, Le.prototype[e + "Right"] = function(n) {
          return this.reverse()[e](n).reverse();
        };
      }), sn(["filter", "map", "takeWhile"], function(e, t) {
        var n = t + 1, r = n == ft || n == je;
        Le.prototype[e] = function(o) {
          var f = this.clone();
          return f.__iteratees__.push({
            iteratee: fe(o, 3),
            type: n
          }), f.__filtered__ = f.__filtered__ || r, f;
        };
      }), sn(["head", "last"], function(e, t) {
        var n = "take" + (t ? "Right" : "");
        Le.prototype[e] = function() {
          return this[n](1).value()[0];
        };
      }), sn(["initial", "tail"], function(e, t) {
        var n = "drop" + (t ? "" : "Right");
        Le.prototype[e] = function() {
          return this.__filtered__ ? new Le(this) : this[n](1);
        };
      }), Le.prototype.compact = function() {
        return this.filter(Ht);
      }, Le.prototype.find = function(e) {
        return this.filter(e).head();
      }, Le.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, Le.prototype.invokeMap = Ae(function(e, t) {
        return typeof e == "function" ? new Le(this) : this.map(function(n) {
          return xi(n, e, t);
        });
      }), Le.prototype.reject = function(e) {
        return this.filter(Aa(fe(e)));
      }, Le.prototype.slice = function(e, t) {
        e = ke(e);
        var n = this;
        return n.__filtered__ && (e > 0 || t < 0) ? new Le(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== i && (t = ke(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n);
      }, Le.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, Le.prototype.toArray = function() {
        return this.take(gt);
      }, Tn(Le.prototype, function(e, t) {
        var n = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), o = c[r ? "take" + (t == "last" ? "Right" : "") : t], f = r || /^find/.test(t);
        o && (c.prototype[t] = function() {
          var v = this.__wrapped__, y = r ? [1] : arguments, k = v instanceof Le, P = y[0], N = k || be(v), z = function(Me) {
            var Ne = o.apply(c, tr([Me], y));
            return r && J ? Ne[0] : Ne;
          };
          N && n && typeof P == "function" && P.length != 1 && (k = N = !1);
          var J = this.__chain__, se = !!this.__actions__.length, he = f && !J, Ee = k && !se;
          if (!f && N) {
            v = Ee ? v : new Le(this);
            var de = e.apply(v, y);
            return de.__actions__.push({ func: Ca, args: [z], thisArg: i }), new ln(de, J);
          }
          return he && Ee ? e.apply(this, y) : (de = this.thru(z), he ? r ? de.value()[0] : de.value() : de);
        });
      }), sn(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = Zi[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
        c.prototype[e] = function() {
          var o = arguments;
          if (r && !this.__chain__) {
            var f = this.value();
            return t.apply(be(f) ? f : [], o);
          }
          return this[n](function(v) {
            return t.apply(be(v) ? v : [], o);
          });
        };
      }), Tn(Le.prototype, function(e, t) {
        var n = c[t];
        if (n) {
          var r = n.name + "";
          qe.call(Wr, r) || (Wr[r] = []), Wr[r].push({ name: t, func: n });
        }
      }), Wr[_a(i, S).name] = [{
        name: "wrapper",
        func: i
      }], Le.prototype.clone = Wc, Le.prototype.reverse = Hc, Le.prototype.value = qc, c.prototype.at = bd, c.prototype.chain = wd, c.prototype.commit = xd, c.prototype.next = kd, c.prototype.plant = Cd, c.prototype.reverse = Ed, c.prototype.toJSON = c.prototype.valueOf = c.prototype.value = Od, c.prototype.first = c.prototype.head, gi && (c.prototype[gi] = Sd), c;
    }, Ur = wc();
    yr ? ((yr.exports = Ur)._ = Ur, oo._ = Ur) : ht._ = Ur;
  }).call(Vr);
})(Ua, Ua.exports);
var Zr = Ua.exports;
const Vv = /* @__PURE__ */ ql(Zr), Zv = { class: "relative flex" }, Jv = ["value"], Qv = ["value"], em = /* @__PURE__ */ j("svg", {
  class: "shrink-0 text-gray-700 pointer-events-none absolute right-[11px] top-[15px]",
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "6",
  viewBox: "0 0 10 6"
}, [
  /* @__PURE__ */ j("path", {
    class: "fill-current shrink-0 text-gray-700 pointer-events-none absolute right-[11px] top-[15px]",
    d: "M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"
  })
], -1), Ma = /* @__PURE__ */ ni({
  __name: "SelectControl",
  props: {
    value: {},
    options: {}
  },
  emits: ["change"],
  setup(s, { emit: p }) {
    const i = p;
    return (h, C) => (L(), V("div", Zv, [
      j("select", {
        class: "appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 h-10 pl-3 pr-6 rounded-lg flex-grow",
        value: h.value,
        onChange: C[0] || (C[0] = (W) => i("change", W.target.value))
      }, [
        (L(!0), V(Ke, null, hr(h.options, (W) => (L(), V("option", {
          key: W.value,
          value: W.value
        }, ie(W.label), 9, Qv))), 128))
      ], 40, Jv),
      em
    ]));
  }
}), ms = (s, p) => {
  const i = s.__vccOpts || s;
  for (const [h, C] of p)
    i[h] = C;
  return i;
}, tm = {
  props: {
    type: {
      type: String,
      required: !1
    },
    active: {
      type: Boolean,
      default: !1
    }
  }
};
function nm(s, p, i, h, C, W) {
  const B = Ft("Icon");
  return L(), V("button", {
    type: "button",
    class: pn(["rounded-lg cursor-pointer border h-9 min-w-9 px-2 flex items-center justify-center focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 dark:bg-gray-900", {
      "border-gray-200 dark:border-gray-700": !i.active,
      "border-primary-500 text-primary-500": i.active
    }])
  }, [
    fr(s.$slots, "default"),
    i.type ? (L(), Oe(B, {
      key: 0,
      type: i.type,
      width: "16",
      height: "16"
    }, null, 8, ["type"])) : pe("", !0)
  ], 2);
}
const Nt = /* @__PURE__ */ ms(tm, [["render", nm]]);
let La;
const rm = new Uint8Array(16);
function im() {
  if (!La && (La = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !La))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return La(rm);
}
const yt = [];
for (let s = 0; s < 256; ++s)
  yt.push((s + 256).toString(16).slice(1));
function am(s, p = 0) {
  return yt[s[p + 0]] + yt[s[p + 1]] + yt[s[p + 2]] + yt[s[p + 3]] + "-" + yt[s[p + 4]] + yt[s[p + 5]] + "-" + yt[s[p + 6]] + yt[s[p + 7]] + "-" + yt[s[p + 8]] + yt[s[p + 9]] + "-" + yt[s[p + 10]] + yt[s[p + 11]] + yt[s[p + 12]] + yt[s[p + 13]] + yt[s[p + 14]] + yt[s[p + 15]];
}
const om = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ol = {
  randomUUID: om
};
function sm(s, p, i) {
  if (Ol.randomUUID && !p && !s)
    return Ol.randomUUID();
  s = s || {};
  const h = s.random || (s.rng || im)();
  if (h[6] = h[6] & 15 | 64, h[8] = h[8] & 63 | 128, p) {
    i = i || 0;
    for (let C = 0; C < 16; ++C)
      p[i + C] = h[C];
    return p;
  }
  return am(h);
}
var Gl = { exports: {} };
(function(s) {
  (function() {
    var p = function(i) {
      if (!(this instanceof p))
        return new p(i);
      if (this.version = 1, this.support = typeof File < "u" && typeof Blob < "u" && typeof FileList < "u" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || !1), !this.support)
        return !1;
      var h = this;
      h.files = [], h.defaults = {
        chunkSize: 1048576,
        forceChunkSize: !1,
        simultaneousUploads: 3,
        fileParameterName: "file",
        chunkNumberParameterName: "resumableChunkNumber",
        chunkSizeParameterName: "resumableChunkSize",
        currentChunkSizeParameterName: "resumableCurrentChunkSize",
        totalSizeParameterName: "resumableTotalSize",
        typeParameterName: "resumableType",
        identifierParameterName: "resumableIdentifier",
        fileNameParameterName: "resumableFilename",
        relativePathParameterName: "resumableRelativePath",
        totalChunksParameterName: "resumableTotalChunks",
        throttleProgressCallbacks: 0.5,
        query: {},
        headers: {},
        preprocess: null,
        method: "multipart",
        uploadMethod: "POST",
        testMethod: "GET",
        prioritizeFirstAndLastChunk: !1,
        target: "/",
        testTarget: null,
        parameterNamespace: "",
        testChunks: !0,
        generateUniqueIdentifier: null,
        getTarget: null,
        maxChunkRetries: 100,
        chunkRetryInterval: void 0,
        permanentErrors: [400, 404, 415, 500, 501],
        maxFiles: void 0,
        withCredentials: !1,
        xhrTimeout: 0,
        clearInput: !0,
        chunkFormat: "blob",
        setChunkTypeFromFile: !1,
        maxFilesErrorCallback: function(d, E) {
          var D = h.getOpt("maxFiles");
          alert("Please upload no more than " + D + " file" + (D === 1 ? "" : "s") + " at a time.");
        },
        minFileSize: 1,
        minFileSizeErrorCallback: function(d, E) {
          alert(d.fileName || d.name + " is too small, please upload files larger than " + C.formatSize(h.getOpt("minFileSize")) + ".");
        },
        maxFileSize: void 0,
        maxFileSizeErrorCallback: function(d, E) {
          alert(d.fileName || d.name + " is too large, please upload files less than " + C.formatSize(h.getOpt("maxFileSize")) + ".");
        },
        fileType: [],
        fileTypeErrorCallback: function(d, E) {
          alert(d.fileName || d.name + " has type not allowed, please upload files of type " + h.getOpt("fileType") + ".");
        }
      }, h.opts = i || {}, h.getOpt = function(d) {
        var E = this;
        if (d instanceof Array) {
          var D = {};
          return C.each(d, function(S) {
            D[S] = E.getOpt(S);
          }), D;
        }
        if (E instanceof H) {
          if (typeof E.opts[d] < "u")
            return E.opts[d];
          E = E.fileObj;
        }
        if (E instanceof ae) {
          if (typeof E.opts[d] < "u")
            return E.opts[d];
          E = E.resumableObj;
        }
        if (E instanceof p)
          return typeof E.opts[d] < "u" ? E.opts[d] : E.defaults[d];
      }, h.events = [], h.on = function(d, E) {
        h.events.push(d.toLowerCase(), E);
      }, h.fire = function() {
        for (var d = [], E = 0; E < arguments.length; E++)
          d.push(arguments[E]);
        for (var D = d[0].toLowerCase(), E = 0; E <= h.events.length; E += 2)
          h.events[E] == D && h.events[E + 1].apply(h, d.slice(1)), h.events[E] == "catchall" && h.events[E + 1].apply(null, d);
        D == "fileerror" && h.fire("error", d[2], d[1]), D == "fileprogress" && h.fire("progress");
      };
      var C = {
        stopEvent: function(d) {
          d.stopPropagation(), d.preventDefault();
        },
        each: function(d, E) {
          if (typeof d.length < "u") {
            for (var D = 0; D < d.length; D++)
              if (E(d[D]) === !1)
                return;
          } else
            for (D in d)
              if (E(D, d[D]) === !1)
                return;
        },
        generateUniqueIdentifier: function(d, E) {
          var D = h.getOpt("generateUniqueIdentifier");
          if (typeof D == "function")
            return D(d, E);
          var S = d.webkitRelativePath || d.fileName || d.name, _ = d.size;
          return _ + "-" + S.replace(/[^0-9a-zA-Z_-]/img, "");
        },
        contains: function(d, E) {
          var D = !1;
          return C.each(d, function(S) {
            return S == E ? (D = !0, !1) : !0;
          }), D;
        },
        formatSize: function(d) {
          return d < 1024 ? d + " bytes" : d < 1024 * 1024 ? (d / 1024).toFixed(0) + " KB" : d < 1024 * 1024 * 1024 ? (d / 1024 / 1024).toFixed(1) + " MB" : (d / 1024 / 1024 / 1024).toFixed(1) + " GB";
        },
        getTarget: function(d, E) {
          var D = h.getOpt("target");
          if (d === "test" && h.getOpt("testTarget") && (D = h.getOpt("testTarget") === "/" ? h.getOpt("target") : h.getOpt("testTarget")), typeof D == "function")
            return D(E);
          var S = D.indexOf("?") < 0 ? "?" : "&", _ = E.join("&");
          return D + S + _;
        }
      }, W = function(d) {
        C.stopEvent(d), d.dataTransfer && d.dataTransfer.items ? Y(d.dataTransfer.items, d) : d.dataTransfer && d.dataTransfer.files && Y(d.dataTransfer.files, d);
      }, B = function(d) {
        d.preventDefault();
      };
      function T(d, E, D, S) {
        var _;
        if (d.isFile)
          return d.file(function(oe) {
            oe.relativePath = E + oe.name, D.push(oe), S();
          });
        if (d.isDirectory ? _ = d : d instanceof File && D.push(d), typeof d.webkitGetAsEntry == "function" && (_ = d.webkitGetAsEntry()), _ && _.isDirectory)
          return U(_, E + _.name + "/", D, S);
        typeof d.getAsFile == "function" && (d = d.getAsFile(), d instanceof File && (d.relativePath = E + d.name, D.push(d))), S();
      }
      function $(d, E) {
        if (!d || d.length === 0)
          return E();
        d[0](function() {
          $(d.slice(1), E);
        });
      }
      function U(d, E, D, S) {
        var _ = d.createReader();
        _.readEntries(function(oe) {
          if (!oe.length)
            return S();
          $(
            oe.map(function(ee) {
              return T.bind(null, ee, E, D);
            }),
            S
          );
        });
      }
      function Y(d, E) {
        if (d.length) {
          h.fire("beforeAdd");
          var D = [];
          $(
            Array.prototype.map.call(d, function(S) {
              return T.bind(null, S, "", D);
            }),
            function() {
              D.length && q(D, E);
            }
          );
        }
      }
      var q = function(d, E) {
        var D = 0, S = h.getOpt(["maxFiles", "minFileSize", "maxFileSize", "maxFilesErrorCallback", "minFileSizeErrorCallback", "maxFileSizeErrorCallback", "fileType", "fileTypeErrorCallback"]);
        if (typeof S.maxFiles < "u" && S.maxFiles < d.length + h.files.length)
          if (S.maxFiles === 1 && h.files.length === 1 && d.length === 1)
            h.removeFile(h.files[0]);
          else
            return S.maxFilesErrorCallback(d, D++), !1;
        var _ = [], oe = [], ee = d.length, te = function() {
          if (!--ee) {
            if (!_.length && !oe.length)
              return;
            window.setTimeout(function() {
              h.fire("filesAdded", _, oe);
            }, 0);
          }
        };
        C.each(d, function(ge) {
          var De = ge.name;
          if (S.fileType.length > 0) {
            var ce = !1;
            for (var le in S.fileType) {
              var ne = "." + S.fileType[le];
              if (De.toLowerCase().indexOf(ne.toLowerCase(), De.length - ne.length) !== -1) {
                ce = !0;
                break;
              }
            }
            if (!ce)
              return S.fileTypeErrorCallback(ge, D++), !1;
          }
          if (typeof S.minFileSize < "u" && ge.size < S.minFileSize)
            return S.minFileSizeErrorCallback(ge, D++), !1;
          if (typeof S.maxFileSize < "u" && ge.size > S.maxFileSize)
            return S.maxFileSizeErrorCallback(ge, D++), !1;
          function ye(rt) {
            h.getFromUniqueIdentifier(rt) ? oe.push(ge) : function() {
              ge.uniqueIdentifier = rt;
              var ft = new ae(h, ge, rt);
              h.files.push(ft), _.push(ft), ft.container = typeof E < "u" ? E.srcElement : null, window.setTimeout(function() {
                h.fire("fileAdded", ft, E);
              }, 0);
            }(), te();
          }
          var Pe = C.generateUniqueIdentifier(ge, E);
          Pe && typeof Pe.then == "function" ? Pe.then(
            function(rt) {
              ye(rt);
            },
            function() {
              te();
            }
          ) : ye(Pe);
        });
      };
      function ae(d, E, D) {
        var S = this;
        S.opts = {}, S.getOpt = d.getOpt, S._prevProgress = 0, S.resumableObj = d, S.file = E, S.fileName = E.fileName || E.name, S.size = E.size, S.relativePath = E.relativePath || E.webkitRelativePath || S.fileName, S.uniqueIdentifier = D, S._pause = !1, S.container = "";
        var _ = D !== void 0, oe = function(ee, te) {
          switch (ee) {
            case "progress":
              S.resumableObj.fire("fileProgress", S, te);
              break;
            case "error":
              S.abort(), _ = !0, S.chunks = [], S.resumableObj.fire("fileError", S, te);
              break;
            case "success":
              if (_)
                return;
              S.resumableObj.fire("fileProgress", S), S.isComplete() && S.resumableObj.fire("fileSuccess", S, te);
              break;
            case "retry":
              S.resumableObj.fire("fileRetry", S);
              break;
          }
        };
        return S.chunks = [], S.abort = function() {
          var ee = 0;
          C.each(S.chunks, function(te) {
            te.status() == "uploading" && (te.abort(), ee++);
          }), ee > 0 && S.resumableObj.fire("fileProgress", S);
        }, S.cancel = function() {
          var ee = S.chunks;
          S.chunks = [], C.each(ee, function(te) {
            te.status() == "uploading" && (te.abort(), S.resumableObj.uploadNextChunk());
          }), S.resumableObj.removeFile(S), S.resumableObj.fire("fileProgress", S);
        }, S.retry = function() {
          S.bootstrap();
          var ee = !1;
          S.resumableObj.on("chunkingComplete", function() {
            ee || S.resumableObj.upload(), ee = !0;
          });
        }, S.bootstrap = function() {
          S.abort(), _ = !1, S.chunks = [], S._prevProgress = 0;
          for (var ee = S.getOpt("forceChunkSize") ? Math.ceil : Math.floor, te = Math.max(ee(S.file.size / S.getOpt("chunkSize")), 1), ge = 0; ge < te; ge++)
            (function(De) {
              window.setTimeout(function() {
                S.chunks.push(new H(S.resumableObj, S, De, oe)), S.resumableObj.fire("chunkingProgress", S, De / te);
              }, 0);
            })(ge);
          window.setTimeout(function() {
            S.resumableObj.fire("chunkingComplete", S);
          }, 0);
        }, S.progress = function() {
          if (_)
            return 1;
          var ee = 0, te = !1;
          return C.each(S.chunks, function(ge) {
            ge.status() == "error" && (te = !0), ee += ge.progress(!0);
          }), ee = te || ee > 0.99999 ? 1 : ee, ee = Math.max(S._prevProgress, ee), S._prevProgress = ee, ee;
        }, S.isUploading = function() {
          var ee = !1;
          return C.each(S.chunks, function(te) {
            if (te.status() == "uploading")
              return ee = !0, !1;
          }), ee;
        }, S.isComplete = function() {
          var ee = !1;
          return C.each(S.chunks, function(te) {
            var ge = te.status();
            if (ge == "pending" || ge == "uploading" || te.preprocessState === 1)
              return ee = !0, !1;
          }), !ee;
        }, S.pause = function(ee) {
          typeof ee > "u" ? S._pause = !S._pause : S._pause = ee;
        }, S.isPaused = function() {
          return S._pause;
        }, S.resumableObj.fire("chunkingStart", S), S.bootstrap(), this;
      }
      function H(d, E, D, S) {
        var _ = this;
        _.opts = {}, _.getOpt = d.getOpt, _.resumableObj = d, _.fileObj = E, _.fileObjSize = E.size, _.fileObjType = E.file.type, _.offset = D, _.callback = S, _.lastProgressCallback = /* @__PURE__ */ new Date(), _.tested = !1, _.retries = 0, _.pendingRetry = !1, _.preprocessState = 0;
        var oe = _.getOpt("chunkSize");
        return _.loaded = 0, _.startByte = _.offset * oe, _.endByte = Math.min(_.fileObjSize, (_.offset + 1) * oe), _.fileObjSize - _.endByte < oe && !_.getOpt("forceChunkSize") && (_.endByte = _.fileObjSize), _.xhr = null, _.test = function() {
          _.xhr = new XMLHttpRequest();
          var ee = function(le) {
            _.tested = !0;
            var ne = _.status();
            ne == "success" ? (_.callback(ne, _.message()), _.resumableObj.uploadNextChunk()) : _.send();
          };
          _.xhr.addEventListener("load", ee, !1), _.xhr.addEventListener("error", ee, !1), _.xhr.addEventListener("timeout", ee, !1);
          var te = [], ge = _.getOpt("parameterNamespace"), De = _.getOpt("query");
          typeof De == "function" && (De = De(_.fileObj, _)), C.each(De, function(le, ne) {
            te.push([encodeURIComponent(ge + le), encodeURIComponent(ne)].join("="));
          }), te = te.concat(
            [
              // define key/value pairs for additional parameters
              ["chunkNumberParameterName", _.offset + 1],
              ["chunkSizeParameterName", _.getOpt("chunkSize")],
              ["currentChunkSizeParameterName", _.endByte - _.startByte],
              ["totalSizeParameterName", _.fileObjSize],
              ["typeParameterName", _.fileObjType],
              ["identifierParameterName", _.fileObj.uniqueIdentifier],
              ["fileNameParameterName", _.fileObj.fileName],
              ["relativePathParameterName", _.fileObj.relativePath],
              ["totalChunksParameterName", _.fileObj.chunks.length]
            ].filter(function(le) {
              return _.getOpt(le[0]);
            }).map(function(le) {
              return [
                ge + _.getOpt(le[0]),
                encodeURIComponent(le[1])
              ].join("=");
            })
          ), _.xhr.open(_.getOpt("testMethod"), C.getTarget("test", te)), _.xhr.timeout = _.getOpt("xhrTimeout"), _.xhr.withCredentials = _.getOpt("withCredentials");
          var ce = _.getOpt("headers");
          typeof ce == "function" && (ce = ce(_.fileObj, _)), C.each(ce, function(le, ne) {
            _.xhr.setRequestHeader(le, ne);
          }), _.xhr.send(null);
        }, _.preprocessFinished = function() {
          _.preprocessState = 2, _.send();
        }, _.send = function() {
          var ee = _.getOpt("preprocess");
          if (typeof ee == "function")
            switch (_.preprocessState) {
              case 0:
                _.preprocessState = 1, ee(_);
                return;
              case 1:
                return;
            }
          if (_.getOpt("testChunks") && !_.tested) {
            _.test();
            return;
          }
          _.xhr = new XMLHttpRequest(), _.xhr.upload.addEventListener("progress", function($e) {
            /* @__PURE__ */ new Date() - _.lastProgressCallback > _.getOpt("throttleProgressCallbacks") * 1e3 && (_.callback("progress"), _.lastProgressCallback = /* @__PURE__ */ new Date()), _.loaded = $e.loaded || 0;
          }, !1), _.loaded = 0, _.pendingRetry = !1, _.callback("progress");
          var te = function($e) {
            var xe = _.status();
            if (xe == "success" || xe == "error")
              _.callback(xe, _.message()), _.resumableObj.uploadNextChunk();
            else {
              _.callback("retry", _.message()), _.abort(), _.retries++;
              var xn = _.getOpt("chunkRetryInterval");
              xn !== void 0 ? (_.pendingRetry = !0, setTimeout(_.send, xn)) : _.send();
            }
          };
          _.xhr.addEventListener("load", te, !1), _.xhr.addEventListener("error", te, !1), _.xhr.addEventListener("timeout", te, !1);
          var ge = [
            ["chunkNumberParameterName", _.offset + 1],
            ["chunkSizeParameterName", _.getOpt("chunkSize")],
            ["currentChunkSizeParameterName", _.endByte - _.startByte],
            ["totalSizeParameterName", _.fileObjSize],
            ["typeParameterName", _.fileObjType],
            ["identifierParameterName", _.fileObj.uniqueIdentifier],
            ["fileNameParameterName", _.fileObj.fileName],
            ["relativePathParameterName", _.fileObj.relativePath],
            ["totalChunksParameterName", _.fileObj.chunks.length]
          ].filter(function($e) {
            return _.getOpt($e[0]);
          }).reduce(function($e, xe) {
            return $e[_.getOpt(xe[0])] = xe[1], $e;
          }, {}), De = _.getOpt("query");
          typeof De == "function" && (De = De(_.fileObj, _)), C.each(De, function($e, xe) {
            ge[$e] = xe;
          });
          var ce = _.fileObj.file.slice ? "slice" : _.fileObj.file.mozSlice ? "mozSlice" : _.fileObj.file.webkitSlice ? "webkitSlice" : "slice", le = _.fileObj.file[ce](_.startByte, _.endByte, _.getOpt("setChunkTypeFromFile") ? _.fileObj.file.type : ""), ne = null, ye = [], Pe = _.getOpt("parameterNamespace");
          if (_.getOpt("method") === "octet")
            ne = le, C.each(ge, function($e, xe) {
              ye.push([encodeURIComponent(Pe + $e), encodeURIComponent(xe)].join("="));
            });
          else if (ne = new FormData(), C.each(ge, function($e, xe) {
            ne.append(Pe + $e, xe), ye.push([encodeURIComponent(Pe + $e), encodeURIComponent(xe)].join("="));
          }), _.getOpt("chunkFormat") == "blob")
            ne.append(Pe + _.getOpt("fileParameterName"), le, _.fileObj.fileName);
          else if (_.getOpt("chunkFormat") == "base64") {
            var rt = new FileReader();
            rt.onload = function($e) {
              ne.append(Pe + _.getOpt("fileParameterName"), rt.result), _.xhr.send(ne);
            }, rt.readAsDataURL(le);
          }
          var ft = C.getTarget("upload", ye), mt = _.getOpt("uploadMethod");
          _.xhr.open(mt, ft), _.getOpt("method") === "octet" && _.xhr.setRequestHeader("Content-Type", "application/octet-stream"), _.xhr.timeout = _.getOpt("xhrTimeout"), _.xhr.withCredentials = _.getOpt("withCredentials");
          var je = _.getOpt("headers");
          typeof je == "function" && (je = je(_.fileObj, _)), C.each(je, function($e, xe) {
            _.xhr.setRequestHeader($e, xe);
          }), _.getOpt("chunkFormat") == "blob" && _.xhr.send(ne);
        }, _.abort = function() {
          _.xhr && _.xhr.abort(), _.xhr = null;
        }, _.status = function() {
          return _.pendingRetry ? "uploading" : _.xhr ? _.xhr.readyState < 4 ? "uploading" : _.xhr.status == 200 || _.xhr.status == 201 ? "success" : C.contains(_.getOpt("permanentErrors"), _.xhr.status) || _.retries >= _.getOpt("maxChunkRetries") ? "error" : (_.abort(), "pending") : "pending";
        }, _.message = function() {
          return _.xhr ? _.xhr.responseText : "";
        }, _.progress = function(ee) {
          typeof ee > "u" && (ee = !1);
          var te = ee ? (_.endByte - _.startByte) / _.fileObjSize : 1;
          if (_.pendingRetry)
            return 0;
          (!_.xhr || !_.xhr.status) && (te *= 0.95);
          var ge = _.status();
          switch (ge) {
            case "success":
            case "error":
              return 1 * te;
            case "pending":
              return 0 * te;
            default:
              return _.loaded / (_.endByte - _.startByte) * te;
          }
        }, this;
      }
      return h.uploadNextChunk = function() {
        var d = !1;
        if (h.getOpt("prioritizeFirstAndLastChunk") && (C.each(h.files, function(D) {
          if (D.chunks.length && D.chunks[0].status() == "pending" && D.chunks[0].preprocessState === 0)
            return D.chunks[0].send(), d = !0, !1;
          if (D.chunks.length > 1 && D.chunks[D.chunks.length - 1].status() == "pending" && D.chunks[D.chunks.length - 1].preprocessState === 0)
            return D.chunks[D.chunks.length - 1].send(), d = !0, !1;
        }), d) || (C.each(h.files, function(D) {
          if (D.isPaused() === !1 && C.each(D.chunks, function(S) {
            if (S.status() == "pending" && S.preprocessState === 0)
              return S.send(), d = !0, !1;
          }), d)
            return !1;
        }), d))
          return !0;
        var E = !1;
        return C.each(h.files, function(D) {
          if (!D.isComplete())
            return E = !0, !1;
        }), E || h.fire("complete"), !1;
      }, h.assignBrowse = function(d, E) {
        typeof d.length > "u" && (d = [d]), C.each(d, function(D) {
          var S;
          D.tagName === "INPUT" && D.type === "file" ? S = D : (S = document.createElement("input"), S.setAttribute("type", "file"), S.style.display = "none", D.addEventListener("click", function() {
            S.style.opacity = 0, S.style.display = "block", S.focus(), S.click(), S.style.display = "none";
          }, !1), D.appendChild(S));
          var _ = h.getOpt("maxFiles");
          typeof _ > "u" || _ != 1 ? S.setAttribute("multiple", "multiple") : S.removeAttribute("multiple"), E ? S.setAttribute("webkitdirectory", "webkitdirectory") : S.removeAttribute("webkitdirectory");
          var oe = h.getOpt("fileType");
          typeof oe < "u" && oe.length >= 1 ? S.setAttribute("accept", oe.map(function(ee) {
            return "." + ee;
          }).join(",")) : S.removeAttribute("accept"), S.addEventListener("change", function(ee) {
            q(ee.target.files, ee);
            var te = h.getOpt("clearInput");
            te && (ee.target.value = "");
          }, !1);
        });
      }, h.assignDrop = function(d) {
        typeof d.length > "u" && (d = [d]), C.each(d, function(E) {
          E.addEventListener("dragover", B, !1), E.addEventListener("dragenter", B, !1), E.addEventListener("drop", W, !1);
        });
      }, h.unAssignDrop = function(d) {
        typeof d.length > "u" && (d = [d]), C.each(d, function(E) {
          E.removeEventListener("dragover", B), E.removeEventListener("dragenter", B), E.removeEventListener("drop", W);
        });
      }, h.isUploading = function() {
        var d = !1;
        return C.each(h.files, function(E) {
          if (E.isUploading())
            return d = !0, !1;
        }), d;
      }, h.upload = function() {
        if (!h.isUploading()) {
          h.fire("uploadStart");
          for (var d = 1; d <= h.getOpt("simultaneousUploads"); d++)
            h.uploadNextChunk();
        }
      }, h.pause = function() {
        C.each(h.files, function(d) {
          d.abort();
        }), h.fire("pause");
      }, h.cancel = function() {
        h.fire("beforeCancel");
        for (var d = h.files.length - 1; d >= 0; d--)
          h.files[d].cancel();
        h.fire("cancel");
      }, h.progress = function() {
        var d = 0, E = 0;
        return C.each(h.files, function(D) {
          d += D.progress() * D.size, E += D.size;
        }), E > 0 ? d / E : 0;
      }, h.addFile = function(d, E) {
        q([d], E);
      }, h.addFiles = function(d, E) {
        q(d, E);
      }, h.removeFile = function(d) {
        for (var E = h.files.length - 1; E >= 0; E--)
          h.files[E] === d && h.files.splice(E, 1);
      }, h.getFromUniqueIdentifier = function(d) {
        var E = !1;
        return C.each(h.files, function(D) {
          D.uniqueIdentifier == d && (E = D);
        }), E;
      }, h.getSize = function() {
        var d = 0;
        return C.each(h.files, function(E) {
          d += E.size;
        }), d;
      }, h.handleDropEvent = function(d) {
        W(d);
      }, h.handleChangeEvent = function(d) {
        q(d.target.files, d), d.target.value = "";
      }, h.updateQuery = function(d) {
        h.opts.query = d;
      }, this;
    };
    s.exports = p;
  })();
})(Gl);
var um = Gl.exports;
const lm = /* @__PURE__ */ ql(um);
function hs() {
  return document.head.querySelector('meta[name="csrf-token"]')?.content ?? "";
}
const nt = {
  DETAIL: "detail",
  SELECTED: "selected",
  QUEUE: "queue",
  CREATE_FOLDER: "create-folder",
  CROP: "crop",
  DELETE: "delete",
  RENAME: "rename"
}, bt = {
  FILES: "files",
  FILE: "file",
  FOLDER: "folder"
};
function cm(s) {
  return Ll() ? (Pl(s), !0) : !1;
}
function Wa(s) {
  return typeof s == "function" ? s() : Q(s);
}
const Xl = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const fm = Object.prototype.toString, hm = (s) => fm.call(s) === "[object Object]", Fa = () => {
}, dm = /* @__PURE__ */ pm();
function pm() {
  var s, p;
  return Xl && ((s = window?.navigator) == null ? void 0 : s.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((p = window?.navigator) == null ? void 0 : p.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function gm(s, p) {
  function i(...h) {
    return new Promise((C, W) => {
      Promise.resolve(s(() => p.apply(this, h), { fn: p, thisArg: this, args: h })).then(C).catch(W);
    });
  }
  return i;
}
const Yl = (s) => s();
function vm(s = Yl) {
  const p = we(!0);
  function i() {
    p.value = !1;
  }
  function h() {
    p.value = !0;
  }
  const C = (...W) => {
    p.value && s(...W);
  };
  return { isActive: Nv(p), pause: i, resume: h, eventFilter: C };
}
function mm(s) {
  return s || Fv();
}
function _m(s, p, i = {}) {
  const {
    eventFilter: h = Yl,
    ...C
  } = i;
  return Qr(
    s,
    gm(
      h,
      p
    ),
    C
  );
}
function ym(s, p, i = {}) {
  const {
    eventFilter: h,
    ...C
  } = i, { eventFilter: W, pause: B, resume: T, isActive: $ } = vm(h);
  return { stop: _m(
    s,
    p,
    {
      ...C,
      eventFilter: W
    }
  ), pause: B, resume: T, isActive: $ };
}
function bm(s, p = !0, i) {
  mm() ? Nl(s, i) : p ? s() : vs(s);
}
function Ai(s) {
  var p;
  const i = Wa(s);
  return (p = i?.$el) != null ? p : i;
}
const ei = Xl ? window : void 0;
function Jr(...s) {
  let p, i, h, C;
  if (typeof s[0] == "string" || Array.isArray(s[0]) ? ([i, h, C] = s, p = ei) : [p, i, h, C] = s, !p)
    return Fa;
  Array.isArray(i) || (i = [i]), Array.isArray(h) || (h = [h]);
  const W = [], B = () => {
    W.forEach((Y) => Y()), W.length = 0;
  }, T = (Y, q, ae, H) => (Y.addEventListener(q, ae, H), () => Y.removeEventListener(q, ae, H)), $ = Qr(
    () => [Ai(p), Wa(C)],
    ([Y, q]) => {
      if (B(), !Y)
        return;
      const ae = hm(q) ? { ...q } : q;
      W.push(
        ...i.flatMap((H) => h.map((d) => T(Y, H, d, ae)))
      );
    },
    { immediate: !0, flush: "post" }
  ), U = () => {
    $(), B();
  };
  return cm(U), U;
}
let Dl = !1;
function wm(s, p, i = {}) {
  const { window: h = ei, ignore: C = [], capture: W = !0, detectIframe: B = !1 } = i;
  if (!h)
    return Fa;
  dm && !Dl && (Dl = !0, Array.from(h.document.body.children).forEach((ae) => ae.addEventListener("click", Fa)), h.document.documentElement.addEventListener("click", Fa));
  let T = !0;
  const $ = (ae) => C.some((H) => {
    if (typeof H == "string")
      return Array.from(h.document.querySelectorAll(H)).some((d) => d === ae.target || ae.composedPath().includes(d));
    {
      const d = Ai(H);
      return d && (ae.target === d || ae.composedPath().includes(d));
    }
  }), Y = [
    Jr(h, "click", (ae) => {
      const H = Ai(s);
      if (!(!H || H === ae.target || ae.composedPath().includes(H))) {
        if (ae.detail === 0 && (T = !$(ae)), !T) {
          T = !0;
          return;
        }
        p(ae);
      }
    }, { passive: !0, capture: W }),
    Jr(h, "pointerdown", (ae) => {
      const H = Ai(s);
      T = !$(ae) && !!(H && !ae.composedPath().includes(H));
    }, { passive: !0 }),
    B && Jr(h, "blur", (ae) => {
      setTimeout(() => {
        var H;
        const d = Ai(s);
        ((H = h.document.activeElement) == null ? void 0 : H.tagName) === "IFRAME" && !d?.contains(h.document.activeElement) && p(ae);
      }, 0);
    })
  ].filter(Boolean);
  return () => Y.forEach((ae) => ae());
}
function xm(s) {
  return typeof s == "function" ? s : typeof s == "string" ? (p) => p.key === s : Array.isArray(s) ? (p) => s.includes(p.key) : () => !0;
}
function jl(...s) {
  let p, i, h = {};
  s.length === 3 ? (p = s[0], i = s[1], h = s[2]) : s.length === 2 ? typeof s[1] == "object" ? (p = !0, i = s[0], h = s[1]) : (p = s[0], i = s[1]) : (p = !0, i = s[0]);
  const {
    target: C = ei,
    eventName: W = "keydown",
    passive: B = !1,
    dedupe: T = !1
  } = h, $ = xm(p);
  return Jr(C, W, (Y) => {
    Y.repeat && Wa(T) || $(Y) && i(Y);
  }, B);
}
const Pa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Na = "__vueuse_ssr_handlers__", km = /* @__PURE__ */ Sm();
function Sm() {
  return Na in Pa || (Pa[Na] = Pa[Na] || {}), Pa[Na];
}
function Cm(s, p) {
  return km[s] || p;
}
function Em(s) {
  return s == null ? "any" : s instanceof Set ? "set" : s instanceof Map ? "map" : s instanceof Date ? "date" : typeof s == "boolean" ? "boolean" : typeof s == "string" ? "string" : typeof s == "object" ? "object" : Number.isNaN(s) ? "any" : "number";
}
const Om = {
  boolean: {
    read: (s) => s === "true",
    write: (s) => String(s)
  },
  object: {
    read: (s) => JSON.parse(s),
    write: (s) => JSON.stringify(s)
  },
  number: {
    read: (s) => Number.parseFloat(s),
    write: (s) => String(s)
  },
  any: {
    read: (s) => s,
    write: (s) => String(s)
  },
  string: {
    read: (s) => s,
    write: (s) => String(s)
  },
  map: {
    read: (s) => new Map(JSON.parse(s)),
    write: (s) => JSON.stringify(Array.from(s.entries()))
  },
  set: {
    read: (s) => new Set(JSON.parse(s)),
    write: (s) => JSON.stringify(Array.from(s))
  },
  date: {
    read: (s) => new Date(s),
    write: (s) => s.toISOString()
  }
}, Al = "vueuse-storage";
function Dm(s, p, i, h = {}) {
  var C;
  const {
    flush: W = "pre",
    deep: B = !0,
    listenToStorageChanges: T = !0,
    writeDefaults: $ = !0,
    mergeDefaults: U = !1,
    shallow: Y,
    window: q = ei,
    eventFilter: ae,
    onError: H = (ne) => {
      console.error(ne);
    },
    initOnMounted: d
  } = h, E = (Y ? Bv : we)(typeof p == "function" ? p() : p);
  if (!i)
    try {
      i = Cm("getDefaultStorage", () => {
        var ne;
        return (ne = ei) == null ? void 0 : ne.localStorage;
      })();
    } catch (ne) {
      H(ne);
    }
  if (!i)
    return E;
  const D = Wa(p), S = Em(D), _ = (C = h.serializer) != null ? C : Om[S], { pause: oe, resume: ee } = ym(
    E,
    () => ge(E.value),
    { flush: W, deep: B, eventFilter: ae }
  );
  q && T && bm(() => {
    Jr(q, "storage", ce), Jr(q, Al, le), d && ce();
  }), d || ce();
  function te(ne, ye) {
    q && q.dispatchEvent(new CustomEvent(Al, {
      detail: {
        key: s,
        oldValue: ne,
        newValue: ye,
        storageArea: i
      }
    }));
  }
  function ge(ne) {
    try {
      const ye = i.getItem(s);
      if (ne == null)
        te(ye, null), i.removeItem(s);
      else {
        const Pe = _.write(ne);
        ye !== Pe && (i.setItem(s, Pe), te(ye, Pe));
      }
    } catch (ye) {
      H(ye);
    }
  }
  function De(ne) {
    const ye = ne ? ne.newValue : i.getItem(s);
    if (ye == null)
      return $ && D != null && i.setItem(s, _.write(D)), D;
    if (!ne && U) {
      const Pe = _.read(ye);
      return typeof U == "function" ? U(Pe, D) : S === "object" && !Array.isArray(Pe) ? { ...D, ...Pe } : Pe;
    } else
      return typeof ye != "string" ? ye : _.read(ye);
  }
  function ce(ne) {
    if (!(ne && ne.storageArea !== i)) {
      if (ne && ne.key == null) {
        E.value = D;
        return;
      }
      if (!(ne && ne.key !== s)) {
        oe();
        try {
          ne?.newValue !== _.write(E.value) && (E.value = De(ne));
        } catch (ye) {
          H(ye);
        } finally {
          ne ? vs(ee) : ee();
        }
      }
    }
  }
  function le(ne) {
    ce(ne.detail);
  }
  return E;
}
function Am(s, p, i = {}) {
  const { window: h = ei } = i;
  return Dm(s, p, h?.localStorage, i);
}
const Tt = Kv("nova-filemanager/browser", () => {
  const s = we(!1), p = we(!1), i = we(!1), h = we(!1), C = we(!1), W = we(!0), B = we(!0), T = we(1), $ = we(10), U = we("/"), Y = we(""), q = we(""), ae = we(""), H = Am("pinia/nova-file-manager/browser/disk", ""), d = we([]), E = we([]), D = we([]), S = we(0), _ = we(Zr.range(10, 50, 10)), oe = we([
    { value: "", label: "Sort by" },
    { value: "date", label: "Date Asc" },
    { value: "date-desc", label: "Date Desc" },
    { value: "name", label: "Name Asc" },
    { value: "name-desc", label: "Name Desc" },
    { value: "size", label: "Size Asc" },
    { value: "size-desc", label: "Size Desc" }
  ]), ee = we([]), te = we([]), ge = we({}), De = we(50 * 1024 * 1024);
  async function ce() {
    Zr.isEmpty(ee.value) && await En(), Zr.isEmpty(ge.value) && await xt();
  }
  function le() {
    S.value++;
  }
  function ne(Z) {
    T.value = Z, xt();
  }
  function ye(Z) {
    $.value = Z, T.value = 1, xt();
  }
  function Pe(Z) {
    U.value = Z, T.value = 1, xt();
  }
  function rt(Z) {
    Y.value = Z, T.value = 1, xt();
  }
  function ft(Z) {
    q.value = Z, xt();
  }
  function mt(Z) {
    U.value = "/", T.value = 1, Y.value = "", H.value = Z, xt();
  }
  function je(Z) {
    ae.value = Z, T.value = 1, xt();
  }
  function $e(Z, ve = null) {
    E.value.push({
      id: sm(),
      name: Z,
      payload: ve
    });
  }
  function xe(Z) {
    E.value = E.value.filter((ve) => ve.id !== Z);
  }
  function xn(Z) {
    E.value = E.value.filter((ve) => ve.name !== Z);
  }
  function Mn() {
    E.value = [];
  }
  function gt(Z) {
    if (Zr.isEmpty(d.value)) {
      d.value = [Z];
      return;
    }
    d.value.push(Z);
  }
  function Vn(Z) {
    d.value = d.value?.filter((ve) => ve.id !== Z.id);
  }
  function kn(Z) {
    d.value = Z;
  }
  function Ln() {
    kn([]);
  }
  function qt(Z) {
    return !!d.value?.find((ve) => ve.id === Z.id);
  }
  function Pn(Z) {
    if (qt(Z)) {
      Vn(Z);
      return;
    }
    C.value || Ln(), gt(Z);
  }
  const Ar = At(() => s.value || p.value || i.value);
  function en({ file: Z }) {
    D.value.push({
      id: Z.name,
      ratio: 0,
      status: null,
      file: Z,
      isImage: Z.type.includes("image") ?? !1
    });
  }
  function tn() {
    D.value = [];
  }
  function Sn({ id: Z, ratio: ve = 100, status: ze = null }) {
    D.value = D.value.map((St) => St.id === Z ? {
      ...St,
      status: ze,
      ratio: ve
    } : St), D.value.reduce((St, Gt) => St && Gt.ratio === 100, !0) && D.value.length && setTimeout(async () => {
      xn(nt.QUEUE), tn(), p.value = !1, await xt();
    }, 1e3);
  }
  function Cn(Z) {
    if (p.value)
      return;
    E.value.find((ze) => ze.name === nt.QUEUE) || $e(
      nt.QUEUE
    ), p.value = !0;
    const ve = new lm({
      chunkSize: De.value,
      simultaneousUploads: 1,
      maxChunkRetries: 10,
      testChunks: !1,
      target: "/nova-vendor/nova-file-manager/files/upload",
      query: {
        path: U.value ?? "/",
        disk: H.value
      },
      headers: {
        Accept: "application/json",
        "X-CSRF-TOKEN": hs()
      }
    });
    Z.forEach((ze) => {
      ve.addFile(ze), en({ file: ze });
    }), ve.on("fileAdded", () => ve.upload()), ve.on("fileSuccess", (ze) => {
      Sn({
        id: ze.fileName,
        status: !0
      });
    }), ve.on("fileProgress", (ze) => {
      Sn({
        id: ze.fileName,
        ratio: Math.floor(ze.progress(!1) * 100)
      });
    }), ve.on("error", (ze, kt) => {
      console.log(ze, kt);
    }), ve.on("fileError", (ze, kt) => {
      Sn({
        id: ze.fileName,
        status: !1
      }), Nova.error(JSON.parse(kt).message);
    });
  }
  async function En() {
    i.value = !0;
    const Z = await fetch(
      "/nova-vendor/nova-file-manager/disks/available"
    ), ve = await Z.clone().json();
    Z.ok ? (ee.value = ve, H.value || (H.value = ee.value[0])) : Nova.error(
      `${Z.status}: ${ve.message || "Something went wrong"}`
    ), i.value = !1;
  }
  async function xt() {
    s.value = !0;
    const Z = {
      page: T.value,
      perPage: $.value,
      path: U.value,
      search: Y.value,
      sort: q.value,
      disk: H.value,
      period: ae.value
    };
    return await fetch(
      `/nova-vendor/nova-file-manager?${new URLSearchParams(Z).toString()}`,
      {
        method: "GET",
        headers: {
          "X-CSRF-TOKEN": hs(),
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
        }
      }
    ).then(async (ve) => {
      const ze = await ve.clone().json();
      ve.ok ? (T.value = ze.pagination.current_page, H.value = ze.disk, ge.value = ze) : Nova.error(
        `${ve.status}: ${ze.message || "Something went wrong"}`
      );
    }).finally((ve) => (s.value = !1, ve));
  }
  async function Rt(Z, ve) {
    return await Qe(
      "/nova-vendor/nova-file-manager/files/rename",
      "POST",
      {
        disk: H.value,
        from: Z,
        to: ve
      }
    ).then((ze) => {
      ze.ok && (d.value = d.value.filter((kt) => kt.path !== Z));
    });
  }
  async function Nn(Z = []) {
    if (Z.length !== 0)
      return await Qe(
        "/nova-vendor/nova-file-manager/files/delete",
        "POST",
        {
          disk: H.value,
          paths: Z
        }
      ).then((ve) => {
        ve.ok && (d.value = d.value.filter((ze) => !Z.includes(ze.path)));
      });
  }
  async function Tr(Z) {
    return await Qe(
      "/nova-vendor/nova-file-manager/files/unzip",
      "POST",
      {
        disk: H.value,
        path: Z
      }
    );
  }
  async function Bt(Z) {
    return await Qe(
      "/nova-vendor/nova-file-manager/files/duplicate",
      "POST",
      {
        disk: H.value,
        path: Z
      }
    );
  }
  async function dr(Z) {
    return await Qe(
      "/nova-vendor/nova-file-manager/folders/create",
      "POST",
      {
        disk: H.value,
        path: Z
      }
    );
  }
  async function Rr(Z, ve) {
    return await Qe(
      "/nova-vendor/nova-file-manager/folders/rename",
      "POST",
      {
        disk: H.value,
        from: Z,
        to: ve
      }
    );
  }
  async function On(Z) {
    return await Qe(
      "/nova-vendor/nova-file-manager/folders/delete",
      "POST",
      {
        disk: H.value,
        path: Z
      }
    );
  }
  async function Qe(Z, ve = "POST", ze) {
    s.value = !0;
    const kt = ve === "GET" ? `${Z}?${new URLSearchParams(ze).toString()}` : Z;
    return await fetch(
      kt,
      {
        method: ve,
        headers: {
          "X-CSRF-TOKEN": hs(),
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
        },
        body: ve === "GET" ? null : JSON.stringify(ze)
      }
    ).then(async (St) => {
      const Gt = await St.clone().json();
      return St.ok ? (Mn(), xt(), Gt.message && Nova.success(Gt.message)) : Nova.error(
        `${St.status}: ${Gt.message || "Something went wrong"}`
      ), St;
    }).finally((St) => (s.value = !1, St));
  }
  return {
    init: ce,
    //
    isProcessing: Ar,
    loading: s,
    uploading: p,
    fetchingDisks: i,
    selecting: h,
    multiple: C,
    //
    showFiles: B,
    showFolders: W,
    //
    page: T,
    perPage: $,
    path: U,
    search: Y,
    sort: q,
    period: ae,
    disk: H,
    //
    selection: d,
    modals: E,
    queue: D,
    selectionConfirms: S,
    //
    perPageOptions: _,
    sorts: oe,
    disks: ee,
    periods: te,
    //
    data: ge,
    //
    chunkSize: De,
    //
    confirmSelection: le,
    setPage: ne,
    setPerPage: ye,
    setPath: Pe,
    setSearch: rt,
    setSort: ft,
    setDisk: mt,
    setPeriod: je,
    //
    openModal: $e,
    closeModal: xe,
    closeModalsByName: xn,
    closeModals: Mn,
    //
    select: gt,
    unselect: Vn,
    setSelection: kn,
    clearSelection: Ln,
    isSelected: qt,
    toggleSelection: Pn,
    //
    queueFile: en,
    clearQueue: tn,
    updateQueue: Sn,
    //
    getDisks: En,
    fetchData: xt,
    upload: Cn,
    renameFile: Rt,
    deleteFiles: Nn,
    unarchive: Tr,
    duplicate: Bt,
    createFolder: dr,
    renameFolder: Rr,
    deleteFolder: On
  };
}), _s = /* @__PURE__ */ ni({
  __name: "Dropdown",
  setup(s) {
    const p = we(!1), i = we();
    return wm(i, () => p.value ? p.value = !1 : null), (h, C) => (L(), V("div", {
      class: "relative",
      ref_key: "target",
      ref: i
    }, [
      j("div", {
        onClick: C[0] || (C[0] = Te(() => p.value = !p.value, ["prevent", "stop"]))
      }, [
        fr(h.$slots, "trigger")
      ]),
      j("div", {
        class: pn(["absolute p-1 mt-2 min-w-80 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 z-20", {
          hidden: !p.value
        }]),
        style: {
          right: 0,
          top: "100%"
        }
      }, [
        fr(h.$slots, "default")
      ], 2)
    ], 512));
  }
}), Tm = { class: "flex items-center px-6 py-4 space-x-2 border-b border-gray-200 dark:border-gray-700" }, Rm = {
  class: "rounded-lg cursor-pointer h-9 min-w-9 px-2 flex items-center justify-center focus:outline-none bg-primary-500 hover:bg-primary-600 shadow text-white dark:text-gray-900 dark:ring-gray-600",
  for: "fileUpload"
}, Im = /* @__PURE__ */ j("div", { class: "flex-grow" }, null, -1), Mm = {
  key: 0,
  class: "flex items-center space-x-2"
}, Lm = { class: "p-2 space-y-2 w-60" }, Pm = { class: "relative" }, Nm = ["placeholder", "aria-label"], Fm = { class: "text-gray-900 dark:text-gray-200 font-medium" }, Bm = { class: "text-gray-900 dark:text-gray-200 font-medium" }, Um = { class: "text-gray-900 dark:text-gray-200 font-medium" }, $m = {
  __name: "BrowserToolbar",
  emits: ["changeFile"],
  setup(s, { emit: p }) {
    const i = Tt(), h = we(), C = p, W = Vv.debounce((T) => i.setSearch(T), 300);
    function B(T) {
      C("changeFile", T);
    }
    return (T, $) => {
      const U = Ft("Icon"), Y = $a("tooltip");
      return L(), V("div", Tm, [
        wt((L(), V("label", Rm, [
          j("input", {
            ref_key: "fileUpload",
            ref: h,
            id: "fileUpload",
            type: "file",
            class: "sr-only",
            multiple: "",
            onChange: B
          }, null, 544),
          ue(U, {
            type: "upload",
            width: "16",
            height: "16"
          })
        ])), [
          [Y, T.__("Upload a file")]
        ]),
        wt(ue(Nt, {
          onClick: $[0] || ($[0] = Te((q) => Q(i).openModal(Q(nt).CREATE_FOLDER), ["prevent"])),
          type: "folder-add"
        }, null, 512), [
          [Y, T.__("Create folder")]
        ]),
        wt(ue(Nt, {
          onClick: $[1] || ($[1] = Te((q) => Q(i).fetchData(), ["prevent"])),
          type: "refresh"
        }, null, 512), [
          [Y, T.__("Refresh")]
        ]),
        ue(Ma, {
          value: Q(i).disk,
          onChange: $[2] || ($[2] = (q) => Q(i).setDisk(q)),
          options: Q(i).disks.map((q) => ({
            label: q,
            value: q
          }))
        }, null, 8, ["value", "options"]),
        Im,
        Q(i).selection.length > 0 ? (L(), V("div", Mm, [
          wt((L(), V("span", {
            onClick: $[3] || ($[3] = Te(() => Q(i).openModal(Q(nt).SELECTED), ["prevent"])),
            class: "cursor-pointer hover:text-primary-500"
          }, [
            ut(" Selected " + ie(Q(i).selection.length) + " files ", 1)
          ])), [
            [Y, T.__("Open selected files modal")]
          ]),
          wt(ue(Nt, {
            class: "text-red-500",
            type: "trash",
            onClick: $[4] || ($[4] = Te(
              () => Q(i).openModal(Q(nt).DELETE, {
                type: Q(bt).FILES,
                [Q(bt).FILES]: Q(i).selection
              }),
              ["prevent"]
            ))
          }, null, 512), [
            [Y, T.__("Delete selected files")]
          ]),
          Q(i).selecting ? wt((L(), Oe(Nt, {
            key: 0,
            class: "text-green-500",
            type: "check",
            onClick: $[5] || ($[5] = Te(() => Q(i).confirmSelection(), ["prevent"]))
          }, null, 512)), [
            [Y, T.__("Confirm selection")]
          ]) : pe("", !0)
        ])) : pe("", !0),
        ue(_s, null, {
          trigger: _e(() => [
            wt(ue(Nt, {
              type: "filter",
              active: !!(Q(i).search || Q(i).sort || Q(i).period)
            }, null, 8, ["active"]), [
              [Y, T.__("Filters")]
            ])
          ]),
          default: _e(() => [
            j("div", Lm, [
              j("div", Pm, [
                j("input", {
                  ref: "input",
                  type: "text",
                  class: "appearance-none w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 h-10 px-3 rounded-lg",
                  placeholder: T.__("Search"),
                  "aria-label": T.__("Search"),
                  spellcheck: "false",
                  onInput: $[6] || ($[6] = (q) => Q(W)(q.target.value))
                }, null, 40, Nm)
              ]),
              j("p", Fm, ie(T.__("Per page")), 1),
              ue(Ma, {
                options: Q(i).perPageOptions.map((q) => ({
                  label: q,
                  value: q
                })),
                value: Q(i).perPage,
                onChange: $[7] || ($[7] = (q) => Q(i).setPerPage(q))
              }, null, 8, ["options", "value"]),
              j("p", Bm, ie(T.__("Period")), 1),
              Q(i).periods ? (L(), Oe(Ma, {
                key: 0,
                options: Q(i).periods,
                value: Q(i).period,
                onChange: $[8] || ($[8] = (q) => Q(i).setPeriod(q))
              }, null, 8, ["options", "value"])) : pe("", !0),
              j("p", Um, ie(T.__("Sort by")), 1),
              Q(i).sorts ? (L(), Oe(Ma, {
                key: 1,
                options: Q(i).sorts,
                value: Q(i).sort,
                onChange: $[9] || ($[9] = (q) => Q(i).setSort(q))
              }, null, 8, ["options", "value"])) : pe("", !0)
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
}, zm = { class: "flex items-center pt-4" }, Wm = { class: "flex text-sm" }, Hm = ["disabled", "dusk", "onClick"], qm = { class: "hidden md:flex items-center justify-center text-xs px-4 ml-auto" }, Gm = {
  __name: "BrowserPagination",
  setup(s) {
    const p = Tt(), i = At(() => p.data?.pagination);
    function h(W) {
      p.setPage(W);
    }
    const C = At(
      () => i.total > 0 ? `${i.from}-${i.to} of ${i.total}` : ""
    );
    return (W, B) => (L(), V("nav", zm, [
      j("div", Wm, [
        j("button", {
          class: pn(["hidden md:flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-xl h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500 mr-1", {
            disabled: i.value.current_page <= 1
          }]),
          rel: "prev",
          dusk: "previous",
          onClick: B[0] || (B[0] = Te((T) => h(i.value.current_page - 1), ["prevent"]))
        }, " ‹ ", 2),
        (L(!0), V(Ke, null, hr(i.value.links, (T) => (L(), V(Ke, {
          key: T.label
        }, [
          !isNaN(T.label) || T.label === "..." ? (L(), V("button", {
            key: 0,
            class: pn(["rounded-lg mr-1 border border-gray-200 dark:border-gray-700 h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500", {
              "bg-gray-50 dark:bg-gray-700": T.active
            }]),
            disabled: T.label === "..." || T.active,
            dusk: `page:${T.label}`,
            onClick: Te(($) => T.label === "..." || T.active ? null : h(T.label), ["prevent"])
          }, ie(T.label), 11, Hm)) : pe("", !0)
        ], 64))), 128)),
        j("button", {
          class: pn([{
            disabled: i.value.current_page >= i.value.last_page
          }, "hidden md:flex items-center justify-center rounded-lg mr-1 border border-gray-200 dark:border-gray-700 text-xl h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700"]),
          rel: "next",
          dusk: "next",
          onClick: B[1] || (B[1] = Te((T) => h(i.value.current_page + 1), ["prevent"]))
        }, " › ", 2)
      ]),
      j("span", qm, ie(C.value), 1)
    ]));
  }
}, Ii = {
  dir: "folder",
  dirBack: "folder-remove",
  audio: "music-note",
  image: "photograph",
  pdf: "document",
  text: "document-text",
  video: "video-camera",
  archive: "archive"
};
function ys(s, p, i = "...") {
  return s.slice(0, p) + (p < s.length ? i : "");
}
const Xm = {}, Ym = { class: "flex items-center cursor-pointer px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800" };
function jm(s, p) {
  return L(), V("div", Ym, [
    fr(s.$slots, "default")
  ]);
}
const cr = /* @__PURE__ */ ms(Xm, [["render", jm]]), Km = {
  key: 0,
  class: "absolute top-0 right-0 p-2 text-primary-500"
}, Vm = ["src"], Zm = { class: "w-full flex items-center mt-2" }, Jm = { class: "px-1 truncate text-gray-900 dark:text-gray-200 font-medium" }, Qm = { class: "cursor-pointer flex items-center justify-center w-7 h-7 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900" }, e0 = { class: "w-full px-2 text-xs" }, Kl = {
  __name: "BrowserFile",
  props: {
    file: {
      type: Object,
      required: !0
    },
    detailButton: {
      type: Boolean,
      default: !0
    }
  },
  setup(s) {
    const p = Tt(), i = s, h = At(() => p.isSelected(i.file));
    function C() {
      p.openModal(nt.DETAIL, i.file);
    }
    function W() {
      p.openModal(nt.CROP, i.file);
    }
    function B() {
      i.file.type === "archive" && p.unarchive(i.file.path);
    }
    function T() {
      p.duplicate(i.file.path);
    }
    function $() {
      p.openModal(nt.RENAME, i.file);
    }
    function U() {
      p.openModal(nt.DELETE, {
        type: bt.FILE,
        [bt.FILE]: i.file
      });
    }
    function Y() {
      p.selecting ? (p.toggleSelection(i.file), !p.multiple && h.value && p.confirmSelection()) : C();
    }
    return (q, ae) => {
      const H = Ft("Icon");
      return L(), V("div", {
        ref: "card",
        class: "w-full h-full relative flex flex-col justify-center cursor-pointer",
        onClick: Te(Y, ["prevent", "stop"])
      }, [
        j("div", {
          class: pn(["relative aspect-square flex items-center p-2 justify-center w-full h-full overflow-hidden rounded-lg hover:opacity-75 dark:bg-gray-900 border-2", {
            "border-primary-500": h.value,
            "border-gray-200 dark:border-gray-700": !h.value
          }])
        }, [
          h.value ? (L(), V("div", Km, [
            ue(H, {
              type: "check-circle",
              width: "22",
              height: "22",
              solid: !0
            })
          ])) : pe("", !0),
          s.file.type != "image" ? (L(), Oe(H, {
            key: 1,
            class: "text-gray-500",
            type: Q(Ii)[s.file.type] || Q(Ii).text,
            width: "48",
            height: "48",
            solid: !0
          }, null, 8, ["type"])) : pe("", !0),
          s.file.type == "image" ? (L(), V("img", {
            key: 2,
            src: s.file.url,
            class: "block w-full h-full",
            style: { "object-fit": "contain" }
          }, null, 8, Vm)) : pe("", !0)
        ], 2),
        j("div", Zm, [
          j("p", Jm, ie(Q(ys)(s.file.name, 25)), 1),
          ue(_s, { class: "ml-auto" }, {
            trigger: _e(() => [
              j("div", Qm, [
                ue(H, {
                  type: "dots-vertical",
                  width: "16",
                  height: "16"
                })
              ])
            ]),
            default: _e(() => [
              s.detailButton ? (L(), Oe(cr, {
                key: 0,
                onClick: Te(C, ["prevent", "stop"])
              }, {
                default: _e(() => [
                  ue(H, {
                    type: "eye",
                    class: "mr-2",
                    width: "16",
                    height: "16"
                  }),
                  ut(" " + ie(q.__("Details")), 1)
                ]),
                _: 1
              })) : pe("", !0),
              s.file.type === "image" ? (L(), Oe(cr, {
                key: 1,
                onClick: Te(W, ["prevent", "stop"])
              }, {
                default: _e(() => [
                  ue(H, {
                    type: "camera",
                    class: "mr-2",
                    width: "16",
                    height: "16"
                  }),
                  ut(" " + ie(q.__("Crop")), 1)
                ]),
                _: 1
              })) : pe("", !0),
              s.file.type === "archive" ? (L(), Oe(cr, {
                key: 2,
                onClick: Te(B, ["prevent", "stop"])
              }, {
                default: _e(() => [
                  ue(H, {
                    type: "archive",
                    class: "mr-2",
                    width: "16",
                    height: "16"
                  }),
                  ut(" " + ie(q.__("Unarchive")), 1)
                ]),
                _: 1
              })) : pe("", !0),
              ue(cr, {
                onClick: Te(T, ["prevent", "stop"])
              }, {
                default: _e(() => [
                  ue(H, {
                    type: "duplicate",
                    class: "mr-2",
                    width: "16",
                    height: "16"
                  }),
                  ut(" " + ie(q.__("Duplicate")), 1)
                ]),
                _: 1
              }),
              ue(cr, {
                onClick: Te($, ["prevent", "stop"])
              }, {
                default: _e(() => [
                  ue(H, {
                    type: "pencil",
                    class: "mr-2",
                    width: "16",
                    height: "16"
                  }),
                  ut(" " + ie(q.__("Rename")), 1)
                ]),
                _: 1
              }),
              ue(cr, {
                class: "text-red-500",
                onClick: Te(U, ["prevent", "stop"])
              }, {
                default: _e(() => [
                  ue(H, {
                    type: "trash",
                    class: "mr-2",
                    width: "16",
                    height: "16"
                  }),
                  ut(" " + ie(q.__("Delete")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        j("div", e0, ie(s.file.sizeReadable), 1)
      ], 512);
    };
  }
}, t0 = { class: "h-8 w-8 mr-1 flex items-center justify-center group-hover:opacity-75" }, n0 = { class: "truncate group-hover:opacity-75" }, r0 = { class: "cursor-pointer flex items-center justify-center w-7 h-7 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800" }, i0 = {
  __name: "BrowserFolder",
  props: {
    folder: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = Tt(), i = s;
    function h() {
      p.setPath(i.folder.path);
    }
    function C() {
      p.openModal(nt.RENAME, i.folder);
    }
    function W() {
      p.openModal(nt.DELETE, {
        type: bt.FOLDER,
        [bt.FOLDER]: i.folder
      });
    }
    return (B, T) => {
      const $ = Ft("Icon");
      return L(), V("div", {
        ref: "card",
        class: "relative flex p-1 items-center bg-gray-100 dark:bg-gray-900 rounded-lg cursor-pointer group",
        onClick: h
      }, [
        j("div", t0, [
          ue($, {
            type: Q(Ii).dir,
            width: "16",
            height: "16"
          }, null, 8, ["type"])
        ]),
        j("p", n0, ie(Q(ys)(s.folder.name, 25)), 1),
        s.folder.id !== "parent" ? (L(), Oe(_s, {
          key: 0,
          class: "ml-auto"
        }, {
          trigger: _e(() => [
            j("div", r0, [
              ue($, {
                type: "dots-vertical",
                width: "16",
                height: "16"
              })
            ])
          ]),
          default: _e(() => [
            ue(cr, {
              onClick: Te(C, ["prevent", "stop"])
            }, {
              default: _e(() => [
                ue($, {
                  type: "pencil",
                  class: "mr-2",
                  width: "16",
                  height: "16"
                }),
                ut(" " + ie(B.__("Rename")), 1)
              ]),
              _: 1
            }),
            ue(cr, {
              class: "text-red-500",
              onClick: Te(W, ["prevent", "stop"])
            }, {
              default: _e(() => [
                ue($, {
                  type: "trash",
                  class: "mr-2",
                  width: "16",
                  height: "16"
                }),
                ut(" " + ie(B.__("Delete")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : pe("", !0)
      ], 512);
    };
  }
}, a0 = { class: "text-center py-8" }, o0 = { class: "mt-2 text-sm font-medium text-gray-800 dark:text-gray-200" }, s0 = { class: "mt-1 text-sm text-gray-500" }, u0 = /* @__PURE__ */ ni({
  __name: "Empty",
  props: {
    title: {},
    subtitle: {}
  },
  setup(s) {
    return (p, i) => {
      const h = Ft("Icon");
      return L(), V("div", a0, [
        ue(h, {
          type: "folder",
          class: "h-16 w-16 mx-auto fill-current text-primary-500"
        }),
        j("h3", o0, ie(p.title ?? p.__("No files were found for your request")), 1),
        j("p", s0, ie(p.subtitle ?? p.__("You can upload a new file or create a new folder")), 1)
      ]);
    };
  }
}), l0 = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
}, c0 = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
}, f0 = {
  __name: "BrowserContent",
  setup(s) {
    const p = Tt(), i = At(() => p.data?.files || []), h = At(() => p.data?.folders || []);
    return (C, W) => {
      const B = Ft("Icon"), T = Ft("Heading");
      return L(), V(Ke, null, [
        h.value.length > 0 ? (L(), V(Ke, { key: 0 }, [
          ue(T, {
            level: "5",
            class: "cursor-pointer text-xs hover:opacity-75",
            onClick: W[0] || (W[0] = ($) => Q(p).showFolders = !Q(p).showFolders)
          }, {
            default: _e(() => [
              ut(ie(C.__("Folders")) + " ", 1),
              ue(B, {
                type: Q(p).showFolders ? "chevron-down" : "chevron-up",
                width: "13",
                height: "13"
              }, null, 8, ["type"])
            ]),
            _: 1
          }),
          Q(p).showFolders ? (L(), V("div", l0, [
            (L(!0), V(Ke, null, hr(h.value, ($) => (L(), Oe(i0, {
              key: $.id,
              ref_for: !0,
              ref: "folder_" + $.id,
              folder: $,
              "data-key": $.id
            }, null, 8, ["folder", "data-key"]))), 128))
          ])) : pe("", !0)
        ], 64)) : pe("", !0),
        i.value.length > 0 ? (L(), V(Ke, { key: 1 }, [
          ue(T, {
            level: "5",
            class: "cursor-pointer text-xs hover:opacity-75",
            onClick: W[1] || (W[1] = ($) => Q(p).showFiles = !Q(p).showFiles)
          }, {
            default: _e(() => [
              ut(ie(C.__("Files")) + " ", 1),
              ue(B, {
                type: Q(p).showFiles ? "chevron-down" : "chevron-up",
                width: "13",
                height: "13"
              }, null, 8, ["type"])
            ]),
            _: 1
          }),
          Q(p).showFiles ? (L(), V("div", c0, [
            (L(!0), V(Ke, null, hr(i.value, ($) => (L(), Oe(Kl, {
              key: $.id,
              ref_for: !0,
              ref: "file_" + $.id,
              file: $,
              "data-key": $.id
            }, null, 8, ["file", "data-key"]))), 128))
          ])) : pe("", !0)
        ], 64)) : pe("", !0),
        !i.value.length && !h.value.length ? (L(), Oe(u0, { key: 2 })) : pe("", !0)
      ], 64);
    };
  }
}, h0 = {
  key: 0,
  class: "absolute rounded-lg inset-0 bg-white/50 dark:bg-gray-800/50 flex items-center justify-center flex-grow z-50"
}, d0 = { class: "flex items-center px-6 py-4 space-x-2 border-b border-gray-200 dark:border-gray-700" }, p0 = {
  key: 0,
  class: "flex items-center px-6 py-4 space-x-2 border-t border-gray-200 dark:border-gray-700"
}, Dr = {
  __name: "BaseModal",
  props: {
    full: {
      type: Boolean,
      default: !1
    },
    closeButton: {
      type: Boolean,
      default: !0
    },
    disableClose: {
      type: Boolean,
      default: !1
    },
    modal: {
      type: Object,
      required: !0
    },
    size: {
      type: String,
      default: "2xl"
    }
  },
  emits: ["close"],
  setup(s, { emit: p }) {
    const i = Tt(), h = s, C = Uv(), W = we(null), B = () => i.closeModal(h.modal.id);
    return (T, $) => {
      const U = Ft("Loader");
      return L(), V("div", {
        ref: "wrapper",
        class: pn(["inset-0 flex items-center justify-center p-3", {
          "fixed z-50 bg-gray-800/10 backdrop-blur": !s.full,
          "absolute z-10": s.full
        }])
      }, [
        !s.disableClose && !s.full ? (L(), V("div", {
          key: 0,
          class: "absolute inset-0",
          onClick: Te(B, ["prevent"])
        })) : pe("", !0),
        j("div", {
          ref_key: "target",
          ref: W,
          class: pn(["relative bg-white w-full max-h-full overflow-y-auto overflow-x-hidden dark:bg-gray-800 z-10 rounded-lg shadow-lg base-modal-inner", {
            "w-full max-w-full min-h-full": s.full,
            "max-w-2xl": !s.full
          }])
        }, [
          ue(Ba, null, {
            default: _e(() => [
              Q(i).loading ? (L(), V("div", h0, [
                ue(U)
              ])) : pe("", !0)
            ]),
            _: 1
          }),
          j("div", d0, [
            s.closeButton && !s.disableClose ? (L(), Oe(Nt, {
              key: 0,
              type: "chevron-left",
              onClick: Te(B, ["prevent", "stop"])
            })) : pe("", !0),
            fr(T.$slots, "header")
          ]),
          fr(T.$slots, "default"),
          Q(C).footer ? (L(), V("div", p0, [
            fr(T.$slots, "footer")
          ])) : pe("", !0)
        ], 2)
      ], 2);
    };
  }
}, g0 = ["src"], v0 = {
  key: 1,
  ref: "audio",
  controls: ""
}, m0 = ["src", "type"], _0 = {
  key: 2,
  ref: "video",
  controls: "",
  crossorigin: "",
  playsinline: "",
  style: { width: "100%", height: "300px", "object-fit": "contain" }
}, y0 = ["src", "type"], b0 = {
  key: 3,
  class: "w-full p-4"
}, w0 = ["textContent"], x0 = ["data"], k0 = ["src"], S0 = ["innerHTML"], C0 = /* @__PURE__ */ ni({
  __name: "DetailView",
  props: {
    file: {
      type: Object,
      required: !0
    },
    class: {
      type: String,
      default: "",
      required: !1
    }
  },
  setup(s) {
    return (p, i) => {
      const h = Ft("Icon");
      return L(), V("div", {
        class: pn(["flex items-center justify-center h-80", s.class])
      }, [
        s.file.type == "image" ? (L(), V("img", {
          key: 0,
          class: "h-full w-full",
          src: s.file.url,
          style: { "object-fit": "contain" }
        }, null, 8, g0)) : s.file.type == "audio" ? (L(), V("audio", v0, [
          j("source", {
            src: s.file.url,
            type: s.file.mime
          }, null, 8, m0)
        ], 512)) : s.file.type == "video" ? (L(), V("video", _0, [
          j("source", {
            src: s.file.url,
            type: s.file.mime
          }, null, 8, y0)
        ], 512)) : s.file.type == "text" ? (L(), V("pre", b0, [
          j("code", {
            textContent: ie(s.file.meta.source)
          }, null, 8, w0)
        ])) : s.file.type == "pdf" ? (L(), V("object", {
          key: 4,
          data: s.file.url,
          type: "application/pdf",
          width: "100%",
          height: "300"
        }, [
          j("iframe", {
            src: s.file.url,
            width: "100%",
            height: "100%",
            style: { border: "none" }
          }, [
            j("object", {
              class: "no-preview",
              innerHTML: s.file.image
            }, null, 8, S0)
          ], 8, k0)
        ], 8, x0)) : (L(), Oe(h, {
          key: 5,
          type: Q(Ii)[s.file.type] || Q(Ii).text,
          width: "64",
          height: "64"
        }, null, 8, ["type"]))
      ], 2);
    };
  }
}), E0 = /* @__PURE__ */ j("div", { class: "flex-grow" }, null, -1), O0 = { class: "px-4 font-bold text-sm mt-2" }, D0 = { class: "table table-fixed text-left w-full" }, A0 = { key: 0 }, T0 = {
  class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900",
  style: { width: "115px" }
}, R0 = {
  class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 break-word whitespace-normal line-4",
  style: { width: "100%" }
}, I0 = { key: 1 }, M0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, L0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, P0 = { key: 2 }, N0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, F0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, B0 = { key: 0 }, U0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, $0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, z0 = { key: 1 }, W0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, H0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, q0 = { key: 4 }, G0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, X0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 break-word whitespace-normal line-4" }, Y0 = {
  class: "break-words",
  style: { "word-break": "break-all" }
}, j0 = { key: 5 }, K0 = /* @__PURE__ */ j("td", { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, null, -1), V0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 break-word whitespace-normal line-4" }, Z0 = ["href"], J0 = {
  __name: "BrowserDetailModal",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = Tt(), i = s, h = At(() => i.modal.payload), C = At(() => p.isSelected(h.value));
    function W() {
      p.toggleSelection(h.value), !p.multiple && p.selecting && C.value && p.confirmSelection();
    }
    function B() {
      h.value.type === "archive" && p.unarchive(h.value.path);
    }
    function T() {
      p.duplicate(h.value.path);
    }
    function $() {
      p.openModal(nt.CROP, h.value);
    }
    function U() {
      p.openModal(nt.DELETE, {
        type: bt.FILE,
        [bt.FILE]: h.value
      });
    }
    function Y() {
      p.openModal(nt.RENAME, h.value);
    }
    function q(H) {
      var d = document.createElement("textarea");
      d.value = H, d.style.top = "0", d.style.left = "0", d.style.position = "fixed", document.body.appendChild(d), d.focus(), d.select();
      let E = null;
      try {
        var D = document.execCommand("copy");
        E = !!D;
        var S = D ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + S);
      } catch (_) {
        E = !1, console.error("Fallback: Oops, unable to copy", _);
      }
      return document.body.removeChild(d), E;
    }
    function ae() {
      if (!navigator.clipboard) {
        if (!q(h.value.url))
          return;
        Nova.success("Text copied to clipboard");
      }
      navigator.clipboard.writeText(h.value.url).then(
        () => Nova.success("Text copied to clipboard"),
        (H) => console.error("Async: Could not copy text: ", H)
      );
    }
    return (H, d) => {
      const E = Ft("Icon"), D = $a("tooltip");
      return L(), Oe(Dr, { modal: s.modal }, {
        header: _e(() => [
          j("div", null, ie(H.__("Details")), 1),
          E0,
          Q(p).selecting ? wt((L(), Oe(Nt, {
            key: 0,
            class: "ml-3 text-green-500",
            active: C.value,
            type: "check",
            onClick: Te(W, ["prevent"])
          }, null, 8, ["active"])), [
            [D, H.__("Select")]
          ]) : pe("", !0),
          h.value.type === "image" ? wt((L(), Oe(Nt, {
            key: 1,
            type: "camera",
            onClick: Te($, ["prevent"])
          }, null, 512)), [
            [D, H.__("Crop")]
          ]) : pe("", !0),
          h.value.type === "archive" ? wt((L(), Oe(Nt, {
            key: 2,
            type: "archive",
            onClick: Te(B, ["prevent"])
          }, null, 512)), [
            [D, H.__("Unarchive")]
          ]) : pe("", !0),
          wt(ue(Nt, {
            type: "duplicate",
            onClick: Te(T, ["prevent"])
          }, null, 512), [
            [D, H.__("Duplicate")]
          ]),
          wt(ue(Nt, {
            type: "pencil",
            onClick: Te(Y, ["prevent"])
          }, null, 512), [
            [D, H.__("Rename")]
          ]),
          wt(ue(Nt, {
            class: "text-red-500",
            type: "trash",
            onClick: Te(U, ["prevent"])
          }, null, 512), [
            [D, H.__("Delete")]
          ])
        ]),
        default: _e(() => [
          j("div", O0, ie(h.value.name), 1),
          ue(C0, {
            class: "my-4",
            file: h.value
          }, null, 8, ["file"]),
          j("table", D0, [
            h.value.mime ? (L(), V("tr", A0, [
              j("td", T0, ie(H.__("Mime")) + ": ", 1),
              j("td", R0, ie(h.value.mime), 1)
            ])) : pe("", !0),
            h.value.lastModifiedReadable ? (L(), V("tr", I0, [
              j("td", M0, ie(H.__("Midified At")) + ": ", 1),
              j("td", L0, ie(h.value.lastModifiedReadable), 1)
            ])) : pe("", !0),
            h.value.sizeReadable ? (L(), V("tr", P0, [
              j("td", N0, ie(H.__("Size")) + ": ", 1),
              j("td", F0, ie(h.value.sizeReadable), 1)
            ])) : pe("", !0),
            h.value.meta ? (L(), V(Ke, { key: 3 }, [
              h.value.meta.width && h.value.meta.height ? (L(), V("tr", B0, [
                j("td", U0, ie(H.__("Dimensions")) + ": ", 1),
                j("td", $0, ie(h.value.meta.width) + "x" + ie(h.value.meta.height), 1)
              ])) : pe("", !0),
              h.value.meta.aspectRatio ? (L(), V("tr", z0, [
                j("td", W0, ie(H.__("Aspect Ratio")) + ": ", 1),
                j("td", H0, ie(h.value.meta.aspectRatio), 1)
              ])) : pe("", !0)
            ], 64)) : pe("", !0),
            h.value.url ? (L(), V("tr", q0, [
              j("td", G0, ie(H.__("Url")) + ": ", 1),
              j("td", X0, [
                j("div", {
                  class: "inline-flex items-start leading-4 cursor-pointer hover:opacity-50",
                  onClick: ae
                }, [
                  ue(E, {
                    width: "16",
                    height: "16",
                    type: "clipboard",
                    class: "mr-2 flex-shrink-0"
                  }),
                  j("span", Y0, ie(h.value.url), 1)
                ])
              ])
            ])) : pe("", !0),
            h.value.url ? (L(), V("tr", j0, [
              K0,
              j("td", V0, [
                j("a", {
                  class: "flex justify-start hover:opacity-50",
                  href: h.value.url,
                  download: ""
                }, [
                  ue(E, {
                    width: "16",
                    height: "16",
                    type: "download",
                    class: "mr-2 flex-shrink-0"
                  }),
                  ut(" " + ie(H.__("Download")), 1)
                ], 8, Z0)
              ])
            ])) : pe("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modal"]);
    };
  }
}, Q0 = {
  key: 0,
  class: "bg-gray-50 dark:bg-gray-700 rounded-lg px-2 flex items-center text-xs h-8 w-full"
}, e_ = { key: 0 }, t_ = /* @__PURE__ */ j("span", { class: "px-2" }, "/", -1), n_ = [
  t_
], r_ = { href: "#" }, i_ = ["onClick"], a_ = /* @__PURE__ */ j("span", { class: "px-2" }, "/", -1), o_ = [
  a_
], s_ = {
  __name: "BrowserBreadcrumbs",
  emits: ["goToPath"],
  setup(s, { emit: p }) {
    const i = Tt();
    function h(C) {
      i.setPath(C);
    }
    return (C, W) => {
      const B = Ft("Icon");
      return Q(i).data?.breadcrumbs?.length > 0 ? (L(), V("nav", Q0, [
        j("div", {
          onClick: W[0] || (W[0] = (T) => h("/")),
          class: "h-6 flex items-center cursor-pointer text-gray-400 dark:text-gray-200 hover:text-primary-500"
        }, [
          ue(B, {
            type: "home",
            width: "16",
            height: "16"
          })
        ]),
        Q(i).data.breadcrumbs.length > 0 ? (L(), V("div", e_, n_)) : pe("", !0),
        (L(!0), V(Ke, null, hr(Q(i).data.breadcrumbs, (T) => (L(), V(Ke, {
          key: T.id
        }, [
          T.current ? (L(), V("div", {
            key: T.id,
            class: "text-gray-800 dark:text-gray-200"
          }, [
            j("span", r_, ie(T.name), 1)
          ])) : (L(), V(Ke, { key: 1 }, [
            (L(), V("div", {
              key: T.id
            }, [
              j("span", {
                href: "#",
                class: "cursor-pointer text-gray-400 dark:text-gray-200 hover:text-primary-500",
                onClick: ($) => h(T.path)
              }, ie(T.name), 9, i_)
            ])),
            (L(), V("div", {
              key: T.id + "_separator"
            }, o_))
          ], 64))
        ], 64))), 128))
      ])) : pe("", !0);
    };
  }
}, u_ = {
  key: 0,
  class: "absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75 rounded-lg"
}, ti = {
  __name: "Button",
  props: {
    theme: String,
    loading: Boolean
  },
  setup(s) {
    return (p, i) => {
      const h = Ft("Loader");
      return L(), V("div", {
        class: pn(["shadow relative h-10 px-4 rounded-lg bg-primary-500 text-white text-white flex items-center text-center cursor-pointer hover:opacity-75 transition", {
          "bg-red-500": s.theme === "danger",
          "bg-yellow-500": s.theme === "warning",
          "bg-blue-500": s.theme === "info",
          "bg-green-500": s.theme === "success",
          "bg-gray-200 !text-gray-900 dark:bg-gray-700 dark:!text-gray-300": s.theme === "gray",
          "pointer-events-none": s.loading
        }])
      }, [
        fr(p.$slots, "default"),
        s.loading ? (L(), V("div", u_)) : pe("", !0),
        s.loading ? (L(), Oe(h, {
          key: 1,
          class: "absolute inset-0 m-auto text-white",
          width: "32"
        })) : pe("", !0)
      ], 2);
    };
  }
}, l_ = { class: "p-6" }, c_ = ["placeholder"], f_ = {
  key: 0,
  class: "mt-2 text-red-500"
}, h_ = { class: "flex items-center mt-6" }, d_ = {
  __name: "CreateFolderModal",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = s, i = Tt(), h = we(), C = we(), W = we(!1);
    function B() {
      if (!h.value)
        return C.value = "The folder name is required", !1;
      W.value = !0;
      const $ = (U) => {
        h.value = null, W.value = !1, C.value = !U.errors || U.errors.length <= 0 ? null : U.message;
      };
      return i.createFolder(`${i.path}/${h.value}`).then(
        (U) => $(U.response && U.response.data ? U.response.data : U)
      ).catch(
        (U) => $(U.response && U.response.data ? U.response.data : U)
      );
    }
    function T() {
      i.closeModal(p.modal.id), C.value = null, h.value = null;
    }
    return ($, U) => (L(), Oe(Dr, { modal: s.modal }, {
      header: _e(() => [
        j("div", null, ie($.__("Create folder")), 1)
      ]),
      default: _e(() => [
        j("div", l_, [
          wt(j("input", {
            type: "text",
            class: "appearance-none w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 h-10 px-3 rounded-lg",
            placeholder: $.__("Write a folder name"),
            "onUpdate:modelValue": U[0] || (U[0] = (Y) => h.value = Y),
            autofocus: "",
            required: "",
            onKeyup: $v(B, ["enter"])
          }, null, 40, c_), [
            [zv, h.value]
          ]),
          C.value ? (L(), V("p", f_, ie(C.value), 1)) : pe("", !0),
          j("div", h_, [
            ue(ti, {
              theme: "gray",
              class: "mr-3",
              onClick: Te(T, ["prevent"])
            }, {
              default: _e(() => [
                ut(ie($.__("Cancel")), 1)
              ]),
              _: 1
            }),
            ue(ti, {
              type: "submit",
              disabled: W.value,
              loading: W.value,
              onClick: Te(B, ["prevent"])
            }, {
              default: _e(() => [
                W.value ? (L(), V(Ke, { key: 0 }, [
                  ut(ie($.__("Creating")), 1)
                ], 64)) : (L(), V(Ke, { key: 1 }, [
                  ut(ie($.__("Create")), 1)
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled", "loading"])
          ])
        ])
      ]),
      _: 1
    }, 8, ["modal"]));
  }
}, p_ = {
  key: 0,
  class: "p-6"
}, g_ = ["placeholder", "value"], v_ = {
  key: 1,
  class: "p-6"
}, m_ = { class: "flex w-full relative" }, __ = ["placeholder", "value"], y_ = { class: "flex items-center leading-normal bg-gray-50 dark:bg-gray-900 ml-3 rounded-lg px-3 whitespace-no-wrap text-grey-dark text-sm" }, b_ = {
  key: 0,
  class: "my-2 text-red-500"
}, w_ = {
  __name: "RenameModal",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = Tt(), i = s, h = At(() => i.modal.payload), C = At(() => h.value.type === "folder"), W = At(() => h.value.name.replace(/^.*[\\/]/, "")), B = At(() => {
      if (!C.value) {
        var d = /(?:\.([^.]+))?$/;
        let E = d.exec(W.value);
        if (E)
          return E[0];
      }
      return "";
    }), T = At(
      () => W.value.replace(B.value, "")
    ), $ = we(), U = we(), Y = we(!1);
    function q() {
      p.closeModal(i.modal.id), $.value = null;
    }
    function ae() {
      const d = U.value.value;
      if (!d)
        return $.value = "The name is required", !1;
      let E = C.value ? d : d + B.value;
      if (!E)
        return $.value = "The name is required", !1;
      const D = (h.value.path.substring(0, h.value.path.lastIndexOf("/")) + "/" + E).replace(/^\/+/, "");
      return (C.value ? p.renameFolder(h.value.path, D) : p.renameFile(h.value.path, D)).then(
        (S) => H(S.response && S.response.data ? S.response.data : S)
      ).catch(
        (S) => H(S.response && S.response.data ? S.response.data : S)
      );
    }
    function H(d) {
      $.value = !d.errors || d.errors.length <= 0 ? null : d.message;
    }
    return (d, E) => (L(), Oe(Dr, { modal: s.modal }, {
      header: _e(() => [
        j("div", null, ie(d.__(C.value ? "Rename folder" : "Rename file")), 1)
      ]),
      footer: _e(() => [
        ue(ti, {
          theme: "gray",
          class: "mr-3",
          onClick: Te(q, ["prevent"])
        }, {
          default: _e(() => [
            ut(ie(d.__("Cancel")), 1)
          ]),
          _: 1
        }),
        ue(ti, {
          type: "submit",
          disabled: Y.value,
          loading: Y.value,
          onClick: Te(ae, ["prevent"])
        }, {
          default: _e(() => [
            Y.value ? (L(), V(Ke, { key: 0 }, [
              ut(ie(d.__("Renaming")), 1)
            ], 64)) : (L(), V(Ke, { key: 1 }, [
              ut(ie(d.__("Rename")), 1)
            ], 64))
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      default: _e(() => [
        C.value ? (L(), V("div", p_, [
          j("input", {
            ref_key: "input",
            ref: U,
            type: "text",
            class: "appearance-none w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 h-10 px-3 rounded-lg",
            placeholder: W.value,
            value: W.value,
            autofocus: "",
            required: ""
          }, null, 8, g_)
        ])) : (L(), V("div", v_, [
          j("div", m_, [
            j("input", {
              ref_key: "input",
              ref: U,
              type: "text",
              class: "appearance-none w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 h-10 px-3 rounded-lg",
              placeholder: T.value,
              value: T.value,
              autofocus: "",
              required: ""
            }, null, 8, __),
            j("span", y_, ie(B.value), 1)
          ]),
          $.value ? (L(), V("p", b_, ie($.value), 1)) : pe("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["modal"]));
  }
}, x_ = { class: "p-6" }, k_ = { class: "text-sm mt-2" }, S_ = { class: "text-sm mt-2" }, C_ = { class: "text-sm mt-2" }, E_ = {
  __name: "DeleteModal",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = Tt(), i = s, h = we(), C = we(!1);
    function W() {
      p.closeModal(i.modal.id), h.value = null;
    }
    async function B() {
      return C.value = !0, T().then(
        (U) => $(U.response && U.response.data ? U.response.data : U)
      ).catch(
        (U) => $(U.response && U.response.data ? U.response.data : U)
      );
    }
    async function T() {
      switch (i.modal.payload.type) {
        case bt.FOLDER:
          return p.deleteFolder(
            i.modal.payload[bt.FOLDER].path
          );
        case bt.FILE:
          return p.deleteFiles(
            [i.modal.payload[bt.FILE].path]
          );
        case bt.FILES:
          return p.deleteFiles(
            i.modal.payload[bt.FILES].map(
              (U) => U.path
            )
          );
      }
    }
    function $(U) {
      C.value = !1, h.value = !U.errors || U.errors.length <= 0 ? null : U.message;
    }
    return (U, Y) => (L(), Oe(Dr, { modal: s.modal }, {
      header: _e(() => [
        j("div", null, ie(U.__("Delete")), 1)
      ]),
      footer: _e(() => [
        ue(ti, {
          theme: "gray",
          class: "mr-3",
          onClick: Te(W, ["prevent"])
        }, {
          default: _e(() => [
            ut(ie(U.__("Cancel")), 1)
          ]),
          _: 1
        }),
        ue(ti, {
          theme: "danger",
          disabled: C.value,
          loading: C.value,
          onClick: Te(B, ["prevent"])
        }, {
          default: _e(() => [
            C.value ? (L(), V(Ke, { key: 0 }, [
              ut(ie(U.__("Deleting")), 1)
            ], 64)) : (L(), V(Ke, { key: 1 }, [
              ut(ie(U.__("Delete")), 1)
            ], 64))
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      default: _e(() => [
        j("div", x_, [
          s.modal.payload.type === Q(bt).FOLDER ? (L(), V(Ke, { key: 0 }, [
            j("p", null, ie(U.__("Are you sure you want to remove this folder?")), 1),
            j("p", k_, ie(U.__(
              "Remember: The folder and all his contents will be delete from your storage"
            )), 1)
          ], 64)) : s.modal.payload.type === Q(bt).FILE ? (L(), V(Ke, { key: 1 }, [
            j("p", null, ie(U.__("Are you sure you want to remove this file?")), 1),
            j("p", S_, ie(U.__(
              "Remember: The file will be delete from your storage"
            )), 1)
          ], 64)) : s.modal.payload.type === Q(bt).FILES ? (L(), V(Ke, { key: 2 }, [
            j("p", null, ie(U.__("Are you sure you want to remove this files?")), 1),
            j("p", C_, ie(U.__(
              "Remember: The files will be delete from your storage"
            )), 1)
          ], 64)) : pe("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modal"]));
  }
};
var Vl = {}, Zl = { exports: {} };
/*!
 * Cropper.js v1.5.13
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-11-20T05:30:46.114Z
 */
(function(s, p) {
  (function(i, h) {
    s.exports = h();
  })(Vr, function() {
    function i(g, a) {
      var l = Object.keys(g);
      if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(g);
        a && (u = u.filter(function(b) {
          return Object.getOwnPropertyDescriptor(g, b).enumerable;
        })), l.push.apply(l, u);
      }
      return l;
    }
    function h(g) {
      for (var a = 1; a < arguments.length; a++) {
        var l = arguments[a] != null ? arguments[a] : {};
        a % 2 ? i(Object(l), !0).forEach(function(u) {
          $(g, u, l[u]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(l)) : i(Object(l)).forEach(function(u) {
          Object.defineProperty(g, u, Object.getOwnPropertyDescriptor(l, u));
        });
      }
      return g;
    }
    function C(g) {
      "@babel/helpers - typeof";
      return C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, C(g);
    }
    function W(g, a) {
      if (!(g instanceof a))
        throw new TypeError("Cannot call a class as a function");
    }
    function B(g, a) {
      for (var l = 0; l < a.length; l++) {
        var u = a[l];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(g, u.key, u);
      }
    }
    function T(g, a, l) {
      return a && B(g.prototype, a), l && B(g, l), Object.defineProperty(g, "prototype", {
        writable: !1
      }), g;
    }
    function $(g, a, l) {
      return a in g ? Object.defineProperty(g, a, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : g[a] = l, g;
    }
    function U(g) {
      return Y(g) || q(g) || ae(g) || d();
    }
    function Y(g) {
      if (Array.isArray(g))
        return H(g);
    }
    function q(g) {
      if (typeof Symbol < "u" && g[Symbol.iterator] != null || g["@@iterator"] != null)
        return Array.from(g);
    }
    function ae(g, a) {
      if (g) {
        if (typeof g == "string")
          return H(g, a);
        var l = Object.prototype.toString.call(g).slice(8, -1);
        if (l === "Object" && g.constructor && (l = g.constructor.name), l === "Map" || l === "Set")
          return Array.from(g);
        if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
          return H(g, a);
      }
    }
    function H(g, a) {
      (a == null || a > g.length) && (a = g.length);
      for (var l = 0, u = new Array(a); l < a; l++)
        u[l] = g[l];
      return u;
    }
    function d() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var E = typeof window < "u" && typeof window.document < "u", D = E ? window : {}, S = E && D.document.documentElement ? "ontouchstart" in D.document.documentElement : !1, _ = E ? "PointerEvent" in D : !1, oe = "cropper", ee = "all", te = "crop", ge = "move", De = "zoom", ce = "e", le = "w", ne = "s", ye = "n", Pe = "ne", rt = "nw", ft = "se", mt = "sw", je = "".concat(oe, "-crop"), $e = "".concat(oe, "-disabled"), xe = "".concat(oe, "-hidden"), xn = "".concat(oe, "-hide"), Mn = "".concat(oe, "-invisible"), gt = "".concat(oe, "-modal"), Vn = "".concat(oe, "-move"), kn = "".concat(oe, "Action"), Ln = "".concat(oe, "Preview"), qt = "crop", Pn = "move", Ar = "none", en = "crop", tn = "cropend", Sn = "cropmove", Cn = "cropstart", En = "dblclick", xt = S ? "touchstart" : "mousedown", Rt = S ? "touchmove" : "mousemove", Nn = S ? "touchend touchcancel" : "mouseup", Tr = _ ? "pointerdown" : xt, Bt = _ ? "pointermove" : Rt, dr = _ ? "pointerup pointercancel" : Nn, Rr = "ready", On = "resize", Qe = "wheel", Z = "zoom", ve = "image/jpeg", ze = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, kt = /^data:/, St = /^data:image\/jpeg;base64,/, Gt = /^img|canvas$/i, Fn = 200, Ir = 100, Mr = {
      // Define the view mode of the cropper
      viewMode: 0,
      // 0, 1, 2, 3
      // Define the dragging mode of the cropper
      dragMode: qt,
      // 'crop', 'move' or 'none'
      // Define the initial aspect ratio of the crop box
      initialAspectRatio: NaN,
      // Define the aspect ratio of the crop box
      aspectRatio: NaN,
      // An object with the previous cropping result data
      data: null,
      // A selector for adding extra containers to preview
      preview: "",
      // Re-render the cropper when resize the window
      responsive: !0,
      // Restore the cropped area after resize the window
      restore: !0,
      // Check if the current image is a cross-origin image
      checkCrossOrigin: !0,
      // Check the current image's Exif Orientation information
      checkOrientation: !0,
      // Show the black modal
      modal: !0,
      // Show the dashed lines for guiding
      guides: !0,
      // Show the center indicator for guiding
      center: !0,
      // Show the white modal to highlight the crop box
      highlight: !0,
      // Show the grid background
      background: !0,
      // Enable to crop the image automatically when initialize
      autoCrop: !0,
      // Define the percentage of automatic cropping area when initializes
      autoCropArea: 0.8,
      // Enable to move the image
      movable: !0,
      // Enable to rotate the image
      rotatable: !0,
      // Enable to scale the image
      scalable: !0,
      // Enable to zoom the image
      zoomable: !0,
      // Enable to zoom the image by dragging touch
      zoomOnTouch: !0,
      // Enable to zoom the image by wheeling mouse
      zoomOnWheel: !0,
      // Define zoom ratio when zoom the image by wheeling mouse
      wheelZoomRatio: 0.1,
      // Enable to move the crop box
      cropBoxMovable: !0,
      // Enable to resize the crop box
      cropBoxResizable: !0,
      // Toggle drag mode between "crop" and "move" when click twice on the cropper
      toggleDragModeOnDblclick: !0,
      // Size limitation
      minCanvasWidth: 0,
      minCanvasHeight: 0,
      minCropBoxWidth: 0,
      minCropBoxHeight: 0,
      minContainerWidth: Fn,
      minContainerHeight: Ir,
      // Shortcuts of events
      ready: null,
      cropstart: null,
      cropmove: null,
      cropend: null,
      crop: null,
      zoom: null
    }, ri = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', ii = Number.isNaN || D.isNaN;
    function Se(g) {
      return typeof g == "number" && !ii(g);
    }
    var Lr = function(a) {
      return a > 0 && a < 1 / 0;
    };
    function pr(g) {
      return typeof g > "u";
    }
    function gn(g) {
      return C(g) === "object" && g !== null;
    }
    var ai = Object.prototype.hasOwnProperty;
    function Zn(g) {
      if (!gn(g))
        return !1;
      try {
        var a = g.constructor, l = a.prototype;
        return a && l && ai.call(l, "isPrototypeOf");
      } catch {
        return !1;
      }
    }
    function Ct(g) {
      return typeof g == "function";
    }
    var Ha = Array.prototype.slice;
    function oi(g) {
      return Array.from ? Array.from(g) : Ha.call(g);
    }
    function Ze(g, a) {
      return g && Ct(a) && (Array.isArray(g) || Se(g.length) ? oi(g).forEach(function(l, u) {
        a.call(g, l, u, g);
      }) : gn(g) && Object.keys(g).forEach(function(l) {
        a.call(g, g[l], l, g);
      })), g;
    }
    var Ye = Object.assign || function(a) {
      for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), b = 1; b < l; b++)
        u[b - 1] = arguments[b];
      return gn(a) && u.length > 0 && u.forEach(function(m) {
        gn(m) && Object.keys(m).forEach(function(w) {
          a[w] = m[w];
        });
      }), a;
    }, qa = /\.\d*(?:0|9){12}\d*$/;
    function Jn(g) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
      return qa.test(g) ? Math.round(g * a) / a : g;
    }
    var Ga = /^width|height|left|top|marginLeft|marginTop$/;
    function vn(g, a) {
      var l = g.style;
      Ze(a, function(u, b) {
        Ga.test(b) && Se(u) && (u = "".concat(u, "px")), l[b] = u;
      });
    }
    function Xa(g, a) {
      return g.classList ? g.classList.contains(a) : g.className.indexOf(a) > -1;
    }
    function lt(g, a) {
      if (a) {
        if (Se(g.length)) {
          Ze(g, function(u) {
            lt(u, a);
          });
          return;
        }
        if (g.classList) {
          g.classList.add(a);
          return;
        }
        var l = g.className.trim();
        l ? l.indexOf(a) < 0 && (g.className = "".concat(l, " ").concat(a)) : g.className = a;
      }
    }
    function nn(g, a) {
      if (a) {
        if (Se(g.length)) {
          Ze(g, function(l) {
            nn(l, a);
          });
          return;
        }
        if (g.classList) {
          g.classList.remove(a);
          return;
        }
        g.className.indexOf(a) >= 0 && (g.className = g.className.replace(a, ""));
      }
    }
    function Dn(g, a, l) {
      if (a) {
        if (Se(g.length)) {
          Ze(g, function(u) {
            Dn(u, a, l);
          });
          return;
        }
        l ? lt(g, a) : nn(g, a);
      }
    }
    var Ya = /([a-z\d])([A-Z])/g;
    function gr(g) {
      return g.replace(Ya, "$1-$2").toLowerCase();
    }
    function si(g, a) {
      return gn(g[a]) ? g[a] : g.dataset ? g.dataset[a] : g.getAttribute("data-".concat(gr(a)));
    }
    function vr(g, a, l) {
      gn(l) ? g[a] = l : g.dataset ? g.dataset[a] = l : g.setAttribute("data-".concat(gr(a)), l);
    }
    function ja(g, a) {
      if (gn(g[a]))
        try {
          delete g[a];
        } catch {
          g[a] = void 0;
        }
      else if (g.dataset)
        try {
          delete g.dataset[a];
        } catch {
          g.dataset[a] = void 0;
        }
      else
        g.removeAttribute("data-".concat(gr(a)));
    }
    var Mi = /\s\s*/, Li = function() {
      var g = !1;
      if (E) {
        var a = !1, l = function() {
        }, u = Object.defineProperty({}, "once", {
          get: function() {
            return g = !0, a;
          },
          /**
           * This setter can fix a `TypeError` in strict mode
           * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
           * @param {boolean} value - The value to set
           */
          set: function(m) {
            a = m;
          }
        });
        D.addEventListener("test", l, u), D.removeEventListener("test", l, u);
      }
      return g;
    }();
    function Xt(g, a, l) {
      var u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, b = l;
      a.trim().split(Mi).forEach(function(m) {
        if (!Li) {
          var w = g.listeners;
          w && w[m] && w[m][l] && (b = w[m][l], delete w[m][l], Object.keys(w[m]).length === 0 && delete w[m], Object.keys(w).length === 0 && delete g.listeners);
        }
        g.removeEventListener(m, b, u);
      });
    }
    function Ut(g, a, l) {
      var u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, b = l;
      a.trim().split(Mi).forEach(function(m) {
        if (u.once && !Li) {
          var w = g.listeners, A = w === void 0 ? {} : w;
          b = function() {
            delete A[m][l], g.removeEventListener(m, b, u);
            for (var F = arguments.length, R = new Array(F), I = 0; I < F; I++)
              R[I] = arguments[I];
            l.apply(g, R);
          }, A[m] || (A[m] = {}), A[m][l] && g.removeEventListener(m, A[m][l], u), A[m][l] = b, g.listeners = A;
        }
        g.addEventListener(m, b, u);
      });
    }
    function Qn(g, a, l) {
      var u;
      return Ct(Event) && Ct(CustomEvent) ? u = new CustomEvent(a, {
        detail: l,
        bubbles: !0,
        cancelable: !0
      }) : (u = document.createEvent("CustomEvent"), u.initCustomEvent(a, !0, !0, l)), g.dispatchEvent(u);
    }
    function ui(g) {
      var a = g.getBoundingClientRect();
      return {
        left: a.left + (window.pageXOffset - document.documentElement.clientLeft),
        top: a.top + (window.pageYOffset - document.documentElement.clientTop)
      };
    }
    var li = D.location, Ka = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
    function Pi(g) {
      var a = g.match(Ka);
      return a !== null && (a[1] !== li.protocol || a[2] !== li.hostname || a[3] !== li.port);
    }
    function Ni(g) {
      var a = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
      return g + (g.indexOf("?") === -1 ? "?" : "&") + a;
    }
    function mr(g) {
      var a = g.rotate, l = g.scaleX, u = g.scaleY, b = g.translateX, m = g.translateY, w = [];
      Se(b) && b !== 0 && w.push("translateX(".concat(b, "px)")), Se(m) && m !== 0 && w.push("translateY(".concat(m, "px)")), Se(a) && a !== 0 && w.push("rotate(".concat(a, "deg)")), Se(l) && l !== 1 && w.push("scaleX(".concat(l, ")")), Se(u) && u !== 1 && w.push("scaleY(".concat(u, ")"));
      var A = w.length ? w.join(" ") : "none";
      return {
        WebkitTransform: A,
        msTransform: A,
        transform: A
      };
    }
    function Va(g) {
      var a = h({}, g), l = 0;
      return Ze(g, function(u, b) {
        delete a[b], Ze(a, function(m) {
          var w = Math.abs(u.startX - m.startX), A = Math.abs(u.startY - m.startY), X = Math.abs(u.endX - m.endX), F = Math.abs(u.endY - m.endY), R = Math.sqrt(w * w + A * A), I = Math.sqrt(X * X + F * F), G = (I - R) / R;
          Math.abs(G) > Math.abs(l) && (l = G);
        });
      }), l;
    }
    function Bn(g, a) {
      var l = g.pageX, u = g.pageY, b = {
        endX: l,
        endY: u
      };
      return a ? b : h({
        startX: l,
        startY: u
      }, b);
    }
    function Za(g) {
      var a = 0, l = 0, u = 0;
      return Ze(g, function(b) {
        var m = b.startX, w = b.startY;
        a += m, l += w, u += 1;
      }), a /= u, l /= u, {
        pageX: a,
        pageY: l
      };
    }
    function Yt(g) {
      var a = g.aspectRatio, l = g.height, u = g.width, b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", m = Lr(u), w = Lr(l);
      if (m && w) {
        var A = l * a;
        b === "contain" && A > u || b === "cover" && A < u ? l = u / a : u = l * a;
      } else
        m ? l = u / a : w && (u = l * a);
      return {
        width: u,
        height: l
      };
    }
    function Ja(g) {
      var a = g.width, l = g.height, u = g.degree;
      if (u = Math.abs(u) % 180, u === 90)
        return {
          width: l,
          height: a
        };
      var b = u % 90 * Math.PI / 180, m = Math.sin(b), w = Math.cos(b), A = a * w + l * m, X = a * m + l * w;
      return u > 90 ? {
        width: X,
        height: A
      } : {
        width: A,
        height: X
      };
    }
    function Qa(g, a, l, u) {
      var b = a.aspectRatio, m = a.naturalWidth, w = a.naturalHeight, A = a.rotate, X = A === void 0 ? 0 : A, F = a.scaleX, R = F === void 0 ? 1 : F, I = a.scaleY, G = I === void 0 ? 1 : I, Ie = l.aspectRatio, Re = l.naturalWidth, Ge = l.naturalHeight, Be = u.fillColor, it = Be === void 0 ? "transparent" : Be, ct = u.imageSmoothingEnabled, et = ct === void 0 ? !0 : ct, rn = u.imageSmoothingQuality, It = rn === void 0 ? "low" : rn, K = u.maxWidth, Ue = K === void 0 ? 1 / 0 : K, at = u.maxHeight, Et = at === void 0 ? 1 / 0 : at, mn = u.minWidth, Un = mn === void 0 ? 0 : mn, $n = u.minHeight, An = $n === void 0 ? 0 : $n, an = document.createElement("canvas"), Ce = an.getContext("2d"), Fe = Yt({
        aspectRatio: Ie,
        width: Ue,
        height: Et
      }), Pr = Yt({
        aspectRatio: Ie,
        width: Un,
        height: An
      }, "cover"), fi = Math.min(Fe.width, Math.max(Pr.width, Re)), hi = Math.min(Fe.height, Math.max(Pr.height, Ge)), Gi = Yt({
        aspectRatio: b,
        width: Ue,
        height: Et
      }), Xi = Yt({
        aspectRatio: b,
        width: Un,
        height: An
      }, "cover"), Yi = Math.min(Gi.width, Math.max(Xi.width, m)), di = Math.min(Gi.height, Math.max(Xi.height, w)), ao = [-Yi / 2, -di / 2, Yi, di];
      return an.width = Jn(fi), an.height = Jn(hi), Ce.fillStyle = it, Ce.fillRect(0, 0, fi, hi), Ce.save(), Ce.translate(fi / 2, hi / 2), Ce.rotate(X * Math.PI / 180), Ce.scale(R, G), Ce.imageSmoothingEnabled = et, Ce.imageSmoothingQuality = It, Ce.drawImage.apply(Ce, [g].concat(U(ao.map(function(ht) {
        return Math.floor(Jn(ht));
      })))), Ce.restore(), an;
    }
    var Fi = String.fromCharCode;
    function Bi(g, a, l) {
      var u = "";
      l += a;
      for (var b = a; b < l; b += 1)
        u += Fi(g.getUint8(b));
      return u;
    }
    var Ui = /^data:.*,/;
    function $i(g) {
      var a = g.replace(Ui, ""), l = atob(a), u = new ArrayBuffer(l.length), b = new Uint8Array(u);
      return Ze(b, function(m, w) {
        b[w] = l.charCodeAt(w);
      }), u;
    }
    function eo(g, a) {
      for (var l = [], u = 8192, b = new Uint8Array(g); b.length > 0; )
        l.push(Fi.apply(null, oi(b.subarray(0, u)))), b = b.subarray(u);
      return "data:".concat(a, ";base64,").concat(btoa(l.join("")));
    }
    function to(g) {
      var a = new DataView(g), l;
      try {
        var u, b, m;
        if (a.getUint8(0) === 255 && a.getUint8(1) === 216)
          for (var w = a.byteLength, A = 2; A + 1 < w; ) {
            if (a.getUint8(A) === 255 && a.getUint8(A + 1) === 225) {
              b = A;
              break;
            }
            A += 1;
          }
        if (b) {
          var X = b + 4, F = b + 10;
          if (Bi(a, X, 4) === "Exif") {
            var R = a.getUint16(F);
            if (u = R === 18761, (u || R === 19789) && a.getUint16(F + 2, u) === 42) {
              var I = a.getUint32(F + 4, u);
              I >= 8 && (m = F + I);
            }
          }
        }
        if (m) {
          var G = a.getUint16(m, u), Ie, Re;
          for (Re = 0; Re < G; Re += 1)
            if (Ie = m + Re * 12 + 2, a.getUint16(Ie, u) === 274) {
              Ie += 8, l = a.getUint16(Ie, u), a.setUint16(Ie, 1, u);
              break;
            }
        }
      } catch {
        l = 1;
      }
      return l;
    }
    function no(g) {
      var a = 0, l = 1, u = 1;
      switch (g) {
        case 2:
          l = -1;
          break;
        case 3:
          a = -180;
          break;
        case 4:
          u = -1;
          break;
        case 5:
          a = 90, u = -1;
          break;
        case 6:
          a = 90;
          break;
        case 7:
          a = 90, l = -1;
          break;
        case 8:
          a = -90;
          break;
      }
      return {
        rotate: a,
        scaleX: l,
        scaleY: u
      };
    }
    var ro = {
      render: function() {
        this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
      },
      initContainer: function() {
        var a = this.element, l = this.options, u = this.container, b = this.cropper, m = Number(l.minContainerWidth), w = Number(l.minContainerHeight);
        lt(b, xe), nn(a, xe);
        var A = {
          width: Math.max(u.offsetWidth, m >= 0 ? m : Fn),
          height: Math.max(u.offsetHeight, w >= 0 ? w : Ir)
        };
        this.containerData = A, vn(b, {
          width: A.width,
          height: A.height
        }), lt(a, xe), nn(b, xe);
      },
      // Canvas (image wrapper)
      initCanvas: function() {
        var a = this.containerData, l = this.imageData, u = this.options.viewMode, b = Math.abs(l.rotate) % 180 === 90, m = b ? l.naturalHeight : l.naturalWidth, w = b ? l.naturalWidth : l.naturalHeight, A = m / w, X = a.width, F = a.height;
        a.height * A > a.width ? u === 3 ? X = a.height * A : F = a.width / A : u === 3 ? F = a.width / A : X = a.height * A;
        var R = {
          aspectRatio: A,
          naturalWidth: m,
          naturalHeight: w,
          width: X,
          height: F
        };
        this.canvasData = R, this.limited = u === 1 || u === 2, this.limitCanvas(!0, !0), R.width = Math.min(Math.max(R.width, R.minWidth), R.maxWidth), R.height = Math.min(Math.max(R.height, R.minHeight), R.maxHeight), R.left = (a.width - R.width) / 2, R.top = (a.height - R.height) / 2, R.oldLeft = R.left, R.oldTop = R.top, this.initialCanvasData = Ye({}, R);
      },
      limitCanvas: function(a, l) {
        var u = this.options, b = this.containerData, m = this.canvasData, w = this.cropBoxData, A = u.viewMode, X = m.aspectRatio, F = this.cropped && w;
        if (a) {
          var R = Number(u.minCanvasWidth) || 0, I = Number(u.minCanvasHeight) || 0;
          A > 1 ? (R = Math.max(R, b.width), I = Math.max(I, b.height), A === 3 && (I * X > R ? R = I * X : I = R / X)) : A > 0 && (R ? R = Math.max(R, F ? w.width : 0) : I ? I = Math.max(I, F ? w.height : 0) : F && (R = w.width, I = w.height, I * X > R ? R = I * X : I = R / X));
          var G = Yt({
            aspectRatio: X,
            width: R,
            height: I
          });
          R = G.width, I = G.height, m.minWidth = R, m.minHeight = I, m.maxWidth = 1 / 0, m.maxHeight = 1 / 0;
        }
        if (l)
          if (A > (F ? 0 : 1)) {
            var Ie = b.width - m.width, Re = b.height - m.height;
            m.minLeft = Math.min(0, Ie), m.minTop = Math.min(0, Re), m.maxLeft = Math.max(0, Ie), m.maxTop = Math.max(0, Re), F && this.limited && (m.minLeft = Math.min(w.left, w.left + (w.width - m.width)), m.minTop = Math.min(w.top, w.top + (w.height - m.height)), m.maxLeft = w.left, m.maxTop = w.top, A === 2 && (m.width >= b.width && (m.minLeft = Math.min(0, Ie), m.maxLeft = Math.max(0, Ie)), m.height >= b.height && (m.minTop = Math.min(0, Re), m.maxTop = Math.max(0, Re))));
          } else
            m.minLeft = -m.width, m.minTop = -m.height, m.maxLeft = b.width, m.maxTop = b.height;
      },
      renderCanvas: function(a, l) {
        var u = this.canvasData, b = this.imageData;
        if (l) {
          var m = Ja({
            width: b.naturalWidth * Math.abs(b.scaleX || 1),
            height: b.naturalHeight * Math.abs(b.scaleY || 1),
            degree: b.rotate || 0
          }), w = m.width, A = m.height, X = u.width * (w / u.naturalWidth), F = u.height * (A / u.naturalHeight);
          u.left -= (X - u.width) / 2, u.top -= (F - u.height) / 2, u.width = X, u.height = F, u.aspectRatio = w / A, u.naturalWidth = w, u.naturalHeight = A, this.limitCanvas(!0, !1);
        }
        (u.width > u.maxWidth || u.width < u.minWidth) && (u.left = u.oldLeft), (u.height > u.maxHeight || u.height < u.minHeight) && (u.top = u.oldTop), u.width = Math.min(Math.max(u.width, u.minWidth), u.maxWidth), u.height = Math.min(Math.max(u.height, u.minHeight), u.maxHeight), this.limitCanvas(!1, !0), u.left = Math.min(Math.max(u.left, u.minLeft), u.maxLeft), u.top = Math.min(Math.max(u.top, u.minTop), u.maxTop), u.oldLeft = u.left, u.oldTop = u.top, vn(this.canvas, Ye({
          width: u.width,
          height: u.height
        }, mr({
          translateX: u.left,
          translateY: u.top
        }))), this.renderImage(a), this.cropped && this.limited && this.limitCropBox(!0, !0);
      },
      renderImage: function(a) {
        var l = this.canvasData, u = this.imageData, b = u.naturalWidth * (l.width / l.naturalWidth), m = u.naturalHeight * (l.height / l.naturalHeight);
        Ye(u, {
          width: b,
          height: m,
          left: (l.width - b) / 2,
          top: (l.height - m) / 2
        }), vn(this.image, Ye({
          width: u.width,
          height: u.height
        }, mr(Ye({
          translateX: u.left,
          translateY: u.top
        }, u)))), a && this.output();
      },
      initCropBox: function() {
        var a = this.options, l = this.canvasData, u = a.aspectRatio || a.initialAspectRatio, b = Number(a.autoCropArea) || 0.8, m = {
          width: l.width,
          height: l.height
        };
        u && (l.height * u > l.width ? m.height = m.width / u : m.width = m.height * u), this.cropBoxData = m, this.limitCropBox(!0, !0), m.width = Math.min(Math.max(m.width, m.minWidth), m.maxWidth), m.height = Math.min(Math.max(m.height, m.minHeight), m.maxHeight), m.width = Math.max(m.minWidth, m.width * b), m.height = Math.max(m.minHeight, m.height * b), m.left = l.left + (l.width - m.width) / 2, m.top = l.top + (l.height - m.height) / 2, m.oldLeft = m.left, m.oldTop = m.top, this.initialCropBoxData = Ye({}, m);
      },
      limitCropBox: function(a, l) {
        var u = this.options, b = this.containerData, m = this.canvasData, w = this.cropBoxData, A = this.limited, X = u.aspectRatio;
        if (a) {
          var F = Number(u.minCropBoxWidth) || 0, R = Number(u.minCropBoxHeight) || 0, I = A ? Math.min(b.width, m.width, m.width + m.left, b.width - m.left) : b.width, G = A ? Math.min(b.height, m.height, m.height + m.top, b.height - m.top) : b.height;
          F = Math.min(F, b.width), R = Math.min(R, b.height), X && (F && R ? R * X > F ? R = F / X : F = R * X : F ? R = F / X : R && (F = R * X), G * X > I ? G = I / X : I = G * X), w.minWidth = Math.min(F, I), w.minHeight = Math.min(R, G), w.maxWidth = I, w.maxHeight = G;
        }
        l && (A ? (w.minLeft = Math.max(0, m.left), w.minTop = Math.max(0, m.top), w.maxLeft = Math.min(b.width, m.left + m.width) - w.width, w.maxTop = Math.min(b.height, m.top + m.height) - w.height) : (w.minLeft = 0, w.minTop = 0, w.maxLeft = b.width - w.width, w.maxTop = b.height - w.height));
      },
      renderCropBox: function() {
        var a = this.options, l = this.containerData, u = this.cropBoxData;
        (u.width > u.maxWidth || u.width < u.minWidth) && (u.left = u.oldLeft), (u.height > u.maxHeight || u.height < u.minHeight) && (u.top = u.oldTop), u.width = Math.min(Math.max(u.width, u.minWidth), u.maxWidth), u.height = Math.min(Math.max(u.height, u.minHeight), u.maxHeight), this.limitCropBox(!1, !0), u.left = Math.min(Math.max(u.left, u.minLeft), u.maxLeft), u.top = Math.min(Math.max(u.top, u.minTop), u.maxTop), u.oldLeft = u.left, u.oldTop = u.top, a.movable && a.cropBoxMovable && vr(this.face, kn, u.width >= l.width && u.height >= l.height ? ge : ee), vn(this.cropBox, Ye({
          width: u.width,
          height: u.height
        }, mr({
          translateX: u.left,
          translateY: u.top
        }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
      },
      output: function() {
        this.preview(), Qn(this.element, en, this.getData());
      }
    }, zi = {
      initPreview: function() {
        var a = this.element, l = this.crossOrigin, u = this.options.preview, b = l ? this.crossOriginUrl : this.url, m = a.alt || "The image to preview", w = document.createElement("img");
        if (l && (w.crossOrigin = l), w.src = b, w.alt = m, this.viewBox.appendChild(w), this.viewBoxImage = w, !!u) {
          var A = u;
          typeof u == "string" ? A = a.ownerDocument.querySelectorAll(u) : u.querySelector && (A = [u]), this.previews = A, Ze(A, function(X) {
            var F = document.createElement("img");
            vr(X, Ln, {
              width: X.offsetWidth,
              height: X.offsetHeight,
              html: X.innerHTML
            }), l && (F.crossOrigin = l), F.src = b, F.alt = m, F.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', X.innerHTML = "", X.appendChild(F);
          });
        }
      },
      resetPreview: function() {
        Ze(this.previews, function(a) {
          var l = si(a, Ln);
          vn(a, {
            width: l.width,
            height: l.height
          }), a.innerHTML = l.html, ja(a, Ln);
        });
      },
      preview: function() {
        var a = this.imageData, l = this.canvasData, u = this.cropBoxData, b = u.width, m = u.height, w = a.width, A = a.height, X = u.left - l.left - a.left, F = u.top - l.top - a.top;
        !this.cropped || this.disabled || (vn(this.viewBoxImage, Ye({
          width: w,
          height: A
        }, mr(Ye({
          translateX: -X,
          translateY: -F
        }, a)))), Ze(this.previews, function(R) {
          var I = si(R, Ln), G = I.width, Ie = I.height, Re = G, Ge = Ie, Be = 1;
          b && (Be = G / b, Ge = m * Be), m && Ge > Ie && (Be = Ie / m, Re = b * Be, Ge = Ie), vn(R, {
            width: Re,
            height: Ge
          }), vn(R.getElementsByTagName("img")[0], Ye({
            width: w * Be,
            height: A * Be
          }, mr(Ye({
            translateX: -X * Be,
            translateY: -F * Be
          }, a))));
        }));
      }
    }, Wi = {
      bind: function() {
        var a = this.element, l = this.options, u = this.cropper;
        Ct(l.cropstart) && Ut(a, Cn, l.cropstart), Ct(l.cropmove) && Ut(a, Sn, l.cropmove), Ct(l.cropend) && Ut(a, tn, l.cropend), Ct(l.crop) && Ut(a, en, l.crop), Ct(l.zoom) && Ut(a, Z, l.zoom), Ut(u, Tr, this.onCropStart = this.cropStart.bind(this)), l.zoomable && l.zoomOnWheel && Ut(u, Qe, this.onWheel = this.wheel.bind(this), {
          passive: !1,
          capture: !0
        }), l.toggleDragModeOnDblclick && Ut(u, En, this.onDblclick = this.dblclick.bind(this)), Ut(a.ownerDocument, Bt, this.onCropMove = this.cropMove.bind(this)), Ut(a.ownerDocument, dr, this.onCropEnd = this.cropEnd.bind(this)), l.responsive && Ut(window, On, this.onResize = this.resize.bind(this));
      },
      unbind: function() {
        var a = this.element, l = this.options, u = this.cropper;
        Ct(l.cropstart) && Xt(a, Cn, l.cropstart), Ct(l.cropmove) && Xt(a, Sn, l.cropmove), Ct(l.cropend) && Xt(a, tn, l.cropend), Ct(l.crop) && Xt(a, en, l.crop), Ct(l.zoom) && Xt(a, Z, l.zoom), Xt(u, Tr, this.onCropStart), l.zoomable && l.zoomOnWheel && Xt(u, Qe, this.onWheel, {
          passive: !1,
          capture: !0
        }), l.toggleDragModeOnDblclick && Xt(u, En, this.onDblclick), Xt(a.ownerDocument, Bt, this.onCropMove), Xt(a.ownerDocument, dr, this.onCropEnd), l.responsive && Xt(window, On, this.onResize);
      }
    }, Hi = {
      resize: function() {
        if (!this.disabled) {
          var a = this.options, l = this.container, u = this.containerData, b = l.offsetWidth / u.width, m = l.offsetHeight / u.height, w = Math.abs(b - 1) > Math.abs(m - 1) ? b : m;
          if (w !== 1) {
            var A, X;
            a.restore && (A = this.getCanvasData(), X = this.getCropBoxData()), this.render(), a.restore && (this.setCanvasData(Ze(A, function(F, R) {
              A[R] = F * w;
            })), this.setCropBoxData(Ze(X, function(F, R) {
              X[R] = F * w;
            })));
          }
        }
      },
      dblclick: function() {
        this.disabled || this.options.dragMode === Ar || this.setDragMode(Xa(this.dragBox, je) ? Pn : qt);
      },
      wheel: function(a) {
        var l = this, u = Number(this.options.wheelZoomRatio) || 0.1, b = 1;
        this.disabled || (a.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
          l.wheeling = !1;
        }, 50), a.deltaY ? b = a.deltaY > 0 ? 1 : -1 : a.wheelDelta ? b = -a.wheelDelta / 120 : a.detail && (b = a.detail > 0 ? 1 : -1), this.zoom(-b * u, a)));
      },
      cropStart: function(a) {
        var l = a.buttons, u = a.button;
        if (!(this.disabled || (a.type === "mousedown" || a.type === "pointerdown" && a.pointerType === "mouse") && // No primary button (Usually the left button)
        (Se(l) && l !== 1 || Se(u) && u !== 0 || a.ctrlKey))) {
          var b = this.options, m = this.pointers, w;
          a.changedTouches ? Ze(a.changedTouches, function(A) {
            m[A.identifier] = Bn(A);
          }) : m[a.pointerId || 0] = Bn(a), Object.keys(m).length > 1 && b.zoomable && b.zoomOnTouch ? w = De : w = si(a.target, kn), ze.test(w) && Qn(this.element, Cn, {
            originalEvent: a,
            action: w
          }) !== !1 && (a.preventDefault(), this.action = w, this.cropping = !1, w === te && (this.cropping = !0, lt(this.dragBox, gt)));
        }
      },
      cropMove: function(a) {
        var l = this.action;
        if (!(this.disabled || !l)) {
          var u = this.pointers;
          a.preventDefault(), Qn(this.element, Sn, {
            originalEvent: a,
            action: l
          }) !== !1 && (a.changedTouches ? Ze(a.changedTouches, function(b) {
            Ye(u[b.identifier] || {}, Bn(b, !0));
          }) : Ye(u[a.pointerId || 0] || {}, Bn(a, !0)), this.change(a));
        }
      },
      cropEnd: function(a) {
        if (!this.disabled) {
          var l = this.action, u = this.pointers;
          a.changedTouches ? Ze(a.changedTouches, function(b) {
            delete u[b.identifier];
          }) : delete u[a.pointerId || 0], l && (a.preventDefault(), Object.keys(u).length || (this.action = ""), this.cropping && (this.cropping = !1, Dn(this.dragBox, gt, this.cropped && this.options.modal)), Qn(this.element, tn, {
            originalEvent: a,
            action: l
          }));
        }
      }
    }, ci = {
      change: function(a) {
        var l = this.options, u = this.canvasData, b = this.containerData, m = this.cropBoxData, w = this.pointers, A = this.action, X = l.aspectRatio, F = m.left, R = m.top, I = m.width, G = m.height, Ie = F + I, Re = R + G, Ge = 0, Be = 0, it = b.width, ct = b.height, et = !0, rn;
        !X && a.shiftKey && (X = I && G ? I / G : 1), this.limited && (Ge = m.minLeft, Be = m.minTop, it = Ge + Math.min(b.width, u.width, u.left + u.width), ct = Be + Math.min(b.height, u.height, u.top + u.height));
        var It = w[Object.keys(w)[0]], K = {
          x: It.endX - It.startX,
          y: It.endY - It.startY
        }, Ue = function(Et) {
          switch (Et) {
            case ce:
              Ie + K.x > it && (K.x = it - Ie);
              break;
            case le:
              F + K.x < Ge && (K.x = Ge - F);
              break;
            case ye:
              R + K.y < Be && (K.y = Be - R);
              break;
            case ne:
              Re + K.y > ct && (K.y = ct - Re);
              break;
          }
        };
        switch (A) {
          case ee:
            F += K.x, R += K.y;
            break;
          case ce:
            if (K.x >= 0 && (Ie >= it || X && (R <= Be || Re >= ct))) {
              et = !1;
              break;
            }
            Ue(ce), I += K.x, I < 0 && (A = le, I = -I, F -= I), X && (G = I / X, R += (m.height - G) / 2);
            break;
          case ye:
            if (K.y <= 0 && (R <= Be || X && (F <= Ge || Ie >= it))) {
              et = !1;
              break;
            }
            Ue(ye), G -= K.y, R += K.y, G < 0 && (A = ne, G = -G, R -= G), X && (I = G * X, F += (m.width - I) / 2);
            break;
          case le:
            if (K.x <= 0 && (F <= Ge || X && (R <= Be || Re >= ct))) {
              et = !1;
              break;
            }
            Ue(le), I -= K.x, F += K.x, I < 0 && (A = ce, I = -I, F -= I), X && (G = I / X, R += (m.height - G) / 2);
            break;
          case ne:
            if (K.y >= 0 && (Re >= ct || X && (F <= Ge || Ie >= it))) {
              et = !1;
              break;
            }
            Ue(ne), G += K.y, G < 0 && (A = ye, G = -G, R -= G), X && (I = G * X, F += (m.width - I) / 2);
            break;
          case Pe:
            if (X) {
              if (K.y <= 0 && (R <= Be || Ie >= it)) {
                et = !1;
                break;
              }
              Ue(ye), G -= K.y, R += K.y, I = G * X;
            } else
              Ue(ye), Ue(ce), K.x >= 0 ? Ie < it ? I += K.x : K.y <= 0 && R <= Be && (et = !1) : I += K.x, K.y <= 0 ? R > Be && (G -= K.y, R += K.y) : (G -= K.y, R += K.y);
            I < 0 && G < 0 ? (A = mt, G = -G, I = -I, R -= G, F -= I) : I < 0 ? (A = rt, I = -I, F -= I) : G < 0 && (A = ft, G = -G, R -= G);
            break;
          case rt:
            if (X) {
              if (K.y <= 0 && (R <= Be || F <= Ge)) {
                et = !1;
                break;
              }
              Ue(ye), G -= K.y, R += K.y, I = G * X, F += m.width - I;
            } else
              Ue(ye), Ue(le), K.x <= 0 ? F > Ge ? (I -= K.x, F += K.x) : K.y <= 0 && R <= Be && (et = !1) : (I -= K.x, F += K.x), K.y <= 0 ? R > Be && (G -= K.y, R += K.y) : (G -= K.y, R += K.y);
            I < 0 && G < 0 ? (A = ft, G = -G, I = -I, R -= G, F -= I) : I < 0 ? (A = Pe, I = -I, F -= I) : G < 0 && (A = mt, G = -G, R -= G);
            break;
          case mt:
            if (X) {
              if (K.x <= 0 && (F <= Ge || Re >= ct)) {
                et = !1;
                break;
              }
              Ue(le), I -= K.x, F += K.x, G = I / X;
            } else
              Ue(ne), Ue(le), K.x <= 0 ? F > Ge ? (I -= K.x, F += K.x) : K.y >= 0 && Re >= ct && (et = !1) : (I -= K.x, F += K.x), K.y >= 0 ? Re < ct && (G += K.y) : G += K.y;
            I < 0 && G < 0 ? (A = Pe, G = -G, I = -I, R -= G, F -= I) : I < 0 ? (A = ft, I = -I, F -= I) : G < 0 && (A = rt, G = -G, R -= G);
            break;
          case ft:
            if (X) {
              if (K.x >= 0 && (Ie >= it || Re >= ct)) {
                et = !1;
                break;
              }
              Ue(ce), I += K.x, G = I / X;
            } else
              Ue(ne), Ue(ce), K.x >= 0 ? Ie < it ? I += K.x : K.y >= 0 && Re >= ct && (et = !1) : I += K.x, K.y >= 0 ? Re < ct && (G += K.y) : G += K.y;
            I < 0 && G < 0 ? (A = rt, G = -G, I = -I, R -= G, F -= I) : I < 0 ? (A = mt, I = -I, F -= I) : G < 0 && (A = Pe, G = -G, R -= G);
            break;
          case ge:
            this.move(K.x, K.y), et = !1;
            break;
          case De:
            this.zoom(Va(w), a), et = !1;
            break;
          case te:
            if (!K.x || !K.y) {
              et = !1;
              break;
            }
            rn = ui(this.cropper), F = It.startX - rn.left, R = It.startY - rn.top, I = m.minWidth, G = m.minHeight, K.x > 0 ? A = K.y > 0 ? ft : Pe : K.x < 0 && (F -= I, A = K.y > 0 ? mt : rt), K.y < 0 && (R -= G), this.cropped || (nn(this.cropBox, xe), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
            break;
        }
        et && (m.width = I, m.height = G, m.left = F, m.top = R, this.action = A, this.renderCropBox()), Ze(w, function(at) {
          at.startX = at.endX, at.startY = at.endY;
        });
      }
    }, io = {
      // Show the crop box manually
      crop: function() {
        return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && lt(this.dragBox, gt), nn(this.cropBox, xe), this.setCropBoxData(this.initialCropBoxData)), this;
      },
      // Reset the image and crop box to their initial states
      reset: function() {
        return this.ready && !this.disabled && (this.imageData = Ye({}, this.initialImageData), this.canvasData = Ye({}, this.initialCanvasData), this.cropBoxData = Ye({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
      },
      // Clear the crop box
      clear: function() {
        return this.cropped && !this.disabled && (Ye(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), nn(this.dragBox, gt), lt(this.cropBox, xe)), this;
      },
      /**
       * Replace the image's src and rebuild the cropper
       * @param {string} url - The new URL.
       * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
       * @returns {Cropper} this
       */
      replace: function(a) {
        var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        return !this.disabled && a && (this.isImg && (this.element.src = a), l ? (this.url = a, this.image.src = a, this.ready && (this.viewBoxImage.src = a, Ze(this.previews, function(u) {
          u.getElementsByTagName("img")[0].src = a;
        }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(a))), this;
      },
      // Enable (unfreeze) the cropper
      enable: function() {
        return this.ready && this.disabled && (this.disabled = !1, nn(this.cropper, $e)), this;
      },
      // Disable (freeze) the cropper
      disable: function() {
        return this.ready && !this.disabled && (this.disabled = !0, lt(this.cropper, $e)), this;
      },
      /**
       * Destroy the cropper and remove the instance from the image
       * @returns {Cropper} this
       */
      destroy: function() {
        var a = this.element;
        return a[oe] ? (a[oe] = void 0, this.isImg && this.replaced && (a.src = this.originalUrl), this.uncreate(), this) : this;
      },
      /**
       * Move the canvas with relative offsets
       * @param {number} offsetX - The relative offset distance on the x-axis.
       * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
       * @returns {Cropper} this
       */
      move: function(a) {
        var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a, u = this.canvasData, b = u.left, m = u.top;
        return this.moveTo(pr(a) ? a : b + Number(a), pr(l) ? l : m + Number(l));
      },
      /**
       * Move the canvas to an absolute point
       * @param {number} x - The x-axis coordinate.
       * @param {number} [y=x] - The y-axis coordinate.
       * @returns {Cropper} this
       */
      moveTo: function(a) {
        var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a, u = this.canvasData, b = !1;
        return a = Number(a), l = Number(l), this.ready && !this.disabled && this.options.movable && (Se(a) && (u.left = a, b = !0), Se(l) && (u.top = l, b = !0), b && this.renderCanvas(!0)), this;
      },
      /**
       * Zoom the canvas with a relative ratio
       * @param {number} ratio - The target ratio.
       * @param {Event} _originalEvent - The original event if any.
       * @returns {Cropper} this
       */
      zoom: function(a, l) {
        var u = this.canvasData;
        return a = Number(a), a < 0 ? a = 1 / (1 - a) : a = 1 + a, this.zoomTo(u.width * a / u.naturalWidth, null, l);
      },
      /**
       * Zoom the canvas to an absolute ratio
       * @param {number} ratio - The target ratio.
       * @param {Object} pivot - The zoom pivot point coordinate.
       * @param {Event} _originalEvent - The original event if any.
       * @returns {Cropper} this
       */
      zoomTo: function(a, l, u) {
        var b = this.options, m = this.canvasData, w = m.width, A = m.height, X = m.naturalWidth, F = m.naturalHeight;
        if (a = Number(a), a >= 0 && this.ready && !this.disabled && b.zoomable) {
          var R = X * a, I = F * a;
          if (Qn(this.element, Z, {
            ratio: a,
            oldRatio: w / X,
            originalEvent: u
          }) === !1)
            return this;
          if (u) {
            var G = this.pointers, Ie = ui(this.cropper), Re = G && Object.keys(G).length ? Za(G) : {
              pageX: u.pageX,
              pageY: u.pageY
            };
            m.left -= (R - w) * ((Re.pageX - Ie.left - m.left) / w), m.top -= (I - A) * ((Re.pageY - Ie.top - m.top) / A);
          } else
            Zn(l) && Se(l.x) && Se(l.y) ? (m.left -= (R - w) * ((l.x - m.left) / w), m.top -= (I - A) * ((l.y - m.top) / A)) : (m.left -= (R - w) / 2, m.top -= (I - A) / 2);
          m.width = R, m.height = I, this.renderCanvas(!0);
        }
        return this;
      },
      /**
       * Rotate the canvas with a relative degree
       * @param {number} degree - The rotate degree.
       * @returns {Cropper} this
       */
      rotate: function(a) {
        return this.rotateTo((this.imageData.rotate || 0) + Number(a));
      },
      /**
       * Rotate the canvas to an absolute degree
       * @param {number} degree - The rotate degree.
       * @returns {Cropper} this
       */
      rotateTo: function(a) {
        return a = Number(a), Se(a) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = a % 360, this.renderCanvas(!0, !0)), this;
      },
      /**
       * Scale the image on the x-axis.
       * @param {number} scaleX - The scale ratio on the x-axis.
       * @returns {Cropper} this
       */
      scaleX: function(a) {
        var l = this.imageData.scaleY;
        return this.scale(a, Se(l) ? l : 1);
      },
      /**
       * Scale the image on the y-axis.
       * @param {number} scaleY - The scale ratio on the y-axis.
       * @returns {Cropper} this
       */
      scaleY: function(a) {
        var l = this.imageData.scaleX;
        return this.scale(Se(l) ? l : 1, a);
      },
      /**
       * Scale the image
       * @param {number} scaleX - The scale ratio on the x-axis.
       * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
       * @returns {Cropper} this
       */
      scale: function(a) {
        var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a, u = this.imageData, b = !1;
        return a = Number(a), l = Number(l), this.ready && !this.disabled && this.options.scalable && (Se(a) && (u.scaleX = a, b = !0), Se(l) && (u.scaleY = l, b = !0), b && this.renderCanvas(!0, !0)), this;
      },
      /**
       * Get the cropped area position and size data (base on the original image)
       * @param {boolean} [rounded=false] - Indicate if round the data values or not.
       * @returns {Object} The result cropped data.
       */
      getData: function() {
        var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, l = this.options, u = this.imageData, b = this.canvasData, m = this.cropBoxData, w;
        if (this.ready && this.cropped) {
          w = {
            x: m.left - b.left,
            y: m.top - b.top,
            width: m.width,
            height: m.height
          };
          var A = u.width / u.naturalWidth;
          if (Ze(w, function(R, I) {
            w[I] = R / A;
          }), a) {
            var X = Math.round(w.y + w.height), F = Math.round(w.x + w.width);
            w.x = Math.round(w.x), w.y = Math.round(w.y), w.width = F - w.x, w.height = X - w.y;
          }
        } else
          w = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        return l.rotatable && (w.rotate = u.rotate || 0), l.scalable && (w.scaleX = u.scaleX || 1, w.scaleY = u.scaleY || 1), w;
      },
      /**
       * Set the cropped area position and size with new data
       * @param {Object} data - The new data.
       * @returns {Cropper} this
       */
      setData: function(a) {
        var l = this.options, u = this.imageData, b = this.canvasData, m = {};
        if (this.ready && !this.disabled && Zn(a)) {
          var w = !1;
          l.rotatable && Se(a.rotate) && a.rotate !== u.rotate && (u.rotate = a.rotate, w = !0), l.scalable && (Se(a.scaleX) && a.scaleX !== u.scaleX && (u.scaleX = a.scaleX, w = !0), Se(a.scaleY) && a.scaleY !== u.scaleY && (u.scaleY = a.scaleY, w = !0)), w && this.renderCanvas(!0, !0);
          var A = u.width / u.naturalWidth;
          Se(a.x) && (m.left = a.x * A + b.left), Se(a.y) && (m.top = a.y * A + b.top), Se(a.width) && (m.width = a.width * A), Se(a.height) && (m.height = a.height * A), this.setCropBoxData(m);
        }
        return this;
      },
      /**
       * Get the container size data.
       * @returns {Object} The result container data.
       */
      getContainerData: function() {
        return this.ready ? Ye({}, this.containerData) : {};
      },
      /**
       * Get the image position and size data.
       * @returns {Object} The result image data.
       */
      getImageData: function() {
        return this.sized ? Ye({}, this.imageData) : {};
      },
      /**
       * Get the canvas position and size data.
       * @returns {Object} The result canvas data.
       */
      getCanvasData: function() {
        var a = this.canvasData, l = {};
        return this.ready && Ze(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(u) {
          l[u] = a[u];
        }), l;
      },
      /**
       * Set the canvas position and size with new data.
       * @param {Object} data - The new canvas data.
       * @returns {Cropper} this
       */
      setCanvasData: function(a) {
        var l = this.canvasData, u = l.aspectRatio;
        return this.ready && !this.disabled && Zn(a) && (Se(a.left) && (l.left = a.left), Se(a.top) && (l.top = a.top), Se(a.width) ? (l.width = a.width, l.height = a.width / u) : Se(a.height) && (l.height = a.height, l.width = a.height * u), this.renderCanvas(!0)), this;
      },
      /**
       * Get the crop box position and size data.
       * @returns {Object} The result crop box data.
       */
      getCropBoxData: function() {
        var a = this.cropBoxData, l;
        return this.ready && this.cropped && (l = {
          left: a.left,
          top: a.top,
          width: a.width,
          height: a.height
        }), l || {};
      },
      /**
       * Set the crop box position and size with new data.
       * @param {Object} data - The new crop box data.
       * @returns {Cropper} this
       */
      setCropBoxData: function(a) {
        var l = this.cropBoxData, u = this.options.aspectRatio, b, m;
        return this.ready && this.cropped && !this.disabled && Zn(a) && (Se(a.left) && (l.left = a.left), Se(a.top) && (l.top = a.top), Se(a.width) && a.width !== l.width && (b = !0, l.width = a.width), Se(a.height) && a.height !== l.height && (m = !0, l.height = a.height), u && (b ? l.height = l.width / u : m && (l.width = l.height * u)), this.renderCropBox()), this;
      },
      /**
       * Get a canvas drawn the cropped image.
       * @param {Object} [options={}] - The config options.
       * @returns {HTMLCanvasElement} - The result canvas.
       */
      getCroppedCanvas: function() {
        var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!this.ready || !window.HTMLCanvasElement)
          return null;
        var l = this.canvasData, u = Qa(this.image, this.imageData, l, a);
        if (!this.cropped)
          return u;
        var b = this.getData(), m = b.x, w = b.y, A = b.width, X = b.height, F = u.width / Math.floor(l.naturalWidth);
        F !== 1 && (m *= F, w *= F, A *= F, X *= F);
        var R = A / X, I = Yt({
          aspectRatio: R,
          width: a.maxWidth || 1 / 0,
          height: a.maxHeight || 1 / 0
        }), G = Yt({
          aspectRatio: R,
          width: a.minWidth || 0,
          height: a.minHeight || 0
        }, "cover"), Ie = Yt({
          aspectRatio: R,
          width: a.width || (F !== 1 ? u.width : A),
          height: a.height || (F !== 1 ? u.height : X)
        }), Re = Ie.width, Ge = Ie.height;
        Re = Math.min(I.width, Math.max(G.width, Re)), Ge = Math.min(I.height, Math.max(G.height, Ge));
        var Be = document.createElement("canvas"), it = Be.getContext("2d");
        Be.width = Jn(Re), Be.height = Jn(Ge), it.fillStyle = a.fillColor || "transparent", it.fillRect(0, 0, Re, Ge);
        var ct = a.imageSmoothingEnabled, et = ct === void 0 ? !0 : ct, rn = a.imageSmoothingQuality;
        it.imageSmoothingEnabled = et, rn && (it.imageSmoothingQuality = rn);
        var It = u.width, K = u.height, Ue = m, at = w, Et, mn, Un, $n, An, an;
        Ue <= -A || Ue > It ? (Ue = 0, Et = 0, Un = 0, An = 0) : Ue <= 0 ? (Un = -Ue, Ue = 0, Et = Math.min(It, A + Ue), An = Et) : Ue <= It && (Un = 0, Et = Math.min(A, It - Ue), An = Et), Et <= 0 || at <= -X || at > K ? (at = 0, mn = 0, $n = 0, an = 0) : at <= 0 ? ($n = -at, at = 0, mn = Math.min(K, X + at), an = mn) : at <= K && ($n = 0, mn = Math.min(X, K - at), an = mn);
        var Ce = [Ue, at, Et, mn];
        if (An > 0 && an > 0) {
          var Fe = Re / A;
          Ce.push(Un * Fe, $n * Fe, An * Fe, an * Fe);
        }
        return it.drawImage.apply(it, [u].concat(U(Ce.map(function(Pr) {
          return Math.floor(Jn(Pr));
        })))), Be;
      },
      /**
       * Change the aspect ratio of the crop box.
       * @param {number} aspectRatio - The new aspect ratio.
       * @returns {Cropper} this
       */
      setAspectRatio: function(a) {
        var l = this.options;
        return !this.disabled && !pr(a) && (l.aspectRatio = Math.max(0, a) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
      },
      /**
       * Change the drag mode.
       * @param {string} mode - The new drag mode.
       * @returns {Cropper} this
       */
      setDragMode: function(a) {
        var l = this.options, u = this.dragBox, b = this.face;
        if (this.ready && !this.disabled) {
          var m = a === qt, w = l.movable && a === Pn;
          a = m || w ? a : Ar, l.dragMode = a, vr(u, kn, a), Dn(u, je, m), Dn(u, Vn, w), l.cropBoxMovable || (vr(b, kn, a), Dn(b, je, m), Dn(b, Vn, w));
        }
        return this;
      }
    }, qi = D.Cropper, _r = /* @__PURE__ */ function() {
      function g(a) {
        var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (W(this, g), !a || !Gt.test(a.tagName))
          throw new Error("The first argument is required and must be an <img> or <canvas> element.");
        this.element = a, this.options = Ye({}, Mr, Zn(l) && l), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
      }
      return T(g, [{
        key: "init",
        value: function() {
          var l = this.element, u = l.tagName.toLowerCase(), b;
          if (!l[oe]) {
            if (l[oe] = this, u === "img") {
              if (this.isImg = !0, b = l.getAttribute("src") || "", this.originalUrl = b, !b)
                return;
              b = l.src;
            } else
              u === "canvas" && window.HTMLCanvasElement && (b = l.toDataURL());
            this.load(b);
          }
        }
      }, {
        key: "load",
        value: function(l) {
          var u = this;
          if (l) {
            this.url = l, this.imageData = {};
            var b = this.element, m = this.options;
            if (!m.rotatable && !m.scalable && (m.checkOrientation = !1), !m.checkOrientation || !window.ArrayBuffer) {
              this.clone();
              return;
            }
            if (kt.test(l)) {
              St.test(l) ? this.read($i(l)) : this.clone();
              return;
            }
            var w = new XMLHttpRequest(), A = this.clone.bind(this);
            this.reloading = !0, this.xhr = w, w.onabort = A, w.onerror = A, w.ontimeout = A, w.onprogress = function() {
              w.getResponseHeader("content-type") !== ve && w.abort();
            }, w.onload = function() {
              u.read(w.response);
            }, w.onloadend = function() {
              u.reloading = !1, u.xhr = null;
            }, m.checkCrossOrigin && Pi(l) && b.crossOrigin && (l = Ni(l)), w.open("GET", l, !0), w.responseType = "arraybuffer", w.withCredentials = b.crossOrigin === "use-credentials", w.send();
          }
        }
      }, {
        key: "read",
        value: function(l) {
          var u = this.options, b = this.imageData, m = to(l), w = 0, A = 1, X = 1;
          if (m > 1) {
            this.url = eo(l, ve);
            var F = no(m);
            w = F.rotate, A = F.scaleX, X = F.scaleY;
          }
          u.rotatable && (b.rotate = w), u.scalable && (b.scaleX = A, b.scaleY = X), this.clone();
        }
      }, {
        key: "clone",
        value: function() {
          var l = this.element, u = this.url, b = l.crossOrigin, m = u;
          this.options.checkCrossOrigin && Pi(u) && (b || (b = "anonymous"), m = Ni(u)), this.crossOrigin = b, this.crossOriginUrl = m;
          var w = document.createElement("img");
          b && (w.crossOrigin = b), w.src = m || u, w.alt = l.alt || "The image to crop", this.image = w, w.onload = this.start.bind(this), w.onerror = this.stop.bind(this), lt(w, xn), l.parentNode.insertBefore(w, l.nextSibling);
        }
      }, {
        key: "start",
        value: function() {
          var l = this, u = this.image;
          u.onload = null, u.onerror = null, this.sizing = !0;
          var b = D.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(D.navigator.userAgent), m = function(F, R) {
            Ye(l.imageData, {
              naturalWidth: F,
              naturalHeight: R,
              aspectRatio: F / R
            }), l.initialImageData = Ye({}, l.imageData), l.sizing = !1, l.sized = !0, l.build();
          };
          if (u.naturalWidth && !b) {
            m(u.naturalWidth, u.naturalHeight);
            return;
          }
          var w = document.createElement("img"), A = document.body || document.documentElement;
          this.sizingImage = w, w.onload = function() {
            m(w.width, w.height), b || A.removeChild(w);
          }, w.src = u.src, b || (w.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", A.appendChild(w));
        }
      }, {
        key: "stop",
        value: function() {
          var l = this.image;
          l.onload = null, l.onerror = null, l.parentNode.removeChild(l), this.image = null;
        }
      }, {
        key: "build",
        value: function() {
          if (!(!this.sized || this.ready)) {
            var l = this.element, u = this.options, b = this.image, m = l.parentNode, w = document.createElement("div");
            w.innerHTML = ri;
            var A = w.querySelector(".".concat(oe, "-container")), X = A.querySelector(".".concat(oe, "-canvas")), F = A.querySelector(".".concat(oe, "-drag-box")), R = A.querySelector(".".concat(oe, "-crop-box")), I = R.querySelector(".".concat(oe, "-face"));
            this.container = m, this.cropper = A, this.canvas = X, this.dragBox = F, this.cropBox = R, this.viewBox = A.querySelector(".".concat(oe, "-view-box")), this.face = I, X.appendChild(b), lt(l, xe), m.insertBefore(A, l.nextSibling), nn(b, xn), this.initPreview(), this.bind(), u.initialAspectRatio = Math.max(0, u.initialAspectRatio) || NaN, u.aspectRatio = Math.max(0, u.aspectRatio) || NaN, u.viewMode = Math.max(0, Math.min(3, Math.round(u.viewMode))) || 0, lt(R, xe), u.guides || lt(R.getElementsByClassName("".concat(oe, "-dashed")), xe), u.center || lt(R.getElementsByClassName("".concat(oe, "-center")), xe), u.background && lt(A, "".concat(oe, "-bg")), u.highlight || lt(I, Mn), u.cropBoxMovable && (lt(I, Vn), vr(I, kn, ee)), u.cropBoxResizable || (lt(R.getElementsByClassName("".concat(oe, "-line")), xe), lt(R.getElementsByClassName("".concat(oe, "-point")), xe)), this.render(), this.ready = !0, this.setDragMode(u.dragMode), u.autoCrop && this.crop(), this.setData(u.data), Ct(u.ready) && Ut(l, Rr, u.ready, {
              once: !0
            }), Qn(l, Rr);
          }
        }
      }, {
        key: "unbuild",
        value: function() {
          if (this.ready) {
            this.ready = !1, this.unbind(), this.resetPreview();
            var l = this.cropper.parentNode;
            l && l.removeChild(this.cropper), nn(this.element, xe);
          }
        }
      }, {
        key: "uncreate",
        value: function() {
          this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
        }
        /**
         * Get the no conflict cropper class.
         * @returns {Cropper} The cropper class.
         */
      }], [{
        key: "noConflict",
        value: function() {
          return window.Cropper = qi, g;
        }
        /**
         * Change the default options.
         * @param {Object} options - The new default options.
         */
      }, {
        key: "setDefaults",
        value: function(l) {
          Ye(Mr, Zn(l) && l);
        }
      }]), g;
    }();
    return Ye(_r.prototype, ro, zi, Wi, Hi, ci, io), _r;
  });
})(Zl);
var O_ = Zl.exports;
Object.defineProperty(Vl, "__esModule", {
  value: !0
});
var Tl = Tv, D_ = O_, A_ = T_(D_);
function T_(s) {
  return s && s.__esModule ? s : { default: s };
}
function R_(s, p) {
  var i = {};
  for (var h in s)
    p.indexOf(h) >= 0 || Object.prototype.hasOwnProperty.call(s, h) && (i[h] = s[h]);
  return i;
}
var I_ = typeof window > "u" ? [String, Array] : [String, Array, Element, NodeList], M_ = Vl.default = {
  render: function() {
    var p = this.crossorigin || void 0;
    return (0, Tl.h)("div", { style: this.containerStyle }, [(0, Tl.h)("img", {
      ref: "img",
      src: this.src,
      alt: this.alt || "image",
      style: [{ "max-width": "100%" }, this.imgStyle],
      crossorigin: p
    })]);
  },
  props: {
    containerStyle: Object,
    src: {
      type: String,
      default: ""
    },
    alt: String,
    imgStyle: Object,
    viewMode: Number,
    dragMode: String,
    initialAspectRatio: Number,
    aspectRatio: Number,
    data: Object,
    preview: I_,
    responsive: {
      type: Boolean,
      default: !0
    },
    restore: {
      type: Boolean,
      default: !0
    },
    checkCrossOrigin: {
      type: Boolean,
      default: !0
    },
    checkOrientation: {
      type: Boolean,
      default: !0
    },
    crossorigin: {
      type: String
    },
    modal: {
      type: Boolean,
      default: !0
    },
    guides: {
      type: Boolean,
      default: !0
    },
    center: {
      type: Boolean,
      default: !0
    },
    highlight: {
      type: Boolean,
      default: !0
    },
    background: {
      type: Boolean,
      default: !0
    },
    autoCrop: {
      type: Boolean,
      default: !0
    },
    autoCropArea: Number,
    movable: {
      type: Boolean,
      default: !0
    },
    rotatable: {
      type: Boolean,
      default: !0
    },
    scalable: {
      type: Boolean,
      default: !0
    },
    zoomable: {
      type: Boolean,
      default: !0
    },
    zoomOnTouch: {
      type: Boolean,
      default: !0
    },
    zoomOnWheel: {
      type: Boolean,
      default: !0
    },
    wheelZoomRatio: Number,
    cropBoxMovable: {
      type: Boolean,
      default: !0
    },
    cropBoxResizable: {
      type: Boolean,
      default: !0
    },
    toggleDragModeOnDblclick: {
      type: Boolean,
      default: !0
    },
    minCanvasWidth: Number,
    minCanvasHeight: Number,
    minCropBoxWidth: Number,
    minCropBoxHeight: Number,
    minContainerWidth: Number,
    minContainerHeight: Number,
    ready: Function,
    cropstart: Function,
    cropmove: Function,
    cropend: Function,
    crop: Function,
    zoom: Function
  },
  mounted: function() {
    var p = this.$options.props;
    p.containerStyle, p.src, p.alt, p.imgStyle;
    var i = R_(p, ["containerStyle", "src", "alt", "imgStyle"]), h = {};
    for (var C in i)
      this[C] !== void 0 && (h[C] = this[C]);
    this.cropper = new A_.default(this.$refs.img, h);
  },
  methods: {
    reset: function() {
      return this.cropper.reset();
    },
    clear: function() {
      return this.cropper.clear();
    },
    initCrop: function() {
      return this.cropper.crop();
    },
    replace: function(p) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this.cropper.replace(p, i);
    },
    enable: function() {
      return this.cropper.enable();
    },
    disable: function() {
      return this.cropper.disable();
    },
    destroy: function() {
      return this.cropper.destroy();
    },
    move: function(p, i) {
      return this.cropper.move(p, i);
    },
    moveTo: function(p) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p;
      return this.cropper.moveTo(p, i);
    },
    relativeZoom: function(p, i) {
      return this.cropper.zoom(p, i);
    },
    zoomTo: function(p, i) {
      return this.cropper.zoomTo(p, i);
    },
    rotate: function(p) {
      return this.cropper.rotate(p);
    },
    rotateTo: function(p) {
      return this.cropper.rotateTo(p);
    },
    scaleX: function(p) {
      return this.cropper.scaleX(p);
    },
    scaleY: function(p) {
      return this.cropper.scaleY(p);
    },
    scale: function(p) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p;
      return this.cropper.scale(p, i);
    },
    getData: function() {
      var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return this.cropper.getData(p);
    },
    setData: function(p) {
      return this.cropper.setData(p);
    },
    getContainerData: function() {
      return this.cropper.getContainerData();
    },
    getImageData: function() {
      return this.cropper.getImageData();
    },
    getCanvasData: function() {
      return this.cropper.getCanvasData();
    },
    setCanvasData: function(p) {
      return this.cropper.setCanvasData(p);
    },
    getCropBoxData: function() {
      return this.cropper.getCropBoxData();
    },
    setCropBoxData: function(p) {
      return this.cropper.setCropBoxData(p);
    },
    getCroppedCanvas: function() {
      var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.cropper.getCroppedCanvas(p);
    },
    setAspectRatio: function(p) {
      return this.cropper.setAspectRatio(p);
    },
    setDragMode: function(p) {
      return this.cropper.setDragMode(p);
    }
  }
};
const L_ = /* @__PURE__ */ j("div", { class: "flex-grow" }, null, -1), P_ = {
  __name: "CropModal",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = Tt(), i = s, h = we(), C = we(), W = At(() => ({
      height: "100%",
      minHeight: "60vh"
    }));
    function B() {
      h.value?.getCroppedCanvas().toBlob((U) => {
        U && (C.value = new File(
          [U],
          $(i.modal.payload.name, "-" + Date.now()),
          {
            type: i.modal.payload.mime
          }
        ), T(C.value));
      });
    }
    function T(U) {
      p.closeModals(), p.upload([U]);
    }
    function $(U, Y) {
      var q = U.lastIndexOf(".");
      return q == -1 ? U + Y : U.substring(0, q) + Y + U.substring(q);
    }
    return (U, Y) => {
      const q = $a("tooltip");
      return L(), Oe(Dr, { modal: s.modal }, {
        header: _e(() => [
          j("div", null, ie(U.__("Crop image")), 1),
          L_,
          wt(ue(Nt, {
            class: "text-green-500",
            type: "check",
            onClick: Te(B, ["prevent"])
          }, null, 512), [
            [q, U.__("Confirm crop")]
          ])
        ]),
        default: _e(() => [
          ue(Q(M_), {
            ref_key: "cropper",
            ref: h,
            containerStyle: W.value,
            src: s.modal.payload.url,
            alt: s.modal.payload.name
          }, null, 8, ["containerStyle", "src", "alt"])
        ]),
        _: 1
      }, 8, ["modal"]);
    };
  }
}, N_ = { class: "p-6" }, F_ = /* @__PURE__ */ j("div", { class: "flex-grow" }, null, -1), B_ = {
  __name: "BrowserSelectedModal",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = Tt(), i = s, { selection: h } = Hl(p);
    function C() {
      p.closeModal(i.modal.id);
    }
    function W() {
      p.clearSelection(), C();
    }
    function B() {
      p.confirmSelection(), C();
    }
    return Qr(
      () => p.selection,
      (T, $) => {
        Zr.isEmpty(T) && C();
      }
    ), (T, $) => {
      const U = $a("tooltip");
      return L(), Oe(Dr, {
        full: !0,
        modal: s.modal
      }, {
        header: _e(() => [
          j("div", null, ie(T.__("Selected Files")), 1),
          F_,
          wt(ue(Nt, {
            type: "x",
            onClick: Te(W, ["prevent"])
          }, null, 512), [
            [U, T.__("Clear selected files")]
          ]),
          Q(p).selecting ? wt((L(), Oe(Nt, {
            key: 0,
            class: "text-green-500",
            type: "check",
            onClick: Te(B, ["prevent"])
          }, null, 512)), [
            [U, T.__("Confirm selection")]
          ]) : pe("", !0)
        ]),
        default: _e(() => [
          j("div", N_, [
            ue(Fl, {
              name: "list",
              tag: "div",
              class: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            }, {
              default: _e(() => [
                (L(!0), V(Ke, null, hr(Q(h), (Y) => (L(), Oe(Kl, {
                  key: Y.id,
                  ref_for: !0,
                  ref: "file_" + Y.id,
                  file: Y,
                  "data-key": Y.id
                }, null, 8, ["file", "data-key"]))), 128))
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["modal"]);
    };
  }
}, U_ = {}, $_ = { class: "absolute inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg w-full h-full border-2 border-primary-500" }, z_ = /* @__PURE__ */ j("span", { class: "pointer-events-none" }, " Drop your files here ", -1);
function W_(s, p) {
  const i = Ft("Icon");
  return L(), V("div", $_, [
    ue(i, {
      type: "upload",
      class: "pointer-events-none text-primary-500 animate-bounce mr-4",
      width: "48",
      height: "48"
    }),
    z_
  ]);
}
const H_ = /* @__PURE__ */ ms(U_, [["render", W_]]);
async function q_(s) {
  const p = (Y) => Y.isDirectory, i = (Y) => Y.isFile, h = (Y, q = "") => new Promise((ae, H) => {
    i(Y) && Y.file(
      (d) => ae(new File([d], q + d.name, { type: d.type })),
      (d) => H(d)
    );
  }), C = (Y, q) => new Promise((ae, H) => {
    Y.readEntries(
      async (d) => {
        let E = [];
        for (const D of d) {
          const S = await B(D, q);
          S !== void 0 && (E = E.concat(S));
        }
        ae(E);
      },
      (d) => H(d)
    );
  }), W = async (Y, q) => {
    if (!p(Y))
      return [];
    const ae = Y.createReader(), H = q + Y.name + "/";
    let d = [], E = [];
    do
      E = await C(ae, H), d = d.concat(E);
    while (E.length > 0);
    return d;
  }, B = async (Y, q = "") => {
    if (Y) {
      if (Y.isFile)
        return [await h(Y, q)];
      if (Y.isDirectory)
        return await W(Y, q);
    }
  };
  let T = [];
  const $ = [], U = s.length;
  for (let Y = 0; Y < U; Y++)
    $.push(s[Y].webkitGetAsEntry());
  for (const Y of $) {
    const q = await B(Y);
    q !== void 0 && (T = T.concat(q));
  }
  return T;
}
function G_(s) {
  return {
    id: s.name,
    name: s.name,
    extension: s.type.split("/")[1],
    mime: s.type,
    path: s.name,
    type: s.type.split("/")[0],
    url: URL.createObjectURL(s),
    size: Number(s.size.toString()),
    lastModified: Number(new Date(s.lastModified).toString())
  };
}
const X_ = { class: "p-6 grid grid-cols-2 md:grid-cols-4 gap-4" }, Y_ = {
  class: "flex-grow flex justify-center items-center flex-col p-4",
  style: { height: "160px" }
}, j_ = { class: "mt-6 bg-gray-100 dark:bg-gray-700 shadow border-2 border-gray-100 dark:border-gray-700 rounded-lg h-6 w-[6rem]" }, K_ = { class: "w-full h-8 flex-shrink-0 text-center text-xs border-t border-gray-200 dark:border-gray-700 flex items-center justify-center" }, V_ = { class: "px-2 truncate" }, Z_ = /* @__PURE__ */ ni({
  __name: "QueueModal",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = Tt(), i = At(
      () => p.queue.map((h) => (h.entity = G_(h.file), h))
    );
    return (h, C) => {
      const W = Ft("Icon");
      return L(), Oe(Dr, {
        full: !0,
        disableClose: !0,
        modal: s.modal
      }, {
        header: _e(() => [
          j("div", null, ie(h.__("Queue")), 1)
        ]),
        default: _e(() => [
          j("div", X_, [
            (L(!0), V(Ke, null, hr(i.value, (B) => (L(), V("div", {
              key: B.id,
              ref_for: !0,
              ref: "card",
              class: "w-full h-full relative flex flex-col justify-center rounded-lg overflow-hidden cursor-pointer dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700"
            }, [
              j("div", Y_, [
                B.status === null ? (L(), Oe(W, {
                  key: 0,
                  class: "w-10 h-10 animate-bounce text-primary-500",
                  type: "upload",
                  solid: !0
                })) : B.status === !1 ? (L(), Oe(W, {
                  key: 1,
                  class: "w-10 h-10 text-red-500",
                  type: "exclamation-circle",
                  solid: !0
                })) : B.status === !0 ? (L(), Oe(W, {
                  key: 2,
                  class: "w-10 h-10 text-green-500",
                  type: "check-circle",
                  solid: !0
                })) : pe("", !0),
                j("div", j_, [
                  j("div", {
                    class: pn(["block w-full h-full rounded-lg", {
                      "bg-primary-500": B.status === null,
                      "bg-red-500": B.status === !1,
                      "bg-green-500": B.status === !0
                    }]),
                    style: Wv({
                      width: `${B.ratio}%`,
                      transition: "all .3s linear"
                    })
                  }, null, 6)
                ])
              ]),
              j("div", K_, [
                j("p", V_, ie(Q(ys)(B.entity?.name || "", 25)), 1)
              ])
            ], 512))), 128))
          ])
        ]),
        _: 1
      }, 8, ["modal"]);
    };
  }
}), J_ = {
  key: 0,
  class: "absolute rounded-lg inset-0 bg-white/50 dark:bg-gray-800/50 flex items-center justify-center flex-grow z-50"
}, Q_ = { class: "flex-grow py-4 px-6 space-y-4" }, ey = /* @__PURE__ */ ni({
  __name: "Browser",
  props: {
    selecting: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !0 }
  },
  emits: ["confirmSelection"],
  setup(s, { emit: p }) {
    const i = Tt(), { selectionConfirms: h } = Hl(i), C = s, W = p;
    Nl(() => {
      i.init(), i.selecting = C.selecting, i.multiple = C.multiple;
    }), jl("Escape", (q) => {
      i.modals.length > 0 && !i.isProcessing && (q.preventDefault(), q.stopPropagation(), i.modals.pop());
    }), Qr(h, () => {
      W("confirmSelection", i.selection), i.clearSelection(), i.closeModals();
    });
    const B = we(!1), T = we(), $ = async (q) => {
      try {
        T.value = q.dataTransfer ? await q_(q.dataTransfer?.items) : [];
      } catch {
        B.value = !1;
      }
    }, U = (q) => T.value = q.target.files ?? [], Y = () => {
      B.value = !1, T.value?.length && (T.value instanceof FileList && i.upload(Array.from(T.value)), T.value instanceof Array && i.upload(T.value));
    };
    return Qr(T, () => Y()), (q, ae) => {
      const H = Ft("Loader");
      return L(), V("div", {
        class: pn(["relative h-full nova-file-manager", {
          "pointer-events-none": Q(i).isProcessing
        }]),
        onDragover: ae[0] || (ae[0] = Te((d) => B.value = !0, ["prevent", "stop"])),
        onDragleave: ae[1] || (ae[1] = Te((d) => B.value = !1, ["prevent", "stop"])),
        onDrop: Te($, ["prevent", "stop"])
      }, [
        ue(Ba, null, {
          default: _e(() => [
            Q(i).loading && Q(i).modals.length === 0 ? (L(), V("div", J_, [
              ue(H)
            ])) : pe("", !0)
          ]),
          _: 1
        }),
        ue(Ba, null, {
          default: _e(() => [
            B.value ? (L(), Oe(H_, { key: 0 })) : pe("", !0)
          ]),
          _: 1
        }),
        ue($m, { onChangeFile: U }),
        j("div", Q_, [
          Q(i).data?.breadcrumbs?.length > 0 ? (L(), Oe(s_, { key: 0 })) : pe("", !0),
          ue(f0),
          Q(i).data?.pagination?.last_page > 1 ? (L(), Oe(Gm, { key: 1 })) : pe("", !0)
        ]),
        ue(Fl, { name: "list" }, {
          default: _e(() => [
            (L(!0), V(Ke, null, hr(Q(i).modals, (d) => (L(), V(Ke, {
              key: d.id
            }, [
              d.name === Q(nt).CREATE_FOLDER ? (L(), Oe(d_, {
                key: 0,
                modal: d
              }, null, 8, ["modal"])) : d.name === Q(nt).DETAIL ? (L(), Oe(J0, {
                key: 1,
                modal: d
              }, null, 8, ["modal"])) : d.name === Q(nt).RENAME ? (L(), Oe(w_, {
                key: 2,
                modal: d
              }, null, 8, ["modal"])) : d.name === Q(nt).CROP ? (L(), Oe(P_, {
                key: 3,
                modal: d
              }, null, 8, ["modal"])) : d.name === Q(nt).DELETE ? (L(), Oe(E_, {
                key: 4,
                modal: d
              }, null, 8, ["modal"])) : d.name === Q(nt).SELECTED ? (L(), Oe(B_, {
                key: 5,
                modal: d
              }, null, 8, ["modal"])) : d.name === Q(nt).QUEUE ? (L(), Oe(Z_, {
                key: 6,
                modal: d
              }, null, 8, ["modal"])) : pe("", !0)
            ], 64))), 128))
          ]),
          _: 1
        })
      ], 34);
    };
  }
}), ty = { class: "nova-file-manager" }, ny = {
  key: 0,
  class: "fixed bg-gray-800/10 backdrop-blur inset-0 z-50 p-2 overflow h-full max-h-full flex justify-center"
}, ry = { class: "relative w-full bg-white dark:bg-gray-800 rounded-lg shadow h-full max-w-5xl max-h-full" }, oy = {
  __name: "BrowserModal",
  props: {
    state: {
      type: Boolean,
      required: !0
    },
    selecting: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:state", "confirmSelection"],
  setup(s, { emit: p }) {
    const i = Tt(), h = p;
    jl("Escape", (B) => {
      i.modals.length || (B.preventDefault(), B.stopPropagation(), W());
    });
    function C(B) {
      W(), h("confirmSelection", B);
    }
    function W() {
      h("update:state", !1);
    }
    return (B, T) => (L(), V("div", ty, [
      ue(Ba, null, {
        default: _e(() => [
          s.state ? (L(), V("div", ny, [
            j("div", {
              class: "absolute inset-0",
              onClick: Te(W, ["prevent"])
            }),
            j("div", ry, [
              ue(ey, {
                selecting: s.selecting,
                multiple: s.multiple,
                onConfirmSelection: C
              }, null, 8, ["selecting", "multiple"])
            ])
          ])) : pe("", !0)
        ]),
        _: 1
      })
    ]));
  }
};
export {
  ey as Browser,
  oy as BrowserModal,
  ay as createPinia
};
