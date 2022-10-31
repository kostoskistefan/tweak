import os
import shutil
from pathlib import Path


def move_image_to_current_directory():
    path = os.getcwd() + '/tweak-image.png'

    if not Path(path).is_file():
        shutil.move('/tmp/tweak-image.png', path)

    else:
        i = 1
        path = os.getcwd() + '/tweak-image (%s).png' % i
        while Path(path).is_file():
            i += 1
            path = os.getcwd() + '/tweak-image (%s).png' % i

        shutil.move('/tmp/tweak-image.png', path)


def wait_until_file_is_created():
    while True:
        file = Path('/tmp/tweak-image.png')
        if file.is_file():
            break
