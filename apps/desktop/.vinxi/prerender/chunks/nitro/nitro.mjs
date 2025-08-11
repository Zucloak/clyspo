import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import destr from 'file:///app/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestURL, setResponseStatus, getResponseHeader, setResponseHeaders, send, getRequestHeader, appendResponseHeader, removeResponseHeader, createError, setResponseHeader, H3Event, setHeader, getRequestIP, parseCookies, getResponseStatus, getResponseStatusText, getCookie, setCookie, getResponseHeaders, getRequestWebStream, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler } from 'file:///app/node_modules/.pnpm/h3@1.15.3/node_modules/h3/dist/index.mjs';
import { createHooks } from 'file:///app/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///app/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///app/node_modules/.pnpm/node-mock-http@1.0.0/node_modules/node-mock-http/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///app/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///app/node_modules/.pnpm/unstorage@1.16.0_@planetscale+database@1.19.0_db0@0.3.2_drizzle-orm@0.43.1_@cloudflare+_6118ff346fe12358a00c8729991d4157/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///app/node_modules/.pnpm/unstorage@1.16.0_@planetscale+database@1.19.0_db0@0.3.2_drizzle-orm@0.43.1_@cloudflare+_6118ff346fe12358a00c8729991d4157/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///app/node_modules/.pnpm/unstorage@1.16.0_@planetscale+database@1.19.0_db0@0.3.2_drizzle-orm@0.43.1_@cloudflare+_6118ff346fe12358a00c8729991d4157/node_modules/unstorage/drivers/fs-lite.mjs';
import { digest } from 'file:///app/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///app/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///app/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///app/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file:///app/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///app/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import _taCPReB10UsNJFa39RZEQvr83h6T6tQNaH8Agc1tVT0 from 'file:///app/node_modules/.pnpm/vinxi@0.5.6_@planetscale+database@1.19.0_@types+node@22.15.17_db0@0.3.2_drizzle-orm@0.4_eb0bd7995a021d6ae191d8ea1423a3d5/node_modules/vinxi/lib/app-fetch.js';
import _Qk16KcJsP0sszjFc47S8vhBQXtBmnloTz7n7ItGXo from 'file:///app/node_modules/.pnpm/vinxi@0.5.6_@planetscale+database@1.19.0_@types+node@22.15.17_db0@0.3.2_drizzle-orm@0.4_eb0bd7995a021d6ae191d8ea1423a3d5/node_modules/vinxi/lib/app-manifest.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///app/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';
import { sharedConfig, lazy, createComponent, catchError, onCleanup } from 'file:///app/node_modules/.pnpm/solid-js@1.9.6/node_modules/solid-js/dist/server.js';
import { renderToString, getRequestEvent, isServer, ssrElement, escape, mergeProps, ssr, createComponent as createComponent$1, ssrHydrationKey, NoHydration, ssrAttribute } from 'file:///app/node_modules/.pnpm/solid-js@1.9.6/node_modules/solid-js/web/dist/server.js';
import { provideRequestEvent } from 'file:///app/node_modules/.pnpm/solid-js@1.9.6/node_modules/solid-js/web/storage/dist/storage.js';

