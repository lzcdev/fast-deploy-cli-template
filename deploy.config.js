const config = {
  projectName: 'xxx商城项目',
  dev: {
    name: 'dev',
    sshConfig: {
      host: '',
      port: 22,
      username: 'root',
      password: '',
    },
    webDir: '/root',
    distPath: 'dist'
  },
  pre: {
    name: 'pre',
    sshConfig: {
      host: '',
      port: 22,
      username: 'root',
      password: '',
    },
    webDir: '/root',
    distPath: 'dist'
  },
  pro: {
    name: 'pro',
    sshConfig: {
      host: '',
      port: 22,
      username: 'root',
      password: '',
    },
    webDir: '/root',
    distPath: 'dist'
  }
}

module.exports = config