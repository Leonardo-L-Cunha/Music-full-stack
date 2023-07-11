/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
    sassOptions:{
        includePaths:[path.join(__dirname, 'scss')]
    },
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: '**'
            }
        ]
    }
}

module.exports = nextConfig
