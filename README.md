# kdevice-gabbler

A small http service that exposes to local network hardware info as json

When installed this program will start a expressjs http service with just one route, that retuns some hardware information: 



### Just:

clone and run:

    npm start


or if you are on linux run as root: 


    ./install_device-gabbler

the above script will create a copy on your opt directory and them creates a systemd unit service to run the kdevice-gabbler script as daemon  