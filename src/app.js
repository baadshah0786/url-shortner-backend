const express = require('express');
const cors = require('cors');
const AdminRoutes = require('./router/admin/admin.routes')
const AuthRouter = require('./router/auth/auth.routes')
const GlobalRoutes = require('./router/global/global.routes')
const app = express();
app.use(cors({ origin: 'https://url-shortr.vercel.app' }))
app.use(express.json())
app.use("/auth", AuthRouter)
app.use(GlobalRoutes)
app.use("/admin", AdminRoutes)
app.use('/', (req, res) => {
    res.send("Url Shortner Working Fine");
})
module.exports = app;