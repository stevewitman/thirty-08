module.exports = {
  name: 'app08',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app08',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
