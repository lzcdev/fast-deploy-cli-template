const config = [
  {
    name: 'dev',
    script: "npm run build", 
    sshConfig: {
      host: '',
      port: 22,
      username: '',
      password: '',
    },
    webDir: '',
    distPath: 'dist'
  },
  {
    name: 'pro',
    script: "npm run build", 
    sshConfig: {
      host: '',
      port: 22,
      username: '',
      password: '',
    },
    webDir: '',
    distPath: 'dist'
  }
]

module.exports = config