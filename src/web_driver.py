from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager


options = Options()
options.headless = True
prefs = { 'download.default_directory': '/tmp/', 'directory_upgrade': True }
options.add_experimental_option('prefs', prefs)

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)


def create_image(tweetContent):
    driver.set_window_size(1366, 768)

    driver.get('https://kostoskistefan.github.io/tweak')

    driver.find_element(By.ID, 'accountName').send_keys(tweetContent['includes']['users'][0]['name'])
    driver.find_element(By.ID, 'accountUsername').send_keys("@" + tweetContent['includes']['users'][0]['username'])
    driver.find_element(By.ID, 'accountPicture').send_keys(tweetContent['includes']['users'][0]['profile_image_url'])
    driver.find_element(By.ID, 'tweetContent').send_keys(tweetContent['data']['text'])
    driver.find_element(By.ID, 'submitButton').click()


def web_driver_cleanup():
    driver.close()