const serverAssets = [{"baseName":"server","dir":"/app/apps/desktop/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/app/apps/desktop"}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/app/apps/desktop"}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/app/apps/desktop/.vinxi"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/app/apps/desktop/.vinxi/cache"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {};



const appConfig$1 = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {
      "/_build/assets/**": {
        "headers": {
          "cache-control": "public, immutable, max-age=31536000"
        }
      }
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig$1));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$0 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const appConfig = {"name":"vinxi","routers":[{"name":"public","type":"static","base":"/","dir":"./public","root":"/app/apps/desktop","order":0,"outDir":"/app/apps/desktop/.vinxi/build/public"},{"name":"ssr","type":"http","link":{"client":"client"},"handler":"src/entry-server.tsx","extensions":["js","jsx","ts","tsx"],"target":"server","root":"/app/apps/desktop","base":"/","outDir":"/app/apps/desktop/.vinxi/build/ssr","order":1},{"name":"client","type":"client","base":"/_build","handler":"src/entry-client.tsx","extensions":["js","jsx","ts","tsx"],"target":"browser","root":"/app/apps/desktop","outDir":"/app/apps/desktop/.vinxi/build/client","order":2},{"name":"server-fns","type":"http","base":"/_server","handler":"../../node_modules/.pnpm/@solidjs+start@1.1.3_@testing-library+jest-dom@6.5.0_@types+node@22.15.17_jiti@2.4.2_so_f4b66552417f05f2a1cd6e1e07ca3b7d/node_modules/@solidjs/start/dist/runtime/server-handler.js","target":"server","root":"/app/apps/desktop","outDir":"/app/apps/desktop/.vinxi/build/server-fns","order":3}],"server":{"compressPublicAssets":{"brotli":true},"routeRules":{"/_build/assets/**":{"headers":{"cache-control":"public, immutable, max-age=31536000"}}},"experimental":{"asyncContext":true},"preset":"static","prerender":{}},"root":"/app/apps/desktop"};
				const buildManifest = {"ssr":{"virtual:$vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:$vinxi/handler/ssr","isEntry":true}},"client":{"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-400-normal.woff":{"file":"assets/geist-sans-latin-400-normal-BOaIZNA2.woff","src":"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-400-normal.woff2":{"file":"assets/geist-sans-latin-400-normal-gapTbOY8.woff2","src":"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-500-normal.woff":{"file":"assets/geist-sans-latin-500-normal-CN2lyvyL.woff","src":"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-500-normal.woff2":{"file":"assets/geist-sans-latin-500-normal-uokXdC-Q.woff2","src":"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-700-normal.woff":{"file":"assets/geist-sans-latin-700-normal-CjScfYeH.woff","src":"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-700-normal.woff2":{"file":"assets/geist-sans-latin-700-normal-BmN9tIp5.woff2","src":"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-700-normal.woff2"},"../../node_modules/.pnpm/@rive-app+canvas@2.27.1/node_modules/@rive-app/canvas/rive.wasm":{"file":"assets/rive-kSJxF25z.wasm","src":"../../node_modules/.pnpm/@rive-app+canvas@2.27.1/node_modules/@rive-app/canvas/rive.wasm"},"_2LYGDFGW-HKI54TK5.js":{"file":"assets/2LYGDFGW-HKI54TK5.js","name":"2LYGDFGW","imports":["_web-BCfGxYEI.js","_LR7LBJN3-DWofh4SL.js","_5WXHJDCZ-D75A8m8C.js","_floating-ui.dom-DzoQ-s65.js","_combineProps-oHjLfPsP.js","_index-DCJEdp2A.js","_JNCCF6MP-4sxnBYeu.js","_index-B1BdrjQY.js"]},"_5WXHJDCZ-D75A8m8C.js":{"file":"assets/5WXHJDCZ-D75A8m8C.js","name":"5WXHJDCZ","imports":["_index-DCJEdp2A.js","_web-BCfGxYEI.js"]},"_CapErrorBoundary-Cn5AqE6B.js":{"file":"assets/CapErrorBoundary-Cn5AqE6B.js","name":"CapErrorBoundary","imports":["_web-BCfGxYEI.js","_SwitchTab-CBKi0qjj.js","_event-BsZo1uc7.js","_logo-VRagdSxV.js"]},"_CaptionControlsWindows11-BKE5CC1Q.js":{"file":"assets/CaptionControlsWindows11-BKE5CC1Q.js","name":"CaptionControlsWindows11","imports":["_web-BCfGxYEI.js","_window-CGzFyLXp.js","_index-M33yfidE.js","_titlebar-state-C8fqJAwN.js"]},"_Context-DZSOZnWt.js":{"file":"assets/Context-DZSOZnWt.js","name":"Context","imports":["_index-BzicxdXv.js","_web-BCfGxYEI.js"]},"_CropAreaRenderer-CN_ITMa6.js":{"file":"assets/CropAreaRenderer-CN_ITMa6.js","name":"CropAreaRenderer","imports":["_web-BCfGxYEI.js"]},"_Header-BKS-4ud-.js":{"file":"assets/Header-BKS-4ud-.js","name":"Header","imports":["_web-BCfGxYEI.js","_window-CGzFyLXp.js","_index-DmupNlQQ.js","_rotate-ccw-CM5pUlcS.js","_index-DRZcwRr6.js","_index-M33yfidE.js","_SwitchTab-CBKi0qjj.js","_CaptionControlsWindows11-BKE5CC1Q.js","_Tooltip-uocwE6rA.js","_analytics-Bl4UmPF-.js","_tauri-NQyqRux-.js","_titlebar-state-C8fqJAwN.js","_context-Zi7A3g3B.js","_ui-DTFQjz5T.js","_store-COLfFlJE.js","_chevron-down-VBQJb1U_.js","_settings-wl6B6NMt.js","_WRC6BLVS-B7nXXnbA.js","_index-CSaDVPHJ.js","_store-B-U5MmP7.js","_copy-0I7pZbp1.js","_trash-BJ3RIGFc.js","_folder-BfBEOjQD.js","_check-Dv8ShDZ6.js"]},"_JNCCF6MP-4sxnBYeu.js":{"file":"assets/JNCCF6MP-4sxnBYeu.js","name":"JNCCF6MP"},"_LR7LBJN3-DWofh4SL.js":{"file":"assets/LR7LBJN3-DWofh4SL.js","name":"LR7LBJN3","imports":["_web-BCfGxYEI.js","_index-DCJEdp2A.js"]},"_Loader-viXlpmTn.js":{"file":"assets/Loader-viXlpmTn.js","name":"Loader","imports":["_web-BCfGxYEI.js","_logo-VRagdSxV.js"]},"_LoaderIcon-vvHMUdiU.js":{"file":"assets/LoaderIcon-vvHMUdiU.js","name":"LoaderIcon","imports":["_web-BCfGxYEI.js","_toast-DnJx6gB8.js"]},"_ModeSelect-BJJ_f2zv.js":{"file":"assets/ModeSelect-BJJ_f2zv.js","name":"ModeSelect","imports":["_web-BCfGxYEI.js","_index-M33yfidE.js","_queries-DBWj-Knm.js","_film-cut-BOCL_tgM.js"],"assets":["assets/instant-mode-dark-CxsYkVlX.png","assets/instant-mode-light-CnQJckdc.png","assets/studio-mode-dark-BfmnURAh.png","assets/studio-mode-light-C-7zFY40.png"]},"_Setting-cRnihSjt.js":{"file":"assets/Setting-cRnihSjt.js","name":"Setting","imports":["_web-BCfGxYEI.js","_Toggle-CCBXD6Cq.js"]},"_SignInButton-ouoxLnKb.js":{"file":"assets/SignInButton-ouoxLnKb.js","name":"SignInButton","imports":["_SwitchTab-CBKi0qjj.js","_auth-DjyYg_UE.js","_web-BCfGxYEI.js"]},"_SwitchTab-CBKi0qjj.js":{"file":"assets/SwitchTab-CBKi0qjj.js","name":"SwitchTab","imports":["_web-BCfGxYEI.js","_index-M33yfidE.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_combineProps-oHjLfPsP.js"]},"_Toggle-CCBXD6Cq.js":{"file":"assets/Toggle-CCBXD6Cq.js","name":"Toggle","imports":["_web-BCfGxYEI.js","_VI7QYH27-603SSBI-.js","_ZZYKR3VO-DAa9CJSv.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_combineProps-oHjLfPsP.js","_index-M33yfidE.js"]},"_Tooltip-uocwE6rA.js":{"file":"assets/Tooltip-uocwE6rA.js","name":"Tooltip","imports":["_web-BCfGxYEI.js","_2LYGDFGW-HKI54TK5.js","_index-M33yfidE.js"]},"_U42ECMND-BDjyePcW.js":{"file":"assets/U42ECMND-BDjyePcW.js","name":"U42ECMND"},"_UKTBL2JL-CvU0Qdg8.js":{"file":"assets/UKTBL2JL-CvU0Qdg8.js","name":"UKTBL2JL","imports":["_VI7QYH27-603SSBI-.js","_5WXHJDCZ-D75A8m8C.js","_web-BCfGxYEI.js"]},"_VI7QYH27-603SSBI-.js":{"file":"assets/VI7QYH27-603SSBI-.js","name":"VI7QYH27","imports":["_5WXHJDCZ-D75A8m8C.js","_web-BCfGxYEI.js","_index-DCJEdp2A.js"]},"_WRC6BLVS-B7nXXnbA.js":{"file":"assets/WRC6BLVS-B7nXXnbA.js","name":"WRC6BLVS","imports":["_web-BCfGxYEI.js","_SwitchTab-CBKi0qjj.js","_ZZYKR3VO-DAa9CJSv.js","_5WXHJDCZ-D75A8m8C.js","_ui-DTFQjz5T.js","_JNCCF6MP-4sxnBYeu.js","_index-DCJEdp2A.js","_2LYGDFGW-HKI54TK5.js","_LR7LBJN3-DWofh4SL.js","_UKTBL2JL-CvU0Qdg8.js","_index-B1BdrjQY.js","_combineProps-oHjLfPsP.js"]},"_ZZYKR3VO-DAa9CJSv.js":{"file":"assets/ZZYKR3VO-DAa9CJSv.js","name":"ZZYKR3VO","imports":["_5WXHJDCZ-D75A8m8C.js","_web-BCfGxYEI.js","_index-DCJEdp2A.js","_VI7QYH27-603SSBI-.js","_JNCCF6MP-4sxnBYeu.js"]},"_action-CCC_kcvo.js":{"file":"assets/action-CCC_kcvo.js","name":"action","imports":["_web-BCfGxYEI.js","_routing-Ck0R8n-z.js"]},"_analytics-Bl4UmPF-.js":{"file":"assets/analytics-Bl4UmPF-.js","name":"analytics"},"_app-DzQ8LI4z.js":{"file":"assets/app-DzQ8LI4z.js","name":"app","imports":["_event-BsZo1uc7.js"]},"_auth-DjyYg_UE.js":{"file":"assets/auth-DjyYg_UE.js","name":"auth","imports":["_index-CSaDVPHJ.js","_event-BsZo1uc7.js","_window-CGzFyLXp.js","_index-B3jaOB3S.js","_store-B-U5MmP7.js","_analytics-Bl4UmPF-.js","_tauri-NQyqRux-.js","_types-5W_duOpx.js"]},"_bell-fny2Av6x.js":{"file":"assets/bell-fny2Av6x.js","name":"bell","imports":["_web-BCfGxYEI.js"]},"_camera-f6QVal7G.js":{"file":"assets/camera-f6QVal7G.js","name":"camera","imports":["_web-BCfGxYEI.js"]},"_check-Dv8ShDZ6.js":{"file":"assets/check-Dv8ShDZ6.js","name":"check","imports":["_web-BCfGxYEI.js"]},"_chevron-down-VBQJb1U_.js":{"file":"assets/chevron-down-VBQJb1U_.js","name":"chevron-down","imports":["_web-BCfGxYEI.js"]},"_circle-check-wA7W96h9.js":{"file":"assets/circle-check-wA7W96h9.js","name":"circle-check","imports":["_web-BCfGxYEI.js"]},"_circle-x-C1Ty7rjt.js":{"file":"assets/circle-x-C1Ty7rjt.js","name":"circle-x","imports":["_web-BCfGxYEI.js"]},"_combineProps-oHjLfPsP.js":{"file":"assets/combineProps-oHjLfPsP.js","name":"combineProps"},"_components-CzM5XsXf.js":{"file":"assets/components-CzM5XsXf.js","name":"components","imports":["_web-BCfGxYEI.js","_routing-Ck0R8n-z.js"]},"_context-Zi7A3g3B.js":{"file":"assets/context-Zi7A3g3B.js","name":"context","imports":["_SwitchTab-CBKi0qjj.js","_web-BCfGxYEI.js","_index-DCJEdp2A.js","_eventListener-Dvds-6t5.js","_index-BzicxdXv.js","_store-COLfFlJE.js","_index-CSaDVPHJ.js","_store-B-U5MmP7.js","_queries-DBWj-Knm.js","_socket-y78uvu7-.js","_tauri-NQyqRux-.js","_window-CGzFyLXp.js"]},"_copy-0I7pZbp1.js":{"file":"assets/copy-0I7pZbp1.js","name":"copy","imports":["_event-BsZo1uc7.js","_tauri-NQyqRux-.js","_web-BCfGxYEI.js"]},"_createEventListener-hBGiy99l.js":{"file":"assets/createEventListener-hBGiy99l.js","name":"createEventListener","imports":["_web-BCfGxYEI.js","_tauri-NQyqRux-.js"]},"_crop-Dxrsj5UL.js":{"file":"assets/crop-Dxrsj5UL.js","name":"crop","imports":["_web-BCfGxYEI.js"]},"_enlarge-D3YDfZAv.js":{"file":"assets/enlarge-D3YDfZAv.js","name":"enlarge","imports":["_web-BCfGxYEI.js","_UKTBL2JL-CvU0Qdg8.js","_VI7QYH27-603SSBI-.js","_5WXHJDCZ-D75A8m8C.js"]},"_event-BsZo1uc7.js":{"file":"assets/event-BsZo1uc7.js","name":"event"},"_eventListener-Dvds-6t5.js":{"file":"assets/eventListener-Dvds-6t5.js","name":"eventListener","imports":["_index-DCJEdp2A.js","_web-BCfGxYEI.js"]},"_eye-Dvy2GA25.js":{"file":"assets/eye-Dvy2GA25.js","name":"eye","imports":["_web-BCfGxYEI.js"]},"_film-cut-BOCL_tgM.js":{"file":"assets/film-cut-BOCL_tgM.js","name":"film-cut","imports":["_web-BCfGxYEI.js"]},"_floating-ui.dom-DzoQ-s65.js":{"file":"assets/floating-ui.dom-DzoQ-s65.js","name":"floating-ui.dom"},"_folder-BfBEOjQD.js":{"file":"assets/folder-BfBEOjQD.js","name":"folder","imports":["_web-BCfGxYEI.js"]},"_hard-drive-DWY7FyM0.js":{"file":"assets/hard-drive-DWY7FyM0.js","name":"hard-drive","imports":["_web-BCfGxYEI.js"]},"_hotkeys-BmWg1icV.js":{"file":"assets/hotkeys-BmWg1icV.js","name":"hotkeys","imports":["_web-BCfGxYEI.js"]},"_index-B1BdrjQY.js":{"file":"assets/index-B1BdrjQY.js","name":"index","imports":["_U42ECMND-BDjyePcW.js","_web-BCfGxYEI.js"]},"_index-B3jaOB3S.js":{"file":"assets/index-B3jaOB3S.js","name":"index","imports":["_event-BsZo1uc7.js"]},"_index-BzicxdXv.js":{"file":"assets/index-BzicxdXv.js","name":"index","imports":["_web-BCfGxYEI.js"]},"_index-CSaDVPHJ.js":{"file":"assets/index-CSaDVPHJ.js","name":"index","imports":["_web-BCfGxYEI.js","_store-COLfFlJE.js"]},"_index-CuxkcSNy.js":{"file":"assets/index-CuxkcSNy.js","name":"index","imports":["_web-BCfGxYEI.js","_U42ECMND-BDjyePcW.js","_style-BSCqJpiQ.js","_floating-ui.dom-DzoQ-s65.js"]},"_index-D3VywF1g.js":{"file":"assets/index-D3VywF1g.js","name":"index","imports":["_event-BsZo1uc7.js"]},"_index-DCJEdp2A.js":{"file":"assets/index-DCJEdp2A.js","name":"index","imports":["_web-BCfGxYEI.js"]},"_index-DRZcwRr6.js":{"file":"assets/index-DRZcwRr6.js","name":"index","imports":["_event-BsZo1uc7.js"]},"_index-DfaT3VxD.js":{"file":"assets/index-DfaT3VxD.js","name":"index","imports":["_web-BCfGxYEI.js"]},"_index-Di8W_zpT.js":{"file":"assets/index-Di8W_zpT.js","name":"index","imports":["_web-BCfGxYEI.js","_index-DCJEdp2A.js"]},"_index-DmupNlQQ.js":{"file":"assets/index-DmupNlQQ.js","name":"index","imports":["_event-BsZo1uc7.js"]},"_index-M33yfidE.js":{"file":"assets/index-M33yfidE.js","name":"index"},"_index-VJH0gGJz.js":{"file":"assets/index-VJH0gGJz.js","name":"index","imports":["_web-BCfGxYEI.js","_5WXHJDCZ-D75A8m8C.js"]},"_layout-Dzr1u58d.js":{"file":"assets/layout-Dzr1u58d.js","name":"layout","imports":["_web-BCfGxYEI.js"]},"_link-Clkq6L3_.js":{"file":"assets/link-Clkq6L3_.js","name":"link","imports":["_web-BCfGxYEI.js"]},"_logo-VRagdSxV.js":{"file":"assets/logo-VRagdSxV.js","name":"logo","imports":["_web-BCfGxYEI.js"]},"_menu-gxdYq_p7.js":{"file":"assets/menu-gxdYq_p7.js","name":"menu","imports":["_event-BsZo1uc7.js","_window-CGzFyLXp.js"]},"_microphone-CfEqSlBy.js":{"file":"assets/microphone-CfEqSlBy.js","name":"microphone","imports":["_web-BCfGxYEI.js"]},"_padding-CNov8_jR.js":{"file":"assets/padding-CNov8_jR.js","name":"padding","imports":["_web-BCfGxYEI.js","_queries-DBWj-Knm.js","_menu-gxdYq_p7.js","_event-BsZo1uc7.js","_index-DRZcwRr6.js","_store-COLfFlJE.js","_index-VJH0gGJz.js","_store-B-U5MmP7.js","_tauri-NQyqRux-.js","_CropAreaRenderer-CN_ITMa6.js","_index-DCJEdp2A.js","_eventListener-Dvds-6t5.js"]},"_pricing-DfwPxUfW.js":{"file":"assets/pricing-DfwPxUfW.js","name":"pricing","imports":["_web-BCfGxYEI.js"],"assets":["assets/pricing-DMHaqihI.riv"]},"_queries-DBWj-Knm.js":{"file":"assets/queries-DBWj-Knm.js","name":"queries","imports":["_web-BCfGxYEI.js","_store-COLfFlJE.js","_index-CSaDVPHJ.js","_window-CGzFyLXp.js","_index-BzicxdXv.js","_store-B-U5MmP7.js","_tauri-NQyqRux-.js","_web-api-kcgHhqoo.js","_eventListener-Dvds-6t5.js"]},"_rotate-ccw-CM5pUlcS.js":{"file":"assets/rotate-ccw-CM5pUlcS.js","name":"rotate-ccw","imports":["_event-BsZo1uc7.js","_web-BCfGxYEI.js"]},"_routing-Ck0R8n-z.js":{"file":"assets/routing-Ck0R8n-z.js","name":"routing","imports":["_web-BCfGxYEI.js"]},"_settings-wl6B6NMt.js":{"file":"assets/settings-wl6B6NMt.js","name":"settings","imports":["_web-BCfGxYEI.js"]},"_socket-y78uvu7-.js":{"file":"assets/socket-y78uvu7-.js","name":"socket","imports":["_web-BCfGxYEI.js"]},"_store-B-U5MmP7.js":{"file":"assets/store-B-U5MmP7.js","name":"store","imports":["_index-CSaDVPHJ.js","_event-BsZo1uc7.js","_web-BCfGxYEI.js"]},"_store-COLfFlJE.js":{"file":"assets/store-COLfFlJE.js","name":"store","imports":["_web-BCfGxYEI.js"]},"_style-BSCqJpiQ.js":{"file":"assets/style-BSCqJpiQ.js","name":"style","imports":["_U42ECMND-BDjyePcW.js","_web-BCfGxYEI.js"]},"_tauri-NQyqRux-.js":{"file":"assets/tauri-NQyqRux-.js","name":"tauri","imports":["_event-BsZo1uc7.js"]},"_titlebar-state-C8fqJAwN.js":{"file":"assets/titlebar-state-C8fqJAwN.js","name":"titlebar-state","imports":["_window-CGzFyLXp.js","_index-DRZcwRr6.js","_store-COLfFlJE.js"]},"_toast-DnJx6gB8.js":{"file":"assets/toast-DnJx6gB8.js","name":"toast","imports":["_web-BCfGxYEI.js","_store-COLfFlJE.js"]},"_trash-BJ3RIGFc.js":{"file":"assets/trash-BJ3RIGFc.js","name":"trash","imports":["_web-BCfGxYEI.js"]},"_types-5W_duOpx.js":{"file":"assets/types-5W_duOpx.js","name":"types"},"_ui-DTFQjz5T.js":{"file":"assets/ui-DTFQjz5T.js","name":"ui","imports":["_web-BCfGxYEI.js","_SwitchTab-CBKi0qjj.js","_2LYGDFGW-HKI54TK5.js","_index-DCJEdp2A.js","_5WXHJDCZ-D75A8m8C.js","_UKTBL2JL-CvU0Qdg8.js","_JNCCF6MP-4sxnBYeu.js","_U42ECMND-BDjyePcW.js","_style-BSCqJpiQ.js","_index-B1BdrjQY.js","_combineProps-oHjLfPsP.js","_LR7LBJN3-DWofh4SL.js","_VI7QYH27-603SSBI-.js","_ZZYKR3VO-DAa9CJSv.js","_context-Zi7A3g3B.js","_index-M33yfidE.js","_Tooltip-uocwE6rA.js","_eventListener-Dvds-6t5.js"]},"_volume2-BEyDuANV.js":{"file":"assets/volume2-BEyDuANV.js","name":"volume2","imports":["_web-BCfGxYEI.js"]},"_web-BCfGxYEI.js":{"file":"assets/web-BCfGxYEI.js","name":"web"},"_web-api-kcgHhqoo.js":{"file":"assets/web-api-kcgHhqoo.js","name":"web-api","imports":["_types-5W_duOpx.js","_event-BsZo1uc7.js","_store-B-U5MmP7.js"]},"_webviewWindow-0yBfL-fV.js":{"file":"assets/webviewWindow-0yBfL-fV.js","name":"webviewWindow","imports":["_window-CGzFyLXp.js","_event-BsZo1uc7.js"]},"_window-CGzFyLXp.js":{"file":"assets/window-CGzFyLXp.js","name":"window","imports":["_event-BsZo1uc7.js"]},"src/assets/illustrations/cloud-1.png":{"file":"assets/cloud-1-0EtYTpJQ.png","src":"src/assets/illustrations/cloud-1.png"},"src/assets/illustrations/cloud-2.png":{"file":"assets/cloud-2-C48ZYBEu.png","src":"src/assets/illustrations/cloud-2.png"},"src/assets/illustrations/cloud-3.png":{"file":"assets/cloud-3-SWvz_Fyk.png","src":"src/assets/illustrations/cloud-3.png"},"src/assets/illustrations/instant-mode-dark.png":{"file":"assets/instant-mode-dark-CxsYkVlX.png","src":"src/assets/illustrations/instant-mode-dark.png"},"src/assets/illustrations/instant-mode-light.png":{"file":"assets/instant-mode-light-CnQJckdc.png","src":"src/assets/illustrations/instant-mode-light.png"},"src/assets/illustrations/studio-mode-dark.png":{"file":"assets/studio-mode-dark-BfmnURAh.png","src":"src/assets/illustrations/studio-mode-dark.png"},"src/assets/illustrations/studio-mode-light.png":{"file":"assets/studio-mode-light-C-7zFY40.png","src":"src/assets/illustrations/studio-mode-light.png"},"src/assets/rive/pricing.riv":{"file":"assets/pricing-DMHaqihI.riv","src":"src/assets/rive/pricing.riv"},"src/assets/tears-and-fireflies-adi-goldstein.mp3":{"file":"assets/tears-and-fireflies-adi-goldstein-CggkdS0h.mp3","src":"src/assets/tears-and-fireflies-adi-goldstein.mp3"},"src/assets/theme-previews/auto.jpg":{"file":"assets/auto-C0B2t64G.jpg","src":"src/assets/theme-previews/auto.jpg"},"src/assets/theme-previews/dark.jpg":{"file":"assets/dark-BnzlTUlI.jpg","src":"src/assets/theme-previews/dark.jpg"},"src/assets/theme-previews/light.jpg":{"file":"assets/light-jjtTqDFf.jpg","src":"src/assets/theme-previews/light.jpg"},"src/routes/(window-chrome).tsx?pick=default&pick=$css":{"file":"assets/(window-chrome)-BBMkydzU.js","name":"(window-chrome)","src":"src/routes/(window-chrome).tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_window-CGzFyLXp.js","_index-DRZcwRr6.js","_index-M33yfidE.js","_Loader-viXlpmTn.js","_CaptionControlsWindows11-BKE5CC1Q.js","_titlebar-state-C8fqJAwN.js","_Context-DZSOZnWt.js","_event-BsZo1uc7.js","_logo-VRagdSxV.js","_store-COLfFlJE.js","_index-BzicxdXv.js"]},"src/routes/(window-chrome)/(main).tsx?pick=default&pick=$css":{"file":"assets/(main)-BBVwEmhq.js","name":"(main)","src":"src/routes/(window-chrome)/(main).tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_SwitchTab-CBKi0qjj.js","_index-CSaDVPHJ.js","_app-DzQ8LI4z.js","_window-CGzFyLXp.js","_index-M33yfidE.js","_store-COLfFlJE.js","_Tooltip-uocwE6rA.js","_queries-DBWj-Knm.js","_tauri-NQyqRux-.js","_film-cut-BOCL_tgM.js","_analytics-Bl4UmPF-.js","_settings-wl6B6NMt.js","_bell-fny2Av6x.js","_camera-f6QVal7G.js","_microphone-CfEqSlBy.js","_chevron-down-VBQJb1U_.js","_crop-Dxrsj5UL.js","_menu-gxdYq_p7.js","_event-BsZo1uc7.js","_webviewWindow-0yBfL-fV.js","_index-DmupNlQQ.js","_index-DRZcwRr6.js","_index-D3VywF1g.js","_index-VJH0gGJz.js","_SignInButton-ouoxLnKb.js","_store-B-U5MmP7.js","_web-api-kcgHhqoo.js","_Context-DZSOZnWt.js","_createEventListener-hBGiy99l.js","_routing-Ck0R8n-z.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_combineProps-oHjLfPsP.js","_2LYGDFGW-HKI54TK5.js","_floating-ui.dom-DzoQ-s65.js","_JNCCF6MP-4sxnBYeu.js","_index-BzicxdXv.js","_auth-DjyYg_UE.js","_index-B3jaOB3S.js","_types-5W_duOpx.js"]},"src/routes/(window-chrome)/callback.template.ts?pick=default&pick=$css":{"file":"assets/callback.template-Dxhu4AQH.js","name":"callback.template","src":"src/routes/(window-chrome)/callback.template.ts?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true},"src/routes/(window-chrome)/settings.tsx?pick=default&pick=$css":{"file":"assets/settings-8gAwvq__.js","name":"settings","src":"src/routes/(window-chrome)/settings.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_SwitchTab-CBKi0qjj.js","_app-DzQ8LI4z.js","_CapErrorBoundary-Cn5AqE6B.js","_SignInButton-ouoxLnKb.js","_store-B-U5MmP7.js","_analytics-Bl4UmPF-.js","_settings-wl6B6NMt.js","_hotkeys-BmWg1icV.js","_bell-fny2Av6x.js","_components-CzM5XsXf.js","_index-M33yfidE.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_combineProps-oHjLfPsP.js","_event-BsZo1uc7.js","_logo-VRagdSxV.js","_auth-DjyYg_UE.js","_index-CSaDVPHJ.js","_store-COLfFlJE.js","_window-CGzFyLXp.js","_index-B3jaOB3S.js","_tauri-NQyqRux-.js","_types-5W_duOpx.js","_routing-Ck0R8n-z.js"]},"src/routes/(window-chrome)/settings/changelog.tsx?pick=default&pick=$css":{"file":"assets/changelog-Dvfwstva.js","name":"changelog","src":"src/routes/(window-chrome)/settings/changelog.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_store-COLfFlJE.js","_index-CSaDVPHJ.js","_index-M33yfidE.js","_Loader-viXlpmTn.js","_web-api-kcgHhqoo.js","_logo-VRagdSxV.js","_types-5W_duOpx.js","_event-BsZo1uc7.js","_store-B-U5MmP7.js"]},"src/routes/(window-chrome)/settings/experimental.tsx?pick=default&pick=$css":{"file":"assets/experimental-DBvh0aOf.js","name":"experimental","src":"src/routes/(window-chrome)/settings/experimental.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_store-COLfFlJE.js","_store-B-U5MmP7.js","_Setting-cRnihSjt.js","_index-CSaDVPHJ.js","_event-BsZo1uc7.js","_Toggle-CCBXD6Cq.js","_VI7QYH27-603SSBI-.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_ZZYKR3VO-DAa9CJSv.js","_JNCCF6MP-4sxnBYeu.js","_combineProps-oHjLfPsP.js","_index-M33yfidE.js"]},"src/routes/(window-chrome)/settings/feedback.tsx?pick=default&pick=$css":{"file":"assets/feedback-CQZIQzVl.js","name":"feedback","src":"src/routes/(window-chrome)/settings/feedback.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_SwitchTab-CBKi0qjj.js","_index-DRZcwRr6.js","_app-DzQ8LI4z.js","_web-api-kcgHhqoo.js","_action-CCC_kcvo.js","_index-M33yfidE.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_combineProps-oHjLfPsP.js","_event-BsZo1uc7.js","_types-5W_duOpx.js","_store-B-U5MmP7.js","_index-CSaDVPHJ.js","_store-COLfFlJE.js","_routing-Ck0R8n-z.js"]},"src/routes/(window-chrome)/settings/general.tsx?pick=default&pick=$css":{"file":"assets/general-BUPNZY2f.js","name":"general","src":"src/routes/(window-chrome)/settings/general.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_SwitchTab-CBKi0qjj.js","_index-Di8W_zpT.js","_event-BsZo1uc7.js","_index-DRZcwRr6.js","_store-COLfFlJE.js","_store-B-U5MmP7.js","_tauri-NQyqRux-.js","_menu-gxdYq_p7.js","_index-DmupNlQQ.js","_index-M33yfidE.js","_Setting-cRnihSjt.js","_ui-DTFQjz5T.js","_chevron-down-VBQJb1U_.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_combineProps-oHjLfPsP.js","_index-CSaDVPHJ.js","_window-CGzFyLXp.js","_Toggle-CCBXD6Cq.js","_VI7QYH27-603SSBI-.js","_ZZYKR3VO-DAa9CJSv.js","_JNCCF6MP-4sxnBYeu.js","_2LYGDFGW-HKI54TK5.js","_floating-ui.dom-DzoQ-s65.js","_UKTBL2JL-CvU0Qdg8.js","_style-BSCqJpiQ.js","_context-Zi7A3g3B.js","_index-BzicxdXv.js","_queries-DBWj-Knm.js","_web-api-kcgHhqoo.js","_types-5W_duOpx.js","_socket-y78uvu7-.js","_Tooltip-uocwE6rA.js"],"assets":["assets/auto-C0B2t64G.jpg","assets/dark-BnzlTUlI.jpg","assets/light-jjtTqDFf.jpg"]},"src/routes/(window-chrome)/settings/hotkeys.tsx?pick=default&pick=$css":{"file":"assets/hotkeys-CHU6uXvg.js","name":"hotkeys","src":"src/routes/(window-chrome)/settings/hotkeys.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_store-COLfFlJE.js","_store-B-U5MmP7.js","_tauri-NQyqRux-.js","_circle-check-wA7W96h9.js","_circle-x-C1Ty7rjt.js","_eventListener-Dvds-6t5.js","_index-CSaDVPHJ.js","_event-BsZo1uc7.js","_index-DCJEdp2A.js"]},"src/routes/(window-chrome)/settings/index.tsx?pick=default&pick=$css":{"file":"assets/index-twtGqnxP.js","name":"index","src":"src/routes/(window-chrome)/settings/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_routing-Ck0R8n-z.js","_web-BCfGxYEI.js","_components-CzM5XsXf.js"]},"src/routes/(window-chrome)/settings/integrations/index.tsx?pick=default&pick=$css":{"file":"assets/index-BCIBX7Oz.js","name":"index","src":"src/routes/(window-chrome)/settings/integrations/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_SwitchTab-CBKi0qjj.js","_tauri-NQyqRux-.js","_store-B-U5MmP7.js","_routing-Ck0R8n-z.js","_index-M33yfidE.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_combineProps-oHjLfPsP.js","_event-BsZo1uc7.js","_index-CSaDVPHJ.js","_store-COLfFlJE.js"]},"src/routes/(window-chrome)/settings/integrations/s3-config.tsx?pick=default&pick=$css":{"file":"assets/s3-config-CODVr46h.js","name":"s3-config","src":"src/routes/(window-chrome)/settings/integrations/s3-config.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_SwitchTab-CBKi0qjj.js","_index-Di8W_zpT.js","_index-CSaDVPHJ.js","_tauri-NQyqRux-.js","_web-api-kcgHhqoo.js","_ui-DTFQjz5T.js","_logo-VRagdSxV.js","_index-DCJEdp2A.js","_index-M33yfidE.js","_5WXHJDCZ-D75A8m8C.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_combineProps-oHjLfPsP.js","_store-COLfFlJE.js","_event-BsZo1uc7.js","_types-5W_duOpx.js","_store-B-U5MmP7.js","_2LYGDFGW-HKI54TK5.js","_floating-ui.dom-DzoQ-s65.js","_JNCCF6MP-4sxnBYeu.js","_UKTBL2JL-CvU0Qdg8.js","_VI7QYH27-603SSBI-.js","_style-BSCqJpiQ.js","_ZZYKR3VO-DAa9CJSv.js","_context-Zi7A3g3B.js","_index-BzicxdXv.js","_queries-DBWj-Knm.js","_window-CGzFyLXp.js","_socket-y78uvu7-.js","_Tooltip-uocwE6rA.js"]},"src/routes/(window-chrome)/settings/license.tsx?pick=default&pick=$css":{"file":"assets/license-CM3eLMQx.js","name":"license","src":"src/routes/(window-chrome)/settings/license.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_pricing-DfwPxUfW.js","_SwitchTab-CBKi0qjj.js","_index-CSaDVPHJ.js","_store-B-U5MmP7.js","_queries-DBWj-Knm.js","_tauri-NQyqRux-.js","_web-api-kcgHhqoo.js","_ui-DTFQjz5T.js","_check-Dv8ShDZ6.js","_index-M33yfidE.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_combineProps-oHjLfPsP.js","_store-COLfFlJE.js","_event-BsZo1uc7.js","_window-CGzFyLXp.js","_index-BzicxdXv.js","_types-5W_duOpx.js","_2LYGDFGW-HKI54TK5.js","_floating-ui.dom-DzoQ-s65.js","_JNCCF6MP-4sxnBYeu.js","_UKTBL2JL-CvU0Qdg8.js","_VI7QYH27-603SSBI-.js","_style-BSCqJpiQ.js","_ZZYKR3VO-DAa9CJSv.js","_context-Zi7A3g3B.js","_socket-y78uvu7-.js","_Tooltip-uocwE6rA.js"]},"src/routes/(window-chrome)/settings/recordings.tsx?pick=default&pick=$css":{"file":"assets/recordings-DtYPDUnY.js","name":"recordings","src":"src/routes/(window-chrome)/settings/recordings.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_index-CuxkcSNy.js","_index-CSaDVPHJ.js","_event-BsZo1uc7.js","_index-DmupNlQQ.js","_rotate-ccw-CM5pUlcS.js","_index-B3jaOB3S.js","_index-M33yfidE.js","_analytics-Bl4UmPF-.js","_createEventListener-hBGiy99l.js","_tauri-NQyqRux-.js","_folder-BfBEOjQD.js","_trash-BJ3RIGFc.js","_film-cut-BOCL_tgM.js","_link-Clkq6L3_.js","_U42ECMND-BDjyePcW.js","_style-BSCqJpiQ.js","_floating-ui.dom-DzoQ-s65.js","_store-COLfFlJE.js"]},"src/routes/(window-chrome)/settings/screenshots.tsx?pick=default&pick=$css":{"file":"assets/screenshots-Bg_o8EHO.js","name":"screenshots","src":"src/routes/(window-chrome)/settings/screenshots.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_index-CSaDVPHJ.js","_event-BsZo1uc7.js","_tauri-NQyqRux-.js","_folder-BfBEOjQD.js","_eye-Dvy2GA25.js","_store-COLfFlJE.js"]},"src/routes/(window-chrome)/setup.tsx?pick=default&pick=$css":{"file":"assets/setup-Dtozm6qy.js","name":"setup","src":"src/routes/(window-chrome)/setup.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_SwitchTab-CBKi0qjj.js","_index-DfaT3VxD.js","_window-CGzFyLXp.js","_queries-DBWj-Knm.js","_store-COLfFlJE.js","_ModeSelect-BJJ_f2zv.js","_tauri-NQyqRux-.js","_index-DRZcwRr6.js","_index-M33yfidE.js","_CaptionControlsWindows11-BKE5CC1Q.js","_store-B-U5MmP7.js","_logo-VRagdSxV.js","_volume2-BEyDuANV.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_combineProps-oHjLfPsP.js","_event-BsZo1uc7.js","_index-CSaDVPHJ.js","_index-BzicxdXv.js","_web-api-kcgHhqoo.js","_types-5W_duOpx.js","_film-cut-BOCL_tgM.js","_titlebar-state-C8fqJAwN.js"],"assets":["assets/cloud-1-0EtYTpJQ.png","assets/cloud-2-C48ZYBEu.png","assets/cloud-3-SWvz_Fyk.png","assets/tears-and-fireflies-adi-goldstein-CggkdS0h.mp3"]},"src/routes/(window-chrome)/update.tsx?pick=default&pick=$css":{"file":"assets/update-gIqGR89s.js","name":"update","src":"src/routes/(window-chrome)/update.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_SwitchTab-CBKi0qjj.js","_window-CGzFyLXp.js","_event-BsZo1uc7.js","_index-D3VywF1g.js","_logo-VRagdSxV.js","_routing-Ck0R8n-z.js","_index-M33yfidE.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_combineProps-oHjLfPsP.js"]},"src/routes/(window-chrome)/upgrade.tsx?pick=default&pick=$css":{"file":"assets/upgrade-DpouKg0o.js","name":"upgrade","src":"src/routes/(window-chrome)/upgrade.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_pricing-DfwPxUfW.js","_SwitchTab-CBKi0qjj.js","_index-CSaDVPHJ.js","_window-CGzFyLXp.js","_store-B-U5MmP7.js","_queries-DBWj-Knm.js","_tauri-NQyqRux-.js","_web-api-kcgHhqoo.js","_ui-DTFQjz5T.js","_auth-DjyYg_UE.js","_check-Dv8ShDZ6.js","_index-M33yfidE.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_combineProps-oHjLfPsP.js","_store-COLfFlJE.js","_event-BsZo1uc7.js","_index-BzicxdXv.js","_types-5W_duOpx.js","_2LYGDFGW-HKI54TK5.js","_floating-ui.dom-DzoQ-s65.js","_JNCCF6MP-4sxnBYeu.js","_UKTBL2JL-CvU0Qdg8.js","_VI7QYH27-603SSBI-.js","_style-BSCqJpiQ.js","_ZZYKR3VO-DAa9CJSv.js","_context-Zi7A3g3B.js","_socket-y78uvu7-.js","_Tooltip-uocwE6rA.js","_index-B3jaOB3S.js","_analytics-Bl4UmPF-.js"],"assets":["assets/rive-kSJxF25z.wasm"]},"src/routes/camera.tsx?pick=default&pick=$css":{"file":"assets/camera-CPexw228.js","name":"camera","src":"src/routes/camera.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_enlarge-D3YDfZAv.js","_queries-DBWj-Knm.js","_store-COLfFlJE.js","_tauri-NQyqRux-.js","_store-B-U5MmP7.js","_socket-y78uvu7-.js","_window-CGzFyLXp.js","_index-M33yfidE.js","_circle-x-C1Ty7rjt.js","_UKTBL2JL-CvU0Qdg8.js","_VI7QYH27-603SSBI-.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_index-CSaDVPHJ.js","_index-BzicxdXv.js","_web-api-kcgHhqoo.js","_types-5W_duOpx.js","_event-BsZo1uc7.js","_eventListener-Dvds-6t5.js"]},"src/routes/capture-area.tsx?pick=default&pick=$css":{"file":"assets/capture-area-ChyK-VFT.js","name":"capture-area","src":"src/routes/capture-area.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_2LYGDFGW-HKI54TK5.js","_queries-DBWj-Knm.js","_webviewWindow-0yBfL-fV.js","_store-COLfFlJE.js","_index-VJH0gGJz.js","_padding-CNov8_jR.js","_circle-x-C1Ty7rjt.js","_circle-check-wA7W96h9.js","_LR7LBJN3-DWofh4SL.js","_index-DCJEdp2A.js","_5WXHJDCZ-D75A8m8C.js","_floating-ui.dom-DzoQ-s65.js","_combineProps-oHjLfPsP.js","_JNCCF6MP-4sxnBYeu.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_index-CSaDVPHJ.js","_window-CGzFyLXp.js","_event-BsZo1uc7.js","_index-BzicxdXv.js","_store-B-U5MmP7.js","_tauri-NQyqRux-.js","_web-api-kcgHhqoo.js","_types-5W_duOpx.js","_eventListener-Dvds-6t5.js","_menu-gxdYq_p7.js","_index-DRZcwRr6.js","_CropAreaRenderer-CN_ITMa6.js"]},"src/routes/debug.tsx?pick=default&pick=$css":{"file":"assets/debug-QCEwPtJD.js","name":"debug","src":"src/routes/debug.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_index-CSaDVPHJ.js","_tauri-NQyqRux-.js","_store-COLfFlJE.js","_event-BsZo1uc7.js"]},"src/routes/editor/AspectRatioSelect.tsx?pick=default&pick=$css":{"file":"assets/AspectRatioSelect-Dxi5ffrE.js","name":"AspectRatioSelect","src":"src/routes/editor/AspectRatioSelect.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_WRC6BLVS-B7nXXnbA.js","_context-Zi7A3g3B.js","_layout-Dzr1u58d.js","_ui-DTFQjz5T.js","_circle-check-wA7W96h9.js","_chevron-down-VBQJb1U_.js","_SwitchTab-CBKi0qjj.js","_index-M33yfidE.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_combineProps-oHjLfPsP.js","_ZZYKR3VO-DAa9CJSv.js","_VI7QYH27-603SSBI-.js","_JNCCF6MP-4sxnBYeu.js","_2LYGDFGW-HKI54TK5.js","_floating-ui.dom-DzoQ-s65.js","_UKTBL2JL-CvU0Qdg8.js","_index-BzicxdXv.js","_store-COLfFlJE.js","_index-CSaDVPHJ.js","_store-B-U5MmP7.js","_event-BsZo1uc7.js","_queries-DBWj-Knm.js","_window-CGzFyLXp.js","_tauri-NQyqRux-.js","_web-api-kcgHhqoo.js","_types-5W_duOpx.js","_socket-y78uvu7-.js","_style-BSCqJpiQ.js","_Tooltip-uocwE6rA.js"]},"src/routes/editor/PresetsDropdown.tsx?pick=default&pick=$css":{"file":"assets/PresetsDropdown-LCBqfjaO.js","name":"PresetsDropdown","src":"src/routes/editor/PresetsDropdown.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true},"src/routes/editor/ShadowSettings.tsx?pick=default&pick=$css":{"file":"assets/ShadowSettings-CUXIQFKK.js","name":"ShadowSettings","src":"src/routes/editor/ShadowSettings.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_index-M33yfidE.js","_ui-DTFQjz5T.js","_chevron-down-VBQJb1U_.js","_SwitchTab-CBKi0qjj.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_combineProps-oHjLfPsP.js","_2LYGDFGW-HKI54TK5.js","_floating-ui.dom-DzoQ-s65.js","_JNCCF6MP-4sxnBYeu.js","_UKTBL2JL-CvU0Qdg8.js","_VI7QYH27-603SSBI-.js","_style-BSCqJpiQ.js","_ZZYKR3VO-DAa9CJSv.js","_context-Zi7A3g3B.js","_index-BzicxdXv.js","_store-COLfFlJE.js","_index-CSaDVPHJ.js","_store-B-U5MmP7.js","_event-BsZo1uc7.js","_queries-DBWj-Knm.js","_window-CGzFyLXp.js","_tauri-NQyqRux-.js","_web-api-kcgHhqoo.js","_types-5W_duOpx.js","_socket-y78uvu7-.js","_Tooltip-uocwE6rA.js"]},"src/routes/editor/ShareButton.tsx?pick=default&pick=$css":{"file":"assets/ShareButton-CSgKJq7W.js","name":"ShareButton","src":"src/routes/editor/ShareButton.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_SwitchTab-CBKi0qjj.js","_WRC6BLVS-B7nXXnbA.js","_index-CSaDVPHJ.js","_store-COLfFlJE.js","_Tooltip-uocwE6rA.js","_context-Zi7A3g3B.js","_store-B-U5MmP7.js","_copy-0I7pZbp1.js","_tauri-NQyqRux-.js","_Header-BKS-4ud-.js","_ui-DTFQjz5T.js","_check-Dv8ShDZ6.js","_rotate-ccw-CM5pUlcS.js","_chevron-down-VBQJb1U_.js","_index-M33yfidE.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_combineProps-oHjLfPsP.js","_ZZYKR3VO-DAa9CJSv.js","_VI7QYH27-603SSBI-.js","_JNCCF6MP-4sxnBYeu.js","_2LYGDFGW-HKI54TK5.js","_floating-ui.dom-DzoQ-s65.js","_UKTBL2JL-CvU0Qdg8.js","_index-BzicxdXv.js","_queries-DBWj-Knm.js","_window-CGzFyLXp.js","_event-BsZo1uc7.js","_web-api-kcgHhqoo.js","_types-5W_duOpx.js","_socket-y78uvu7-.js","_index-DmupNlQQ.js","_index-DRZcwRr6.js","_CaptionControlsWindows11-BKE5CC1Q.js","_titlebar-state-C8fqJAwN.js","_analytics-Bl4UmPF-.js","_settings-wl6B6NMt.js","_trash-BJ3RIGFc.js","_folder-BfBEOjQD.js","_style-BSCqJpiQ.js"]},"src/routes/editor/index.tsx?pick=default&pick=$css":{"file":"assets/index-CDzcXN-B.js","name":"index","src":"src/routes/editor/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_index-DRZcwRr6.js","_index-M33yfidE.js","_SwitchTab-CBKi0qjj.js","_context-Zi7A3g3B.js","_queries-DBWj-Knm.js","_index-CSaDVPHJ.js","_event-BsZo1uc7.js","_store-COLfFlJE.js","_padding-CNov8_jR.js","_Toggle-CCBXD6Cq.js","_Tooltip-uocwE6rA.js","_tauri-NQyqRux-.js","_2LYGDFGW-HKI54TK5.js","_UKTBL2JL-CvU0Qdg8.js","_JNCCF6MP-4sxnBYeu.js","_5WXHJDCZ-D75A8m8C.js","_index-B1BdrjQY.js","_combineProps-oHjLfPsP.js","_ZZYKR3VO-DAa9CJSv.js","_index-DCJEdp2A.js","_WRC6BLVS-B7nXXnbA.js","_index-Di8W_zpT.js","_rotate-ccw-CM5pUlcS.js","_store-B-U5MmP7.js","_layout-Dzr1u58d.js","_ui-DTFQjz5T.js","_chevron-down-VBQJb1U_.js","_toast-DnJx6gB8.js","_camera-f6QVal7G.js","_volume2-BEyDuANV.js","_microphone-CfEqSlBy.js","_enlarge-D3YDfZAv.js","_hotkeys-BmWg1icV.js","_circle-x-C1Ty7rjt.js","_check-Dv8ShDZ6.js","_trash-BJ3RIGFc.js","_settings-wl6B6NMt.js","_index-DmupNlQQ.js","_analytics-Bl4UmPF-.js","_copy-0I7pZbp1.js","_Header-BKS-4ud-.js","_auth-DjyYg_UE.js","_SignInButton-ouoxLnKb.js","_link-Clkq6L3_.js","_hard-drive-DWY7FyM0.js","_circle-check-wA7W96h9.js","_crop-Dxrsj5UL.js","_eventListener-Dvds-6t5.js","_index-BzicxdXv.js","_menu-gxdYq_p7.js","_createEventListener-hBGiy99l.js","_Loader-viXlpmTn.js","_window-CGzFyLXp.js","_LR7LBJN3-DWofh4SL.js","_socket-y78uvu7-.js","_web-api-kcgHhqoo.js","_types-5W_duOpx.js","_index-VJH0gGJz.js","_CropAreaRenderer-CN_ITMa6.js","_VI7QYH27-603SSBI-.js","_floating-ui.dom-DzoQ-s65.js","_U42ECMND-BDjyePcW.js","_style-BSCqJpiQ.js","_CaptionControlsWindows11-BKE5CC1Q.js","_titlebar-state-C8fqJAwN.js","_folder-BfBEOjQD.js","_index-B3jaOB3S.js","_logo-VRagdSxV.js"],"css":["assets/index-DJipDVMW.css"]},"src/routes/in-progress-recording.tsx?pick=default&pick=$css":{"file":"assets/in-progress-recording-BJYB1pcE.js","name":"in-progress-recording","src":"src/routes/in-progress-recording.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_index-DfaT3VxD.js","_index-CSaDVPHJ.js","_window-CGzFyLXp.js","_index-DmupNlQQ.js","_index-DRZcwRr6.js","_index-M33yfidE.js","_store-COLfFlJE.js","_index-B1BdrjQY.js","_queries-DBWj-Knm.js","_tauri-NQyqRux-.js","_createEventListener-hBGiy99l.js","_microphone-CfEqSlBy.js","_trash-BJ3RIGFc.js","_event-BsZo1uc7.js","_U42ECMND-BDjyePcW.js","_index-BzicxdXv.js","_store-B-U5MmP7.js","_web-api-kcgHhqoo.js","_types-5W_duOpx.js","_eventListener-Dvds-6t5.js","_index-DCJEdp2A.js"]},"src/routes/mode-select.tsx?pick=default&pick=$css":{"file":"assets/mode-select-BHPicoXk.js","name":"mode-select","src":"src/routes/mode-select.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_ModeSelect-BJJ_f2zv.js","_window-CGzFyLXp.js","_index-M33yfidE.js","_queries-DBWj-Knm.js","_store-COLfFlJE.js","_index-CSaDVPHJ.js","_index-BzicxdXv.js","_store-B-U5MmP7.js","_event-BsZo1uc7.js","_tauri-NQyqRux-.js","_web-api-kcgHhqoo.js","_types-5W_duOpx.js","_eventListener-Dvds-6t5.js","_index-DCJEdp2A.js","_film-cut-BOCL_tgM.js"]},"src/routes/notifications.tsx?pick=default&pick=$css":{"file":"assets/notifications-CSyKMtKj.js","name":"notifications","src":"src/routes/notifications.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_tauri-NQyqRux-.js","_createEventListener-hBGiy99l.js","_toast-DnJx6gB8.js","_LoaderIcon-vvHMUdiU.js","_event-BsZo1uc7.js","_store-COLfFlJE.js"]},"src/routes/recordings-overlay.tsx?pick=default&pick=$css":{"file":"assets/recordings-overlay-CPPGfDU7.js","name":"recordings-overlay","src":"src/routes/recordings-overlay.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_SwitchTab-CBKi0qjj.js","_index-CuxkcSNy.js","_context-Zi7A3g3B.js","_queries-DBWj-Knm.js","_index-CSaDVPHJ.js","_event-BsZo1uc7.js","_index-M33yfidE.js","_store-COLfFlJE.js","_index-VJH0gGJz.js","_hard-drive-DWY7FyM0.js","_store-B-U5MmP7.js","_copy-0I7pZbp1.js","_tauri-NQyqRux-.js","_createEventListener-hBGiy99l.js","_circle-x-C1Ty7rjt.js","_eye-Dvy2GA25.js","_camera-f6QVal7G.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_combineProps-oHjLfPsP.js","_style-BSCqJpiQ.js","_floating-ui.dom-DzoQ-s65.js","_index-BzicxdXv.js","_socket-y78uvu7-.js","_window-CGzFyLXp.js","_web-api-kcgHhqoo.js","_types-5W_duOpx.js"]},"src/routes/window-capture-occluder.tsx?pick=default&pick=$css":{"file":"assets/window-capture-occluder-CcnULbsg.js","name":"window-capture-occluder","src":"src/routes/window-capture-occluder.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-BCfGxYEI.js","_window-CGzFyLXp.js","_index-DRZcwRr6.js","_CropAreaRenderer-CN_ITMa6.js","_queries-DBWj-Knm.js","_event-BsZo1uc7.js","_store-COLfFlJE.js","_index-CSaDVPHJ.js","_index-BzicxdXv.js","_store-B-U5MmP7.js","_tauri-NQyqRux-.js","_web-api-kcgHhqoo.js","_types-5W_duOpx.js","_eventListener-Dvds-6t5.js","_index-DCJEdp2A.js"]},"virtual:$vinxi/handler/client":{"file":"assets/client-DhaZc8Wf.js","name":"client","src":"virtual:$vinxi/handler/client","isEntry":true,"imports":["_web-BCfGxYEI.js","_index-CSaDVPHJ.js","_index-DmupNlQQ.js","_webviewWindow-0yBfL-fV.js","_store-B-U5MmP7.js","_analytics-Bl4UmPF-.js","_tauri-NQyqRux-.js","_titlebar-state-C8fqJAwN.js","_CapErrorBoundary-Cn5AqE6B.js","_LoaderIcon-vvHMUdiU.js","_routing-Ck0R8n-z.js","_action-CCC_kcvo.js","_index-DRZcwRr6.js","_store-COLfFlJE.js","_event-BsZo1uc7.js","_window-CGzFyLXp.js","_SwitchTab-CBKi0qjj.js","_index-M33yfidE.js","_5WXHJDCZ-D75A8m8C.js","_index-DCJEdp2A.js","_LR7LBJN3-DWofh4SL.js","_eventListener-Dvds-6t5.js","_index-B1BdrjQY.js","_U42ECMND-BDjyePcW.js","_combineProps-oHjLfPsP.js","_logo-VRagdSxV.js","_toast-DnJx6gB8.js"],"dynamicImports":["src/routes/(window-chrome).tsx?pick=default&pick=$css","src/routes/camera.tsx?pick=default&pick=$css","src/routes/capture-area.tsx?pick=default&pick=$css","src/routes/debug.tsx?pick=default&pick=$css","src/routes/in-progress-recording.tsx?pick=default&pick=$css","src/routes/mode-select.tsx?pick=default&pick=$css","src/routes/notifications.tsx?pick=default&pick=$css","src/routes/recordings-overlay.tsx?pick=default&pick=$css","src/routes/window-capture-occluder.tsx?pick=default&pick=$css","src/routes/(window-chrome)/(main).tsx?pick=default&pick=$css","src/routes/(window-chrome)/callback.template.ts?pick=default&pick=$css","src/routes/(window-chrome)/settings.tsx?pick=default&pick=$css","src/routes/(window-chrome)/setup.tsx?pick=default&pick=$css","src/routes/(window-chrome)/update.tsx?pick=default&pick=$css","src/routes/(window-chrome)/upgrade.tsx?pick=default&pick=$css","src/routes/editor/AspectRatioSelect.tsx?pick=default&pick=$css","src/routes/editor/PresetsDropdown.tsx?pick=default&pick=$css","src/routes/editor/ShadowSettings.tsx?pick=default&pick=$css","src/routes/editor/ShareButton.tsx?pick=default&pick=$css","src/routes/editor/index.tsx?pick=default&pick=$css","src/routes/(window-chrome)/settings/changelog.tsx?pick=default&pick=$css","src/routes/(window-chrome)/settings/experimental.tsx?pick=default&pick=$css","src/routes/(window-chrome)/settings/feedback.tsx?pick=default&pick=$css","src/routes/(window-chrome)/settings/general.tsx?pick=default&pick=$css","src/routes/(window-chrome)/settings/hotkeys.tsx?pick=default&pick=$css","src/routes/(window-chrome)/settings/index.tsx?pick=default&pick=$css","src/routes/(window-chrome)/settings/license.tsx?pick=default&pick=$css","src/routes/(window-chrome)/settings/recordings.tsx?pick=default&pick=$css","src/routes/(window-chrome)/settings/screenshots.tsx?pick=default&pick=$css","src/routes/(window-chrome)/settings/integrations/index.tsx?pick=default&pick=$css","src/routes/(window-chrome)/settings/integrations/s3-config.tsx?pick=default&pick=$css"],"css":["assets/client-Dunmda2-.css"],"assets":["assets/geist-sans-latin-400-normal-gapTbOY8.woff2","assets/geist-sans-latin-400-normal-BOaIZNA2.woff","assets/geist-sans-latin-500-normal-uokXdC-Q.woff2","assets/geist-sans-latin-500-normal-CN2lyvyL.woff","assets/geist-sans-latin-700-normal-BmN9tIp5.woff2","assets/geist-sans-latin-700-normal-CjScfYeH.woff"]}},"server-fns":{"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-400-normal.woff":{"file":"assets/geist-sans-latin-400-normal-BOaIZNA2.woff","src":"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-400-normal.woff2":{"file":"assets/geist-sans-latin-400-normal-gapTbOY8.woff2","src":"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-500-normal.woff":{"file":"assets/geist-sans-latin-500-normal-CN2lyvyL.woff","src":"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-500-normal.woff2":{"file":"assets/geist-sans-latin-500-normal-uokXdC-Q.woff2","src":"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-700-normal.woff":{"file":"assets/geist-sans-latin-700-normal-CjScfYeH.woff","src":"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-700-normal.woff2":{"file":"assets/geist-sans-latin-700-normal-BmN9tIp5.woff2","src":"../../node_modules/.pnpm/@fontsource+geist-sans@5.2.5/node_modules/@fontsource/geist-sans/files/geist-sans-latin-700-normal.woff2"},"_server-fns-iQ7H7jH9.js":{"file":"assets/server-fns-iQ7H7jH9.js","name":"server-fns","dynamicImports":["src/app.tsx"]},"src/app.tsx":{"file":"assets/app-DVfxCScO.js","name":"app","src":"src/app.tsx","isDynamicEntry":true,"imports":["_server-fns-iQ7H7jH9.js"],"css":["assets/app-DBjmAwL5.css"],"assets":["assets/geist-sans-latin-400-normal-gapTbOY8.woff2","assets/geist-sans-latin-400-normal-BOaIZNA2.woff","assets/geist-sans-latin-500-normal-uokXdC-Q.woff2","assets/geist-sans-latin-500-normal-CN2lyvyL.woff","assets/geist-sans-latin-700-normal-BmN9tIp5.woff2","assets/geist-sans-latin-700-normal-CjScfYeH.woff"]},"virtual:$vinxi/handler/server-fns":{"file":"server-fns.js","name":"server-fns","src":"virtual:$vinxi/handler/server-fns","isEntry":true,"imports":["_server-fns-iQ7H7jH9.js"]}}};

				const routeManifest = {"ssr":{},"client":{},"server-fns":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin(app) {
          const prodApp = createProdApp(appConfig);
          globalThis.app = prodApp;
        }

const chunks = {};




			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin,
_taCPReB10UsNJFa39RZEQvr83h6T6tQNaH8Agc1tVT0,
_Qk16KcJsP0sszjFc47S8vhBQXtBmnloTz7n7ItGXo,
app
];

const assets = {
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "etag": "\"d93d-qrWRwgbkiL5IA5W6DrkNAoc/HMI\"",
    "mtime": "2025-08-11T06:01:51.731Z",
    "size": 55613,
    "path": "../../.output/public/_build/.vite/manifest.json"
  },
  "/_build/.vite/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"13b3-XhRU85JOib3d/1CUPizIpLxOTHk\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 5043,
    "path": "../../.output/public/_build/.vite/manifest.json.br"
  },
  "/_build/.vite/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"16d2-P9DmBdUSma69361wINGoc4M7fpA\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 5842,
    "path": "../../.output/public/_build/.vite/manifest.json.gz"
  },
  "/_build/assets/(main)-BBVwEmhq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6e9b-OF+gHXr3+q5UAx3al6US6HYQyY4\"",
    "mtime": "2025-08-11T06:01:51.731Z",
    "size": 28315,
    "path": "../../.output/public/_build/assets/(main)-BBVwEmhq.js"
  },
  "/_build/assets/(main)-BBVwEmhq.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1fe9-Bo7GXYjWlvNOfEiHyJvQbngtmc8\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 8169,
    "path": "../../.output/public/_build/assets/(main)-BBVwEmhq.js.br"
  },
  "/_build/assets/(main)-BBVwEmhq.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2460-JkGdcYz7z79Xk9v23CVHhGIC0ak\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 9312,
    "path": "../../.output/public/_build/assets/(main)-BBVwEmhq.js.gz"
  },
  "/_build/assets/(window-chrome)-BBMkydzU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"64f-aLyAZfkywx2WRm5XmiN8sjBejiY\"",
    "mtime": "2025-08-11T06:01:51.819Z",
    "size": 1615,
    "path": "../../.output/public/_build/assets/(window-chrome)-BBMkydzU.js"
  },
  "/_build/assets/(window-chrome)-BBMkydzU.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2bd-/CYdk6CylqxS4A1ifYfywMUZQjE\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 701,
    "path": "../../.output/public/_build/assets/(window-chrome)-BBMkydzU.js.br"
  },
  "/_build/assets/(window-chrome)-BBMkydzU.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"32f-dw1tVEd5qq5/0V1DTremOejhBM4\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 815,
    "path": "../../.output/public/_build/assets/(window-chrome)-BBMkydzU.js.gz"
  },
  "/_build/assets/2LYGDFGW-HKI54TK5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ce1-/K22cn9C87B4qdNf2qwHX7OwtLM\"",
    "mtime": "2025-08-11T06:01:51.751Z",
    "size": 15585,
    "path": "../../.output/public/_build/assets/2LYGDFGW-HKI54TK5.js"
  },
  "/_build/assets/2LYGDFGW-HKI54TK5.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"14cf-rXbgOXZqVjdmIwu7Gv0tr4oSPdQ\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 5327,
    "path": "../../.output/public/_build/assets/2LYGDFGW-HKI54TK5.js.br"
  },
  "/_build/assets/2LYGDFGW-HKI54TK5.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1708-eTll4gBs4YXH4G+v04RDnDnxlWo\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 5896,
    "path": "../../.output/public/_build/assets/2LYGDFGW-HKI54TK5.js.gz"
  },
  "/_build/assets/5WXHJDCZ-D75A8m8C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"21f5-Pn01CDFGT7lK3ntzgTzuUdl8Mok\"",
    "mtime": "2025-08-11T06:01:51.747Z",
    "size": 8693,
    "path": "../../.output/public/_build/assets/5WXHJDCZ-D75A8m8C.js"
  },
  "/_build/assets/5WXHJDCZ-D75A8m8C.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"c9d-UgNIwr9tsAsR4w3WHjikEj1/Frc\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 3229,
    "path": "../../.output/public/_build/assets/5WXHJDCZ-D75A8m8C.js.br"
  },
  "/_build/assets/5WXHJDCZ-D75A8m8C.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"e49-J+eheWgpfZZOkksQQFI3imbA03Y\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 3657,
    "path": "../../.output/public/_build/assets/5WXHJDCZ-D75A8m8C.js.gz"
  },
  "/_build/assets/AspectRatioSelect-Dxi5ffrE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9dd-TZNSBYRVhDRp9mMsVj9uCd+bDps\"",
    "mtime": "2025-08-11T06:01:51.747Z",
    "size": 2525,
    "path": "../../.output/public/_build/assets/AspectRatioSelect-Dxi5ffrE.js"
  },
  "/_build/assets/AspectRatioSelect-Dxi5ffrE.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"44c-X2RibMSWx1AVlJaK1zlHd7+HCrc\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1100,
    "path": "../../.output/public/_build/assets/AspectRatioSelect-Dxi5ffrE.js.br"
  },
  "/_build/assets/AspectRatioSelect-Dxi5ffrE.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4bf-JXaDflHOHoY2FjFZKGtcw0G7AN8\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1215,
    "path": "../../.output/public/_build/assets/AspectRatioSelect-Dxi5ffrE.js.gz"
  },
  "/_build/assets/CapErrorBoundary-Cn5AqE6B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"579-MJOiumfOfxpaQVpc2W/4yLXuw0Q\"",
    "mtime": "2025-08-11T06:01:51.747Z",
    "size": 1401,
    "path": "../../.output/public/_build/assets/CapErrorBoundary-Cn5AqE6B.js"
  },
  "/_build/assets/CapErrorBoundary-Cn5AqE6B.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"298-DIUHNVMzBSZSrsSvoPQzBN2Uo54\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 664,
    "path": "../../.output/public/_build/assets/CapErrorBoundary-Cn5AqE6B.js.br"
  },
  "/_build/assets/CapErrorBoundary-Cn5AqE6B.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"319-Wk7SDywpnUAGsGeXpIrbFDHNsXs\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 793,
    "path": "../../.output/public/_build/assets/CapErrorBoundary-Cn5AqE6B.js.gz"
  },
  "/_build/assets/CaptionControlsWindows11-BKE5CC1Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2407-WxmMxY84dNWqxQZqLNHrF5QNkXc\"",
    "mtime": "2025-08-11T06:01:51.747Z",
    "size": 9223,
    "path": "../../.output/public/_build/assets/CaptionControlsWindows11-BKE5CC1Q.js"
  },
  "/_build/assets/CaptionControlsWindows11-BKE5CC1Q.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"b90-A7leh+2fNF6eqqJdaZ5IS63d9B8\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 2960,
    "path": "../../.output/public/_build/assets/CaptionControlsWindows11-BKE5CC1Q.js.br"
  },
  "/_build/assets/CaptionControlsWindows11-BKE5CC1Q.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"dc3-7G1EWKqQLSz4B2DcRwV+E1HL9Og\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 3523,
    "path": "../../.output/public/_build/assets/CaptionControlsWindows11-BKE5CC1Q.js.gz"
  },
  "/_build/assets/Context-DZSOZnWt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a0-c5YDc2s4GBj5c2ZnMHP2P0Im39w\"",
    "mtime": "2025-08-11T06:01:51.747Z",
    "size": 416,
    "path": "../../.output/public/_build/assets/Context-DZSOZnWt.js"
  },
  "/_build/assets/CropAreaRenderer-CN_ITMa6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ec4-5ofmpgwrPGD/SnvQYeu119y68mk\"",
    "mtime": "2025-08-11T06:01:51.747Z",
    "size": 3780,
    "path": "../../.output/public/_build/assets/CropAreaRenderer-CN_ITMa6.js"
  },
  "/_build/assets/CropAreaRenderer-CN_ITMa6.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"5ae-HZ+uH5vO5Kqm3fkFHntjOhGn2Fw\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1454,
    "path": "../../.output/public/_build/assets/CropAreaRenderer-CN_ITMa6.js.br"
  },
  "/_build/assets/CropAreaRenderer-CN_ITMa6.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"658-byLkp/M9NB1eyFMBLPs1c1Ozlwo\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1624,
    "path": "../../.output/public/_build/assets/CropAreaRenderer-CN_ITMa6.js.gz"
  },
  "/_build/assets/Header-BKS-4ud-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"460e-PPuRHGLcb46g65MzndKE3fGVpuk\"",
    "mtime": "2025-08-11T06:01:51.747Z",
    "size": 17934,
    "path": "../../.output/public/_build/assets/Header-BKS-4ud-.js"
  },
  "/_build/assets/Header-BKS-4ud-.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"172a-snzOZUdqbqtcyeOmmOR1XqbA7No\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 5930,
    "path": "../../.output/public/_build/assets/Header-BKS-4ud-.js.br"
  },
  "/_build/assets/Header-BKS-4ud-.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1a3f-suwzjkyc9EcGfb32nQikXYSqFRs\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 6719,
    "path": "../../.output/public/_build/assets/Header-BKS-4ud-.js.gz"
  },
  "/_build/assets/JNCCF6MP-4sxnBYeu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d-0gk4p5cNc6zpr1km+9sc7FryVlg\"",
    "mtime": "2025-08-11T06:01:51.747Z",
    "size": 61,
    "path": "../../.output/public/_build/assets/JNCCF6MP-4sxnBYeu.js"
  },
  "/_build/assets/LR7LBJN3-DWofh4SL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1023-l/ZbXlWNa33SKE9FShAM8plNxmg\"",
    "mtime": "2025-08-11T06:01:51.747Z",
    "size": 4131,
    "path": "../../.output/public/_build/assets/LR7LBJN3-DWofh4SL.js"
  },
  "/_build/assets/LR7LBJN3-DWofh4SL.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"639-VMl2sYJXKsvNlCPAFRGlRxEWjY4\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1593,
    "path": "../../.output/public/_build/assets/LR7LBJN3-DWofh4SL.js.br"
  },
  "/_build/assets/LR7LBJN3-DWofh4SL.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"6ed-wi14CTCe8Zwt/0JR12cX/LVdblE\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1773,
    "path": "../../.output/public/_build/assets/LR7LBJN3-DWofh4SL.js.gz"
  },
  "/_build/assets/Loader-viXlpmTn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12a-9tx4+GGhybGAQ0kDS90MtI59U0E\"",
    "mtime": "2025-08-11T06:01:51.751Z",
    "size": 298,
    "path": "../../.output/public/_build/assets/Loader-viXlpmTn.js"
  },
  "/_build/assets/LoaderIcon-vvHMUdiU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18c0-TjYcUQQ3Yr3nYu8HsVSLJhRk5Sk\"",
    "mtime": "2025-08-11T06:01:51.751Z",
    "size": 6336,
    "path": "../../.output/public/_build/assets/LoaderIcon-vvHMUdiU.js"
  },
  "/_build/assets/LoaderIcon-vvHMUdiU.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"824-rzrFb2izDAKCag5x4IN9UQIB2RY\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 2084,
    "path": "../../.output/public/_build/assets/LoaderIcon-vvHMUdiU.js.br"
  },
  "/_build/assets/LoaderIcon-vvHMUdiU.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"93f-20NtTrERxcrI76oHOnNrGU8KXgA\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 2367,
    "path": "../../.output/public/_build/assets/LoaderIcon-vvHMUdiU.js.gz"
  },
  "/_build/assets/ModeSelect-BJJ_f2zv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7ec-HpSov5m7JcnWRjutEkwyT+eBWEo\"",
    "mtime": "2025-08-11T06:01:51.751Z",
    "size": 2028,
    "path": "../../.output/public/_build/assets/ModeSelect-BJJ_f2zv.js"
  },
  "/_build/assets/ModeSelect-BJJ_f2zv.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"373-sTNV/OPoXUPonKx+ACy8qfFun2U\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 883,
    "path": "../../.output/public/_build/assets/ModeSelect-BJJ_f2zv.js.br"
  },
  "/_build/assets/ModeSelect-BJJ_f2zv.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"40f-stYk+0y6HKw70a1QFVIRN6IPMbk\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1039,
    "path": "../../.output/public/_build/assets/ModeSelect-BJJ_f2zv.js.gz"
  },
  "/_build/assets/PresetsDropdown-LCBqfjaO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e-q1tRIyOEWNsEKSfKmX7393+ULag\"",
    "mtime": "2025-08-11T06:01:51.751Z",
    "size": 46,
    "path": "../../.output/public/_build/assets/PresetsDropdown-LCBqfjaO.js"
  },
  "/_build/assets/Setting-cRnihSjt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2fa-Odk0m4Vxf7R4CR4ZqE/tlynGmGU\"",
    "mtime": "2025-08-11T06:01:51.751Z",
    "size": 762,
    "path": "../../.output/public/_build/assets/Setting-cRnihSjt.js"
  },
  "/_build/assets/ShadowSettings-CUXIQFKK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"89d-zHAJUnbohGuEIC+qwQw6SxK5gXE\"",
    "mtime": "2025-08-11T06:01:51.751Z",
    "size": 2205,
    "path": "../../.output/public/_build/assets/ShadowSettings-CUXIQFKK.js"
  },
  "/_build/assets/ShadowSettings-CUXIQFKK.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"3a8-eCFSQz5EDdOeMM6LpXwX9dy379Y\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 936,
    "path": "../../.output/public/_build/assets/ShadowSettings-CUXIQFKK.js.br"
  },
  "/_build/assets/ShadowSettings-CUXIQFKK.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"421-iHM9SjIoq4Mle2oZNuarnf2spn8\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1057,
    "path": "../../.output/public/_build/assets/ShadowSettings-CUXIQFKK.js.gz"
  },
  "/_build/assets/ShareButton-CSgKJq7W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c24-v1k65EyQ41HBt6a/Xsc6DBbous8\"",
    "mtime": "2025-08-11T06:01:51.751Z",
    "size": 7204,
    "path": "../../.output/public/_build/assets/ShareButton-CSgKJq7W.js"
  },
  "/_build/assets/ShareButton-CSgKJq7W.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"ada-oN4+3M1fGwRuifxoDfMIWuMkTtc\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 2778,
    "path": "../../.output/public/_build/assets/ShareButton-CSgKJq7W.js.br"
  },
  "/_build/assets/ShareButton-CSgKJq7W.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"c4d-tyYTsnspD0O0+2unbv/6AbIObBE\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 3149,
    "path": "../../.output/public/_build/assets/ShareButton-CSgKJq7W.js.gz"
  },
  "/_build/assets/SignInButton-ouoxLnKb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d6-SscaxQXorHNTOSn1wnSwI+IUEFg\"",
    "mtime": "2025-08-11T06:01:51.751Z",
    "size": 470,
    "path": "../../.output/public/_build/assets/SignInButton-ouoxLnKb.js"
  },
  "/_build/assets/SwitchTab-CBKi0qjj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6ca9-rmrVpnrgioaaQ1XBFkfiyIZX9Yo\"",
    "mtime": "2025-08-11T06:01:51.751Z",
    "size": 27817,
    "path": "../../.output/public/_build/assets/SwitchTab-CBKi0qjj.js"
  },
  "/_build/assets/SwitchTab-CBKi0qjj.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1f6d-hRiSMNUHciqYNMzIUpfID11LQpU\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 8045,
    "path": "../../.output/public/_build/assets/SwitchTab-CBKi0qjj.js.br"
  },
  "/_build/assets/SwitchTab-CBKi0qjj.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"22bd-5JCG49SKAsyttws8dt0gyLY2cGM\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 8893,
    "path": "../../.output/public/_build/assets/SwitchTab-CBKi0qjj.js.gz"
  },
  "/_build/assets/Toggle-CCBXD6Cq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11b5-RHbpUw38iRcu/lagTwHjsQi5aj8\"",
    "mtime": "2025-08-11T06:01:51.751Z",
    "size": 4533,
    "path": "../../.output/public/_build/assets/Toggle-CCBXD6Cq.js"
  },
  "/_build/assets/Toggle-CCBXD6Cq.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"66f-tQVc1PYNNPDnVjDPGAvz8illsls\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1647,
    "path": "../../.output/public/_build/assets/Toggle-CCBXD6Cq.js.br"
  },
  "/_build/assets/Toggle-CCBXD6Cq.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"72a-0U8/XNuIRsnzIpkfXOeHjjSgpIk\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1834,
    "path": "../../.output/public/_build/assets/Toggle-CCBXD6Cq.js.gz"
  },
  "/_build/assets/Tooltip-uocwE6rA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"267-iPwN9lHsZRS1wlmBZOK8zESf2eA\"",
    "mtime": "2025-08-11T06:01:51.751Z",
    "size": 615,
    "path": "../../.output/public/_build/assets/Tooltip-uocwE6rA.js"
  },
  "/_build/assets/U42ECMND-BDjyePcW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"97-Lwt5v7S+KsbynBxE/VOyf9YpBzQ\"",
    "mtime": "2025-08-11T06:01:51.751Z",
    "size": 151,
    "path": "../../.output/public/_build/assets/U42ECMND-BDjyePcW.js"
  },
  "/_build/assets/UKTBL2JL-CvU0Qdg8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"414-V44f3DM+5BseLFco+JZpGdBxCkI\"",
    "mtime": "2025-08-11T06:01:51.751Z",
    "size": 1044,
    "path": "../../.output/public/_build/assets/UKTBL2JL-CvU0Qdg8.js"
  },
  "/_build/assets/UKTBL2JL-CvU0Qdg8.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1fb-NANap1bN8vTzYnJJFNZJp6i/sjg\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 507,
    "path": "../../.output/public/_build/assets/UKTBL2JL-CvU0Qdg8.js.br"
  },
  "/_build/assets/UKTBL2JL-CvU0Qdg8.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"243-H53Qw/V4PZvAEAnOBf5z0xTa/lE\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 579,
    "path": "../../.output/public/_build/assets/UKTBL2JL-CvU0Qdg8.js.gz"
  },
  "/_build/assets/VI7QYH27-603SSBI-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"235-lM2CReiu5HZEQsMv/YlbeTzGRSQ\"",
    "mtime": "2025-08-11T06:01:51.755Z",
    "size": 565,
    "path": "../../.output/public/_build/assets/VI7QYH27-603SSBI-.js"
  },
  "/_build/assets/WRC6BLVS-B7nXXnbA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5006-P8u7j4sufPAJAmzohQT7wN7UqiE\"",
    "mtime": "2025-08-11T06:01:51.755Z",
    "size": 20486,
    "path": "../../.output/public/_build/assets/WRC6BLVS-B7nXXnbA.js"
  },
  "/_build/assets/WRC6BLVS-B7nXXnbA.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"17a0-CU7HwEEp/ztta8ZbNo5Dp+Q1tqI\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 6048,
    "path": "../../.output/public/_build/assets/WRC6BLVS-B7nXXnbA.js.br"
  },
  "/_build/assets/WRC6BLVS-B7nXXnbA.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1a11-D9WeL2/Z2Gfq/BLnjvstPfVkpFc\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 6673,
    "path": "../../.output/public/_build/assets/WRC6BLVS-B7nXXnbA.js.gz"
  },
  "/_build/assets/ZZYKR3VO-DAa9CJSv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b78-pFqp+m4qzL7KTab1PAL8FlQE2M4\"",
    "mtime": "2025-08-11T06:01:51.755Z",
    "size": 2936,
    "path": "../../.output/public/_build/assets/ZZYKR3VO-DAa9CJSv.js"
  },
  "/_build/assets/ZZYKR3VO-DAa9CJSv.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"48e-UWPMXijXcDxpTzUGjJLyGHF6Zwk\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1166,
    "path": "../../.output/public/_build/assets/ZZYKR3VO-DAa9CJSv.js.br"
  },
  "/_build/assets/ZZYKR3VO-DAa9CJSv.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"523-z6qEB2mcxd6AJ/T07oZRM6OrQ1Q\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1315,
    "path": "../../.output/public/_build/assets/ZZYKR3VO-DAa9CJSv.js.gz"
  },
  "/_build/assets/action-CCC_kcvo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"faf-CDAIppOezzw7Q5gN4lUWCBVnr+8\"",
    "mtime": "2025-08-11T06:01:51.755Z",
    "size": 4015,
    "path": "../../.output/public/_build/assets/action-CCC_kcvo.js"
  },
  "/_build/assets/action-CCC_kcvo.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"70e-Y9HAdOQHzFtSAxNnHrbKU2NrUF4\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1806,
    "path": "../../.output/public/_build/assets/action-CCC_kcvo.js.br"
  },
  "/_build/assets/action-CCC_kcvo.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"7bd-3UVVXvOtvxXeFSHnrxMp0gjhX8k\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1981,
    "path": "../../.output/public/_build/assets/action-CCC_kcvo.js.gz"
  },
  "/_build/assets/analytics-Bl4UmPF-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"27814-skrv3omXTxWt0yDwDFQH8p4HHlE\"",
    "mtime": "2025-08-11T06:01:51.755Z",
    "size": 161812,
    "path": "../../.output/public/_build/assets/analytics-Bl4UmPF-.js"
  },
  "/_build/assets/analytics-Bl4UmPF-.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"b97f-xAcv8lZoXbG69ZW0UQvSO+Rd0Oc\"",
    "mtime": "2025-08-11T06:01:54.111Z",
    "size": 47487,
    "path": "../../.output/public/_build/assets/analytics-Bl4UmPF-.js.br"
  },
  "/_build/assets/analytics-Bl4UmPF-.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"d4c6-X/MFRVTNgT3Y1kyNyoeG+pjYrnA\"",
    "mtime": "2025-08-11T06:01:54.119Z",
    "size": 54470,
    "path": "../../.output/public/_build/assets/analytics-Bl4UmPF-.js.gz"
  },
  "/_build/assets/app-DzQ8LI4z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6a-rWodEHjh0AZKrOe/PjHczf44SG0\"",
    "mtime": "2025-08-11T06:01:51.755Z",
    "size": 106,
    "path": "../../.output/public/_build/assets/app-DzQ8LI4z.js"
  },
  "/_build/assets/auth-DjyYg_UE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"580-xxO6QWkKn3ntmCYmODKlZJRnfW4\"",
    "mtime": "2025-08-11T06:01:51.755Z",
    "size": 1408,
    "path": "../../.output/public/_build/assets/auth-DjyYg_UE.js"
  },
  "/_build/assets/auth-DjyYg_UE.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2b9-JAKGkHaKEu1HYBs2UhMl/NnDz9U\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 697,
    "path": "../../.output/public/_build/assets/auth-DjyYg_UE.js.br"
  },
  "/_build/assets/auth-DjyYg_UE.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"30c-G+9Oi6pUguBx27DIr9k8sQbhadM\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 780,
    "path": "../../.output/public/_build/assets/auth-DjyYg_UE.js.gz"
  },
  "/_build/assets/auto-C0B2t64G.jpg": {
    "type": "image/jpeg",
    "etag": "\"10d9a-wHWwHHZ31iY2MaCS8qdfIPZuR94\"",
    "mtime": "2025-08-11T06:01:51.755Z",
    "size": 69018,
    "path": "../../.output/public/_build/assets/auto-C0B2t64G.jpg"
  },
  "/_build/assets/bell-fny2Av6x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"456-7zcQ4avrvETPbp1EZXEaLF+L4W4\"",
    "mtime": "2025-08-11T06:01:51.755Z",
    "size": 1110,
    "path": "../../.output/public/_build/assets/bell-fny2Av6x.js"
  },
  "/_build/assets/bell-fny2Av6x.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1a9-K70K6hM25LyAWiOmmEk/xP31VbI\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 425,
    "path": "../../.output/public/_build/assets/bell-fny2Av6x.js.br"
  },
  "/_build/assets/bell-fny2Av6x.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1d7-oSH9XpsrA6RzsDiXugsVXZGoAag\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 471,
    "path": "../../.output/public/_build/assets/bell-fny2Av6x.js.gz"
  },
  "/_build/assets/callback.template-Dxhu4AQH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e21-GJbIggiYDUeIIOIQPMQhegTAWNU\"",
    "mtime": "2025-08-11T06:01:51.755Z",
    "size": 3617,
    "path": "../../.output/public/_build/assets/callback.template-Dxhu4AQH.js"
  },
  "/_build/assets/callback.template-Dxhu4AQH.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4df-3yeTKq3WrpcFfQXoDturrOzUm/8\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1247,
    "path": "../../.output/public/_build/assets/callback.template-Dxhu4AQH.js.br"
  },
  "/_build/assets/callback.template-Dxhu4AQH.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"634-fG1EDw7JmeuJ95gXJTZOh7oghQ0\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1588,
    "path": "../../.output/public/_build/assets/callback.template-Dxhu4AQH.js.gz"
  },
  "/_build/assets/camera-CPexw228.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2090-OIv3GYQexGs2peQgLmHclaz/VbQ\"",
    "mtime": "2025-08-11T06:01:51.755Z",
    "size": 8336,
    "path": "../../.output/public/_build/assets/camera-CPexw228.js"
  },
  "/_build/assets/camera-CPexw228.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"a8d-wxhoJbgqVdIPHTm+ziqY3sy3aJA\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 2701,
    "path": "../../.output/public/_build/assets/camera-CPexw228.js.br"
  },
  "/_build/assets/camera-CPexw228.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"bd2-9CwUDxfzMZUyvw+Subdz/LUzg+A\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 3026,
    "path": "../../.output/public/_build/assets/camera-CPexw228.js.gz"
  },
  "/_build/assets/camera-f6QVal7G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"319-UAngxENnARzcJ4BO9X5/FEBo9aA\"",
    "mtime": "2025-08-11T06:01:51.755Z",
    "size": 793,
    "path": "../../.output/public/_build/assets/camera-f6QVal7G.js"
  },
  "/_build/assets/capture-area-ChyK-VFT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1001-Tecg3YzWaDNs/oiTwLVPKlpihmk\"",
    "mtime": "2025-08-11T06:01:51.759Z",
    "size": 4097,
    "path": "../../.output/public/_build/assets/capture-area-ChyK-VFT.js"
  },
  "/_build/assets/capture-area-ChyK-VFT.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"6b5-Tw1ChJfBLyPM7m4iiYp2d9REyM4\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1717,
    "path": "../../.output/public/_build/assets/capture-area-ChyK-VFT.js.br"
  },
  "/_build/assets/capture-area-ChyK-VFT.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"781-oWzwC7u9u5FM118116LSbsbmwKg\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1921,
    "path": "../../.output/public/_build/assets/capture-area-ChyK-VFT.js.gz"
  },
  "/_build/assets/changelog-Dvfwstva.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1bcf1-n7IYPYbJ8f0ucQa1jpI0hQpOcac\"",
    "mtime": "2025-08-11T06:01:51.755Z",
    "size": 113905,
    "path": "../../.output/public/_build/assets/changelog-Dvfwstva.js"
  },
  "/_build/assets/changelog-Dvfwstva.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"78f7-e9mgWX/z5xsk81aSb6iNtUGR6iE\"",
    "mtime": "2025-08-11T06:01:54.103Z",
    "size": 30967,
    "path": "../../.output/public/_build/assets/changelog-Dvfwstva.js.br"
  },
  "/_build/assets/changelog-Dvfwstva.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"87fc-wST2NiDXyi/J3xsLPiPTEiqhBwA\"",
    "mtime": "2025-08-11T06:01:54.111Z",
    "size": 34812,
    "path": "../../.output/public/_build/assets/changelog-Dvfwstva.js.gz"
  },
  "/_build/assets/check-Dv8ShDZ6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"121-FTmqNy/QWupQOwlrNRPBcv6FVcE\"",
    "mtime": "2025-08-11T06:01:51.763Z",
    "size": 289,
    "path": "../../.output/public/_build/assets/check-Dv8ShDZ6.js"
  },
  "/_build/assets/chevron-down-VBQJb1U_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17a-RA7Djw926t4Kv44fkqsnpUqSDzM\"",
    "mtime": "2025-08-11T06:01:51.763Z",
    "size": 378,
    "path": "../../.output/public/_build/assets/chevron-down-VBQJb1U_.js"
  },
  "/_build/assets/circle-check-wA7W96h9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e9-YqH/UQ8iLFwkfSKv2kiSFONop2M\"",
    "mtime": "2025-08-11T06:01:51.763Z",
    "size": 489,
    "path": "../../.output/public/_build/assets/circle-check-wA7W96h9.js"
  },
  "/_build/assets/circle-x-C1Ty7rjt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e6-8Mr36dbRYA4ZtSjdz4wLzLNbFYw\"",
    "mtime": "2025-08-11T06:01:51.763Z",
    "size": 486,
    "path": "../../.output/public/_build/assets/circle-x-C1Ty7rjt.js"
  },
  "/_build/assets/client-DhaZc8Wf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8431-qOp3NH4MXMTezhemSwYA9zAn3O8\"",
    "mtime": "2025-08-11T06:01:51.763Z",
    "size": 33841,
    "path": "../../.output/public/_build/assets/client-DhaZc8Wf.js"
  },
  "/_build/assets/client-DhaZc8Wf.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"224e-YiL4nVPyuaVLHMyycdTnNlXOtEs\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 8782,
    "path": "../../.output/public/_build/assets/client-DhaZc8Wf.js.br"
  },
  "/_build/assets/client-DhaZc8Wf.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"277f-XGfeN9izELsfqq4B09sK7LEvquc\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 10111,
    "path": "../../.output/public/_build/assets/client-DhaZc8Wf.js.gz"
  },
  "/_build/assets/client-Dunmda2-.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d4a2-JBny42VXqOI9DTS8p4fBW2MqlIg\"",
    "mtime": "2025-08-11T06:01:51.767Z",
    "size": 119970,
    "path": "../../.output/public/_build/assets/client-Dunmda2-.css"
  },
  "/_build/assets/client-Dunmda2-.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"3f98-NfNEZ8IXbisV0bIRrn0genpvhpk\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 16280,
    "path": "../../.output/public/_build/assets/client-Dunmda2-.css.br"
  },
  "/_build/assets/client-Dunmda2-.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4e40-WazQJhjmBnTE1Z/lBYbJHvDw2t8\"",
    "mtime": "2025-08-11T06:01:54.103Z",
    "size": 20032,
    "path": "../../.output/public/_build/assets/client-Dunmda2-.css.gz"
  },
  "/_build/assets/cloud-1-0EtYTpJQ.png": {
    "type": "image/png",
    "etag": "\"87baf-TRwoUz9Nfv8bV11Z8TX8hohn/c0\"",
    "mtime": "2025-08-11T06:01:51.767Z",
    "size": 555951,
    "path": "../../.output/public/_build/assets/cloud-1-0EtYTpJQ.png"
  },
  "/_build/assets/cloud-2-C48ZYBEu.png": {
    "type": "image/png",
    "etag": "\"6dcc1-IIZg0Fh4t1tIvuKyCgwI2JWsQek\"",
    "mtime": "2025-08-11T06:01:51.767Z",
    "size": 449729,
    "path": "../../.output/public/_build/assets/cloud-2-C48ZYBEu.png"
  },
  "/_build/assets/cloud-3-SWvz_Fyk.png": {
    "type": "image/png",
    "etag": "\"b2340-52WXqkDXhNCDXTbCMJZuoQKBq+c\"",
    "mtime": "2025-08-11T06:01:51.775Z",
    "size": 729920,
    "path": "../../.output/public/_build/assets/cloud-3-SWvz_Fyk.png"
  },
  "/_build/assets/combineProps-oHjLfPsP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10e-1O8eRckuAzEFidv8DrvHEvBe2mg\"",
    "mtime": "2025-08-11T06:01:51.771Z",
    "size": 270,
    "path": "../../.output/public/_build/assets/combineProps-oHjLfPsP.js"
  },
  "/_build/assets/components-CzM5XsXf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d5-9fWR5IpM8XE10xs8Bmau+2F9NtY\"",
    "mtime": "2025-08-11T06:01:51.775Z",
    "size": 981,
    "path": "../../.output/public/_build/assets/components-CzM5XsXf.js"
  },
  "/_build/assets/context-Zi7A3g3B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ee7-eBYUxsimifWyTfr6SYYuwreMzXU\"",
    "mtime": "2025-08-11T06:01:51.775Z",
    "size": 7911,
    "path": "../../.output/public/_build/assets/context-Zi7A3g3B.js"
  },
  "/_build/assets/context-Zi7A3g3B.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"cff-r4XERf1DGTt6AhfkqzLKFGkfIoc\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 3327,
    "path": "../../.output/public/_build/assets/context-Zi7A3g3B.js.br"
  },
  "/_build/assets/context-Zi7A3g3B.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"e2d-urJPFgq8MYZKtCu//ptqn2J4uUQ\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 3629,
    "path": "../../.output/public/_build/assets/context-Zi7A3g3B.js.gz"
  },
  "/_build/assets/copy-0I7pZbp1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"324-VdmcNM2PK7K0JLwGH4JBX/c4E0k\"",
    "mtime": "2025-08-11T06:01:51.775Z",
    "size": 804,
    "path": "../../.output/public/_build/assets/copy-0I7pZbp1.js"
  },
  "/_build/assets/createEventListener-hBGiy99l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9e-nVm1jzWH+rz9aNQz/lmF290OAwM\"",
    "mtime": "2025-08-11T06:01:51.775Z",
    "size": 158,
    "path": "../../.output/public/_build/assets/createEventListener-hBGiy99l.js"
  },
  "/_build/assets/crop-Dxrsj5UL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19d-OLwL1gSLkGVPx7LiAONf4Grcn8A\"",
    "mtime": "2025-08-11T06:01:51.775Z",
    "size": 413,
    "path": "../../.output/public/_build/assets/crop-Dxrsj5UL.js"
  },
  "/_build/assets/dark-BnzlTUlI.jpg": {
    "type": "image/jpeg",
    "etag": "\"e5bb-V3RlSPYep6iqYkWNvyor3o4YFC0\"",
    "mtime": "2025-08-11T06:01:51.775Z",
    "size": 58811,
    "path": "../../.output/public/_build/assets/dark-BnzlTUlI.jpg"
  },
  "/_build/assets/debug-QCEwPtJD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5a4-pA2aKnIT282NW+tbEWVud4tEUfo\"",
    "mtime": "2025-08-11T06:01:51.775Z",
    "size": 1444,
    "path": "../../.output/public/_build/assets/debug-QCEwPtJD.js"
  },
  "/_build/assets/debug-QCEwPtJD.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"291-KLG/VdPywfjWexSmEthugfWkT2Q\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 657,
    "path": "../../.output/public/_build/assets/debug-QCEwPtJD.js.br"
  },
  "/_build/assets/debug-QCEwPtJD.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"315-mH7aBQC1ezoMP7eNjZfw3oRgcug\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 789,
    "path": "../../.output/public/_build/assets/debug-QCEwPtJD.js.gz"
  },
  "/_build/assets/enlarge-D3YDfZAv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4df-nkF5hfNp9l5Of+HlfCl9CDckN9g\"",
    "mtime": "2025-08-11T06:01:51.775Z",
    "size": 1247,
    "path": "../../.output/public/_build/assets/enlarge-D3YDfZAv.js"
  },
  "/_build/assets/enlarge-D3YDfZAv.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"282-Vz+WrZqXRyHOCYwZJa5Hn0CY2yc\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 642,
    "path": "../../.output/public/_build/assets/enlarge-D3YDfZAv.js.br"
  },
  "/_build/assets/enlarge-D3YDfZAv.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2b8-sBm50jM8QFTYeKZV3cfwZcd8Sx0\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 696,
    "path": "../../.output/public/_build/assets/enlarge-D3YDfZAv.js.gz"
  },
  "/_build/assets/event-BsZo1uc7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b2b-+MQsPnSGM4CZXygKoG44C3w+jAw\"",
    "mtime": "2025-08-11T06:01:51.775Z",
    "size": 2859,
    "path": "../../.output/public/_build/assets/event-BsZo1uc7.js"
  },
  "/_build/assets/event-BsZo1uc7.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"412-keXa/+8FYXg1b46mSwA8V1Sl3Lw\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1042,
    "path": "../../.output/public/_build/assets/event-BsZo1uc7.js.br"
  },
  "/_build/assets/event-BsZo1uc7.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4bc-G8wS+Htx7mS3OtIj4l0FRUO5Bxg\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1212,
    "path": "../../.output/public/_build/assets/event-BsZo1uc7.js.gz"
  },
  "/_build/assets/eventListener-Dvds-6t5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"14f-LS09apG4/Ir9bvq31N8OsKGxK5g\"",
    "mtime": "2025-08-11T06:01:51.775Z",
    "size": 335,
    "path": "../../.output/public/_build/assets/eventListener-Dvds-6t5.js"
  },
  "/_build/assets/experimental-DBvh0aOf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9a7-YU28bP2UPPAzSif36cDJLlVDoqo\"",
    "mtime": "2025-08-11T06:01:51.779Z",
    "size": 2471,
    "path": "../../.output/public/_build/assets/experimental-DBvh0aOf.js"
  },
  "/_build/assets/experimental-DBvh0aOf.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"3e4-M3jszSouYG4gOEQyGxmd9eJSRnI\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 996,
    "path": "../../.output/public/_build/assets/experimental-DBvh0aOf.js.br"
  },
  "/_build/assets/experimental-DBvh0aOf.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4ec-zrMgykgmueGZkRCBPKnm51vJ7vk\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1260,
    "path": "../../.output/public/_build/assets/experimental-DBvh0aOf.js.gz"
  },
  "/_build/assets/eye-Dvy2GA25.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"199-2X2gdwg3atpIZrMHhfTTYpGnY4I\"",
    "mtime": "2025-08-11T06:01:51.779Z",
    "size": 409,
    "path": "../../.output/public/_build/assets/eye-Dvy2GA25.js"
  },
  "/_build/assets/feedback-CQZIQzVl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9c0-8rTKlMvsC+YG7ZPlD3h4DP4ZKNU\"",
    "mtime": "2025-08-11T06:01:51.779Z",
    "size": 2496,
    "path": "../../.output/public/_build/assets/feedback-CQZIQzVl.js"
  },
  "/_build/assets/feedback-CQZIQzVl.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"456-8iG8Yp+FXn5ugz1D9iFj2MfsBSY\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1110,
    "path": "../../.output/public/_build/assets/feedback-CQZIQzVl.js.br"
  },
  "/_build/assets/feedback-CQZIQzVl.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"510-Col6EoQAgrqIg0CpPRWSb8dVz4g\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1296,
    "path": "../../.output/public/_build/assets/feedback-CQZIQzVl.js.gz"
  },
  "/_build/assets/film-cut-BOCL_tgM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"958-ytBGeWK1AK19OdM9+k8Xn6lEOjk\"",
    "mtime": "2025-08-11T06:01:51.779Z",
    "size": 2392,
    "path": "../../.output/public/_build/assets/film-cut-BOCL_tgM.js"
  },
  "/_build/assets/film-cut-BOCL_tgM.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"44e-Jm+yzOpb9gh8wkcIc1pWi0jLso4\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1102,
    "path": "../../.output/public/_build/assets/film-cut-BOCL_tgM.js.br"
  },
  "/_build/assets/film-cut-BOCL_tgM.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4ca-PePTN5WCACG4IgJX+rlOlpixa2c\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1226,
    "path": "../../.output/public/_build/assets/film-cut-BOCL_tgM.js.gz"
  },
  "/_build/assets/floating-ui.dom-DzoQ-s65.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5297-uxlprGbdC8zXGxDnL+lCb9bCMdY\"",
    "mtime": "2025-08-11T06:01:51.779Z",
    "size": 21143,
    "path": "../../.output/public/_build/assets/floating-ui.dom-DzoQ-s65.js"
  },
  "/_build/assets/floating-ui.dom-DzoQ-s65.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1cae-QXItjRjN1X+po4zPVWDKvrByDIw\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 7342,
    "path": "../../.output/public/_build/assets/floating-ui.dom-DzoQ-s65.js.br"
  },
  "/_build/assets/floating-ui.dom-DzoQ-s65.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1fd6-7XW+bOAnkQrdQW4LZx3f8cibjrQ\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 8150,
    "path": "../../.output/public/_build/assets/floating-ui.dom-DzoQ-s65.js.gz"
  },
  "/_build/assets/folder-BfBEOjQD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"188-geMp+mAEtDo96cQwQMW+QKWZf40\"",
    "mtime": "2025-08-11T06:01:51.787Z",
    "size": 392,
    "path": "../../.output/public/_build/assets/folder-BfBEOjQD.js"
  },
  "/_build/assets/geist-sans-latin-400-normal-BOaIZNA2.woff": {
    "type": "font/woff",
    "etag": "\"9800-gmlNOsSjSWPuV/UJv7wPJT6Ti18\"",
    "mtime": "2025-08-11T06:01:51.787Z",
    "size": 38912,
    "path": "../../.output/public/_build/assets/geist-sans-latin-400-normal-BOaIZNA2.woff"
  },
  "/_build/assets/geist-sans-latin-400-normal-gapTbOY8.woff2": {
    "type": "font/woff2",
    "etag": "\"8278-BL/1we+Fux5TMPkgvmAhfnvw2wk\"",
    "mtime": "2025-08-11T06:01:51.787Z",
    "size": 33400,
    "path": "../../.output/public/_build/assets/geist-sans-latin-400-normal-gapTbOY8.woff2"
  },
  "/_build/assets/geist-sans-latin-500-normal-CN2lyvyL.woff": {
    "type": "font/woff",
    "etag": "\"9e48-0WmgNqWFs2DeWCjBzsPeQ6jWsT8\"",
    "mtime": "2025-08-11T06:01:51.791Z",
    "size": 40520,
    "path": "../../.output/public/_build/assets/geist-sans-latin-500-normal-CN2lyvyL.woff"
  },
  "/_build/assets/geist-sans-latin-500-normal-uokXdC-Q.woff2": {
    "type": "font/woff2",
    "etag": "\"879c-cSw8pF/IROicVxgAkf/OnNOvpdE\"",
    "mtime": "2025-08-11T06:01:51.791Z",
    "size": 34716,
    "path": "../../.output/public/_build/assets/geist-sans-latin-500-normal-uokXdC-Q.woff2"
  },
  "/_build/assets/geist-sans-latin-700-normal-BmN9tIp5.woff2": {
    "type": "font/woff2",
    "etag": "\"8a9c-xwymHMxeZX6DV0bbAhDQA7823iY\"",
    "mtime": "2025-08-11T06:01:51.791Z",
    "size": 35484,
    "path": "../../.output/public/_build/assets/geist-sans-latin-700-normal-BmN9tIp5.woff2"
  },
  "/_build/assets/geist-sans-latin-700-normal-CjScfYeH.woff": {
    "type": "font/woff",
    "etag": "\"a1b4-5eOdQkM1kv/gW2ElAZFrudYUZQE\"",
    "mtime": "2025-08-11T06:01:51.791Z",
    "size": 41396,
    "path": "../../.output/public/_build/assets/geist-sans-latin-700-normal-CjScfYeH.woff"
  },
  "/_build/assets/general-BUPNZY2f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2793-gvXsYtliMbBiVNNHV4XlsXnP+XE\"",
    "mtime": "2025-08-11T06:01:51.791Z",
    "size": 10131,
    "path": "../../.output/public/_build/assets/general-BUPNZY2f.js"
  },
  "/_build/assets/general-BUPNZY2f.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"dba-AcowhE4NdheUUBBQ4BYE7wN8aTc\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 3514,
    "path": "../../.output/public/_build/assets/general-BUPNZY2f.js.br"
  },
  "/_build/assets/general-BUPNZY2f.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"fbc-bxNQ4YiB/kfF9mPwaSuJvlvl/Pk\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 4028,
    "path": "../../.output/public/_build/assets/general-BUPNZY2f.js.gz"
  },
  "/_build/assets/hard-drive-DWY7FyM0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a2-jY2Uj3T0dJeutsKDs8kjDSDnpxI\"",
    "mtime": "2025-08-11T06:01:51.791Z",
    "size": 674,
    "path": "../../.output/public/_build/assets/hard-drive-DWY7FyM0.js"
  },
  "/_build/assets/hotkeys-BmWg1icV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"410-eldqVnYCYNDpESwOL2J4G0voqUE\"",
    "mtime": "2025-08-11T06:01:51.791Z",
    "size": 1040,
    "path": "../../.output/public/_build/assets/hotkeys-BmWg1icV.js"
  },
  "/_build/assets/hotkeys-BmWg1icV.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"19f-sYoDkSB/W0kE/HEMHe9LgzfZqic\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 415,
    "path": "../../.output/public/_build/assets/hotkeys-BmWg1icV.js.br"
  },
  "/_build/assets/hotkeys-BmWg1icV.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1c7-IQNoDgg9AxC8sxwsCMivoC0M8sE\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 455,
    "path": "../../.output/public/_build/assets/hotkeys-BmWg1icV.js.gz"
  },
  "/_build/assets/hotkeys-CHU6uXvg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1003-jad7fTkZJ4/3IVWltaBaEhck/2M\"",
    "mtime": "2025-08-11T06:01:51.791Z",
    "size": 4099,
    "path": "../../.output/public/_build/assets/hotkeys-CHU6uXvg.js"
  },
  "/_build/assets/hotkeys-CHU6uXvg.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"60b-UuP0knVDbChQ3DyLHlNVtw5gUOc\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1547,
    "path": "../../.output/public/_build/assets/hotkeys-CHU6uXvg.js.br"
  },
  "/_build/assets/hotkeys-CHU6uXvg.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"6e7-G+TNkF1bkN5FHDa1zKHNDyVxL1M\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1767,
    "path": "../../.output/public/_build/assets/hotkeys-CHU6uXvg.js.gz"
  },
  "/_build/assets/in-progress-recording-BJYB1pcE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2b63-dX+7V1/wL36nKd5USGSz6tzXXAs\"",
    "mtime": "2025-08-11T06:01:51.791Z",
    "size": 11107,
    "path": "../../.output/public/_build/assets/in-progress-recording-BJYB1pcE.js"
  },
  "/_build/assets/in-progress-recording-BJYB1pcE.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"d5d-70MnGtOuQOCCqVUe9Zw47LOJjDQ\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 3421,
    "path": "../../.output/public/_build/assets/in-progress-recording-BJYB1pcE.js.br"
  },
  "/_build/assets/in-progress-recording-BJYB1pcE.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"f0c-ICU4jYN6BZeTw9zawZN5kfIP47M\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 3852,
    "path": "../../.output/public/_build/assets/in-progress-recording-BJYB1pcE.js.gz"
  },
  "/_build/assets/index-B1BdrjQY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3c2-9bk7Tg6TRjaAOZVz2NwVPUrysvw\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 962,
    "path": "../../.output/public/_build/assets/index-B1BdrjQY.js"
  },
  "/_build/assets/index-B3jaOB3S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7b-ubLDXvQRcbpD94R6bBgbNc0aleQ\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 123,
    "path": "../../.output/public/_build/assets/index-B3jaOB3S.js"
  },
  "/_build/assets/index-BCIBX7Oz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9dc-qECwYSL0YorFVwJg4eJYS8bE4uI\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 2524,
    "path": "../../.output/public/_build/assets/index-BCIBX7Oz.js"
  },
  "/_build/assets/index-BCIBX7Oz.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"483-U0oGxHmcA7iL5Q4DSiYAEK0gwvo\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1155,
    "path": "../../.output/public/_build/assets/index-BCIBX7Oz.js.br"
  },
  "/_build/assets/index-BCIBX7Oz.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"551-5mlN6y4JyG1YEZoaXzbfkljI85I\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1361,
    "path": "../../.output/public/_build/assets/index-BCIBX7Oz.js.gz"
  },
  "/_build/assets/index-BzicxdXv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b2-suSbI5zPGrt3+vvYnn20sTvd/vk\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 178,
    "path": "../../.output/public/_build/assets/index-BzicxdXv.js"
  },
  "/_build/assets/index-CDzcXN-B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"21333-0AXnM2EoQR4aBwr4yafeBI5trKU\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 135987,
    "path": "../../.output/public/_build/assets/index-CDzcXN-B.js"
  },
  "/_build/assets/index-CDzcXN-B.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"8f66-x9Hxob0nINEeRiyb5I/EtMKs734\"",
    "mtime": "2025-08-11T06:01:54.119Z",
    "size": 36710,
    "path": "../../.output/public/_build/assets/index-CDzcXN-B.js.br"
  },
  "/_build/assets/index-CDzcXN-B.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"a728-9fNfu8ofBYVhMP2wxaU9zCL/Xac\"",
    "mtime": "2025-08-11T06:01:54.111Z",
    "size": 42792,
    "path": "../../.output/public/_build/assets/index-CDzcXN-B.js.gz"
  },
  "/_build/assets/index-CSaDVPHJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"86eb-kz8gy8MbvXaHKSZTugdefhGlbCQ\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 34539,
    "path": "../../.output/public/_build/assets/index-CSaDVPHJ.js"
  },
  "/_build/assets/index-CSaDVPHJ.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"256a-iXbxtBqd4sH/+gzHFESQ6HnGiSc\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 9578,
    "path": "../../.output/public/_build/assets/index-CSaDVPHJ.js.br"
  },
  "/_build/assets/index-CSaDVPHJ.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2905-34Ohkt4mKR0ZWvBgXbkIIS+Qx6Q\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 10501,
    "path": "../../.output/public/_build/assets/index-CSaDVPHJ.js.gz"
  },
  "/_build/assets/index-CuxkcSNy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"502f-Hqm1e1kipZ/+JO7Z73xz5lMK0B4\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 20527,
    "path": "../../.output/public/_build/assets/index-CuxkcSNy.js"
  },
  "/_build/assets/index-CuxkcSNy.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"16c2-ArigUVx7M3kn0jeKbIecAhTLdBk\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 5826,
    "path": "../../.output/public/_build/assets/index-CuxkcSNy.js.br"
  },
  "/_build/assets/index-CuxkcSNy.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"190c-IZJ7uWXszOdbUqYQnIvI2A4QLQM\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 6412,
    "path": "../../.output/public/_build/assets/index-CuxkcSNy.js.gz"
  },
  "/_build/assets/index-D3VywF1g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"39a-0riJOMGlhWk0fixqVPbvo2BiY5I\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 922,
    "path": "../../.output/public/_build/assets/index-D3VywF1g.js"
  },
  "/_build/assets/index-DCJEdp2A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"338-cRHepo65AZr0HG/qgdBtB7y3usw\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 824,
    "path": "../../.output/public/_build/assets/index-DCJEdp2A.js"
  },
  "/_build/assets/index-DJipDVMW.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d8-W2PoXXfDRF4YeiJojo2WFHqFeXQ\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 216,
    "path": "../../.output/public/_build/assets/index-DJipDVMW.css"
  },
  "/_build/assets/index-DRZcwRr6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b6-MAYQBuVVa78JP0RTizJNDJgR7Vk\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 182,
    "path": "../../.output/public/_build/assets/index-DRZcwRr6.js"
  },
  "/_build/assets/index-DfaT3VxD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"259-/H+6H2bVPD8EGutCJdJmwRhJPnI\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 601,
    "path": "../../.output/public/_build/assets/index-DfaT3VxD.js"
  },
  "/_build/assets/index-Di8W_zpT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"188-2E58eEYnftwzSg2nu10GyS26RQs\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 392,
    "path": "../../.output/public/_build/assets/index-Di8W_zpT.js"
  },
  "/_build/assets/index-DmupNlQQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"327-cKgbh1OISaEgryyD4f2QiABk1gI\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 807,
    "path": "../../.output/public/_build/assets/index-DmupNlQQ.js"
  },
  "/_build/assets/index-M33yfidE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"400-q5DOw8+AU+6eUzBaIuzncWBoaK0\"",
    "mtime": "2025-08-11T06:01:51.799Z",
    "size": 1024,
    "path": "../../.output/public/_build/assets/index-M33yfidE.js"
  },
  "/_build/assets/index-M33yfidE.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"201-6KZqQshK4k1zqDUxDUIyJotyNYM\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 513,
    "path": "../../.output/public/_build/assets/index-M33yfidE.js.br"
  },
  "/_build/assets/index-M33yfidE.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"22f-hWkQ2edbbVxofPyDMs3f52N5aqo\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 559,
    "path": "../../.output/public/_build/assets/index-M33yfidE.js.gz"
  },
  "/_build/assets/index-VJH0gGJz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fcf-jSd+S+eBnsEHBdkgjUAZoOrCcMs\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 4047,
    "path": "../../.output/public/_build/assets/index-VJH0gGJz.js"
  },
  "/_build/assets/index-VJH0gGJz.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"5d9-IOiz/IJncgG/XOCuywUPYCGkkTQ\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1497,
    "path": "../../.output/public/_build/assets/index-VJH0gGJz.js.br"
  },
  "/_build/assets/index-VJH0gGJz.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"65d-apc+GI6rBTZE3b/q5VHHnxW2opU\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1629,
    "path": "../../.output/public/_build/assets/index-VJH0gGJz.js.gz"
  },
  "/_build/assets/index-twtGqnxP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d6-L5LKYJbBmlXYhi/Zrp0v5fGH3us\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 214,
    "path": "../../.output/public/_build/assets/index-twtGqnxP.js"
  },
  "/_build/assets/instant-mode-dark-CxsYkVlX.png": {
    "type": "image/png",
    "etag": "\"b770-zfqZYBAfc2IhtRt1pVHRhY7CKSw\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 46960,
    "path": "../../.output/public/_build/assets/instant-mode-dark-CxsYkVlX.png"
  },
  "/_build/assets/instant-mode-light-CnQJckdc.png": {
    "type": "image/png",
    "etag": "\"a58b-bx/8wH+s8BDkvqpusUIOKrluE/k\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 42379,
    "path": "../../.output/public/_build/assets/instant-mode-light-CnQJckdc.png"
  },
  "/_build/assets/layout-Dzr1u58d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f14-Cu/YiPRY7iuR2GkCrTKRx4cAIS4\"",
    "mtime": "2025-08-11T06:01:51.795Z",
    "size": 3860,
    "path": "../../.output/public/_build/assets/layout-Dzr1u58d.js"
  },
  "/_build/assets/layout-Dzr1u58d.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4db-cAArBGxJ5YKozx27kA/aua8LPbo\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1243,
    "path": "../../.output/public/_build/assets/layout-Dzr1u58d.js.br"
  },
  "/_build/assets/layout-Dzr1u58d.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"584-xHfcIuRefJnjsjHkTZ5j75Gvfd4\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1412,
    "path": "../../.output/public/_build/assets/layout-Dzr1u58d.js.gz"
  },
  "/_build/assets/license-CM3eLMQx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1db3-f420fIQGObNyNKpbkWusvh7ganM\"",
    "mtime": "2025-08-11T06:01:51.799Z",
    "size": 7603,
    "path": "../../.output/public/_build/assets/license-CM3eLMQx.js"
  },
  "/_build/assets/license-CM3eLMQx.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"a72-TkTkYplZi9UAwj9SU3M+tauCF6A\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 2674,
    "path": "../../.output/public/_build/assets/license-CM3eLMQx.js.br"
  },
  "/_build/assets/license-CM3eLMQx.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"bba-+d/PuC2N6tfymLz6UpVWd82Qy9s\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 3002,
    "path": "../../.output/public/_build/assets/license-CM3eLMQx.js.gz"
  },
  "/_build/assets/light-jjtTqDFf.jpg": {
    "type": "image/jpeg",
    "etag": "\"13db2-fECebPn6B+FZS/UiW6XXXkyVTtk\"",
    "mtime": "2025-08-11T06:01:51.799Z",
    "size": 81330,
    "path": "../../.output/public/_build/assets/light-jjtTqDFf.jpg"
  },
  "/_build/assets/link-Clkq6L3_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d6-CMQHVKt2aB5Gm/5PB8qyal+0Uho\"",
    "mtime": "2025-08-11T06:01:51.799Z",
    "size": 470,
    "path": "../../.output/public/_build/assets/link-Clkq6L3_.js"
  },
  "/_build/assets/logo-VRagdSxV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"33d-Ri4BvRb1xLqQi8batu7GywWCB1M\"",
    "mtime": "2025-08-11T06:01:51.803Z",
    "size": 829,
    "path": "../../.output/public/_build/assets/logo-VRagdSxV.js"
  },
  "/_build/assets/menu-gxdYq_p7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2119-WNfsKjPRrNUpmSez0W2XvswFTpE\"",
    "mtime": "2025-08-11T06:01:51.799Z",
    "size": 8473,
    "path": "../../.output/public/_build/assets/menu-gxdYq_p7.js"
  },
  "/_build/assets/menu-gxdYq_p7.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"6a9-Fvi1dMOPjL4Lah7hzyhW8u2jma8\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1705,
    "path": "../../.output/public/_build/assets/menu-gxdYq_p7.js.br"
  },
  "/_build/assets/menu-gxdYq_p7.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"785-vEIKgO3y9lLrDZ3rjaVz+vOzCpo\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1925,
    "path": "../../.output/public/_build/assets/menu-gxdYq_p7.js.gz"
  },
  "/_build/assets/microphone-CfEqSlBy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"277-OSW5Rf2MXBNLJ44MJn5UcK3URb0\"",
    "mtime": "2025-08-11T06:01:51.803Z",
    "size": 631,
    "path": "../../.output/public/_build/assets/microphone-CfEqSlBy.js"
  },
  "/_build/assets/mode-select-BHPicoXk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"438-Qx7RPOGOMShOAreXgyZI46R5f1E\"",
    "mtime": "2025-08-11T06:01:51.799Z",
    "size": 1080,
    "path": "../../.output/public/_build/assets/mode-select-BHPicoXk.js"
  },
  "/_build/assets/mode-select-BHPicoXk.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"22e-VB2OTCfD0L0ijqUa3ucl6l2DvM4\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 558,
    "path": "../../.output/public/_build/assets/mode-select-BHPicoXk.js.br"
  },
  "/_build/assets/mode-select-BHPicoXk.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"284-ZsJAWD8m8zFHeqwZBtp14tmYI/Y\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 644,
    "path": "../../.output/public/_build/assets/mode-select-BHPicoXk.js.gz"
  },
  "/_build/assets/notifications-CSyKMtKj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"609-ib0mnS1r2avalMjAhij6MzShEiY\"",
    "mtime": "2025-08-11T06:01:51.803Z",
    "size": 1545,
    "path": "../../.output/public/_build/assets/notifications-CSyKMtKj.js"
  },
  "/_build/assets/notifications-CSyKMtKj.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2e3-8p/HC+0cC52YWAPfPyJFw8d9Qgk\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 739,
    "path": "../../.output/public/_build/assets/notifications-CSyKMtKj.js.br"
  },
  "/_build/assets/notifications-CSyKMtKj.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"350-TwgZTUOkMcnLqB8AmI7MHstSCiI\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 848,
    "path": "../../.output/public/_build/assets/notifications-CSyKMtKj.js.gz"
  },
  "/_build/assets/padding-CNov8_jR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"32d6-zBtNmGjGVml/KCqI5Niho5qupAE\"",
    "mtime": "2025-08-11T06:01:51.803Z",
    "size": 13014,
    "path": "../../.output/public/_build/assets/padding-CNov8_jR.js"
  },
  "/_build/assets/padding-CNov8_jR.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1133-FiIvwFsotfm3pHqdWAimvse41Vg\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 4403,
    "path": "../../.output/public/_build/assets/padding-CNov8_jR.js.br"
  },
  "/_build/assets/padding-CNov8_jR.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"137b-FxRccSMMzTFmunvN7gS4x5YhqVc\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 4987,
    "path": "../../.output/public/_build/assets/padding-CNov8_jR.js.gz"
  },
  "/_build/assets/pricing-DMHaqihI.riv": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"efad-LMrimqdUkLN+oS+j8x0igX6QXX4\"",
    "mtime": "2025-08-11T06:01:51.803Z",
    "size": 61357,
    "path": "../../.output/public/_build/assets/pricing-DMHaqihI.riv"
  },
  "/_build/assets/pricing-DMHaqihI.riv.br": {
    "type": "text/plain; charset=utf-8",
    "encoding": "br",
    "etag": "\"487b-fnuWUljMS2vOp8QMKdixN6MeQZY\"",
    "mtime": "2025-08-11T06:01:54.119Z",
    "size": 18555,
    "path": "../../.output/public/_build/assets/pricing-DMHaqihI.riv.br"
  },
  "/_build/assets/pricing-DMHaqihI.riv.gz": {
    "type": "text/plain; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5cf5-/+MI5MwBzOvn5VMQsgA15YRjmCk\"",
    "mtime": "2025-08-11T06:01:54.111Z",
    "size": 23797,
    "path": "../../.output/public/_build/assets/pricing-DMHaqihI.riv.gz"
  },
  "/_build/assets/pricing-DfwPxUfW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20f05-DQFA9Gezb2Oj6yEg90KKLzv1L3E\"",
    "mtime": "2025-08-11T06:01:51.803Z",
    "size": 134917,
    "path": "../../.output/public/_build/assets/pricing-DfwPxUfW.js"
  },
  "/_build/assets/pricing-DfwPxUfW.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"935f-616palNdX/ev+MMf/RQYT5Jl9DY\"",
    "mtime": "2025-08-11T06:01:54.315Z",
    "size": 37727,
    "path": "../../.output/public/_build/assets/pricing-DfwPxUfW.js.br"
  },
  "/_build/assets/pricing-DfwPxUfW.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"a5bf-yPp7EFUuWXz66echsv0nerWtFs0\"",
    "mtime": "2025-08-11T06:01:54.119Z",
    "size": 42431,
    "path": "../../.output/public/_build/assets/pricing-DfwPxUfW.js.gz"
  },
  "/_build/assets/queries-DBWj-Knm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ec9-IjHSaf3l2nF+KEAK9PDjovxtkMU\"",
    "mtime": "2025-08-11T06:01:51.803Z",
    "size": 3785,
    "path": "../../.output/public/_build/assets/queries-DBWj-Knm.js"
  },
  "/_build/assets/queries-DBWj-Knm.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"5f7-1WjNyDJSODCEcZmlgrAG+adg470\"",
    "mtime": "2025-08-11T06:01:54.103Z",
    "size": 1527,
    "path": "../../.output/public/_build/assets/queries-DBWj-Knm.js.br"
  },
  "/_build/assets/queries-DBWj-Knm.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"687-IgQB83ZzB9W8rT5e69oBhPs8s0U\"",
    "mtime": "2025-08-11T06:01:54.103Z",
    "size": 1671,
    "path": "../../.output/public/_build/assets/queries-DBWj-Knm.js.gz"
  },
  "/_build/assets/recordings-DtYPDUnY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a17-kCPuYpnfldlQs+9yXsB1g5yVQu4\"",
    "mtime": "2025-08-11T06:01:51.803Z",
    "size": 6679,
    "path": "../../.output/public/_build/assets/recordings-DtYPDUnY.js"
  },
  "/_build/assets/recordings-DtYPDUnY.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"98d-30ujXar8/ggcflAg6Z7YVop1c1U\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 2445,
    "path": "../../.output/public/_build/assets/recordings-DtYPDUnY.js.br"
  },
  "/_build/assets/recordings-DtYPDUnY.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"aaa-UV7oqiayuOP+VDJhd6x3xH71CcQ\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 2730,
    "path": "../../.output/public/_build/assets/recordings-DtYPDUnY.js.gz"
  },
  "/_build/assets/recordings-overlay-CPPGfDU7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"39ff-vS+OkG+c13dQ+nntux84HnQq/PQ\"",
    "mtime": "2025-08-11T06:01:51.803Z",
    "size": 14847,
    "path": "../../.output/public/_build/assets/recordings-overlay-CPPGfDU7.js"
  },
  "/_build/assets/recordings-overlay-CPPGfDU7.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1347-pG4vkTwmb+cAK7RlBegPpqyx2iE\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 4935,
    "path": "../../.output/public/_build/assets/recordings-overlay-CPPGfDU7.js.br"
  },
  "/_build/assets/recordings-overlay-CPPGfDU7.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"15ac-vVgprYskHB9n8LVkOYQOfHWl2vk\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 5548,
    "path": "../../.output/public/_build/assets/recordings-overlay-CPPGfDU7.js.gz"
  },
  "/_build/assets/rive-kSJxF25z.wasm": {
    "type": "application/wasm",
    "etag": "\"14a9af-FB4Kf2tMS+cd/knAfG7m0iKaQPE\"",
    "mtime": "2025-08-11T06:01:51.803Z",
    "size": 1354159,
    "path": "../../.output/public/_build/assets/rive-kSJxF25z.wasm"
  },
  "/_build/assets/rive-kSJxF25z.wasm.br": {
    "type": "application/wasm",
    "encoding": "br",
    "etag": "\"6140d-vTqQj/ECDnIYqNJQheW00Z5ftqE\"",
    "mtime": "2025-08-11T06:02:04.184Z",
    "size": 398349,
    "path": "../../.output/public/_build/assets/rive-kSJxF25z.wasm.br"
  },
  "/_build/assets/rive-kSJxF25z.wasm.gz": {
    "type": "application/wasm",
    "encoding": "gzip",
    "etag": "\"7ba24-EL+pxE/2TUNHaz63raEcosbw+Us\"",
    "mtime": "2025-08-11T06:01:54.259Z",
    "size": 506404,
    "path": "../../.output/public/_build/assets/rive-kSJxF25z.wasm.gz"
  },
  "/_build/assets/rotate-ccw-CM5pUlcS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ef0-G6Rbv5ryD/FCiOJvZDsZ2feSaug\"",
    "mtime": "2025-08-11T06:01:51.803Z",
    "size": 3824,
    "path": "../../.output/public/_build/assets/rotate-ccw-CM5pUlcS.js"
  },
  "/_build/assets/rotate-ccw-CM5pUlcS.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"51d-K/FgDCmrvkC9hTSzay3OK1LR5e4\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1309,
    "path": "../../.output/public/_build/assets/rotate-ccw-CM5pUlcS.js.br"
  },
  "/_build/assets/rotate-ccw-CM5pUlcS.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5c5-LRNowVNXbIMdrsGF78iuMEAnZfM\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1477,
    "path": "../../.output/public/_build/assets/rotate-ccw-CM5pUlcS.js.gz"
  },
  "/_build/assets/routing-Ck0R8n-z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1eec-E/mfM6nYY9eqIrmKR6zHPr1+hVI\"",
    "mtime": "2025-08-11T06:01:51.803Z",
    "size": 7916,
    "path": "../../.output/public/_build/assets/routing-Ck0R8n-z.js"
  },
  "/_build/assets/routing-Ck0R8n-z.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"d1e-xVUhTNSRNSw7UZe4qQuwvzAZG6M\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 3358,
    "path": "../../.output/public/_build/assets/routing-Ck0R8n-z.js.br"
  },
  "/_build/assets/routing-Ck0R8n-z.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"e61-YeqjJYGnO+1kBSzz3KnqTxzfPLE\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 3681,
    "path": "../../.output/public/_build/assets/routing-Ck0R8n-z.js.gz"
  },
  "/_build/assets/s3-config-CODVr46h.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17e1-Aojs838TZXd2BkE0xuxDqpdgeKQ\"",
    "mtime": "2025-08-11T06:01:51.803Z",
    "size": 6113,
    "path": "../../.output/public/_build/assets/s3-config-CODVr46h.js"
  },
  "/_build/assets/s3-config-CODVr46h.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"935-tHXnGHpf8qyq75YdnSlrj0YXnE4\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 2357,
    "path": "../../.output/public/_build/assets/s3-config-CODVr46h.js.br"
  },
  "/_build/assets/s3-config-CODVr46h.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"a8c-iIZIEOuzymyTnnDHGgyovD/HKYc\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 2700,
    "path": "../../.output/public/_build/assets/s3-config-CODVr46h.js.gz"
  },
  "/_build/assets/screenshots-Bg_o8EHO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9bc-M+faG1hx4M5e5yNVu/eodEdHres\"",
    "mtime": "2025-08-11T06:01:51.803Z",
    "size": 2492,
    "path": "../../.output/public/_build/assets/screenshots-Bg_o8EHO.js"
  },
  "/_build/assets/screenshots-Bg_o8EHO.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"3d2-qAdwLTow3CBkG6lyzXjLX4/oqB8\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 978,
    "path": "../../.output/public/_build/assets/screenshots-Bg_o8EHO.js.br"
  },
  "/_build/assets/screenshots-Bg_o8EHO.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"472-wDnETDdHaj0G0+FOgJ9KGbo4Vgw\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1138,
    "path": "../../.output/public/_build/assets/screenshots-Bg_o8EHO.js.gz"
  },
  "/_build/assets/settings-8gAwvq__.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"da8-b1RFyj8Qqh89Q/2n8gFR0ITzEa8\"",
    "mtime": "2025-08-11T06:01:51.803Z",
    "size": 3496,
    "path": "../../.output/public/_build/assets/settings-8gAwvq__.js"
  },
  "/_build/assets/settings-8gAwvq__.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"5be-idhchKkDpxvMbNVBGjOlOAspfd8\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1470,
    "path": "../../.output/public/_build/assets/settings-8gAwvq__.js.br"
  },
  "/_build/assets/settings-8gAwvq__.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"676-TOUyE5LejVf1TKVHV5FKJT26pyo\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1654,
    "path": "../../.output/public/_build/assets/settings-8gAwvq__.js.gz"
  },
  "/_build/assets/settings-wl6B6NMt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"718-ziGF7vt24sAk3IZjJYKEHEDTiFI\"",
    "mtime": "2025-08-11T06:01:51.807Z",
    "size": 1816,
    "path": "../../.output/public/_build/assets/settings-wl6B6NMt.js"
  },
  "/_build/assets/settings-wl6B6NMt.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"290-AWCOlh5au7aueJLfyziJpxpt4Ng\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 656,
    "path": "../../.output/public/_build/assets/settings-wl6B6NMt.js.br"
  },
  "/_build/assets/settings-wl6B6NMt.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"30f-+7AFzo5KUlXvdL74woM5ih/WnBY\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 783,
    "path": "../../.output/public/_build/assets/settings-wl6B6NMt.js.gz"
  },
  "/_build/assets/setup-Dtozm6qy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2bda-3tUQBcDt9rPLg9D1gLArNfD+yUE\"",
    "mtime": "2025-08-11T06:01:51.807Z",
    "size": 11226,
    "path": "../../.output/public/_build/assets/setup-Dtozm6qy.js"
  },
  "/_build/assets/setup-Dtozm6qy.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"e56-qsl20ugwm+PGXo4nWfU4cuTGYkU\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 3670,
    "path": "../../.output/public/_build/assets/setup-Dtozm6qy.js.br"
  },
  "/_build/assets/setup-Dtozm6qy.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1075-8SwT4ha4X4zSaMjbK+7XI9oP48Y\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 4213,
    "path": "../../.output/public/_build/assets/setup-Dtozm6qy.js.gz"
  },
  "/_build/assets/socket-y78uvu7-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"41e-+dmqBdJ3GyRoi+LbTnfBRDA63fI\"",
    "mtime": "2025-08-11T06:01:51.807Z",
    "size": 1054,
    "path": "../../.output/public/_build/assets/socket-y78uvu7-.js"
  },
  "/_build/assets/socket-y78uvu7-.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1ee-DlwMTpLnkT/aHXH1p5MA9pL638I\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 494,
    "path": "../../.output/public/_build/assets/socket-y78uvu7-.js.br"
  },
  "/_build/assets/socket-y78uvu7-.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"23a-iwCshcM+QS0pqku0fW6SEEdpSuc\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 570,
    "path": "../../.output/public/_build/assets/socket-y78uvu7-.js.gz"
  },
  "/_build/assets/store-B-U5MmP7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7df-UOeBbB/+EBoLZcWACh3BajkAmf8\"",
    "mtime": "2025-08-11T06:01:51.807Z",
    "size": 2015,
    "path": "../../.output/public/_build/assets/store-B-U5MmP7.js"
  },
  "/_build/assets/store-B-U5MmP7.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2b2-jVJ3ywijdLyKWFqwKs5lPduR9Ag\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 690,
    "path": "../../.output/public/_build/assets/store-B-U5MmP7.js.br"
  },
  "/_build/assets/store-B-U5MmP7.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"303-TbDSsk8Fu3skY8IUkW/Pvw6EksY\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 771,
    "path": "../../.output/public/_build/assets/store-B-U5MmP7.js.gz"
  },
  "/_build/assets/store-COLfFlJE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"137d-1dlxCR5GMeDa5Z/an/kBq2jQfj8\"",
    "mtime": "2025-08-11T06:01:51.807Z",
    "size": 4989,
    "path": "../../.output/public/_build/assets/store-COLfFlJE.js"
  },
  "/_build/assets/store-COLfFlJE.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"79a-V/feNi+W6OusaJP3pdGHZkqMr6k\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 1946,
    "path": "../../.output/public/_build/assets/store-COLfFlJE.js.br"
  },
  "/_build/assets/store-COLfFlJE.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"82d-BVJW1yJbsXryg2v7KtOcpmx6ezI\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 2093,
    "path": "../../.output/public/_build/assets/store-COLfFlJE.js.gz"
  },
  "/_build/assets/studio-mode-dark-BfmnURAh.png": {
    "type": "image/png",
    "etag": "\"b425-+szsRhdzQM+FD9mmm/TV29SPrDg\"",
    "mtime": "2025-08-11T06:01:51.807Z",
    "size": 46117,
    "path": "../../.output/public/_build/assets/studio-mode-dark-BfmnURAh.png"
  },
  "/_build/assets/studio-mode-light-C-7zFY40.png": {
    "type": "image/png",
    "etag": "\"a38c-lxiRqfn+AXC6G52m6QforR0P9fI\"",
    "mtime": "2025-08-11T06:01:51.807Z",
    "size": 41868,
    "path": "../../.output/public/_build/assets/studio-mode-light-C-7zFY40.png"
  },
  "/_build/assets/style-BSCqJpiQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4a5-Y21ud8uULotZIidFrZrz2fibmmM\"",
    "mtime": "2025-08-11T06:01:51.807Z",
    "size": 1189,
    "path": "../../.output/public/_build/assets/style-BSCqJpiQ.js"
  },
  "/_build/assets/style-BSCqJpiQ.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"257-0mJ9p7kaeE3a+lbKwwstZ4PTYgI\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 599,
    "path": "../../.output/public/_build/assets/style-BSCqJpiQ.js.br"
  },
  "/_build/assets/style-BSCqJpiQ.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"298-ywxiGxPk0II7hifTs/yZgZQv9mc\"",
    "mtime": "2025-08-11T06:01:54.087Z",
    "size": 664,
    "path": "../../.output/public/_build/assets/style-BSCqJpiQ.js.gz"
  },
  "/_build/assets/tauri-NQyqRux-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1961-QdfhCGq8XtuvfbKDgsXpfXCXM/I\"",
    "mtime": "2025-08-11T06:01:51.811Z",
    "size": 6497,
    "path": "../../.output/public/_build/assets/tauri-NQyqRux-.js"
  },
  "/_build/assets/tauri-NQyqRux-.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"700-YLRVz4/PTok+YjbugjqrrFL4OL4\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 1792,
    "path": "../../.output/public/_build/assets/tauri-NQyqRux-.js.br"
  },
  "/_build/assets/tauri-NQyqRux-.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"7d7-wzhlnAbRmW8PI2hu4aEBZERJFlM\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 2007,
    "path": "../../.output/public/_build/assets/tauri-NQyqRux-.js.gz"
  },
  "/_build/assets/tears-and-fireflies-adi-goldstein-CggkdS0h.mp3": {
    "type": "audio/mpeg",
    "etag": "\"135db8-w9GQrDJB8FyJ8AKbz7iU6TWP3K0\"",
    "mtime": "2025-08-11T06:01:51.811Z",
    "size": 1269176,
    "path": "../../.output/public/_build/assets/tears-and-fireflies-adi-goldstein-CggkdS0h.mp3"
  },
  "/_build/assets/titlebar-state-C8fqJAwN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"268-nGfGzUsyfUYkmI5vBbfPcMxflkU\"",
    "mtime": "2025-08-11T06:01:51.811Z",
    "size": 616,
    "path": "../../.output/public/_build/assets/titlebar-state-C8fqJAwN.js"
  },
  "/_build/assets/toast-DnJx6gB8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1074-aQOpRB+BILMLylyX2AP6ohswHvY\"",
    "mtime": "2025-08-11T06:01:51.811Z",
    "size": 4212,
    "path": "../../.output/public/_build/assets/toast-DnJx6gB8.js"
  },
  "/_build/assets/toast-DnJx6gB8.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"67a-2s+DOWEi/fwmbUKsL2OFb/X8i74\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 1658,
    "path": "../../.output/public/_build/assets/toast-DnJx6gB8.js.br"
  },
  "/_build/assets/toast-DnJx6gB8.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"727-TCtORPuCOWKs49zYaxeIzhEFy6g\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 1831,
    "path": "../../.output/public/_build/assets/toast-DnJx6gB8.js.gz"
  },
  "/_build/assets/trash-BJ3RIGFc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"23a-bSOlsQI2/N7mze3xHhr215MqQlE\"",
    "mtime": "2025-08-11T06:01:51.811Z",
    "size": 570,
    "path": "../../.output/public/_build/assets/trash-BJ3RIGFc.js"
  },
  "/_build/assets/types-5W_duOpx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d371-vYwNHUAFMeXZs4A9HQzfGw+cDjk\"",
    "mtime": "2025-08-11T06:01:51.811Z",
    "size": 54129,
    "path": "../../.output/public/_build/assets/types-5W_duOpx.js"
  },
  "/_build/assets/types-5W_duOpx.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2b07-zDKio44R2duPkVxrjvT7L1OJzh4\"",
    "mtime": "2025-08-11T06:01:54.103Z",
    "size": 11015,
    "path": "../../.output/public/_build/assets/types-5W_duOpx.js.br"
  },
  "/_build/assets/types-5W_duOpx.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"303e-mRecZuay/ifddujEI+UElzNbr/c\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 12350,
    "path": "../../.output/public/_build/assets/types-5W_duOpx.js.gz"
  },
  "/_build/assets/ui-DTFQjz5T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d94c-NU/fnhVFr41kCqTWXUkeQ5Y3mxY\"",
    "mtime": "2025-08-11T06:01:51.811Z",
    "size": 55628,
    "path": "../../.output/public/_build/assets/ui-DTFQjz5T.js"
  },
  "/_build/assets/ui-DTFQjz5T.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"3a99-srp7Q+iXnBFBA7hQP4GnQdVJfZw\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 15001,
    "path": "../../.output/public/_build/assets/ui-DTFQjz5T.js.br"
  },
  "/_build/assets/ui-DTFQjz5T.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"40d2-5/kbeeBV6X0k0iB1hk+YmjFDuxE\"",
    "mtime": "2025-08-11T06:01:54.111Z",
    "size": 16594,
    "path": "../../.output/public/_build/assets/ui-DTFQjz5T.js.gz"
  },
  "/_build/assets/update-gIqGR89s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"951-qpiuD6P5nT8wPfihb3tkY1dd9Qw\"",
    "mtime": "2025-08-11T06:01:51.815Z",
    "size": 2385,
    "path": "../../.output/public/_build/assets/update-gIqGR89s.js"
  },
  "/_build/assets/update-gIqGR89s.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"436-qgZwE/CHOBIf6xmLqcpD3VaOISg\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 1078,
    "path": "../../.output/public/_build/assets/update-gIqGR89s.js.br"
  },
  "/_build/assets/update-gIqGR89s.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4cd-4NLv82eXDfUJ5gM9+w4pStbLPSo\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 1229,
    "path": "../../.output/public/_build/assets/update-gIqGR89s.js.gz"
  },
  "/_build/assets/upgrade-DpouKg0o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e7c-xh6MbjyUSxvhmv6MrY/dr8WHd7Q\"",
    "mtime": "2025-08-11T06:01:51.815Z",
    "size": 11900,
    "path": "../../.output/public/_build/assets/upgrade-DpouKg0o.js"
  },
  "/_build/assets/upgrade-DpouKg0o.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"eb9-BEqKXFoX3AztUyrh1kB7EXB/Qsw\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 3769,
    "path": "../../.output/public/_build/assets/upgrade-DpouKg0o.js.br"
  },
  "/_build/assets/upgrade-DpouKg0o.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"10ab-FO5giYubpNOIw5kIXMiBYn8lP8U\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 4267,
    "path": "../../.output/public/_build/assets/upgrade-DpouKg0o.js.gz"
  },
  "/_build/assets/volume2-BEyDuANV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ec-/UZGGSejKNpK7PfeOspZtn2pXOo\"",
    "mtime": "2025-08-11T06:01:51.815Z",
    "size": 492,
    "path": "../../.output/public/_build/assets/volume2-BEyDuANV.js"
  },
  "/_build/assets/web-BCfGxYEI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6b2f-yx8s0WV2EiKcjAVQuGPj+E0Aj9E\"",
    "mtime": "2025-08-11T06:01:51.815Z",
    "size": 27439,
    "path": "../../.output/public/_build/assets/web-BCfGxYEI.js"
  },
  "/_build/assets/web-BCfGxYEI.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"25ff-jz9vtobYA/NYgD2CNx3IdRXMwMA\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 9727,
    "path": "../../.output/public/_build/assets/web-BCfGxYEI.js.br"
  },
  "/_build/assets/web-BCfGxYEI.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"29c4-tBjVp9KV4rR99i4oVDBpovthdck\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 10692,
    "path": "../../.output/public/_build/assets/web-BCfGxYEI.js.gz"
  },
  "/_build/assets/web-api-kcgHhqoo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"289a-huNGuxQ+8KLLdtEj2gqPRVwZmNA\"",
    "mtime": "2025-08-11T06:01:51.815Z",
    "size": 10394,
    "path": "../../.output/public/_build/assets/web-api-kcgHhqoo.js"
  },
  "/_build/assets/web-api-kcgHhqoo.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"df7-IRCr9GH8tTLo3Bmeo4J6uFxN8eo\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 3575,
    "path": "../../.output/public/_build/assets/web-api-kcgHhqoo.js.br"
  },
  "/_build/assets/web-api-kcgHhqoo.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"f87-moKXUv17hW445Fa6Do3aPvIhEMA\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 3975,
    "path": "../../.output/public/_build/assets/web-api-kcgHhqoo.js.gz"
  },
  "/_build/assets/webviewWindow-0yBfL-fV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"122b-NUSRwvkLEXsc2E6uqQs80FtQwEs\"",
    "mtime": "2025-08-11T06:01:51.819Z",
    "size": 4651,
    "path": "../../.output/public/_build/assets/webviewWindow-0yBfL-fV.js"
  },
  "/_build/assets/webviewWindow-0yBfL-fV.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4db-WUN+yHytDntZ9+DtnXgcMHxHHKw\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 1243,
    "path": "../../.output/public/_build/assets/webviewWindow-0yBfL-fV.js.br"
  },
  "/_build/assets/webviewWindow-0yBfL-fV.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"56f-hU0vR5io29H1ckFxslDuI5q2MfQ\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 1391,
    "path": "../../.output/public/_build/assets/webviewWindow-0yBfL-fV.js.gz"
  },
  "/_build/assets/window-CGzFyLXp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"322c-Uarw9lNJhu9L7YkCyAmXMy8VbpI\"",
    "mtime": "2025-08-11T06:01:51.819Z",
    "size": 12844,
    "path": "../../.output/public/_build/assets/window-CGzFyLXp.js"
  },
  "/_build/assets/window-CGzFyLXp.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"aff-KHN9qpVwc/HWIGKZBDTpapTSR38\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 2815,
    "path": "../../.output/public/_build/assets/window-CGzFyLXp.js.br"
  },
  "/_build/assets/window-CGzFyLXp.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"c6b-4jUv9ke/jgtI1NFvbwQhosDW4JA\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 3179,
    "path": "../../.output/public/_build/assets/window-CGzFyLXp.js.gz"
  },
  "/_build/assets/window-capture-occluder-CcnULbsg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"49c-UGSDTPFvVE8nYnje8lAGaCNyXHA\"",
    "mtime": "2025-08-11T06:01:51.819Z",
    "size": 1180,
    "path": "../../.output/public/_build/assets/window-capture-occluder-CcnULbsg.js"
  },
  "/_build/assets/window-capture-occluder-CcnULbsg.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"21d-MXJt5fA//CKNtbrjvpLMK4gVUAw\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 541,
    "path": "../../.output/public/_build/assets/window-capture-occluder-CcnULbsg.js.br"
  },
  "/_build/assets/window-capture-occluder-CcnULbsg.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"266-Y/+eMQHd3C8ouNf+V/8Vo/nL9M8\"",
    "mtime": "2025-08-11T06:01:54.095Z",
    "size": 614,
    "path": "../../.output/public/_build/assets/window-capture-occluder-CcnULbsg.js.gz"
  },
  "/_server/assets/app-DBjmAwL5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d4a8-9NOIfYqZWzYFWap0Cco4d1iyiTY\"",
    "mtime": "2025-08-11T06:01:51.839Z",
    "size": 119976,
    "path": "../../.output/public/_server/assets/app-DBjmAwL5.css"
  },
  "/_server/assets/app-DBjmAwL5.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"3fae-BrY+qLudb465o9cmGSyqaQO83Eo\"",
    "mtime": "2025-08-11T06:01:54.159Z",
    "size": 16302,
    "path": "../../.output/public/_server/assets/app-DBjmAwL5.css.br"
  },
  "/_server/assets/app-DBjmAwL5.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4e41-w1piPnrPlUeNcpCHvXvw6bi10q8\"",
    "mtime": "2025-08-11T06:01:54.111Z",
    "size": 20033,
    "path": "../../.output/public/_server/assets/app-DBjmAwL5.css.gz"
  },
  "/_server/assets/app-DVfxCScO.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4fb2-nGT/KHshTTM9bbfaWlMr69rw4yo\"",
    "mtime": "2025-08-11T06:01:54.111Z",
    "size": 20402,
    "path": "../../.output/public/_server/assets/app-DVfxCScO.js.br"
  },
  "/_server/assets/app-DVfxCScO.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5936-ARnx2G8dPeEbx3VxsLpJJxwDLxc\"",
    "mtime": "2025-08-11T06:01:54.111Z",
    "size": 22838,
    "path": "../../.output/public/_server/assets/app-DVfxCScO.js.gz"
  },
  "/_server/assets/geist-sans-latin-400-normal-BOaIZNA2.woff": {
    "type": "font/woff",
    "etag": "\"9800-gmlNOsSjSWPuV/UJv7wPJT6Ti18\"",
    "mtime": "2025-08-11T06:01:51.839Z",
    "size": 38912,
    "path": "../../.output/public/_server/assets/geist-sans-latin-400-normal-BOaIZNA2.woff"
  },
  "/_server/assets/geist-sans-latin-400-normal-gapTbOY8.woff2": {
    "type": "font/woff2",
    "etag": "\"8278-BL/1we+Fux5TMPkgvmAhfnvw2wk\"",
    "mtime": "2025-08-11T06:01:51.839Z",
    "size": 33400,
    "path": "../../.output/public/_server/assets/geist-sans-latin-400-normal-gapTbOY8.woff2"
  },
  "/_server/assets/geist-sans-latin-500-normal-CN2lyvyL.woff": {
    "type": "font/woff",
    "etag": "\"9e48-0WmgNqWFs2DeWCjBzsPeQ6jWsT8\"",
    "mtime": "2025-08-11T06:01:51.839Z",
    "size": 40520,
    "path": "../../.output/public/_server/assets/geist-sans-latin-500-normal-CN2lyvyL.woff"
  },
  "/_server/assets/geist-sans-latin-500-normal-uokXdC-Q.woff2": {
    "type": "font/woff2",
    "etag": "\"879c-cSw8pF/IROicVxgAkf/OnNOvpdE\"",
    "mtime": "2025-08-11T06:01:51.839Z",
    "size": 34716,
    "path": "../../.output/public/_server/assets/geist-sans-latin-500-normal-uokXdC-Q.woff2"
  },
  "/_server/assets/geist-sans-latin-700-normal-BmN9tIp5.woff2": {
    "type": "font/woff2",
    "etag": "\"8a9c-xwymHMxeZX6DV0bbAhDQA7823iY\"",
    "mtime": "2025-08-11T06:01:51.839Z",
    "size": 35484,
    "path": "../../.output/public/_server/assets/geist-sans-latin-700-normal-BmN9tIp5.woff2"
  },
  "/_server/assets/geist-sans-latin-700-normal-CjScfYeH.woff": {
    "type": "font/woff",
    "etag": "\"a1b4-5eOdQkM1kv/gW2ElAZFrudYUZQE\"",
    "mtime": "2025-08-11T06:01:51.839Z",
    "size": 41396,
    "path": "../../.output/public/_server/assets/geist-sans-latin-700-normal-CjScfYeH.woff"
  },
  "/_server/assets/server-fns-iQ7H7jH9.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"3bad-GS9bQ1jNdTaylq/w3BUGCV5BIsI\"",
    "mtime": "2025-08-11T06:01:54.103Z",
    "size": 15277,
    "path": "../../.output/public/_server/assets/server-fns-iQ7H7jH9.js.br"
  },
  "/_server/assets/server-fns-iQ7H7jH9.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4372-kv95OLwVnk1B4E67GyxhE9SCUn0\"",
    "mtime": "2025-08-11T06:01:54.111Z",
    "size": 17266,
    "path": "../../.output/public/_server/assets/server-fns-iQ7H7jH9.js.gz"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _tDg6es = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
