const { quote } = require('shell-quote');
const { ESLint } = require('eslint');

const eslint = new ESLint();
const isWin = process.platform === 'win32';

const fileTypesToLintAndFormat = ['js', 'jsx', 'mjs', 'ts', 'tsx', 'mts', 'json', 'md', 'mdx', 'css', 'html', 'yml', 'yaml', 'scss'];
const rustFileTypes = ['rs'];

module.exports = Object.assign(
    {},
    ...fileTypesToLintAndFormat.map((ext) => ({
        [`**/*.{${ext}}`]: (filenames) => {
            console.log('filenames --> ', filenames)
            console.log('filenames --> 111111', filenames)
            const escapedFileNames = filenames
                .map((filename) => (isWin ? filename : escape([filename])))
                .join(' ');

            // Only run ESLint for JavaScript and TypeScript files
            const lintCommand = ext.match(/^(js|jsx|mjs|ts|tsx|mts)$/i)
                ? `eslint --no-ignore --max-warnings=0 --fix ${filenames
                    .filter((file) => !eslint.isPathIgnored(file))
                    .map((f) => `"${f}"`)
                    .join(' ')}`
                : '';

            return [
                // `prettier --with-node-modules --ignore-path .prettierignore_staged --write ${escapedFileNames}`,
                `prettier --write ${escapedFileNames}`,
                lintCommand,
                `git add ${escapedFileNames}`,
            ].filter(Boolean);
        },
    })),
    ...rustFileTypes.map((ext) => ({
        [`**/*.{${ext}}`]: (filenames) => {
            const escapedFileNames = filenames
                .map((filename) => (isWin ? filename : escape([filename])))
                .join(' ');
            return [`cargo fmt -- ${escapedFileNames}`, `git add ${escapedFileNames}`];
        },
    })),
);

function escape(str) {
    const escaped = quote(str);
    return escaped.replace(/\\@/g, '@');
}