const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'Dark Mode',
    hook: {
        'dizquetv:Start': function() {
            console.log('This Is HOOK!!')
        },
        'dizquetv:WEB:CustomCss': function() {
            return new Promise((resolve, reject) => {
                const cssContent = fs.readFileSync(path.join(__dirname, 'web', 'style.css'))
                resolve(cssContent);
            });
        },
        'dizquetv:WEB:CustomJs': function() {
            return new Promise((resolve, reject) => {
                const jsContent = fs.readFileSync(path.join(__dirname, 'web', 'dark-mode.js'))
                resolve(jsContent);
            });
        },
        'dizquetv:WEB:RegisterSettings': () => {
            return {
                menuTitle: 'Dark Mode',
                element: 'dark-mode-settings'
            }
        }
    },
}
