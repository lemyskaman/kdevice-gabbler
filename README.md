# kdevice-gabbler

A small http service that exposes to local network hardware info as json

This program will start a expressjs http service, that retuns some hardware information when a request is made to the local ip of the device that runs it.

Use it together with [kdevice-gabbler-finder](https://github.com/lemyskaman/kdevice-gabbler-finder) and you will ease the process of gattering the ips of the LAN conected devices when you have no control over the dhcp automatic ip LAN assigment. 


## Dependencies
In order for this program to run you need 

    -bash (terminal)
    -systemd (if you are planing to install it as a service)
    -nodejs lts
    -npm 

In Debian and some debian based linux distributions you might install nodedjs and npm with:

    $ apt-get install nodejs npm  

## Usage:
Its pretty straight forward of what you must be done with any other nodejs application. 

Clone the repo

    $ git clone https://github.com/lemyskaman/kdevice-gabbler.git

Move to the kdevice-gabbler folder:

    $ cd kdevice-gabbler

Install nodejs dependencies:

    $ npm install 

Run the js script

    $ npm start

or

    $ nodejs kdevice-gabbler.js


### Installing as a Service
Lets say you want this program to runs every time your device boots up 