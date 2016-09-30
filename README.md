YouTube Offline Server
==========
A NodeJS server application that manages all the same assets of YouTube without relying on YouTube's servers.


Overview
========
This is in alpha and should not be used yet. I’ll update the readme as it progresses. When this message is no longer here that is when it will be ready for use. 

[![Click here to lend your support to YouTube Offline Server and make a donation at pledgie.com!](https://pledgie.com/campaigns/32647.png?skin_name=chrome)](https://pledgie.com/campaigns/ 32647)

Quick start
==========
1. Install the project dependencies using npm

    npm install 

2. Start the development node server

    npm run dev


Requirements
============
[TBD]


Installation
============
[TBD]

Contribute
============
When committing code don't include the bin directory. The bin is compiled by webpack and I want to keep this repo slim and clutter free. On first run webpack will make the bin directory and it's contents for you. Any commits that include the bin directory will be rejected. Lets keep this repo clean of clutter. 


Features
========

Import Profile Data
--------------
One click pull down all your YouTube data to your own local server for offline use.

Advanced Categorization System
--------------
YouTube gives you basic ability to make play lists but now with the offline server you can group users, subscriptions, videos.


Enhanced Block List
--------------
From the point of install you are already given our global block list to keep you from harm from people we have already deemed.
not acceptable. You can extend this list with more users, and content. This can then be sent back to our main server to let us 
update our global block list on a per block basis. 


Offline mode media
--------------
Have you ever had a video in a play list just to find it has been removed later on. With offline server you will have the option 
to pull down a copy of the video to your local server for replicability even if the original copy has been removed from YouTube.

Media Transformation
--------------
When you select media to be copied locally the server has the ability to convert that from its flv format to other formats that 
can be better used by the system. (ogg, mp4, mp3).

Music Lib
--------------
music on YouTube is resource intensive as they send you a video. You can select a video as a song and it can download then 
convert the content to an mp3 stripping it of the video data. It will then update the mp3 with data (album, artist, ...) so 
that it can be tracked by the system for later search for music. Music can then be grouped into play lists.

