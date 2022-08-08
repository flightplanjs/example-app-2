module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  plugins: [require('prettier-plugin-tailwindcss')],
  overrides: [
    {
      files: '*.scss',
      options: {
        parser: 'scss',
        trailingComma: 'none',
        singleQuote: false,
      },
    },
    {
      files: '*.hbs',
      options: {
        parser: 'glimmer',
        singleQuote: false,
      },
    },
  ],
  tailwindConfig: './apps/my-ui/tailwind.config.js',
};
