const fs = require('fs');
const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const cors = require('@koa/cors')

const app = new Koa()
const router = new Router()
const PORT = 5000

app
    .use(bodyParser())
    .use(cors())

router.post('/save-image', async (ctx, next) => {
    try {
        const data = ctx.request.body.image;
        const buffer = Buffer.from(data, 'base64'); 
        await fs.promises.writeFile('images/image.png', buffer);
        ctx.response.status = 200;
        ctx.response.body = { message: 'Image saved successfully' };
    } catch (err) {
        ctx.response.status = 500;
        ctx.response.body = { message: 'Failed to save image', error: err.message };
    }
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});