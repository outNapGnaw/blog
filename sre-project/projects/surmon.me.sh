#!/bin/bash
 
WEB_PATH='/usr/local/wwwroot/outNapGnaw.me'
WEB_USER='root'
WEB_USERGROUP='root'
 
echo "Start deployment outNapGnaw.me"
cd $WEB_PATH
echo "pulling source code..."
# git reset --hard origin/release
# git clean -f
git pull
git checkout master
echo "changing permissions..."
chown -R $WEB_USER:$WEB_USERGROUP $WEB_PATH
chmod -R 777 $WEB_PATH
sudo pm2 stop outNapGnaw.me
pm2 stop nodepress
sync && echo 3 | sudo tee /proc/sys/vm/drop_caches
npm run build
sync && echo 3 | sudo tee /proc/sys/vm/drop_caches
sudo pm2 restart outNapGnaw.me
pm2 restart nodepress
echo "Finished."
