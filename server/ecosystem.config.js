module.exports = {
	apps: [
		{
			name: "mainServer",
			script: "./server/index.js",
			autorestart: true,
			instances: 3,
			exec_mode: "cluster",
			watch: false,
			max_memory_restart: "1G",
			instance_var: "INSTANCE_ID",
			env_local: {
				NODE_ENV: "local",
			},
			env_development: {
				NODE_ENV: "development",
			},
			env_production: {
				NODE_ENV: "production",
			},
		},
	],
};
