const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon.svg","practica1.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.RA2mlN_G.js","app":"_app/immutable/entry/app.SC_fNIcB.js","imports":["_app/immutable/entry/start.RA2mlN_G.js","_app/immutable/chunks/entry.COfADbOC.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.SC_fNIcB.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Cw_2IG9P.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-B2BRG-mN.js')),
			__memo(() => import('./chunks/1-CiGMJqet.js')),
			__memo(() => import('./chunks/2-BkVyQZm1.js')),
			__memo(() => import('./chunks/3-_hlmAgWN.js')),
			__memo(() => import('./chunks/4-N9GlI2r-.js')),
			__memo(() => import('./chunks/5-1Tx1_g3z.js'))
		],
		routes: [
			{
				id: "/(common)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(common)/practica1",
				pattern: /^\/practica1\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(common)/practica2",
				pattern: /^\/practica2\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
