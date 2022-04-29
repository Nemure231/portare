## Note
<p align="justify">
You need to control the version of Portare, sometimes when the version change its fix some error/bugs or improve some layout.
</p>

1. Check the [Portare](https://github.com/Nemure231/portare) version, if there's a new version you can update it.
 <img src="https://github.com/Nemure231/portare/blob/main/docs/MT_IMG/1.png" align="center" />
<br><br>

2. You need to backup your `Data` folder, because i assume you change those files inside it. 
 <img src="https://github.com/Nemure231/portare/blob/main/docs/DATA_IMG/d3.png" align="center" />
<br><br>

3. Of course, next is backup your `index.html`.
 <img src="https://github.com/Nemure231/portare/blob/main/docs/META_IMG/m13.png" align="center" />
<br><br>

4. And also backup `vite.config.js`.
 <img src="https://github.com/Nemure231/portare/blob/main/docs/META_IMG/m17.png" align="center" />
<br><br>

5. After you backup all of those files, keep them safe in your folder, and you need to repeat [Import Portare](../main/docs/PORTARE_IMPORT.md) guide, make a new repository, replace the new repository files with your backup `Data Folder`, `index.html`, `vite.config.js`

6. Then, login into your [Netlify](https://www.netlify.com) dasboard, click your website, then in `Site setting` navbar, in `Build & Deploy`, `Continous Deployment` tabs, click `Manage Repository`, and then click `Link to different repository`. Now you need to choose your new repository from github. Done.
<img src="https://github.com/Nemure231/portare/blob/main/docs/MT_IMG/2.png" align="center" />
<br><br>

## Tips
Of course after you have a new repository, you can delete your old one if you want. Just go to your old repository, click `Setting` tabs,
scroll to bottom you wild find out a `Danger Zone` then you can click `Delete this repository`
