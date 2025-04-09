/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            "async_hooks": false,
            "fs": false,
            "os": false,
            "path": false,
            "net": false,
            "dns": false,
            "tls": false,
            "crypto": false,
            "stream": false,
            "http": false,
            "https": false,
            "zlib": false,
            "events": false,
            "url": false,
            "util": false,
            "buffer": false,
            "querystring": false,
        };

        config.resolve.alias = {
            ...config.resolve.alias,
            "node:async_hooks": "async_hooks",
            "node:fs": "fs",
            "node:os": "os",
            "node:path": "path",
            "node:net": "net",
            "node:dns": "dns",
            "node:tls": "tls",
            "node:crypto": "crypto",
            "node:stream": "stream",
            "node:http": "http",
            "node:https": "https",
            "node:zlib": "zlib",
            "node:events": "events",
            "node:url": "url",
            "node:util": "util",
            "node:buffer": "buffer",
            "node:querystring": "querystring",
        };
        return config;
    }
};

export default nextConfig;
