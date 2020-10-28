module.exports = {
    env: {
        node: true,
        es6: true
    },
    extends: ["airbnb-base", "prettier", "plugin:prettier/recommended"],
    plugins: ["prettier"],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "prettier/prettier": "error",
        "no-underscore-dangle": 0,
        "no-console": [0],
        "import/no-extraneous-dependencies": 0,
        "lines-around-directive": 0,
        strict: 0,
        "no-param-reassign": 0,
        "consistent-return": 0,
        "func-names": 0,
	    "radix": 0
    }
};