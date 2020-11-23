import requests
from bs4 import BeautifulSoup


class CovidStats:
    source_url = 'https://www.worldometers.info/coronavirus/'

    def __init__(self):
        self.page_content = requests.get(self.source_url).content
        self.soup = BeautifulSoup(self.page_content, 'html.parser')

    def total_cases(self):
        raw = self.get_main_counters()[0].text
        return int(raw.replace(',', ''))

    def total_deaths(self):
        raw = self.get_main_counters()[1].text
        return int(raw.replace(',', ''))

    def total_recovered(self):
        raw = self.get_main_counters()[2].text
        return int(raw.replace(',', ''))

    def get_main_counters(self):
        return self.soup.findAll('div', attrs={'class': 'maincounter-number'})