var Tt = ((e) => (e[e.AggregateError = 1] = "AggregateError", e[e.ArrowFunction = 2] = "ArrowFunction", e[e.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", e[e.ObjectAssign = 8] = "ObjectAssign", e[e.BigIntTypedArray = 16] = "BigIntTypedArray", e))(Tt || {});
function Ft(e) {
  switch (e) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return;
  }
}
function m$1(e) {
  let t = "", r = 0, a;
  for (let n = 0, i = e.length; n < i; n++) a = Ft(e[n]), a && (t += e.slice(r, n) + a, r = n + 1);
  return r === 0 ? t = e : t += e.slice(r), t;
}
function Ct(e) {
  switch (e) {
    case "\\\\":
      return "\\";
    case '\\"':
      return '"';
    case "\\n":
      return `
`;
    case "\\r":
      return "\r";
    case "\\b":
      return "\b";
    case "\\t":
      return "	";
    case "\\f":
      return "\f";
    case "\\x3C":
      return "<";
    case "\\u2028":
      return "\u2028";
    case "\\u2029":
      return "\u2029";
    default:
      return e;
  }
}
function v$1(e) {
  return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, Ct);
}
var A$1 = "__SEROVAL_REFS__", _$1 = "$R", N$1 = `self.${_$1}`;
function $t(e) {
  return e == null ? `${N$1}=${N$1}||[]` : `(${N$1}=${N$1}||{})["${m$1(e)}"]=[]`;
}
function b$1(e, t) {
  if (!e) throw t;
}
var Ve$1 = /* @__PURE__ */ new Map(), R$1 = /* @__PURE__ */ new Map();
function De$1(e) {
  return Ve$1.has(e);
}
function Ot(e) {
  return R$1.has(e);
}
function jt(e) {
  return b$1(De$1(e), new yr(e)), Ve$1.get(e);
}
function Nt(e) {
  return b$1(Ot(e), new wr(e)), R$1.get(e);
}
typeof globalThis < "u" ? Object.defineProperty(globalThis, A$1, { value: R$1, configurable: true, writable: false, enumerable: false }) : typeof self < "u" ? Object.defineProperty(self, A$1, { value: R$1, configurable: true, writable: false, enumerable: false }) : typeof global < "u" && Object.defineProperty(global, A$1, { value: R$1, configurable: true, writable: false, enumerable: false });
function _e$1(e, t) {
  for (let r = 0, a = t.length; r < a; r++) {
    let n = t[r];
    e.has(n) || (e.add(n), n.extends && _e$1(e, n.extends));
  }
}
function Me$1(e) {
  if (e) {
    let t = /* @__PURE__ */ new Set();
    return _e$1(t, e), [...t];
  }
}
var Vt = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" }, Le$1 = { [Symbol.asyncIterator]: 0, [Symbol.hasInstance]: 1, [Symbol.isConcatSpreadable]: 2, [Symbol.iterator]: 3, [Symbol.match]: 4, [Symbol.matchAll]: 5, [Symbol.replace]: 6, [Symbol.search]: 7, [Symbol.species]: 8, [Symbol.split]: 9, [Symbol.toPrimitive]: 10, [Symbol.toStringTag]: 11, [Symbol.unscopables]: 12 }, Dt = { 0: Symbol.asyncIterator, 1: Symbol.hasInstance, 2: Symbol.isConcatSpreadable, 3: Symbol.iterator, 4: Symbol.match, 5: Symbol.matchAll, 6: Symbol.replace, 7: Symbol.search, 8: Symbol.species, 9: Symbol.split, 10: Symbol.toPrimitive, 11: Symbol.toStringTag, 12: Symbol.unscopables }, _t = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" }, Mt = { 2: true, 3: false, 1: void 0, 0: null, 4: -0, 5: Number.POSITIVE_INFINITY, 6: Number.NEGATIVE_INFINITY, 7: Number.NaN }, He$1 = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" }, Lt = { 0: Error, 1: EvalError, 2: RangeError, 3: ReferenceError, 4: SyntaxError, 5: TypeError, 6: URIError }, s = void 0;
function p(e, t, r, a, n, i, o, l, u, c, d, S) {
  return { t: e, i: t, s: r, l: a, c: n, m: i, p: o, e: l, a: u, f: c, b: d, o: S };
}
function z(e) {
  return p(2, s, e, s, s, s, s, s, s, s, s, s);
}
var J = z(2), Z = z(3), Ht = z(1), Ut = z(0), qt = z(4), Wt = z(5), Bt = z(6), Kt = z(7);
function ue$1(e) {
  return e instanceof EvalError ? 1 : e instanceof RangeError ? 2 : e instanceof ReferenceError ? 3 : e instanceof SyntaxError ? 4 : e instanceof TypeError ? 5 : e instanceof URIError ? 6 : 0;
}
function Xt(e) {
  let t = He$1[ue$1(e)];
  return e.name !== t ? { name: e.name } : e.constructor.name !== t ? { name: e.constructor.name } : {};
}
function ge$1(e, t) {
  let r = Xt(e), a = Object.getOwnPropertyNames(e);
  for (let n = 0, i = a.length, o; n < i; n++) o = a[n], o !== "name" && o !== "message" && (o === "stack" ? t & 4 && (r = r || {}, r[o] = e[o]) : (r = r || {}, r[o] = e[o]));
  return r;
}
function Ue$1(e) {
  return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : Object.isExtensible(e) ? 0 : 1;
}
function Yt(e) {
  switch (e) {
    case Number.POSITIVE_INFINITY:
      return Wt;
    case Number.NEGATIVE_INFINITY:
      return Bt;
  }
  return e !== e ? Kt : Object.is(e, -0) ? qt : p(0, s, e, s, s, s, s, s, s, s, s, s);
}
function Q(e) {
  return p(1, s, m$1(e), s, s, s, s, s, s, s, s, s);
}
function Gt(e) {
  return p(3, s, "" + e, s, s, s, s, s, s, s, s, s);
}
function Jt(e) {
  return p(4, e, s, s, s, s, s, s, s, s, s, s);
}
function Zt(e, t) {
  let r = t.valueOf();
  return p(5, e, r !== r ? "" : t.toISOString(), s, s, s, s, s, s, s, s, s);
}
function Qt(e, t) {
  return p(6, e, s, s, m$1(t.source), t.flags, s, s, s, s, s, s);
}
function er(e, t) {
  let r = new Uint8Array(t), a = r.length, n = new Array(a);
  for (let i = 0; i < a; i++) n[i] = r[i];
  return p(19, e, n, s, s, s, s, s, s, s, s, s);
}
function tr(e, t) {
  return p(17, e, Le$1[t], s, s, s, s, s, s, s, s, s);
}
function rr(e, t) {
  return p(18, e, m$1(jt(t)), s, s, s, s, s, s, s, s, s);
}
function qe$1(e, t, r) {
  return p(25, e, r, s, m$1(t), s, s, s, s, s, s, s);
}
function sr(e, t, r) {
  return p(9, e, s, t.length, s, s, s, s, r, s, s, Ue$1(t));
}
function ar(e, t) {
  return p(21, e, s, s, s, s, s, s, s, t, s, s);
}
function nr(e, t, r) {
  return p(15, e, s, t.length, t.constructor.name, s, s, s, s, r, t.byteOffset, s);
}
function ir(e, t, r) {
  return p(16, e, s, t.length, t.constructor.name, s, s, s, s, r, t.byteOffset, s);
}
function or(e, t, r) {
  return p(20, e, s, t.byteLength, s, s, s, s, s, r, t.byteOffset, s);
}
function lr(e, t, r) {
  return p(13, e, ue$1(t), s, s, m$1(t.message), r, s, s, s, s, s);
}
function ur(e, t, r) {
  return p(14, e, ue$1(t), s, s, m$1(t.message), r, s, s, s, s, s);
}
function cr(e, t, r) {
  return p(7, e, s, t, s, s, s, s, r, s, s, s);
}
function We$1(e, t) {
  return p(28, s, s, s, s, s, s, s, [e, t], s, s, s);
}
function Be$1(e, t) {
  return p(30, s, s, s, s, s, s, s, [e, t], s, s, s);
}
function Ke$1(e, t, r) {
  return p(31, e, s, s, s, s, s, s, r, t, s, s);
}
function hr(e, t) {
  return p(32, e, s, s, s, s, s, s, s, t, s, s);
}
function pr(e, t) {
  return p(33, e, s, s, s, s, s, s, s, t, s, s);
}
function dr(e, t) {
  return p(34, e, s, s, s, s, s, s, s, t, s, s);
}
var { toString: ce$1 } = Object.prototype;
function fr(e, t) {
  return t instanceof Error ? `Seroval caught an error during the ${e} process.

${t.name}
${t.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new` : `Seroval caught an error during the ${e} process.

"${ce$1.call(t)}"

For more information, please check the "cause" property of this error.`;
}
var he$1 = class he extends Error {
  constructor(t, r) {
    super(fr(t, r)), this.cause = r;
  }
}, me$1 = class me extends he$1 {
  constructor(e) {
    super("parsing", e);
  }
}, gr = class extends he$1 {
  constructor(e) {
    super("serialization", e);
  }
}, mr = class extends he$1 {
  constructor(e) {
    super("deserialization", e);
  }
}, M = class extends Error {
  constructor(t) {
    super(`The value ${ce$1.call(t)} of type "${typeof t}" cannot be parsed/serialized.

There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`), this.value = t;
  }
}, Xe$1 = class Xe extends Error {
  constructor(t) {
    super('Unsupported node type "' + t.t + '".');
  }
}, Ye$1 = class Ye extends Error {
  constructor(t) {
    super('Missing plugin for tag "' + t + '".');
  }
}, P = class extends Error {
  constructor(t) {
    super('Missing "' + t + '" instance.');
  }
}, yr = class extends Error {
  constructor(t) {
    super('Missing reference for the value "' + ce$1.call(t) + '" of type "' + typeof t + '"'), this.value = t;
  }
}, wr = class extends Error {
  constructor(e) {
    super('Missing reference for id "' + m$1(e) + '"');
  }
}, br = class extends Error {
  constructor(e) {
    super('Unknown TypedArray "' + e + '"');
  }
}, zr = class {
  constructor(e, t) {
    this.value = e, this.replacement = t;
  }
};
function E(e, t, r) {
  return e & 2 ? (t.length === 1 ? t[0] : "(" + t.join(",") + ")") + "=>" + (r.startsWith("{") ? "(" + r + ")" : r) : "function(" + t.join(",") + "){return " + r + "}";
}
function y(e, t, r) {
  return e & 2 ? (t.length === 1 ? t[0] : "(" + t.join(",") + ")") + "=>{" + r + "}" : "function(" + t.join(",") + "){" + r + "}";
}
var vr = {}, Sr = {}, Rr = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };
function xr(e) {
  return E(e, ["r"], "(r.p=new Promise(" + y(e, ["s", "f"], "r.s=s,r.f=f") + "))");
}
function Pr(e) {
  return y(e, ["r", "d"], "r.s(d),r.p.s=1,r.p.v=d");
}
function Ar(e) {
  return y(e, ["r", "d"], "r.f(d),r.p.s=2,r.p.v=d");
}
function Ir(e) {
  return E(e, ["b", "a", "s", "l", "p", "f", "e", "n"], "(b=[],a=!0,s=!1,l=[],p=0,f=" + y(e, ["v", "m", "x"], "for(x=0;x<p;x++)l[x]&&l[x][m](v)") + ",n=" + y(e, ["o", "x", "z", "c"], 'for(x=0,z=b.length;x<z;x++)(c=b[x],(!a&&x===z-1)?o[s?"return":"throw"](c):o.next(c))') + ",e=" + E(e, ["o", "t"], "(a&&(l[t=p++]=o),n(o)," + y(e, [], "a&&(l[t]=void 0)") + ")") + ",{__SEROVAL_STREAM__:!0,on:" + E(e, ["o"], "e(o)") + ",next:" + y(e, ["v"], 'a&&(b.push(v),f(v,"next"))') + ",throw:" + y(e, ["v"], 'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)') + ",return:" + y(e, ["v"], 'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)') + "})");
}
function Er(e, t) {
  switch (t) {
    case 0:
      return "[]";
    case 1:
      return xr(e);
    case 2:
      return Pr(e);
    case 3:
      return Ar(e);
    case 4:
      return Ir(e);
    default:
      return "";
  }
}
function ee() {
  let e, t;
  return { promise: new Promise((r, a) => {
    e = r, t = a;
  }), resolve(r) {
    e(r);
  }, reject(r) {
    t(r);
  } };
}
function kr(e) {
  return "__SEROVAL_STREAM__" in e;
}
function $$1() {
  let e = /* @__PURE__ */ new Set(), t = [], r = true, a = true;
  function n(l) {
    for (let u of e.keys()) u.next(l);
  }
  function i(l) {
    for (let u of e.keys()) u.throw(l);
  }
  function o(l) {
    for (let u of e.keys()) u.return(l);
  }
  return { __SEROVAL_STREAM__: true, on(l) {
    r && e.add(l);
    for (let u = 0, c = t.length; u < c; u++) {
      let d = t[u];
      u === c - 1 && !r ? a ? l.return(d) : l.throw(d) : l.next(d);
    }
    return () => {
      r && e.delete(l);
    };
  }, next(l) {
    r && (t.push(l), n(l));
  }, throw(l) {
    r && (t.push(l), i(l), r = false, a = false, e.clear());
  }, return(l) {
    r && (t.push(l), o(l), r = false, a = true, e.clear());
  } };
}
function Tr(e) {
  let t = $$1(), r = e[Symbol.asyncIterator]();
  async function a() {
    try {
      let n = await r.next();
      n.done ? t.return(n.value) : (t.next(n.value), await a());
    } catch (n) {
      t.throw(n);
    }
  }
  return a().catch(() => {
  }), t;
}
function Fr(e) {
  return () => {
    let t = [], r = [], a = 0, n = -1, i = false;
    function o() {
      for (let u = 0, c = r.length; u < c; u++) r[u].resolve({ done: true, value: void 0 });
    }
    e.on({ next(u) {
      let c = r.shift();
      c && c.resolve({ done: false, value: u }), t.push(u);
    }, throw(u) {
      let c = r.shift();
      c && c.reject(u), o(), n = t.length, t.push(u), i = true;
    }, return(u) {
      let c = r.shift();
      c && c.resolve({ done: true, value: u }), o(), n = t.length, t.push(u);
    } });
    function l() {
      let u = a++, c = t[u];
      if (u !== n) return { done: false, value: c };
      if (i) throw c;
      return { done: true, value: c };
    }
    return { [Symbol.asyncIterator]() {
      return this;
    }, async next() {
      if (n === -1) {
        let u = a++;
        if (u >= t.length) {
          let c = ee();
          return r.push(c), await c.promise;
        }
        return { done: false, value: t[u] };
      }
      return a > n ? { done: true, value: void 0 } : l();
    } };
  };
}
function Ge$1(e) {
  let t = [], r = -1, a = -1, n = e[Symbol.iterator]();
  for (; ; ) try {
    let i = n.next();
    if (t.push(i.value), i.done) {
      a = t.length - 1;
      break;
    }
  } catch (i) {
    r = t.length, t.push(i);
  }
  return { v: t, t: r, d: a };
}
function Cr(e) {
  return () => {
    let t = 0;
    return { [Symbol.iterator]() {
      return this;
    }, next() {
      if (t > e.d) return { done: true, value: s };
      let r = t++, a = e.v[r];
      if (r === e.t) throw a;
      return { done: r === e.d, value: a };
    } };
  };
}
var $r = class {
  constructor(t) {
    this.marked = /* @__PURE__ */ new Set(), this.plugins = t.plugins, this.features = 31 ^ (t.disabledFeatures || 0), this.refs = t.refs || /* @__PURE__ */ new Map();
  }
  markRef(t) {
    this.marked.add(t);
  }
  isMarked(t) {
    return this.marked.has(t);
  }
  createIndex(t) {
    let r = this.refs.size;
    return this.refs.set(t, r), r;
  }
  getIndexedValue(t) {
    let r = this.refs.get(t);
    return r != null ? (this.markRef(r), { type: 1, value: Jt(r) }) : { type: 0, value: this.createIndex(t) };
  }
  getReference(t) {
    let r = this.getIndexedValue(t);
    return r.type === 1 ? r : De$1(t) ? { type: 2, value: rr(r.value, t) } : r;
  }
  parseWellKnownSymbol(t) {
    let r = this.getReference(t);
    return r.type !== 0 ? r.value : (b$1(t in Le$1, new M(t)), tr(r.value, t));
  }
  parseSpecialReference(t) {
    let r = this.getIndexedValue(Rr[t]);
    return r.type === 1 ? r.value : p(26, r.value, t, s, s, s, s, s, s, s, s, s);
  }
  parseIteratorFactory() {
    let t = this.getIndexedValue(vr);
    return t.type === 1 ? t.value : p(27, t.value, s, s, s, s, s, s, s, this.parseWellKnownSymbol(Symbol.iterator), s, s);
  }
  parseAsyncIteratorFactory() {
    let t = this.getIndexedValue(Sr);
    return t.type === 1 ? t.value : p(29, t.value, s, s, s, s, s, s, [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)], s, s, s);
  }
  createObjectNode(t, r, a, n) {
    return p(a ? 11 : 10, t, s, s, s, s, n, s, s, s, s, Ue$1(r));
  }
  createMapNode(t, r, a, n) {
    return p(8, t, s, s, s, s, s, { k: r, v: a, s: n }, s, this.parseSpecialReference(0), s, s);
  }
  createPromiseConstructorNode(t, r) {
    return p(22, t, r, s, s, s, s, s, s, this.parseSpecialReference(1), s, s);
  }
};
function Or(e) {
  switch (e) {
    case "Int8Array":
      return Int8Array;
    case "Int16Array":
      return Int16Array;
    case "Int32Array":
      return Int32Array;
    case "Uint8Array":
      return Uint8Array;
    case "Uint16Array":
      return Uint16Array;
    case "Uint32Array":
      return Uint32Array;
    case "Uint8ClampedArray":
      return Uint8ClampedArray;
    case "Float32Array":
      return Float32Array;
    case "Float64Array":
      return Float64Array;
    case "BigInt64Array":
      return BigInt64Array;
    case "BigUint64Array":
      return BigUint64Array;
    default:
      throw new br(e);
  }
}
function ye$1(e, t) {
  switch (t) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var jr = class {
  constructor(e) {
    this.plugins = e.plugins, this.refs = e.refs || /* @__PURE__ */ new Map();
  }
  deserializeReference(e) {
    return this.assignIndexedValue(e.i, Nt(v$1(e.s)));
  }
  deserializeArray(e) {
    let t = e.l, r = this.assignIndexedValue(e.i, new Array(t)), a;
    for (let n = 0; n < t; n++) a = e.a[n], a && (r[n] = this.deserialize(a));
    return ye$1(r, e.o), r;
  }
  deserializeProperties(e, t) {
    let r = e.s;
    if (r) {
      let a = e.k, n = e.v;
      for (let i = 0, o; i < r; i++) o = a[i], typeof o == "string" ? t[v$1(o)] = this.deserialize(n[i]) : t[this.deserialize(o)] = this.deserialize(n[i]);
    }
    return t;
  }
  deserializeObject(e) {
    let t = this.assignIndexedValue(e.i, e.t === 10 ? {} : /* @__PURE__ */ Object.create(null));
    return this.deserializeProperties(e.p, t), ye$1(t, e.o), t;
  }
  deserializeDate(e) {
    return this.assignIndexedValue(e.i, new Date(e.s));
  }
  deserializeRegExp(e) {
    return this.assignIndexedValue(e.i, new RegExp(v$1(e.c), e.m));
  }
  deserializeSet(e) {
    let t = this.assignIndexedValue(e.i, /* @__PURE__ */ new Set()), r = e.a;
    for (let a = 0, n = e.l; a < n; a++) t.add(this.deserialize(r[a]));
    return t;
  }
  deserializeMap(e) {
    let t = this.assignIndexedValue(e.i, /* @__PURE__ */ new Map()), r = e.e.k, a = e.e.v;
    for (let n = 0, i = e.e.s; n < i; n++) t.set(this.deserialize(r[n]), this.deserialize(a[n]));
    return t;
  }
  deserializeArrayBuffer(e) {
    let t = new Uint8Array(e.s);
    return this.assignIndexedValue(e.i, t.buffer);
  }
  deserializeTypedArray(e) {
    let t = Or(e.c), r = this.deserialize(e.f);
    return this.assignIndexedValue(e.i, new t(r, e.b, e.l));
  }
  deserializeDataView(e) {
    let t = this.deserialize(e.f);
    return this.assignIndexedValue(e.i, new DataView(t, e.b, e.l));
  }
  deserializeDictionary(e, t) {
    if (e.p) {
      let r = this.deserializeProperties(e.p, {});
      Object.assign(t, r);
    }
    return t;
  }
  deserializeAggregateError(e) {
    let t = this.assignIndexedValue(e.i, new AggregateError([], v$1(e.m)));
    return this.deserializeDictionary(e, t);
  }
  deserializeError(e) {
    let t = Lt[e.s], r = this.assignIndexedValue(e.i, new t(v$1(e.m)));
    return this.deserializeDictionary(e, r);
  }
  deserializePromise(e) {
    let t = ee(), r = this.assignIndexedValue(e.i, t), a = this.deserialize(e.f);
    return e.s ? t.resolve(a) : t.reject(a), r.promise;
  }
  deserializeBoxed(e) {
    return this.assignIndexedValue(e.i, Object(this.deserialize(e.f)));
  }
  deserializePlugin(e) {
    let t = this.plugins;
    if (t) {
      let r = v$1(e.c);
      for (let a = 0, n = t.length; a < n; a++) {
        let i = t[a];
        if (i.tag === r) return this.assignIndexedValue(e.i, i.deserialize(e.s, this, { id: e.i }));
      }
    }
    throw new Ye$1(e.c);
  }
  deserializePromiseConstructor(e) {
    return this.assignIndexedValue(e.i, ee()).promise;
  }
  deserializePromiseResolve(e) {
    let t = this.refs.get(e.i);
    b$1(t, new P("Promise")), t.resolve(this.deserialize(e.a[1]));
  }
  deserializePromiseReject(e) {
    let t = this.refs.get(e.i);
    b$1(t, new P("Promise")), t.reject(this.deserialize(e.a[1]));
  }
  deserializeIteratorFactoryInstance(e) {
    this.deserialize(e.a[0]);
    let t = this.deserialize(e.a[1]);
    return Cr(t);
  }
  deserializeAsyncIteratorFactoryInstance(e) {
    this.deserialize(e.a[0]);
    let t = this.deserialize(e.a[1]);
    return Fr(t);
  }
  deserializeStreamConstructor(e) {
    let t = this.assignIndexedValue(e.i, $$1()), r = e.a.length;
    if (r) for (let a = 0; a < r; a++) this.deserialize(e.a[a]);
    return t;
  }
  deserializeStreamNext(e) {
    let t = this.refs.get(e.i);
    b$1(t, new P("Stream")), t.next(this.deserialize(e.f));
  }
  deserializeStreamThrow(e) {
    let t = this.refs.get(e.i);
    b$1(t, new P("Stream")), t.throw(this.deserialize(e.f));
  }
  deserializeStreamReturn(e) {
    let t = this.refs.get(e.i);
    b$1(t, new P("Stream")), t.return(this.deserialize(e.f));
  }
  deserializeIteratorFactory(e) {
    this.deserialize(e.f);
  }
  deserializeAsyncIteratorFactory(e) {
    this.deserialize(e.a[1]);
  }
  deserialize(e) {
    try {
      switch (e.t) {
        case 2:
          return Mt[e.s];
        case 0:
          return e.s;
        case 1:
          return v$1(e.s);
        case 3:
          return BigInt(e.s);
        case 4:
          return this.refs.get(e.i);
        case 18:
          return this.deserializeReference(e);
        case 9:
          return this.deserializeArray(e);
        case 10:
        case 11:
          return this.deserializeObject(e);
        case 5:
          return this.deserializeDate(e);
        case 6:
          return this.deserializeRegExp(e);
        case 7:
          return this.deserializeSet(e);
        case 8:
          return this.deserializeMap(e);
        case 19:
          return this.deserializeArrayBuffer(e);
        case 16:
        case 15:
          return this.deserializeTypedArray(e);
        case 20:
          return this.deserializeDataView(e);
        case 14:
          return this.deserializeAggregateError(e);
        case 13:
          return this.deserializeError(e);
        case 12:
          return this.deserializePromise(e);
        case 17:
          return Dt[e.s];
        case 21:
          return this.deserializeBoxed(e);
        case 25:
          return this.deserializePlugin(e);
        case 22:
          return this.deserializePromiseConstructor(e);
        case 23:
          return this.deserializePromiseResolve(e);
        case 24:
          return this.deserializePromiseReject(e);
        case 28:
          return this.deserializeIteratorFactoryInstance(e);
        case 30:
          return this.deserializeAsyncIteratorFactoryInstance(e);
        case 31:
          return this.deserializeStreamConstructor(e);
        case 32:
          return this.deserializeStreamNext(e);
        case 33:
          return this.deserializeStreamThrow(e);
        case 34:
          return this.deserializeStreamReturn(e);
        case 27:
          return this.deserializeIteratorFactory(e);
        case 29:
          return this.deserializeAsyncIteratorFactory(e);
        default:
          throw new Xe$1(e);
      }
    } catch (t) {
      throw new mr(t);
    }
  }
}, Nr = /^[$A-Z_][0-9A-Z_$]*$/i;
function we$1(e) {
  let t = e[0];
  return (t === "$" || t === "_" || t >= "A" && t <= "Z" || t >= "a" && t <= "z") && Nr.test(e);
}
function I$1(e) {
  switch (e.t) {
    case 0:
      return e.s + "=" + e.v;
    case 2:
      return e.s + ".set(" + e.k + "," + e.v + ")";
    case 1:
      return e.s + ".add(" + e.v + ")";
    case 3:
      return e.s + ".delete(" + e.k + ")";
  }
}
function Vr(e) {
  let t = [], r = e[0];
  for (let a = 1, n = e.length, i, o = r; a < n; a++) i = e[a], i.t === 0 && i.v === o.v ? r = { t: 0, s: i.s, k: s, v: I$1(r) } : i.t === 2 && i.s === o.s ? r = { t: 2, s: I$1(r), k: i.k, v: i.v } : i.t === 1 && i.s === o.s ? r = { t: 1, s: I$1(r), k: s, v: i.v } : i.t === 3 && i.s === o.s ? r = { t: 3, s: I$1(r), k: i.k, v: s } : (t.push(r), r = i), o = i;
  return t.push(r), t;
}
function be$1(e) {
  if (e.length) {
    let t = "", r = Vr(e);
    for (let a = 0, n = r.length; a < n; a++) t += I$1(r[a]) + ",";
    return t;
  }
  return s;
}
var Dr = "Object.create(null)", _r = "new Set", Mr = "new Map", Lr = "Promise.resolve", Hr = "Promise.reject", Ur = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: s }, qr = class {
  constructor(e) {
    this.stack = [], this.flags = [], this.assignments = [], this.plugins = e.plugins, this.features = e.features, this.marked = new Set(e.markedRefs);
  }
  createFunction(e, t) {
    return E(this.features, e, t);
  }
  createEffectfulFunction(e, t) {
    return y(this.features, e, t);
  }
  markRef(e) {
    this.marked.add(e);
  }
  isMarked(e) {
    return this.marked.has(e);
  }
  pushObjectFlag(e, t) {
    e !== 0 && (this.markRef(t), this.flags.push({ type: e, value: this.getRefParam(t) }));
  }
  resolveFlags() {
    let e = "";
    for (let t = 0, r = this.flags, a = r.length; t < a; t++) {
      let n = r[t];
      e += Ur[n.type] + "(" + n.value + "),";
    }
    return e;
  }
  resolvePatches() {
    let e = be$1(this.assignments), t = this.resolveFlags();
    return e ? t ? e + t : e : t;
  }
  createAssignment(e, t) {
    this.assignments.push({ t: 0, s: e, k: s, v: t });
  }
  createAddAssignment(e, t) {
    this.assignments.push({ t: 1, s: this.getRefParam(e), k: s, v: t });
  }
  createSetAssignment(e, t, r) {
    this.assignments.push({ t: 2, s: this.getRefParam(e), k: t, v: r });
  }
  createDeleteAssignment(e, t) {
    this.assignments.push({ t: 3, s: this.getRefParam(e), k: t, v: s });
  }
  createArrayAssign(e, t, r) {
    this.createAssignment(this.getRefParam(e) + "[" + t + "]", r);
  }
  createObjectAssign(e, t, r) {
    this.createAssignment(this.getRefParam(e) + "." + t, r);
  }
  isIndexedValueInStack(e) {
    return e.t === 4 && this.stack.includes(e.i);
  }
  serializeReference(e) {
    return this.assignIndexedValue(e.i, A$1 + '.get("' + e.s + '")');
  }
  serializeArrayItem(e, t, r) {
    return t ? this.isIndexedValueInStack(t) ? (this.markRef(e), this.createArrayAssign(e, r, this.getRefParam(t.i)), "") : this.serialize(t) : "";
  }
  serializeArray(e) {
    let t = e.i;
    if (e.l) {
      this.stack.push(t);
      let r = e.a, a = this.serializeArrayItem(t, r[0], 0), n = a === "";
      for (let i = 1, o = e.l, l; i < o; i++) l = this.serializeArrayItem(t, r[i], i), a += "," + l, n = l === "";
      return this.stack.pop(), this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(t, "[" + a + (n ? ",]" : "]"));
    }
    return this.assignIndexedValue(t, "[]");
  }
  serializeProperty(e, t, r) {
    if (typeof t == "string") {
      let a = Number(t), n = a >= 0 && a.toString() === t || we$1(t);
      if (this.isIndexedValueInStack(r)) {
        let i = this.getRefParam(r.i);
        return this.markRef(e.i), n && a !== a ? this.createObjectAssign(e.i, t, i) : this.createArrayAssign(e.i, n ? t : '"' + t + '"', i), "";
      }
      return (n ? t : '"' + t + '"') + ":" + this.serialize(r);
    }
    return "[" + this.serialize(t) + "]:" + this.serialize(r);
  }
  serializeProperties(e, t) {
    let r = t.s;
    if (r) {
      let a = t.k, n = t.v;
      this.stack.push(e.i);
      let i = this.serializeProperty(e, a[0], n[0]);
      for (let o = 1, l = i; o < r; o++) l = this.serializeProperty(e, a[o], n[o]), i += (l && i && ",") + l;
      return this.stack.pop(), "{" + i + "}";
    }
    return "{}";
  }
  serializeObject(e) {
    return this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(e.i, this.serializeProperties(e, e.p));
  }
  serializeWithObjectAssign(e, t, r) {
    let a = this.serializeProperties(e, t);
    return a !== "{}" ? "Object.assign(" + r + "," + a + ")" : r;
  }
  serializeStringKeyAssignment(e, t, r, a) {
    let n = this.serialize(a), i = Number(r), o = i >= 0 && i.toString() === r || we$1(r);
    if (this.isIndexedValueInStack(a)) o && i !== i ? this.createObjectAssign(e.i, r, n) : this.createArrayAssign(e.i, o ? r : '"' + r + '"', n);
    else {
      let l = this.assignments;
      this.assignments = t, o && i !== i ? this.createObjectAssign(e.i, r, n) : this.createArrayAssign(e.i, o ? r : '"' + r + '"', n), this.assignments = l;
    }
  }
  serializeAssignment(e, t, r, a) {
    if (typeof r == "string") this.serializeStringKeyAssignment(e, t, r, a);
    else {
      let n = this.stack;
      this.stack = [];
      let i = this.serialize(a);
      this.stack = n;
      let o = this.assignments;
      this.assignments = t, this.createArrayAssign(e.i, this.serialize(r), i), this.assignments = o;
    }
  }
  serializeAssignments(e, t) {
    let r = t.s;
    if (r) {
      let a = [], n = t.k, i = t.v;
      this.stack.push(e.i);
      for (let o = 0; o < r; o++) this.serializeAssignment(e, a, n[o], i[o]);
      return this.stack.pop(), be$1(a);
    }
    return s;
  }
  serializeDictionary(e, t) {
    if (e.p) if (this.features & 8) t = this.serializeWithObjectAssign(e, e.p, t);
    else {
      this.markRef(e.i);
      let r = this.serializeAssignments(e, e.p);
      if (r) return "(" + this.assignIndexedValue(e.i, t) + "," + r + this.getRefParam(e.i) + ")";
    }
    return this.assignIndexedValue(e.i, t);
  }
  serializeNullConstructor(e) {
    return this.pushObjectFlag(e.o, e.i), this.serializeDictionary(e, Dr);
  }
  serializeDate(e) {
    return this.assignIndexedValue(e.i, 'new Date("' + e.s + '")');
  }
  serializeRegExp(e) {
    return this.assignIndexedValue(e.i, "/" + e.c + "/" + e.m);
  }
  serializeSetItem(e, t) {
    return this.isIndexedValueInStack(t) ? (this.markRef(e), this.createAddAssignment(e, this.getRefParam(t.i)), "") : this.serialize(t);
  }
  serializeSet(e) {
    let t = _r, r = e.l, a = e.i;
    if (r) {
      let n = e.a;
      this.stack.push(a);
      let i = this.serializeSetItem(a, n[0]);
      for (let o = 1, l = i; o < r; o++) l = this.serializeSetItem(a, n[o]), i += (l && i && ",") + l;
      this.stack.pop(), i && (t += "([" + i + "])");
    }
    return this.assignIndexedValue(a, t);
  }
  serializeMapEntry(e, t, r, a) {
    if (this.isIndexedValueInStack(t)) {
      let n = this.getRefParam(t.i);
      if (this.markRef(e), this.isIndexedValueInStack(r)) {
        let o = this.getRefParam(r.i);
        return this.createSetAssignment(e, n, o), "";
      }
      if (r.t !== 4 && r.i != null && this.isMarked(r.i)) {
        let o = "(" + this.serialize(r) + ",[" + a + "," + a + "])";
        return this.createSetAssignment(e, n, this.getRefParam(r.i)), this.createDeleteAssignment(e, a), o;
      }
      let i = this.stack;
      return this.stack = [], this.createSetAssignment(e, n, this.serialize(r)), this.stack = i, "";
    }
    if (this.isIndexedValueInStack(r)) {
      let n = this.getRefParam(r.i);
      if (this.markRef(e), t.t !== 4 && t.i != null && this.isMarked(t.i)) {
        let o = "(" + this.serialize(t) + ",[" + a + "," + a + "])";
        return this.createSetAssignment(e, this.getRefParam(t.i), n), this.createDeleteAssignment(e, a), o;
      }
      let i = this.stack;
      return this.stack = [], this.createSetAssignment(e, this.serialize(t), n), this.stack = i, "";
    }
    return "[" + this.serialize(t) + "," + this.serialize(r) + "]";
  }
  serializeMap(e) {
    let t = Mr, r = e.e.s, a = e.i, n = e.f, i = this.getRefParam(n.i);
    if (r) {
      let o = e.e.k, l = e.e.v;
      this.stack.push(a);
      let u = this.serializeMapEntry(a, o[0], l[0], i);
      for (let c = 1, d = u; c < r; c++) d = this.serializeMapEntry(a, o[c], l[c], i), u += (d && u && ",") + d;
      this.stack.pop(), u && (t += "([" + u + "])");
    }
    return n.t === 26 && (this.markRef(n.i), t = "(" + this.serialize(n) + "," + t + ")"), this.assignIndexedValue(a, t);
  }
  serializeArrayBuffer(e) {
    let t = "new Uint8Array(", r = e.s, a = r.length;
    if (a) {
      t += "[" + r[0];
      for (let n = 1; n < a; n++) t += "," + r[n];
      t += "]";
    }
    return this.assignIndexedValue(e.i, t + ").buffer");
  }
  serializeTypedArray(e) {
    return this.assignIndexedValue(e.i, "new " + e.c + "(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
  }
  serializeDataView(e) {
    return this.assignIndexedValue(e.i, "new DataView(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
  }
  serializeAggregateError(e) {
    let t = e.i;
    this.stack.push(t);
    let r = this.serializeDictionary(e, 'new AggregateError([],"' + e.m + '")');
    return this.stack.pop(), r;
  }
  serializeError(e) {
    return this.serializeDictionary(e, "new " + He$1[e.s] + '("' + e.m + '")');
  }
  serializePromise(e) {
    let t, r = e.f, a = e.i, n = e.s ? Lr : Hr;
    if (this.isIndexedValueInStack(r)) {
      let i = this.getRefParam(r.i);
      t = n + (e.s ? "().then(" + this.createFunction([], i) + ")" : "().catch(" + this.createEffectfulFunction([], "throw " + i) + ")");
    } else {
      this.stack.push(a);
      let i = this.serialize(r);
      this.stack.pop(), t = n + "(" + i + ")";
    }
    return this.assignIndexedValue(a, t);
  }
  serializeWellKnownSymbol(e) {
    return this.assignIndexedValue(e.i, Vt[e.s]);
  }
  serializeBoxed(e) {
    return this.assignIndexedValue(e.i, "Object(" + this.serialize(e.f) + ")");
  }
  serializePlugin(e) {
    let t = this.plugins;
    if (t) for (let r = 0, a = t.length; r < a; r++) {
      let n = t[r];
      if (n.tag === e.c) return this.assignIndexedValue(e.i, n.serialize(e.s, this, { id: e.i }));
    }
    throw new Ye$1(e.c);
  }
  getConstructor(e) {
    let t = this.serialize(e);
    return t === this.getRefParam(e.i) ? t : "(" + t + ")";
  }
  serializePromiseConstructor(e) {
    let t = this.assignIndexedValue(e.s, "{p:0,s:0,f:0}");
    return this.assignIndexedValue(e.i, this.getConstructor(e.f) + "(" + t + ")");
  }
  serializePromiseResolve(e) {
    return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
  }
  serializePromiseReject(e) {
    return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
  }
  serializeSpecialReference(e) {
    return this.assignIndexedValue(e.i, Er(this.features, e.s));
  }
  serializeIteratorFactory(e) {
    let t = "", r = false;
    return e.f.t !== 4 && (this.markRef(e.f.i), t = "(" + this.serialize(e.f) + ",", r = true), t += this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["i", "c", "d", "t"], "(i=0,t={[" + this.getRefParam(e.f.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction([], "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}") + "})"))), r && (t += ")"), t;
  }
  serializeIteratorFactoryInstance(e) {
    return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
  }
  serializeAsyncIteratorFactory(e) {
    let t = e.a[0], r = e.a[1], a = "";
    t.t !== 4 && (this.markRef(t.i), a += "(" + this.serialize(t)), r.t !== 4 && (this.markRef(r.i), a += (a ? "," : "(") + this.serialize(r)), a && (a += ",");
    let n = this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["b", "c", "p", "d", "e", "t", "f"], "(b=[],c=0,p=[],d=-1,e=!1,f=" + this.createEffectfulFunction(["i", "l"], "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})") + ",s.on({next:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!1,value:v});b.push(v)") + ",throw:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)") + ",return:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)") + "}),t={[" + this.getRefParam(r.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction(["i", "t", "v"], "if(d===-1){return((i=c++)>=b.length)?(p.push(t=" + this.getRefParam(t.i) + "()),t):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}") + "})")));
    return a ? a + n + ")" : n;
  }
  serializeAsyncIteratorFactoryInstance(e) {
    return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
  }
  serializeStreamConstructor(e) {
    let t = this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()"), r = e.a.length;
    if (r) {
      let a = this.serialize(e.a[0]);
      for (let n = 1; n < r; n++) a += "," + this.serialize(e.a[n]);
      return "(" + t + "," + a + "," + this.getRefParam(e.i) + ")";
    }
    return t;
  }
  serializeStreamNext(e) {
    return this.getRefParam(e.i) + ".next(" + this.serialize(e.f) + ")";
  }
  serializeStreamThrow(e) {
    return this.getRefParam(e.i) + ".throw(" + this.serialize(e.f) + ")";
  }
  serializeStreamReturn(e) {
    return this.getRefParam(e.i) + ".return(" + this.serialize(e.f) + ")";
  }
  serialize(e) {
    try {
      switch (e.t) {
        case 2:
          return _t[e.s];
        case 0:
          return "" + e.s;
        case 1:
          return '"' + e.s + '"';
        case 3:
          return e.s + "n";
        case 4:
          return this.getRefParam(e.i);
        case 18:
          return this.serializeReference(e);
        case 9:
          return this.serializeArray(e);
        case 10:
          return this.serializeObject(e);
        case 11:
          return this.serializeNullConstructor(e);
        case 5:
          return this.serializeDate(e);
        case 6:
          return this.serializeRegExp(e);
        case 7:
          return this.serializeSet(e);
        case 8:
          return this.serializeMap(e);
        case 19:
          return this.serializeArrayBuffer(e);
        case 16:
        case 15:
          return this.serializeTypedArray(e);
        case 20:
          return this.serializeDataView(e);
        case 14:
          return this.serializeAggregateError(e);
        case 13:
          return this.serializeError(e);
        case 12:
          return this.serializePromise(e);
        case 17:
          return this.serializeWellKnownSymbol(e);
        case 21:
          return this.serializeBoxed(e);
        case 22:
          return this.serializePromiseConstructor(e);
        case 23:
          return this.serializePromiseResolve(e);
        case 24:
          return this.serializePromiseReject(e);
        case 25:
          return this.serializePlugin(e);
        case 26:
          return this.serializeSpecialReference(e);
        case 27:
          return this.serializeIteratorFactory(e);
        case 28:
          return this.serializeIteratorFactoryInstance(e);
        case 29:
          return this.serializeAsyncIteratorFactory(e);
        case 30:
          return this.serializeAsyncIteratorFactoryInstance(e);
        case 31:
          return this.serializeStreamConstructor(e);
        case 32:
          return this.serializeStreamNext(e);
        case 33:
          return this.serializeStreamThrow(e);
        case 34:
          return this.serializeStreamReturn(e);
        default:
          throw new Xe$1(e);
      }
    } catch (t) {
      throw new gr(t);
    }
  }
}, Wr = class extends qr {
  constructor(e) {
    super(e), this.mode = "cross", this.scopeId = e.scopeId;
  }
  getRefParam(e) {
    return _$1 + "[" + e + "]";
  }
  assignIndexedValue(e, t) {
    return this.getRefParam(e) + "=" + t;
  }
  serializeTop(e) {
    let t = this.serialize(e), r = e.i;
    if (r == null) return t;
    let a = this.resolvePatches(), n = this.getRefParam(r), i = this.scopeId == null ? "" : _$1, o = a ? "(" + t + "," + a + n + ")" : t;
    if (i === "") return e.t === 10 && !a ? "(" + o + ")" : o;
    let l = this.scopeId == null ? "()" : "(" + _$1 + '["' + m$1(this.scopeId) + '"])';
    return "(" + this.createFunction([i], o) + ")" + l;
  }
}, Br = class extends $r {
  parseItems(e) {
    let t = [];
    for (let r = 0, a = e.length; r < a; r++) r in e && (t[r] = this.parseTop(e[r]));
    return t;
  }
  parseArray(e, t) {
    return sr(e, t, this.parseItems(t));
  }
  parseProperties(e) {
    let t = Object.entries(e), r = [], a = [];
    for (let i = 0, o = t.length; i < o; i++) r.push(m$1(t[i][0])), a.push(this.parseTop(t[i][1]));
    let n = Symbol.iterator;
    return n in e && (r.push(this.parseWellKnownSymbol(n)), a.push(We$1(this.parseIteratorFactory(), this.parseTop(Ge$1(e))))), n = Symbol.asyncIterator, n in e && (r.push(this.parseWellKnownSymbol(n)), a.push(Be$1(this.parseAsyncIteratorFactory(), this.parseTop($$1())))), n = Symbol.toStringTag, n in e && (r.push(this.parseWellKnownSymbol(n)), a.push(Q(e[n]))), n = Symbol.isConcatSpreadable, n in e && (r.push(this.parseWellKnownSymbol(n)), a.push(e[n] ? J : Z)), { k: r, v: a, s: r.length };
  }
  parsePlainObject(e, t, r) {
    return this.createObjectNode(e, t, r, this.parseProperties(t));
  }
  parseBoxed(e, t) {
    return ar(e, this.parseTop(t.valueOf()));
  }
  parseTypedArray(e, t) {
    return nr(e, t, this.parseTop(t.buffer));
  }
  parseBigIntTypedArray(e, t) {
    return ir(e, t, this.parseTop(t.buffer));
  }
  parseDataView(e, t) {
    return or(e, t, this.parseTop(t.buffer));
  }
  parseError(e, t) {
    let r = ge$1(t, this.features);
    return lr(e, t, r ? this.parseProperties(r) : s);
  }
  parseAggregateError(e, t) {
    let r = ge$1(t, this.features);
    return ur(e, t, r ? this.parseProperties(r) : s);
  }
  parseMap(e, t) {
    let r = [], a = [];
    for (let [n, i] of t.entries()) r.push(this.parseTop(n)), a.push(this.parseTop(i));
    return this.createMapNode(e, r, a, t.size);
  }
  parseSet(e, t) {
    let r = [];
    for (let a of t.keys()) r.push(this.parseTop(a));
    return cr(e, t.size, r);
  }
  parsePlugin(e, t) {
    let r = this.plugins;
    if (r) for (let a = 0, n = r.length; a < n; a++) {
      let i = r[a];
      if (i.parse.sync && i.test(t)) return qe$1(e, i.tag, i.parse.sync(t, this, { id: e }));
    }
  }
  parseStream(e, t) {
    return Ke$1(e, this.parseSpecialReference(4), []);
  }
  parsePromise(e, t) {
    return this.createPromiseConstructorNode(e, this.createIndex({}));
  }
  parseObject(e, t) {
    if (Array.isArray(t)) return this.parseArray(e, t);
    if (kr(t)) return this.parseStream(e, t);
    let r = t.constructor;
    if (r === zr) return this.parseTop(t.replacement);
    let a = this.parsePlugin(e, t);
    if (a) return a;
    switch (r) {
      case Object:
        return this.parsePlainObject(e, t, false);
      case void 0:
        return this.parsePlainObject(e, t, true);
      case Date:
        return Zt(e, t);
      case RegExp:
        return Qt(e, t);
      case Error:
      case EvalError:
      case RangeError:
      case ReferenceError:
      case SyntaxError:
      case TypeError:
      case URIError:
        return this.parseError(e, t);
      case Number:
      case Boolean:
      case String:
      case BigInt:
        return this.parseBoxed(e, t);
      case ArrayBuffer:
        return er(e, t);
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case Uint8Array:
      case Uint16Array:
      case Uint32Array:
      case Uint8ClampedArray:
      case Float32Array:
      case Float64Array:
        return this.parseTypedArray(e, t);
      case DataView:
        return this.parseDataView(e, t);
      case Map:
        return this.parseMap(e, t);
      case Set:
        return this.parseSet(e, t);
    }
    if (r === Promise || t instanceof Promise) return this.parsePromise(e, t);
    let n = this.features;
    if (n & 16) switch (r) {
      case BigInt64Array:
      case BigUint64Array:
        return this.parseBigIntTypedArray(e, t);
    }
    if (n & 1 && typeof AggregateError < "u" && (r === AggregateError || t instanceof AggregateError)) return this.parseAggregateError(e, t);
    if (t instanceof Error) return this.parseError(e, t);
    if (Symbol.iterator in t || Symbol.asyncIterator in t) return this.parsePlainObject(e, t, !!r);
    throw new M(t);
  }
  parseFunction(e) {
    let t = this.getReference(e);
    if (t.type !== 0) return t.value;
    let r = this.parsePlugin(t.value, e);
    if (r) return r;
    throw new M(e);
  }
  parseTop(e) {
    switch (typeof e) {
      case "boolean":
        return e ? J : Z;
      case "undefined":
        return Ht;
      case "string":
        return Q(e);
      case "number":
        return Yt(e);
      case "bigint":
        return Gt(e);
      case "object": {
        if (e) {
          let t = this.getReference(e);
          return t.type === 0 ? this.parseObject(t.value, e) : t.value;
        }
        return Ut;
      }
      case "symbol":
        return this.parseWellKnownSymbol(e);
      case "function":
        return this.parseFunction(e);
      default:
        throw new M(e);
    }
  }
  parse(e) {
    try {
      return this.parseTop(e);
    } catch (t) {
      throw t instanceof me$1 ? t : new me$1(t);
    }
  }
}, Kr = class extends Br {
  constructor(e) {
    super(e), this.alive = true, this.pending = 0, this.initial = true, this.buffer = [], this.onParseCallback = e.onParse, this.onErrorCallback = e.onError, this.onDoneCallback = e.onDone;
  }
  onParseInternal(e, t) {
    try {
      this.onParseCallback(e, t);
    } catch (r) {
      this.onError(r);
    }
  }
  flush() {
    for (let e = 0, t = this.buffer.length; e < t; e++) this.onParseInternal(this.buffer[e], false);
  }
  onParse(e) {
    this.initial ? this.buffer.push(e) : this.onParseInternal(e, false);
  }
  onError(e) {
    if (this.onErrorCallback) this.onErrorCallback(e);
    else throw e;
  }
  onDone() {
    this.onDoneCallback && this.onDoneCallback();
  }
  pushPendingState() {
    this.pending++;
  }
  popPendingState() {
    --this.pending <= 0 && this.onDone();
  }
  parseProperties(e) {
    let t = Object.entries(e), r = [], a = [];
    for (let i = 0, o = t.length; i < o; i++) r.push(m$1(t[i][0])), a.push(this.parseTop(t[i][1]));
    let n = Symbol.iterator;
    return n in e && (r.push(this.parseWellKnownSymbol(n)), a.push(We$1(this.parseIteratorFactory(), this.parseTop(Ge$1(e))))), n = Symbol.asyncIterator, n in e && (r.push(this.parseWellKnownSymbol(n)), a.push(Be$1(this.parseAsyncIteratorFactory(), this.parseTop(Tr(e))))), n = Symbol.toStringTag, n in e && (r.push(this.parseWellKnownSymbol(n)), a.push(Q(e[n]))), n = Symbol.isConcatSpreadable, n in e && (r.push(this.parseWellKnownSymbol(n)), a.push(e[n] ? J : Z)), { k: r, v: a, s: r.length };
  }
  handlePromiseSuccess(e, t) {
    let r = this.parseWithError(t);
    r && this.onParse(p(23, e, s, s, s, s, s, s, [this.parseSpecialReference(2), r], s, s, s)), this.popPendingState();
  }
  handlePromiseFailure(e, t) {
    if (this.alive) {
      let r = this.parseWithError(t);
      r && this.onParse(p(24, e, s, s, s, s, s, s, [this.parseSpecialReference(3), r], s, s, s));
    }
    this.popPendingState();
  }
  parsePromise(e, t) {
    let r = this.createIndex({});
    return t.then(this.handlePromiseSuccess.bind(this, r), this.handlePromiseFailure.bind(this, r)), this.pushPendingState(), this.createPromiseConstructorNode(e, r);
  }
  parsePlugin(e, t) {
    let r = this.plugins;
    if (r) for (let a = 0, n = r.length; a < n; a++) {
      let i = r[a];
      if (i.parse.stream && i.test(t)) return qe$1(e, i.tag, i.parse.stream(t, this, { id: e }));
    }
    return s;
  }
  parseStream(e, t) {
    let r = Ke$1(e, this.parseSpecialReference(4), []);
    return this.pushPendingState(), t.on({ next: (a) => {
      if (this.alive) {
        let n = this.parseWithError(a);
        n && this.onParse(hr(e, n));
      }
    }, throw: (a) => {
      if (this.alive) {
        let n = this.parseWithError(a);
        n && this.onParse(pr(e, n));
      }
      this.popPendingState();
    }, return: (a) => {
      if (this.alive) {
        let n = this.parseWithError(a);
        n && this.onParse(dr(e, n));
      }
      this.popPendingState();
    } }), r;
  }
  parseWithError(e) {
    try {
      return this.parseTop(e);
    } catch (t) {
      return this.onError(t), s;
    }
  }
  start(e) {
    let t = this.parseWithError(e);
    t && (this.onParseInternal(t, true), this.initial = false, this.flush(), this.pending <= 0 && this.destroy());
  }
  destroy() {
    this.alive && (this.onDone(), this.alive = false);
  }
  isAlive() {
    return this.alive;
  }
}, Xr = class extends Kr {
  constructor() {
    super(...arguments), this.mode = "cross";
  }
};
function Yr(e, t) {
  let r = Me$1(t.plugins), a = new Xr({ plugins: r, refs: t.refs, disabledFeatures: t.disabledFeatures, onParse(n, i) {
    let o = new Wr({ plugins: r, features: a.features, scopeId: t.scopeId, markedRefs: a.marked }), l;
    try {
      l = o.serializeTop(n);
    } catch (u) {
      t.onError && t.onError(u);
      return;
    }
    t.onSerialize(l, i);
  }, onError: t.onError, onDone: t.onDone });
  return a.start(e), a.destroy.bind(a);
}
var Gr = class extends jr {
  constructor(t) {
    super(t), this.mode = "vanilla", this.marked = new Set(t.markedRefs);
  }
  assignIndexedValue(t, r) {
    return this.marked.has(t) && this.refs.set(t, r), r;
  }
};
function ze$1(e, t = {}) {
  let r = Me$1(t.plugins);
  return new Gr({ plugins: r, markedRefs: e.m }).deserialize(e.t);
}
function U(e) {
  return { detail: e.detail, bubbles: e.bubbles, cancelable: e.cancelable, composed: e.composed };
}
var Jr = { tag: "seroval-plugins/web/CustomEvent", test(e) {
  return typeof CustomEvent > "u" ? false : e instanceof CustomEvent;
}, parse: { sync(e, t) {
  return { type: t.parse(e.type), options: t.parse(U(e)) };
}, async async(e, t) {
  return { type: await t.parse(e.type), options: await t.parse(U(e)) };
}, stream(e, t) {
  return { type: t.parse(e.type), options: t.parse(U(e)) };
} }, serialize(e, t) {
  return "new CustomEvent(" + t.serialize(e.type) + "," + t.serialize(e.options) + ")";
}, deserialize(e, t) {
  return new CustomEvent(t.deserialize(e.type), t.deserialize(e.options));
} }, te = Jr, Zr = { tag: "seroval-plugins/web/DOMException", test(e) {
  return typeof DOMException > "u" ? false : e instanceof DOMException;
}, parse: { sync(e, t) {
  return { name: t.parse(e.name), message: t.parse(e.message) };
}, async async(e, t) {
  return { name: await t.parse(e.name), message: await t.parse(e.message) };
}, stream(e, t) {
  return { name: t.parse(e.name), message: t.parse(e.message) };
} }, serialize(e, t) {
  return "new DOMException(" + t.serialize(e.message) + "," + t.serialize(e.name) + ")";
}, deserialize(e, t) {
  return new DOMException(t.deserialize(e.message), t.deserialize(e.name));
} }, re = Zr;
function q(e) {
  return { bubbles: e.bubbles, cancelable: e.cancelable, composed: e.composed };
}
var Qr = { tag: "seroval-plugins/web/Event", test(e) {
  return typeof Event > "u" ? false : e instanceof Event;
}, parse: { sync(e, t) {
  return { type: t.parse(e.type), options: t.parse(q(e)) };
}, async async(e, t) {
  return { type: await t.parse(e.type), options: await t.parse(q(e)) };
}, stream(e, t) {
  return { type: t.parse(e.type), options: t.parse(q(e)) };
} }, serialize(e, t) {
  return "new Event(" + t.serialize(e.type) + "," + t.serialize(e.options) + ")";
}, deserialize(e, t) {
  return new Event(t.deserialize(e.type), t.deserialize(e.options));
} }, se = Qr, es = { tag: "seroval-plugins/web/File", test(e) {
  return typeof File > "u" ? false : e instanceof File;
}, parse: { async async(e, t) {
  return { name: await t.parse(e.name), options: await t.parse({ type: e.type, lastModified: e.lastModified }), buffer: await t.parse(await e.arrayBuffer()) };
} }, serialize(e, t) {
  return "new File([" + t.serialize(e.buffer) + "]," + t.serialize(e.name) + "," + t.serialize(e.options) + ")";
}, deserialize(e, t) {
  return new File([t.deserialize(e.buffer)], t.deserialize(e.name), t.deserialize(e.options));
} }, ts = es;
function W$1(e) {
  let t = [];
  return e.forEach((r, a) => {
    t.push([a, r]);
  }), t;
}
var k$1 = {}, rs = { tag: "seroval-plugins/web/FormDataFactory", test(e) {
  return e === k$1;
}, parse: { sync() {
}, async async() {
  return await Promise.resolve(void 0);
}, stream() {
} }, serialize(e, t) {
  return t.createEffectfulFunction(["e", "f", "i", "s", "t"], "f=new FormData;for(i=0,s=e.length;i<s;i++)f.append((t=e[i])[0],t[1]);return f");
}, deserialize() {
  return k$1;
} }, ss = { tag: "seroval-plugins/web/FormData", extends: [ts, rs], test(e) {
  return typeof FormData > "u" ? false : e instanceof FormData;
}, parse: { sync(e, t) {
  return { factory: t.parse(k$1), entries: t.parse(W$1(e)) };
}, async async(e, t) {
  return { factory: await t.parse(k$1), entries: await t.parse(W$1(e)) };
}, stream(e, t) {
  return { factory: t.parse(k$1), entries: t.parse(W$1(e)) };
} }, serialize(e, t) {
  return "(" + t.serialize(e.factory) + ")(" + t.serialize(e.entries) + ")";
}, deserialize(e, t) {
  let r = new FormData(), a = t.deserialize(e.entries);
  for (let n = 0, i = a.length; n < i; n++) {
    let o = a[n];
    r.append(o[0], o[1]);
  }
  return r;
} }, ae = ss;
function B(e) {
  let t = [];
  return e.forEach((r, a) => {
    t.push([a, r]);
  }), t;
}
var as = { tag: "seroval-plugins/web/Headers", test(e) {
  return typeof Headers > "u" ? false : e instanceof Headers;
}, parse: { sync(e, t) {
  return t.parse(B(e));
}, async async(e, t) {
  return await t.parse(B(e));
}, stream(e, t) {
  return t.parse(B(e));
} }, serialize(e, t) {
  return "new Headers(" + t.serialize(e) + ")";
}, deserialize(e, t) {
  return new Headers(t.deserialize(e));
} }, F = as, T$1 = {}, ns = { tag: "seroval-plugins/web/ReadableStreamFactory", test(e) {
  return e === T$1;
}, parse: { sync() {
}, async async() {
  return await Promise.resolve(void 0);
}, stream() {
} }, serialize(e, t) {
  return t.createFunction(["d"], "new ReadableStream({start:" + t.createEffectfulFunction(["c"], "d.on({next:" + t.createEffectfulFunction(["v"], "c.enqueue(v)") + ",throw:" + t.createEffectfulFunction(["v"], "c.error(v)") + ",return:" + t.createEffectfulFunction([], "c.close()") + "})") + "})");
}, deserialize() {
  return T$1;
} };
function ve$1(e) {
  let t = $$1(), r = e.getReader();
  async function a() {
    try {
      let n = await r.read();
      n.done ? t.return(n.value) : (t.next(n.value), await a());
    } catch (n) {
      t.throw(n);
    }
  }
  return a().catch(() => {
  }), t;
}
var is = { tag: "seroval/plugins/web/ReadableStream", extends: [ns], test(e) {
  return typeof ReadableStream > "u" ? false : e instanceof ReadableStream;
}, parse: { sync(e, t) {
  return { factory: t.parse(T$1), stream: t.parse($$1()) };
}, async async(e, t) {
  return { factory: await t.parse(T$1), stream: await t.parse(ve$1(e)) };
}, stream(e, t) {
  return { factory: t.parse(T$1), stream: t.parse(ve$1(e)) };
} }, serialize(e, t) {
  return "(" + t.serialize(e.factory) + ")(" + t.serialize(e.stream) + ")";
}, deserialize(e, t) {
  let r = t.deserialize(e.stream);
  return new ReadableStream({ start(a) {
    r.on({ next(n) {
      a.enqueue(n);
    }, throw(n) {
      a.error(n);
    }, return() {
      a.close();
    } });
  } });
} }, C$1 = is;
function Se$1(e, t) {
  return { body: t, cache: e.cache, credentials: e.credentials, headers: e.headers, integrity: e.integrity, keepalive: e.keepalive, method: e.method, mode: e.mode, redirect: e.redirect, referrer: e.referrer, referrerPolicy: e.referrerPolicy };
}
var os = { tag: "seroval-plugins/web/Request", extends: [C$1, F], test(e) {
  return typeof Request > "u" ? false : e instanceof Request;
}, parse: { async async(e, t) {
  return { url: await t.parse(e.url), options: await t.parse(Se$1(e, e.body ? await e.clone().arrayBuffer() : null)) };
}, stream(e, t) {
  return { url: t.parse(e.url), options: t.parse(Se$1(e, e.clone().body)) };
} }, serialize(e, t) {
  return "new Request(" + t.serialize(e.url) + "," + t.serialize(e.options) + ")";
}, deserialize(e, t) {
  return new Request(t.deserialize(e.url), t.deserialize(e.options));
} }, ne = os;
function Re$1(e) {
  return { headers: e.headers, status: e.status, statusText: e.statusText };
}
var ls = { tag: "seroval-plugins/web/Response", extends: [C$1, F], test(e) {
  return typeof Response > "u" ? false : e instanceof Response;
}, parse: { async async(e, t) {
  return { body: await t.parse(e.body ? await e.clone().arrayBuffer() : null), options: await t.parse(Re$1(e)) };
}, stream(e, t) {
  return { body: t.parse(e.clone().body), options: t.parse(Re$1(e)) };
} }, serialize(e, t) {
  return "new Response(" + t.serialize(e.body) + "," + t.serialize(e.options) + ")";
}, deserialize(e, t) {
  return new Response(t.deserialize(e.body), t.deserialize(e.options));
} }, ie = ls, us = { tag: "seroval-plugins/web/URL", test(e) {
  return typeof URL > "u" ? false : e instanceof URL;
}, parse: { sync(e, t) {
  return t.parse(e.href);
}, async async(e, t) {
  return await t.parse(e.href);
}, stream(e, t) {
  return t.parse(e.href);
} }, serialize(e, t) {
  return "new URL(" + t.serialize(e) + ")";
}, deserialize(e, t) {
  return new URL(t.deserialize(e));
} }, oe = us, cs = { tag: "seroval-plugins/web/URLSearchParams", test(e) {
  return typeof URLSearchParams > "u" ? false : e instanceof URLSearchParams;
}, parse: { sync(e, t) {
  return t.parse(e.toString());
}, async async(e, t) {
  return await t.parse(e.toString());
}, stream(e, t) {
  return t.parse(e.toString());
} }, serialize(e, t) {
  return "new URLSearchParams(" + t.serialize(e) + ")";
}, deserialize(e, t) {
  return new URLSearchParams(t.deserialize(e));
} }, le$1 = cs;
function hs(e = {}) {
  let t, r = false;
  const a = (o) => {
    if (t && t !== o) throw new Error("Context conflict");
  };
  let n;
  if (e.asyncContext) {
    const o = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    o ? n = new o() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const i = () => {
    if (n) {
      const o = n.getStore();
      if (o !== void 0) return o;
    }
    return t;
  };
  return { use: () => {
    const o = i();
    if (o === void 0) throw new Error("Context is not available");
    return o;
  }, tryUse: () => i(), set: (o, l) => {
    l || a(o), t = o, r = true;
  }, unset: () => {
    t = void 0, r = false;
  }, call: (o, l) => {
    a(o), t = o;
    try {
      return n ? n.run(o, l) : l();
    } finally {
      r || (t = void 0);
    }
  }, async callAsync(o, l) {
    t = o;
    const u = () => {
      t = o;
    }, c = () => t === o ? u : void 0;
    Ae$1.add(c);
    try {
      const d = n ? n.run(o, l) : l();
      return r || (t = void 0), await d;
    } finally {
      Ae$1.delete(c);
    }
  } };
}
function ps(e = {}) {
  const t = {};
  return { get(r, a = {}) {
    return t[r] || (t[r] = hs({ ...e, ...a })), t[r];
  } };
}
const L = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : {}, xe$1 = "__unctx__", ds = L[xe$1] || (L[xe$1] = ps()), fs = (e, t = {}) => ds.get(e, t), Pe$1 = "__unctx_async_handlers__", Ae$1 = L[Pe$1] || (L[Pe$1] = /* @__PURE__ */ new Set());
function gs(e) {
  let t;
  const r = Ze$1(e), a = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(r, { ...a, body: e.node.req.body }) : new Request(r, { ...a, get body() {
    return t || (t = Ps(e), t);
  } });
}
function ms(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: gs(e), url: Ze$1(e) }, e.web.request;
}
function ys() {
  return ks();
}
const Je$1 = Symbol("$HTTPEvent");
function ws(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[Je$1]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function f(e) {
  return function(...t) {
    var _a;
    let r = t[0];
    if (ws(r)) t[0] = r instanceof H3Event || r.__is_event__ ? r : r[Je$1];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (r = ys(), !r) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      t.unshift(r);
    }
    return e(...t);
  };
}
const Ze$1 = f(getRequestURL), bs = f(getRequestIP), H$1 = f(setResponseStatus), Ie$1 = f(getResponseStatus), zs = f(getResponseStatusText), V = f(getResponseHeaders), Ee$1 = f(getResponseHeader), vs = f(setResponseHeader), Qe$1 = f(appendResponseHeader), Ss = f(parseCookies), Rs = f(getCookie), xs = f(setCookie), D$1 = f(setHeader), Ps = f(getRequestWebStream), As = f(removeResponseHeader), Is = f(ms);
function Es() {
  var _a;
  return fs("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function ks() {
  return Es().use().event;
}
const K = "Invariant Violation", { setPrototypeOf: Ts = function(e, t) {
  return e.__proto__ = t, e;
} } = Object;
let pe$1 = class pe extends Error {
  constructor(t = K) {
    super(typeof t == "number" ? `${K}: ${t} (see https://github.com/apollographql/invariant-packages)` : t);
    __publicField$1(this, "framesToPop", 1);
    __publicField$1(this, "name", K);
    Ts(this, pe.prototype);
  }
};
function Fs(e, t) {
  if (!e) throw new pe$1(t);
}
const X = "solidFetchEvent";
function Cs(e) {
  return { request: Is(e), response: Ns(e), clientAddress: bs(e), locals: {}, nativeEvent: e };
}
function $s(e) {
  return { ...e };
}
function Os(e) {
  if (!e.context[X]) {
    const t = Cs(e);
    e.context[X] = t;
  }
  return e.context[X];
}
function ke$1(e, t) {
  for (const [r, a] of t.entries()) Qe$1(e, r, a);
}
class js {
  constructor(t) {
    __publicField$1(this, "event");
    this.event = t;
  }
  get(t) {
    const r = Ee$1(this.event, t);
    return Array.isArray(r) ? r.join(", ") : r || null;
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, r) {
    return vs(this.event, t, r);
  }
  delete(t) {
    return As(this.event, t);
  }
  append(t, r) {
    Qe$1(this.event, t, r);
  }
  getSetCookie() {
    const t = Ee$1(this.event, "Set-Cookie");
    return Array.isArray(t) ? t : [t];
  }
  forEach(t) {
    return Object.entries(V(this.event)).forEach(([r, a]) => t(Array.isArray(a) ? a.join(", ") : a, r, this));
  }
  entries() {
    return Object.entries(V(this.event)).map(([t, r]) => [t, Array.isArray(r) ? r.join(", ") : r])[Symbol.iterator]();
  }
  keys() {
    return Object.keys(V(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(V(this.event)).map((t) => Array.isArray(t) ? t.join(", ") : t)[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
}
function Ns(e) {
  return { get status() {
    return Ie$1(e);
  }, set status(t) {
    H$1(e, t);
  }, get statusText() {
    return zs(e);
  }, set statusText(t) {
    H$1(e, Ie$1(e), t);
  }, headers: new js(e) };
}
const x$1 = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
function Vs(e = {}) {
  const t = { options: e, rootNode: et(), staticRoutesMap: {} }, r = (a) => e.strictTrailingSlash ? a : a.replace(/\/$/, "") || "/";
  if (e.routes) for (const a in e.routes) Te$1(t, r(a), e.routes[a]);
  return { ctx: t, lookup: (a) => Ds(t, r(a)), insert: (a, n) => Te$1(t, r(a), n), remove: (a) => _s(t, r(a)) };
}
function Ds(e, t) {
  const r = e.staticRoutesMap[t];
  if (r) return r.data;
  const a = t.split("/"), n = {};
  let i = false, o = null, l = e.rootNode, u = null;
  for (let c = 0; c < a.length; c++) {
    const d = a[c];
    l.wildcardChildNode !== null && (o = l.wildcardChildNode, u = a.slice(c).join("/"));
    const S = l.children.get(d);
    if (S === void 0) {
      if (l && l.placeholderChildren.length > 1) {
        const w = a.length - c;
        l = l.placeholderChildren.find((h) => h.maxDepth === w) || null;
      } else l = l.placeholderChildren[0] || null;
      if (!l) break;
      l.paramName && (n[l.paramName] = d), i = true;
    } else l = S;
  }
  return (l === null || l.data === null) && o !== null && (l = o, n[l.paramName || "_"] = u, i = true), l ? i ? { ...l.data, params: i ? n : void 0 } : l.data : null;
}
function Te$1(e, t, r) {
  let a = true;
  const n = t.split("/");
  let i = e.rootNode, o = 0;
  const l = [i];
  for (const u of n) {
    let c;
    if (c = i.children.get(u)) i = c;
    else {
      const d = Ms(u);
      c = et({ type: d, parent: i }), i.children.set(u, c), d === x$1.PLACEHOLDER ? (c.paramName = u === "*" ? `_${o++}` : u.slice(1), i.placeholderChildren.push(c), a = false) : d === x$1.WILDCARD && (i.wildcardChildNode = c, c.paramName = u.slice(3) || "_", a = false), l.push(c), i = c;
    }
  }
  for (const [u, c] of l.entries()) c.maxDepth = Math.max(l.length - u, c.maxDepth || 0);
  return i.data = r, a === true && (e.staticRoutesMap[t] = i), i;
}
function _s(e, t) {
  let r = false;
  const a = t.split("/");
  let n = e.rootNode;
  for (const i of a) if (n = n.children.get(i), !n) return r;
  if (n.data) {
    const i = a.at(-1) || "";
    n.data = null, Object.keys(n.children).length === 0 && n.parent && (n.parent.children.delete(i), n.parent.wildcardChildNode = null, n.parent.placeholderChildren = []), r = true;
  }
  return r;
}
function et(e = {}) {
  return { type: e.type || x$1.NORMAL, maxDepth: 0, parent: e.parent || null, children: /* @__PURE__ */ new Map(), data: e.data || null, paramName: e.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function Ms(e) {
  return e.startsWith("**") ? x$1.WILDCARD : e[0] === ":" || e === "*" ? x$1.PLACEHOLDER : x$1.NORMAL;
}
const Ls = { info: { AUTO_SHOW_WINDOW: false } }, tt = [{ page: true, $$route: { require: () => ({ route: Ls }), src: "src/routes/(window-chrome).tsx?pick=route" }, path: "/(window-chrome)", filePath: "/app/apps/desktop/src/routes/(window-chrome).tsx" }, { page: true, path: "/camera", filePath: "/app/apps/desktop/src/routes/camera.tsx" }, { page: true, path: "/capture-area", filePath: "/app/apps/desktop/src/routes/capture-area.tsx" }, { page: true, path: "/debug", filePath: "/app/apps/desktop/src/routes/debug.tsx" }, { page: true, path: "/in-progress-recording", filePath: "/app/apps/desktop/src/routes/in-progress-recording.tsx" }, { page: true, path: "/mode-select", filePath: "/app/apps/desktop/src/routes/mode-select.tsx" }, { page: true, path: "/notifications", filePath: "/app/apps/desktop/src/routes/notifications.tsx" }, { page: true, path: "/recordings-overlay", filePath: "/app/apps/desktop/src/routes/recordings-overlay.tsx" }, { page: true, path: "/window-capture-occluder", filePath: "/app/apps/desktop/src/routes/window-capture-occluder.tsx" }, { page: true, path: "/(window-chrome)/(main)", filePath: "/app/apps/desktop/src/routes/(window-chrome)/(main).tsx" }, { page: true, path: "/(window-chrome)/callback.template", filePath: "/app/apps/desktop/src/routes/(window-chrome)/callback.template.ts" }, { page: true, path: "/(window-chrome)/settings", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings.tsx" }, { page: true, path: "/(window-chrome)/setup", filePath: "/app/apps/desktop/src/routes/(window-chrome)/setup.tsx" }, { page: true, path: "/(window-chrome)/update", filePath: "/app/apps/desktop/src/routes/(window-chrome)/update.tsx" }, { page: true, path: "/(window-chrome)/upgrade", filePath: "/app/apps/desktop/src/routes/(window-chrome)/upgrade.tsx" }, { page: true, path: "/editor/AspectRatioSelect", filePath: "/app/apps/desktop/src/routes/editor/AspectRatioSelect.tsx" }, { page: true, path: "/editor/PresetsDropdown", filePath: "/app/apps/desktop/src/routes/editor/PresetsDropdown.tsx" }, { page: true, path: "/editor/ShadowSettings", filePath: "/app/apps/desktop/src/routes/editor/ShadowSettings.tsx" }, { page: true, path: "/editor/ShareButton", filePath: "/app/apps/desktop/src/routes/editor/ShareButton.tsx" }, { page: true, path: "/editor/", filePath: "/app/apps/desktop/src/routes/editor/index.tsx" }, { page: true, path: "/(window-chrome)/settings/changelog", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/changelog.tsx" }, { page: true, path: "/(window-chrome)/settings/experimental", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/experimental.tsx" }, { page: true, path: "/(window-chrome)/settings/feedback", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/feedback.tsx" }, { page: true, path: "/(window-chrome)/settings/general", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/general.tsx" }, { page: true, path: "/(window-chrome)/settings/hotkeys", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/hotkeys.tsx" }, { page: true, path: "/(window-chrome)/settings/", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/index.tsx" }, { page: true, path: "/(window-chrome)/settings/license", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/license.tsx" }, { page: true, path: "/(window-chrome)/settings/recordings", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/recordings.tsx" }, { page: true, path: "/(window-chrome)/settings/screenshots", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/screenshots.tsx" }, { page: true, path: "/(window-chrome)/settings/integrations/", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/integrations/index.tsx" }, { page: true, path: "/(window-chrome)/settings/integrations/s3-config", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/integrations/s3-config.tsx" }], Hs = Us(tt.filter((e) => e.page));
function Us(e) {
  function t(r, a, n, i) {
    const o = Object.values(r).find((l) => n.startsWith(l.id + "/"));
    return o ? (t(o.children || (o.children = []), a, n.slice(o.id.length)), r) : (r.push({ ...a, id: n, path: n.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/") }), r);
  }
  return e.sort((r, a) => r.path.length - a.path.length).reduce((r, a) => t(r, a, a.path, a.path), []);
}
function qs(e) {
  return e.$HEAD || e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
Vs({ routes: tt.reduce((e, t) => {
  if (!qs(t)) return e;
  let r = t.path.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/").replace(/\*([^/]*)/g, (a, n) => `**:${n}`).split("/").map((a) => a.startsWith(":") || a.startsWith("*") ? a : encodeURIComponent(a)).join("/");
  if (/:[^/]*\?/g.test(r)) throw new Error(`Optional parameters are not supported in API routes: ${r}`);
  if (e[r]) throw new Error(`Duplicate API routes for "${r}" found at "${e[r].route.path}" and "${t.path}"`);
  return e[r] = { route: t }, e;
}, {}) });
var Bs = " ";
const Ks = { style: (e) => ssrElement("style", e.attrs, () => e.children, true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(Bs), true) : null, noscript: (e) => ssrElement("noscript", e.attrs, () => escape(e.children), true) };
function Xs(e, t) {
  let { tag: r, attrs: { key: a, ...n } = { key: void 0 }, children: i } = e;
  return Ks[r]({ attrs: { ...n, nonce: t }, key: a, children: i });
}
function Ys(e, t, r, a = "default") {
  return lazy(async () => {
    var _a;
    {
      const i = (await e.import())[a], l = (await ((_a = t.inputs) == null ? void 0 : _a[e.src].assets())).filter((c) => c.tag === "style" || c.attrs.rel === "stylesheet");
      return { default: (c) => [...l.map((d) => Xs(d)), createComponent(i, c)] };
    }
  });
}
function rt() {
  function e(r) {
    return { ...r, ...r.$$route ? r.$$route.require().route : void 0, info: { ...r.$$route ? r.$$route.require().route.info : {}, filesystem: true }, component: r.$component && Ys(r.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: r.children ? r.children.map(e) : void 0 };
  }
  return Hs.map(e);
}
let Fe$1;
const wa = isServer ? () => getRequestEvent().routes : () => Fe$1 || (Fe$1 = rt());
function Gs(e) {
  const t = Rs(e.nativeEvent, "flash");
  if (t) try {
    let r = JSON.parse(t);
    if (!r || !r.result) return;
    const a = [...r.input.slice(0, -1), new Map(r.input[r.input.length - 1])], n = r.error ? new Error(r.result) : r.result;
    return { input: a, url: r.url, pending: false, result: r.thrown ? void 0 : n, error: r.thrown ? n : void 0 };
  } catch (r) {
    console.error(r);
  } finally {
    xs(e.nativeEvent, "flash", "", { maxAge: 0 });
  }
}
async function Js(e) {
  const t = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, e.response.headers.set("Content-Type", "text/html"), Object.assign(e, { manifest: await t.json(), assets: [...await t.inputs[t.handler].assets()], router: { submission: Gs(e) }, routes: rt(), complete: false, $islands: /* @__PURE__ */ new Set() });
}
const Zs = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function Qs(e) {
  return e.status && Zs.has(e.status) ? e.status : 302;
}
const ea = {};
function ta(e) {
  const t = new TextEncoder().encode(e), r = t.length, a = r.toString(16), n = "00000000".substring(0, 8 - a.length) + a, i = new TextEncoder().encode(`;0x${n};`), o = new Uint8Array(12 + r);
  return o.set(i), o.set(t, 12), o;
}
function Ce$1(e, t) {
  return new ReadableStream({ start(r) {
    Yr(t, { scopeId: e, plugins: [te, re, se, ae, F, C$1, ne, ie, le$1, oe], onSerialize(a, n) {
      r.enqueue(ta(n ? `(${$t(e)},${a})` : a));
    }, onDone() {
      r.close();
    }, onError(a) {
      r.error(a);
    } });
  } });
}
async function ra(e) {
  const t = Os(e), r = t.request, a = r.headers.get("X-Server-Id"), n = r.headers.get("X-Server-Instance"), i = r.headers.has("X-Single-Flight"), o = new URL(r.url);
  let l, u;
  if (a) Fs(typeof a == "string", "Invalid server function"), [l, u] = a.split("#");
  else if (l = o.searchParams.get("id"), u = o.searchParams.get("name"), !l || !u) return new Response(null, { status: 404 });
  const c = ea[l];
  let d;
  if (!c) return new Response(null, { status: 404 });
  d = await c.importer();
  const S = d[c.functionName];
  let w = [];
  if (!n || e.method === "GET") {
    const h = o.searchParams.get("args");
    if (h) {
      const g = JSON.parse(h);
      (g.t ? ze$1(g, { plugins: [te, re, se, ae, F, C$1, ne, ie, le$1, oe] }) : g).forEach((O) => w.push(O));
    }
  }
  if (e.method === "POST") {
    const h = r.headers.get("content-type"), g = e.node.req, O = g instanceof ReadableStream, st = g.body instanceof ReadableStream, de = O && g.locked || st && g.body.locked, fe = O ? g : g.body;
    if ((h == null ? void 0 : h.startsWith("multipart/form-data")) || (h == null ? void 0 : h.startsWith("application/x-www-form-urlencoded"))) w.push(await (de ? r : new Request(r, { ...r, body: fe })).formData());
    else if (h == null ? void 0 : h.startsWith("application/json")) {
      const at = de ? r : new Request(r, { ...r, body: fe });
      w = ze$1(await at.json(), { plugins: [te, re, se, ae, F, C$1, ne, ie, le$1, oe] });
    }
  }
  try {
    let h = await provideRequestEvent(t, async () => (sharedConfig.context = { event: t }, t.locals.serverFunctionMeta = { id: l + "#" + u }, S(...w)));
    if (i && n && (h = await Oe$1(t, h)), h instanceof Response) {
      if (h.headers && h.headers.has("X-Content-Raw")) return h;
      n && (h.headers && ke$1(e, h.headers), h.status && (h.status < 300 || h.status >= 400) && H$1(e, h.status), h.customBody ? h = await h.customBody() : h.body == null && (h = null));
    }
    return n ? (D$1(e, "content-type", "text/javascript"), Ce$1(n, h)) : $e$1(h, r, w);
  } catch (h) {
    if (h instanceof Response) i && n && (h = await Oe$1(t, h)), h.headers && ke$1(e, h.headers), h.status && (!n || h.status < 300 || h.status >= 400) && H$1(e, h.status), h.customBody ? h = h.customBody() : h.body == null && (h = null), D$1(e, "X-Error", "true");
    else if (n) {
      const g = h instanceof Error ? h.message : typeof h == "string" ? h : "true";
      D$1(e, "X-Error", g.replace(/[\r\n]+/g, ""));
    } else h = $e$1(h, r, w, true);
    return n ? (D$1(e, "content-type", "text/javascript"), Ce$1(n, h)) : h;
  }
}
function $e$1(e, t, r, a) {
  const n = new URL(t.url), i = e instanceof Error;
  let o = 302, l;
  return e instanceof Response ? (l = new Headers(e.headers), e.headers.has("Location") && (l.set("Location", new URL(e.headers.get("Location"), n.origin + "").toString()), o = Qs(e))) : l = new Headers({ Location: new URL(t.headers.get("referer")).toString() }), e && l.append("Set-Cookie", `flash=${encodeURIComponent(JSON.stringify({ url: n.pathname + n.search, result: i ? e.message : e, thrown: a, error: i, input: [...r.slice(0, -1), [...r[r.length - 1].entries()]] }))}; Secure; HttpOnly;`), new Response(null, { status: o, headers: l });
}
let Y;
function sa(e) {
  var _a;
  const t = new Headers(e.request.headers), r = Ss(e.nativeEvent), a = e.response.headers.getSetCookie();
  t.delete("cookie");
  let n = false;
  return ((_a = e.nativeEvent.node) == null ? void 0 : _a.req) && (n = true, e.nativeEvent.node.req.headers.cookie = ""), a.forEach((i) => {
    if (!i) return;
    const o = i.split(";")[0], [l, u] = o.split("=");
    l && u && (r[l] = u);
  }), Object.entries(r).forEach(([i, o]) => {
    t.append("cookie", `${i}=${o}`), n && (e.nativeEvent.node.req.headers.cookie += `${i}=${o};`);
  }), t;
}
async function Oe$1(e, t) {
  let r, a = new URL(e.request.headers.get("referer")).toString();
  t instanceof Response && (t.headers.has("X-Revalidate") && (r = t.headers.get("X-Revalidate").split(",")), t.headers.has("Location") && (a = new URL(t.headers.get("Location"), new URL(e.request.url).origin + "").toString()));
  const n = $s(e);
  return n.request = new Request(a, { headers: sa(e) }), await provideRequestEvent(n, async () => {
    await Js(n), Y || (Y = (await import('../build/app-DVfxCScO.mjs')).default), n.router.dataOnly = r || true, n.router.previousUrl = e.request.headers.get("referer");
    try {
      renderToString(() => {
        sharedConfig.context.event = n, Y();
      });
    } catch (l) {
      console.log(l);
    }
    const i = n.router.data;
    if (!i) return t;
    let o = false;
    for (const l in i) i[l] === void 0 ? delete i[l] : o = true;
    return o && (t instanceof Response ? t.customBody && (i._$value = t.customBody()) : (i._$value = t, t = new Response(null, { status: 200 })), t.customBody = () => i, t.headers.set("X-Single-Flight", "true")), t;
  });
}
const ba = eventHandler(ra);

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
const ce = isServer ? (e) => {
  const t = getRequestEvent();
  return t.response.status = e.code, t.response.statusText = e.text, onCleanup(() => !t.nativeEvent.handled && !t.complete && (t.response.status = 200)), null;
} : (e) => null;
var pe = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">500 | Internal Server Error</span>'];
const ue = (e) => {
  let t = false;
  const r = catchError(() => e.children, (s) => {
    console.error(s), t = !!s;
  });
  return t ? [ssr(pe, ssrHydrationKey()), createComponent$1(ce, { code: 500 })] : r;
};
var le = " ";
const de = { style: (e) => ssrElement("style", e.attrs, () => e.children, true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(le), true) : null, noscript: (e) => ssrElement("noscript", e.attrs, () => escape(e.children), true) };
function he(e, t) {
  let { tag: r, attrs: { key: s, ...a } = { key: void 0 }, children: o } = e;
  return de[r]({ attrs: { ...a, nonce: t }, key: s, children: o });
}
var b = ["<script", ">", "<\/script>"], k = ["<script", ' type="module"', "><\/script>"];
const fe = ssr("<!DOCTYPE html>");
function ge(e) {
  const t = getRequestEvent(), r = t.nonce;
  return createComponent$1(NoHydration, { get children() {
    return [fe, createComponent$1(ue, { get children() {
      return createComponent$1(e.document, { get assets() {
        return t.assets.map((s) => he(s));
      }, get scripts() {
        return r ? [ssr(b, ssrHydrationKey() + ssrAttribute("nonce", escape(r, true), false), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(k, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))] : [ssr(b, ssrHydrationKey(), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(k, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
      } });
    } })];
  } });
}
function me(e = {}) {
  let t, r = false;
  const s = (i) => {
    if (t && t !== i) throw new Error("Context conflict");
  };
  let a;
  if (e.asyncContext) {
    const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    i ? a = new i() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const o = () => {
    if (a) {
      const i = a.getStore();
      if (i !== void 0) return i;
    }
    return t;
  };
  return { use: () => {
    const i = o();
    if (i === void 0) throw new Error("Context is not available");
    return i;
  }, tryUse: () => o(), set: (i, n) => {
    n || s(i), t = i, r = true;
  }, unset: () => {
    t = void 0, r = false;
  }, call: (i, n) => {
    s(i), t = i;
    try {
      return a ? a.run(i, n) : n();
    } finally {
      r || (t = void 0);
    }
  }, async callAsync(i, n) {
    t = i;
    const p = () => {
      t = i;
    }, c = () => t === i ? p : void 0;
    $.add(c);
    try {
      const l = a ? a.run(i, n) : n();
      return r || (t = void 0), await l;
    } finally {
      $.delete(c);
    }
  } };
}
function we(e = {}) {
  const t = {};
  return { get(r, s = {}) {
    return t[r] || (t[r] = me({ ...e, ...s })), t[r];
  } };
}
const R = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : {}, A = "__unctx__", ye = R[A] || (R[A] = we()), xe = (e, t = {}) => ye.get(e, t), T = "__unctx_async_handlers__", $ = R[T] || (R[T] = /* @__PURE__ */ new Set());
function Re(e) {
  let t;
  const r = O(e), s = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(r, { ...s, body: e.node.req.body }) : new Request(r, { ...s, get body() {
    return t || (t = $e(e), t);
  } });
}
function Se(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: Re(e), url: O(e) }, e.web.request;
}
function ve() {
  return _e();
}
const D = Symbol("$HTTPEvent");
function Pe(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[D]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function u(e) {
  return function(...t) {
    var _a;
    let r = t[0];
    if (Pe(r)) t[0] = r instanceof H3Event || r.__is_event__ ? r : r[D];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (r = ve(), !r) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      t.unshift(r);
    }
    return e(...t);
  };
}
const O = u(getRequestURL), Ee = u(getRequestIP), C = u(setResponseStatus), H = u(getResponseStatus), be = u(getResponseStatusText), x = u(getResponseHeaders), N = u(getResponseHeader), ke = u(setResponseHeader), Ae = u(appendResponseHeader), Te = u(sendRedirect), $e = u(getRequestWebStream), Ce = u(removeResponseHeader), He = u(Se);
function Ne() {
  var _a;
  return xe("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function _e() {
  return Ne().use().event;
}
const m = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
function qe(e = {}) {
  const t = { options: e, rootNode: I(), staticRoutesMap: {} }, r = (s) => e.strictTrailingSlash ? s : s.replace(/\/$/, "") || "/";
  if (e.routes) for (const s in e.routes) _(t, r(s), e.routes[s]);
  return { ctx: t, lookup: (s) => Le(t, r(s)), insert: (s, a) => _(t, r(s), a), remove: (s) => De(t, r(s)) };
}
function Le(e, t) {
  const r = e.staticRoutesMap[t];
  if (r) return r.data;
  const s = t.split("/"), a = {};
  let o = false, i = null, n = e.rootNode, p = null;
  for (let c = 0; c < s.length; c++) {
    const l = s[c];
    n.wildcardChildNode !== null && (i = n.wildcardChildNode, p = s.slice(c).join("/"));
    const w = n.children.get(l);
    if (w === void 0) {
      if (n && n.placeholderChildren.length > 1) {
        const M = s.length - c;
        n = n.placeholderChildren.find((j) => j.maxDepth === M) || null;
      } else n = n.placeholderChildren[0] || null;
      if (!n) break;
      n.paramName && (a[n.paramName] = l), o = true;
    } else n = w;
  }
  return (n === null || n.data === null) && i !== null && (n = i, a[n.paramName || "_"] = p, o = true), n ? o ? { ...n.data, params: o ? a : void 0 } : n.data : null;
}
function _(e, t, r) {
  let s = true;
  const a = t.split("/");
  let o = e.rootNode, i = 0;
  const n = [o];
  for (const p of a) {
    let c;
    if (c = o.children.get(p)) o = c;
    else {
      const l = Oe(p);
      c = I({ type: l, parent: o }), o.children.set(p, c), l === m.PLACEHOLDER ? (c.paramName = p === "*" ? `_${i++}` : p.slice(1), o.placeholderChildren.push(c), s = false) : l === m.WILDCARD && (o.wildcardChildNode = c, c.paramName = p.slice(3) || "_", s = false), n.push(c), o = c;
    }
  }
  for (const [p, c] of n.entries()) c.maxDepth = Math.max(n.length - p, c.maxDepth || 0);
  return o.data = r, s === true && (e.staticRoutesMap[t] = o), o;
}
function De(e, t) {
  let r = false;
  const s = t.split("/");
  let a = e.rootNode;
  for (const o of s) if (a = a.children.get(o), !a) return r;
  if (a.data) {
    const o = s.at(-1) || "";
    a.data = null, Object.keys(a.children).length === 0 && a.parent && (a.parent.children.delete(o), a.parent.wildcardChildNode = null, a.parent.placeholderChildren = []), r = true;
  }
  return r;
}
function I(e = {}) {
  return { type: e.type || m.NORMAL, maxDepth: 0, parent: e.parent || null, children: /* @__PURE__ */ new Map(), data: e.data || null, paramName: e.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function Oe(e) {
  return e.startsWith("**") ? m.WILDCARD : e[0] === ":" || e === "*" ? m.PLACEHOLDER : m.NORMAL;
}
const Ie = { info: { AUTO_SHOW_WINDOW: false } }, W = [{ page: true, $$route: { require: () => ({ route: Ie }), src: "src/routes/(window-chrome).tsx?pick=route" }, path: "/(window-chrome)", filePath: "/app/apps/desktop/src/routes/(window-chrome).tsx" }, { page: true, path: "/camera", filePath: "/app/apps/desktop/src/routes/camera.tsx" }, { page: true, path: "/capture-area", filePath: "/app/apps/desktop/src/routes/capture-area.tsx" }, { page: true, path: "/debug", filePath: "/app/apps/desktop/src/routes/debug.tsx" }, { page: true, path: "/in-progress-recording", filePath: "/app/apps/desktop/src/routes/in-progress-recording.tsx" }, { page: true, path: "/mode-select", filePath: "/app/apps/desktop/src/routes/mode-select.tsx" }, { page: true, path: "/notifications", filePath: "/app/apps/desktop/src/routes/notifications.tsx" }, { page: true, path: "/recordings-overlay", filePath: "/app/apps/desktop/src/routes/recordings-overlay.tsx" }, { page: true, path: "/window-capture-occluder", filePath: "/app/apps/desktop/src/routes/window-capture-occluder.tsx" }, { page: true, path: "/(window-chrome)/(main)", filePath: "/app/apps/desktop/src/routes/(window-chrome)/(main).tsx" }, { page: true, path: "/(window-chrome)/callback.template", filePath: "/app/apps/desktop/src/routes/(window-chrome)/callback.template.ts" }, { page: true, path: "/(window-chrome)/settings", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings.tsx" }, { page: true, path: "/(window-chrome)/setup", filePath: "/app/apps/desktop/src/routes/(window-chrome)/setup.tsx" }, { page: true, path: "/(window-chrome)/update", filePath: "/app/apps/desktop/src/routes/(window-chrome)/update.tsx" }, { page: true, path: "/(window-chrome)/upgrade", filePath: "/app/apps/desktop/src/routes/(window-chrome)/upgrade.tsx" }, { page: true, path: "/editor/AspectRatioSelect", filePath: "/app/apps/desktop/src/routes/editor/AspectRatioSelect.tsx" }, { page: true, path: "/editor/PresetsDropdown", filePath: "/app/apps/desktop/src/routes/editor/PresetsDropdown.tsx" }, { page: true, path: "/editor/ShadowSettings", filePath: "/app/apps/desktop/src/routes/editor/ShadowSettings.tsx" }, { page: true, path: "/editor/ShareButton", filePath: "/app/apps/desktop/src/routes/editor/ShareButton.tsx" }, { page: true, path: "/editor/", filePath: "/app/apps/desktop/src/routes/editor/index.tsx" }, { page: true, path: "/(window-chrome)/settings/changelog", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/changelog.tsx" }, { page: true, path: "/(window-chrome)/settings/experimental", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/experimental.tsx" }, { page: true, path: "/(window-chrome)/settings/feedback", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/feedback.tsx" }, { page: true, path: "/(window-chrome)/settings/general", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/general.tsx" }, { page: true, path: "/(window-chrome)/settings/hotkeys", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/hotkeys.tsx" }, { page: true, path: "/(window-chrome)/settings/", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/index.tsx" }, { page: true, path: "/(window-chrome)/settings/license", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/license.tsx" }, { page: true, path: "/(window-chrome)/settings/recordings", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/recordings.tsx" }, { page: true, path: "/(window-chrome)/settings/screenshots", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/screenshots.tsx" }, { page: true, path: "/(window-chrome)/settings/integrations/", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/integrations/index.tsx" }, { page: true, path: "/(window-chrome)/settings/integrations/s3-config", filePath: "/app/apps/desktop/src/routes/(window-chrome)/settings/integrations/s3-config.tsx" }];
We(W.filter((e) => e.page));
function We(e) {
  function t(r, s, a, o) {
    const i = Object.values(r).find((n) => a.startsWith(n.id + "/"));
    return i ? (t(i.children || (i.children = []), s, a.slice(i.id.length)), r) : (r.push({ ...s, id: a, path: a.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/") }), r);
  }
  return e.sort((r, s) => r.path.length - s.path.length).reduce((r, s) => t(r, s, s.path, s.path), []);
}
function Me(e, t) {
  const r = Fe.lookup(e);
  if (r && r.route) {
    const s = t === "HEAD" ? r.route.$HEAD || r.route.$GET : r.route[`$${t}`];
    return s === void 0 ? void 0 : { handler: s, params: r.params };
  }
}
function je(e) {
  return e.$HEAD || e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
const Fe = qe({ routes: W.reduce((e, t) => {
  if (!je(t)) return e;
  let r = t.path.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/").replace(/\*([^/]*)/g, (s, a) => `**:${a}`).split("/").map((s) => s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s)).join("/");
  if (/:[^/]*\?/g.test(r)) throw new Error(`Optional parameters are not supported in API routes: ${r}`);
  if (e[r]) throw new Error(`Duplicate API routes for "${r}" found at "${e[r].route.path}" and "${t.path}"`);
  return e[r] = { route: t }, e;
}, {}) }), v = "solidFetchEvent";
function Ue(e) {
  return { request: He(e), response: Ke(e), clientAddress: Ee(e), locals: {}, nativeEvent: e };
}
function Be(e) {
  if (!e.context[v]) {
    const t = Ue(e);
    e.context[v] = t;
  }
  return e.context[v];
}
class Ge {
  constructor(t) {
    __publicField(this, "event");
    this.event = t;
  }
  get(t) {
    const r = N(this.event, t);
    return Array.isArray(r) ? r.join(", ") : r || null;
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, r) {
    return ke(this.event, t, r);
  }
  delete(t) {
    return Ce(this.event, t);
  }
  append(t, r) {
    Ae(this.event, t, r);
  }
  getSetCookie() {
    const t = N(this.event, "Set-Cookie");
    return Array.isArray(t) ? t : [t];
  }
  forEach(t) {
    return Object.entries(x(this.event)).forEach(([r, s]) => t(Array.isArray(s) ? s.join(", ") : s, r, this));
  }
  entries() {
    return Object.entries(x(this.event)).map(([t, r]) => [t, Array.isArray(r) ? r.join(", ") : r])[Symbol.iterator]();
  }
  keys() {
    return Object.keys(x(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(x(this.event)).map((t) => Array.isArray(t) ? t.join(", ") : t)[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
}
function Ke(e) {
  return { get status() {
    return H(e);
  }, set status(t) {
    C(e, t);
  }, get statusText() {
    return be(e);
  }, set statusText(t) {
    C(e, H(e), t);
  }, headers: new Ge(e) };
}
const ze = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function Je(e) {
  return e.status && ze.has(e.status) ? e.status : 302;
}
function Ye(e, t, r = {}, s) {
  return eventHandler({ handler: (a) => {
    const o = Be(a);
    return provideRequestEvent(o, async () => {
      const i = Me(new URL(o.request.url).pathname, o.request.method);
      if (i) {
        const c = await i.handler.import(), l = o.request.method === "HEAD" ? c.HEAD || c.GET : c[o.request.method];
        o.params = i.params || {}, sharedConfig.context = { event: o };
        const w = await l(o);
        if (w !== void 0) return w;
        if (o.request.method !== "GET") throw new Error(`API handler for ${o.request.method} "${o.request.url}" did not return a response.`);
      }
      const n = await t(o), p = typeof r == "function" ? await r(n) : { ...r };
      p.mode, p.nonce && (n.nonce = p.nonce);
      {
        const c = renderToString(() => (sharedConfig.context.event = n, e(n)), p);
        if (n.complete = true, n.response && n.response.headers.get("Location")) {
          const l = Je(n.response);
          return Te(a, n.response.headers.get("Location"), l);
        }
        return c;
      }
    });
  } });
}
function Qe(e, t, r) {
  return Ye(e, Ve, t);
}
async function Ve(e) {
  const t = globalThis.MANIFEST.client;
  return Object.assign(e, { manifest: await t.json(), assets: [...await t.inputs[t.handler].assets()], routes: [], complete: false, $islands: /* @__PURE__ */ new Set() });
}
var Xe = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/assets/logo.svg">', "</head>"], Ze = ["<html", ' lang="en" class="overflow-hidden h-full">', '<body class="w-screen h-screen cursor-default select-none"><div id="app" class="h-full text-[--text-primary]">', "</div><!--$-->", "<!--/--></body></html>"];
const ot = Qe(() => createComponent$1(ge, { document: ({ assets: e, children: t, scripts: r }) => ssr(Ze, ssrHydrationKey(), createComponent$1(NoHydration, { get children() {
  return ssr(Xe, escape(e));
} }), escape(t), escape(r)) }));

const handlers = [
  { route: '', handler: _tDg6es, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: ba, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: ot, lazy: false, middleware: true, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const nitroApp = useNitroApp();
const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { closePrerenderer as c, localFetch as l, wa as w };
//# sourceMappingURL=nitro.mjs.map
