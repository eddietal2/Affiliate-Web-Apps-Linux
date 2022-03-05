# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi

# Uncomment the following line if you don't like systemctl's auto-paging feature:
# export SYSTEMD_PAGER=

# User specific aliases and functions

#BASH
alias edit-bash="sudo nano .bashrc && source .bashrc"
alias view-bash="clear && cat .bashrc"

#NGINX
alias view-index-html="ls /usr/share/nginx/html"
alias copy-www="sudo cp -R www/* /usr/share/nginx/html"
alias copy-www-admin="sudo cp -R www-admin/* /usr/share/nginx/html-admin"
alias rs-nginx="sudo systemctl restart nginx"
alias st-nginx="sudo systemctl status nginx"
alias reload-nginx="sudo systemctl reload nginx"
alias config-nginx="sudo nano /etc/nginx/nginx.conf"
alias view-config-nginx="cat /etc/nginx/nginx.conf"

#NODE
alias node-affil-server="cd Affiliate-Template-Server && npm start"
alias node-affil-server-forever="cd Affiliate-Template-Server && forever server.ts"
