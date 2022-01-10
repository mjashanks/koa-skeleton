const Koa = require('koa');
const Router = require("@koa/router");
const koaBody = require('koa-body');
const context = require('koa/lib/context');
const app = new Koa();

const router = new Router();

app.use(koaBody());

router.get("/", async ctx => {
  ctx.body = JSON.stringify({success:true});
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);