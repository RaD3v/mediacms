FRONTEND_HOST = 'https://RaD3v.Club/'
PORTAL_NAME = 'RaD3v.Club'
PORTAL_DESCRIPTION = "RaD3v.Club Videos"
LANGUAGE_CODE = "en-us"
SECRET_KEY = 'ma!s3^b-cw!f#7s6s0m3*jx77a@riw(7701**(r=ww%w!2+yk2'
POSTGRES_HOST = 'db'
REDIS_LOCATION = "redis://redis:6379/1"
CAN_ADD_MEDIA = "all"
LOGIN_ALLOWED = True
REGISTER_ALLOWED = False
CAN_REPORT_MEDIA = False
USERS_CAN_SELF_REGISTER = False
GLOBAL_LOGIN_REQUIRED = True
UPLOAD_MAX_SIZE = 1600 * 2048 * 2000 * 10
ACCOUNT_EMAIL_REQUIRED = True  # new users need to specify email

DEFAULT_THEME = "dark"

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
DEFAULT_FROM_EMAIL = 'admin@rad3v.club'
EMAIL_HOST_PASSWORD = 'fzokdzcnmqsfqtjg'
EMAIL_HOST_USER = 'rad3v.club@gmail.com'
EMAIL_USE_TLS = False
EMAIL_USE_SSL = True
SERVER_EMAIL = DEFAULT_FROM_EMAIL
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 465
ADMIN_EMAIL_LIST = ['rad3v.bg@gmail.com']

USERS_NOTIFICATIONS = {
    'MEDIA_ADDED': True,
}

ADMINS_NOTIFICATIONS = {
    'NEW_USER': True,
    'MEDIA_ADDED': True,
    'MEDIA_REPORTED': True,
}

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "mediacms",
        "HOST": POSTGRES_HOST,
        "PORT": "5432",
        "USER": "mediacms",
        "PASSWORD": "mediacms",
    }
}

CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": REDIS_LOCATION,
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        },
    }
}

# CELERY STUFF
BROKER_URL = REDIS_LOCATION
CELERY_RESULT_BACKEND = BROKER_URL

MP4HLS_COMMAND = "/home/mediacms.io/bento4/bin/mp4hls"

DEBUG = False
