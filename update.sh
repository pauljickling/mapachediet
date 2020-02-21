#!/bin/bash
set -eu
echo "Creating new build for production..."
gatsby build
echo "Updating build..."
sudo cp -r public/ ~/var/www/
echo "Gracefully restarting Apache server..."
sudo service apache2 restart
echo "Done!"
