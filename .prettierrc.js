module.exports = {
    printWidth: 80,
    tabWidth: 2,
    singleQuote: true,
    semi: true,
    arrowParens: "always",
    endOfLine: 'auto',
    trailingComma:  'all',
    overrides: [
        {
            files: '*.{js,jsx,tsx,ts,scss,json,html}',
            options: {
                tabWidth: 4,
            },
        },
    ],
};