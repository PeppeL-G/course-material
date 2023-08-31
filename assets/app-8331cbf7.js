var _a;
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/course-material/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
function makeMap(str, expectsLowerCase) {
  const map2 = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map2[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map2[val.toLowerCase()] : (val) => !!map2[val];
}
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
const isArray$1 = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction(
  (str) => str.charAt(0).toUpperCase() + str.slice(1)
);
const toHandlerKey = cacheStringFunction(
  (str) => str ? `on${capitalize(str)}` : ``
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
  if (isArray$1(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = new RegExp("\\/\\*.*?\\*\\/", "gs");
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray$1(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray$1(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray$1(val) && !isPlainObject$1(val)) {
    return String(val);
  }
  return val;
};
function warn$2(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else {
      warn$2(`cannot run an inactive effect scope.`);
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this._active = false;
    }
  }
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else {
    warn$2(
      `onScopeDispose() is called when there is no active effect scope to be associated with.`
    );
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect2) {
  const { deps } = effect2;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect2);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    const eventInfo = { effect: activeEffect, target, type, key };
    trackEffects(dep, eventInfo);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (activeEffect.onTrack) {
      activeEffect.onTrack(
        extend(
          {
            effect: activeEffect
          },
          debuggerEventExtraInfo
        )
      );
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray$1(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray$1(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray$1(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const eventInfo = { target, type, key, newValue, oldValue, oldTarget };
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0], eventInfo);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects), eventInfo);
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray$1(dep) ? dep : [...dep];
  for (const effect2 of effects) {
    if (effect2.computed) {
      triggerEffect(effect2, debuggerEventExtraInfo);
    }
  }
  for (const effect2 of effects) {
    if (!effect2.computed) {
      triggerEffect(effect2, debuggerEventExtraInfo);
    }
  }
}
function triggerEffect(effect2, debuggerEventExtraInfo) {
  if (effect2 !== activeEffect || effect2.allowRecurse) {
    if (effect2.onTrigger) {
      effect2.onTrigger(extend({ effect: effect2 }, debuggerEventExtraInfo));
    }
    if (effect2.scheduler) {
      effect2.scheduler();
    } else {
      effect2.run();
    }
  }
}
function getDepFromReactive(object, key) {
  var _a2;
  return (_a2 = targetMap.get(object)) == null ? void 0 : _a2.get(key);
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
const get$1 = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty(key) {
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray$1(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set$1 = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow) {
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray$1(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray$1(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function has$1(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray$1(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get: get$1,
  set: set$1,
  deleteProperty,
  has: has$1,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    {
      warn$2(
        `Set operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  },
  deleteProperty(target, key) {
    {
      warn$2(
        `Delete operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend(
  {},
  mutableHandlers,
  {
    get: shallowGet,
    set: shallowSet
  }
);
const shallowReadonlyHandlers = /* @__PURE__ */ extend(
  {},
  readonlyHandlers,
  {
    get: shallowReadonlyGet
  }
);
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = isMap(target) ? new Map(target) : new Set(target);
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(
        `${capitalize(type)} operation ${key}failed: target is readonly.`,
        toRaw(this)
      );
    }
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get(this, key);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(
      method,
      false,
      false
    );
    readonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      false
    );
    shallowInstrumentations2[method] = createIterableMethod(
      method,
      false,
      true
    );
    shallowReadonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      true
    );
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [
  mutableInstrumentations,
  readonlyInstrumentations,
  shallowInstrumentations,
  shallowReadonlyInstrumentations
] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(
      `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()), {
        target: ref2,
        type: "get",
        key: "value"
      });
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  if (dep) {
    {
      triggerEffects(dep, {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
      });
    }
  }
}
function isRef(r2) {
  return !!(r2 && r2.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, newVal);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
  constructor(factory) {
    this.dep = void 0;
    this.__v_isRef = true;
    const { get: get2, set: set2 } = factory(
      () => trackRefValue(this),
      () => triggerRefValue(this)
    );
    this._get = get2;
    this._set = set2;
  }
  get value() {
    return this._get();
  }
  set value(newVal) {
    this._set(newVal);
  }
}
function customRef(factory) {
  return new CustomRefImpl(factory);
}
function toRefs(object) {
  if (!isProxy(object)) {
    console.warn(`toRefs() expects a reactive object but received a plain one.`);
  }
  const ret = isArray$1(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = propertyToRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
}
class GetterRefImpl {
  constructor(_getter) {
    this._getter = _getter;
    this.__v_isRef = true;
    this.__v_isReadonly = true;
  }
  get value() {
    return this._getter();
  }
}
function toRef$1(source, key, defaultValue) {
  if (isRef(source)) {
    return source;
  } else if (isFunction(source)) {
    return new GetterRefImpl(source);
  } else if (isObject(source) && arguments.length > 1) {
    return propertyToRef(source, key, defaultValue);
  } else {
    return ref(source);
  }
}
function propertyToRef(source, key, defaultValue) {
  const val = source[key];
  return isRef(val) ? val : new ObjectRefImpl(
    source,
    key,
    defaultValue
  );
}
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this["__v_isReadonly"] = false;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = () => {
      console.warn("Write operation failed: computed value is readonly");
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  if (debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}
function pushWarningContext(vnode) {
}
function warn$1(msg, ...args) {
  return;
}
const ErrorTypeStrings = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = ErrorTypeStrings[type];
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(
        appErrorHandler,
        null,
        10,
        [err, exposedInstance, errorInfo]
      );
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue$1 = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue$1.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue$1[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if (!queue$1.length || !queue$1.includes(
    job,
    isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
  )) {
    if (job.id == null) {
      queue$1.push(job);
    } else {
      queue$1.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i = queue$1.indexOf(job);
  if (i > flushIndex) {
    queue$1.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray$1(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(
      cb,
      cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
    )) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(seen2, i = isFlushing ? flushIndex + 1 : 0) {
  {
    seen2 = seen2 || /* @__PURE__ */ new Map();
  }
  for (; i < queue$1.length; i++) {
    const cb = queue$1[i];
    if (cb && cb.pre) {
      if (checkRecursiveUpdates(seen2, cb)) {
        continue;
      }
      queue$1.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen2) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    {
      seen2 = seen2 || /* @__PURE__ */ new Map();
    }
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (checkRecursiveUpdates(seen2, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff = getId(a) - getId(b);
  if (diff === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff;
};
function flushJobs(seen2) {
  isFlushPending = false;
  isFlushing = true;
  {
    seen2 = seen2 || /* @__PURE__ */ new Map();
  }
  queue$1.sort(comparator);
  const check = (job) => checkRecursiveUpdates(seen2, job);
  try {
    for (flushIndex = 0; flushIndex < queue$1.length; flushIndex++) {
      const job = queue$1[flushIndex];
      if (job && job.active !== false) {
        if (check(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue$1.length = 0;
    flushPostFlushCbs(seen2);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue$1.length || pendingPostFlushCbs.length) {
      flushJobs(seen2);
    }
  }
}
function checkRecursiveUpdates(seen2, fn) {
  if (!seen2.has(fn)) {
    seen2.set(fn, 1);
  } else {
    const count = seen2.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      instance && getComponentName(instance.type);
      return true;
    } else {
      seen2.set(fn, count + 1);
    }
  }
}
let isHmrUpdating = false;
const hmrDirtyComponents = /* @__PURE__ */ new Set();
{
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
const map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
  const id = instance.type.__hmrId;
  let record = map.get(id);
  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }
  record.instances.add(instance);
}
function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
  const record = map.get(id);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}
function reload(id, newComp) {
  const record = map.get(id);
  if (!record)
    return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];
  for (const instance of instances) {
    const oldComp = normalizeClassComponent(instance.type);
    if (!hmrDirtyComponents.has(oldComp)) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.add(oldComp);
    }
    instance.appContext.propsCache.delete(instance.type);
    instance.appContext.emitsCache.delete(instance.type);
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      hmrDirtyComponents.add(oldComp);
      instance.ceReload(newComp.styles);
      hmrDirtyComponents.delete(oldComp);
    } else if (instance.parent) {
      queueJob(instance.parent.update);
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn(
        "[HMR] Root or manually mounted instance modified. Full reload required."
      );
    }
  }
  queuePostFlushCb(() => {
    for (const instance of instances) {
      hmrDirtyComponents.delete(
        normalizeClassComponent(instance.type)
      );
    }
  });
}
function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn(
        `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
      );
    }
  };
}
let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
  if (devtools) {
    devtools.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({ event, args });
  }
}
function setDevtoolsHook(hook, target) {
  var _a2, _b;
  devtools = hook;
  if (devtools) {
    devtools.enabled = true;
    buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !((_b = (_a2 = window.navigator) == null ? void 0 : _a2.userAgent) == null ? void 0 : _b.includes("jsdom"))
  ) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook(newHook, target);
    });
    setTimeout(() => {
      if (!devtools) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version2) {
  emit$1("app:init", app, version2, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
function devtoolsUnmountApp(app) {
  emit$1("app:unmount", app);
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:added"
  /* COMPONENT_ADDED */
);
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:updated"
  /* COMPONENT_UPDATED */
);
const _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:removed"
  /* COMPONENT_REMOVED */
);
const devtoolsComponentRemoved = (component) => {
  if (devtools && typeof devtools.cleanupBuffer === "function" && // remove the component if it wasn't buffered
  !devtools.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit$1(
      hook,
      component.appContext.app,
      component.uid,
      component.parent ? component.parent.uid : void 0,
      component
    );
  };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:start"
  /* PERFORMANCE_START */
);
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:end"
  /* PERFORMANCE_END */
);
function createDevtoolsPerformanceHook(hook) {
  return (component, type, time) => {
    emit$1(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit$1(
    "component:emit",
    component.appContext.app,
    component,
    event,
    params
  );
}
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  {
    const {
      emitsOptions,
      propsOptions: [propsOptions]
    } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
          warn$1(
            `Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`
          );
        }
      } else {
        const validator = emitsOptions[event];
        if (isFunction(validator)) {
          validator(...rawArgs);
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => isString(a) ? a.trim() : a);
    }
    if (number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  {
    devtoolsComponentEmit(instance, event, args);
  }
  {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn$1(
        `Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(
          instance,
          instance.type
        )} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`
      );
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray$1(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function pushScopeId(id) {
  currentScopeId = id;
}
function popScopeId() {
  currentScopeId = null;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    {
      devtoolsComponentUpdated(ctx);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
let accessedAttrs = false;
function markAttrsAccessed() {
  accessedAttrs = true;
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    props,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render,
    renderCache,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  {
    accessedAttrs = false;
  }
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(
        render.call(
          proxyToUse,
          proxyToUse,
          renderCache,
          props,
          setupState,
          data,
          ctx
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (attrs === props) {
        markAttrsAccessed();
      }
      result = normalizeVNode(
        render2.length > 1 ? render2(
          props,
          true ? {
            get attrs() {
              markAttrsAccessed();
              return attrs;
            },
            slots,
            emit: emit2
          } : { attrs, slots, emit: emit2 }
        ) : render2(
          props,
          null
          /* we know it doesn't need it */
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  let setRoot = void 0;
  if (result.patchFlag > 0 && result.patchFlag & 2048) {
    [root, setRoot] = getChildRoot(result);
  }
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root = cloneVNode(root, fallthroughAttrs);
      } else if (!accessedAttrs && root.type !== Comment) {
        const allAttrs = Object.keys(attrs);
        const eventAttrs = [];
        for (let i = 0, l = allAttrs.length; i < l; i++) {
          const key = allAttrs[i];
          if (isOn(key)) {
            if (!isModelListener(key)) {
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          }
        }
      }
    }
  }
  if (vnode.dirs) {
    if (!isElementRoot(root))
      ;
    root = cloneVNode(root);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    if (!isElementRoot(root))
      ;
    root.transition = vnode.transition;
  }
  if (setRoot) {
    setRoot(root);
  } else {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getChildRoot = (vnode) => {
  const rawChildren = vnode.children;
  const dynamicChildren = vnode.dynamicChildren;
  const childRoot = filterSingleRoot(rawChildren);
  if (!childRoot) {
    return [vnode, void 0];
  }
  const index2 = rawChildren.indexOf(childRoot);
  const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
  const setRoot = (updatedRoot) => {
    rawChildren[index2] = updatedRoot;
    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
      }
    }
  };
  return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children) {
  let singleRoot;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isVNode(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
const isElementRoot = (vnode) => {
  return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if ((prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  }
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray$1(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  var _a2;
  const instance = getCurrentScope() === ((_a2 = currentInstance) == null ? void 0 : _a2.scope) ? currentInstance : null;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray$1(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else
        ;
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(
          source,
          instance,
          3,
          [onCleanup]
        );
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else {
      return NOOP;
    }
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some(
        (v, i) => hasChanged(v, oldValue[i])
      ) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect = new ReactiveEffect(getter, scheduler);
  {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(
      effect.run.bind(effect),
      instance && instance.suspense
    );
  } else {
    effect.run();
  }
  const unwatch = () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
  if (ssrCleanup)
    ssrCleanup.push(unwatch);
  return unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen2) {
  if (!isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen2 = seen2 || /* @__PURE__ */ new Set();
  if (seen2.has(value)) {
    return value;
  }
  seen2.add(value);
  if (isRef(value)) {
    traverse(value.value, seen2);
  } else if (isArray$1(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen2);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen2);
    });
  } else if (isPlainObject$1(value)) {
    for (const key in value) {
      traverse(value[key], seen2);
    }
  }
  return value;
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name))
    ;
}
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    return vnode;
  }
  const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (dir) {
      if (isFunction(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      let child = children[0];
      if (children.length > 1) {
        let hasFound = false;
        for (const c of children) {
          if (c.type !== Comment) {
            if (hasFound) {
              break;
            }
            child = c;
            hasFound = true;
            break;
          }
        }
      }
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state,
        instance
      );
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = false;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        if (prevTransitionKey === void 0) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state,
          instance
        );
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (instance.update.active !== false) {
              instance.update();
            }
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(
              state,
              oldInnerChild
            );
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el._leaveCb = () => {
              earlyRemove();
              el._leaveCb = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(
      hook,
      instance,
      9,
      args
    );
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray$1(hook)) {
      if (hook.every((hook2) => hook2.length <= 1))
        done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el._leaveCb) {
        el._leaveCb(
          true
          /* cancelled */
        );
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        leavingVNode.el._leaveCb();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el._enterCb = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el._enterCb = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el._enterCb) {
        el._enterCb(
          true
          /* cancelled */
        );
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el._leaveCb = (cancelled) => {
        if (called)
          return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el._leaveCb = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state, instance);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(
        getTransitionRawChildren(child.children, keepComment, key)
      );
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
function defineComponent(options, extraOptions) {
  return isFunction(options) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
function defineAsyncComponent(source) {
  if (isFunction(source)) {
    source = { loader: source };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay: delay2 = 200,
    timeout,
    // undefined = never times out
    suspensible = true,
    onError: userOnError
  } = source;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve2, reject) => {
          const userRetry = () => resolve2(retry());
          const userFail = () => reject(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      if (comp && !isObject(comp) && !isFunction(comp)) {
        throw new Error(`Invalid async component load result: ${comp}`);
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance = currentInstance;
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      const onError = (err) => {
        pendingRequest = null;
        handleError(
          err,
          instance,
          13,
          !errorComponent
          /* do not throw in dev if user provided error component */
        );
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance);
        }).catch((err) => {
          onError(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      const loaded = ref(false);
      const error = ref();
      const delayed = ref(!!delay2);
      if (delay2) {
        setTimeout(() => {
          delayed.value = false;
        }, delay2);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            const err = new Error(
              `Async component timed out after ${timeout}ms.`
            );
            onError(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          queueJob(instance.parent.update);
        }
      }).catch((err) => {
        onError(err);
        error.value = err;
      });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}
function createInnerComp(comp, parent) {
  const { ref: ref2, props, children, ce } = parent.vnode;
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref2;
  vnode.ce = ce;
  delete parent.vnode.ce;
  return vnode;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else {
    toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ""));
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook(
  "rtg"
);
const onRenderTracked = createHook(
  "rtc"
);
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
  if (isString(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(
        Component,
        false
        /* do not include inferred name to avoid breaking existing code */
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    if (warnMissing && !res) {
      const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
      warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
    }
    return res;
  } else {
    warn$1(
      `resolve${capitalize(type.slice(0, -1))} can only be used in render() or setup().`
    );
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index2) {
  let ret;
  const cached = cache && cache[index2];
  if (isArray$1(source) || isString(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i) => renderItem(item, i, void 0, cached && cached[i])
      );
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index2] = ret;
  }
  return ret;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    if (name !== "default")
      props.name = name;
    return createVNode("slot", props, fallback && fallback());
  }
  let slot = slots[name];
  if (slot && slot.length > 1) {
    slot = () => [];
  }
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(
    Fragment,
    {
      key: props.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      validSlotContent && validSlotContent.key || `_${name}`
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => shallowReadonly(i.props),
    $attrs: (i) => shallowReadonly(i.attrs),
    $slots: (i) => shallowReadonly(i.slots),
    $refs: (i) => shallowReadonly(i.refs),
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => instanceWatch.bind(i)
  })
);
const isReservedPrefix = (key) => key === "_" || key === "$";
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if (key === "__isVue") {
      return true;
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
      ) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
        markAttrsAccessed();
      } else if (key === "$slots") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else if (currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn$1(
          `Property ${JSON.stringify(
            key
          )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
        );
      } else if (instance === currentRenderingInstance) {
        warn$1(
          `Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`
        );
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
      return false;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, propsOptions }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
{
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    return Reflect.ownKeys(target);
  };
}
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const {
    ctx,
    propsOptions: [propsOptions]
  } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys(toRaw(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn$1(
          `setup() return property ${JSON.stringify(
            key
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    }
  });
}
function normalizePropsOrEmits(props) {
  return isArray$1(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
function createDuplicateChecker() {
  const cache = /* @__PURE__ */ Object.create(null);
  return (type, key) => {
    if (cache[key]) {
      warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = createDuplicateChecker();
  {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props", key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        }
        {
          checkDuplicateProperties("Methods", key);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (isPromise(data))
      ;
    if (!isObject(data))
      ;
    else {
      instance.data = reactive(data);
      {
        for (const key in data) {
          checkDuplicateProperties("Data", key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : () => {
      };
      const c = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      {
        checkDuplicateProperties("Computed", key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray$1(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$1(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray$1(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
          /* treat default function as factory */
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key] = injected;
    }
    {
      checkDuplicateProperties("Inject", key);
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(
    isArray$1(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject(raw)) {
    if (isArray$1(raw)) {
      raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      } else {
        warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else
    ;
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions$1(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions$1(resolved, base, optionMergeStrategies);
  }
  if (isObject(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions$1(to, m, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose")
      ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(
      isFunction(to) ? to.call(this, this) : to,
      isFunction(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$1(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray$1(to) && isArray$1(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    {
      Object.defineProperty(context.config, "unwrapInjectedRef", {
        get() {
          return true;
        },
        set() {
        }
      });
    }
    const installedPlugins = /* @__PURE__ */ new Set();
    let isMounted = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else
          ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else {
            warn$1(
              "Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : "")
            );
          }
        }
        return app;
      },
      component(name, component) {
        {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if (context.components[name])
          ;
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if (context.directives[name])
          ;
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          if (rootContainer.__vue_app__)
            ;
          const vnode = createVNode(
            rootComponent,
            rootProps
          );
          vnode.appContext = context;
          {
            context.reload = () => {
              render(cloneVNode(vnode), rootContainer, isSVG);
            };
          }
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        if (isMounted) {
          render(null, app._container);
          {
            app._instance = null;
            devtoolsUnmountApp(app);
          }
          delete app._container.__vue_app__;
        }
      },
      provide(key, value) {
        if (key in context.provides)
          ;
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = null;
        }
      }
    };
    return app;
  };
}
let currentApp = null;
function provide(key, value) {
  if (!currentInstance)
    ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else
      ;
  }
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId)
      return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
              /* isAbsent */
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
              /* isAbsent */
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray$1(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (!isString(raw[i])) {
        warn$1(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$1(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[
            0
            /* shouldCast */
          ] = booleanIndex > -1;
          prop[
            1
            /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
  return match ? match[2] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray$1(expectedTypes)) {
    return expectedTypes.findIndex((t) => isSameType(t, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = toRaw(props);
  const options = instance.propsOptions[0];
  for (const key in options) {
    let opt = options[key];
    if (opt == null)
      continue;
    validateProp(
      key,
      resolvedValues[key],
      opt,
      !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key))
    );
  }
}
function validateProp(name, value, prop, isAbsent) {
  const { type, required, validator, skipCheck } = prop;
  if (required && isAbsent) {
    return;
  }
  if (value == null && !required) {
    return;
  }
  if (type != null && type !== true && !skipCheck) {
    let isValid = false;
    const types = isArray$1(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value))
    ;
}
const isSimpleType = /* @__PURE__ */ makeMap(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (isSimpleType(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();
    if (!valid && t === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray$1(value);
  } else if (expectedType === "null") {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray$1(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (currentInstance) {
      warn$1(
        `Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
      );
    }
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot$1(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  if (!isKeepAlive(instance.vnode) && true)
    ;
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance.slots = toRaw(children);
      def(children, "_", type);
    } else {
      normalizeObjectSlots(
        children,
        instance.slots = {}
      );
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (isHmrUpdating) {
        extend(slots, children);
        trigger(instance, "set", "$slots");
      } else if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray$1(rawRef)) {
    rawRef.forEach(
      (r2, i) => setRef(
        r2,
        oldRawRef && (isArray$1(oldRawRef) ? oldRawRef[i] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  if (!owner) {
    return;
  }
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? hasOwn(setupState, ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray$1(existing) && remove(existing, refValue);
          } else {
            if (!isArray$1(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (hasOwn(setupState, ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (hasOwn(setupState, ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          ref2.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else
          ;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
let hasMismatch = false;
const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
const isComment = (node) => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
  const {
    mt: mountComponent,
    p: patch,
    o: {
      patchProp: patchProp2,
      createText,
      nextSibling,
      parentNode,
      remove: remove2,
      insert,
      createComment
    }
  } = rendererInternals;
  const hydrate = (vnode, container) => {
    if (!container.hasChildNodes()) {
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }
    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;
    if (hasMismatch && true) {
      console.error(`Hydration completed but contains mismatches.`);
    }
  };
  const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
    const isFragmentStart = isComment(node) && node.data === "[";
    const onMismatch = () => handleMismatch(
      node,
      vnode,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      isFragmentStart
    );
    const { type, ref: ref2, shapeFlag, patchFlag } = vnode;
    let domType = node.nodeType;
    vnode.el = node;
    if (patchFlag === -2) {
      optimized = false;
      vnode.dynamicChildren = null;
    }
    let nextNode = null;
    switch (type) {
      case Text:
        if (domType !== 3) {
          if (vnode.children === "") {
            insert(vnode.el = createText(""), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
            warn$1(
              `Hydration text mismatch:
- Client: ${JSON.stringify(node.data)}
- Server: ${JSON.stringify(vnode.children)}`
            );
            node.data = vnode.children;
          }
          nextNode = nextSibling(node);
        }
        break;
      case Comment:
        if (domType !== 8 || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }
        break;
      case Static:
        if (isFragmentStart) {
          node = nextSibling(node);
          domType = node.nodeType;
        }
        if (domType === 1 || domType === 3) {
          nextNode = node;
          const needToAdoptContent = !vnode.children.length;
          for (let i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent)
              vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }
            nextNode = nextSibling(nextNode);
          }
          return isFragmentStart ? nextSibling(nextNode) : nextNode;
        } else {
          onMismatch();
        }
        break;
      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
        }
        break;
      default:
        if (shapeFlag & 1) {
          if (domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized
            );
          }
        } else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          mountComponent(
            vnode,
            container,
            null,
            parentComponent,
            parentSuspense,
            isSVGContainer(container),
            optimized
          );
          nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
          if (nextNode && isComment(nextNode) && nextNode.data === "teleport end") {
            nextNode = nextSibling(nextNode);
          }
          if (isAsyncWrapper(vnode)) {
            let subTree;
            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
            }
            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64) {
          if (domType !== 8) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized,
              rendererInternals,
              hydrateChildren
            );
          }
        } else if (shapeFlag & 128) {
          nextNode = vnode.type.hydrate(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            isSVGContainer(parentNode(node)),
            slotScopeIds,
            optimized,
            rendererInternals,
            hydrateNode
          );
        } else
          ;
    }
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode);
    }
    return nextNode;
  };
  const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const { type, props, patchFlag, shapeFlag, dirs } = vnode;
    const forcePatchValue = type === "input" && dirs || type === "option";
    {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        if (forcePatchValue || !optimized || patchFlag & (16 | 32)) {
          for (const key in props) {
            if (forcePatchValue && key.endsWith("value") || isOn(key) && !isReservedProp(key)) {
              patchProp2(
                el,
                key,
                null,
                props[key],
                false,
                void 0,
                parentComponent
              );
            }
          }
        } else if (props.onClick) {
          patchProp2(
            el,
            "onClick",
            null,
            props.onClick,
            false,
            void 0,
            parentComponent
          );
        }
      }
      let vnodeHooks;
      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
        queueEffectWithSuspense(() => {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
      if (shapeFlag & 16 && // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(
          el.firstChild,
          vnode,
          el,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        let hasWarned = false;
        while (next) {
          hasMismatch = true;
          if (!hasWarned) {
            warn$1(
              `Hydration children mismatch in <${vnode.type}>: server rendered element contains more child nodes than client vdom.`
            );
            hasWarned = true;
          }
          const cur = next;
          next = next.nextSibling;
          remove2(cur);
        }
      } else if (shapeFlag & 8) {
        if (el.textContent !== vnode.children) {
          hasMismatch = true;
          warn$1(
            `Hydration text content mismatch in <${vnode.type}>:
- Client: ${el.textContent}
- Server: ${vnode.children}`
          );
          el.textContent = vnode.children;
        }
      }
    }
    return el.nextSibling;
  };
  const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    const children = parentVNode.children;
    const l = children.length;
    let hasWarned = false;
    for (let i = 0; i < l; i++) {
      const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
      if (node) {
        node = hydrateNode(
          node,
          vnode,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      } else if (vnode.type === Text && !vnode.children) {
        continue;
      } else {
        hasMismatch = true;
        if (!hasWarned) {
          warn$1(
            `Hydration children mismatch in <${container.tagName.toLowerCase()}>: server rendered element contains fewer child nodes than client vdom.`
          );
          hasWarned = true;
        }
        patch(
          null,
          vnode,
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVGContainer(container),
          slotScopeIds
        );
      }
    }
    return node;
  };
  const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const { slotScopeIds: fragmentSlotScopeIds } = vnode;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    const container = parentNode(node);
    const next = hydrateChildren(
      nextSibling(node),
      vnode,
      container,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      optimized
    );
    if (next && isComment(next) && next.data === "]") {
      return nextSibling(vnode.anchor = next);
    } else {
      hasMismatch = true;
      insert(vnode.anchor = createComment(`]`), container, next);
      return next;
    }
  };
  const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    hasMismatch = true;
    warn$1(
      `Hydration node mismatch:
- Client vnode:`,
      vnode.type,
      `
- Server rendered DOM:`,
      node,
      node.nodeType === 3 ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``
    );
    vnode.el = null;
    if (isFragment) {
      const end = locateClosingAsyncAnchor(node);
      while (true) {
        const next2 = nextSibling(node);
        if (next2 && next2 !== end) {
          remove2(next2);
        } else {
          break;
        }
      }
    }
    const next = nextSibling(node);
    const container = parentNode(node);
    remove2(node);
    patch(
      null,
      vnode,
      container,
      next,
      parentComponent,
      parentSuspense,
      isSVGContainer(container),
      slotScopeIds
    );
    return next;
  };
  const locateClosingAsyncAnchor = (node) => {
    let match = 0;
    while (node) {
      node = nextSibling(node);
      if (node && isComment(node)) {
        if (node.data === "[")
          match++;
        if (node.data === "]") {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }
    return node;
  };
  return [hydrate, hydrateNode];
}
let supported$1;
let perf$1;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported$1()) {
    perf$1.mark(`vue-${type}-${instance.uid}`);
  }
  {
    devtoolsPerfStart(instance, type, isSupported$1() ? perf$1.now() : Date.now());
  }
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported$1()) {
    const startTag = `vue-${type}-${instance.uid}`;
    const endTag = startTag + `:end`;
    perf$1.mark(endTag);
    perf$1.measure(
      `<${formatComponentName(instance, instance.type)}> ${type}`,
      startTag,
      endTag
    );
    perf$1.clearMarks(startTag);
    perf$1.clearMarks(endTag);
  }
  {
    devtoolsPerfEnd(instance, type, isSupported$1() ? perf$1.now() : Date.now());
  }
}
function isSupported$1() {
  if (supported$1 !== void 0) {
    return supported$1;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported$1 = true;
    perf$1 = window.performance;
  } else {
    supported$1 = false;
  }
  return supported$1;
}
function initFeatureFlags() {
  const needWarn = [];
  if (needWarn.length) {
    const multi = needWarn.length > 1;
    console.warn(
      `Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  {
    initFeatureFlags();
  }
  const target = getGlobalThis();
  target.__VUE__ = true;
  {
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        } else {
          patchStaticNode(n1, n2, container, isSVG);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            internals
          );
        } else
          ;
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      isSVG,
      n2.el,
      n2.anchor
    );
  };
  const patchStaticNode = (n1, n2, container, isSVG) => {
    if (n2.children !== n1.children) {
      const anchor = hostNextSibling(n1.anchor);
      removeStaticNode(n1);
      [n2.el, n2.anchor] = hostInsertStaticContent(
        n2.children,
        container,
        anchor,
        isSVG
      );
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    } else {
      patchElement(
        n1,
        n2,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { type, props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      isSVG,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        isSVG && type !== "foreignObject",
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(
            el,
            key,
            null,
            props[key],
            isSVG,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    {
      Object.defineProperty(el, "__vnode", {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, "__vueParentComponent", {
        value: parentComponent,
        enumerable: false
      });
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (isHmrUpdating) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        areChildrenSVG,
        slotScopeIds
      );
      {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        areChildrenSVG,
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(
          el,
          n2,
          oldProps,
          newProps,
          parentComponent,
          parentSuspense,
          isSVG
        );
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(
                el,
                key,
                prev,
                next,
                isSVG,
                n1.children,
                parentComponent,
                parentSuspense,
                unmountChildren
              );
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(
        el,
        n2,
        oldProps,
        newProps,
        parentComponent,
        parentSuspense,
        isSVG
      );
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              isSVG,
              vnode.children,
              parentComponent,
              parentSuspense,
              unmountChildren
            );
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(
            el,
            key,
            prev,
            next,
            isSVG,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (
      // #5523 dev root fragment may inherit directives
      isHmrUpdating || patchFlag & 2048
    ) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        n2.children,
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds
        );
        {
          traverseStaticChildren(n1, n2);
        }
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          isSVG,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );
    if (instance.type.__hmrId) {
      registerHMR(instance);
    }
    {
      startMeasure(instance, `mount`);
    }
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      {
        startMeasure(instance, `init`);
      }
      setupComponent(instance);
      {
        endMeasure(instance, `init`);
      }
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(
      instance,
      initialVNode,
      container,
      anchor,
      parentSuspense,
      isSVG,
      optimized
    );
    {
      endMeasure(instance, `mount`);
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            {
              startMeasure(instance, `render`);
            }
            instance.subTree = renderComponentRoot(instance);
            {
              endMeasure(instance, `render`);
            }
            {
              startMeasure(instance, `hydrate`);
            }
            hydrateNode(
              el,
              instance.subTree,
              instance,
              parentSuspense,
              null
            );
            {
              endMeasure(instance, `hydrate`);
            }
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(
              // note: we are moving the render call into an async callback,
              // which means it won't track dependencies - but it's ok because
              // a server-rendered async wrapper is already in resolved state
              // and it will never need to change.
              () => !instance.isUnmounted && hydrateSubTree()
            );
          } else {
            hydrateSubTree();
          }
        } else {
          {
            startMeasure(instance, `render`);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          {
            endMeasure(instance, `render`);
          }
          {
            startMeasure(instance, `patch`);
          }
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            isSVG
          );
          {
            endMeasure(instance, `patch`);
          }
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        {
          devtoolsComponentAdded(instance);
        }
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        let originNext = next;
        let vnodeHook;
        {
          pushWarningContext(next || instance.vnode);
        }
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        {
          startMeasure(instance, `render`);
        }
        const nextTree = renderComponentRoot(instance);
        {
          endMeasure(instance, `render`);
        }
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        {
          startMeasure(instance, `patch`);
        }
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          isSVG
        );
        {
          endMeasure(instance, `patch`);
        }
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next, vnode),
            parentSuspense
          );
        }
        {
          devtoolsComponentUpdated(instance);
        }
      }
    };
    const effect = instance.effect = new ReactiveEffect(
      componentUpdateFn,
      () => queueJob(update),
      instance.scope
      // track it in component's effect scope
    );
    const update = instance.update = () => effect.run();
    update.id = instance.uid;
    toggleRecurse(instance, true);
    {
      effect.onTrack = instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0;
      effect.onTrigger = instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0;
      update.ownerInstance = instance;
    }
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs();
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(
        c1[i],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(
            null,
            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          if (keyToNewIndexMap.has(nextChild.key)) {
            warn$1(
              `Duplicate keys found during update:`,
              JSON.stringify(nextChild.key),
              `Make sure keys are unique.`
            );
          }
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove22 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref: ref2,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs
    } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          optimized,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
        vnode.children.forEach((child) => {
          if (child.type === Comment) {
            hostRemove(child.el);
          } else {
            remove2(child);
          }
        });
      } else {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    if (instance.type.__hmrId) {
      unregisterHMR(instance);
    }
    const { bum, scope, update, subTree, um } = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
    {
      devtoolsComponentRemoved(instance);
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPreFlushCbs();
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(
      internals
    );
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray$1(ch1) && isArray$1(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
const isTeleport = (type) => type.__isTeleport;
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
      /* isBlock */
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  if (n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
    n1.shapeFlag &= ~256;
    n2.shapeFlag &= ~512;
    return false;
  }
  return n1.type === n2.type && n1.key === n2.key;
}
const createVNodeWithArgsTransform = (...args) => {
  return _createVNode(
    ...args
  );
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref: ref2,
  ref_key,
  ref_for
}) => {
  if (typeof ref2 === "number") {
    ref2 = "" + ref2;
  }
  return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (vnode.key !== vnode.key) {
    warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = createVNodeWithArgsTransform;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style)) {
      if (isProxy(style) && !isArray$1(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  if (shapeFlag & 4 && isProxy(type)) {
    type = toRaw(type);
  }
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref2 ? isArray$1(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children: patchFlag === -1 && isArray$1(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  return cloned;
}
function deepCloneVNode(vnode) {
  const cloned = cloneVNode(vnode);
  if (isArray$1(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray$1(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray$1(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray$1(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = createDevRenderContext(instance);
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let globalCurrentInstanceSetters;
let settersKey = "__VUE_INSTANCE_SETTERS__";
{
  if (!(globalCurrentInstanceSetters = getGlobalThis()[settersKey])) {
    globalCurrentInstanceSetters = getGlobalThis()[settersKey] = [];
  }
  globalCurrentInstanceSetters.push((i) => currentInstance = i);
  internalSetCurrentInstance = (instance) => {
    if (globalCurrentInstanceSetters.length > 1) {
      globalCurrentInstanceSetters.forEach((s) => s(instance));
    } else {
      globalCurrentInstanceSetters[0](instance);
    }
  };
}
const setCurrentInstance = (instance) => {
  internalSetCurrentInstance(instance);
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
const isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, config) {
  const appIsNativeTag = config.isNativeTag || NO;
  if (isBuiltInTag(name) || appIsNativeTag(name))
    ;
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  var _a2;
  const Component = instance.type;
  {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }
    if (Component.components) {
      const names = Object.keys(Component.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component.directives) {
      const names = Object.keys(Component.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component.compilerOptions && isRuntimeOnly())
      ;
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  {
    exposePropsOnRenderContext(instance);
  }
  const { setup } = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [shallowReadonly(instance.props), setupContext]
    );
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
        if (!instance.suspense) {
          (_a2 = Component.name) != null ? _a2 : "Anonymous";
        }
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    if (isVNode(setupResult))
      ;
    {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    {
      exposeSetupStateOnRenderContext(instance);
    }
  } else
    ;
  finishComponentSetup(instance, isSSR);
}
let compile;
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        {
          startMeasure(instance, `compile`);
        }
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(
          extend(
            {
              isCustomElement,
              delimiters
            },
            compilerOptions
          ),
          componentCompilerOptions
        );
        Component.render = compile(template, finalCompilerOptions);
        {
          endMeasure(instance, `compile`);
        }
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions(instance);
    resetTracking();
    unsetCurrentInstance();
  }
  if (!Component.render && instance.render === NOOP && !isSSR) {
    if (Component.template)
      ;
  }
}
function getAttrsProxy(instance) {
  return instance.attrsProxy || (instance.attrsProxy = new Proxy(
    instance.attrs,
    {
      get(target, key) {
        markAttrsAccessed();
        track(instance, "get", "$attrs");
        return target[key];
      },
      set() {
        return false;
      },
      deleteProperty() {
        return false;
      }
    }
  ));
}
function getSlotsProxy(instance) {
  return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
    get(target, key) {
      track(instance, "get", "$slots");
      return target[key];
    }
  }));
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    {
      if (instance.exposed)
        ;
      if (exposed != null) {
        let exposedType = typeof exposed;
        if (exposedType === "object") {
          if (isArray$1(exposed)) {
            exposedType = "array";
          } else if (isRef(exposed)) {
            exposedType = "ref";
          }
        }
      }
    }
    instance.exposed = exposed || {};
  };
  {
    return Object.freeze({
      get attrs() {
        return getAttrsProxy(instance);
      },
      get slots() {
        return getSlotsProxy(instance);
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject(propsOrChildren) && !isArray$1(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    return ctx;
  }
};
const version = "3.3.2";
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is, props) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector2) => doc.querySelector(selector2),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString(next);
  if (next && !isCssString) {
    if (prev && !isString(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
  } else {
    const currentDisplay = style.display;
    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
    if ("_vod" in el) {
      style.display = currentDisplay;
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray$1(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null)
      val = "";
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(
          hyphenate(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean2 = isSpecialBooleanAttr(key);
    if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean2 ? "" : value);
    }
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    el._value = value;
    const oldValue = tag === "OPTION" ? el.getAttribute("value") : el.value;
    const newValue = value == null ? "" : value;
    if (oldValue !== newValue) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
    if (!needRemove) {
      warn$1(
        `Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`,
        e
      );
    }
  }
  needRemove && el.removeAttribute(key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray$1(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
  } else {
    return value;
  }
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(
      el,
      key,
      nextValue,
      prevChildren,
      parentComponent,
      parentSuspense,
      unmountChildren
    );
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && isString(value)) {
    return false;
  }
  return key in el;
}
const TRANSITION = "transition";
const ANIMATION = "animation";
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Transition.props = /* @__PURE__ */ extend(
  {},
  BaseTransitionPropsValidators,
  DOMTransitionPropsValidators
);
const callHook = (hook, args = []) => {
  if (isArray$1(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray$1(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const { _vtc } = el;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
    getStyleProperties(`${TRANSITION}Property`).toString()
  );
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  return (event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) {
      return fn(event);
    }
  };
};
const vShow = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue)
      return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el._vod : "none";
}
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
let enabledHydration = false;
function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
  enabledHydration = true;
  return renderer;
}
const createSSRApp = (...args) => {
  const app = ensureHydrationRenderer().createApp(...args);
  {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };
  return app;
};
function injectNativeTagCheck(app) {
  Object.defineProperty(app.config, "isNativeTag", {
    value: (tag) => isHTMLTag(tag) || isSVGTag(tag),
    writable: false
  });
}
function injectCompilerOptionsCheck(app) {
  {
    const isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, "isCustomElement", {
      get() {
        return isCustomElement;
      },
      set() {
      }
    });
    const compilerOptions = app.config.compilerOptions;
    Object.defineProperty(app.config, "compilerOptions", {
      get() {
        return compilerOptions;
      },
      set() {
      }
    });
  }
}
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    return res;
  }
  if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed")
    ;
  return container;
}
const pagesData$1 = {
  // path: /
  "v-8daa1a0e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./index.html-19adc507.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/android-development/
  "v-5dcb4a62": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5dcb4a62" */
    "./index.html-7a97b9b5.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/android-development/course-syllabus.html
  "v-2046e544": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2046e544" */
    "./course-syllabus.html-0c1cadf6.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/android-development/laboratory-work.html
  "v-9c1bdfa0": () => __vitePreload(() => import(
    /* webpackChunkName: "v-9c1bdfa0" */
    "./laboratory-work.html-8115a5c8.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/android-development/lectures.html
  "v-5e9ba7bc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5e9ba7bc" */
    "./lectures.html-4c6816ae.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/android-development/project-grading-guidelines.html
  "v-62b91ae7": () => __vitePreload(() => import(
    /* webpackChunkName: "v-62b91ae7" */
    "./project-grading-guidelines.html-1ff78ba0.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/android-development/project-work.html
  "v-1f80b6dc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1f80b6dc" */
    "./project-work.html-fc4cc368.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/android-development/study-guide.html
  "v-b6503f7a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-b6503f7a" */
    "./study-guide.html-1664da08.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/android-development/time-plan.html
  "v-4dde9732": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4dde9732" */
    "./time-plan.html-5e17fbfe.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/android-development/tutorials.html
  "v-2479b406": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2479b406" */
    "./tutorials.html-b332125a.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/client-server-communication/
  "v-214397d1": () => __vitePreload(() => import(
    /* webpackChunkName: "v-214397d1" */
    "./index.html-2004b728.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/client-server-communication/course-syllabus.html
  "v-202db59a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-202db59a" */
    "./course-syllabus.html-5ea52803.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/client-server-communication/laboratory-work.html
  "v-fcd75fc2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-fcd75fc2" */
    "./laboratory-work.html-1bbd41a6.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/client-server-communication/lectures.html
  "v-15096b13": () => __vitePreload(() => import(
    /* webpackChunkName: "v-15096b13" */
    "./lectures.html-99f99b30.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/client-server-communication/project-grading-guidelines.html
  "v-7f3a40d0": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7f3a40d0" */
    "./project-grading-guidelines.html-18074902.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/client-server-communication/project-work.html
  "v-afe7f9fa": () => __vitePreload(() => import(
    /* webpackChunkName: "v-afe7f9fa" */
    "./project-work.html-db4c1b81.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/client-server-communication/study-guide.html
  "v-ec85209c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-ec85209c" */
    "./study-guide.html-4a9900f8.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/client-server-communication/time-plan.html
  "v-d721933e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-d721933e" */
    "./time-plan.html-1544f19f.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/client-server-communication/tutorials.html
  "v-6b0a5335": () => __vitePreload(() => import(
    /* webpackChunkName: "v-6b0a5335" */
    "./tutorials.html-59656809.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/client-server-communication/written-examination.html
  "v-2a04f362": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2a04f362" */
    "./written-examination.html-ffbd7500.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/git/
  "v-aeaf1fe6": () => __vitePreload(() => import(
    /* webpackChunkName: "v-aeaf1fe6" */
    "./index.html-5371f891.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/introduction-to-script-programming/
  "v-7f920989": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7f920989" */
    "./index.html-534ae524.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/introduction-to-script-programming/course-syllabus.html
  "v-a4f4ea2a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-a4f4ea2a" */
    "./course-syllabus.html-1ce819f5.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/introduction-to-script-programming/exercises.html
  "v-7e7ef5e7": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7e7ef5e7" */
    "./exercises.html-3f1d65c8.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/introduction-to-script-programming/laboratory-work.html
  "v-3f30b5d7": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3f30b5d7" */
    "./laboratory-work.html-3bc45b1b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/introduction-to-script-programming/lectures.html
  "v-22e3845b": () => __vitePreload(() => import(
    /* webpackChunkName: "v-22e3845b" */
    "./lectures.html-2ff08a5c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/introduction-to-script-programming/repetition-exercises.html
  "v-4f623391": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4f623391" */
    "./repetition-exercises.html-eb095b0d.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/introduction-to-script-programming/study-guide.html
  "v-fdbd1d2c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-fdbd1d2c" */
    "./study-guide.html-0f1153ba.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/introduction-to-script-programming/time-plan.html
  "v-41d84619": () => __vitePreload(() => import(
    /* webpackChunkName: "v-41d84619" */
    "./time-plan.html-8d4b838e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/introduction-to-script-programming/written-examination.html
  "v-14005007": () => __vitePreload(() => import(
    /* webpackChunkName: "v-14005007" */
    "./written-examination.html-f4d311f8.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/object-oriented-software-development/lab-1-example.html
  "v-7a2fef0c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7a2fef0c" */
    "./lab-1-example.html-10d1cef6.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-advanced-concepts/
  "v-09054f74": () => __vitePreload(() => import(
    /* webpackChunkName: "v-09054f74" */
    "./index.html-a483d577.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-advanced-concepts/course-syllabus.html
  "v-6be4a554": () => __vitePreload(() => import(
    /* webpackChunkName: "v-6be4a554" */
    "./course-syllabus.html-54197780.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-advanced-concepts/laboratory-work.html
  "v-5bb8d842": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5bb8d842" */
    "./laboratory-work.html-fe8e7b03.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-advanced-concepts/lectures.html
  "v-2b7f1760": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2b7f1760" */
    "./lectures.html-0d3287d0.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-advanced-concepts/project-grading-guidelines.html
  "v-54e2f395": () => __vitePreload(() => import(
    /* webpackChunkName: "v-54e2f395" */
    "./project-grading-guidelines.html-8052bd5c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-advanced-concepts/project-work.html
  "v-e81bb480": () => __vitePreload(() => import(
    /* webpackChunkName: "v-e81bb480" */
    "./project-work.html-2fd43ddc.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-advanced-concepts/study-guide.html
  "v-cd4cfd56": () => __vitePreload(() => import(
    /* webpackChunkName: "v-cd4cfd56" */
    "./study-guide.html-12090332.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-advanced-concepts/time-plan.html
  "v-661954c4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-661954c4" */
    "./time-plan.html-8d0e140a.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-advanced-concepts/tutorials.html
  "v-3cb47198": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3cb47198" */
    "./tutorials.html-a03fc0c4.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-advanced-concepts/written-examination.html
  "v-dce9761c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-dce9761c" */
    "./written-examination.html-8f83b882.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-fundamentals/
  "v-7e31d334": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7e31d334" */
    "./index.html-47e8770c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-fundamentals/course-syllabus.html
  "v-042ef170": () => __vitePreload(() => import(
    /* webpackChunkName: "v-042ef170" */
    "./course-syllabus.html-a7935565.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-fundamentals/exercises.html
  "v-2279bc04": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2279bc04" */
    "./exercises.html-9a007cfe.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-fundamentals/feedback.html
  "v-75848064": () => __vitePreload(() => import(
    /* webpackChunkName: "v-75848064" */
    "./feedback.html-831d9e72.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-fundamentals/lectures.html
  "v-54cdf2c4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-54cdf2c4" */
    "./lectures.html-807aa8b1.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-fundamentals/project-grading-guidelines.html
  "v-2036633a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2036633a" */
    "./project-grading-guidelines.html-2f81f782.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-fundamentals/project-work.html
  "v-18fce10e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-18fce10e" */
    "./project-work.html-bc1446fd.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-fundamentals/study-guide.html
  "v-11832447": () => __vitePreload(() => import(
    /* webpackChunkName: "v-11832447" */
    "./study-guide.html-1d337163.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-fundamentals/time-plan.html
  "v-3459e794": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3459e794" */
    "./time-plan.html-678cb7a8.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-fundamentals/tutorials.html
  "v-8723adec": () => __vitePreload(() => import(
    /* webpackChunkName: "v-8723adec" */
    "./tutorials.html-a642e012.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-fundamentals/written-examination.html
  "v-47a3d5e4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-47a3d5e4" */
    "./written-examination.html-7f551b3e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/after-peters-exam/
  "v-1eb3f448": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1eb3f448" */
    "./index.html-b8a588bf.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/ajax/
  "v-63b3ad24": () => __vitePreload(() => import(
    /* webpackChunkName: "v-63b3ad24" */
    "./index.html-9b794497.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/amazon-lightsail/
  "v-9448f960": () => __vitePreload(() => import(
    /* webpackChunkName: "v-9448f960" */
    "./index.html-9a187034.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-activities/
  "v-0f59beba": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0f59beba" */
    "./index.html-43bfb803.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-app-bar/
  "v-18bd48f2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-18bd48f2" */
    "./index.html-715e41e5.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-asynchronous-operations/
  "v-c2025ac6": () => __vitePreload(() => import(
    /* webpackChunkName: "v-c2025ac6" */
    "./index.html-d42c1190.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-backward-compatible/
  "v-7450cb50": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7450cb50" */
    "./index.html-934ceb96.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-bluetooth-classic/
  "v-6ebdf43b": () => __vitePreload(() => import(
    /* webpackChunkName: "v-6ebdf43b" */
    "./index.html-21ae8cff.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-bottom-navigation-view-and-drawer-layout/
  "v-54e9e571": () => __vitePreload(() => import(
    /* webpackChunkName: "v-54e9e571" */
    "./index.html-76e42e83.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-broadcast-receivers/
  "v-e6eed994": () => __vitePreload(() => import(
    /* webpackChunkName: "v-e6eed994" */
    "./index.html-8de4a90d.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-cloud-firestore/
  "v-946554ca": () => __vitePreload(() => import(
    /* webpackChunkName: "v-946554ca" */
    "./index.html-2d286862.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-conditional-resources/
  "v-954c9a20": () => __vitePreload(() => import(
    /* webpackChunkName: "v-954c9a20" */
    "./index.html-1d85135b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-constraint-layout/
  "v-64552718": () => __vitePreload(() => import(
    /* webpackChunkName: "v-64552718" */
    "./index.html-54993a67.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-content-providers/
  "v-f8691880": () => __vitePreload(() => import(
    /* webpackChunkName: "v-f8691880" */
    "./index.html-ab66b5df.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-coordinator-layout/
  "v-3012332e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3012332e" */
    "./index.html-bd8636dc.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-design-patterns/
  "v-3ec9963c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3ec9963c" */
    "./index.html-be15b131.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-dialogs/
  "v-ba434b7a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-ba434b7a" */
    "./index.html-30a81a1b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-file-storage/
  "v-60b038c6": () => __vitePreload(() => import(
    /* webpackChunkName: "v-60b038c6" */
    "./index.html-2848ade9.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-fragments/
  "v-77a5618b": () => __vitePreload(() => import(
    /* webpackChunkName: "v-77a5618b" */
    "./index.html-36aedbc6.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-fundamental-application-components/
  "v-2e9a2415": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2e9a2415" */
    "./index.html-7cf30290.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-gps/
  "v-462f65b8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-462f65b8" */
    "./index.html-3c9ce051.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-introduction/
  "v-b4de4454": () => __vitePreload(() => import(
    /* webpackChunkName: "v-b4de4454" */
    "./index.html-b6b92b57.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-list-view/
  "v-e799954c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-e799954c" */
    "./index.html-772883bc.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-menus/
  "v-4daa745a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4daa745a" */
    "./index.html-ac8ad9a8.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-notifications/
  "v-810fb434": () => __vitePreload(() => import(
    /* webpackChunkName: "v-810fb434" */
    "./index.html-81e215ee.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-linear-layout/
  "v-de7df588": () => __vitePreload(() => import(
    /* webpackChunkName: "v-de7df588" */
    "./index.html-63063043.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-permissions/
  "v-3ebed4ec": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3ebed4ec" */
    "./index.html-25169755.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-runtime-configuration-changes/
  "v-748b05f7": () => __vitePreload(() => import(
    /* webpackChunkName: "v-748b05f7" */
    "./index.html-a01334b2.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-scheduling/
  "v-39872bdc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-39872bdc" */
    "./index.html-004ce907.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-recycler-view/
  "v-7bd9c0bb": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7bd9c0bb" */
    "./index.html-4302414a.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-sensors/
  "v-07ee4796": () => __vitePreload(() => import(
    /* webpackChunkName: "v-07ee4796" */
    "./index.html-38b99bfc.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-services/
  "v-5d6e9692": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5d6e9692" */
    "./index.html-32eef2d3.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-sqlite-database/
  "v-d894191c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-d894191c" */
    "./index.html-10862981.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-studio-basics/
  "v-72920372": () => __vitePreload(() => import(
    /* webpackChunkName: "v-72920372" */
    "./index.html-1784cc38.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-views-and-layouts/
  "v-ff4b95cc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-ff4b95cc" */
    "./index.html-76b475bf.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/android-view-model/
  "v-4fffb5e2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4fffb5e2" */
    "./index.html-dd731c17.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/character-encodings/
  "v-91f742d8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-91f742d8" */
    "./index.html-0ca8171f.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/asynchronous-programming-in-js/
  "v-5ca189d4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5ca189d4" */
    "./index.html-ef4b17ef.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/client-side-javascript-and-bom/
  "v-1327cdf0": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1327cdf0" */
    "./index.html-8d829e25.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/cloud-firestore/
  "v-cac6ea06": () => __vitePreload(() => import(
    /* webpackChunkName: "v-cac6ea06" */
    "./index.html-405c6a45.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/content-delivery-networks/
  "v-0fa30a06": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0fa30a06" */
    "./index.html-3013c932.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/cookies-and-sessions/
  "v-7401f546": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7401f546" */
    "./index.html-15ef79ed.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/common-code-mistakes/
  "v-12fe5b9b": () => __vitePreload(() => import(
    /* webpackChunkName: "v-12fe5b9b" */
    "./index.html-52da24e1.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/css/
  "v-243d8166": () => __vitePreload(() => import(
    /* webpackChunkName: "v-243d8166" */
    "./index.html-8118ab85.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/dependency-injection-in-node-js/
  "v-62d9aca8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-62d9aca8" */
    "./index.html-05d45391.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/docker-basics/
  "v-01f0039e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-01f0039e" */
    "./index.html-ff7a44bf.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/designing-account-systems/
  "v-49bb8916": () => __vitePreload(() => import(
    /* webpackChunkName: "v-49bb8916" */
    "./index.html-caa93790.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/document-object-model/
  "v-2f81c5c3": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2f81c5c3" */
    "./index.html-030c9e37.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/express-basics/
  "v-254a83e8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-254a83e8" */
    "./index.html-77aba4ee.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/gdpr/
  "v-630f9862": () => __vitePreload(() => import(
    /* webpackChunkName: "v-630f9862" */
    "./index.html-3a135578.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/frontend-frameworks/
  "v-3e946c20": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3e946c20" */
    "./index.html-b5129750.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/git-basics/
  "v-052963ee": () => __vitePreload(() => import(
    /* webpackChunkName: "v-052963ee" */
    "./index.html-45be0572.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/git-branches/
  "v-d2aff6fa": () => __vitePreload(() => import(
    /* webpackChunkName: "v-d2aff6fa" */
    "./index.html-76cd083b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/git-synching/
  "v-38e34944": () => __vitePreload(() => import(
    /* webpackChunkName: "v-38e34944" */
    "./index.html-7b403fd7.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/handlebars/
  "v-33315f34": () => __vitePreload(() => import(
    /* webpackChunkName: "v-33315f34" */
    "./index.html-dd9bf580.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/handling-concurrent-http-requests/
  "v-6d1ceed5": () => __vitePreload(() => import(
    /* webpackChunkName: "v-6d1ceed5" */
    "./index.html-a80f9e90.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/html/
  "v-62e4f57a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-62e4f57a" */
    "./index.html-635ac89a.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/garrit-css/
  "v-6e3e479a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-6e3e479a" */
    "./index.html-4e85bd32.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/html-and-css-frameworks/
  "v-3f1c560e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3f1c560e" */
    "./index.html-71f366f6.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/internet-basics/
  "v-0026cf7f": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0026cf7f" */
    "./index.html-2a9974dc.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/introduction-to-computers-and-programming/
  "v-0a07197e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0a07197e" */
    "./index.html-c430b064.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/http-and-web-applications/
  "v-1195968e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1195968e" */
    "./index.html-17b23534.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/jasmine-database/
  "v-984759d6": () => __vitePreload(() => import(
    /* webpackChunkName: "v-984759d6" */
    "./index.html-d9166e32.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/java/
  "v-62bd9ca8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-62bd9ca8" */
    "./index.html-1dbeadc9.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/json-web-tokens/
  "v-28429238": () => __vitePreload(() => import(
    /* webpackChunkName: "v-28429238" */
    "./index.html-5a36733e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/kotlin/
  "v-10617a26": () => __vitePreload(() => import(
    /* webpackChunkName: "v-10617a26" */
    "./index.html-3c8498fe.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/kotlin-asynchronous-operations/
  "v-1e37e1a9": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1e37e1a9" */
    "./index.html-2266a17b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/javascript-basics/
  "v-2801ad2a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2801ad2a" */
    "./index.html-3c1eb23d.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/layered-architecture-in-node-js/
  "v-7d0036a7": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7d0036a7" */
    "./index.html-6813f072.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/node-js/
  "v-1df125fc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1df125fc" */
    "./index.html-46db9622.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/npm/
  "v-24339936": () => __vitePreload(() => import(
    /* webpackChunkName: "v-24339936" */
    "./index.html-316b4635.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/peters-feedback/
  "v-8994abb6": () => __vitePreload(() => import(
    /* webpackChunkName: "v-8994abb6" */
    "./index.html-76d1b729.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/python-abstraction/
  "v-e5ed128e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-e5ed128e" */
    "./index.html-4d9980e2.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/python-basics-part-1/
  "v-4ffdc4e0": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4ffdc4e0" */
    "./index.html-986ca623.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/python-basics-part-2/
  "v-4ffdc4ff": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4ffdc4ff" */
    "./index.html-aaac2d4e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/python-conditions/
  "v-66ca1407": () => __vitePreload(() => import(
    /* webpackChunkName: "v-66ca1407" */
    "./index.html-b772aca9.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/python-data-storage/
  "v-1e0b6f67": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1e0b6f67" */
    "./index.html-dae529d8.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/python-dicts/
  "v-4c84d27c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4c84d27c" */
    "./index.html-036c58ed.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/python-functions/
  "v-58147338": () => __vitePreload(() => import(
    /* webpackChunkName: "v-58147338" */
    "./index.html-4d2de7a6.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/python-introduction/
  "v-b1010a36": () => __vitePreload(() => import(
    /* webpackChunkName: "v-b1010a36" */
    "./index.html-ab94ba21.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/python-lists/
  "v-3128bcac": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3128bcac" */
    "./index.html-0c18c268.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/python-loops/
  "v-308363a0": () => __vitePreload(() => import(
    /* webpackChunkName: "v-308363a0" */
    "./index.html-6d884cd7.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/python-modelling/
  "v-55debfe0": () => __vitePreload(() => import(
    /* webpackChunkName: "v-55debfe0" */
    "./index.html-e3424619.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/python-modules/
  "v-46c37ff8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-46c37ff8" */
    "./index.html-71c0b945.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/python-object-oriented-programming/
  "v-645c8f3e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-645c8f3e" */
    "./index.html-81a1a424.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/python-strings/
  "v-54753746": () => __vitePreload(() => import(
    /* webpackChunkName: "v-54753746" */
    "./index.html-7b695cd0.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/report-writing/
  "v-0157d02a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0157d02a" */
    "./index.html-9652fb0b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/rest-api-authorization/
  "v-f63179be": () => __vitePreload(() => import(
    /* webpackChunkName: "v-f63179be" */
    "./index.html-96ec2bcc.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/rest-api-basics/
  "v-5b18e8df": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5b18e8df" */
    "./index.html-21ac0bbb.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/rest-api-in-express/
  "v-f3dfd408": () => __vitePreload(() => import(
    /* webpackChunkName: "v-f3dfd408" */
    "./index.html-ce2b9792.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/same-origin-policy-and-cross-origin-resource-sharing/
  "v-14d2aae8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-14d2aae8" */
    "./index.html-457db1c3.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/scaling-databases/
  "v-2b690dde": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2b690dde" */
    "./index.html-0f2edeb6.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/scaling-web-applications/
  "v-4be091cc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4be091cc" */
    "./index.html-e43678b8.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/sop-and-cors/
  "v-c93553dc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-c93553dc" */
    "./index.html-fbbd1479.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/sqlite/
  "v-bc0e457c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-bc0e457c" */
    "./index.html-29f546de.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/teamwork/
  "v-7e0b9ae0": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7e0b9ae0" */
    "./index.html-ac8db622.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/thesis-defense/
  "v-c7c21722": () => __vitePreload(() => import(
    /* webpackChunkName: "v-c7c21722" */
    "./index.html-1527bab4.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/thesis-proposals/
  "v-0cbcc1e4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0cbcc1e4" */
    "./index.html-d00b74d3.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/third-party-authentication/
  "v-2a8c6e09": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2a8c6e09" */
    "./index.html-3f04489f.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/uml-use-case-diagrams/
  "v-c804b61c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-c804b61c" */
    "./index.html-420b8424.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/using-cookies-and-sessions-in-express/
  "v-18f3cd95": () => __vitePreload(() => import(
    /* webpackChunkName: "v-18f3cd95" */
    "./index.html-35f4840d.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/using-sequelize-in-node-js/
  "v-e9b2497a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-e9b2497a" */
    "./index.html-694e15ee.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/using-shells/
  "v-234b2462": () => __vitePreload(() => import(
    /* webpackChunkName: "v-234b2462" */
    "./index.html-e1ac0969.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/using-sqlite-in-node-js/
  "v-bdc36168": () => __vitePreload(() => import(
    /* webpackChunkName: "v-bdc36168" */
    "./index.html-52960ec1.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/web-applications-in-express/
  "v-245ddad7": () => __vitePreload(() => import(
    /* webpackChunkName: "v-245ddad7" */
    "./index.html-8df91e3a.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/vue/
  "v-242c2fac": () => __vitePreload(() => import(
    /* webpackChunkName: "v-242c2fac" */
    "./index.html-27b6d5ff.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/web-applications-in-node-js/
  "v-4c352c5a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4c352c5a" */
    "./index.html-4c6a240b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/web-cookies/
  "v-3fb714cc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3fb714cc" */
    "./index.html-0e4d8c75.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/web-security/
  "v-1ea863d6": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1ea863d6" */
    "./index.html-48314c2d.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/web-sessions/
  "v-3b29a058": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3b29a058" */
    "./index.html-750b66ca.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/writing-exam-answers/README.md.html
  "v-f4c42d50": () => __vitePreload(() => import(
    /* webpackChunkName: "v-f4c42d50" */
    "./README.md.html-06750eae.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/client-server-communication/exams/exam-2020-08-13.html
  "v-8b129efe": () => __vitePreload(() => import(
    /* webpackChunkName: "v-8b129efe" */
    "./exam-2020-08-13.html-3b854212.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/client-server-communication/exams/exam-2022-10-19.html
  "v-263d0810": () => __vitePreload(() => import(
    /* webpackChunkName: "v-263d0810" */
    "./exam-2022-10-19.html-0861989b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/client-server-communication/exams/exam-2023-01-08.html
  "v-d162d11e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-d162d11e" */
    "./exam-2023-01-08.html-186f611f.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/client-server-communication/exams/exam-2023-08-15.html
  "v-56155c48": () => __vitePreload(() => import(
    /* webpackChunkName: "v-56155c48" */
    "./exam-2023-08-15.html-40d2039b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/introduction-to-script-programming/exams/exam-2021-02-18.html
  "v-448d32ad": () => __vitePreload(() => import(
    /* webpackChunkName: "v-448d32ad" */
    "./exam-2021-02-18.html-a95300ae.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/introduction-to-script-programming/exams/exam-2022-12-15.html
  "v-3b69bf4e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3b69bf4e" */
    "./exam-2022-12-15.html-e58abd32.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/introduction-to-script-programming/exams/exam-2023-02-15.html
  "v-4ed1f38e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4ed1f38e" */
    "./exam-2023-02-15.html-cfdc437b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/introduction-to-script-programming/exams/exam-2023-08-14.html
  "v-72909616": () => __vitePreload(() => import(
    /* webpackChunkName: "v-72909616" */
    "./exam-2023-08-14.html-8e8d761a.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /lectures/svelte/
  "v-abc05e1a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-abc05e1a" */
    "./index.html-71342ecb.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-advanced-concepts/exams/exam-2021-08-22.html
  "v-2f725a65": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2f725a65" */
    "./exam-2021-08-22.html-e1194f1f.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-advanced-concepts/exams/exam-2023-03-23.html
  "v-5b3452bd": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5b3452bd" */
    "./exam-2023-03-23.html-52e52c57.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-advanced-concepts/exams/exam-2023-06-12.html
  "v-3d32e840": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3d32e840" */
    "./exam-2023-06-12.html-8be2f755.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-advanced-concepts/exams/exam-2023-08-20.html
  "v-3b6bf3e5": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3b6bf3e5" */
    "./exam-2023-08-20.html-ac24b37e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-fundamentals/exams/exam-2021-08-16.html
  "v-d8d0c3dc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-d8d0c3dc" */
    "./exam-2021-08-16.html-a5002a6e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-fundamentals/exams/exam-2022-10-20.html
  "v-1818640f": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1818640f" */
    "./exam-2022-10-20.html-56e1dff2.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-fundamentals/exams/exam-2023-01-14.html
  "v-dc9ba2ea": () => __vitePreload(() => import(
    /* webpackChunkName: "v-dc9ba2ea" */
    "./exam-2023-01-14.html-80700008.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /courses/web-development-fundamentals/exams/exam-2023-08-16.html
  "v-ba0a2e60": () => __vitePreload(() => import(
    /* webpackChunkName: "v-ba0a2e60" */
    "./exam-2023-08-16.html-f70cb453.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /404.html
  "v-3706649a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./404.html-bd7a96c7.js"
  ), true ? [] : void 0).then(({ data }) => data)
};
const siteData$1 = JSON.parse('{"base":"/course-material/","lang":"en-US","title":"Course Material","description":"","head":[],"locales":{}}');
var resolveHeadIdentifier = ([
  tag,
  attrs,
  content
]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
var dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
var isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
var isLinkMailto = (link) => /^mailto:/.test(link);
var isLinkTel = (link) => /^tel:/.test(link);
var isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
var removeEndingSlash = (str) => str[str.length - 1] === "/" ? str.slice(0, -1) : str;
var removeLeadingSlash = (str) => str[0] === "/" ? str.slice(1) : str;
var resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const pagesComponents = {
  // path: /
  "v-8daa1a0e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./index.html-9d6b6e85.js"
  ), true ? [] : void 0)),
  // path: /courses/android-development/
  "v-5dcb4a62": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5dcb4a62" */
    "./index.html-c55c622b.js"
  ), true ? [] : void 0)),
  // path: /courses/android-development/course-syllabus.html
  "v-2046e544": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2046e544" */
    "./course-syllabus.html-19411974.js"
  ), true ? [] : void 0)),
  // path: /courses/android-development/laboratory-work.html
  "v-9c1bdfa0": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-9c1bdfa0" */
    "./laboratory-work.html-8c77df3d.js"
  ), true ? [] : void 0)),
  // path: /courses/android-development/lectures.html
  "v-5e9ba7bc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5e9ba7bc" */
    "./lectures.html-55474e8f.js"
  ), true ? [] : void 0)),
  // path: /courses/android-development/project-grading-guidelines.html
  "v-62b91ae7": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-62b91ae7" */
    "./project-grading-guidelines.html-758da38e.js"
  ), true ? [] : void 0)),
  // path: /courses/android-development/project-work.html
  "v-1f80b6dc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1f80b6dc" */
    "./project-work.html-9854d925.js"
  ), true ? [] : void 0)),
  // path: /courses/android-development/study-guide.html
  "v-b6503f7a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-b6503f7a" */
    "./study-guide.html-57236790.js"
  ), true ? [] : void 0)),
  // path: /courses/android-development/time-plan.html
  "v-4dde9732": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4dde9732" */
    "./time-plan.html-ed890acd.js"
  ), true ? [] : void 0)),
  // path: /courses/android-development/tutorials.html
  "v-2479b406": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2479b406" */
    "./tutorials.html-42605318.js"
  ), true ? [] : void 0)),
  // path: /courses/client-server-communication/
  "v-214397d1": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-214397d1" */
    "./index.html-0e1c170c.js"
  ), true ? [] : void 0)),
  // path: /courses/client-server-communication/course-syllabus.html
  "v-202db59a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-202db59a" */
    "./course-syllabus.html-c17386d8.js"
  ), true ? [] : void 0)),
  // path: /courses/client-server-communication/laboratory-work.html
  "v-fcd75fc2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-fcd75fc2" */
    "./laboratory-work.html-e3cba7de.js"
  ), true ? [] : void 0)),
  // path: /courses/client-server-communication/lectures.html
  "v-15096b13": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-15096b13" */
    "./lectures.html-82b21d7a.js"
  ), true ? [] : void 0)),
  // path: /courses/client-server-communication/project-grading-guidelines.html
  "v-7f3a40d0": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7f3a40d0" */
    "./project-grading-guidelines.html-8d76a9d6.js"
  ), true ? [] : void 0)),
  // path: /courses/client-server-communication/project-work.html
  "v-afe7f9fa": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-afe7f9fa" */
    "./project-work.html-cb20c121.js"
  ), true ? [] : void 0)),
  // path: /courses/client-server-communication/study-guide.html
  "v-ec85209c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-ec85209c" */
    "./study-guide.html-9eed695d.js"
  ), true ? [] : void 0)),
  // path: /courses/client-server-communication/time-plan.html
  "v-d721933e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-d721933e" */
    "./time-plan.html-db853b87.js"
  ), true ? [] : void 0)),
  // path: /courses/client-server-communication/tutorials.html
  "v-6b0a5335": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-6b0a5335" */
    "./tutorials.html-e4769ffc.js"
  ), true ? [] : void 0)),
  // path: /courses/client-server-communication/written-examination.html
  "v-2a04f362": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2a04f362" */
    "./written-examination.html-b88e3be6.js"
  ), true ? [] : void 0)),
  // path: /courses/git/
  "v-aeaf1fe6": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-aeaf1fe6" */
    "./index.html-546edc11.js"
  ), true ? [] : void 0)),
  // path: /courses/introduction-to-script-programming/
  "v-7f920989": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7f920989" */
    "./index.html-fe054def.js"
  ), true ? [] : void 0)),
  // path: /courses/introduction-to-script-programming/course-syllabus.html
  "v-a4f4ea2a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-a4f4ea2a" */
    "./course-syllabus.html-11a1b8c0.js"
  ), true ? [] : void 0)),
  // path: /courses/introduction-to-script-programming/exercises.html
  "v-7e7ef5e7": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7e7ef5e7" */
    "./exercises.html-e92bd999.js"
  ), true ? [] : void 0)),
  // path: /courses/introduction-to-script-programming/laboratory-work.html
  "v-3f30b5d7": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3f30b5d7" */
    "./laboratory-work.html-0f7811f3.js"
  ), true ? [] : void 0)),
  // path: /courses/introduction-to-script-programming/lectures.html
  "v-22e3845b": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-22e3845b" */
    "./lectures.html-3e3869c7.js"
  ), true ? [] : void 0)),
  // path: /courses/introduction-to-script-programming/repetition-exercises.html
  "v-4f623391": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4f623391" */
    "./repetition-exercises.html-48788273.js"
  ), true ? [] : void 0)),
  // path: /courses/introduction-to-script-programming/study-guide.html
  "v-fdbd1d2c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-fdbd1d2c" */
    "./study-guide.html-bdcffc57.js"
  ), true ? [] : void 0)),
  // path: /courses/introduction-to-script-programming/time-plan.html
  "v-41d84619": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-41d84619" */
    "./time-plan.html-3947c927.js"
  ), true ? [] : void 0)),
  // path: /courses/introduction-to-script-programming/written-examination.html
  "v-14005007": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-14005007" */
    "./written-examination.html-59893208.js"
  ), true ? [] : void 0)),
  // path: /courses/object-oriented-software-development/lab-1-example.html
  "v-7a2fef0c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7a2fef0c" */
    "./lab-1-example.html-0383fa61.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-advanced-concepts/
  "v-09054f74": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-09054f74" */
    "./index.html-bd7b2c80.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-advanced-concepts/course-syllabus.html
  "v-6be4a554": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-6be4a554" */
    "./course-syllabus.html-892064ef.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-advanced-concepts/laboratory-work.html
  "v-5bb8d842": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5bb8d842" */
    "./laboratory-work.html-d2e88441.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-advanced-concepts/lectures.html
  "v-2b7f1760": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2b7f1760" */
    "./lectures.html-bdead9d6.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-advanced-concepts/project-grading-guidelines.html
  "v-54e2f395": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-54e2f395" */
    "./project-grading-guidelines.html-139f1ed7.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-advanced-concepts/project-work.html
  "v-e81bb480": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-e81bb480" */
    "./project-work.html-5a6b1086.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-advanced-concepts/study-guide.html
  "v-cd4cfd56": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-cd4cfd56" */
    "./study-guide.html-38ed5a6b.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-advanced-concepts/time-plan.html
  "v-661954c4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-661954c4" */
    "./time-plan.html-887eeda4.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-advanced-concepts/tutorials.html
  "v-3cb47198": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3cb47198" */
    "./tutorials.html-cd4fa4b3.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-advanced-concepts/written-examination.html
  "v-dce9761c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-dce9761c" */
    "./written-examination.html-32b1b0c9.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-fundamentals/
  "v-7e31d334": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7e31d334" */
    "./index.html-c02acb36.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-fundamentals/course-syllabus.html
  "v-042ef170": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-042ef170" */
    "./course-syllabus.html-352fa0dd.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-fundamentals/exercises.html
  "v-2279bc04": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2279bc04" */
    "./exercises.html-2a58b444.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-fundamentals/feedback.html
  "v-75848064": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-75848064" */
    "./feedback.html-8a5bd1fb.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-fundamentals/lectures.html
  "v-54cdf2c4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-54cdf2c4" */
    "./lectures.html-de4ffa8c.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-fundamentals/project-grading-guidelines.html
  "v-2036633a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2036633a" */
    "./project-grading-guidelines.html-3f44b5fa.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-fundamentals/project-work.html
  "v-18fce10e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-18fce10e" */
    "./project-work.html-986284ee.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-fundamentals/study-guide.html
  "v-11832447": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-11832447" */
    "./study-guide.html-7b04782a.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-fundamentals/time-plan.html
  "v-3459e794": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3459e794" */
    "./time-plan.html-083448ab.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-fundamentals/tutorials.html
  "v-8723adec": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-8723adec" */
    "./tutorials.html-b3b9e54c.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-fundamentals/written-examination.html
  "v-47a3d5e4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-47a3d5e4" */
    "./written-examination.html-30e3e965.js"
  ), true ? [] : void 0)),
  // path: /lectures/after-peters-exam/
  "v-1eb3f448": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1eb3f448" */
    "./index.html-162d3bac.js"
  ), true ? [] : void 0)),
  // path: /lectures/ajax/
  "v-63b3ad24": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-63b3ad24" */
    "./index.html-d5f0ba38.js"
  ), true ? [] : void 0)),
  // path: /lectures/amazon-lightsail/
  "v-9448f960": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-9448f960" */
    "./index.html-a3c2da79.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-activities/
  "v-0f59beba": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0f59beba" */
    "./index.html-446e04e9.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-app-bar/
  "v-18bd48f2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-18bd48f2" */
    "./index.html-5c3de69b.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-asynchronous-operations/
  "v-c2025ac6": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-c2025ac6" */
    "./index.html-7a4f9e2a.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-backward-compatible/
  "v-7450cb50": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7450cb50" */
    "./index.html-9d530e85.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-bluetooth-classic/
  "v-6ebdf43b": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-6ebdf43b" */
    "./index.html-978dbbff.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-bottom-navigation-view-and-drawer-layout/
  "v-54e9e571": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-54e9e571" */
    "./index.html-c370c1ab.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-broadcast-receivers/
  "v-e6eed994": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-e6eed994" */
    "./index.html-3a620b2e.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-cloud-firestore/
  "v-946554ca": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-946554ca" */
    "./index.html-d9c910c1.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-conditional-resources/
  "v-954c9a20": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-954c9a20" */
    "./index.html-df90cb96.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-constraint-layout/
  "v-64552718": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-64552718" */
    "./index.html-c595a339.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-content-providers/
  "v-f8691880": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-f8691880" */
    "./index.html-6023abc3.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-coordinator-layout/
  "v-3012332e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3012332e" */
    "./index.html-03b4ab47.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-design-patterns/
  "v-3ec9963c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3ec9963c" */
    "./index.html-dfdf1b7d.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-dialogs/
  "v-ba434b7a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-ba434b7a" */
    "./index.html-ba195070.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-file-storage/
  "v-60b038c6": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-60b038c6" */
    "./index.html-cce3a1f6.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-fragments/
  "v-77a5618b": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-77a5618b" */
    "./index.html-052ee4f2.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-fundamental-application-components/
  "v-2e9a2415": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2e9a2415" */
    "./index.html-f3fb9ff8.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-gps/
  "v-462f65b8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-462f65b8" */
    "./index.html-100fa967.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-introduction/
  "v-b4de4454": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-b4de4454" */
    "./index.html-472caa35.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-list-view/
  "v-e799954c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-e799954c" */
    "./index.html-66d08122.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-menus/
  "v-4daa745a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4daa745a" */
    "./index.html-c50ea3e2.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-notifications/
  "v-810fb434": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-810fb434" */
    "./index.html-63f3ee1e.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-linear-layout/
  "v-de7df588": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-de7df588" */
    "./index.html-fab2482c.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-permissions/
  "v-3ebed4ec": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3ebed4ec" */
    "./index.html-fdec9c60.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-runtime-configuration-changes/
  "v-748b05f7": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-748b05f7" */
    "./index.html-107417b5.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-scheduling/
  "v-39872bdc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-39872bdc" */
    "./index.html-c648fa3d.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-recycler-view/
  "v-7bd9c0bb": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7bd9c0bb" */
    "./index.html-128d5a5b.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-sensors/
  "v-07ee4796": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-07ee4796" */
    "./index.html-ffc2a8cc.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-services/
  "v-5d6e9692": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5d6e9692" */
    "./index.html-9df06152.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-sqlite-database/
  "v-d894191c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-d894191c" */
    "./index.html-dc48837a.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-studio-basics/
  "v-72920372": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-72920372" */
    "./index.html-a797882f.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-views-and-layouts/
  "v-ff4b95cc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-ff4b95cc" */
    "./index.html-e385cd17.js"
  ), true ? [] : void 0)),
  // path: /lectures/android-view-model/
  "v-4fffb5e2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4fffb5e2" */
    "./index.html-9435d56d.js"
  ), true ? [] : void 0)),
  // path: /lectures/character-encodings/
  "v-91f742d8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-91f742d8" */
    "./index.html-1edecd5f.js"
  ), true ? [] : void 0)),
  // path: /lectures/asynchronous-programming-in-js/
  "v-5ca189d4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5ca189d4" */
    "./index.html-1cd9357e.js"
  ), true ? [] : void 0)),
  // path: /lectures/client-side-javascript-and-bom/
  "v-1327cdf0": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1327cdf0" */
    "./index.html-7fea1ea7.js"
  ), true ? [] : void 0)),
  // path: /lectures/cloud-firestore/
  "v-cac6ea06": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-cac6ea06" */
    "./index.html-3e575241.js"
  ), true ? [] : void 0)),
  // path: /lectures/content-delivery-networks/
  "v-0fa30a06": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0fa30a06" */
    "./index.html-9e285f76.js"
  ), true ? [] : void 0)),
  // path: /lectures/cookies-and-sessions/
  "v-7401f546": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7401f546" */
    "./index.html-a95f251b.js"
  ), true ? [] : void 0)),
  // path: /lectures/common-code-mistakes/
  "v-12fe5b9b": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-12fe5b9b" */
    "./index.html-f4a661a7.js"
  ), true ? [] : void 0)),
  // path: /lectures/css/
  "v-243d8166": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-243d8166" */
    "./index.html-2fae7aa1.js"
  ), true ? [] : void 0)),
  // path: /lectures/dependency-injection-in-node-js/
  "v-62d9aca8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-62d9aca8" */
    "./index.html-874c36ea.js"
  ), true ? [] : void 0)),
  // path: /lectures/docker-basics/
  "v-01f0039e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-01f0039e" */
    "./index.html-b86cbe90.js"
  ), true ? [] : void 0)),
  // path: /lectures/designing-account-systems/
  "v-49bb8916": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-49bb8916" */
    "./index.html-d5c785db.js"
  ), true ? [] : void 0)),
  // path: /lectures/document-object-model/
  "v-2f81c5c3": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2f81c5c3" */
    "./index.html-cfa7f8a9.js"
  ), true ? [] : void 0)),
  // path: /lectures/express-basics/
  "v-254a83e8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-254a83e8" */
    "./index.html-f1177471.js"
  ), true ? [] : void 0)),
  // path: /lectures/gdpr/
  "v-630f9862": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-630f9862" */
    "./index.html-b8508eb0.js"
  ), true ? [] : void 0)),
  // path: /lectures/frontend-frameworks/
  "v-3e946c20": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3e946c20" */
    "./index.html-2d256cba.js"
  ), true ? [] : void 0)),
  // path: /lectures/git-basics/
  "v-052963ee": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-052963ee" */
    "./index.html-55019409.js"
  ), true ? [] : void 0)),
  // path: /lectures/git-branches/
  "v-d2aff6fa": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-d2aff6fa" */
    "./index.html-bc8e223f.js"
  ), true ? [] : void 0)),
  // path: /lectures/git-synching/
  "v-38e34944": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-38e34944" */
    "./index.html-412bb767.js"
  ), true ? [] : void 0)),
  // path: /lectures/handlebars/
  "v-33315f34": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-33315f34" */
    "./index.html-259aa892.js"
  ), true ? [] : void 0)),
  // path: /lectures/handling-concurrent-http-requests/
  "v-6d1ceed5": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-6d1ceed5" */
    "./index.html-f08d574c.js"
  ), true ? [] : void 0)),
  // path: /lectures/html/
  "v-62e4f57a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-62e4f57a" */
    "./index.html-525e31c8.js"
  ), true ? [] : void 0)),
  // path: /lectures/garrit-css/
  "v-6e3e479a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-6e3e479a" */
    "./index.html-93ef7f0c.js"
  ), true ? [] : void 0)),
  // path: /lectures/html-and-css-frameworks/
  "v-3f1c560e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3f1c560e" */
    "./index.html-1f5e80ec.js"
  ), true ? [] : void 0)),
  // path: /lectures/internet-basics/
  "v-0026cf7f": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0026cf7f" */
    "./index.html-b8e48d43.js"
  ), true ? [] : void 0)),
  // path: /lectures/introduction-to-computers-and-programming/
  "v-0a07197e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0a07197e" */
    "./index.html-575e3ac0.js"
  ), true ? [] : void 0)),
  // path: /lectures/http-and-web-applications/
  "v-1195968e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1195968e" */
    "./index.html-7902d681.js"
  ), true ? [] : void 0)),
  // path: /lectures/jasmine-database/
  "v-984759d6": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-984759d6" */
    "./index.html-63411330.js"
  ), true ? [] : void 0)),
  // path: /lectures/java/
  "v-62bd9ca8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-62bd9ca8" */
    "./index.html-874e1bce.js"
  ), true ? [] : void 0)),
  // path: /lectures/json-web-tokens/
  "v-28429238": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-28429238" */
    "./index.html-5e570b84.js"
  ), true ? [] : void 0)),
  // path: /lectures/kotlin/
  "v-10617a26": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-10617a26" */
    "./index.html-de539279.js"
  ), true ? [] : void 0)),
  // path: /lectures/kotlin-asynchronous-operations/
  "v-1e37e1a9": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1e37e1a9" */
    "./index.html-62853cc1.js"
  ), true ? [] : void 0)),
  // path: /lectures/javascript-basics/
  "v-2801ad2a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2801ad2a" */
    "./index.html-22279de0.js"
  ), true ? [] : void 0)),
  // path: /lectures/layered-architecture-in-node-js/
  "v-7d0036a7": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7d0036a7" */
    "./index.html-bc3fc024.js"
  ), true ? [] : void 0)),
  // path: /lectures/node-js/
  "v-1df125fc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1df125fc" */
    "./index.html-407654e4.js"
  ), true ? [] : void 0)),
  // path: /lectures/npm/
  "v-24339936": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-24339936" */
    "./index.html-9741b569.js"
  ), true ? [] : void 0)),
  // path: /lectures/peters-feedback/
  "v-8994abb6": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-8994abb6" */
    "./index.html-eadc05fc.js"
  ), true ? [] : void 0)),
  // path: /lectures/python-abstraction/
  "v-e5ed128e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-e5ed128e" */
    "./index.html-0ee6b14c.js"
  ), true ? [] : void 0)),
  // path: /lectures/python-basics-part-1/
  "v-4ffdc4e0": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4ffdc4e0" */
    "./index.html-23e2ce3b.js"
  ), true ? [] : void 0)),
  // path: /lectures/python-basics-part-2/
  "v-4ffdc4ff": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4ffdc4ff" */
    "./index.html-1a711f28.js"
  ), true ? [] : void 0)),
  // path: /lectures/python-conditions/
  "v-66ca1407": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-66ca1407" */
    "./index.html-0c8aeb0f.js"
  ), true ? [] : void 0)),
  // path: /lectures/python-data-storage/
  "v-1e0b6f67": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1e0b6f67" */
    "./index.html-1d74956b.js"
  ), true ? [] : void 0)),
  // path: /lectures/python-dicts/
  "v-4c84d27c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4c84d27c" */
    "./index.html-acd9f3ea.js"
  ), true ? [] : void 0)),
  // path: /lectures/python-functions/
  "v-58147338": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-58147338" */
    "./index.html-31703a6a.js"
  ), true ? [] : void 0)),
  // path: /lectures/python-introduction/
  "v-b1010a36": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-b1010a36" */
    "./index.html-34b35d6b.js"
  ), true ? [] : void 0)),
  // path: /lectures/python-lists/
  "v-3128bcac": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3128bcac" */
    "./index.html-0ecf01f5.js"
  ), true ? [] : void 0)),
  // path: /lectures/python-loops/
  "v-308363a0": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-308363a0" */
    "./index.html-65727ebe.js"
  ), true ? [] : void 0)),
  // path: /lectures/python-modelling/
  "v-55debfe0": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-55debfe0" */
    "./index.html-2ba8b81c.js"
  ), true ? [] : void 0)),
  // path: /lectures/python-modules/
  "v-46c37ff8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-46c37ff8" */
    "./index.html-4d22ca1b.js"
  ), true ? [] : void 0)),
  // path: /lectures/python-object-oriented-programming/
  "v-645c8f3e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-645c8f3e" */
    "./index.html-7b046d3a.js"
  ), true ? [] : void 0)),
  // path: /lectures/python-strings/
  "v-54753746": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-54753746" */
    "./index.html-a0020109.js"
  ), true ? [] : void 0)),
  // path: /lectures/report-writing/
  "v-0157d02a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0157d02a" */
    "./index.html-31cab038.js"
  ), true ? [] : void 0)),
  // path: /lectures/rest-api-authorization/
  "v-f63179be": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-f63179be" */
    "./index.html-73d04bc1.js"
  ), true ? [] : void 0)),
  // path: /lectures/rest-api-basics/
  "v-5b18e8df": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5b18e8df" */
    "./index.html-dc90fc11.js"
  ), true ? [] : void 0)),
  // path: /lectures/rest-api-in-express/
  "v-f3dfd408": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-f3dfd408" */
    "./index.html-f9ea8bde.js"
  ), true ? [] : void 0)),
  // path: /lectures/same-origin-policy-and-cross-origin-resource-sharing/
  "v-14d2aae8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-14d2aae8" */
    "./index.html-37daf5a0.js"
  ), true ? [] : void 0)),
  // path: /lectures/scaling-databases/
  "v-2b690dde": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2b690dde" */
    "./index.html-2502dd63.js"
  ), true ? [] : void 0)),
  // path: /lectures/scaling-web-applications/
  "v-4be091cc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4be091cc" */
    "./index.html-ff9da2b5.js"
  ), true ? [] : void 0)),
  // path: /lectures/sop-and-cors/
  "v-c93553dc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-c93553dc" */
    "./index.html-1c2d818a.js"
  ), true ? [] : void 0)),
  // path: /lectures/sqlite/
  "v-bc0e457c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-bc0e457c" */
    "./index.html-b1a34878.js"
  ), true ? [] : void 0)),
  // path: /lectures/teamwork/
  "v-7e0b9ae0": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7e0b9ae0" */
    "./index.html-c0cdc940.js"
  ), true ? [] : void 0)),
  // path: /lectures/thesis-defense/
  "v-c7c21722": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-c7c21722" */
    "./index.html-a775c255.js"
  ), true ? [] : void 0)),
  // path: /lectures/thesis-proposals/
  "v-0cbcc1e4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0cbcc1e4" */
    "./index.html-1cf58f47.js"
  ), true ? [] : void 0)),
  // path: /lectures/third-party-authentication/
  "v-2a8c6e09": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2a8c6e09" */
    "./index.html-b87b6fbc.js"
  ), true ? [] : void 0)),
  // path: /lectures/uml-use-case-diagrams/
  "v-c804b61c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-c804b61c" */
    "./index.html-1c4d6e65.js"
  ), true ? [] : void 0)),
  // path: /lectures/using-cookies-and-sessions-in-express/
  "v-18f3cd95": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-18f3cd95" */
    "./index.html-c1c6bd48.js"
  ), true ? [] : void 0)),
  // path: /lectures/using-sequelize-in-node-js/
  "v-e9b2497a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-e9b2497a" */
    "./index.html-3dd662b4.js"
  ), true ? [] : void 0)),
  // path: /lectures/using-shells/
  "v-234b2462": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-234b2462" */
    "./index.html-8ad7107c.js"
  ), true ? [] : void 0)),
  // path: /lectures/using-sqlite-in-node-js/
  "v-bdc36168": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-bdc36168" */
    "./index.html-a8b09eed.js"
  ), true ? [] : void 0)),
  // path: /lectures/web-applications-in-express/
  "v-245ddad7": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-245ddad7" */
    "./index.html-5cfb62e8.js"
  ), true ? [] : void 0)),
  // path: /lectures/vue/
  "v-242c2fac": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-242c2fac" */
    "./index.html-4643d0db.js"
  ), true ? [] : void 0)),
  // path: /lectures/web-applications-in-node-js/
  "v-4c352c5a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4c352c5a" */
    "./index.html-135fe0ca.js"
  ), true ? [] : void 0)),
  // path: /lectures/web-cookies/
  "v-3fb714cc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3fb714cc" */
    "./index.html-60dbd6cc.js"
  ), true ? [] : void 0)),
  // path: /lectures/web-security/
  "v-1ea863d6": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1ea863d6" */
    "./index.html-5dfbd05c.js"
  ), true ? [] : void 0)),
  // path: /lectures/web-sessions/
  "v-3b29a058": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3b29a058" */
    "./index.html-2ea673e6.js"
  ), true ? [] : void 0)),
  // path: /lectures/writing-exam-answers/README.md.html
  "v-f4c42d50": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-f4c42d50" */
    "./README.md.html-2b212120.js"
  ), true ? [] : void 0)),
  // path: /courses/client-server-communication/exams/exam-2020-08-13.html
  "v-8b129efe": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-8b129efe" */
    "./exam-2020-08-13.html-9cfbf247.js"
  ), true ? [] : void 0)),
  // path: /courses/client-server-communication/exams/exam-2022-10-19.html
  "v-263d0810": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-263d0810" */
    "./exam-2022-10-19.html-d9044d32.js"
  ), true ? [] : void 0)),
  // path: /courses/client-server-communication/exams/exam-2023-01-08.html
  "v-d162d11e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-d162d11e" */
    "./exam-2023-01-08.html-6c29ec31.js"
  ), true ? [] : void 0)),
  // path: /courses/client-server-communication/exams/exam-2023-08-15.html
  "v-56155c48": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-56155c48" */
    "./exam-2023-08-15.html-189f773d.js"
  ), true ? [] : void 0)),
  // path: /courses/introduction-to-script-programming/exams/exam-2021-02-18.html
  "v-448d32ad": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-448d32ad" */
    "./exam-2021-02-18.html-b875c862.js"
  ), true ? [] : void 0)),
  // path: /courses/introduction-to-script-programming/exams/exam-2022-12-15.html
  "v-3b69bf4e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3b69bf4e" */
    "./exam-2022-12-15.html-be839048.js"
  ), true ? [] : void 0)),
  // path: /courses/introduction-to-script-programming/exams/exam-2023-02-15.html
  "v-4ed1f38e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4ed1f38e" */
    "./exam-2023-02-15.html-ddbd56ea.js"
  ), true ? [] : void 0)),
  // path: /courses/introduction-to-script-programming/exams/exam-2023-08-14.html
  "v-72909616": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-72909616" */
    "./exam-2023-08-14.html-e2707ff2.js"
  ), true ? [] : void 0)),
  // path: /lectures/svelte/
  "v-abc05e1a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-abc05e1a" */
    "./index.html-40a25fb2.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-advanced-concepts/exams/exam-2021-08-22.html
  "v-2f725a65": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2f725a65" */
    "./exam-2021-08-22.html-603dbeb5.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-advanced-concepts/exams/exam-2023-03-23.html
  "v-5b3452bd": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5b3452bd" */
    "./exam-2023-03-23.html-ab5e65ca.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-advanced-concepts/exams/exam-2023-06-12.html
  "v-3d32e840": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3d32e840" */
    "./exam-2023-06-12.html-221b9982.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-advanced-concepts/exams/exam-2023-08-20.html
  "v-3b6bf3e5": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3b6bf3e5" */
    "./exam-2023-08-20.html-0e046958.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-fundamentals/exams/exam-2021-08-16.html
  "v-d8d0c3dc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-d8d0c3dc" */
    "./exam-2021-08-16.html-8083e2ec.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-fundamentals/exams/exam-2022-10-20.html
  "v-1818640f": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1818640f" */
    "./exam-2022-10-20.html-fabb10b4.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-fundamentals/exams/exam-2023-01-14.html
  "v-dc9ba2ea": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-dc9ba2ea" */
    "./exam-2023-01-14.html-ba7ba064.js"
  ), true ? [] : void 0)),
  // path: /courses/web-development-fundamentals/exams/exam-2023-08-16.html
  "v-ba0a2e60": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-ba0a2e60" */
    "./exam-2023-08-16.html-4f28f5bb.js"
  ), true ? [] : void 0)),
  // path: /404.html
  "v-3706649a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./404.html-61da4fbc.js"
  ), true ? [] : void 0))
};
var layoutsSymbol = Symbol(
  ""
);
var pagesData = ref(pagesData$1);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  headers: []
});
var pageData = ref(pageDataEmpty);
var usePageData = () => pageData;
var pageFrontmatterSymbol = Symbol(
  ""
);
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol(
  ""
);
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol(
  ""
);
var pageLangSymbol = Symbol(
  ""
);
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var pageLayoutSymbol = Symbol(
  ""
);
var usePageLayout = () => {
  const pageLayout = inject(pageLayoutSymbol);
  if (!pageLayout) {
    throw new Error("usePageLayout() is called without provider.");
  }
  return pageLayout;
};
var routeLocaleSymbol = Symbol(
  ""
);
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var useSiteData = () => siteData;
var siteLocaleDataSymbol = Symbol(
  ""
);
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var updateHeadSymbol = Symbol(
  ""
);
var LAYOUT_NAME_DEFAULT = "Layout";
var LAYOUT_NAME_NOT_FOUND = "NotFound";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Resolve page data according to page key
   */
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 ?? pageDataEmpty;
  },
  /**
   * Resolve page frontmatter from page data
   */
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray$1(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (page, siteLocale) => [page.title, siteLocale.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (page) => page.lang || "en",
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (page, layouts) => {
    let layoutName;
    if (page.path) {
      const frontmatterLayout = page.frontmatter.layout;
      if (isString(frontmatterLayout)) {
        layoutName = frontmatterLayout;
      } else {
        layoutName = LAYOUT_NAME_DEFAULT;
      }
    } else {
      layoutName = LAYOUT_NAME_NOT_FOUND;
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b;
      return isMounted.value ? (_b = (_a2 = ctx.slots).default) == null ? void 0 : _b.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page = usePageData();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page.value.key]
    );
    return () => pageComponent.value ? (
      // use page component
      h(pageComponent.value)
    ) : (
      // fallback content
      h(
        "div",
        "404 Not Found"
      )
    );
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/course-material/"}${removeLeadingSlash(url)}`;
};
function r(r2, e, n) {
  var i, t, o;
  void 0 === e && (e = 50), void 0 === n && (n = {});
  var a = null != (i = n.isImmediate) && i, u = null != (t = n.callback) && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (void 0 !== c) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && void 0 === o;
      if (void 0 !== o && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    void 0 !== o && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
let supported;
let perf;
function isPerformanceSupported() {
  var _a2;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else if (typeof global !== "undefined" && ((_a2 = global.perf_hooks) === null || _a2 === void 0 ? void 0 : _a2.performance)) {
    supported = true;
    perf = global.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
class ApiProxy {
  constructor(plugin, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin.settings) {
      for (const id in plugin.settings) {
        const item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve2) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: resolve2
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target) {
    this.target = target;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
}
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy)
      setupFn(proxy.proxiedTarget);
  }
}
/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = isArray(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop$1 = () => {
};
const isArray = Array.isArray;
function warn(msg) {
  const args = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + msg].concat(args));
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const hashPos = location2.indexOf("#");
  let searchPos = location2.indexOf("?");
  if (hashPos < searchPos && hashPos >= 0) {
    searchPos = -1;
  }
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base) {
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
    return pathname;
  return pathname.slice(base.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a, b) {
  const aLastIndex = a.matched.length - 1;
  const bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length)
    return false;
  for (const key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b) {
  return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
  return isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!from.startsWith("/")) {
    warn(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
    return to;
  }
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  const lastToSegment = toSegments[toSegments.length - 1];
  if (lastToSegment === ".." || lastToSegment === ".") {
    toSegments.push("");
  }
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (segment === ".")
      continue;
    if (segment === "..") {
      if (position > 1)
        position--;
    } else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base = "/";
    }
  }
  if (base[0] !== "/" && base[0] !== "#")
    base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location2) {
  return base.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset2) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset2.behavior,
    left: elRect.left - docRect.left - (offset2.left || 0),
    top: elRect.top - docRect.top - (offset2.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    if (typeof position.el === "string") {
      if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
        try {
          const foundEl = document.querySelector(position.el);
          if (isIdSelector && foundEl) {
            warn(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
            return;
          }
        } catch (err) {
          warn(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
          return;
        }
      }
    }
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      warn(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base, location2) {
  const { pathname, search, hash } = location2;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base);
  return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index2 = listeners.indexOf(callback);
      if (index2 > -1)
        listeners.splice(index2, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener, {
    passive: true
  });
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      // the length is off by one, we need to decrease it
      position: history2.length - 1,
      replaced: true,
      // don't add a scroll as the user may have an anchor, and we want
      // scrollBehavior to be triggered without a saved position
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        warn("Error with push/replace State", err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    const state = assign({}, history2.state, buildState(
      historyState.value.back,
      // keep back and forward entries but override current position
      to,
      historyState.value.forward,
      true
    ), data, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      historyState.value,
      history2.state,
      {
        forward: to,
        scroll: computeScrollPosition()
      }
    );
    if (!history2.state) {
      warn(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`);
    }
    changeLocation(currentState.current, currentState, true);
    const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base) {
  base = normalizeBase(base);
  const historyNavigation = useHistoryStateNavigation(base);
  const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    // it's overridden right after
    location: "",
    base,
    go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = Symbol("navigation failure");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
const ErrorTypeMessages = {
  [
    1
    /* ErrorTypes.MATCHER_NOT_FOUND */
  ]({ location: location2, currentLocation }) {
    return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
  },
  [
    2
    /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
  ]({ from, to }) {
    return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
  },
  [
    4
    /* ErrorTypes.NAVIGATION_ABORTED */
  ]({ from, to }) {
    return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
  },
  [
    8
    /* ErrorTypes.NAVIGATION_CANCELLED */
  ]({ from, to }) {
    return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
  },
  [
    16
    /* ErrorTypes.NAVIGATION_DUPLICATED */
  ]({ from, to }) {
    return `Avoided redundant navigation to current location: "${from.fullPath}".`;
  }
};
function createRouterError(type, params) {
  {
    return assign(new Error(ErrorTypeMessages[type](params)), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const propertiesToLog = ["params", "query", "hash"];
function stringifyRoute(to) {
  if (typeof to === "string")
    return to;
  if ("path" in to)
    return to.path;
  const location2 = {};
  for (const key of propertiesToLog) {
    if (key in to)
      location2[key] = to[key];
  }
  return JSON.stringify(location2, null, 2);
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [
      90
      /* PathScore.Root */
    ];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i = 1; i < match.length; i++) {
      const value = match[i] || "";
      const key = keys[i - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (isArray(param) && !repeatable) {
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          }
          const text = isArray(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path || "/";
  }
  return {
    re,
    score,
    keys,
    parse,
    stringify
  };
}
function compareScoreArray(a, b) {
  let i = 0;
  while (i < a.length && i < b.length) {
    const diff = b[i] - a[i];
    if (diff)
      return diff;
    i++;
  }
  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a, b) {
  let i = 0;
  const aScore = a.score;
  const bScore = b.score;
  while (i < aScore.length && i < bScore.length) {
    const comp = compareScoreArray(aScore[i], bScore[i]);
    if (comp)
      return comp;
    i++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(
      `Route paths should start with a "/": "${path}" should be "/${path}".`
    );
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer2}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i = 0;
  let char;
  let buffer2 = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer2)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer2
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer2}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer2,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer2 = "";
  }
  function addCharToBuffer() {
    buffer2 += char;
  }
  while (i < path.length) {
    char = path[i++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer2) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer2}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  {
    const existingKeys = /* @__PURE__ */ new Set();
    for (const key of parser.keys) {
      if (existingKeys.has(key.name))
        warn(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
      existingKeys.add(key.name);
    }
  }
  const matcher = assign(parser, {
    record,
    parent,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    {
      checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent);
    }
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign({}, mainNormalizedRecord, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          // we might be the child of an alias
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      if (normalizedRecord.path === "*") {
        throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\nSee more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (parent && path[0] === "/")
        checkMissingParamsInAbsolutePath(matcher, parent);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
        {
          checkSameParams(originalRecord, matcher);
        }
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      }
      originalRecord = originalRecord || matcher;
      if (matcher.record.components && Object.keys(matcher.record.components).length || matcher.record.name || matcher.record.redirect) {
        insertMatcher(matcher);
      }
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop$1;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index2 = matchers.indexOf(matcherRef);
      if (index2 > -1) {
        matchers.splice(index2, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i = 0;
    while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
      i++;
    matchers.splice(i, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      {
        const invalidParams = Object.keys(location2.params || {}).filter((paramName) => !matcher.keys.find((k) => k.name === paramName));
        if (invalidParams.length) {
          warn(`Discarded invalid param(s) "${invalidParams.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
        }
      }
      name = matcher.record.name;
      params = assign(
        // paramsFromLocation is a new object
        paramsFromLocation(
          currentLocation.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          matcher.keys.filter((k) => !k.optional).map((k) => k.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        location2.params && paramsFromLocation(location2.params, matcher.keys.map((k) => k.name))
      );
      path = matcher.stringify(params);
    } else if ("path" in location2) {
      path = location2.path;
      if (!path.startsWith("/")) {
        warn(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`);
      }
      matcher = matchers.find((m) => m.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes.forEach((route) => addRoute(route));
  return { addRoute, resolve: resolve2, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || null : record.component && { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "boolean" ? props : props[name];
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
function isSameParam(a, b) {
  return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
}
function checkSameParams(a, b) {
  for (const key of a.keys) {
    if (!key.optional && !b.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
  }
  for (const key of b.keys) {
    if (!key.optional && !a.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
  }
}
function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent) {
  if (parent && parent.record.name && !mainNormalizedRecord.name && !mainNormalizedRecord.path) {
    warn(`The route named "${String(parent.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
  }
}
function checkMissingParamsInAbsolutePath(record, parent) {
  for (const key of parent.keys) {
    if (!record.keys.find(isSameParam.bind(null, key)))
      return warn(`Absolute path "${record.record.path}" must have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
  }
}
function isRecordChildOf(record, parent) {
  return parent.children.some((child) => child === record || isRecordChildOf(record, child));
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
    warn(`Error decoding "${text}". Using original value`);
  }
  return "" + text;
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
const matchedRouteKey = Symbol("router view location matched");
const viewDepthKey = Symbol("router view depth");
const routerKey = Symbol("router");
const routeLocationKey = Symbol("route location");
const routerViewLocationKey = Symbol("router view location");
function useCallbacks() {
  let handlers2 = [];
  function add2(handler) {
    handlers2.push(handler);
    return () => {
      const i = handlers2.indexOf(handler);
      if (i > -1)
        handlers2.splice(i, 1);
    };
  }
  function reset() {
    handlers2 = [];
  }
  return {
    add: add2,
    list: () => handlers2,
    reset
  };
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && // name is defined if record is because of the function overload
  (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false) {
        reject(createRouterError(4, {
          from,
          to
        }));
      } else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
        record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
          enterCallbackArray.push(valid);
        }
        resolve2();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, canOnlyBeCalledOnce(next, to, from));
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    if (guard.length > 2) {
      const message = `The "next" callback was never called inside of ${guard.name ? '"' + guard.name + '"' : ""}:
${guard.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof guardReturn === "object" && "then" in guardReturn) {
        guardCall = guardCall.then((resolvedValue) => {
          if (!next._called) {
            warn(message);
            return Promise.reject(new Error("Invalid navigation guard"));
          }
          return resolvedValue;
        });
      } else if (guardReturn !== void 0) {
        if (!next._called) {
          warn(message);
          reject(new Error("Invalid navigation guard"));
          return;
        }
      }
    }
    guardCall.catch((err) => reject(err));
  });
}
function canOnlyBeCalledOnce(next, to, from) {
  let called = 0;
  return function() {
    if (called++ === 1)
      warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
    next._called = true;
    if (called === 1)
      next.apply(null, arguments);
  };
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    if (!record.components && !record.children.length) {
      warn(`Record with path "${record.path}" is either missing a "component(s)" or "children" property.`);
    }
    for (const name in record.components) {
      let rawComponent = record.components[name];
      {
        if (!rawComponent || typeof rawComponent !== "object" && typeof rawComponent !== "function") {
          warn(`Component "${name}" in record with path "${record.path}" is not a valid component. Received "${String(rawComponent)}".`);
          throw new Error("Invalid route component");
        } else if ("then" in rawComponent) {
          warn(`Component "${name}" in record with path "${record.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const promise2 = rawComponent;
          rawComponent = () => promise2;
        } else if (rawComponent.__asyncLoader && // warn only once per component
        !rawComponent.__warnedDefineAsync) {
          rawComponent.__warnedDefineAsync = true;
          warn(`Component "${name}" in record with path "${record.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`);
        }
      }
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        if (!("catch" in componentPromise)) {
          warn(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
          componentPromise = Promise.resolve(componentPromise);
        }
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props) {
  const router = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index2 > -1)
      return index2;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2
    );
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e)) {
      return router[unref(props.replace) ? "replace" : "push"](
        unref(props.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(noop$1);
    }
    return Promise.resolve();
  }
  if (isBrowser) {
    const instance = getCurrentInstance();
    if (instance) {
      const linkContextDevtools = {
        route: route.value,
        isActive: isActive.value,
        isExactActive: isExactActive.value
      };
      instance.__vrl_devtools = instance.__vrl_devtools || [];
      instance.__vrl_devtools.push(linkContextDevtools);
      watchEffect(() => {
        linkContextDevtools.route = route.value;
        linkContextDevtools.isActive = isActive.value;
        linkContextDevtools.isExactActive = isExactActive.value;
      }, { flush: "post" });
    }
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    return;
  if (e.defaultPrevented)
    return;
  if (e.button !== void 0 && e.button !== 0)
    return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e.preventDefault)
    e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    warnDeprecatedUsage();
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const injectedDepth = inject(viewDepthKey, 0);
    const depth = computed(() => {
      let initialDepth = unref(injectedDepth);
      const { matched } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
        initialDepth++;
      }
      return initialDepth;
    });
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
    provide(viewDepthKey, computed(() => depth.value + 1));
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && // if there is no instance but to and from are the same this might be
      // the first visit
      (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const currentName = props.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      if (isBrowser && component.ref) {
        const info = {
          depth: depth.value,
          name: matchedRoute.name,
          path: matchedRoute.path,
          meta: matchedRoute.meta
        };
        const internalInstances = isArray(component.ref) ? component.ref.map((r2) => r2.i) : [component.ref.i];
        internalInstances.forEach((instance) => {
          instance.__vrv_devtools = info;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, { Component: component, route }) || component
      );
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function warnDeprecatedUsage() {
  const instance = getCurrentInstance();
  const parentName = instance.parent && instance.parent.type.name;
  const parentSubTreeType = instance.parent && instance.parent.subTree && instance.parent.subTree.type;
  if (parentName && (parentName === "KeepAlive" || parentName.includes("Transition")) && typeof parentSubTreeType === "object" && parentSubTreeType.name === "RouterView") {
    const comp = parentName === "KeepAlive" ? "keep-alive" : "transition";
    warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${comp}>
    <component :is="Component" />
  </${comp}>
</router-view>`);
  }
}
function formatRouteLocation(routeLocation, tooltip) {
  const copy = assign({}, routeLocation, {
    // remove variables that can contain vue instances
    matched: routeLocation.matched.map((matched) => omit(matched, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: true,
      display: routeLocation.fullPath,
      tooltip,
      value: copy
    }
  };
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
let routerId = 0;
function addDevtools(app, router, matcher) {
  if (router.__hasDevtools)
    return;
  router.__hasDevtools = true;
  const id = routerId++;
  setupDevtoolsPlugin({
    id: "org.vuejs.router" + (id ? "." + id : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app
  }, (api) => {
    if (typeof api.now !== "function") {
      console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
    }
    api.on.inspectComponent((payload, ctx) => {
      if (payload.instanceData) {
        payload.instanceData.state.push({
          type: "Routing",
          key: "$route",
          editable: false,
          value: formatRouteLocation(router.currentRoute.value, "Current Route")
        });
      }
    });
    api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
      if (componentInstance.__vrv_devtools) {
        const info = componentInstance.__vrv_devtools;
        node.tags.push({
          label: (info.name ? `${info.name.toString()}: ` : "") + info.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: PINK_500
        });
      }
      if (isArray(componentInstance.__vrl_devtools)) {
        componentInstance.__devtoolsApi = api;
        componentInstance.__vrl_devtools.forEach((devtoolsData) => {
          let backgroundColor = ORANGE_400;
          let tooltip = "";
          if (devtoolsData.isExactActive) {
            backgroundColor = LIME_500;
            tooltip = "This is exactly active";
          } else if (devtoolsData.isActive) {
            backgroundColor = BLUE_600;
            tooltip = "This link is active";
          }
          node.tags.push({
            label: devtoolsData.route.path,
            textColor: 0,
            tooltip,
            backgroundColor
          });
        });
      }
    });
    watch(router.currentRoute, () => {
      refreshRoutesView();
      api.notifyComponentUpdate();
      api.sendInspectorTree(routerInspectorId);
      api.sendInspectorState(routerInspectorId);
    });
    const navigationsLayerId = "router:navigations:" + id;
    api.addTimelineLayer({
      id: navigationsLayerId,
      label: `Router${id ? " " + id : ""} Navigations`,
      color: 4237508
    });
    router.onError((error, to) => {
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "Error during Navigation",
          subtitle: to.fullPath,
          logType: "error",
          time: api.now(),
          data: { error },
          groupId: to.meta.__navigationId
        }
      });
    });
    let navigationId = 0;
    router.beforeEach((to, from) => {
      const data = {
        guard: formatDisplay("beforeEach"),
        from: formatRouteLocation(from, "Current Location during this navigation"),
        to: formatRouteLocation(to, "Target location")
      };
      Object.defineProperty(to.meta, "__navigationId", {
        value: navigationId++
      });
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          time: api.now(),
          title: "Start of navigation",
          subtitle: to.fullPath,
          data,
          groupId: to.meta.__navigationId
        }
      });
    });
    router.afterEach((to, from, failure) => {
      const data = {
        guard: formatDisplay("afterEach")
      };
      if (failure) {
        data.failure = {
          _custom: {
            type: Error,
            readOnly: true,
            display: failure ? failure.message : "",
            tooltip: "Navigation Failure",
            value: failure
          }
        };
        data.status = formatDisplay("❌");
      } else {
        data.status = formatDisplay("✅");
      }
      data.from = formatRouteLocation(from, "Current Location during this navigation");
      data.to = formatRouteLocation(to, "Target location");
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "End of navigation",
          subtitle: to.fullPath,
          time: api.now(),
          data,
          logType: failure ? "warning" : "default",
          groupId: to.meta.__navigationId
        }
      });
    });
    const routerInspectorId = "router-inspector:" + id;
    api.addInspector({
      id: routerInspectorId,
      label: "Routes" + (id ? " " + id : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function refreshRoutesView() {
      if (!activeRoutesPayload)
        return;
      const payload = activeRoutesPayload;
      let routes = matcher.getRoutes().filter((route) => !route.parent);
      routes.forEach(resetMatchStateOnRouteRecord);
      if (payload.filter) {
        routes = routes.filter((route) => (
          // save matches state based on the payload
          isRouteMatching(route, payload.filter.toLowerCase())
        ));
      }
      routes.forEach((route) => markRouteRecordActive(route, router.currentRoute.value));
      payload.rootNodes = routes.map(formatRouteRecordForInspector);
    }
    let activeRoutesPayload;
    api.on.getInspectorTree((payload) => {
      activeRoutesPayload = payload;
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        refreshRoutesView();
      }
    });
    api.on.getInspectorState((payload) => {
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        const routes = matcher.getRoutes();
        const route = routes.find((route2) => route2.record.__vd_id === payload.nodeId);
        if (route) {
          payload.state = {
            options: formatRouteRecordMatcherForStateInspector(route)
          };
        }
      }
    });
    api.sendInspectorTree(routerInspectorId);
    api.sendInspectorState(routerInspectorId);
  });
}
function modifierForKey(key) {
  if (key.optional) {
    return key.repeatable ? "*" : "?";
  } else {
    return key.repeatable ? "+" : "";
  }
}
function formatRouteRecordMatcherForStateInspector(route) {
  const { record } = route;
  const fields = [
    { editable: false, key: "path", value: record.path }
  ];
  if (record.name != null) {
    fields.push({
      editable: false,
      key: "name",
      value: record.name
    });
  }
  fields.push({ editable: false, key: "regexp", value: route.re });
  if (route.keys.length) {
    fields.push({
      editable: false,
      key: "keys",
      value: {
        _custom: {
          type: null,
          readOnly: true,
          display: route.keys.map((key) => `${key.name}${modifierForKey(key)}`).join(" "),
          tooltip: "Param keys",
          value: route.keys
        }
      }
    });
  }
  if (record.redirect != null) {
    fields.push({
      editable: false,
      key: "redirect",
      value: record.redirect
    });
  }
  if (route.alias.length) {
    fields.push({
      editable: false,
      key: "aliases",
      value: route.alias.map((alias) => alias.record.path)
    });
  }
  if (Object.keys(route.record.meta).length) {
    fields.push({
      editable: false,
      key: "meta",
      value: route.record.meta
    });
  }
  fields.push({
    key: "score",
    editable: false,
    value: {
      _custom: {
        type: null,
        readOnly: true,
        display: route.score.map((score) => score.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: route.score
      }
    }
  });
  return fields;
}
const PINK_500 = 15485081;
const BLUE_600 = 2450411;
const LIME_500 = 8702998;
const CYAN_400 = 2282478;
const ORANGE_400 = 16486972;
const DARK = 6710886;
function formatRouteRecordForInspector(route) {
  const tags = [];
  const { record } = route;
  if (record.name != null) {
    tags.push({
      label: String(record.name),
      textColor: 0,
      backgroundColor: CYAN_400
    });
  }
  if (record.aliasOf) {
    tags.push({
      label: "alias",
      textColor: 0,
      backgroundColor: ORANGE_400
    });
  }
  if (route.__vd_match) {
    tags.push({
      label: "matches",
      textColor: 0,
      backgroundColor: PINK_500
    });
  }
  if (route.__vd_exactActive) {
    tags.push({
      label: "exact",
      textColor: 0,
      backgroundColor: LIME_500
    });
  }
  if (route.__vd_active) {
    tags.push({
      label: "active",
      textColor: 0,
      backgroundColor: BLUE_600
    });
  }
  if (record.redirect) {
    tags.push({
      label: typeof record.redirect === "string" ? `redirect: ${record.redirect}` : "redirects",
      textColor: 16777215,
      backgroundColor: DARK
    });
  }
  let id = record.__vd_id;
  if (id == null) {
    id = String(routeRecordId++);
    record.__vd_id = id;
  }
  return {
    id,
    label: record.path,
    tags,
    children: route.children.map(formatRouteRecordForInspector)
  };
}
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
  const isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
  route.__vd_exactActive = route.__vd_active = isExactActive;
  if (!isExactActive) {
    route.__vd_active = currentRoute.matched.some((match) => isSameRouteRecord(match, route.record));
  }
  route.children.forEach((childRoute) => markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
  route.__vd_match = false;
  route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
  const found = String(route.re).match(EXTRACT_REGEXP_RE);
  route.__vd_match = false;
  if (!found || found.length < 3) {
    return false;
  }
  const nonEndingRE = new RegExp(found[1].replace(/\$$/, ""), found[2]);
  if (nonEndingRE.test(filter)) {
    route.children.forEach((child) => isRouteMatching(child, filter));
    if (route.record.path !== "/" || filter === "/") {
      route.__vd_match = route.re.test(filter);
      return true;
    }
    return false;
  }
  const path = route.record.path.toLowerCase();
  const decodedPath = decode(path);
  if (!filter.startsWith("/") && (decodedPath.includes(filter) || path.includes(filter)))
    return true;
  if (decodedPath.startsWith(filter) || path.startsWith(filter))
    return true;
  if (route.record.name && String(route.record.name).includes(filter))
    return true;
  return route.children.some((child) => isRouteMatching(child, filter));
}
function omit(obj, keys) {
  const ret = {};
  for (const key in obj) {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
}
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  if (!routerHistory)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = (
    // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode)
  );
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    } else {
      warn(`Cannot remove non-existent route "${String(name)}"`);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      {
        if (href2.startsWith("//"))
          warn(`Location "${rawLocation}" resolved to "${href2}". A resolved location cannot start with multiple slashes.`);
        else if (!matchedRoute2.matched.length) {
          warn(`No match found for location with path "${rawLocation}"`);
        }
      }
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      if ("params" in rawLocation && !("name" in rawLocation) && // @ts-expect-error: the type is never
      Object.keys(rawLocation.params).length) {
        warn(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
      }
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(targetParams)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    if (hash && !hash.startsWith("#")) {
      warn(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
    }
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    {
      if (href.startsWith("//")) {
        warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
      } else if (!matchedRoute.matched.length) {
        warn(`No match found for location with path "${"path" in rawLocation ? rawLocation.path : rawLocation}"`);
      }
    }
    return assign({
      fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      )
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : (
          // force empty params
          { path: newTargetLocation }
        );
        newTargetLocation.params = {};
      }
      if (!("path" in newTargetLocation) && !("name" in newTargetLocation)) {
        warn(`Invalid redirect found:
${JSON.stringify(newTargetLocation, null, 2)}
 when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
        throw new Error("Invalid redirect");
      }
      return assign({
        query: to.query,
        hash: to.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in newTargetLocation ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(
        assign(locationAsObject(shouldRedirect), {
          state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
          force,
          replace: replace2
        }),
        // keep original redirectedFrom if it exists
        redirectedFrom || targetLocation
      );
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(
        from,
        from,
        // this is a push, the only way for it to be triggered from a
        // history.listen is with a redirect, which makes it become a push
        true,
        // This cannot be the first navigation because the initial location
        // cannot be manually navigated to
        false
      );
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? (
      // navigation redirects still mark the router as ready
      isNavigationFailure(
        error,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? error : markAsReady(error)
    ) : (
      // reject any unknown error
      triggerError(error, toLocation, from)
    )).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(
          failure2,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          if (
            // we are redirecting to the same location we were already at
            isSameRouteLocation(stringifyQuery$1, resolve2(failure2.to), toLocation) && // and we have done it a couple of times
            redirectedFrom && // @ts-expect-error: added only in dev
            (redirectedFrom._count = redirectedFrom._count ? (
              // @ts-expect-error
              redirectedFrom._count + 1
            ) : 1) > 30
          ) {
            warn(`Detected a possibly infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`);
            return Promise.reject(new Error("Infinite redirect in navigation guard"));
          }
          return pushWithRedirect(
            // keep options
            assign({
              // preserve an existing replacement but allow the redirect to override it
              replace: replace2
            }, locationAsObject(failure2.to), {
              state: typeof failure2.to === "object" ? assign({}, data, failure2.to.state) : data,
              force
            }),
            // preserve the original redirectedFrom if any
            redirectedFrom || toLocation
          );
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function runWithContext(fn) {
    const app = installedApps.values().next().value;
    return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of to.matched) {
        if (record.beforeEnter && !from.matched.includes(record)) {
          if (isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(
      err,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    for (const guard of afterGuards.list()) {
      runWithContext(() => guard(to, from, failure));
    }
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      if (!router.listening)
        return;
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop$1);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(
          error,
          4 | 8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        )) {
          return error;
        }
        if (isNavigationFailure(
          error,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          pushWithRedirect(
            error.to,
            toLocation
            // avoid an uncaught rejection, let push call triggerError
          ).then((failure) => {
            if (isNavigationFailure(
              failure,
              4 | 16
              /* ErrorTypes.NAVIGATION_DUPLICATED */
            ) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop$1);
          return Promise.reject();
        }
        if (info.delta) {
          routerHistory.go(-info.delta, false);
        }
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(
          // after navigation, all matched components are resolved
          toLocation,
          from,
          false
        );
        if (failure) {
          if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
          // entry while a different route is displayed
          !isNavigationFailure(
            failure,
            8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          )) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(
            failure,
            4 | 16
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          )) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop$1);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorHandlers.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      {
        warn("uncaught error during route navigation:");
      }
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve3, reject) => {
      readyHandlers.add([resolve3, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app) {
      const router2 = this;
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router2;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
          warn("Unexpected error when starting the router:", err);
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        reactiveRoute[key] = computed(() => currentRoute.value[key]);
      }
      app.provide(routerKey, router2);
      app.provide(routeLocationKey, reactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
      if (isBrowser) {
        addDevtools(app, router2, matcher);
      }
    }
  };
  function runGuardQueue(guards) {
    return guards.reduce((promise2, guard) => promise2.then(() => runWithContext(guard)), Promise.resolve());
  }
  return router;
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i = 0; i < len; i++) {
    const recordFrom = from.matched[i];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
function useRoute() {
  return inject(routeLocationKey);
}
const useActiveHeaderLinks = ({ headerLinkSelector: headerLinkSelector2, headerAnchorSelector: headerAnchorSelector2, delay: delay2, offset: offset2 = 5 }) => {
  const router = useRouter();
  const setActiveRouteHash = () => {
    var _a2, _b;
    const scrollTop = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop);
    const isAtPageTop = Math.abs(scrollTop - 0) < offset2;
    if (isAtPageTop) {
      updateHash(router, "");
      return;
    }
    const scrollBottom = window.innerHeight + scrollTop;
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const isAtPageBottom = Math.abs(scrollHeight - scrollBottom) < offset2;
    const headerLinks = Array.from(document.querySelectorAll(headerLinkSelector2));
    const headerAnchors = Array.from(document.querySelectorAll(headerAnchorSelector2));
    const existedHeaderAnchors = headerAnchors.filter((anchor) => headerLinks.some((link) => link.hash === anchor.hash));
    for (let i = 0; i < existedHeaderAnchors.length; i++) {
      const anchor = existedHeaderAnchors[i];
      const nextAnchor = existedHeaderAnchors[i + 1];
      const hasPassedCurrentAnchor = scrollTop >= (((_a2 = anchor.parentElement) == null ? void 0 : _a2.offsetTop) ?? 0) - offset2;
      const hasNotPassedNextAnchor = !nextAnchor || scrollTop < (((_b = nextAnchor.parentElement) == null ? void 0 : _b.offsetTop) ?? 0) - offset2;
      const isActive = hasPassedCurrentAnchor && hasNotPassedNextAnchor;
      if (!isActive)
        continue;
      const routeHash = decodeURIComponent(router.currentRoute.value.hash);
      const anchorHash = decodeURIComponent(anchor.hash);
      if (routeHash === anchorHash)
        return;
      if (isAtPageBottom) {
        for (let j = i + 1; j < existedHeaderAnchors.length; j++) {
          if (routeHash === decodeURIComponent(existedHeaderAnchors[j].hash)) {
            return;
          }
        }
      }
      updateHash(router, anchorHash);
      return;
    }
  };
  const onScroll = r(setActiveRouteHash, delay2);
  onMounted(() => {
    window.addEventListener("scroll", onScroll);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll);
  });
};
const updateHash = async (router, hash) => {
  const { scrollBehavior } = router.options;
  router.options.scrollBehavior = void 0;
  await router.replace({
    query: router.currentRoute.value.query,
    hash,
    force: true
  }).finally(() => router.options.scrollBehavior = scrollBehavior);
};
const headerLinkSelector = "a.sidebar-item";
const headerAnchorSelector = ".header-anchor";
const delay$1 = 300;
const offset = 5;
const clientConfig0 = defineClientConfig({
  setup() {
    useActiveHeaderLinks({
      headerLinkSelector,
      headerAnchorSelector,
      delay: delay$1,
      offset
    });
  }
});
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
const vars$3 = "";
const backToTop = "";
const BackToTop = defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = ref(0);
    const show = computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => h(Transition, {
      name: "back-to-top"
    }, () => show.value ? backToTopEl : null);
  }
});
const clientConfig1 = defineClientConfig({
  rootComponents: [BackToTop]
});
const vars$2 = "";
const externalLinkIcon = "";
const svg = h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h("span", [
      svg,
      h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = { "/": { "openInNewWindow": "open in new window" } };
const clientConfig2 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h(ExternalLinkIcon, { locales }));
  }
});
/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var isSupported = function isSupported2(node) {
  return node.tagName === "IMG";
};
var isNodeList = function isNodeList2(selector2) {
  return NodeList.prototype.isPrototypeOf(selector2);
};
var isNode = function isNode2(selector2) {
  return selector2 && selector2.nodeType === 1;
};
var isSvg = function isSvg2(image) {
  var source = image.currentSrc || image.src;
  return source.substr(-4).toLowerCase() === ".svg";
};
var getImagesFromSelector = function getImagesFromSelector2(selector2) {
  try {
    if (Array.isArray(selector2)) {
      return selector2.filter(isSupported);
    }
    if (isNodeList(selector2)) {
      return [].slice.call(selector2).filter(isSupported);
    }
    if (isNode(selector2)) {
      return [selector2].filter(isSupported);
    }
    if (typeof selector2 === "string") {
      return [].slice.call(document.querySelectorAll(selector2)).filter(isSupported);
    }
    return [];
  } catch (err) {
    throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
  }
};
var createOverlay = function createOverlay2(background) {
  var overlay = document.createElement("div");
  overlay.classList.add("medium-zoom-overlay");
  overlay.style.background = background;
  return overlay;
};
var cloneTarget = function cloneTarget2(template) {
  var _template$getBounding = template.getBoundingClientRect(), top = _template$getBounding.top, left = _template$getBounding.left, width = _template$getBounding.width, height = _template$getBounding.height;
  var clone = template.cloneNode();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  clone.removeAttribute("id");
  clone.style.position = "absolute";
  clone.style.top = top + scrollTop + "px";
  clone.style.left = left + scrollLeft + "px";
  clone.style.width = width + "px";
  clone.style.height = height + "px";
  clone.style.transform = "";
  return clone;
};
var createCustomEvent = function createCustomEvent2(type, params) {
  var eventParams = _extends({
    bubbles: false,
    cancelable: false,
    detail: void 0
  }, params);
  if (typeof window.CustomEvent === "function") {
    return new CustomEvent(type, eventParams);
  }
  var customEvent = document.createEvent("CustomEvent");
  customEvent.initCustomEvent(type, eventParams.bubbles, eventParams.cancelable, eventParams.detail);
  return customEvent;
};
var mediumZoom$1 = function mediumZoom(selector2) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var Promise2 = window.Promise || function Promise3(fn) {
    function noop2() {
    }
    fn(noop2, noop2);
  };
  var _handleClick = function _handleClick2(event) {
    var target = event.target;
    if (target === overlay) {
      close();
      return;
    }
    if (images.indexOf(target) === -1) {
      return;
    }
    toggle({ target });
  };
  var _handleScroll = function _handleScroll2() {
    if (isAnimating || !active.original) {
      return;
    }
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (Math.abs(scrollTop - currentScroll) > zoomOptions2.scrollOffset) {
      setTimeout(close, 150);
    }
  };
  var _handleKeyUp = function _handleKeyUp2(event) {
    var key = event.key || event.keyCode;
    if (key === "Escape" || key === "Esc" || key === 27) {
      close();
    }
  };
  var update = function update2() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var newOptions = options2;
    if (options2.background) {
      overlay.style.background = options2.background;
    }
    if (options2.container && options2.container instanceof Object) {
      newOptions.container = _extends({}, zoomOptions2.container, options2.container);
    }
    if (options2.template) {
      var template = isNode(options2.template) ? options2.template : document.querySelector(options2.template);
      newOptions.template = template;
    }
    zoomOptions2 = _extends({}, zoomOptions2, newOptions);
    images.forEach(function(image) {
      image.dispatchEvent(createCustomEvent("medium-zoom:update", {
        detail: { zoom }
      }));
    });
    return zoom;
  };
  var clone = function clone2() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return mediumZoom(_extends({}, zoomOptions2, options2));
  };
  var attach = function attach2() {
    for (var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++) {
      selectors[_key] = arguments[_key];
    }
    var newImages = selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []);
    newImages.filter(function(newImage) {
      return images.indexOf(newImage) === -1;
    }).forEach(function(newImage) {
      images.push(newImage);
      newImage.classList.add("medium-zoom-image");
    });
    eventListeners.forEach(function(_ref) {
      var type = _ref.type, listener = _ref.listener, options2 = _ref.options;
      newImages.forEach(function(image) {
        image.addEventListener(type, listener, options2);
      });
    });
    return zoom;
  };
  var detach = function detach2() {
    for (var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      selectors[_key2] = arguments[_key2];
    }
    if (active.zoomed) {
      close();
    }
    var imagesToDetach = selectors.length > 0 ? selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []) : images;
    imagesToDetach.forEach(function(image) {
      image.classList.remove("medium-zoom-image");
      image.dispatchEvent(createCustomEvent("medium-zoom:detach", {
        detail: { zoom }
      }));
    });
    images = images.filter(function(image) {
      return imagesToDetach.indexOf(image) === -1;
    });
    return zoom;
  };
  var on = function on2(type, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image) {
      image.addEventListener("medium-zoom:" + type, listener, options2);
    });
    eventListeners.push({ type: "medium-zoom:" + type, listener, options: options2 });
    return zoom;
  };
  var off = function off2(type, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image) {
      image.removeEventListener("medium-zoom:" + type, listener, options2);
    });
    eventListeners = eventListeners.filter(function(eventListener) {
      return !(eventListener.type === "medium-zoom:" + type && eventListener.listener.toString() === listener.toString());
    });
    return zoom;
  };
  var open = function open2() {
    var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref2.target;
    var _animate = function _animate2() {
      var container = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      var viewportWidth = void 0;
      var viewportHeight = void 0;
      if (zoomOptions2.container) {
        if (zoomOptions2.container instanceof Object) {
          container = _extends({}, container, zoomOptions2.container);
          viewportWidth = container.width - container.left - container.right - zoomOptions2.margin * 2;
          viewportHeight = container.height - container.top - container.bottom - zoomOptions2.margin * 2;
        } else {
          var zoomContainer = isNode(zoomOptions2.container) ? zoomOptions2.container : document.querySelector(zoomOptions2.container);
          var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(), _width = _zoomContainer$getBou.width, _height = _zoomContainer$getBou.height, _left = _zoomContainer$getBou.left, _top = _zoomContainer$getBou.top;
          container = _extends({}, container, {
            width: _width,
            height: _height,
            left: _left,
            top: _top
          });
        }
      }
      viewportWidth = viewportWidth || container.width - zoomOptions2.margin * 2;
      viewportHeight = viewportHeight || container.height - zoomOptions2.margin * 2;
      var zoomTarget = active.zoomedHd || active.original;
      var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;
      var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;
      var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(), top = _zoomTarget$getBoundi.top, left = _zoomTarget$getBoundi.left, width = _zoomTarget$getBoundi.width, height = _zoomTarget$getBoundi.height;
      var scaleX = Math.min(Math.max(width, naturalWidth), viewportWidth) / width;
      var scaleY = Math.min(Math.max(height, naturalHeight), viewportHeight) / height;
      var scale = Math.min(scaleX, scaleY);
      var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions2.margin + container.left) / scale;
      var translateY = (-top + (viewportHeight - height) / 2 + zoomOptions2.margin + container.top) / scale;
      var transform = "scale(" + scale + ") translate3d(" + translateX + "px, " + translateY + "px, 0)";
      active.zoomed.style.transform = transform;
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = transform;
      }
    };
    return new Promise2(function(resolve2) {
      if (target && images.indexOf(target) === -1) {
        resolve2(zoom);
        return;
      }
      var _handleOpenEnd = function _handleOpenEnd2() {
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleOpenEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:opened", {
          detail: { zoom }
        }));
        resolve2(zoom);
      };
      if (active.zoomed) {
        resolve2(zoom);
        return;
      }
      if (target) {
        active.original = target;
      } else if (images.length > 0) {
        var _images = images;
        active.original = _images[0];
      } else {
        resolve2(zoom);
        return;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:open", {
        detail: { zoom }
      }));
      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      isAnimating = true;
      active.zoomed = cloneTarget(active.original);
      document.body.appendChild(overlay);
      if (zoomOptions2.template) {
        var template = isNode(zoomOptions2.template) ? zoomOptions2.template : document.querySelector(zoomOptions2.template);
        active.template = document.createElement("div");
        active.template.appendChild(template.content.cloneNode(true));
        document.body.appendChild(active.template);
      }
      if (active.original.parentElement && active.original.parentElement.tagName === "PICTURE" && active.original.currentSrc) {
        active.zoomed.src = active.original.currentSrc;
      }
      document.body.appendChild(active.zoomed);
      window.requestAnimationFrame(function() {
        document.body.classList.add("medium-zoom--opened");
      });
      active.original.classList.add("medium-zoom-image--hidden");
      active.zoomed.classList.add("medium-zoom-image--opened");
      active.zoomed.addEventListener("click", close);
      active.zoomed.addEventListener("transitionend", _handleOpenEnd);
      if (active.original.getAttribute("data-zoom-src")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("srcset");
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.removeAttribute("loading");
        active.zoomedHd.src = active.zoomed.getAttribute("data-zoom-src");
        active.zoomedHd.onerror = function() {
          clearInterval(getZoomTargetSize);
          console.warn("Unable to reach the zoom image target " + active.zoomedHd.src);
          active.zoomedHd = null;
          _animate();
        };
        var getZoomTargetSize = setInterval(function() {
          if (active.zoomedHd.complete) {
            clearInterval(getZoomTargetSize);
            active.zoomedHd.classList.add("medium-zoom-image--opened");
            active.zoomedHd.addEventListener("click", close);
            document.body.appendChild(active.zoomedHd);
            _animate();
          }
        }, 10);
      } else if (active.original.hasAttribute("srcset")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.removeAttribute("loading");
        var loadEventListener = active.zoomedHd.addEventListener("load", function() {
          active.zoomedHd.removeEventListener("load", loadEventListener);
          active.zoomedHd.classList.add("medium-zoom-image--opened");
          active.zoomedHd.addEventListener("click", close);
          document.body.appendChild(active.zoomedHd);
          _animate();
        });
      } else {
        _animate();
      }
    });
  };
  var close = function close2() {
    return new Promise2(function(resolve2) {
      if (isAnimating || !active.original) {
        resolve2(zoom);
        return;
      }
      var _handleCloseEnd = function _handleCloseEnd2() {
        active.original.classList.remove("medium-zoom-image--hidden");
        document.body.removeChild(active.zoomed);
        if (active.zoomedHd) {
          document.body.removeChild(active.zoomedHd);
        }
        document.body.removeChild(overlay);
        active.zoomed.classList.remove("medium-zoom-image--opened");
        if (active.template) {
          document.body.removeChild(active.template);
        }
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleCloseEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:closed", {
          detail: { zoom }
        }));
        active.original = null;
        active.zoomed = null;
        active.zoomedHd = null;
        active.template = null;
        resolve2(zoom);
      };
      isAnimating = true;
      document.body.classList.remove("medium-zoom--opened");
      active.zoomed.style.transform = "";
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = "";
      }
      if (active.template) {
        active.template.style.transition = "opacity 150ms";
        active.template.style.opacity = 0;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:close", {
        detail: { zoom }
      }));
      active.zoomed.addEventListener("transitionend", _handleCloseEnd);
    });
  };
  var toggle = function toggle2() {
    var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref3.target;
    if (active.original) {
      return close();
    }
    return open({ target });
  };
  var getOptions = function getOptions2() {
    return zoomOptions2;
  };
  var getImages = function getImages2() {
    return images;
  };
  var getZoomedImage = function getZoomedImage2() {
    return active.original;
  };
  var images = [];
  var eventListeners = [];
  var isAnimating = false;
  var scrollTop = 0;
  var zoomOptions2 = options;
  var active = {
    original: null,
    zoomed: null,
    zoomedHd: null,
    template: null
    // If the selector is omitted, it's replaced by the options
  };
  if (Object.prototype.toString.call(selector2) === "[object Object]") {
    zoomOptions2 = selector2;
  } else if (selector2 || typeof selector2 === "string") {
    attach(selector2);
  }
  zoomOptions2 = _extends({
    margin: 0,
    background: "#fff",
    scrollOffset: 40,
    container: null,
    template: null
  }, zoomOptions2);
  var overlay = createOverlay(zoomOptions2.background);
  document.addEventListener("click", _handleClick);
  document.addEventListener("keyup", _handleKeyUp);
  document.addEventListener("scroll", _handleScroll);
  window.addEventListener("resize", close);
  var zoom = {
    open,
    close,
    toggle,
    update,
    clone,
    attach,
    detach,
    on,
    off,
    getOptions,
    getImages,
    getZoomedImage
  };
  return zoom;
};
function styleInject(css2, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css2 || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css2;
  } else {
    style.appendChild(document.createTextNode(css2));
  }
}
var css$1 = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
styleInject(css$1);
const mediumZoom$2 = mediumZoom$1;
const mediumZoomSymbol = Symbol("mediumZoom");
const vars$1 = "";
const mediumZoom2 = "";
const selector = ".theme-default-content > img, .theme-default-content :not(a) > img";
const zoomOptions = {};
const delay = 300;
const clientConfig3 = defineClientConfig({
  enhance({ app, router }) {
    const zoom = mediumZoom$2(zoomOptions);
    zoom.refresh = (sel = selector) => {
      zoom.detach();
      zoom.attach(sel);
    };
    app.provide(mediumZoomSymbol, zoom);
    router.afterEach(() => {
      setTimeout(() => zoom.refresh(), delay);
    });
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n) => {
    const started = nprogress$1.isStarted();
    n = clamp(n, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n === 1 ? null : n;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n = nprogress$1.status;
    if (!n) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
    }
    n = clamp(n + amount, 0, 0.994);
    return nprogress$1.set(n);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n, min, max) => {
  if (n < min)
    return min;
  if (n > max)
    return max;
  return n;
};
const toBarPerc = (n) => (-1 + n) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i--) {
      vendorName = cssPrefixes[i] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] ?? (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const vars = "";
const nprogress = "";
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
const clientConfig4 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse(`{"docsDir":"src","docsRepo":"https://github.com/PeppeL-G/course-material","docsBranch":"master","editLink":true,"editLinkText":"Improve this page!","lastUpdatedText":"Last Updated","navbar":[{"text":"Home","link":"/"},{"text":"Courses","children":[{"text":"Android Development 2023","link":"/courses/android-development/"},{"text":"Client-Server Communication 2022","link":"/courses/client-server-communication/"},{"text":"Git","link":"/courses/git/"},{"text":"Introduction to Script Programming 2022","link":"/courses/introduction-to-script-programming/"},{"text":"Web Development - Advanced Concepts 2023","link":"/courses/web-development-advanced-concepts/"},{"text":"Web Development Fundamentals 2022","link":"/courses/web-development-fundamentals/"}]},{"text":"Get Help","link":"https://github.com/PeppeL-G/course-material/issues"}],"contributors":false,"sidebarDepth":2,"sidebar":{"/courses/android-development/":[{"text":"Android Development 2023"},"index.html","course-syllabus","study-guide","lectures","tutorials","laboratory-work","project-work","project-grading-guidelines","time-plan"],"/courses/client-server-communication/":[{"text":"Client-Server Communication 2022"},"index.html","course-syllabus","study-guide","lectures","tutorials","laboratory-work","project-work","project-grading-guidelines","written-examination","time-plan"],"/courses/git/":[{"text":"Git"},"index.html"],"/courses/introduction-to-script-programming/":[{"text":"Introduction to Script Programming 2022"},"index.html","course-syllabus","study-guide","lectures","exercises","repetition-exercises","laboratory-work","written-examination","time-plan"],"/courses/object-oriented-software-development/":[{"text":"Object-oriented Software Development 2020"},"lab-1-example"],"/courses/web-development-advanced-concepts/":[{"text":"Web Development - Advanced Concepts 2023"},"index.html","course-syllabus","study-guide","lectures","tutorials","laboratory-work","project-work","project-grading-guidelines","written-examination","time-plan"],"/courses/web-development-fundamentals/":[{"text":"Web Development Fundamentals 2022"},"index.html","course-syllabus","study-guide","lectures","tutorials","exercises","written-examination","project-work","project-grading-guidelines","time-plan","feedback"],"/":[""]},"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"logo":null,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","lastUpdated":true,"contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`);
const themeData = ref(themeData$1);
const useThemeData = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  const { locales: locales2, ...baseOptions } = theme;
  return {
    ...baseOptions,
    ...locales2 == null ? void 0 : locales2[routeLocale]
  };
};
const clientConfig5 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
    {
      setupDevtoolsPlugin({
        // fix recursive reference
        app,
        id: "org.vuejs.vuepress.plugin-theme-data",
        label: "VuePress Theme Data Plugin",
        packageName: "@vuepress/plugin-theme-data",
        homepage: "https://v2.vuepress.vuejs.org",
        logo: "https://v2.vuepress.vuejs.org/images/hero.png",
        componentStateTypes: ["VuePress"]
      }, (api) => {
        api.on.inspectComponent((payload) => {
          payload.instanceData.state.push({
            type: "VuePress",
            key: "themeData",
            editable: false,
            value: themeData2.value
          }, {
            type: "VuePress",
            key: "themeLocaleData",
            editable: false,
            value: themeLocaleData.value
          });
        });
      });
    }
  }
});
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "span",
        {
          class: normalizeClass(["badge", __props.type]),
          style: normalizeStyle({
            verticalAlign: __props.vertical
          })
        },
        [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(
              toDisplayString(__props.text),
              1
              /* TEXT */
            )
          ])
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "Badge.vue"]]);
const CodeGroup = defineComponent({
  name: "CodeGroup",
  slots: Object,
  setup(_, { slots }) {
    const activeIndex = ref(-1);
    const tabRefs = ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a2;
      const items = (((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return h("div", { class: "code-group" }, [
        h("div", { class: "code-group__nav" }, h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return h("li", { class: "code-group__li" }, h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const _hoisted_1$h = ["aria-selected"];
const __default__$1 = defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["code-group-item", { "code-group-item__active": __props.active }]),
        "aria-selected": __props.active
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$h);
    };
  }
});
const CodeGroupItem = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__file", "CodeGroupItem.vue"]]);
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
const isClient = typeof window !== "undefined";
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve2, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve2).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r2 = args[0];
  return typeof r2 === "function" ? readonly(customRef(() => ({ get: r2, set: noop }))) : ref(r2);
}
function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = isRef(initialValue);
  const _value = ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = toValue(truthyValue);
      _value.value = _value.value === truthy ? toValue(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$8.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter = bypassFilter
  } = _a2, watchOptions = __objRest$5(_a2, [
    "eventFilter"
  ]);
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter: filter
  } = _a2, watchOptions = __objRest$1(_a2, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(
    source,
    cb,
    __spreadProps$2(__spreadValues$2({}, watchOptions), {
      eventFilter
    })
  );
  return { stop, pause, resume, isActive };
}
function unrefElement(elRef) {
  var _a2;
  const plain = toValue(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, options2));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance()) {
    onMounted(() => {
      isMounted.value = true;
    });
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported3 = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", update);
    else
      mediaQuery.removeListener(update);
  };
  const update = () => {
    if (!isSupported3.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toRef(query).value);
    matches.value = !!(mediaQuery == null ? void 0 : mediaQuery.matches);
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
  };
  watchEffect(update);
  tryOnScopeDispose(() => cleanup());
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var __defProp$k = Object.defineProperty;
var __getOwnPropSymbols$n = Object.getOwnPropertySymbols;
var __hasOwnProp$n = Object.prototype.hasOwnProperty;
var __propIsEnum$n = Object.prototype.propertyIsEnumerable;
var __defNormalProp$k = (obj, key, value) => key in obj ? __defProp$k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$k = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$n.call(b, prop))
      __defNormalProp$k(a, prop, b[prop]);
  if (__getOwnPropSymbols$n)
    for (var prop of __getOwnPropSymbols$n(b)) {
      if (__propIsEnum$n.call(b, prop))
        __defNormalProp$k(a, prop, b[prop]);
    }
  return a;
};
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? shallowRef : ref)(defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window2 && listenToStorageChanges) {
    useEventListener(window2, "storage", update);
    useEventListener(window2, customStorageEventName, updateFromCustomEvent);
  }
  update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window2) {
            window2.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit !== null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return __spreadValues$k(__spreadValues$k({}, rawInit), value);
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
const useThemeLocaleData = () => useThemeLocaleData$1();
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = usePreferredDark();
  const darkStorage = useStorage("vuepress-color-scheme", themeLocale.value.colorMode);
  const isDarkMode = computed({
    get() {
      if (!themeLocale.value.colorModeSwitch) {
        return themeLocale.value.colorMode === "dark";
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window == null ? void 0 : window.document.querySelector("html");
    htmlEl == null ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  onMounted(() => {
    watch(isDarkMode, update, { immediate: true });
  });
  onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched == null ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect({
    hash: route.hash,
    query: route.query,
    params: route.params,
    ...resolvedRedirectObj
  });
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(encodeURI(item));
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve2) => promiseResolve = resolve2);
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  const sidebarConfig = frontmatter.sidebar ?? themeLocale.sidebar ?? "auto";
  const sidebarDepth = frontmatter.sidebarDepth ?? themeLocale.sidebarDepth ?? 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (isArray$1(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: header.link,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a2;
    let childItem;
    if (isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return {
        ...childItem,
        children: childItem.children.map((item2) => handleChildItem(item2))
      };
    }
    if (childItem.link === route.path) {
      const headers = ((_a2 = page.value.headers[0]) == null ? void 0 : _a2.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return {
        ...childItem,
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      };
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = sidebarConfig[sidebarPath] ?? [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const mobile = "719px";
const cssVars = {
  mobile
};
var DeviceType;
(function(DeviceType2) {
  DeviceType2["MOBILE"] = "mobile";
})(DeviceType || (DeviceType = {}));
const DeviceTypeMap = {
  [DeviceType.MOBILE]: Number.parseInt((_a = cssVars.mobile) == null ? void 0 : _a.replace("px", ""), 10)
};
const useUpdateDeviceStatus = (deviceType, callback) => {
  const width = DeviceTypeMap[deviceType];
  if (!Number.isInteger(width)) {
    return;
  }
  onMounted(() => {
    callback(width);
    window.addEventListener("resize", () => callback(width), false);
    window.addEventListener("orientationchange", () => callback(width), false);
  });
};
const _sfc_main$k = {};
const _hoisted_1$g = { class: "theme-default-content" };
function _sfc_render(_ctx, _cache) {
  const _component_Content = resolveComponent("Content");
  return openBlock(), createElementBlock("div", _hoisted_1$g, [
    createVNode(_component_Content)
  ]);
}
const HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render], ["__file", "HomeContent.vue"]]);
const _hoisted_1$f = {
  key: 0,
  class: "features"
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "HomeFeatures",
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = computed(() => {
      if (isArray$1(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _cache) => {
      return features.value.length ? (openBlock(), createElementBlock("div", _hoisted_1$f, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(features.value, (feature) => {
            return openBlock(), createElementBlock("div", {
              key: feature.title,
              class: "feature"
            }, [
              createBaseVNode(
                "h2",
                null,
                toDisplayString(feature.title),
                1
                /* TEXT */
              ),
              createBaseVNode(
                "p",
                null,
                toDisplayString(feature.details),
                1
                /* TEXT */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])) : createCommentVNode("v-if", true);
    };
  }
});
const HomeFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "HomeFeatures.vue"]]);
const _hoisted_1$e = ["innerHTML"];
const _hoisted_2$9 = ["textContent"];
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "HomeFooter",
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = computed(() => frontmatter.value.footer);
    const footerHtml = computed(() => frontmatter.value.footerHtml);
    return (_ctx, _cache) => {
      return footer.value ? (openBlock(), createElementBlock(
        Fragment,
        { key: 0 },
        [
          createCommentVNode(" eslint-disable-next-line vue/no-v-html "),
          footerHtml.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "footer",
            innerHTML: footer.value
          }, null, 8, _hoisted_1$e)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: "footer",
            textContent: toDisplayString(footer.value)
          }, null, 8, _hoisted_2$9))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : createCommentVNode("v-if", true);
    };
  }
});
const HomeFooter = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "HomeFooter.vue"]]);
const _hoisted_1$d = ["href", "rel", "target", "aria-label"];
const __default__ = defineComponent({
  inheritAttrs: false
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "AutoLink",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const site = useSiteData();
    const { item } = toRefs(props);
    const hasHttpProtocol = computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = computed(
      () => isLinkMailto(item.value.link) || isLinkTel(item.value.link)
    );
    const linkTarget = computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const isRouterLink = computed(
      () => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value
    );
    const linkRel = computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_AutoLinkExternalIcon = resolveComponent("AutoLinkExternalIcon");
      return isRouterLink.value ? (openBlock(), createBlock(_component_RouterLink, mergeProps({
        key: 0,
        class: { "router-link-active": isActive.value },
        to: unref(item).link,
        "aria-label": linkAriaLabel.value
      }, _ctx.$attrs), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "before"),
          createTextVNode(
            " " + toDisplayString(unref(item).text) + " ",
            1
            /* TEXT */
          ),
          renderSlot(_ctx.$slots, "after")
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "to", "aria-label"])) : (openBlock(), createElementBlock("a", mergeProps({
        key: 1,
        class: "external-link",
        href: unref(item).link,
        rel: linkRel.value,
        target: linkTarget.value,
        "aria-label": linkAriaLabel.value
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "before"),
        createTextVNode(
          " " + toDisplayString(unref(item).text) + " ",
          1
          /* TEXT */
        ),
        isBlankTarget.value ? (openBlock(), createBlock(_component_AutoLinkExternalIcon, { key: 0 })) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "after")
      ], 16, _hoisted_1$d));
    };
  }
});
const AutoLink = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "AutoLink.vue"]]);
const _hoisted_1$c = { class: "hero" };
const _hoisted_2$8 = {
  key: 0,
  id: "main-title"
};
const _hoisted_3$6 = {
  key: 1,
  class: "description"
};
const _hoisted_4$4 = {
  key: 2,
  class: "actions"
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "HomeHero",
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroAlt = computed(
      () => frontmatter.value.heroAlt || heroText.value || "hero"
    );
    const heroHeight = computed(() => frontmatter.value.heroHeight || 280);
    const heroText = computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = computed(() => {
      if (!isArray$1(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value)
        return null;
      const img = h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value,
        height: heroHeight.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return h(ClientOnly, () => img);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", _hoisted_1$c, [
        createVNode(HomeHeroImage),
        heroText.value ? (openBlock(), createElementBlock(
          "h1",
          _hoisted_2$8,
          toDisplayString(heroText.value),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true),
        tagline.value ? (openBlock(), createElementBlock(
          "p",
          _hoisted_3$6,
          toDisplayString(tagline.value),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true),
        actions.value.length ? (openBlock(), createElementBlock("p", _hoisted_4$4, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(actions.value, (action) => {
              return openBlock(), createBlock(AutoLink, {
                key: action.text,
                class: normalizeClass(["action-button", [action.type]]),
                item: action
              }, null, 8, ["class", "item"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
const HomeHero = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "HomeHero.vue"]]);
const _hoisted_1$b = { class: "home" };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Home",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1$b, [
        createVNode(HomeHero),
        createVNode(HomeFeatures),
        createVNode(HomeContent),
        createVNode(HomeFooter)
      ]);
    };
  }
});
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "Home.vue"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "NavbarBrand",
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = computed(
      () => themeLocale.value.home || routeLocale.value
    );
    const navbarBrandTitle = computed(() => siteLocale.value.title);
    const navbarBrandLogo = computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return h(ClientOnly, () => img);
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createBlock(_component_RouterLink, { to: navbarBrandLink.value }, {
        default: withCtx(() => [
          createVNode(NavbarBrandLogo),
          navbarBrandTitle.value ? (openBlock(), createElementBlock(
            "span",
            {
              key: 0,
              class: normalizeClass(["site-name", { "can-hide": navbarBrandLogo.value }])
            },
            toDisplayString(navbarBrandTitle.value),
            3
            /* TEXT, CLASS */
          )) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["to"]);
    };
  }
});
const NavbarBrand = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "NavbarBrand.vue"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "DropdownTransition",
  setup(__props) {
    const setHeight = (items) => {
      items.style.height = items.scrollHeight + "px";
    };
    const unsetHeight = (items) => {
      items.style.height = "";
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "dropdown",
        onEnter: setHeight,
        onAfterEnter: unsetHeight,
        onBeforeLeave: setHeight
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      });
    };
  }
});
const DropdownTransition = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "DropdownTransition.vue"]]);
const _hoisted_1$a = ["aria-label"];
const _hoisted_2$7 = { class: "title" };
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "arrow down" },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$3 = ["aria-label"];
const _hoisted_5$1 = { class: "title" };
const _hoisted_6$1 = { class: "navbar-dropdown" };
const _hoisted_7$1 = { class: "navbar-dropdown-subtitle" };
const _hoisted_8$1 = { key: 1 };
const _hoisted_9$1 = { class: "navbar-dropdown-subitem-wrapper" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "NavbarDropdown",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = toRefs(props);
    const dropdownAriaLabel = computed(
      () => item.value.ariaLabel || item.value.text
    );
    const open = ref(false);
    const route = useRoute();
    watch(
      () => route.path,
      () => {
        open.value = false;
      }
    );
    const handleDropdown = (e) => {
      const isTriggerByTab = e.detail === 0;
      if (isTriggerByTab) {
        open.value = !open.value;
      } else {
        open.value = false;
      }
    };
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["navbar-dropdown-wrapper", { open: open.value }])
        },
        [
          createBaseVNode("button", {
            class: "navbar-dropdown-title",
            type: "button",
            "aria-label": dropdownAriaLabel.value,
            onClick: handleDropdown
          }, [
            createBaseVNode(
              "span",
              _hoisted_2$7,
              toDisplayString(unref(item).text),
              1
              /* TEXT */
            ),
            _hoisted_3$5
          ], 8, _hoisted_1$a),
          createBaseVNode("button", {
            class: "navbar-dropdown-title-mobile",
            type: "button",
            "aria-label": dropdownAriaLabel.value,
            onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
          }, [
            createBaseVNode(
              "span",
              _hoisted_5$1,
              toDisplayString(unref(item).text),
              1
              /* TEXT */
            ),
            createBaseVNode(
              "span",
              {
                class: normalizeClass(["arrow", open.value ? "down" : "right"])
              },
              null,
              2
              /* CLASS */
            )
          ], 8, _hoisted_4$3),
          createVNode(DropdownTransition, null, {
            default: withCtx(() => [
              withDirectives(createBaseVNode(
                "ul",
                _hoisted_6$1,
                [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(unref(item).children, (child) => {
                      return openBlock(), createElementBlock("li", {
                        key: child.text,
                        class: "navbar-dropdown-item"
                      }, [
                        child.children ? (openBlock(), createElementBlock(
                          Fragment,
                          { key: 0 },
                          [
                            createBaseVNode("h4", _hoisted_7$1, [
                              child.link ? (openBlock(), createBlock(AutoLink, {
                                key: 0,
                                item: child,
                                onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && child.children.length === 0 && (open.value = false)
                              }, null, 8, ["item", "onFocusout"])) : (openBlock(), createElementBlock(
                                "span",
                                _hoisted_8$1,
                                toDisplayString(child.text),
                                1
                                /* TEXT */
                              ))
                            ]),
                            createBaseVNode("ul", _hoisted_9$1, [
                              (openBlock(true), createElementBlock(
                                Fragment,
                                null,
                                renderList(child.children, (grandchild) => {
                                  return openBlock(), createElementBlock("li", {
                                    key: grandchild.link,
                                    class: "navbar-dropdown-subitem"
                                  }, [
                                    createVNode(AutoLink, {
                                      item: grandchild,
                                      onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, unref(item).children) && (open.value = false)
                                    }, null, 8, ["item", "onFocusout"])
                                  ]);
                                }),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        )) : (openBlock(), createBlock(AutoLink, {
                          key: 1,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && (open.value = false)
                        }, null, 8, ["item", "onFocusout"]))
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                512
                /* NEED_PATCH */
              ), [
                [vShow, open.value]
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ],
        2
        /* CLASS */
      );
    };
  }
});
const NavbarDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "NavbarDropdown.vue"]]);
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _hoisted_1$9 = {
  key: 0,
  class: "navbar-items"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "NavbarItems",
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return computed(() => {
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: themeLocale.value.selectLanguageText ?? "unknown language",
          ariaLabel: themeLocale.value.selectLanguageAriaLabel ?? themeLocale.value.selectLanguageText ?? "unknown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b;
            const targetSiteLocale = ((_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) ?? {};
            const targetThemeLocale = ((_b = themeLocale.value.locales) == null ? void 0 : _b[targetLocalePath]) ?? {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = targetThemeLocale.selectLanguageName ?? targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(
                routeLocale.value,
                targetLocalePath
              );
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = currentFullPath.replace(currentPath, targetLocalePage);
              } else {
                link = targetThemeLocale.home ?? targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = computed(() => themeLocale.value.repo);
      const repoType = computed(
        () => repo.value ? resolveRepoType(repo.value) : null
      );
      const repoLink = computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return {
          ...item,
          children: item.children.map(resolveNavbarItem)
        };
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const isMobile = ref(false);
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    useUpdateDeviceStatus(
      DeviceType.MOBILE,
      (mobileDesktopBreakpoint) => {
        if (window.innerWidth < mobileDesktopBreakpoint) {
          isMobile.value = true;
        } else {
          isMobile.value = false;
        }
      }
    );
    return (_ctx, _cache) => {
      return navbarLinks.value.length ? (openBlock(), createElementBlock("nav", _hoisted_1$9, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(navbarLinks.value, (item) => {
            return openBlock(), createElementBlock("div", {
              key: item.text,
              class: "navbar-item"
            }, [
              item.children ? (openBlock(), createBlock(NavbarDropdown, {
                key: 0,
                item,
                class: normalizeClass(isMobile.value ? "mobile" : "")
              }, null, 8, ["item", "class"])) : (openBlock(), createBlock(AutoLink, {
                key: 1,
                item
              }, null, 8, ["item"]))
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])) : createCommentVNode("v-if", true);
    };
  }
});
const NavbarItems = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "NavbarItems.vue"]]);
const _hoisted_1$8 = ["title"];
const _hoisted_2$6 = {
  class: "icon",
  focusable: "false",
  viewBox: "0 0 32 32"
};
const _hoisted_3$4 = /* @__PURE__ */ createStaticVNode('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>', 9);
const _hoisted_12 = [
  _hoisted_3$4
];
const _hoisted_13 = {
  class: "icon",
  focusable: "false",
  viewBox: "0 0 32 32"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_15 = [
  _hoisted_14
];
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ToggleColorModeButton",
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const toggleColorMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "toggle-color-mode-button",
        title: unref(themeLocale).toggleColorMode,
        onClick: toggleColorMode
      }, [
        withDirectives((openBlock(), createElementBlock(
          "svg",
          _hoisted_2$6,
          _hoisted_12,
          512
          /* NEED_PATCH */
        )), [
          [vShow, !unref(isDarkMode)]
        ]),
        withDirectives((openBlock(), createElementBlock(
          "svg",
          _hoisted_13,
          _hoisted_15,
          512
          /* NEED_PATCH */
        )), [
          [vShow, unref(isDarkMode)]
        ])
      ], 8, _hoisted_1$8);
    };
  }
});
const ToggleColorModeButton = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "ToggleColorModeButton.vue"]]);
const _hoisted_1$7 = ["title"];
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "icon",
    "aria-hidden": "true"
  },
  [
    /* @__PURE__ */ createBaseVNode("span"),
    /* @__PURE__ */ createBaseVNode("span"),
    /* @__PURE__ */ createBaseVNode("span")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3$3 = [
  _hoisted_2$5
];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ToggleSidebarButton",
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "toggle-sidebar-button",
        title: unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle"))
      }, _hoisted_3$3, 8, _hoisted_1$7);
    };
  }
});
const ToggleSidebarButton = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "ToggleSidebarButton.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = ref(null);
    const navbarBrand = ref(null);
    const linksWrapperMaxWidth = ref(0);
    const linksWrapperStyle = computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    useUpdateDeviceStatus(
      DeviceType.MOBILE,
      (mobileDesktopBreakpoint) => {
        var _a2;
        const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
        if (window.innerWidth < mobileDesktopBreakpoint) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a2 = navbarBrand.value) == null ? void 0 : _a2.offsetWidth) || 0);
        }
      }
    );
    function getCssValue(el, property) {
      var _a2, _b, _c;
      const val = (_c = (_b = (_a2 = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a2.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _cache) => {
      const _component_NavbarSearch = resolveComponent("NavbarSearch");
      return openBlock(), createElementBlock(
        "header",
        {
          ref_key: "navbar",
          ref: navbar,
          class: "navbar"
        },
        [
          createVNode(ToggleSidebarButton, {
            onToggle: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-sidebar"))
          }),
          createBaseVNode(
            "span",
            {
              ref_key: "navbarBrand",
              ref: navbarBrand
            },
            [
              createVNode(NavbarBrand)
            ],
            512
            /* NEED_PATCH */
          ),
          createBaseVNode(
            "div",
            {
              class: "navbar-items-wrapper",
              style: normalizeStyle(linksWrapperStyle.value)
            },
            [
              renderSlot(_ctx.$slots, "before"),
              createVNode(NavbarItems, { class: "can-hide" }),
              renderSlot(_ctx.$slots, "after"),
              unref(themeLocale).colorModeSwitch ? (openBlock(), createBlock(ToggleColorModeButton, { key: 0 })) : createCommentVNode("v-if", true),
              createVNode(_component_NavbarSearch)
            ],
            4
            /* STYLE */
          )
        ],
        512
        /* NEED_PATCH */
      );
    };
  }
});
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "Navbar.vue"]]);
const _hoisted_1$6 = { class: "page-meta" };
const _hoisted_2$4 = {
  key: 0,
  class: "meta-item edit-link"
};
const _hoisted_3$2 = {
  key: 1,
  class: "meta-item last-updated"
};
const _hoisted_4$2 = { class: "meta-item-label" };
const _hoisted_5 = { class: "meta-item-info" };
const _hoisted_6 = {
  key: 2,
  class: "meta-item contributors"
};
const _hoisted_7 = { class: "meta-item-label" };
const _hoisted_8 = { class: "meta-item-info" };
const _hoisted_9 = ["title"];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PageMeta",
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        const showEditLink = frontmatter.value.editLink ?? themeLocale2.value.editLink ?? true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: frontmatter.value.editLinkPattern ?? themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText ?? "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a2, _b;
        const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale2.value.lastUpdated ?? true;
        if (!showLastUpdated)
          return null;
        if (!((_a2 = page.value.git) == null ? void 0 : _a2.updatedTime))
          return null;
        const updatedDate = new Date((_b = page.value.git) == null ? void 0 : _b.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a2;
        const showContributors = frontmatter.value.contributors ?? themeLocale2.value.contributors ?? true;
        if (!showContributors)
          return null;
        return ((_a2 = page.value.git) == null ? void 0 : _a2.contributors) ?? null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _cache) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock("footer", _hoisted_1$6, [
        unref(editNavLink) ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
          createVNode(AutoLink, {
            class: "meta-item-label",
            item: unref(editNavLink)
          }, null, 8, ["item"])
        ])) : createCommentVNode("v-if", true),
        unref(lastUpdated) ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
          createBaseVNode(
            "span",
            _hoisted_4$2,
            toDisplayString(unref(themeLocale).lastUpdatedText) + ": ",
            1
            /* TEXT */
          ),
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createBaseVNode(
                "span",
                _hoisted_5,
                toDisplayString(unref(lastUpdated)),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })
        ])) : createCommentVNode("v-if", true),
        unref(contributors) && unref(contributors).length ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode(
            "span",
            _hoisted_7,
            toDisplayString(unref(themeLocale).contributorsText) + ": ",
            1
            /* TEXT */
          ),
          createBaseVNode("span", _hoisted_8, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(unref(contributors), (contributor, index2) => {
                return openBlock(), createElementBlock(
                  Fragment,
                  { key: index2 },
                  [
                    createBaseVNode("span", {
                      class: "contributor",
                      title: `email: ${contributor.email}`
                    }, toDisplayString(contributor.name), 9, _hoisted_9),
                    index2 !== unref(contributors).length - 1 ? (openBlock(), createElementBlock(
                      Fragment,
                      { key: 0 },
                      [
                        createTextVNode(", ")
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : createCommentVNode("v-if", true)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
const PageMeta = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "PageMeta.vue"]]);
const _hoisted_1$5 = {
  key: 0,
  class: "page-nav"
};
const _hoisted_2$3 = { class: "inner" };
const _hoisted_3$1 = {
  key: 0,
  class: "prev"
};
const _hoisted_4$1 = {
  key: 1,
  class: "next"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PageNav",
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset2) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset2];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(
            item.children,
            currentPath,
            offset2
          );
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = useRoute();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _cache) => {
      return prevNavLink.value || nextNavLink.value ? (openBlock(), createElementBlock("nav", _hoisted_1$5, [
        createBaseVNode("p", _hoisted_2$3, [
          prevNavLink.value ? (openBlock(), createElementBlock("span", _hoisted_3$1, [
            createVNode(AutoLink, { item: prevNavLink.value }, null, 8, ["item"])
          ])) : createCommentVNode("v-if", true),
          nextNavLink.value ? (openBlock(), createElementBlock("span", _hoisted_4$1, [
            createVNode(AutoLink, { item: nextNavLink.value }, null, 8, ["item"])
          ])) : createCommentVNode("v-if", true)
        ])
      ])) : createCommentVNode("v-if", true);
    };
  }
});
const PageNav = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "PageNav.vue"]]);
const _hoisted_1$4 = { class: "page" };
const _hoisted_2$2 = { class: "theme-default-content" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Page",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("main", _hoisted_1$4, [
        renderSlot(_ctx.$slots, "top"),
        createBaseVNode("div", _hoisted_2$2, [
          renderSlot(_ctx.$slots, "content-top"),
          createVNode(_component_Content),
          renderSlot(_ctx.$slots, "content-bottom")
        ]),
        createVNode(PageMeta),
        createVNode(PageNav),
        renderSlot(_ctx.$slots, "bottom")
      ]);
    };
  }
});
const Page = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "Page.vue"]]);
const _hoisted_1$3 = ["onKeydown"];
const _hoisted_2$1 = { class: "sidebar-item-children" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = toRefs(props);
    const route = useRoute();
    const router = useRouter();
    const isActive = computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpenDefault = computed(
      () => item.value.collapsible ? isActive.value : true
    );
    const [isOpen, toggleIsOpen] = useToggle(isOpenDefault.value);
    const onClick = (e) => {
      if (item.value.collapsible) {
        e.preventDefault();
        toggleIsOpen();
      }
    };
    const unregisterRouterHook = router.afterEach((to) => {
      nextTick(() => {
        isOpen.value = isOpenDefault.value;
      });
    });
    onBeforeUnmount(() => {
      unregisterRouterHook();
    });
    return (_ctx, _cache) => {
      var _a2;
      const _component_SidebarItem = resolveComponent("SidebarItem", true);
      return openBlock(), createElementBlock("li", null, [
        unref(item).link ? (openBlock(), createBlock(AutoLink, {
          key: 0,
          class: normalizeClass(itemClass.value),
          item: unref(item)
        }, null, 8, ["class", "item"])) : (openBlock(), createElementBlock("p", {
          key: 1,
          tabindex: "0",
          class: normalizeClass(itemClass.value),
          onClick,
          onKeydown: withKeys(onClick, ["enter"])
        }, [
          createTextVNode(
            toDisplayString(unref(item).text) + " ",
            1
            /* TEXT */
          ),
          unref(item).collapsible ? (openBlock(), createElementBlock(
            "span",
            {
              key: 0,
              class: normalizeClass(["arrow", unref(isOpen) ? "down" : "right"])
            },
            null,
            2
            /* CLASS */
          )) : createCommentVNode("v-if", true)
        ], 42, _hoisted_1$3)),
        ((_a2 = unref(item).children) == null ? void 0 : _a2.length) ? (openBlock(), createBlock(DropdownTransition, { key: 2 }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode(
              "ul",
              _hoisted_2$1,
              [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(unref(item).children, (child) => {
                    return openBlock(), createBlock(_component_SidebarItem, {
                      key: `${unref(depth)}${child.text}${child.link}`,
                      item: child,
                      depth: unref(depth) + 1
                    }, null, 8, ["item", "depth"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              512
              /* NEED_PATCH */
            ), [
              [vShow, unref(isOpen)]
            ])
          ]),
          _: 1
          /* STABLE */
        })) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
const SidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "SidebarItem.vue"]]);
const _hoisted_1$2 = {
  key: 0,
  class: "sidebar-items"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItems",
  setup(__props) {
    const route = useRoute();
    const sidebarItems = useSidebarItems();
    onMounted(() => {
      watch(
        () => route.hash,
        (hash) => {
          const sidebar = document.querySelector(".sidebar");
          if (!sidebar)
            return;
          const activeSidebarItem = document.querySelector(
            `.sidebar a.sidebar-item[href="${route.path}${hash}"]`
          );
          if (!activeSidebarItem)
            return;
          const { top: sidebarTop, height: sidebarHeight } = sidebar.getBoundingClientRect();
          const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
          if (activeSidebarItemTop < sidebarTop) {
            activeSidebarItem.scrollIntoView(true);
          } else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
            activeSidebarItem.scrollIntoView(false);
          }
        }
      );
    });
    return (_ctx, _cache) => {
      return unref(sidebarItems).length ? (openBlock(), createElementBlock("ul", _hoisted_1$2, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(unref(sidebarItems), (item) => {
            return openBlock(), createBlock(SidebarItem, {
              key: `${item.text}${item.link}`,
              item
            }, null, 8, ["item"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])) : createCommentVNode("v-if", true);
    };
  }
});
const SidebarItems = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "SidebarItems.vue"]]);
const _hoisted_1$1 = { class: "sidebar" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", _hoisted_1$1, [
        createVNode(NavbarItems),
        renderSlot(_ctx.$slots, "top"),
        createVNode(SidebarItems),
        renderSlot(_ctx.$slots, "bottom")
      ]);
    };
  }
});
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "Sidebar.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = computed(
      () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
    );
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e) => {
      touchStart.x = e.changedTouches[0].clientX;
      touchStart.y = e.changedTouches[0].clientY;
    };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStart.x;
      const dy = e.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80) {
          toggleSidebar(true);
        } else {
          toggleSidebar(false);
        }
      }
    };
    const containerClass = computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    onMounted(() => {
      const router = useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    onUnmounted(() => {
      unregisterRouterHook();
    });
    const scrollPromise2 = useScrollPromise();
    const onBeforeEnter = scrollPromise2.resolve;
    const onBeforeLeave = scrollPromise2.pending;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["theme-container", containerClass.value]),
          onTouchstart: onTouchStart,
          onTouchend: onTouchEnd
        },
        [
          renderSlot(_ctx.$slots, "navbar", {}, () => [
            shouldShowNavbar.value ? (openBlock(), createBlock(Navbar, {
              key: 0,
              onToggleSidebar: toggleSidebar
            }, {
              before: withCtx(() => [
                renderSlot(_ctx.$slots, "navbar-before")
              ]),
              after: withCtx(() => [
                renderSlot(_ctx.$slots, "navbar-after")
              ]),
              _: 3
              /* FORWARDED */
            })) : createCommentVNode("v-if", true)
          ]),
          createBaseVNode("div", {
            class: "sidebar-mask",
            onClick: _cache[0] || (_cache[0] = ($event) => toggleSidebar(false))
          }),
          renderSlot(_ctx.$slots, "sidebar", {}, () => [
            createVNode(Sidebar, null, {
              top: withCtx(() => [
                renderSlot(_ctx.$slots, "sidebar-top")
              ]),
              bottom: withCtx(() => [
                renderSlot(_ctx.$slots, "sidebar-bottom")
              ]),
              _: 3
              /* FORWARDED */
            })
          ]),
          renderSlot(_ctx.$slots, "page", {}, () => [
            unref(frontmatter).home ? (openBlock(), createBlock(Home, { key: 0 })) : (openBlock(), createBlock(Transition, {
              key: 1,
              name: "fade-slide-y",
              mode: "out-in",
              onBeforeEnter: unref(onBeforeEnter),
              onBeforeLeave: unref(onBeforeLeave)
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(Page, {
                  key: unref(page).path
                }, {
                  top: withCtx(() => [
                    renderSlot(_ctx.$slots, "page-top")
                  ]),
                  "content-top": withCtx(() => [
                    renderSlot(_ctx.$slots, "page-content-top")
                  ]),
                  "content-bottom": withCtx(() => [
                    renderSlot(_ctx.$slots, "page-content-bottom")
                  ]),
                  bottom: withCtx(() => [
                    renderSlot(_ctx.$slots, "page-bottom")
                  ]),
                  _: 3
                  /* FORWARDED */
                }))
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["onBeforeEnter", "onBeforeLeave"]))
          ])
        ],
        34
        /* CLASS, HYDRATE_EVENTS */
      );
    };
  }
});
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "Layout.vue"]]);
const _hoisted_1 = { class: "theme-container" };
const _hoisted_2 = { class: "page" };
const _hoisted_3 = { class: "theme-default-content" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "h1",
  null,
  "404",
  -1
  /* HOISTED */
);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  setup(__props) {
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = themeLocale.value.notFound ?? ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = themeLocale.value.home ?? routeLocale.value;
    const homeText = themeLocale.value.backToHome ?? "Back to home";
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("main", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _hoisted_4,
            createBaseVNode(
              "blockquote",
              null,
              toDisplayString(getMsg()),
              1
              /* TEXT */
            ),
            createVNode(_component_RouterLink, { to: unref(homeLink) }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString(unref(homeText)),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["to"])
          ])
        ])
      ]);
    };
  }
});
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "NotFound.vue"]]);
const index = "";
const clientConfig6 = defineClientConfig({
  enhance({ app, router }) {
    app.component("Badge", Badge);
    app.component("CodeGroup", CodeGroup);
    app.component("CodeGroupItem", CodeGroupItem);
    app.component("AutoLinkExternalIcon", () => {
      const ExternalLinkIcon2 = app.component("ExternalLinkIcon");
      if (ExternalLinkIcon2) {
        return h(ExternalLinkIcon2);
      }
      return null;
    });
    app.component("NavbarSearch", () => {
      const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
      if (SearchComponent) {
        return h(SearchComponent);
      }
      return null;
    });
    const scrollBehavior = router.options.scrollBehavior;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
  },
  setup() {
    setupDarkMode();
    setupSidebarItems();
  },
  layouts: {
    Layout,
    NotFound
  }
});
const clientConfig7 = {
  enhance: ({ app }) => {
    app.component("AcademicYearFigure", defineAsyncComponent(() => __vitePreload(() => import("./AcademicYearFigure-3c5e08b6.js"), true ? [] : void 0))), app.component("CompactInfo", defineAsyncComponent(() => __vitePreload(() => import("./CompactInfo-3d49f7a8.js"), true ? [] : void 0))), app.component("ExamQuestion", defineAsyncComponent(() => __vitePreload(() => import("./ExamQuestion-f4061104.js"), true ? [] : void 0))), app.component("Figure", defineAsyncComponent(() => __vitePreload(() => import("./Figure-8405d225.js"), true ? [] : void 0))), app.component("FigureNumber", defineAsyncComponent(() => __vitePreload(() => import("./FigureNumber-300abf83.js"), true ? [] : void 0))), app.component("GradingGuideline", defineAsyncComponent(() => __vitePreload(() => import("./GradingGuideline-ec536132.js"), true ? [] : void 0))), app.component("ILOsActivitiesMapping", defineAsyncComponent(() => __vitePreload(() => import("./ILOsActivitiesMapping-5bbd8867.js"), true ? [] : void 0))), app.component("RenderMermaid", defineAsyncComponent(() => __vitePreload(() => import("./RenderMermaid-209b3ee0.js"), true ? [] : void 0))), app.component("ReportMistake", defineAsyncComponent(() => __vitePreload(() => import("./ReportMistake-dd508986.js"), true ? [] : void 0))), app.component("SampleAnswer", defineAsyncComponent(() => __vitePreload(() => import("./SampleAnswer-f61747e8.js"), true ? [] : void 0))), app.component("SleepButton", defineAsyncComponent(() => __vitePreload(() => import("./SleepButton-2a1115f4.js"), true ? [] : void 0))), app.component("Smartphone", defineAsyncComponent(() => __vitePreload(() => import("./Smartphone-99f56caa.js"), true ? [] : void 0))), app.component("StudyGuideInfo", defineAsyncComponent(() => __vitePreload(() => import("./StudyGuideInfo-6e4c4a3b.js"), true ? [] : void 0))), app.component("Teacher", defineAsyncComponent(() => __vitePreload(() => import("./Teacher-cea4c7db.js"), true ? [] : void 0))), app.component("TimePlan", defineAsyncComponent(() => __vitePreload(() => import("./TimePlan-7e6c28cb.js"), true ? [] : void 0)));
  }
};
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  clientConfig7
];
const pagesRoutes = [
  ["v-8daa1a0e", "/", { "title": "Course Material" }, ["/index.html", "/README.md"]],
  ["v-5dcb4a62", "/courses/android-development/", { "title": "Welcome!" }, ["/courses/android-development/index.html", "/courses/android-development/README.md"]],
  ["v-2046e544", "/courses/android-development/course-syllabus.html", { "title": "Course Syllabus" }, ["/courses/android-development/course-syllabus", "/courses/android-development/course-syllabus.md"]],
  ["v-9c1bdfa0", "/courses/android-development/laboratory-work.html", { "title": "Laboratory Work" }, ["/courses/android-development/laboratory-work", "/courses/android-development/laboratory-work.md"]],
  ["v-5e9ba7bc", "/courses/android-development/lectures.html", { "title": "Lectures" }, ["/courses/android-development/lectures", "/courses/android-development/lectures.md"]],
  ["v-62b91ae7", "/courses/android-development/project-grading-guidelines.html", { "title": "Project Grading Guidelines" }, ["/courses/android-development/project-grading-guidelines", "/courses/android-development/project-grading-guidelines.md"]],
  ["v-1f80b6dc", "/courses/android-development/project-work.html", { "title": "Project Work" }, ["/courses/android-development/project-work", "/courses/android-development/project-work.md"]],
  ["v-b6503f7a", "/courses/android-development/study-guide.html", { "title": "Study Guide" }, ["/courses/android-development/study-guide", "/courses/android-development/study-guide.md"]],
  ["v-4dde9732", "/courses/android-development/time-plan.html", { "title": "Time Plan" }, ["/courses/android-development/time-plan", "/courses/android-development/time-plan.md"]],
  ["v-2479b406", "/courses/android-development/tutorials.html", { "title": "Tutorials" }, ["/courses/android-development/tutorials", "/courses/android-development/tutorials.md"]],
  ["v-214397d1", "/courses/client-server-communication/", { "title": "Welcome!" }, ["/courses/client-server-communication/index.html", "/courses/client-server-communication/README.md"]],
  ["v-202db59a", "/courses/client-server-communication/course-syllabus.html", { "title": "Course Syllabus" }, ["/courses/client-server-communication/course-syllabus", "/courses/client-server-communication/course-syllabus.md"]],
  ["v-fcd75fc2", "/courses/client-server-communication/laboratory-work.html", { "title": "Laboratory Work" }, ["/courses/client-server-communication/laboratory-work", "/courses/client-server-communication/laboratory-work.md"]],
  ["v-15096b13", "/courses/client-server-communication/lectures.html", { "title": "Lectures" }, ["/courses/client-server-communication/lectures", "/courses/client-server-communication/lectures.md"]],
  ["v-7f3a40d0", "/courses/client-server-communication/project-grading-guidelines.html", { "title": "Project Grading Guidelines" }, ["/courses/client-server-communication/project-grading-guidelines", "/courses/client-server-communication/project-grading-guidelines.md"]],
  ["v-afe7f9fa", "/courses/client-server-communication/project-work.html", { "title": "Project Work" }, ["/courses/client-server-communication/project-work", "/courses/client-server-communication/project-work.md"]],
  ["v-ec85209c", "/courses/client-server-communication/study-guide.html", { "title": "Study Guide" }, ["/courses/client-server-communication/study-guide", "/courses/client-server-communication/study-guide.md"]],
  ["v-d721933e", "/courses/client-server-communication/time-plan.html", { "title": "Time Plan" }, ["/courses/client-server-communication/time-plan", "/courses/client-server-communication/time-plan.md"]],
  ["v-6b0a5335", "/courses/client-server-communication/tutorials.html", { "title": "Tutorials" }, ["/courses/client-server-communication/tutorials", "/courses/client-server-communication/tutorials.md"]],
  ["v-2a04f362", "/courses/client-server-communication/written-examination.html", { "title": "Written Examination" }, ["/courses/client-server-communication/written-examination", "/courses/client-server-communication/written-examination.md"]],
  ["v-aeaf1fe6", "/courses/git/", { "title": "Git" }, ["/courses/git/index.html", "/courses/git/README.md"]],
  ["v-7f920989", "/courses/introduction-to-script-programming/", { "title": "Welcome!" }, ["/courses/introduction-to-script-programming/index.html", "/courses/introduction-to-script-programming/README.md"]],
  ["v-a4f4ea2a", "/courses/introduction-to-script-programming/course-syllabus.html", { "title": "Course Syllabus" }, ["/courses/introduction-to-script-programming/course-syllabus", "/courses/introduction-to-script-programming/course-syllabus.md"]],
  ["v-7e7ef5e7", "/courses/introduction-to-script-programming/exercises.html", { "title": "Exercises" }, ["/courses/introduction-to-script-programming/exercises", "/courses/introduction-to-script-programming/exercises.md"]],
  ["v-3f30b5d7", "/courses/introduction-to-script-programming/laboratory-work.html", { "title": "Laboratory Work" }, ["/courses/introduction-to-script-programming/laboratory-work", "/courses/introduction-to-script-programming/laboratory-work.md"]],
  ["v-22e3845b", "/courses/introduction-to-script-programming/lectures.html", { "title": "Lectures" }, ["/courses/introduction-to-script-programming/lectures", "/courses/introduction-to-script-programming/lectures.md"]],
  ["v-4f623391", "/courses/introduction-to-script-programming/repetition-exercises.html", { "title": "Repetition Exercises" }, ["/courses/introduction-to-script-programming/repetition-exercises", "/courses/introduction-to-script-programming/repetition-exercises.md"]],
  ["v-fdbd1d2c", "/courses/introduction-to-script-programming/study-guide.html", { "title": "Study Guide" }, ["/courses/introduction-to-script-programming/study-guide", "/courses/introduction-to-script-programming/study-guide.md"]],
  ["v-41d84619", "/courses/introduction-to-script-programming/time-plan.html", { "title": "Time Plan" }, ["/courses/introduction-to-script-programming/time-plan", "/courses/introduction-to-script-programming/time-plan.md"]],
  ["v-14005007", "/courses/introduction-to-script-programming/written-examination.html", { "title": "Written Examination" }, ["/courses/introduction-to-script-programming/written-examination", "/courses/introduction-to-script-programming/written-examination.md"]],
  ["v-7a2fef0c", "/courses/object-oriented-software-development/lab-1-example.html", { "title": "Lab 1 Example" }, ["/courses/object-oriented-software-development/lab-1-example", "/courses/object-oriented-software-development/lab-1-example.md"]],
  ["v-09054f74", "/courses/web-development-advanced-concepts/", { "title": "Welcome!" }, ["/courses/web-development-advanced-concepts/index.html", "/courses/web-development-advanced-concepts/README.md"]],
  ["v-6be4a554", "/courses/web-development-advanced-concepts/course-syllabus.html", { "title": "Course Syllabus" }, ["/courses/web-development-advanced-concepts/course-syllabus", "/courses/web-development-advanced-concepts/course-syllabus.md"]],
  ["v-5bb8d842", "/courses/web-development-advanced-concepts/laboratory-work.html", { "title": "Laboratory Work" }, ["/courses/web-development-advanced-concepts/laboratory-work", "/courses/web-development-advanced-concepts/laboratory-work.md"]],
  ["v-2b7f1760", "/courses/web-development-advanced-concepts/lectures.html", { "title": "Lectures" }, ["/courses/web-development-advanced-concepts/lectures", "/courses/web-development-advanced-concepts/lectures.md"]],
  ["v-54e2f395", "/courses/web-development-advanced-concepts/project-grading-guidelines.html", { "title": "Project Grading Guidelines" }, ["/courses/web-development-advanced-concepts/project-grading-guidelines", "/courses/web-development-advanced-concepts/project-grading-guidelines.md"]],
  ["v-e81bb480", "/courses/web-development-advanced-concepts/project-work.html", { "title": "Project Work" }, ["/courses/web-development-advanced-concepts/project-work", "/courses/web-development-advanced-concepts/project-work.md"]],
  ["v-cd4cfd56", "/courses/web-development-advanced-concepts/study-guide.html", { "title": "Study Guide" }, ["/courses/web-development-advanced-concepts/study-guide", "/courses/web-development-advanced-concepts/study-guide.md"]],
  ["v-661954c4", "/courses/web-development-advanced-concepts/time-plan.html", { "title": "Time Plan" }, ["/courses/web-development-advanced-concepts/time-plan", "/courses/web-development-advanced-concepts/time-plan.md"]],
  ["v-3cb47198", "/courses/web-development-advanced-concepts/tutorials.html", { "title": "Tutorials" }, ["/courses/web-development-advanced-concepts/tutorials", "/courses/web-development-advanced-concepts/tutorials.md"]],
  ["v-dce9761c", "/courses/web-development-advanced-concepts/written-examination.html", { "title": "Written Examination" }, ["/courses/web-development-advanced-concepts/written-examination", "/courses/web-development-advanced-concepts/written-examination.md"]],
  ["v-7e31d334", "/courses/web-development-fundamentals/", { "title": "Welcome!" }, ["/courses/web-development-fundamentals/index.html", "/courses/web-development-fundamentals/README.md"]],
  ["v-042ef170", "/courses/web-development-fundamentals/course-syllabus.html", { "title": "Course Syllabus" }, ["/courses/web-development-fundamentals/course-syllabus", "/courses/web-development-fundamentals/course-syllabus.md"]],
  ["v-2279bc04", "/courses/web-development-fundamentals/exercises.html", { "title": "Exercises" }, ["/courses/web-development-fundamentals/exercises", "/courses/web-development-fundamentals/exercises.md"]],
  ["v-75848064", "/courses/web-development-fundamentals/feedback.html", { "title": "Feedback 2021" }, ["/courses/web-development-fundamentals/feedback", "/courses/web-development-fundamentals/feedback.md"]],
  ["v-54cdf2c4", "/courses/web-development-fundamentals/lectures.html", { "title": "Lectures" }, ["/courses/web-development-fundamentals/lectures", "/courses/web-development-fundamentals/lectures.md"]],
  ["v-2036633a", "/courses/web-development-fundamentals/project-grading-guidelines.html", { "title": "Project Grading Guidelines" }, ["/courses/web-development-fundamentals/project-grading-guidelines", "/courses/web-development-fundamentals/project-grading-guidelines.md"]],
  ["v-18fce10e", "/courses/web-development-fundamentals/project-work.html", { "title": "Project Work" }, ["/courses/web-development-fundamentals/project-work", "/courses/web-development-fundamentals/project-work.md"]],
  ["v-11832447", "/courses/web-development-fundamentals/study-guide.html", { "title": "Study Guide" }, ["/courses/web-development-fundamentals/study-guide", "/courses/web-development-fundamentals/study-guide.md"]],
  ["v-3459e794", "/courses/web-development-fundamentals/time-plan.html", { "title": "Time Plan" }, ["/courses/web-development-fundamentals/time-plan", "/courses/web-development-fundamentals/time-plan.md"]],
  ["v-8723adec", "/courses/web-development-fundamentals/tutorials.html", { "title": "Tutorials" }, ["/courses/web-development-fundamentals/tutorials", "/courses/web-development-fundamentals/tutorials.md"]],
  ["v-47a3d5e4", "/courses/web-development-fundamentals/written-examination.html", { "title": "Written Examination" }, ["/courses/web-development-fundamentals/written-examination", "/courses/web-development-fundamentals/written-examination.md"]],
  ["v-1eb3f448", "/lectures/after-peters-exam/", { "title": "After Peter's Exam" }, ["/lectures/after-peters-exam/index.html", "/lectures/after-peters-exam/README.md"]],
  ["v-63b3ad24", "/lectures/ajax/", { "title": "AJAX" }, ["/lectures/ajax/index.html", "/lectures/ajax/README.md"]],
  ["v-9448f960", "/lectures/amazon-lightsail/", { "title": "Amazon Lightsail" }, ["/lectures/amazon-lightsail/index.html", "/lectures/amazon-lightsail/README.md"]],
  ["v-0f59beba", "/lectures/android-activities/", { "title": "Android Activities" }, ["/lectures/android-activities/index.html", "/lectures/android-activities/README.md"]],
  ["v-18bd48f2", "/lectures/android-app-bar/", { "title": "Android App Bar" }, ["/lectures/android-app-bar/index.html", "/lectures/android-app-bar/README.md"]],
  ["v-c2025ac6", "/lectures/android-asynchronous-operations/", { "title": "Android Asynchronous Operations" }, ["/lectures/android-asynchronous-operations/index.html", "/lectures/android-asynchronous-operations/README.md"]],
  ["v-7450cb50", "/lectures/android-backward-compatible/", { "title": "Android Backward Compatible" }, ["/lectures/android-backward-compatible/index.html", "/lectures/android-backward-compatible/README.md"]],
  ["v-6ebdf43b", "/lectures/android-bluetooth-classic/", { "title": "Android Bluetooth Classic" }, ["/lectures/android-bluetooth-classic/index.html", "/lectures/android-bluetooth-classic/README.md"]],
  ["v-54e9e571", "/lectures/android-bottom-navigation-view-and-drawer-layout/", { "title": "Android Bottom Navigation View and Drawer Layout" }, ["/lectures/android-bottom-navigation-view-and-drawer-layout/index.html", "/lectures/android-bottom-navigation-view-and-drawer-layout/README.md"]],
  ["v-e6eed994", "/lectures/android-broadcast-receivers/", { "title": "Android Broadcast Receivers" }, ["/lectures/android-broadcast-receivers/index.html", "/lectures/android-broadcast-receivers/README.md"]],
  ["v-946554ca", "/lectures/android-cloud-firestore/", { "title": "Android Cloud Firestore" }, ["/lectures/android-cloud-firestore/index.html", "/lectures/android-cloud-firestore/README.md"]],
  ["v-954c9a20", "/lectures/android-conditional-resources/", { "title": "Android Conditional Resources" }, ["/lectures/android-conditional-resources/index.html", "/lectures/android-conditional-resources/README.md"]],
  ["v-64552718", "/lectures/android-constraint-layout/", { "title": "Android Constraint Layout" }, ["/lectures/android-constraint-layout/index.html", "/lectures/android-constraint-layout/README.md"]],
  ["v-f8691880", "/lectures/android-content-providers/", { "title": "Android Content Providers" }, ["/lectures/android-content-providers/index.html", "/lectures/android-content-providers/README.md"]],
  ["v-3012332e", "/lectures/android-coordinator-layout/", { "title": "Android CoordinatorLayout" }, ["/lectures/android-coordinator-layout/index.html", "/lectures/android-coordinator-layout/README.md"]],
  ["v-3ec9963c", "/lectures/android-design-patterns/", { "title": "Android Design Patterns" }, ["/lectures/android-design-patterns/index.html", "/lectures/android-design-patterns/README.md"]],
  ["v-ba434b7a", "/lectures/android-dialogs/", { "title": "Android Dialogs" }, ["/lectures/android-dialogs/index.html", "/lectures/android-dialogs/README.md"]],
  ["v-60b038c6", "/lectures/android-file-storage/", { "title": "Android File Storage" }, ["/lectures/android-file-storage/index.html", "/lectures/android-file-storage/README.md"]],
  ["v-77a5618b", "/lectures/android-fragments/", { "title": "Android Fragments" }, ["/lectures/android-fragments/index.html", "/lectures/android-fragments/README.md"]],
  ["v-2e9a2415", "/lectures/android-fundamental-application-components/", { "title": "Android Fundamental Application Components" }, ["/lectures/android-fundamental-application-components/index.html", "/lectures/android-fundamental-application-components/README.md"]],
  ["v-462f65b8", "/lectures/android-gps/", { "title": "Android GPS" }, ["/lectures/android-gps/index.html", "/lectures/android-gps/README.md"]],
  ["v-b4de4454", "/lectures/android-introduction/", { "title": "Android Introduction" }, ["/lectures/android-introduction/index.html", "/lectures/android-introduction/README.md"]],
  ["v-e799954c", "/lectures/android-list-view/", { "title": "Android ListView" }, ["/lectures/android-list-view/index.html", "/lectures/android-list-view/README.md"]],
  ["v-4daa745a", "/lectures/android-menus/", { "title": "Android Menus" }, ["/lectures/android-menus/index.html", "/lectures/android-menus/README.md"]],
  ["v-810fb434", "/lectures/android-notifications/", { "title": "Android Notifications" }, ["/lectures/android-notifications/index.html", "/lectures/android-notifications/README.md"]],
  ["v-de7df588", "/lectures/android-linear-layout/", { "title": "Android Linear Layout" }, ["/lectures/android-linear-layout/index.html", "/lectures/android-linear-layout/README.md"]],
  ["v-3ebed4ec", "/lectures/android-permissions/", { "title": "Android Permissions" }, ["/lectures/android-permissions/index.html", "/lectures/android-permissions/README.md"]],
  ["v-748b05f7", "/lectures/android-runtime-configuration-changes/", { "title": "Android Runtime Configuration Changes" }, ["/lectures/android-runtime-configuration-changes/index.html", "/lectures/android-runtime-configuration-changes/README.md"]],
  ["v-39872bdc", "/lectures/android-scheduling/", { "title": "Android Scheduling" }, ["/lectures/android-scheduling/index.html", "/lectures/android-scheduling/README.md"]],
  ["v-7bd9c0bb", "/lectures/android-recycler-view/", { "title": "Android RecyclerView" }, ["/lectures/android-recycler-view/index.html", "/lectures/android-recycler-view/README.md"]],
  ["v-07ee4796", "/lectures/android-sensors/", { "title": "Android Sensors" }, ["/lectures/android-sensors/index.html", "/lectures/android-sensors/README.md"]],
  ["v-5d6e9692", "/lectures/android-services/", { "title": "Android Services" }, ["/lectures/android-services/index.html", "/lectures/android-services/README.md"]],
  ["v-d894191c", "/lectures/android-sqlite-database/", { "title": "Android SQLite Database" }, ["/lectures/android-sqlite-database/index.html", "/lectures/android-sqlite-database/README.md"]],
  ["v-72920372", "/lectures/android-studio-basics/", { "title": "" }, ["/lectures/android-studio-basics/index.html", "/lectures/android-studio-basics/README.md"]],
  ["v-ff4b95cc", "/lectures/android-views-and-layouts/", { "title": "Android Views and Layouts" }, ["/lectures/android-views-and-layouts/index.html", "/lectures/android-views-and-layouts/README.md"]],
  ["v-4fffb5e2", "/lectures/android-view-model/", { "title": "Android ViewModel" }, ["/lectures/android-view-model/index.html", "/lectures/android-view-model/README.md"]],
  ["v-91f742d8", "/lectures/character-encodings/", { "title": "Character Encodings" }, ["/lectures/character-encodings/index.html", "/lectures/character-encodings/README.md"]],
  ["v-5ca189d4", "/lectures/asynchronous-programming-in-js/", { "title": "Asynchronous Programming in JavaScript" }, ["/lectures/asynchronous-programming-in-js/index.html", "/lectures/asynchronous-programming-in-js/README.md"]],
  ["v-1327cdf0", "/lectures/client-side-javascript-and-bom/", { "title": "Client-side JavaScript & BOM" }, ["/lectures/client-side-javascript-and-bom/index.html", "/lectures/client-side-javascript-and-bom/README.md"]],
  ["v-cac6ea06", "/lectures/cloud-firestore/", { "title": "Cloud Firestore" }, ["/lectures/cloud-firestore/index.html", "/lectures/cloud-firestore/README.md"]],
  ["v-0fa30a06", "/lectures/content-delivery-networks/", { "title": "Content Delivery Networks" }, ["/lectures/content-delivery-networks/index.html", "/lectures/content-delivery-networks/README.md"]],
  ["v-7401f546", "/lectures/cookies-and-sessions/", { "title": "Cookies and Sessions" }, ["/lectures/cookies-and-sessions/index.html", "/lectures/cookies-and-sessions/README.md"]],
  ["v-12fe5b9b", "/lectures/common-code-mistakes/", { "title": "Common Code Mistakes" }, ["/lectures/common-code-mistakes/index.html", "/lectures/common-code-mistakes/README.md"]],
  ["v-243d8166", "/lectures/css/", { "title": "CSS" }, ["/lectures/css/index.html", "/lectures/css/README.md"]],
  ["v-62d9aca8", "/lectures/dependency-injection-in-node-js/", { "title": "Dependency Injection in Node.js" }, ["/lectures/dependency-injection-in-node-js/index.html", "/lectures/dependency-injection-in-node-js/README.md"]],
  ["v-01f0039e", "/lectures/docker-basics/", { "title": "Docker Basics" }, ["/lectures/docker-basics/index.html", "/lectures/docker-basics/README.md"]],
  ["v-49bb8916", "/lectures/designing-account-systems/", { "title": "Designing Account Systems" }, ["/lectures/designing-account-systems/index.html", "/lectures/designing-account-systems/README.md"]],
  ["v-2f81c5c3", "/lectures/document-object-model/", { "title": "Document Object Model" }, ["/lectures/document-object-model/index.html", "/lectures/document-object-model/README.md"]],
  ["v-254a83e8", "/lectures/express-basics/", { "title": "Express Basics" }, ["/lectures/express-basics/index.html", "/lectures/express-basics/README.md"]],
  ["v-630f9862", "/lectures/gdpr/", { "title": "GDPR" }, ["/lectures/gdpr/index.html", "/lectures/gdpr/README.md"]],
  ["v-3e946c20", "/lectures/frontend-frameworks/", { "title": "Frontend Frameworks" }, ["/lectures/frontend-frameworks/index.html", "/lectures/frontend-frameworks/README.md"]],
  ["v-052963ee", "/lectures/git-basics/", { "title": "Git Basics" }, ["/lectures/git-basics/index.html", "/lectures/git-basics/README.md"]],
  ["v-d2aff6fa", "/lectures/git-branches/", { "title": "Git Branches" }, ["/lectures/git-branches/index.html", "/lectures/git-branches/README.md"]],
  ["v-38e34944", "/lectures/git-synching/", { "title": "Git Synching" }, ["/lectures/git-synching/index.html", "/lectures/git-synching/README.md"]],
  ["v-33315f34", "/lectures/handlebars/", { "title": "Handlebars" }, ["/lectures/handlebars/index.html", "/lectures/handlebars/README.md"]],
  ["v-6d1ceed5", "/lectures/handling-concurrent-http-requests/", { "title": "Handling Concurrent HTTP Requests" }, ["/lectures/handling-concurrent-http-requests/index.html", "/lectures/handling-concurrent-http-requests/README.md"]],
  ["v-62e4f57a", "/lectures/html/", { "title": "HTML" }, ["/lectures/html/index.html", "/lectures/html/README.md"]],
  ["v-6e3e479a", "/lectures/garrit-css/", { "title": "CSS" }, ["/lectures/garrit-css/index.html", "/lectures/garrit-css/README.md"]],
  ["v-3f1c560e", "/lectures/html-and-css-frameworks/", { "title": "HTML and CSS Frameworks" }, ["/lectures/html-and-css-frameworks/index.html", "/lectures/html-and-css-frameworks/README.md"]],
  ["v-0026cf7f", "/lectures/internet-basics/", { "title": "Internet" }, ["/lectures/internet-basics/index.html", "/lectures/internet-basics/README.md"]],
  ["v-0a07197e", "/lectures/introduction-to-computers-and-programming/", { "title": "Introduction to Computers and Programming" }, ["/lectures/introduction-to-computers-and-programming/index.html", "/lectures/introduction-to-computers-and-programming/README.md"]],
  ["v-1195968e", "/lectures/http-and-web-applications/", { "title": "HTTP and Web Applications" }, ["/lectures/http-and-web-applications/index.html", "/lectures/http-and-web-applications/README.md"]],
  ["v-984759d6", "/lectures/jasmine-database/", { "title": "Database" }, ["/lectures/jasmine-database/index.html", "/lectures/jasmine-database/README.md"]],
  ["v-62bd9ca8", "/lectures/java/", { "title": "Java" }, ["/lectures/java/index.html", "/lectures/java/README.md"]],
  ["v-28429238", "/lectures/json-web-tokens/", { "title": "JSON Web Tokens" }, ["/lectures/json-web-tokens/index.html", "/lectures/json-web-tokens/README.md"]],
  ["v-10617a26", "/lectures/kotlin/", { "title": "Kotlin" }, ["/lectures/kotlin/index.html", "/lectures/kotlin/README.md"]],
  ["v-1e37e1a9", "/lectures/kotlin-asynchronous-operations/", { "title": "Kotlin Asynchronous Operations" }, ["/lectures/kotlin-asynchronous-operations/index.html", "/lectures/kotlin-asynchronous-operations/README.md"]],
  ["v-2801ad2a", "/lectures/javascript-basics/", { "title": "JavaScript Basics" }, ["/lectures/javascript-basics/index.html", "/lectures/javascript-basics/README.md"]],
  ["v-7d0036a7", "/lectures/layered-architecture-in-node-js/", { "title": "Layered Architecture in Node.js" }, ["/lectures/layered-architecture-in-node-js/index.html", "/lectures/layered-architecture-in-node-js/README.md"]],
  ["v-1df125fc", "/lectures/node-js/", { "title": "Node.js" }, ["/lectures/node-js/index.html", "/lectures/node-js/README.md"]],
  ["v-24339936", "/lectures/npm/", { "title": "npm" }, ["/lectures/npm/index.html", "/lectures/npm/README.md"]],
  ["v-8994abb6", "/lectures/peters-feedback/", { "title": "Peter's Feedback" }, ["/lectures/peters-feedback/index.html", "/lectures/peters-feedback/README.md"]],
  ["v-e5ed128e", "/lectures/python-abstraction/", { "title": "Python Abstraction" }, ["/lectures/python-abstraction/index.html", "/lectures/python-abstraction/README.md"]],
  ["v-4ffdc4e0", "/lectures/python-basics-part-1/", { "title": "Python Basics - Part 1" }, ["/lectures/python-basics-part-1/index.html", "/lectures/python-basics-part-1/README.md"]],
  ["v-4ffdc4ff", "/lectures/python-basics-part-2/", { "title": "Python Basics - Part 2" }, ["/lectures/python-basics-part-2/index.html", "/lectures/python-basics-part-2/README.md"]],
  ["v-66ca1407", "/lectures/python-conditions/", { "title": "Python Conditions" }, ["/lectures/python-conditions/index.html", "/lectures/python-conditions/README.md"]],
  ["v-1e0b6f67", "/lectures/python-data-storage/", { "title": "Python Data Storage" }, ["/lectures/python-data-storage/index.html", "/lectures/python-data-storage/README.md"]],
  ["v-4c84d27c", "/lectures/python-dicts/", { "title": "Python Dicts" }, ["/lectures/python-dicts/index.html", "/lectures/python-dicts/README.md"]],
  ["v-58147338", "/lectures/python-functions/", { "title": "Python Functions" }, ["/lectures/python-functions/index.html", "/lectures/python-functions/README.md"]],
  ["v-b1010a36", "/lectures/python-introduction/", { "title": "Python Introduction" }, ["/lectures/python-introduction/index.html", "/lectures/python-introduction/README.md"]],
  ["v-3128bcac", "/lectures/python-lists/", { "title": "Python Lists" }, ["/lectures/python-lists/index.html", "/lectures/python-lists/README.md"]],
  ["v-308363a0", "/lectures/python-loops/", { "title": "Python Loops" }, ["/lectures/python-loops/index.html", "/lectures/python-loops/README.md"]],
  ["v-55debfe0", "/lectures/python-modelling/", { "title": "Python Modelling" }, ["/lectures/python-modelling/index.html", "/lectures/python-modelling/README.md"]],
  ["v-46c37ff8", "/lectures/python-modules/", { "title": "Python Modules" }, ["/lectures/python-modules/index.html", "/lectures/python-modules/README.md"]],
  ["v-645c8f3e", "/lectures/python-object-oriented-programming/", { "title": "Python Object-Oriented Programming" }, ["/lectures/python-object-oriented-programming/index.html", "/lectures/python-object-oriented-programming/README.md"]],
  ["v-54753746", "/lectures/python-strings/", { "title": "Python Strings" }, ["/lectures/python-strings/index.html", "/lectures/python-strings/README.md"]],
  ["v-0157d02a", "/lectures/report-writing/", { "title": "Report Writing" }, ["/lectures/report-writing/index.html", "/lectures/report-writing/README.md"]],
  ["v-f63179be", "/lectures/rest-api-authorization/", { "title": "REST API Authorization" }, ["/lectures/rest-api-authorization/index.html", "/lectures/rest-api-authorization/README.md"]],
  ["v-5b18e8df", "/lectures/rest-api-basics/", { "title": "REST API Basics" }, ["/lectures/rest-api-basics/index.html", "/lectures/rest-api-basics/README.md"]],
  ["v-f3dfd408", "/lectures/rest-api-in-express/", { "title": "REST API in Express" }, ["/lectures/rest-api-in-express/index.html", "/lectures/rest-api-in-express/README.md"]],
  ["v-14d2aae8", "/lectures/same-origin-policy-and-cross-origin-resource-sharing/", { "title": "Same-Origin Policy and Cross-Origin Resource Sharing" }, ["/lectures/same-origin-policy-and-cross-origin-resource-sharing/index.html", "/lectures/same-origin-policy-and-cross-origin-resource-sharing/README.md"]],
  ["v-2b690dde", "/lectures/scaling-databases/", { "title": "Scaling Databases" }, ["/lectures/scaling-databases/index.html", "/lectures/scaling-databases/README.md"]],
  ["v-4be091cc", "/lectures/scaling-web-applications/", { "title": "Scaling Web Applications" }, ["/lectures/scaling-web-applications/index.html", "/lectures/scaling-web-applications/README.md"]],
  ["v-c93553dc", "/lectures/sop-and-cors/", { "title": "SOP and CORS" }, ["/lectures/sop-and-cors/index.html", "/lectures/sop-and-cors/README.md"]],
  ["v-bc0e457c", "/lectures/sqlite/", { "title": "SQLite" }, ["/lectures/sqlite/index.html", "/lectures/sqlite/README.md"]],
  ["v-7e0b9ae0", "/lectures/teamwork/", { "title": "Teamwork" }, ["/lectures/teamwork/index.html", "/lectures/teamwork/README.md"]],
  ["v-c7c21722", "/lectures/thesis-defense/", { "title": "Thesis Work" }, ["/lectures/thesis-defense/index.html", "/lectures/thesis-defense/README.md"]],
  ["v-0cbcc1e4", "/lectures/thesis-proposals/", { "title": "Thesis Proposals" }, ["/lectures/thesis-proposals/index.html", "/lectures/thesis-proposals/README.md"]],
  ["v-2a8c6e09", "/lectures/third-party-authentication/", { "title": "Third-Party Authentication" }, ["/lectures/third-party-authentication/index.html", "/lectures/third-party-authentication/README.md"]],
  ["v-c804b61c", "/lectures/uml-use-case-diagrams/", { "title": "UML Use-Case Diagrams" }, ["/lectures/uml-use-case-diagrams/index.html", "/lectures/uml-use-case-diagrams/README.md"]],
  ["v-18f3cd95", "/lectures/using-cookies-and-sessions-in-express/", { "title": "Using Cookies and Sessions in Express" }, ["/lectures/using-cookies-and-sessions-in-express/index.html", "/lectures/using-cookies-and-sessions-in-express/README.md"]],
  ["v-e9b2497a", "/lectures/using-sequelize-in-node-js/", { "title": "Using Sequelize in Node.js" }, ["/lectures/using-sequelize-in-node-js/index.html", "/lectures/using-sequelize-in-node-js/README.md"]],
  ["v-234b2462", "/lectures/using-shells/", { "title": "Using Shells" }, ["/lectures/using-shells/index.html", "/lectures/using-shells/README.md"]],
  ["v-bdc36168", "/lectures/using-sqlite-in-node-js/", { "title": "Using SQlite in Node.js" }, ["/lectures/using-sqlite-in-node-js/index.html", "/lectures/using-sqlite-in-node-js/README.md"]],
  ["v-245ddad7", "/lectures/web-applications-in-express/", { "title": "Web Applications in Express" }, ["/lectures/web-applications-in-express/index.html", "/lectures/web-applications-in-express/README.md"]],
  ["v-242c2fac", "/lectures/vue/", { "title": "Vue" }, ["/lectures/vue/index.html", "/lectures/vue/README.md"]],
  ["v-4c352c5a", "/lectures/web-applications-in-node-js/", { "title": "Web Applications in Node.js" }, ["/lectures/web-applications-in-node-js/index.html", "/lectures/web-applications-in-node-js/README.md"]],
  ["v-3fb714cc", "/lectures/web-cookies/", { "title": "Web Cookies" }, ["/lectures/web-cookies/index.html", "/lectures/web-cookies/README.md"]],
  ["v-1ea863d6", "/lectures/web-security/", { "title": "Web Security" }, ["/lectures/web-security/index.html", "/lectures/web-security/README.md"]],
  ["v-3b29a058", "/lectures/web-sessions/", { "title": "Web Sessions" }, ["/lectures/web-sessions/index.html", "/lectures/web-sessions/README.md"]],
  ["v-f4c42d50", "/lectures/writing-exam-answers/README.md.html", { "title": "Writing exam answers" }, ["/lectures/writing-exam-answers/README.md", "/lectures/writing-exam-answers/README.md.md"]],
  ["v-8b129efe", "/courses/client-server-communication/exams/exam-2020-08-13.html", { "title": "Exam 2020-08-13" }, ["/courses/client-server-communication/exams/exam-2020-08-13", "/courses/client-server-communication/exams/exam-2020-08-13.md"]],
  ["v-263d0810", "/courses/client-server-communication/exams/exam-2022-10-19.html", { "title": "Exam 2022-10-19" }, ["/courses/client-server-communication/exams/exam-2022-10-19", "/courses/client-server-communication/exams/exam-2022-10-19.md"]],
  ["v-d162d11e", "/courses/client-server-communication/exams/exam-2023-01-08.html", { "title": "Exam 2023-01-08" }, ["/courses/client-server-communication/exams/exam-2023-01-08", "/courses/client-server-communication/exams/exam-2023-01-08.md"]],
  ["v-56155c48", "/courses/client-server-communication/exams/exam-2023-08-15.html", { "title": "Exam 2023-08-15" }, ["/courses/client-server-communication/exams/exam-2023-08-15", "/courses/client-server-communication/exams/exam-2023-08-15.md"]],
  ["v-448d32ad", "/courses/introduction-to-script-programming/exams/exam-2021-02-18.html", { "title": "Exam 2021-02-18" }, ["/courses/introduction-to-script-programming/exams/exam-2021-02-18", "/courses/introduction-to-script-programming/exams/exam-2021-02-18.md"]],
  ["v-3b69bf4e", "/courses/introduction-to-script-programming/exams/exam-2022-12-15.html", { "title": "Exam 2022-12-15" }, ["/courses/introduction-to-script-programming/exams/exam-2022-12-15", "/courses/introduction-to-script-programming/exams/exam-2022-12-15.md"]],
  ["v-4ed1f38e", "/courses/introduction-to-script-programming/exams/exam-2023-02-15.html", { "title": "Exam 2023-02-15" }, ["/courses/introduction-to-script-programming/exams/exam-2023-02-15", "/courses/introduction-to-script-programming/exams/exam-2023-02-15.md"]],
  ["v-72909616", "/courses/introduction-to-script-programming/exams/exam-2023-08-14.html", { "title": "Exam 2023-08-14" }, ["/courses/introduction-to-script-programming/exams/exam-2023-08-14", "/courses/introduction-to-script-programming/exams/exam-2023-08-14.md"]],
  ["v-abc05e1a", "/lectures/svelte/", { "title": "Svelte" }, ["/lectures/svelte/index.html", "/lectures/svelte/README.md"]],
  ["v-2f725a65", "/courses/web-development-advanced-concepts/exams/exam-2021-08-22.html", { "title": "Exam 2021-08-22" }, ["/courses/web-development-advanced-concepts/exams/exam-2021-08-22", "/courses/web-development-advanced-concepts/exams/exam-2021-08-22.md"]],
  ["v-5b3452bd", "/courses/web-development-advanced-concepts/exams/exam-2023-03-23.html", { "title": "Exam 2023-03-23" }, ["/courses/web-development-advanced-concepts/exams/exam-2023-03-23", "/courses/web-development-advanced-concepts/exams/exam-2023-03-23.md"]],
  ["v-3d32e840", "/courses/web-development-advanced-concepts/exams/exam-2023-06-12.html", { "title": "Exam 2023-06-12" }, ["/courses/web-development-advanced-concepts/exams/exam-2023-06-12", "/courses/web-development-advanced-concepts/exams/exam-2023-06-12.md"]],
  ["v-3b6bf3e5", "/courses/web-development-advanced-concepts/exams/exam-2023-08-20.html", { "title": "Exam 2023-08-20" }, ["/courses/web-development-advanced-concepts/exams/exam-2023-08-20", "/courses/web-development-advanced-concepts/exams/exam-2023-08-20.md"]],
  ["v-d8d0c3dc", "/courses/web-development-fundamentals/exams/exam-2021-08-16.html", { "title": "Exam 2021-08-16" }, ["/courses/web-development-fundamentals/exams/exam-2021-08-16", "/courses/web-development-fundamentals/exams/exam-2021-08-16.md"]],
  ["v-1818640f", "/courses/web-development-fundamentals/exams/exam-2022-10-20.html", { "title": "Exam 2022-10-20" }, ["/courses/web-development-fundamentals/exams/exam-2022-10-20", "/courses/web-development-fundamentals/exams/exam-2022-10-20.md"]],
  ["v-dc9ba2ea", "/courses/web-development-fundamentals/exams/exam-2023-01-14.html", { "title": "Exam 2023-01-14" }, ["/courses/web-development-fundamentals/exams/exam-2023-01-14", "/courses/web-development-fundamentals/exams/exam-2023-01-14.md"]],
  ["v-ba0a2e60", "/courses/web-development-fundamentals/exams/exam-2023-08-16.html", { "title": "Exam 2023-08-16" }, ["/courses/web-development-fundamentals/exams/exam-2023-08-16", "/courses/web-development-fundamentals/exams/exam-2023-08-16.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]]
];
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const layout = usePageLayout();
    return () => h(layout.value);
  }
});
var createRoutes = () => pagesRoutes.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress
    }
  ]
);
var historyCreator = createWebHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/course-material/")),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION_NORMALIZED) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = ref(router.currentRoute.value.path);
  watch(
    () => router.currentRoute.value.path,
    (value) => routePath.value = value
  );
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageFrontmatter = computed(
    () => resolvers.resolvePageFrontmatter(pageData.value)
  );
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(() => resolvers.resolvePageLang(pageData.value));
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  app.provide(layoutsSymbol, layouts);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  app.provide(pageLayoutSymbol, pageLayout);
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    layouts,
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  const headTags = ref([]);
  const loadHead = () => {
    head.value.forEach((item) => {
      const tag = queryHeadTag(item);
      if (tag) {
        headTags.value.push(tag);
      }
    });
  };
  const updateHead = () => {
    document.documentElement.lang = lang.value;
    headTags.value.forEach((item) => {
      if (item.parentNode === document.head) {
        document.head.removeChild(item);
      }
    });
    headTags.value.splice(0, headTags.value.length);
    head.value.forEach((item) => {
      const tag = createHeadTag(item);
      if (tag !== null) {
        document.head.appendChild(tag);
        headTags.value.push(tag);
      }
    });
  };
  provide(updateHeadSymbol, updateHead);
  onMounted(() => {
    loadHead();
    updateHead();
    watch(
      () => head.value,
      () => updateHead()
    );
  });
};
var queryHeadTag = ([
  tagName,
  attrs,
  content = ""
]) => {
  const attrsSelector = Object.entries(attrs).map(([key, value]) => {
    if (isString(value)) {
      return `[${key}=${JSON.stringify(value)}]`;
    }
    if (value === true) {
      return `[${key}]`;
    }
    return "";
  }).join("");
  const selector2 = `head > ${tagName}${attrsSelector}`;
  const tags = Array.from(document.querySelectorAll(selector2));
  const matchedTag = tags.find((item) => item.innerText === content);
  return matchedTag || null;
};
var createHeadTag = ([
  tagName,
  attrs,
  content
]) => {
  if (!isString(tagName)) {
    return null;
  }
  const tag = document.createElement(tagName);
  if (isPlainObject(attrs)) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (isString(value)) {
        tag.setAttribute(key, value);
      } else if (value === true) {
        tag.setAttribute(key, "");
      }
    });
  }
  if (isString(content)) {
    tag.appendChild(document.createTextNode(content));
  }
  return tag;
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h(RouterView),
        ...clientConfigs.flatMap(
          ({ rootComponents = [] }) => rootComponents.map((component) => h(component))
        )
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  const globalComputed = setupGlobalComputed(app, router, clientConfigs);
  {
    const { setupDevtools } = await __vitePreload(() => import("./setupDevtools-X4YFRK4B-c5dd00e2.js"), true ? [] : void 0);
    setupDevtools(app, globalComputed);
  }
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
{
  createVueApp().then(({ app, router }) => {
    router.isReady().then(() => {
      app.mount("#app");
    });
  });
}
export {
  Fragment as F,
  _export_sfc as _,
  createBaseVNode as a,
  createTextVNode as b,
  createElementBlock as c,
  createVueApp,
  createVNode as d,
  withCtx as e,
  createStaticVNode as f,
  createCommentVNode as g,
  createBlock as h,
  renderList as i,
  renderSlot as j,
  popScopeId as k,
  __vitePreload as l,
  resolveDynamicComponent as m,
  normalizeClass as n,
  openBlock as o,
  pushScopeId as p,
  resolveComponent as r,
  setupDevtoolsPlugin as s,
  toDisplayString as t,
  watch as w
};
