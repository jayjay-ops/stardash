#!/usr/bin/bash

apt-get install nodejs
apt-get install libwebp
apt-get install ffmpeg
apt-get install wget
apt-get install curl
apt-get install tesseract
apt-get install mmv
apt-get install python
apt-get install pip
apt-get install graphicsmagick
apt-get install sox pulseaudio

wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"



npm i imgbb-uploader
npm install beeper
npm i
pip install -U yt-dlp
node index

echo "[*] Shiba has installed all dependencies, please run the command \"node index\" to start the script"
echo "Updates : avaible in command .updates"
