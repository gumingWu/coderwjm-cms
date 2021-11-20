const types = ['feat', 'docs', 'style', 'test', 'build']

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types],
    'subject-empty': [2, 'never'],
    'header-max-length': [2, 'always', 50]
  }
}
