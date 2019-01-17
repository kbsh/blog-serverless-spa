FROM nginx:1.15.6

CMD envsubst \
  # envsubstで置換する環境変数
  '$$NGINX_PORT $$ROOT' \
  # configファイルを上書き
  < /etc/nginx/conf.d/tmp > /etc/nginx/conf.d/default.conf && \
  # nginx起動
  nginx -g 'daemon off;'

