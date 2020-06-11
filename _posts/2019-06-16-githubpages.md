---
title: How I set up this website
subtitle: Short answer - through GitHub Pages
layout: post
comments: true
author: Nitish Vijai
tags: blog site
---

Long answer: I used GitHub Pages to set this website up, and overall, the process took about a couple of days. GitHub Pages is a web hosting service offered by GitHub, a site where developers can collaborate with others on open-source software projects, through committing changes to code, adding feature requests, and creating wikis for each project. It's a useful productivity solution, and has helped save time in developers' and software companies' workflows.

# Intro

After a couple of failed experiments through manually messing with the CNAME and _config.yml files on the site repository, I decided to start from scratch. 

I used my Windows 10 desktop at home to initiate the website, but by default, Windows lacks the Git tools as well as the ease of publishing changes on the GitHub servers, offered through Linux and Unix based systems such as macOS. I worked around this issue by installing the Windows Subsystem for Linux, a Linux compatibility backend developed by Microsoft for use on Windows 10 and Windows Server 2016/2019 ([more info here](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux)). After downloading the Ubuntu image in the Microsoft Store, I was now able to launch an Ubuntu terminal after setting a UNIX password. Now, Git Bash was in my hands! (Keep your eyes peeled for a future post regarding the Windows Subsystem for Linux, it's coming sooner than you think it is.)

The default domain and repository of this website is located at [nitishvijai.github.io](https://www.github.com/nitishvijai/nitishvijai.github.io/). That's where I set up all the Markdown files, blog posts, and customized the themes for this website.

# Making this website look pretty

I initially went with the Cayman theme (an official theme offered by GitHub), however, due to the lack of an accessible navigation bar, I looked for custom themes that were virtually similar in style. Eventually,  I settled on the [Bulma Clean Theme](https://github.com/chrisrhymes/bulma-clean-theme) crafted by no one other than the one and only C.S. Rhymes. I wasn't a fan of the default font, however, so I changed it to the classic Segoe UI font offered on Windows systems, and I changed it by altering the $family-primary value in app.scss, located in the assets/css folder on the repository.

# Custom Domain

After creating all the blog posts, setting up favicons (icons you see in your browser tabs/windows), and customizing the website as necessary, I wasn't completely satisfied. What was the answer to that though? **Custom domains!** By setting up a custom domain, I was able to access the website through a shorter (and more technological) address. I used [Google Domains](domains.google.com) to purchase a custom domain (nitishv.dev) for around $12 per year. Next, I added a CNAME file to my repository (this tells your website that you can access it under a different name). After that, I assigned my GitHub Pages solution to the new custom domain by configuring the new domain on Google Domains. To do this, I assigned the A records for this domain to the IP addresses provided by GitHub to host on their servers. Next, I changed the CNAME record to link back to the original (nitishvijai.github.io). The edits took several minutes to take effect, and it resulted in me impatiently refreshing the site several times. After around ten minutes, nitishv.dev came to life!

# Conclusion

It definitely isn't easy. However, through proper research and interest, I think it's possible. After all, it took a couple of days from start to finish. I used the [official GitHub documentation](https://help.github.com/en/categories/github-pages-basics) to start the website as nitishvijai.github.io, and then, I looked at Zachary R Newton's [YouTube video](https://www.youtube.com/watch?v=gmxxA32yrFU) for help in configuring this custom domain.

To officially conclude, I recommend GitHub Pages for your next web-hosting solution. It's free (except for when you purchase a paid custom domain), accessible, and easy to setup (that is, if you have the proper tools/environment).

As always, if you have any questions on this guide, contact me through one of the methods on the "Contact" page. 

With that said:

Over and out,
<br/>Nitish V.

P.S. I found a useful Markdown guide [online](https://www.markdownguide.org/basic-syntax/) that helped me create new pages / blog posts easily.
