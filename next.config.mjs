/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
console.log("## isProduction ==>", isProduction);
const nextConfig = {
    basePath: isProduction ? "/v1" : "",
    assetPrefix: isProduction ? "/v1/" : "", // 👈 ensure static files resolve correctly

    // basePath:   "/v1",
    output : "export",
    images: {
        unoptimized: true,
    },
    distDir: "dist",
};

export default nextConfig;
