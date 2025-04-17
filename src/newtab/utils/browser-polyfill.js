/**
 * 浏览器API兼容层
 * 专为Firefox扩展设计
 */

// 根据环境选择合适的API
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

// 导出统一的API接口
export default browserAPI;

// 替换所有直接使用chrome.xxx的地方
export const tabs = browserAPI.tabs;
export const storage = browserAPI.storage;
export const runtime = browserAPI.runtime;
export const windows = browserAPI.windows;
export const contextMenus = browserAPI.contextMenus;