import instaloader
import urllib.request
import os

L = instaloader.Instaloader()

def download_pic(uname):
    # base="localhost:5000"
    # cur_dir=os.path.abspath(os.path.curdir)
    # img_loc=os.path.join(cur_dir,"caps")

    # if not(os.path.exists(img_loc)):
    #     os.mkdir(img_loc)

    # if os.path.exists(f"{img_loc}/{uname}.jpg"):
        
    #     return (f"/caps/{uname}.jpg")

    # else:

        # Obtain profile metadata
    try:
        profile = instaloader.Profile.from_username(L.context,uname)

        url=profile.get_profile_pic_url()
    except :
        url=None

    # urllib.request.urlretrieve(url,f"caps/{uname}.jpg")

    
    return url
