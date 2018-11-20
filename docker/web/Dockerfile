FROM nginx:1.15.6

CMD envsubst < /etc/nginx/conf.d/tmp > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

