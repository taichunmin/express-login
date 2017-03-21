# express 登入系統練習

## 預計功能

* 一般使用者註冊
* 一般使用者登入
* Facebook 註冊
* Facebook 登入
* Google 註冊
* Google 登入
* 綁定其他登入方式
* 解除綁定其他登入方式 (不能解除目前的登入方式)
* 刪除帳號
* 登出

## 特殊項目

* 使用 `express` 框架（`express-generator`）加上 `pug` 樣板
* 密碼需用雜湊儲存
  * <https://github.com/kelektiv/node.bcrypt.js>
* MySQL 使用 `Sequelize` 和 `sequelize-cli`
  * <https://github.com/sequelize/sequelize>
  * <https://github.com/sequelize/cli>
* 使用 `co` 和 `co-express` 來寫
  * <https://github.com/tj/co>
  * <https://github.com/mciparelli/co-express>
* Promise 使用 `bluebird`
  * <https://github.com/petkaantonov/bluebird>
* 研究如何寫自動化測試

## 筆記

### express-generator

```sh
cd ~/git/express-login
express --pug --git -f .
npm install
```

### nodemon

```sh
npm i -g nodemon
```

* `nodemon.json`

```json
{
  "restartable": "rs",
  "ignore": [],
  "verbose": true,
  "execMap": {
    "js": "node --harmony"
  },
  "env": {
    "DEBUG": "express-login:*",
    "NODE_ENV": "development"
  },
  "ext": "js json pug"
}
```

### sequelize-cli
