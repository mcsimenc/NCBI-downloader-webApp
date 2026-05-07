module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '13.56.187.242',
      username: 'ubuntu',
      pem: '~/.ssh/Mathew2026.pem'
      // password: 'server-password'
      // or neither for authenticate from ssh-agent
    }
  },

  meteor: {
    // TODO: change app name and path
    name: 'NCBI-downloader-webApp',
    path: '/home/server/5_genomics/2_ncbi_downloader/NCBI-downloader-webApp',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'https://virtualapprentice.us',
      MONGO_URL: 'mongodb+srv://mcsimenc_db_user:mS6jFUJULxolQqds@ncbiseqdownloader2026.0x8jvwt.mongodb.net/?appName=NCBISeqDownloader2026',

      // PORT: 443
    },

    ssl: { // (optional)
      // Enables let's encrypt (optional)
      autogenerate: {
        email: 'mcsimenc@gmail.com',
        // comma seperated list of domains
        domains: 'virtualapprentice.us'
      }
    },

    docker: {
      // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
      image: 'zodern/meteor:root',
      // imagePort: 80, // (default: 80, some images EXPOSE different ports)
    },

    // This is the maximum time in seconds it will wait
    // for your app to start
    // Add 30 seconds if the server has 512mb of ram
    // And 30 more if you have binary npm dependencies.
    deployCheckWaitTime: 60,

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },
};
