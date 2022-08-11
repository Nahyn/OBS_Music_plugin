### Updating for the tracklist_editor update

Since I moved the tracklist from the inside of "music_plugin.html" to a dedicated file, you should copy/paste your playlist in a file called "tracklist.json"

What you copy should look like this :

![image](https://user-images.githubusercontent.com/13376018/184088480-0678f279-ee28-4cd9-b293-9f926677434d.png)

If there is a problem, don't worry, the tracklist editor makes it way easier and faster to set up the playlist now

---



# OBS_Music_plugin

In term of security, this plugin can run entirely offline and use Javascript, a language having built-in securities to not access anything outside the folder it's located in

To download it, just click on the top-right "CODE" button and "Download as Zip", then unzip it

## Setting up the music

1. Put the tracks you want in the "music" folder 

2. Open the tracklist_editor.html

3. Add the files to the editor and click "download" to create a "tracklist.json" file

4. Go wherever the file have been downloaded and move it in the same folder as "music_plugin.html"

![image](https://user-images.githubusercontent.com/13376018/184087409-b38bfc8a-d278-4755-bc49-d42b1e5b9212.png)

There you go ! You should be able to open "music_plugin.html" in your favorite browser and it should work !

# Adding the plugin in OBS

To add the plugin in OBS, you just "Add a new Source > Browser" and then, you will have 2 things to change : 

1. Check "Local file" and find the "music_plugin.html"

![image](https://user-images.githubusercontent.com/13376018/183494943-40cc05c2-670a-48c5-bdfe-7214f616c8e6.png)

2. Check "Shutdown source when not visible" (or else, you will have the music FOR EVER)

![image](https://user-images.githubusercontent.com/13376018/183495747-fd839841-289d-450c-b09f-49ed2047c75c.png)

The plugin is done, now you can configure the "inside" of it if you want

# MORE SETTINGS

Basically, the first time you gonna launch the plugin, it's gonna be an ugly thing like this

![image](https://user-images.githubusercontent.com/13376018/183496299-9bb4435f-4c95-4695-8fd0-cb7022e282ac.png)

To change the settings and be able to skip tracks, you're gonna have to "interact" with the plugin

![image](https://user-images.githubusercontent.com/13376018/183496538-34a327e5-1dc6-42b0-a448-a01c115c9e41.png)

A pop-up should appear with exactly the same content, "less settings" will hide everthing except the track's title. To make it re-appear, just re-"interact" and the buttons should be visible when you hover over the pop-up !
