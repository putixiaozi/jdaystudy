# JdayStudy 复杂网络分析工具箱 · 官网

面向科研工作者的零代码网络分析软件系列官网，介绍中心性度量、脆弱性-鲁棒性分析、网络韧性、SIR 传播仿真、加边策略等 7 款图形界面客户端。

- 在线预览：https://putixiaozi.github.io/jdaystudy/
- 全部软件与教程通过微信公众号 **JdayStudy** 发布

## 说明
- `index.html` — 网站本体（单文件，含全部样式与脚本，无外部依赖）
- `assets/qrcode.png` — 公众号二维码

内容整理自微信公众号 JdayStudy 原创推文。

## 知行课堂静态展示

- 官网导航中的“知行课堂”进入 `https://jdaystudy.day/classroom/`，提供书本与论文研读功能介绍。
- 点击“后端运行环境”、上传、视频和 PPT 生成功能时显示“联系 JdayStudy”及官网公众号二维码。静态页面不上传文件、不连接模型。
- 发布文件位于 `app/public/classroom/`，来自独立知行课堂项目的 `npm run build:static`；不包含本机 `.env`、用户文件或已有成果。
- 原网站及游戏发布方式不变。

## 牛牛游戏

- 官网导航中的“牛牛游戏”进入 `https://jdaystudy.day/games/`。
- 子页显示“牛牛喜欢的游戏”和“微信公众号Jdaystudy”，包含五子棋、动物翻翻乐和鲸鱼迷宫。
- Android 3.0.1 安装包：`https://jdaystudy.day/games/downloads/paper-playground.apk?v=3.0.1`；安装说明在 `/games/download.html`。APK 沿用原签名，可覆盖安装旧版。
- 游戏源发布文件保存在 `app/public/games/`；在 `app` 执行 `npm ci`、`npm run build` 后，将 `app/dist` 内容复制到仓库根目录发布，保留 `.nojekyll` 和 `CNAME`。
- 原科研主页和公众号文章入口保持原样，游戏子页提供返回官网的链接。
