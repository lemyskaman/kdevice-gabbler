'use strict';
const { networkInterfaces, hostname } = require('os');
const nets = networkInterfaces();
const host = hostname();
const express = require('express');
const { json } = require('express/lib/response');
const app = express()
const port = 7777

app.get('/', (req, res) => {
    const interfaces = Object.create(null); // Or just '{}', an empty object
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
            const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
            if (net.family === familyV4Value && !net.internal) {
                if (!interfaces[name]) {
                    interfaces[name] = {};
                }
                interfaces[name][net.mac] = net.address
            }
        }
    }
    res.setHeader('Content-Type', 'application/json')
    res.json({
        "hostname": host,
        "netinterfaces": interfaces
    })
})

app.listen(port, () => {
    console.log(`kdevice-gabbler  is listening at port: ${port}`)
})