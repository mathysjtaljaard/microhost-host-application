const local_remotes = {
    qrcode: `qrcode@http://localhost:3002/remoteEntry.js`,
}

const prod_remotes = {
    qrcode: `qrcode@https://mathysjtaljaard.github.io/qr-generator/remoteEntry.js`,
}

module.exports = {
    production: prod_remotes,
    local: local_remotes
}