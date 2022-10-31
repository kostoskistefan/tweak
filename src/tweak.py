from twitter import *
from os_utils import *
from web_driver import *


def main():
    tweetUrl = input('Enter tweet url: ')
    tweetContent = get_tweet_from_url(tweetUrl)
    
    create_image(tweetContent)
    wait_until_file_is_created()
    move_image_to_current_directory()
    web_driver_cleanup()


if __name__ == '__main__':
    main()
