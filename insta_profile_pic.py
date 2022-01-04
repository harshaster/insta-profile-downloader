
import instaloader
import urllib.request
import os

L = instaloader.Instaloader()


uname=input("Username of instagram account: ")
cur_dir=os.path.abspath(os.path.curdir)
img_loc=os.path.join(cur_dir,"caps")

if not(os.path.exists(img_loc)):
    os.mkdir(img_loc)

if os.path.exists(f"{img_loc}/{uname}.jpg"):
    os.chdir(img_loc)
    os.startfile(f"{img_loc}/{uname}.jpg")

else:

    # Obtain profile metadata
    profile = instaloader.Profile.from_username(L.context,uname)

    url=profile.get_profile_pic_url()

    


    urllib.request.urlretrieve(url,f"caps/{uname}.jpg")



    os.chdir(img_loc)
    os.startfile(f"{img_loc}/{uname}.jpg")
