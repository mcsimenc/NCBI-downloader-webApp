Using Meteor UP (mup): https://meteor-up.com/getting-started.html

1. Clone repository
2. Install mup: `npm install mup`
3. Install meteor: `curl https://install.meteor.com/ | sh`
4. Edit `.deploy/mup.js` as necessary
5. `mup setup`
6. `mup deploy`


If mup fails to download packages, try first:
```
sudo pacman -Syu ca-certificates ca-certificates-utils ca-certificates-mozilla
sudo trust extract-compat
export NODE_EXTRA_CA_CERTS=/etc/ssl/certs/ca-certificates.crt


NOTES:
1GB RAM is needed for mup
