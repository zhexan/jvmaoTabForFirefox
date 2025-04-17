<p align="center">
    <a href="https://jvmao.net/" target="_blank" rel="noopener noreferrer">
        <img width="100" src="https://i.v2ex.co/f37S9mrrb.png" alt="橘猫起始页 logo" />
    </a>
</p>

<p align="center"><b>橘猫起始页</b></p>

------------------------------

### 介绍
一个浏览器新标签页插件
###### 详细说明：
1. 外观与显示模式：简洁界面，仅有壁纸和搜索框，也可设置成有时间和快捷链接的样式，并且支持暗黑模式。
1. 聚合搜索：集成该功能，支持快捷键切换及自定义搜索源，搜索结果页罗列其他搜索图标，点击可跳转。
1. 壁纸功能：默认支持必应壁纸和自定义上传，还可设置第二壁纸，默认不显示，长按壁纸显示。
1. 抽屉功能：用于存放网址，可添加、拖拽网址，一键添加已打开网址，右击分组名称可一键打开或复制网址，数据存放在本地，支持 wevdav 接口同步数据，按特定键盘操作可激活抽屉暗格存放私密网址。
1. 便签功能：基础便签可临时记录事情，首屏任意位置双击可召唤快捷便签并支持拖拽；框选网页文本或图片后右击可快速保存到便签；首屏添加的便签右击头部可变为时间胶囊。

### 相关介绍
本仓库fork自https://github.com/mumingfang/jvmaoTab，并二次开发，使其支持firefox，由于不懂javascript所以全部由AI开发。
### 安装
```bash
npm install // 安装依赖
```
```bash
node build-firefox.js // firefox插件
```
### 使用
**临时使用**
打开Firefox浏览器，输入about:debugging，点击“此 Firefox”，点击“载入临时附加组件”，选择manifest.json文件，点击“打开”，插件即可使用。
**永久使用**
如果您想将其安装到Firefox的扩展程序中。则需要在开发者中心提交审核。我提交了，但未公开。但我提供了一个版本在根目录下，将jvmaoTab.xpi文件拖入附加组件管理器中即可。
### 未解决问题
网站图标无法显示



