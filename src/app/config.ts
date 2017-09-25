import { Injectable } from '@angular/core'

const config = {
  url: {
    DEV: 'http://dev.mentimun.co.id',
    STAGING: 'http://staging.mentimun.co.id',
    PROD: 'https://mentimun.co.id'
  },
  aws: {
    region: 'ap-southeast-1',
    path: {
      DEV: 'https://mentimun-application.s3-ap-southeast-1.amazonaws.com/mpr-dev/order-vendor/',
      STAGING: 'https://mentimun-application.s3-ap-southeast-1.amazonaws.com/mpr-staging/order-vendor/',
      PROD: 'https://mentimun-application.s3-ap-southeast-1.amazonaws.com/mpr/order-vendor/'
    },
    bucket: {
      DEV: 'mentimun-application/mpr-dev/order-vendor',
      STAGING: 'mentimun-application/mpr-staging/order-vendor',
      PROD: 'mentimun-application/mpr/order-vendor'
    }
  },
  build: 'DEV'
}

@Injectable()
export class AppConfig {

  getConfig() {
    return {
      BUILD: config.build,
      URL_PATH: config.url[config.build],
      URL: {
        LOGIN: `${config.url[config.build]}/MentimunVendorAPI/api/v1/signin`
      }
    }
  }

}
