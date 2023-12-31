"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserManager = void 0;
const _1 = require(".");
const puppeteer_1 = require("puppeteer");
class BrowserManager {
    static instance;
    static getInstance() {
        if (!BrowserManager.instance) {
            BrowserManager.instance = new BrowserManager();
        }
        return BrowserManager.instance;
    }
    browser;
    constructor() {
        this.browser = null;
    }
    async init() {
        if (this.browser)
            return;
        this.browser = await (0, puppeteer_1.launch)(await _1.ConfigProvider.getPupeeterConfig());
    }
    async close() {
        if (!this.browser)
            return;
        await this.browser.close();
        this.browser = null;
    }
    async spawnBlankPage() {
        if (!this.browser) {
            throw new Error(`${this.constructor.name} is not initialized`);
        }
        return this.browser?.newPage();
    }
}
exports.BrowserManager = BrowserManager;
