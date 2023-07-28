"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigProvider = void 0;
class ConfigProvider {
    static async getPupeeterConfig() {
        return {
            headless: process.env.NODE_ENV === "production" ? "new" : false,
            args: process.env.NODE_ENV === "production"
                ? ["--no-sandbox", "--disable-setuid-sandbox"]
                : [],
        };
    }
}
exports.ConfigProvider = ConfigProvider;
