import requests
import secrets
from urllib.parse import urljoin, urlparse

def get_tweet_from_url(url):
    id = urljoin(url, urlparse(url).path).rsplit('/', 1)[-1]

    headers = { 'Authorization': 'Bearer ' + secrets.token }

    response = requests.get('https://api.twitter.com/2/tweets/{}?expansions=author_id&user.fields=profile_image_url'.format(id), headers=headers)

    return response.json()
