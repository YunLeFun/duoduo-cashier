module.exports = {
  access_token_api:
    process.env.DEPLOY_ENV === 'GH_PAGES'
      ? ''
      : 'https://bird.ioliu.cn/v2?url=' +
        'https://github.com/login/oauth/access_token',
  authorize_api: 'https://github.com/login/oauth/authorize',
  client_id: '52583d9434cbb792037c',
  client_secret: 'c4f67cc0329e031e5c6772608ea157a3c8761aac',
  scope: ['read:user']
}
